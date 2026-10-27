$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

$projectRoot = Split-Path -Parent $PSScriptRoot
$sourceHtml = Join-Path $projectRoot "Mouad Erraki _ Portfolio Génie Électrique.html"
$sourceAssets = Join-Path $projectRoot "assets"
$siteRoot = Join-Path $projectRoot "site"
$stageSource = Join-Path $sourceAssets "stages"

if (!(Test-Path -LiteralPath $sourceHtml)) {
    throw "Portfolio HTML not found: $sourceHtml"
}
if (!(Test-Path -LiteralPath (Join-Path $sourceAssets "CV_Mouad_Erraki.pdf"))) {
    throw "Portfolio CV not found in assets."
}

$null = New-Item -ItemType Directory -Force -Path $siteRoot
Copy-Item -LiteralPath $sourceHtml -Destination (Join-Path $siteRoot "index.html") -Force

$brandDestination = Join-Path $siteRoot "assets\brand"
$certificateDestination = Join-Path $siteRoot "assets\certificates"
$null = New-Item -ItemType Directory -Force -Path $brandDestination, $certificateDestination
Copy-Item -LiteralPath (Join-Path $sourceAssets "brand\wand-icon-transparent.png") -Destination $brandDestination -Force
Get-ChildItem -LiteralPath (Join-Path $sourceAssets "certificates") -File -Filter "*.pdf" |
    ForEach-Object { Copy-Item -LiteralPath $_.FullName -Destination $certificateDestination -Force }
Copy-Item -LiteralPath (Join-Path $sourceAssets "CV_Mouad_Erraki.pdf") -Destination (Join-Path $siteRoot "assets\cv.pdf") -Force

$jpegEncoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
    Where-Object { $_.MimeType -eq "image/jpeg" }
$imageFiles = Get-ChildItem -LiteralPath $stageSource -Directory |
    ForEach-Object { Get-ChildItem -LiteralPath $_.FullName -File -Filter "*.jpg" }

foreach ($file in $imageFiles) {
    $relativePath = Join-Path $file.Directory.Name $file.Name
    $destination = Join-Path $siteRoot (Join-Path "assets\stages" $relativePath)
    $null = New-Item -ItemType Directory -Force -Path (Split-Path -Parent $destination)
    $image = [System.Drawing.Image]::FromFile($file.FullName)
    try {
        $orientation = 1
        try {
            $orientation = $image.GetPropertyItem(0x0112).Value[0]
        } catch [System.ArgumentException] {
            $orientation = 1
        }

        switch ([int]$orientation) {
            2 { $image.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipX) }
            3 { $image.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
            4 { $image.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipX) }
            5 { $image.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipX) }
            6 { $image.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
            7 { $image.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipX) }
            8 { $image.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
        }

        $scale = [Math]::Min(1.0, 1600 / [double][Math]::Max($image.Width, $image.Height))
        $width = [Math]::Max(1, [int][Math]::Round($image.Width * $scale))
        $height = [Math]::Max(1, [int][Math]::Round($image.Height * $scale))
        $bitmap = New-Object System.Drawing.Bitmap -ArgumentList $width, $height
        $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
        try {
            $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
            $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
            $graphics.DrawImage($image, 0, 0, $width, $height)

            $parameters = New-Object System.Drawing.Imaging.EncoderParameters -ArgumentList 1
            try {
                $parameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter `
                    -ArgumentList ([System.Drawing.Imaging.Encoder]::Quality, [long]82)
                $bitmap.Save($destination, $jpegEncoder, $parameters)
            } finally {
                $parameters.Dispose()
            }
        } finally {
            $graphics.Dispose()
            $bitmap.Dispose()
        }
    } finally {
        $image.Dispose()
    }
}

Write-Output ("Prepared {0} optimized stage images in {1}" -f $imageFiles.Count, $siteRoot)
