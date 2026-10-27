# Mouad Erraki portfolio

The original portfolio is `Mouad Erraki _ Portfolio Génie Électrique.html`.
Run `powershell -ExecutionPolicy Bypass -File scripts/Build-PortfolioSite.ps1`
to prepare the optimized, ready-to-publish site in `site/`. GitHub Pages
deploys that directory after each push to `main`.

The original stage photographs and ZIP archives are kept out of the public
repository. The website uses resized copies of the gallery images.

For `mouad.erraki.tech`, configure a DNS CNAME record for `mouad` pointing to
`mouaderrakitech-collab.github.io`. GitHub Pages can enable HTTPS after DNS
propagates.
