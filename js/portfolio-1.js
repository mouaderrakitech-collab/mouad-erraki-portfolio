const menu=document.querySelector(".menu-btn"),nav=document.querySelector("nav");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelectorAll(".filter button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".filter button").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const f=btn.dataset.filter;
    document.querySelectorAll(".project").forEach(p=>{
      p.style.display=(f==="all"||p.dataset.cat===f)?"block":"none";
    });
  });
});

const stageImages={
  humrtec:[
    "assets/stages/humrtec/IMG_20250304_090152.jpg",
    "assets/stages/humrtec/IMG_20250304_090159.jpg",
    "assets/stages/humrtec/IMG_20250304_090211.jpg",
    "assets/stages/humrtec/IMG_20250304_090215.jpg",
    "assets/stages/humrtec/IMG_20250304_090219.jpg",
    "assets/stages/humrtec/IMG_20250304_091536.jpg",
    "assets/stages/humrtec/IMG_20250304_110935.jpg",
    "assets/stages/humrtec/IMG_20250304_110945.jpg",
    "assets/stages/humrtec/IMG_20250304_110950.jpg",
    "assets/stages/humrtec/IMG_20250304_110953.jpg",
    "assets/stages/humrtec/IMG_20250304_111003.jpg",
    "assets/stages/humrtec/IMG_20250304_113332.jpg",
    "assets/stages/humrtec/IMG_20250304_113338.jpg",
    "assets/stages/humrtec/IMG_20250304_113342.jpg",
    "assets/stages/humrtec/IMG_20250304_114536.jpg",
    "assets/stages/humrtec/IMG_20250304_114544.jpg",
    "assets/stages/humrtec/IMG_20250304_131616.jpg",
    "assets/stages/humrtec/IMG_20250305_101145.jpg",
    "assets/stages/humrtec/IMG_20250305_101153.jpg",
    "assets/stages/humrtec/IMG_20250305_110439.jpg",
    "assets/stages/humrtec/IMG_20250305_120357.jpg",
    "assets/stages/humrtec/IMG_20250305_120404.jpg",
    "assets/stages/humrtec/IMG_20250306_114338.jpg",
    "assets/stages/humrtec/IMG_20250306_114401.jpg",
    "assets/stages/humrtec/IMG_20250306_114409.jpg",
    "assets/stages/humrtec/IMG_20250306_133011.jpg",
    "assets/stages/humrtec/IMG_20250306_133019.jpg",
    "assets/stages/humrtec/IMG_20250306_133717.jpg",
    "assets/stages/humrtec/IMG_20250306_133720.jpg",
    "assets/stages/humrtec/IMG_20250306_133723.jpg",
    "assets/stages/humrtec/IMG_20250306_133725.jpg",
    "assets/stages/humrtec/IMG_20250306_133732.jpg",
    "assets/stages/humrtec/IMG_20250306_133858.jpg",
    "assets/stages/humrtec/IMG_20250306_141230.jpg",
    "assets/stages/humrtec/IMG_20250306_151613.jpg",
    "assets/stages/humrtec/IMG_20250311_125031.jpg",
    "assets/stages/humrtec/IMG_20250311_125041.jpg",
    "assets/stages/humrtec/IMG_20250311_125236.jpg",
    "assets/stages/humrtec/IMG_20250312_145028.jpg",
    "assets/stages/humrtec/IMG_20250312_161858.jpg",
    "assets/stages/humrtec/IMG_20250312_161911.jpg",
    "assets/stages/humrtec/IMG_20250312_161921.jpg",
    "assets/stages/humrtec/IMG_20250312_161925.jpg",
    "assets/stages/humrtec/IMG_20250312_161935.jpg",
    "assets/stages/humrtec/IMG_20250312_161939.jpg",
    "assets/stages/humrtec/IMG_20250312_161957.jpg",
    "assets/stages/humrtec/IMG_20250313_111948.jpg",
    "assets/stages/humrtec/IMG_20250313_112031.jpg",
    "assets/stages/humrtec/IMG_20250314_143632.jpg",
    "assets/stages/humrtec/IMG_20250315_100607.jpg",
    "assets/stages/humrtec/IMG_20250315_100613.jpg",
    "assets/stages/humrtec/IMG_20250315_100619.jpg",
    "assets/stages/humrtec/IMG_20250315_100627.jpg",
    "assets/stages/humrtec/IMG_20250315_100639.jpg",
    "assets/stages/humrtec/IMG_20250315_100644.jpg",
    "assets/stages/humrtec/IMG_20250315_100824.jpg",
    "assets/stages/humrtec/IMG_20250315_100830.jpg",
    "assets/stages/humrtec/IMG_20250315_100833.jpg",
    "assets/stages/humrtec/IMG_20250319_134555.jpg",
    "assets/stages/humrtec/IMG_20250319_134715.jpg",
    "assets/stages/humrtec/IMG_20250321_100850.jpg",
    "assets/stages/humrtec/IMG_20250321_100857.jpg",
    "assets/stages/humrtec/IMG_20250322_152630.jpg",
    "assets/stages/humrtec/IMG_20250322_152632.jpg",
    "assets/stages/humrtec/IMG_20250324_115623.jpg",
    "assets/stages/humrtec/IMG_20250325_104007.jpg",
    "assets/stages/humrtec/IMG_20250325_163807.jpg",
    "assets/stages/humrtec/IMG_20250325_163812.jpg",
    "assets/stages/humrtec/IMG_20250327_132720.jpg",
    "assets/stages/humrtec/IMG_20250327_132749.jpg",
    "assets/stages/humrtec/IMG_20250327_132751.jpg",
    "assets/stages/humrtec/IMG_20250328_130319.jpg",
    "assets/stages/humrtec/IMG_20250328_130436.jpg",
    "assets/stages/humrtec/IMG_20250328_130538.jpg",
    "assets/stages/humrtec/IMG_20250328_130541.jpg",
    "assets/stages/humrtec/IMG_20250328_130543.jpg"
  ],
  hydral:[
    "assets/stages/hydral/IMG_20260204_122938.jpg",
    "assets/stages/hydral/IMG_20260204_122948.jpg",
    "assets/stages/hydral/IMG_20260204_123110.jpg",
    "assets/stages/hydral/IMG_20260204_123137.jpg",
    "assets/stages/hydral/IMG_20260204_123233.jpg",
    "assets/stages/hydral/IMG_20260204_131722.jpg",
    "assets/stages/hydral/IMG_20260204_142218.jpg",
    "assets/stages/hydral/IMG_20260204_142224.jpg",
    "assets/stages/hydral/IMG_20260204_142227.jpg",
    "assets/stages/hydral/IMG_20260204_142232.jpg",
    "assets/stages/hydral/IMG_20260204_145852.jpg",
    "assets/stages/hydral/IMG_20260204_145855.jpg",
    "assets/stages/hydral/IMG_20260204_145857.jpg",
    "assets/stages/hydral/IMG_20260205_105137.jpg",
    "assets/stages/hydral/IMG_20260205_105151.jpg",
    "assets/stages/hydral/IMG_20260209_103036.jpg",
    "assets/stages/hydral/IMG_20260209_103043.jpg",
    "assets/stages/hydral/IMG_20260209_110709.jpg",
    "assets/stages/hydral/IMG_20260209_110724.jpg",
    "assets/stages/hydral/IMG_20260209_110730.jpg",
    "assets/stages/hydral/IMG_20260209_110738.jpg",
    "assets/stages/hydral/IMG_20260209_110742.jpg",
    "assets/stages/hydral/IMG_20260209_111022.jpg",
    "assets/stages/hydral/IMG_20260209_111028.jpg",
    "assets/stages/hydral/IMG_20260209_173235.jpg",
    "assets/stages/hydral/IMG_20260209_173243.jpg",
    "assets/stages/hydral/IMG_20260209_173245.jpg",
    "assets/stages/hydral/IMG_20260216_112024.jpg",
    "assets/stages/hydral/IMG_20260216_114730.jpg",
    "assets/stages/hydral/IMG_20260216_115030.jpg",
    "assets/stages/hydral/IMG_20260216_115057.jpg",
    "assets/stages/hydral/IMG_20260216_115112.jpg",
    "assets/stages/hydral/IMG_20260216_115122.jpg",
    "assets/stages/hydral/IMG_20260216_115131.jpg",
    "assets/stages/hydral/IMG_20260216_115137.jpg",
    "assets/stages/hydral/IMG_20260217_111636.jpg",
    "assets/stages/hydral/IMG_20260217_111639.jpg",
    "assets/stages/hydral/IMG_20260217_111642.jpg",
    "assets/stages/hydral/IMG_20260217_120509.jpg",
    "assets/stages/hydral/IMG_20260217_120512.jpg",
    "assets/stages/hydral/IMG_20260217_120514.jpg",
    "assets/stages/hydral/IMG_20260217_120534.jpg",
    "assets/stages/hydral/IMG_20260217_120538.jpg",
    "assets/stages/hydral/IMG_20260217_120546.jpg",
    "assets/stages/hydral/IMG_20260217_120606.jpg",
    "assets/stages/hydral/IMG_20260217_121034.jpg",
    "assets/stages/hydral/IMG_20260217_141112.jpg",
    "assets/stages/hydral/IMG_20260217_153356.jpg",
    "assets/stages/hydral/IMG_20260218_144601.jpg",
    "assets/stages/hydral/IMG_20260218_155732.jpg",
    "assets/stages/hydral/IMG_20260218_155741.jpg",
    "assets/stages/hydral/IMG_20260219_111621.jpg",
    "assets/stages/hydral/IMG_20260219_111624.jpg",
    "assets/stages/hydral/IMG_20260219_111910.jpg",
    "assets/stages/hydral/IMG_20260219_111913.jpg",
    "assets/stages/hydral/IMG_20260219_114403.jpg",
    "assets/stages/hydral/IMG_20260219_114455.jpg",
    "assets/stages/hydral/IMG_20260219_115745.jpg",
    "assets/stages/hydral/IMG_20260219_131422.jpg",
    "assets/stages/hydral/IMG_20260220_173656.jpg",
    "assets/stages/hydral/IMG_20260220_173712.jpg",
    "assets/stages/hydral/IMG_20260220_173718.jpg",
    "assets/stages/hydral/IMG_20260220_173725.jpg",
    "assets/stages/hydral/IMG_20260220_173735.jpg",
    "assets/stages/hydral/IMG_20260220_173756.jpg",
    "assets/stages/hydral/IMG_20260220_173759.jpg",
    "assets/stages/hydral/IMG_20260220_173801.jpg",
    "assets/stages/hydral/IMG_20260220_173806.jpg",
    "assets/stages/hydral/IMG_20260220_173811.jpg",
    "assets/stages/hydral/IMG_20260220_173815.jpg",
    "assets/stages/hydral/IMG_20260226_110803.jpg",
    "assets/stages/hydral/IMG_20260226_110806.jpg",
    "assets/stages/hydral/IMG_20260226_110808.jpg",
    "assets/stages/hydral/IMG_20260226_110809.jpg",
    "assets/stages/hydral/IMG_20260226_110810.jpg"
  ],
  verdasun:[
    "assets/stages/verdasun/IMG_20260421_120701.jpg",
    "assets/stages/verdasun/IMG_20260421_120704.jpg",
    "assets/stages/verdasun/IMG_20260421_120710.jpg",
    "assets/stages/verdasun/IMG_20260421_120713.jpg",
    "assets/stages/verdasun/IMG_20260421_120715.jpg",
    "assets/stages/verdasun/IMG_20260421_120718.jpg",
    "assets/stages/verdasun/IMG_20260421_120724.jpg",
    "assets/stages/verdasun/IMG_20260421_121755.jpg",
    "assets/stages/verdasun/IMG_20260421_152416.jpg",
    "assets/stages/verdasun/IMG_20260421_152419.jpg",
    "assets/stages/verdasun/IMG_20260421_160124.jpg",
    "assets/stages/verdasun/IMG_20260421_160125.jpg",
    "assets/stages/verdasun/IMG_20260421_160135.jpg",
    "assets/stages/verdasun/IMG_20260422_133457.jpg",
    "assets/stages/verdasun/IMG_20260422_133458.jpg",
    "assets/stages/verdasun/IMG_20260422_155704.jpg",
    "assets/stages/verdasun/IMG_20260422_155709.jpg",
    "assets/stages/verdasun/IMG_20260422_155714.jpg",
    "assets/stages/verdasun/IMG_20260422_155723.jpg",
    "assets/stages/verdasun/IMG_20260422_155741.jpg",
    "assets/stages/verdasun/IMG_20260422_155755.jpg",
    "assets/stages/verdasun/IMG_20260422_155844.jpg",
    "assets/stages/verdasun/IMG_20260422_155958.jpg",
    "assets/stages/verdasun/IMG_20260422_160003.jpg",
    "assets/stages/verdasun/IMG_20260422_160204.jpg",
    "assets/stages/verdasun/IMG_20260422_160633.jpg",
    "assets/stages/verdasun/IMG_20260422_160636.jpg",
    "assets/stages/verdasun/IMG_20260422_160730.jpg",
    "assets/stages/verdasun/IMG_20260423_115847.jpg",
    "assets/stages/verdasun/IMG_20260423_115857.jpg",
    "assets/stages/verdasun/IMG_20260423_115906.jpg",
    "assets/stages/verdasun/IMG_20260423_120132.jpg",
    "assets/stages/verdasun/IMG_20260423_120136.jpg",
    "assets/stages/verdasun/IMG_20260423_140435.jpg",
    "assets/stages/verdasun/IMG_20260423_152206.jpg",
    "assets/stages/verdasun/IMG_20260424_094925.jpg",
    "assets/stages/verdasun/IMG_20260424_094929.jpg",
    "assets/stages/verdasun/IMG_20260424_094932.jpg",
    "assets/stages/verdasun/IMG_20260424_094935.jpg",
    "assets/stages/verdasun/IMG_20260424_100446.jpg",
    "assets/stages/verdasun/IMG_20260424_100513.jpg",
    "assets/stages/verdasun/IMG_20260424_120500.jpg",
    "assets/stages/verdasun/IMG_20260424_120503.jpg",
    "assets/stages/verdasun/IMG_20260424_120524.jpg",
    "assets/stages/verdasun/IMG_20260424_120537.jpg",
    "assets/stages/verdasun/IMG_20260425_133105.jpg",
    "assets/stages/verdasun/IMG_20260425_133110.jpg",
    "assets/stages/verdasun/IMG_20260425_133113.jpg",
    "assets/stages/verdasun/IMG_20260425_133117.jpg",
    "assets/stages/verdasun/IMG_20260427_121129.jpg",
    "assets/stages/verdasun/IMG_20260427_121141.jpg",
    "assets/stages/verdasun/IMG_20260427_122008.jpg",
    "assets/stages/verdasun/IMG_20260427_122019.jpg",
    "assets/stages/verdasun/IMG_20260427_122022.jpg",
    "assets/stages/verdasun/IMG_20260427_130432.jpg",
    "assets/stages/verdasun/IMG_20260427_130439.jpg",
    "assets/stages/verdasun/IMG_20260427_130446.jpg",
    "assets/stages/verdasun/IMG_20260427_130455.jpg",
    "assets/stages/verdasun/IMG_20260427_130506.jpg",
    "assets/stages/verdasun/IMG_20260428_112817.jpg",
    "assets/stages/verdasun/IMG_20260428_112820.jpg"
  ]
};

document.querySelectorAll(".company-slider").forEach(slider=>{
  const company=slider.dataset.company;
  const track=slider.querySelector(".slider-track");
  const images=stageImages[company] || [];
  let index=0, autoTimer=null;

  track.innerHTML = images.map((src,i)=>`<img src="${src}" alt="${company} image ${i+1}" loading="lazy">`).join("");
  if(!images.length){ track.innerHTML='<div class="slider-empty">Aucune image</div>'; return; }

  const controls=document.createElement("div");
  controls.className="slider-controls";
  controls.innerHTML='<button class="gallery-btn prev" aria-label="Précédent">&#8249;</button><div class="slider-dots"></div><button class="gallery-btn next" aria-label="Suivant">&#8250;</button>';
  slider.appendChild(controls);
  const dotsBox=controls.querySelector(".slider-dots");

  let slides=[...track.children];
  const MAXDOTS=10;

  const updateSlider=(n)=>{
    index=(n+slides.length)%slides.length;
    track.style.transform=`translateX(-${index*100}%)`;
    const count=dotsBox.children.length;
    [...dotsBox.children].forEach((d,i)=>d.classList.toggle("active",i===Math.floor(index*count/slides.length)));
  };
  const restartAuto=()=>{clearInterval(autoTimer);autoTimer=setInterval(()=>updateSlider(index+1),3500);};

  const buildDots=()=>{
    const count=Math.min(MAXDOTS,slides.length);
    dotsBox.innerHTML="";
    for(let i=0;i<count;i++){
      const b=document.createElement("button");
      b.className="slider-dot";
      b.setAttribute("aria-label","Image "+(i+1));
      b.addEventListener("click",()=>{updateSlider(Math.floor(i*slides.length/count));restartAuto();});
      dotsBox.appendChild(b);
    }
  };

  // images li ma-tl3ouch (404) kaytm7ou, bach ma-ybqach fra8
  slides.forEach(img=>img.addEventListener("error",()=>{
    img.remove();
    slides=[...track.children].filter(el=>el.tagName==="IMG");
    if(!slides.length){
      track.innerHTML='<div class="slider-empty">Images introuvables — vérifiez le dossier assets/stages/'+company+'/</div>';
      controls.remove(); clearInterval(autoTimer); return;
    }
    buildDots(); updateSlider(index);
  }));

  controls.querySelector(".prev").addEventListener("click",()=>{updateSlider(index-1);restartAuto();});
  controls.querySelector(".next").addEventListener("click",()=>{updateSlider(index+1);restartAuto();});
  slider.addEventListener("mouseenter",()=>clearInterval(autoTimer));
  slider.addEventListener("mouseleave",restartAuto);

  buildDots(); updateSlider(0); restartAuto();
});

async function sendMail(e){
  e.preventDefault();
  const form=document.getElementById("contact-form");
  const button=document.getElementById("contact-submit");
  const status=document.getElementById("contact-status");
  if(!form.reportValidity()) return;
  if(form.elements["_honey"].value) return;
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const message=document.getElementById("message").value.trim();
  if(!name || !email || !message){ status.textContent="Veuillez remplir tous les champs."; return; }
  button.disabled=true;
  button.textContent="Envoi en cours…";
  status.textContent="Envoi de votre message…";
  const controller=new AbortController();
  const timeout=setTimeout(()=>controller.abort(),15000);
  try {
    const payload=new FormData();
    payload.append("name",name);
    payload.append("email",email);
    payload.append("message",message);
    payload.append("_subject","Nouveau message du portfolio — "+name);
    payload.append("_captcha","true");
    payload.append("_template","table");
    const response=await fetch("https://formsubmit.co/ajax/mouad.erraki.tech@gmail.com",{
      method:"POST",body:payload,headers:{"Accept":"application/json"},signal:controller.signal
    });
    const data=await response.json();
    if(!response.ok || data.success===false || data.success==="false") throw new Error("delivery_error");
    status.textContent="Message transmis au service d'envoi. Si c'est votre premier message, veuillez activer FormSubmit depuis l'email de confirmation reçu à mouad.erraki.tech@gmail.com.";
    form.reset();
  } catch(error) {
    status.textContent="L'envoi n'a pas abouti. Veuillez réessayer ou écrire directement à mouad.erraki.tech@gmail.com.";
  } finally {
    clearTimeout(timeout);
    button.disabled=false;
    button.textContent="Envoyer";
  }
}

/* Animated circuit-board background — electrical engineering themed */
(function(){
  const canvas=document.getElementById("circuit-bg");
  if(!canvas) return;
  const ctx=canvas.getContext("2d");
  const hero=canvas.closest(".hero");
  const reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let W,H,nodes=[],traces=[],pulses=[],dpr=Math.min(window.devicePixelRatio||1,2);

  function resize(){
    W=hero.clientWidth; H=hero.clientHeight;
    canvas.width=W*dpr; canvas.height=H*dpr;
    canvas.style.width=W+"px"; canvas.style.height=H+"px";
    ctx.setTransform(dpr,0,0,dpr,0,0);
    buildGrid();
  }

  function buildGrid(){
    nodes=[]; traces=[];
    const cols=Math.max(6,Math.round(W/130));
    const rows=Math.max(4,Math.round(H/130));
    const cw=W/cols, ch=H/rows;
    for(let r=0;r<=rows;r++){
      for(let c=0;c<=cols;c++){
        const jitter=18;
        nodes.push({
          x:c*cw+(Math.random()*jitter-jitter/2),
          y:r*ch+(Math.random()*jitter-jitter/2),
          r:Math.random()<0.14?(1.6+Math.random()*1.6):0
        });
      }
    }
    const cols1=cols+1;
    for(let r=0;r<=rows;r++){
      for(let c=0;c<=cols;c++){
        const i=r*cols1+c;
        if(c<cols && Math.random()<0.62) traces.push([i,i+1]);
        if(r<rows && Math.random()<0.62) traces.push([i,i+cols1]);
      }
    }
    pulses=[];
    const pulseCount=Math.max(6,Math.round(traces.length*0.09));
    for(let i=0;i<pulseCount;i++) spawnPulse();
  }

  function spawnPulse(){
    if(!traces.length) return;
    const t=traces[Math.floor(Math.random()*traces.length)];
    pulses.push({trace:t,t:Math.random(),speed:0.0028+Math.random()*0.0035});
  }

  function draw(){
    ctx.clearRect(0,0,W,H);

    ctx.strokeStyle="rgba(85,169,255,0.16)";
    ctx.lineWidth=1;
    ctx.beginPath();
    traces.forEach(([a,b])=>{
      const na=nodes[a], nb=nodes[b];
      ctx.moveTo(na.x,na.y); ctx.lineTo(nb.x,nb.y);
    });
    ctx.stroke();

    nodes.forEach(n=>{
      if(n.r>0){
        ctx.beginPath();
        ctx.fillStyle="rgba(85,169,255,0.35)";
        ctx.arc(n.x,n.y,n.r,0,Math.PI*2);
        ctx.fill();
      }
    });

    pulses.forEach(p=>{
      const na=nodes[p.trace[0]], nb=nodes[p.trace[1]];
      const x=na.x+(nb.x-na.x)*p.t, y=na.y+(nb.y-na.y)*p.t;
      const grad=ctx.createRadialGradient(x,y,0,x,y,7);
      grad.addColorStop(0,"rgba(120,190,255,0.95)");
      grad.addColorStop(1,"rgba(120,190,255,0)");
      ctx.beginPath();
      ctx.fillStyle=grad;
      ctx.arc(x,y,7,0,Math.PI*2);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle="#bfe0ff";
      ctx.arc(x,y,1.6,0,Math.PI*2);
      ctx.fill();

      p.t+=p.speed;
      if(p.t>=1){
        pulses.splice(pulses.indexOf(p),1);
        spawnPulse();
      }
    });
  }

  let raf;
  function loop(){ draw(); raf=requestAnimationFrame(loop); }

  resize();
  window.addEventListener("resize",()=>{
    cancelAnimationFrame(raf);
    resize();
    if(!reduceMotion) raf=requestAnimationFrame(loop); else draw();
  });

  if(reduceMotion){ draw(); } else { loop(); }
})();

/* ===== LEVEL UP: typing, parallax, progress ===== */
(()=>{
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const t=document.querySelector(".typing");
  if(t&&!reduce){
    const words=[t.textContent.trim(),"Maintenance industrielle","Stages en ascenseurs","Installations photovoltaïques"];
    let w=0,c=0,del=false;
    const tick=()=>{
      const word=words[w];
      t.textContent=word.slice(0,c);
      if(!del&&c===word.length){del=true;return setTimeout(tick,1800);}
      if(del&&c===0){del=false;w=(w+1)%words.length;}
      c+=del?-1:1;
      setTimeout(tick,del?35:70);
    };
    tick();
  }
  const hero=document.querySelector(".hero"),sc=document.getElementById("scepter");
  if(hero&&sc&&!reduce){
    hero.addEventListener("mousemove",e=>{
      const r=hero.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      sc.style.transform=`perspective(1000px) rotateY(${x*10}deg) rotateX(${-y*8}deg)`;
    });
    hero.addEventListener("mouseleave",()=>sc.style.transform="");
  }
  const bar=document.createElement("div");bar.id="progress";document.body.appendChild(bar);
  const hd=document.querySelector(".header");
  addEventListener("scroll",()=>{
    const m=document.documentElement.scrollHeight-innerHeight;
    bar.style.width=(m>0?scrollY/m*100:0)+"%";
    hd&&hd.classList.toggle("small",scrollY>40);
  },{passive:true});
})();

/* ===== DESIGN LEVEL 2: spotlight, counters, bars, cursor, avatar fallback ===== */
(()=>{
  const sel=".skill,.soft,.project,.edu,.about-card,.contact-card,.company-card,.metric-card";
  document.addEventListener("mousemove",e=>{
    const c=e.target.closest&&e.target.closest(sel);
    if(c){const r=c.getBoundingClientRect();c.style.setProperty("--mx",(e.clientX-r.left)+"px");c.style.setProperty("--my",(e.clientY-r.top)+"px");}
  },{passive:true});

  const glow=document.createElement("div");glow.className="cursor-glow";document.body.appendChild(glow);
  addEventListener("mousemove",e=>{glow.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;},{passive:true});

  const io=new IntersectionObserver(es=>es.forEach(en=>{
    if(!en.isIntersecting)return;
    const el=en.target;io.unobserve(el);
    if(el.classList.contains("bar"))el.classList.add("in");
    else{
      const m=el.textContent.match(/\d+/);if(!m)return;
      const n=+m[0],suffix=el.textContent.replace(m[0],""),t0=performance.now();
      const step=t=>{const p=Math.min(1,(t-t0)/1400);el.textContent=Math.round(n*(1-Math.pow(1-p,3)))+suffix;if(p<1)requestAnimationFrame(step);};
      requestAnimationFrame(step);
    }
  }),{threshold:.4});
  document.querySelectorAll(".bar,.metric-card span").forEach(el=>io.observe(el));

  document.querySelectorAll("img.profile-photo").forEach(img=>{
    const fb=()=>{const d=document.createElement("div");d.className="avatar";d.textContent="ME";img.replaceWith(d);};
    img.addEventListener("error",fb);if(img.complete&&!img.naturalWidth)fb();
  });
})();

/* ===== PRO polish: scrollspy, back-to-top, a11y ===== */
(()=>{
  const mb=document.querySelector(".menu-btn");if(mb&&!mb.getAttribute("aria-label"))mb.setAttribute("aria-label","Menu");
  const links=[...document.querySelectorAll(".header nav a[href^='#']")];
  const secs=links.map(a=>document.querySelector(a.getAttribute("href"))).filter(Boolean);
  const top=document.querySelector(".to-top");
  const onScroll=()=>{
    let cur=null;secs.forEach(s=>{if(s.getBoundingClientRect().top<innerHeight*.4)cur=s.id;});
    links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+cur));
    top&&top.classList.toggle("show",scrollY>700);
  };
  addEventListener("scroll",onScroll,{passive:true});onScroll();
  top&&top.addEventListener("click",e=>{e.preventDefault();scrollTo({top:0,behavior:"smooth"});});
  links.forEach(a=>a.addEventListener("click",()=>document.querySelector("nav")?.classList.remove("open")));
})();

/* ===== Parcours animé: déclenche quand visible ===== */
(()=>{
  const j=document.querySelector(".journey");if(!j)return;
  new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){j.classList.add("in");o.disconnect();}}),{threshold:.35}).observe(j);
})();

/* ===== Animated site-wide background: courant électrique + étincelles ===== */
(()=>{
  const cv=document.createElement("canvas");cv.id="bg-anim";cv.setAttribute("aria-hidden","true");document.body.prepend(cv);
  const ctx=cv.getContext("2d"),reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  let W,H,dpr,paths=[],sparks=[],tags=[],spawnT=0,last=performance.now(),raf;
  const LABELS=[
    {t:"FORMATION · OFPPT — Électricité industrielle",c:"g"},{t:"DIPLÔME · Technicien CFMMER 2025",c:"g"},{t:"SCHÉMAS · Puissance & commande",c:"b"},
    {t:"STAGE · HUMERTEC — Ascenseurs",c:"b"},{t:"STAGE · HYDRAL — Diagnostic de pannes",c:"b"},{t:"STAGE · VERDASUN — Photovoltaïque",c:"g"},
    {t:"RACCORDEMENT · Armoires électriques",c:"b"},{t:"TEST · Sécurité cabine",c:"g"},{t:"MISE EN SERVICE · Pompe solaire",c:"g"},
    {t:"CÂBLAGE · Modules photovoltaïques",c:"b"},{t:"BOUTONS D'APPEL · Infrastructure",c:"b"},{t:"MAINTENANCE · Ascenseurs Otis",c:"g"}
  ];
  const G=90,rnd=(a,b)=>a+Math.random()*(b-a);
  function build(){
    dpr=Math.min(devicePixelRatio||1,1.5);W=innerWidth;H=innerHeight;
    cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
    const cols=Math.ceil(W/G),rows=Math.ceil(H/G),n=Math.round(cols*rows/9);
    paths=[];tags=[];spawnT=0;
    for(let i=0;i<n;i++){
      let x=Math.floor(rnd(0,cols+1))*G,y=Math.floor(rnd(0,rows+1))*G,horiz=Math.random()<.5;
      const pts=[[x,y]],segs=Math.floor(rnd(3,8));
      for(let s=0;s<segs;s++){
        const len=Math.floor(rnd(1,5))*G*(Math.random()<.5?-1:1);
        if(horiz)x+=len;else y+=len;
        pts.push([x,y]);horiz=!horiz;
      }
      const cum=[0];for(let k=1;k<pts.length;k++)cum.push(cum[k-1]+Math.hypot(pts[k][0]-pts[k-1][0],pts[k][1]-pts[k-1][1]));
      paths.push({pts,cum,total:cum[cum.length-1],t:rnd(0,cum[cum.length-1]),v:rnd(60,140),gold:Math.random()<.35});
    }
    sparks=Array.from({length:Math.round(W*H/26000)},()=>({x:rnd(0,W),y:rnd(0,H),r:rnd(.8,2),v:rnd(8,26),ph:rnd(0,6.28)}));
  }
  function at(p,d){
    d=((d%p.total)+p.total)%p.total;let k=1;while(p.cum[k]<d)k++;
    const f=(d-p.cum[k-1])/(p.cum[k]-p.cum[k-1]||1),a=p.pts[k-1],b=p.pts[k];
    return [a[0]+(b[0]-a[0])*f,a[1]+(b[1]-a[1])*f];
  }
  function draw(now){
    if(document.body.classList.contains('has3d')){ctx.clearRect(0,0,W,H);return;}
    const dt=Math.min(.05,(now-last)/1000);last=now;
    const light=document.body.classList.contains("light"),k=light?.55:1;
    ctx.clearRect(0,0,W,H);
    ctx.lineWidth=1;ctx.strokeStyle=`rgba(85,169,255,${.15*k})`;
    paths.forEach(p=>{ctx.beginPath();p.pts.forEach((q,i)=>i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1]));ctx.stroke();});
    ctx.fillStyle=`rgba(85,169,255,${.22*k})`;
    paths.forEach(p=>{for(let i=1;i<p.pts.length-1;i++){ctx.beginPath();ctx.arc(p.pts[i][0],p.pts[i][1],2,0,6.28);ctx.fill();}});
    paths.forEach(p=>{
      if(!reduce)p.t+=p.v*dt;
      const c=p.gold?"255,196,58":"85,169,255";
      for(let i=0;i<14;i++){
        const [x,y]=at(p,p.t-i*7),a=(1-i/14)*.55*k;
        ctx.fillStyle=`rgba(${c},${a})`;ctx.beginPath();ctx.arc(x,y,i?1.6:2.6,0,6.28);ctx.fill();
      }
      const [hx,hy]=at(p,p.t);const g=ctx.createRadialGradient(hx,hy,0,hx,hy,16);
      g.addColorStop(0,`rgba(${c},${.35*k})`);g.addColorStop(1,`rgba(${c},0)`);ctx.fillStyle=g;ctx.fillRect(hx-16,hy-16,32,32);
    });
    sparks.forEach(s=>{
      if(!reduce){s.y-=s.v*dt;s.ph+=dt*2;if(s.y<-5){s.y=H+5;s.x=rnd(0,W);}}
      ctx.fillStyle=`rgba(255,196,58,${(.25+.25*Math.sin(s.ph))*k})`;ctx.beginPath();ctx.arc(s.x+Math.sin(s.ph)*6,s.y,s.r,0,6.28);ctx.fill();
    });

    /* --- étiquettes HUD: formation / stages / actions, animées en arrière-plan --- */
    spawnT-=dt;
    if(false&&spawnT<=0&&tags.length<(W<700?3:6)){
      spawnT=.7;
      const L=LABELS[Math.floor(Math.random()*LABELS.length)],p=paths[Math.floor(Math.random()*paths.length)];
      if(p&&p.pts.length>2){
        const q=p.pts[1+Math.floor(Math.random()*(p.pts.length-2))],left=q[0]>W*.6;
        const ew=L.t.length*6.9+22,bx=left?q[0]-34-ew:q[0]+34,by=q[1]-44;
        const clash=tags.some(o=>bx<o.bx+o.ew+30&&bx+ew+30>o.bx&&Math.abs(by-o.by)<56)||bx<8||bx+ew>W-8||by<70||by>H-40;
        if(!clash)tags.push({x:q[0],y:q[1],left,L,bx,by,ew,age:reduce?3:0});
      }
    }
    ctx.font="600 11px 'Space Grotesk',ui-monospace,monospace";ctx.textBaseline="middle";
    tags=tags.filter(g=>{
      g.age+=reduce?0:dt;
      const typeT=g.L.t.length/26,holdT=4.2,fadeT=.9;
      if(g.age>typeT+holdT+fadeT)return false;
      const fade=g.age>typeT+holdT?1-(g.age-typeT-holdT)/fadeT:Math.min(1,g.age/.3),A=fade*(light?.6:.8);
      const col=g.L.c==="g"?"255,196,58":"85,169,255";
      const txt=g.L.t.slice(0,Math.floor(Math.min(g.age,typeT)*26)),prog=Math.max(0,Math.min(1,(g.age-typeT)/holdT));
      const w=ctx.measureText(g.L.t).width+22,h=30,dx=g.left?-34-w:34,bx=g.x+dx,by=g.y-44;
      // anneau d'activation sur le nœud
      const ring=(g.age*1.4)%1;ctx.strokeStyle=`rgba(${col},${(1-ring)*.5*fade*(light?.6:1)})`;ctx.lineWidth=1.5;
      ctx.beginPath();ctx.arc(g.x,g.y,4+ring*18,0,6.28);ctx.stroke();
      ctx.fillStyle=`rgba(${col},${A})`;ctx.beginPath();ctx.arc(g.x,g.y,3.5,0,6.28);ctx.fill();
      // ligne de rappel
      ctx.strokeStyle=`rgba(${col},${A*.6})`;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(g.x,g.y);ctx.lineTo(g.x+(g.left?-34:34)*.6,by+h/2+(g.y-by-h/2)*.0);ctx.lineTo(g.left?bx+w:bx,by+h/2);ctx.stroke();
      // pastille
      ctx.fillStyle=light?`rgba(255,255,255,${A*.85})`:`rgba(8,11,16,${A*.7})`;ctx.strokeStyle=`rgba(${col},${A*.7})`;
      ctx.beginPath();ctx.roundRect?ctx.roundRect(bx,by,w,h,8):ctx.rect(bx,by,w,h);ctx.fill();ctx.stroke();
      ctx.fillStyle=light?`rgba(20,30,45,${A})`:`rgba(${col==="255,196,58"?"255,222,140":"190,222,255"},${A})`;
      ctx.fillText(txt,bx+11,by+10);
      // barre de progression (action en cours) puis ✓
      ctx.fillStyle=`rgba(${col},${A*.25})`;ctx.fillRect(bx+11,by+h-9,w-22,3);
      ctx.fillStyle=`rgba(${col},${A})`;ctx.fillRect(bx+11,by+h-9,(w-22)*prog,3);
      if(prog>=1){ctx.fillStyle=`rgba(${col},${A})`;ctx.fillText("✓",bx+w-16,by+10);}
      return true;
    });
    raf=requestAnimationFrame(draw);
  }
  build();raf=requestAnimationFrame(draw);
  let rt;addEventListener("resize",()=>{clearTimeout(rt);rt=setTimeout(build,200);});
  document.addEventListener("visibilitychange",()=>{cancelAnimationFrame(raf);if(!document.hidden){last=performance.now();raf=requestAnimationFrame(draw);}});
})();

/* ===== FOND 3D (Three.js): ascenseur · photovoltaïque · armoire · moteur — la caméra suit le scroll ===== */
(()=>{
  if(!window.THREE)return;
  let R;try{R=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:"low-power"});}catch(e){return;}
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const BLUE=0x55a9ff,GOLD=0xffc43a,DARK=0x0c1420,V=(x,y,z)=>new THREE.Vector3(x,y,z);
  R.setPixelRatio(Math.min(devicePixelRatio||1,innerWidth>900?1.6:1.15));R.outputEncoding=THREE.sRGBEncoding;R.toneMapping=THREE.ACESFilmicToneMapping;R.toneMappingExposure=.92;R.shadowMap.enabled=true;R.shadowMap.type=THREE.PCFSoftShadowMap;
  const cv=R.domElement;cv.id="bg3d";cv.setAttribute("aria-hidden","true");document.body.prepend(cv);document.body.classList.add("has3d");const shade=document.createElement("div");shade.id="bg-shade";shade.setAttribute("aria-hidden","true");cv.after(shade);
  const scene=new THREE.Scene();scene.fog=new THREE.FogExp2(0x080b10,.017);
  const cam=new THREE.PerspectiveCamera(38,1,.1,220);
  const hemi=new THREE.HemisphereLight(0x9fb7d6,0x1a1d22,.4);scene.add(hemi);
  const dl=new THREE.DirectionalLight(0xfff0d8,1.8);dl.castShadow=true;dl.shadow.mapSize.set(innerWidth>900?1536:1024,innerWidth>900?1536:1024);dl.shadow.bias=-.0004;
  Object.assign(dl.shadow.camera,{left:-20,right:20,top:20,bottom:-20,near:1,far:90});scene.add(dl,dl.target);
  const fill=new THREE.PointLight(0x5aa8ff,.55,60);scene.add(fill);
  (()=>{const pm=new THREE.PMREMGenerator(R),env=new THREE.Scene();env.background=new THREE.Color(0x070d16);
    const sb=(w,h,x,y,z,col,k)=>{const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:new THREE.Color(col).multiplyScalar(k),side:THREE.DoubleSide}));m.position.set(x,y,z);m.lookAt(0,0,0);env.add(m);};
    sb(26,10,0,15,0,0xffffff,4);sb(10,12,-15,6,7,0xffd7a0,3);sb(14,8,15,5,-9,0x8fc0ff,2.6);sb(18,5,0,3,-16,0xffffff,1.4);
    scene.environment=pm.fromScene(env,.04).texture;pm.dispose();})();
  const mat=(c,o)=>{
    if(o<=.2)return new THREE.MeshStandardMaterial({color:0x9db8d4,transparent:true,opacity:.16,roughness:.08,metalness:.1,envMapIntensity:1.6,depthWrite:false});
    if(c===BLUE)return new THREE.MeshStandardMaterial({color:0x8b98a6,roughness:.5,metalness:.55,envMapIntensity:1.2});
    if(c===GOLD)return new THREE.MeshStandardMaterial({color:0xd6a23c,roughness:.38,metalness:.72,envMapIntensity:1.3});
    return new THREE.MeshStandardMaterial({color:c,roughness:.52,metalness:.28,envMapIntensity:1.1});
  };
  const lm=(c,o=.9)=>new THREE.LineBasicMaterial({color:c,transparent:true,opacity:o});
  const addEdges=(m)=>m;
  const place=(g,m,x,y,z,o)=>{m.position.set(x,y,z);if(o>.2){m.castShadow=true;m.receiveShadow=true;}g.add(m);return m;};
  const box=(g,w,h,d,x,y,z,c=BLUE,o=1)=>place(g,new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat(c,o)),x,y,z,o);
  const cyl=(g,r,h,x,y,z,c=BLUE,o=1,seg=24)=>place(g,new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,seg),mat(c,o)),x,y,z,o);
  const led=(g,x,y,z,c=GOLD,r=.09)=>{const m=new THREE.Mesh(new THREE.SphereGeometry(r,10,10),new THREE.MeshBasicMaterial({color:new THREE.Color(c).multiplyScalar(2.6),transparent:true}));m.position.set(x,y,z);g.add(m);return m;};
  const GL=(g,w,h,d,x,y,z,c,k=2.6)=>{const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshBasicMaterial({color:new THREE.Color(c).multiplyScalar(k)}));m.position.set(x,y,z);g.add(m);return m;};
  const glowTex=(()=>{const c=document.createElement("canvas");c.width=c.height=128;const x=c.getContext("2d"),g=x.createRadialGradient(64,64,0,64,64,64);g.addColorStop(0,"rgba(255,210,90,1)");g.addColorStop(.3,"rgba(255,180,40,.45)");g.addColorStop(1,"rgba(255,180,40,0)");x.fillStyle=g;x.fillRect(0,0,128,128);return new THREE.CanvasTexture(c);})();
  const panelTex=(()=>{const c=document.createElement("canvas");c.width=256;c.height=160;const x=c.getContext("2d");x.fillStyle="#0b2a52";x.fillRect(0,0,256,160);const gr=x.createLinearGradient(0,0,256,160);gr.addColorStop(0,"#16498a");gr.addColorStop(1,"#071a36");x.fillStyle=gr;x.fillRect(0,0,256,160);x.strokeStyle="#9fb4cc";x.lineWidth=1.5;for(let i=0;i<=8;i++){x.beginPath();x.moveTo(i*32,0);x.lineTo(i*32,160);x.stroke();}for(let j=0;j<=5;j++){x.beginPath();x.moveTo(0,j*32);x.lineTo(256,j*32);x.stroke();}return new THREE.CanvasTexture(c);})();

  /* sol + particules */
  const floorTex=(()=>{const c=document.createElement("canvas");c.width=c.height=256;const x=c.getContext("2d");x.fillStyle="#171b21";x.fillRect(0,0,256,256);for(let i=0;i<2200;i++){const v=22+Math.random()*16|0;x.fillStyle=`rgb(${v},${v+4},${v+9})`;x.fillRect(Math.random()*256,Math.random()*256,2,2);}x.strokeStyle="#121519";x.lineWidth=3;x.strokeRect(0,0,256,256);const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(60,40);t.anisotropy=4;t.encoding=THREE.sRGBEncoding;return t;})();
  const floor=new THREE.Mesh(new THREE.PlaneGeometry(260,170),new THREE.MeshStandardMaterial({map:floorTex,roughness:.45,metalness:.3,envMapIntensity:.55}));floor.rotation.x=-Math.PI/2;floor.position.set(34,-.02,-6);floor.receiveShadow=true;scene.add(floor);
  const N=360,pp=new Float32Array(N*3);for(let i=0;i<N;i++){pp[i*3]=-14+Math.random()*115;pp[i*3+1]=Math.random()*16;pp[i*3+2]=-14+Math.random()*24;}
  const pg=new THREE.BufferGeometry();pg.setAttribute("position",new THREE.BufferAttribute(pp,3));
  const parts=new THREE.Points(pg,new THREE.PointsMaterial({color:0xffe6b0,size:.07,transparent:true,opacity:.45,depthWrite:false}));scene.add(parts);

  /* 1 · ASCENSEUR (Humertec / Hydral) */
  const S=[0,16,32,48,66];
  const g1=new THREE.Group();g1.position.x=S[0];scene.add(g1);
  box(g1,3.2,12,3.2,0,6,0,BLUE,.07);box(g1,.12,12,.12,-1.45,6,-1.3,BLUE);box(g1,.12,12,.12,1.45,6,-1.3,BLUE);
  [0,3.8,7.6,11.4].forEach(y=>box(g1,4,.16,2,0,y,2.1,0x4a525b));
  const cabin=new THREE.Group();g1.add(cabin);
  box(cabin,1.9,2.3,1.9,0,1.15,0,0xc4cad0);box(cabin,.9,2.0,.05,-.46,1.1,.97,0xaab1b8);box(cabin,.9,2.0,.05,.46,1.1,.97,0xaab1b8);box(cabin,1.7,.08,.06,0,2.2,.98,0xfff1c4).material.emissive=new THREE.Color(0xffe6a0);
  const cable=box(g1,.04,1,.04,0,0,0,BLUE,.9);
  const cw=box(g1,.55,1.8,.55,1.2,6,-1.1,BLUE,.5);
  box(g1,.5,3,.25,3.3,1.8,1.6,0x2a3038);const calls=[0,1,2,3].map(i=>led(g1,3.3,.6+i*.7,1.76));
  box(g1,3.4,.5,3.4,0,12.3,0,GOLD,.4);cyl(g1,.6,.5,0,12.8,0,GOLD,.5).rotation.z=Math.PI/2;
  const stops=[0,3.8,11.4,7.6],sm=x=>x*x*(3-2*x);

  /* 2 · PHOTOVOLTAÏQUE (Verdasun) */
  const g2=new THREE.Group();g2.position.x=S[1];scene.add(g2);
  box(g2,12,.12,8,0,0,0,0x3a424b);
  for(let i=0;i<3;i++)for(let j=0;j<3;j++){
    const p=new THREE.Group();p.position.set(-3+i*3,.9+j*.15,-2.2+j*2.3);p.rotation.x=-.55;g2.add(p);
    box(p,2.7,.1,1.7,0,0,0,BLUE,.5);
    const pl=new THREE.Mesh(new THREE.PlaneGeometry(2.6,1.6),new THREE.MeshStandardMaterial({map:panelTex,roughness:.12,metalness:.35,envMapIntensity:1.8}));pl.rotation.x=-Math.PI/2;pl.position.y=.07;p.add(pl);
    box(p,.1,.9,.1,0,-.5,.2,BLUE,.6);GL(p,2.7,.04,.04,0,.07,.85,BLUE,2.2);
  }
  const sun=new THREE.Group();sun.position.set(-6,9.5,-3);g2.add(sun);
  sun.add(new THREE.Mesh(new THREE.SphereGeometry(1,24,24),new THREE.MeshBasicMaterial({color:new THREE.Color(GOLD).multiplyScalar(4)})));
  const spr=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false}));spr.scale.set(9,9,1);sun.add(spr);
  const rays=new THREE.Group();sun.add(rays);for(let k=0;k<12;k++){const a=k/12*Math.PI*2,r=box(rays,.08,.9,.08,Math.cos(a)*1.9,Math.sin(a)*1.9,0,GOLD,.9);r.rotation.z=a-Math.PI/2;}
  const tank=cyl(g2,1,2.6,6.5,1.3,1.5,BLUE,.18),water=cyl(g2,.88,2.3,6.5,1.2,1.5,BLUE,1,20);water.material=new THREE.MeshStandardMaterial({color:0x2a8fd8,transparent:true,opacity:.72,roughness:.1,metalness:.1,emissive:0x0b3a66,emissiveIntensity:.6});cyl(g2,.45,.8,5,.4,1.5,GOLD,.5).rotation.z=Math.PI/2;
  const rbeams=[];

  /* 3 · ARMOIRE ÉLECTRIQUE */
  const g3=new THREE.Group();g3.position.x=S[2];scene.add(g3);
  box(g3,5.2,7.2,2,0,3.6,0,BLUE,.1);box(g3,5.2,7.2,.15,0,3.6,-.9,0xb4bbc2);box(g3,.15,7.2,2,-2.6,3.6,0,0xaab1b8);box(g3,.15,7.2,2,2.6,3.6,0,0xaab1b8);box(g3,5.4,.2,2.2,0,7.3,0,0x8a929a);
  const leds=[];for(let r=0;r<4;r++)for(let c=0;c<7;c++){box(g3,.46,.85,.45,-2.1+c*.7,1.3+r*1.55,.75,(r+c)%3?0x2a2f36:0xe8651a);leds.push(led(g3,-2.1+c*.7,1.85+r*1.55,1.0,(r+c)%3?BLUE:GOLD,.07));}
  box(g3,5,.12,.12,0,.55,.9,0xc77b3a);box(g3,5,.12,.12,0,7,.9,0xc77b3a);

  /* 4 · MOTEUR / AUTOMATISME (électromécanique) */
  const g4=new THREE.Group();g4.position.x=S[3];scene.add(g4);
  const motor=cyl(g4,1.4,3.6,0,2,0,0x1c5ea8,1,28);motor.rotation.z=Math.PI/2;
  for(let k=0;k<10;k++){box(g4,3.2,.1,.5,0,2+Math.cos(k/10*6.283)*1.5,Math.sin(k/10*6.283)*1.5,BLUE,.5).rotation.x=k/10*6.283;}
  box(g4,3.8,.3,3,0,.15,0,0x30363e);
  const shaft=cyl(g4,.22,2.4,2.9,2,0,GOLD,.7,12);shaft.rotation.z=Math.PI/2;
  const gears=[];[[4.3,2,2.15,1.5,12,GOLD],[4.3,2+3.0,0,0,0,0]].slice(0,1);
  const mk=(r,n,c,x,y)=>{const g=new THREE.Group();g.position.set(x,y,0);g4.add(g);const body=cyl(g,r,.45,0,0,0,c,.4,n*2);body.rotation.z=Math.PI/2;for(let k=0;k<n;k++){const a=k/n*6.283,t=box(g,.45,r*.34,r*.28,0,Math.cos(a)*(r+.13),Math.sin(a)*(r+.13),c,.55);t.rotation.x=-a;}return g;};
  const gA=mk(1.5,14,GOLD,4.6,2),gB=mk(1.05,10,BLUE,4.6,4.6);gB.position.z=0;
  const plc=box(g4,2.2,1.4,.9,-4,.7,2,BLUE,.35);const plcL=[0,1,2,3].map(i=>led(g4,-4.7+i*.45,1.1,2.5,i%2?GOLD:BLUE,.07));


  /* 5 · SYSTÈME AUTOMATISÉ: convoyeur · capteurs · vérin pneumatique · bras robot · automate */
  const g5=new THREE.Group();g5.position.x=S[4];scene.add(g5);
  box(g5,15,.35,2.4,0,.9,0,BLUE,.3);
  [-6.5,-2.2,2.2,6.5].forEach(x=>{box(g5,.25,.9,.25,x,.45,1,BLUE,.5);box(g5,.25,.9,.25,x,.45,-1,BLUE,.5);});
  const beltTex=(()=>{const c=document.createElement("canvas");c.width=128;c.height=32;const x=c.getContext("2d");x.fillStyle="#15181c";x.fillRect(0,0,128,32);x.fillStyle="#272c33";for(let i=0;i<8;i++)x.fillRect(i*16,0,3,32);const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(7,1);return t;})();
  const belt=new THREE.Mesh(new THREE.PlaneGeometry(14.6,2.2),new THREE.MeshStandardMaterial({map:beltTex,roughness:.8,metalness:.1}));belt.rotation.x=-Math.PI/2;belt.position.y=1.09;belt.receiveShadow=true;g5.add(belt);
  const items=[];for(let i=0;i<6;i++){const b=box(g5,.9,.7,.9,0,1.5,0,i%2?0xb98a52:0x2f7fd0);b.userData.o=i/6;items.push(b);}
  box(g5,.2,2.4,.2,0,2.1,1.5,BLUE,.5);box(g5,.2,2.4,.2,0,2.1,-1.5,BLUE,.5);box(g5,.2,.2,3.2,0,3.3,0,BLUE,.5);
  const sEm=led(g5,0,1.7,1.5,GOLD,.11),sRx=led(g5,0,1.7,-1.5,GOLD,.11);
  box(g5,.5,.5,1.6,3.2,1.8,-3,BLUE,.5);const rod=cyl(g5,.1,1.4,3.2,1.8,-1.8,GOLD,.85,10);rod.rotation.x=Math.PI/2;const pad=box(g5,.6,.6,.12,3.2,1.8,-1.1,GOLD,.7);let rodE=0;
  const rb=new THREE.Group();rb.position.set(-3.8,.9,3.2);g5.add(rb);
  cyl(rb,.9,.6,0,.3,0,BLUE,.5);const sh1=new THREE.Group();sh1.position.y=.7;rb.add(sh1);
  cyl(sh1,.45,.9,0,.45,0,0xe8651a);const ua=new THREE.Group();ua.position.y=1;sh1.add(ua);
  box(ua,.35,2.4,.35,0,1.2,0,0xe8651a);const fa=new THREE.Group();fa.position.y=2.4;ua.add(fa);
  box(fa,.3,2,.3,0,1,0,0xe8651a);box(fa,.9,.18,.5,0,2.05,0,GOLD,.8);box(fa,.12,.5,.5,-.4,1.8,0,BLUE,.9);box(fa,.12,.5,.5,.4,1.8,0,BLUE,.9);
  box(g5,2.4,3.2,1,-8.5,1.6,2.8,BLUE,.18);box(g5,1.1,1.5,.6,-10.4,.75,2.8,GOLD,.3);
  const hmiTex=(()=>{const c=document.createElement("canvas");c.width=160;c.height=100;const x=c.getContext("2d");x.fillStyle="#06121f";x.fillRect(0,0,160,100);x.fillStyle="#2ee59d";[40,70,55,85,30].forEach((h,i)=>x.fillRect(14+i*28,92-h,18,h));x.fillStyle="#ffc43a";x.fillRect(10,8,60,6);return new THREE.CanvasTexture(c);})();
  const hmi=new THREE.Mesh(new THREE.PlaneGeometry(1.7,1.05),new THREE.MeshBasicMaterial({map:hmiTex,transparent:true,opacity:.9}));hmi.position.set(-8.5,2.2,3.32);g5.add(hmi);
  const plc5=[0,1,2,3,4].map(i=>led(g5,-9.3+i*.4,.9,3.32,i%2?GOLD:BLUE,.07));

  /* accents lumineux (néons) + anneaux au sol + faisceaux: look "motion graphics" */
  GL(g3,.06,7.2,.06,-2.64,3.6,1.04,GOLD);GL(g3,.06,7.2,.06,2.64,3.6,1.04,GOLD);GL(g3,5.3,.06,.06,0,.15,1.04,GOLD);
  GL(g1,.06,12,.06,-1.62,6,1.62,BLUE);GL(g1,.06,12,.06,1.62,6,1.62,BLUE);[0,3.8,7.6,11.4].forEach(y=>GL(g1,4,.05,.05,0,y+.1,3.1,GOLD,2.2));
  GL(g5,14.8,.05,.05,0,1.12,1.22,BLUE);GL(g5,14.8,.05,.05,0,1.12,-1.22,BLUE);
  [[rb,.7],[sh1,.95]].forEach(([g,y])=>{const t=new THREE.Mesh(new THREE.TorusGeometry(.55,.045,8,36),new THREE.MeshBasicMaterial({color:new THREE.Color(GOLD).multiplyScalar(3)}));t.rotation.x=Math.PI/2;t.position.y=y;g.add(t);});
  [-1.9,1.9].forEach(x=>{const t=new THREE.Mesh(new THREE.TorusGeometry(1.45,.05,8,40),new THREE.MeshBasicMaterial({color:new THREE.Color(BLUE).multiplyScalar(3)}));t.rotation.y=Math.PI/2;t.position.set(x,2,0);g4.add(t);});
  const rings=S.map((x,i)=>{const c=i%2?BLUE:GOLD,m=new THREE.Mesh(new THREE.RingGeometry(3.2,3.3,72),new THREE.MeshBasicMaterial({color:new THREE.Color(c).multiplyScalar(1.5),transparent:true,opacity:.22,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide}));m.rotation.x=-Math.PI/2;m.position.set(x,.04,0);scene.add(m);
    const w=new THREE.Mesh(new THREE.RingGeometry(3.2,3.34,72),m.material.clone());w.rotation.x=-Math.PI/2;w.position.set(x,.05,0);scene.add(w);
    const cone=new THREE.Mesh(new THREE.CylinderGeometry(.6,4.4,15,32,1,true),new THREE.MeshBasicMaterial({color:0xffe1a0,transparent:true,opacity:.016,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide}));cone.position.set(x,7.5,0);scene.add(cone);return{w,i};});
  /* câblage + impulsions de courant reliant les 4 stations */
  const pulses=[];
  const wire=(pts,c,n,sp)=>{const cu=new THREE.CatmullRomCurve3(pts.map(p=>V(...p)));{const t=new THREE.Mesh(new THREE.TubeGeometry(cu,160,.05,6,false),new THREE.MeshStandardMaterial({color:0x14181d,roughness:.55,metalness:.2}));t.castShadow=true;scene.add(t);}const ps=[];for(let i=0;i<n;i++){const s=led(scene,0,0,0,c,.1);s.userData.o=i/n;ps.push(s);}pulses.push({cu,ps,sp});};
  wire([[-8,.25,-3.2],[6,.5,-3.2],[16,.25,-3.2],[28,.5,-3.2],[40,.25,-3.2],[56,.3,-3.2],[72,.4,-3.2],[90,.3,-3.2]],GOLD,11,.03);
  wire([[3.3,.4,1.7],[3.3,.2,-1.5],[6,.3,-3.2]],BLUE,2,.12);
  wire([[22.5,.4,1.5],[23,.2,-1],[25,.3,-3.2]],BLUE,2,.12);
  wire([[16,3,-2.2],[17,.25,-1],[19,.3,-3.2]],GOLD,2,.1);
  wire([[32,.6,.95],[32,.3,-1],[32,.3,-3.2]],GOLD,3,.12);
  wire([[-3.2+48,.7,2],[44,.2,-1],[44,.3,-3.2]],BLUE,2,.12);
  wire([[0,12.8,0],[1.5,15,-3],[7,15,-6],[20,13,-6],[32,15,-6]],BLUE,5,.04);

  const surfaceTexture=(()=>{const c=document.createElement("canvas");c.width=c.height=128;const x=c.getContext("2d"),d=x.createImageData(128,128);for(let i=0;i<d.data.length;i+=4){const v=226+Math.random()*29;d.data[i]=d.data[i+1]=d.data[i+2]=v;d.data[i+3]=255;}x.putImageData(d,0,0);const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(3,3);return t;})();
  scene.traverse(o=>{if(!o.isMesh)return;const materials=Array.isArray(o.material)?o.material:[o.material];materials.forEach(m=>{if(m.isMeshStandardMaterial&&!m.map){m.bumpMap=surfaceTexture;m.bumpScale=.008;m.needsUpdate=true;}});});

  /* caméra pilotée par le scroll */
  const POS=[[13,7.5,29],[10,8,26],[11,7.5,24],[-5,6.5,21]],LOOK=[[0,6,0],[17,4.6,0],[32,3.8,0],[49,2.4,0]];
  const cp=V(...POS[0]),cl=V(...LOOK[0]),tp=V(),tl=V();let sy=0,mx=0,my=0;
  const prog=()=>{const m=document.documentElement.scrollHeight-innerHeight;return m>0?Math.max(0,Math.min(1,scrollY/m)):0;};
  addEventListener("mousemove",e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5;},{passive:true});
  const useFX=!!(THREE.EffectComposer&&THREE.RenderPass&&THREE.UnrealBloomPass&&THREE.ShaderPass);
  let composer=null,fxPass=null,bloom=null;
  if(useFX){
    R.toneMapping=THREE.NoToneMapping;scene.background=new THREE.Color(0x080b10);
    const rt=new THREE.WebGLRenderTarget(innerWidth,innerHeight,{type:THREE.HalfFloatType,format:THREE.RGBAFormat,minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter});
    composer=new THREE.EffectComposer(R,rt);composer.setPixelRatio(Math.min(devicePixelRatio||1,innerWidth>900?1.5:1.05));composer.addPass(new THREE.RenderPass(scene,cam));
    bloom=new THREE.UnrealBloomPass(new THREE.Vector2(innerWidth,innerHeight),innerWidth>900?.24:.14,.3,1.35);composer.addPass(bloom);
    fxPass=new THREE.ShaderPass({uniforms:{tDiffuse:{value:null},time:{value:0},ca:{value:.0025},exposure:{value:.95}},
      vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
      fragmentShader:"uniform sampler2D tDiffuse;uniform float time,ca,exposure;varying vec2 vUv;vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}void main(){vec2 d=vUv-.5;float r=dot(d,d);vec2 o=d*ca*(1.+r*4.);vec3 c;c.r=texture2D(tDiffuse,vUv+o).r;c.g=texture2D(tDiffuse,vUv).g;c.b=texture2D(tDiffuse,vUv-o).b;c=aces(c*exposure);c=pow(c,vec3(1./2.2));c*=1.-smoothstep(.2,.95,r*2.2)*.35;c+=(h(vUv*vec2(1920.,1080.)+time)-.5)*.012;gl_FragColor=vec4(c,1.);}"});
    composer.addPass(fxPass);
  }
  function size(){const w=innerWidth,h=innerHeight;R.setSize(w,h,false);if(composer){composer.setPixelRatio(Math.min(devicePixelRatio||1,w>900?1.5:1.05));composer.setSize(w,h);bloom.strength=w>900?.24:.14;}cam.aspect=w/h;if(w>900)cam.setViewOffset(w,h,-w*.17,0,w,h);else cam.clearViewOffset();cam.updateProjectionMatrix();}
  size();addEventListener("resize",size);


  /* TRAILER: plan par plan (formation → stages → finale) */
  const SHOTS=[
    {d:6,k:"01 · FORMATION",t:"Génie électrique — mise sous tension",e:"out",f0:56,f1:38,p0:[28,1.2,14],p1:[34,5,11],l0:[32,3,0],l1:[32,3.8,0],ti:["GÉNIE ÉLECTRIQUE","Option électromécanique des systèmes automatisés"]},
    {d:5,k:"COURANT",t:"Schémas · armoires · puissance",e:"lin",s:.3,fl:1,p0:[30,6.5,6],p1:[34.5,6.8,5.5],l0:[32,6.8,0],l1:[32,6.8,0]},
    {d:5,k:"02 · ÉLECTROMÉCANIQUE",t:"Moteurs triphasés · transmission",e:"io",r:.07,s:.2,p0:[40,2,7],p1:[53,3,6.5],l0:[48,2,0],l1:[48.5,2.2,0]},
    {d:5,k:"ENGRENAGES",t:"Couple · vitesse · rendement",e:"out",f0:44,f1:30,fl:1,p0:[52,3.3,5],p1:[51.5,3,4],l0:[53.4,2.4,0],l1:[53.4,2.4,0]},
    {d:6,k:"03 · SYSTÈMES AUTOMATISÉS",t:"Ligne convoyeur pilotée par automate",e:"lin",s:.25,fl:1,p0:[56,2.2,5],p1:[74,2.4,5],l0:[60,1.5,0],l1:[72,1.6,0],ti:["SYSTÈMES AUTOMATISÉS","Capteurs · actionneurs · automate"]},
    {d:5,k:"CAPTEURS & VÉRINS",t:"Détection · poussée pneumatique",e:"in",s:.35,p0:[68,3.5,8],p1:[66.8,2.3,3.2],l0:[66.8,1.7,-1],l1:[66.8,1.7,-1]},
    {d:5,k:"04 · AUTOMATISME",t:"Bras robot — cycle pick & place",e:"io",r:-.06,p0:[58,3.2,9],p1:[63.5,6.5,7],l0:[62,3,2.5],l1:[62,3,2.5]},
    {d:5,k:"SUPERVISION",t:"Automate · écran HMI",e:"out",f0:46,f1:34,p0:[60,2.6,9],p1:[58.5,2.4,6.2],l0:[57.5,2.2,3.3],l1:[57.5,2.2,3.3]},
    {d:6,k:"05 · STAGE",t:"HUMERTEC — Ascenseurs Otis",e:"io",s:.15,fl:1,p0:[4,1,10],p1:[5,10,10],l0:[0,1,0],l1:[0,10,0],ti:["3 STAGES","3 environnements · 1 même rigueur"]},
    {d:5,k:"06 · STAGE",t:"HYDRAL — Boutons d'appel · tests de sécurité",e:"lin",p0:[3,3,7],p1:[1.5,5,5.5],l0:[0,4,1],l1:[0,4.5,1]},
    {d:6,k:"07 · STAGE",t:"VERDASUN — Photovoltaïque",e:"io",f0:40,f1:52,s:.1,fl:1,p0:[8,1.3,9],p1:[22,9.5,14],l0:[16,2,0],l1:[12,7.5,-2]},
    {d:5,k:"MISE EN SERVICE",t:"Pompes solaires · câblage sécurisé",e:"out",p0:[10,3,8],p1:[8,2,5.5],l0:[6.5,1.4,1.5],l1:[6.5,1.4,1.5]},
    {d:11,k:"MOUAD ERRAKI",t:"Technicien en Génie Électrique · Systèmes automatisés",e:"io",fl:1,p0:[92,10,20],p1:[-8,10,20],l0:[70,2,-3],l1:[10,3,-3],ti:["MOUAD ERRAKI","Technicien · Électromécanique · Automatisation"]}
  ],TOTAL=SHOTS.reduce((s,x)=>s+x.d,0);
  let shot=0,shotT=reduce?4:0,shownShot=-1,playing=true;
  const cap=document.createElement("div");cap.className="trailer";cap.innerHTML='<span class="t-rec"></span><div><div class="t-k"></div><div class="t-t"></div></div><button class="t-btn" type="button" aria-label="Pause du trailer">❚❚</button><div class="t-bar"><i></i></div>';
  document.body.appendChild(cap);
  const capK=cap.querySelector(".t-k"),capT=cap.querySelector(".t-t"),capBar=cap.querySelector(".t-bar i"),capBtn=cap.querySelector(".t-btn");
  capBtn.addEventListener("click",()=>{playing=!playing;capBtn.textContent=playing?"❚❚":"▶";capBtn.setAttribute("aria-label",playing?"Pause du trailer":"Lecture du trailer");});
  const flash=document.createElement("div");flash.id="cut-flash";document.body.appendChild(flash);
  const ttl=document.createElement("div");ttl.className="t-title";ttl.innerHTML="<b></b><small></small>";document.body.appendChild(ttl);
  const ttB=ttl.querySelector("b"),ttS=ttl.querySelector("small");
  /* arcs électriques (éclairs) */
  const arcs=[[[29.8,7,1.1],[34.2,6.4,1.1]],[[46.6,3.4,.8],[45,1.2,1.6]],[[66,3.3,1],[66,1.5,1.2]]].map(([a,b])=>{
    const geo=new THREE.BufferGeometry();geo.setAttribute("position",new THREE.BufferAttribute(new Float32Array(14*3),3));
    const l=new THREE.Line(geo,new THREE.LineBasicMaterial({color:new THREE.Color(0xcfe8ff).multiplyScalar(4),transparent:true,opacity:.95,blending:THREE.AdditiveBlending,depthWrite:false}));l.frustumCulled=false;scene.add(l);
    const pl=new THREE.PointLight(0x9fd0ff,0,9);scene.add(pl);return{a:V(...a),b:V(...b),l,pl,geo};});
  /* étincelles */
  const SP=90,spP=new Float32Array(SP*3).fill(-100),spV=new Float32Array(SP*3),spL=new Float32Array(SP);
  const spG=new THREE.BufferGeometry();spG.setAttribute("position",new THREE.BufferAttribute(spP,3));
  const spM=new THREE.Points(spG,new THREE.PointsMaterial({color:new THREE.Color(0xffc43a).multiplyScalar(3),size:.14,transparent:true,opacity:.95,blending:THREE.AdditiveBlending,depthWrite:false}));spM.frustumCulled=false;scene.add(spM);
  let spI=0,prevPush=false;
  const burst=(x,y,z,n)=>{for(let k=0;k<n;k++){const i=spI++%SP;spP[i*3]=x;spP[i*3+1]=y;spP[i*3+2]=z;spV[i*3]=(Math.random()-.5)*5;spV[i*3+1]=Math.random()*4+1;spV[i*3+2]=(Math.random()-.2)*4;spL[i]=1;}};
  const clock=new THREE.Clock();let T=reduce?2.5:0,raf;
  function frame(){
    if(document.body.classList.contains("has-video")){if(!reduce)raf=requestAnimationFrame(frame);return;}
    const dt=(reduce||!playing)?(clock.getDelta(),0):Math.min(.05,clock.getDelta());T+=dt;shotT+=dt;
    if(shotT>=SHOTS[shot].d){shot=(shot+1)%SHOTS.length;shotT=0;}
    /* ascenseur */
    const tt=T/3,seg=Math.floor(tt)%4,fr=tt%1,cy=stops[seg]+(stops[(seg+1)%4]-stops[seg])*sm(Math.max(0,Math.min(1,(fr-.3)/.65)));
    cabin.position.y=cy+.1;cable.scale.y=12.2-cy-2.4;cable.position.y=cy+2.4+(12.2-cy-2.4)/2;cw.position.y=12-cy-1.4;
    calls.forEach((l,i)=>l.material.opacity=Math.abs(Math.sin(T*1.6+i*1.3))>.6?1:.25);
    /* solaire */
    rays.rotation.z=T*.3;spr.scale.setScalar(9+Math.sin(T*2)*.5);
    water.scale.y=.45+.5*(Math.sin(T*.7)*.5+.5);water.position.y=.2+water.scale.y*1.15;
    /* armoire */
    leds.forEach((l,i)=>l.material.opacity=Math.sin(T*(1+i%5*.4)+i)>.2?1:.2);
    /* moteur */
    gA.rotation.x=T*1.2;gB.rotation.x=-T*1.2*1.5/1.05+.2;shaft.rotation.x=T*3;
    plcL.forEach((l,i)=>l.material.opacity=Math.sin(T*2.2+i*1.7)>0?1:.2);
    /* automatisme */
    beltTex.offset.x=-(T*.25)%1;let hit=false,push=false;
    items.forEach(b=>{const x=((T*.5+b.userData.o*7)%7)*2-7;b.position.x=x;if(Math.abs(x)<.7)hit=true;if(Math.abs(x-3.2)<.7)push=true;});
    sEm.material.color.setHex(hit?0xff4d4d:GOLD).multiplyScalar(3);sRx.material.color.setHex(hit?0xff4d4d:GOLD).multiplyScalar(3);
    if(push&&!prevPush)burst(69.2,1.8,-1.1,30);prevPush=push;rodE+=((push?1:0)-rodE)*.2;rod.position.z=-1.8+rodE*.9;pad.position.z=-1.1+rodE*.9;
    sh1.rotation.y=Math.sin(T*.5)*.5;ua.rotation.x=-.9+Math.sin(T)*.35;fa.rotation.x=-1+Math.sin(T+.8)*.45;
    plc5.forEach((l,i)=>l.material.opacity=Math.sin(T*2+i*1.3)>0?1:.2);
    arcs.forEach((r,idx)=>{const on=((T*6+idx*2.3)%5)<1.2&&Math.random()>.25;r.l.visible=on;r.pl.intensity=on?3+Math.random()*3:0;
      if(on){const p=r.geo.attributes.position.array;for(let i=0;i<14;i++){const u=i/13,mid=i>0&&i<13;p[i*3]=r.a.x+(r.b.x-r.a.x)*u+(mid?(Math.random()-.5)*.55:0);p[i*3+1]=r.a.y+(r.b.y-r.a.y)*u+(mid?(Math.random()-.5)*.4:0);p[i*3+2]=r.a.z+(r.b.z-r.a.z)*u+(mid?(Math.random()-.5)*.3:0);}
        r.geo.attributes.position.needsUpdate=true;r.pl.position.set((r.a.x+r.b.x)/2,(r.a.y+r.b.y)/2,(r.a.z+r.b.z)/2+.8);}});
    for(let i=0;i<SP;i++){if(spL[i]>0){spL[i]-=dt*1.4;spV[i*3+1]-=9*dt;spP[i*3]+=spV[i*3]*dt;spP[i*3+1]+=spV[i*3+1]*dt;spP[i*3+2]+=spV[i*3+2]*dt;if(spP[i*3+1]<0){spP[i*3+1]=0;spV[i*3+1]*=-.3;}}else spP[i*3+1]=-100;}
    spG.attributes.position.needsUpdate=true;
    rings.forEach(r=>{const f=((T*.45+r.i*.27)%1);r.w.scale.setScalar(1+f*1.8);r.w.material.opacity=(1-f)*.6;});
    /* courant */
    pulses.forEach(p=>p.ps.forEach(s=>{s.position.copy(p.cu.getPoint(((T*p.sp*8+s.userData.o)%1+1)%1));}));
    parts.rotation.y=Math.sin(T*.05)*.02;const a=pg.attributes.position.array;for(let i=0;i<N;i++){a[i*3+1]+=.004;if(a[i*3+1]>16)a[i*3+1]=0;}pg.attributes.position.needsUpdate=true;
    /* TRAILER: caméra cinéma */
    const sh=SHOTS[shot],u=Math.min(1,shotT/sh.d),EZ={lin:x=>x,in:x=>x*x*x,out:x=>1-Math.pow(1-x,3),io:x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2},e=EZ[sh.e||"io"](u);
    const L3=(p,q,o)=>o.set(p[0]+(q[0]-p[0])*e,p[1]+(q[1]-p[1])*e,p[2]+(q[2]-p[2])*e);
    L3(sh.p0,sh.p1,tp);L3(sh.l0,sh.l1,tl);
    const shk=(sh.s||0)*Math.exp(-shotT*3.2);
    tp.x+=mx+Math.sin(T*.7)*.1+Math.sin(T*47)*shk*.5;tp.y+=-my*.6+Math.cos(T*.9)*.08+Math.cos(T*53)*shk*.4;tp.z+=Math.sin(T*41)*shk*.3;
    cam.position.copy(tp);cam.lookAt(tl);cam.rotateZ((sh.r||0)*(u-.5)+Math.sin(T*49)*shk*.015);
    const f0=sh.f0||38,fv=f0+((sh.f1||f0)-f0)*e;if(Math.abs(cam.fov-fv)>.01){cam.fov=fv;cam.updateProjectionMatrix();}
    dl.target.position.copy(tl);dl.position.set(tl.x+9,tl.y+18,tl.z+13);fill.position.set(tl.x-8,tl.y+6,tl.z+10);
    const pw=shot===0?Math.min(1,.12+shotT/3):1;dl.intensity=1.8*pw;hemi.intensity=.6*(.3+.7*pw);fill.intensity=.55*pw;
    const fd=Math.max(0,Math.min(1,shotT/.22,(sh.d-shotT)/.22)),light=document.body.classList.contains("light");
    cv.style.opacity=(fd*(light?.12:innerWidth>900?.16:.1)).toFixed(3);
    flash.style.opacity=light?0:Math.max(0,(sh.fl?.12:.03)*(1-shotT/.28)).toFixed(3);
    cap.style.opacity=Math.max(0,Math.min(1,(shotT-.4)/.4,(sh.d-shotT-.2)/.35)).toFixed(3);
    const tv=sh.ti?Math.max(0,Math.min(1,(shotT-.35)/.5,(sh.d-shotT-.15)/.45)):0;ttl.style.opacity=tv.toFixed(3);ttl.style.transform=`translateX(${((1-tv)*30).toFixed(1)}px)`;
    if(shot!==shownShot){shownShot=shot;capK.textContent=sh.k;capT.textContent=sh.t;if(sh.ti){ttB.textContent=sh.ti[0];ttS.textContent=sh.ti[1]||"";}}
    capBar.style.width=((SHOTS.slice(0,shot).reduce((s,x)=>s+x.d,0)+shotT)/TOTAL*100).toFixed(1)+"%";
    if(composer){fxPass.uniforms.time.value=T%100;fxPass.uniforms.ca.value=.0002+.0008*Math.exp(-shotT*9)*(sh.fl?1:.4);composer.render();}else R.render(scene,cam);
    if(!reduce)raf=requestAnimationFrame(frame);
  }
  frame();if(reduce)addEventListener("scroll",()=>{cp.copy(tp);frame();},{passive:true});
  document.addEventListener("visibilitychange",()=>{if(reduce)return;cancelAnimationFrame(raf);if(!document.hidden){clock.getDelta();raf=requestAnimationFrame(frame);}});
})();

/* Real photographs from each internship rotate through the hero visual. */
(()=>{
  const figure=document.querySelector(".hero-photo");
  if(!figure) return;
  const hero=figure.closest(".hero");
  const image=figure.querySelector("img");
  const [stageLabel,title,description]=figure.querySelectorAll("figcaption > *");
  const dots=Array.from(figure.querySelectorAll(".hero-photo-dots button"));
  const reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const slides=[
    {
      src:"assets/stages/humrtec/IMG_20250315_100607.jpg",
      alt:"Moteur et poulies d’un ascenseur observés pendant un stage",
      label:"STAGE ASCENSEURS · HUMERTEC",
      title:"Machine de traction",
      description:"Observation en environnement réel · 2025"
    },
    {
      src:"assets/stages/hydral/IMG_20260204_122938.jpg",
      alt:"Composant électrique d’ascenseur étudié pendant un stage chez HYDRAL",
      label:"MAINTENANCE ASCENSEURS · HYDRAL",
      title:"Contact de porte",
      description:"Diagnostic d’un équipement d’ascenseur · 2026"
    },
    {
      src:"assets/stages/verdasun/IMG_20260428_112817.jpg",
      alt:"Rangée de panneaux photovoltaïques sur un site VERDASUN",
      label:"STAGE PHOTOVOLTAÏQUE · VERDASUN",
      title:"Installation solaire",
      description:"Intervention sur site · 2026"
    }
  ];
  let activeIndex=0;
  let requestedIndex=0;
  let pendingRequest=0;
  let autoTimer=null;

  function stopAuto(){
    window.clearInterval(autoTimer);
    autoTimer=null;
  }

  function startAuto(){
    if(reducedMotion || autoTimer || document.hidden) return;
    autoTimer=window.setInterval(()=>showSlide((requestedIndex+1)%slides.length),6500);
  }

  function showSlide(index){
    if(index===requestedIndex && index===activeIndex) return;
    requestedIndex=index;
    const requestId=++pendingRequest;
    const slide=slides[index];
    const preload=new Image();
    preload.addEventListener("load",()=>{
      if(requestId!==pendingRequest) return;
      image.classList.add("is-changing");
      window.setTimeout(()=>{
        if(requestId!==pendingRequest) return;
        image.src=slide.src;
        image.alt=slide.alt;
        stageLabel.textContent=slide.label;
        title.textContent=slide.title;
        description.textContent=slide.description;
        hero.style.setProperty("--hero-photo-bg",`url("${slide.src}")`);
        dots.forEach((dot,dotIndex)=>{
          dot.setAttribute("aria-pressed",String(dotIndex===index));
        });
        activeIndex=index;
        window.requestAnimationFrame(()=>image.classList.remove("is-changing"));
      },120);
    },{once:true});
    preload.addEventListener("error",()=>{
      if(requestId!==pendingRequest) return;
      requestedIndex=activeIndex;
      console.error("Could not load hero stage photo:",slide.src);
    },{once:true});
    preload.src=slide.src;
  }

  dots.forEach((dot,index)=>dot.addEventListener("click",()=>showSlide(index)));
  figure.addEventListener("mouseenter",stopAuto);
  figure.addEventListener("mouseleave",startAuto);
  figure.addEventListener("focusin",stopAuto);
  figure.addEventListener("focusout",event=>{
    if(!figure.contains(event.relatedTarget)) startAuto();
  });
  document.addEventListener("visibilitychange",()=>{
    if(document.hidden) stopAuto();
    else startAuto();
  });
  startAuto();
})();
