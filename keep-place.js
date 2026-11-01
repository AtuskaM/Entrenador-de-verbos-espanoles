// Keep the page still when a button is pressed: the content under the finger stays where it was.
// 1) The lesson area never shrinks below its height at the moment of the click, so the browser
//    does not pull the page up when a shorter card replaces a longer one.
// 2) If the pressed button is still there after the redraw, it stays at the same height on screen.
(function(){
 const mainEl=()=>document.getElementById('main');
 document.addEventListener('click',e=>{
  const btn=e.target.closest('#main button, #main summary');const m=mainEl();
  if(!btn||!m)return;
  const pageBefore=typeof page!=='undefined'?page:null;
  m.style.minHeight=Math.max(m.offsetHeight,parseFloat(m.style.minHeight)||0)+'px';
  const anchors=[];
  if(btn.id)anchors.push([btn.id,btn.getBoundingClientRect().top]);
  const self=btn.getBoundingClientRect().top;
  setTimeout(()=>requestAnimationFrame(()=>{
   if(typeof page!=='undefined'&&page!==pageBefore){m.style.minHeight='';return}
   if(btn.isConnected){const d=btn.getBoundingClientRect().top-self;if(Math.abs(d)>1)window.scrollBy(0,d);return}
   for(const [id,top] of anchors){const el=document.getElementById(id);if(el&&el.offsetParent!==null){const d=el.getBoundingClientRect().top-top;if(Math.abs(d)>1)window.scrollBy(0,d);return}}
  }),0);
 },true);
 // Leaving a section starts fresh.
 if(typeof go==='function'){const original=go;go=function(p){const m=mainEl();if(m)m.style.minHeight='';return original(p)}}
})();
