// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');
if(navToggle){
  navToggle.addEventListener('click', () => {
    const isOpen = navMobile.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  navMobile.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=> {
      navMobile.classList.remove('open');
      navToggle.setAttribute('aria-expanded','false');
    });
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
  revealEls.forEach(el=>io.observe(el));
} else {
  revealEls.forEach(el=>el.classList.add('in'));
}
