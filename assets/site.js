const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
if(menuButton&&nav){
  const closeMenu=()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');};
  menuButton.addEventListener('click',()=>{const isOpen=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(isOpen));});
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
}
document.querySelectorAll('#year').forEach(n=>n.textContent=new Date().getFullYear());
const reveals=document.querySelectorAll('.reveal');
if('IntersectionObserver'in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
  reveals.forEach(el=>observer.observe(el));
}else{reveals.forEach(el=>el.classList.add('visible'));}

const pilotForm=document.querySelector('#pilotInquiryForm');
if(pilotForm){
  pilotForm.addEventListener('submit',event=>{
    event.preventDefault();
    const data=new FormData(pilotForm);
    const workflows=data.getAll('workflow');
    const body=[
      'MeetAdvance Controlled Pilot Inquiry',
      '',
      `Name: ${data.get('name')||''}`,
      `Organization: ${data.get('organization')||''}`,
      `Role: ${data.get('role')||''}`,
      `Email: ${data.get('email')||''}`,
      `Meet / Region: ${data.get('meetRegion')||''}`,
      `Desired timeframe: ${data.get('timeframe')||''}`,
      `Interested workflow: ${workflows.length?workflows.join(', '):'Not specified'}`,
      '',
      'Operational challenge:',
      `${data.get('challenge')||'Not provided'}`,
    ].join('\n');
    const subject=`MeetAdvance Controlled Pilot - ${data.get('organization')||'Organization'}`;
    const mailto=`mailto:info@meetadvance.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const status=document.querySelector('#pilotFormStatus');
    if(status)status.textContent='Opening your email application with the pilot details prepared.';
    window.location.href=mailto;
  });
}
