/* -----------------------
    DEMO JS: interactions & small animations
----------------------- */
// Simple parallax for hero
(function(){
  const hero = document.querySelector('.hero');
  window.addEventListener('scroll',()=>{
     const s = window.scrollY/3;
     hero.style.transform = `translateY(${s}px)`;
  });
})();

// FAQ accordion
document.querySelectorAll('.faq .q').forEach(q=>{
  q.addEventListener('click',()=>{
     const a=q.querySelector('.a');
     const open = a.style.display === 'block';
     document.querySelectorAll('.faq .a').forEach(x=>x.style.display='none');
     if(!open) a.style.display='block';
  });
});

// Before/After drag
(function(){
  const ba = document.getElementById('baStage');
  const mask = document.getElementById('afterMask');
  const handle = document.getElementById('baHandle');
  let dragging=false;
  const startX = e=> (e.touches?e.touches[0].clientX:e.clientX);
  const move = x=>{
     const rect = ba.getBoundingClientRect();
     let pct = (x - rect.left) / rect.width;
     pct = Math.max(0, Math.min(1, pct));
     mask.style.width = (pct*100)+'%';
     handle.style.left = (pct*100)+'%';
  }
  handle.addEventListener('mousedown',()=>dragging=true);
  window.addEventListener('mouseup',()=>dragging=false);
  window.addEventListener('mousemove',e=>{ if(dragging) move(e.clientX)});
  // mobile
  handle.addEventListener('touchstart',()=>dragging=true);
  window.addEventListener('touchend',()=>dragging=false);
  window.addEventListener('touchmove',e=>{ if(dragging) move(e.touches[0].clientX)});
  // click to move
  ba.addEventListener('click',e=> move(startX(e)));
})();

// Simple reveal on scroll
(function(){
  const obs = new IntersectionObserver(entries=>{
     entries.forEach(en=>{
        if(en.isIntersecting) en.target.style.opacity=1;
     });
  },{threshold:0.15});
  document.querySelectorAll('section').forEach(s=>{s.style.opacity=0;s.style.transform='translateY(12px)';obs.observe(s)});
})();

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',function(e){
     e.preventDefault();
     const id = this.getAttribute('href').slice(1);
     const el = document.getElementById(id);
     if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

// Small micro-interaction: animate hero text on load
window.addEventListener('load',()=>{
  const h1 = document.querySelector('.hero-inner h1');
  h1.style.transform='translateY(0)';
  h1.style.opacity=1;
});