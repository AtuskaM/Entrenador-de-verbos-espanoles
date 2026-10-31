// Voice selector in the header (same pattern as the RDM English verb trainer):
// a main Spanish voice and a second voice for the other person in conversations.
const VOICE_KEY='rdm-voices-es';
const voiceId=v=>v.voiceURI||`${v.name}|${v.lang}`;
function voiceProvider(v){const n=v.name+' '+(v.voiceURI||'');return /microsoft/i.test(n)?'Microsoft':/google/i.test(n)?'Google':'System'}
function voicePrefs(){try{const p=JSON.parse(localStorage.getItem(VOICE_KEY)||'{}');return p&&typeof p==='object'?p:{}}catch{return {}}}
function saveVoicePrefs(p){try{localStorage.setItem(VOICE_KEY,JSON.stringify(p))}catch{}}
function spanishVoices(){
 if(!('speechSynthesis'in window))return [];
 const seen=new Set();
 return speechSynthesis.getVoices().filter(v=>/^es(?:[-_]|$)/i.test(v.lang)).filter(v=>{const id=voiceId(v);if(seen.has(id))return false;seen.add(id);return true})
  .sort((a,b)=>Number(/^es[-_]ES$/i.test(b.lang))-Number(/^es[-_]ES$/i.test(a.lang)));
}
// Returns [main, second] voices, honouring saved choices when available.
function chosenVoices(){
 const voices=spanishVoices(),p=voicePrefs();if(!voices.length)return [null,null];
 const main=voices.find(v=>voiceId(v)===p.main)||voices[0];
 const rest=voices.filter(v=>v!==main);
 const second=rest.find(v=>voiceId(v)===p.second)||rest.find(v=>voiceProvider(v)===voiceProvider(main)&&v.lang===main.lang)||rest[0]||main;
 return [main,second];
}
function voiceLabel(sp,sk){return typeof es!=='undefined'&&es?sp:typeof skOnly!=='undefined'&&skOnly?sk:`${sp} · ${sk}`}
function voiceEsc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function renderVoiceSettings(){
 const host=document.getElementById('voice-settings');if(!host)return;
 const voices=spanishVoices(),p=voicePrefs(),open=host.querySelector('details')?.open||false,[main]=chosenVoices();
 const groups=second=>['Microsoft','Google','System'].map(pr=>{const g=voices.filter(v=>voiceProvider(v)===pr);return g.length?`<optgroup label="${pr==='Microsoft'?'Microsoft · Edge / Windows':pr==='System'?voiceLabel('Sistema','Systém'):pr}">${g.map(v=>`<option value="${voiceEsc(voiceId(v))}"${second&&v===main?' disabled':''}>${voiceEsc(v.name+' · '+v.lang)}</option>`).join('')}</optgroup>`:''}).join('');
 const missing=p.main&&!voices.some(v=>voiceId(v)===p.main);
 host.innerHTML=`<details class="global-voices"${open?' open':''}><summary><span aria-hidden="true">🔊</span><span>${voiceLabel('Voz','Hlas')}</span></summary><div class="voice-panel">`+
  `<label for="voice-main">${voiceLabel('Voz principal','Hlavný hlas')}</label><select id="voice-main"${voices.length?'':' disabled'}><option value="">${voiceLabel('Automática','Automaticky')}</option>${groups(false)}</select>`+
  `<label for="voice-second">${voiceLabel('Segunda voz para conversaciones','Druhý hlas pre rozhovory')}</label><select id="voice-second"${voices.length>1?'':' disabled'}><option value="">${voiceLabel('Automática · una voz diferente','Automaticky · iný hlas')}</option>${groups(true)}</select>`+
  `<button type="button" id="voice-preview"${voices.length?'':' disabled'}>▶ ${voiceLabel('Probar voz','Vyskúšať hlas')}</button>`+
  `<p class="note">${voiceLabel('Esta selección se aplica a toda la app. Las voces Microsoft y Google aparecen si tu navegador las ofrece.','Výber platí v celej aplikácii. Hlasy Microsoft a Google sa zobrazia, ak ich váš prehliadač ponúka.')}</p>`+
  `<p class="note" id="voice-status" role="status">${!voices.length?voiceLabel('Todavía no hay voces españolas disponibles en este navegador.','V tomto prehliadači zatiaľ nie sú dostupné španielske hlasy.'):missing?voiceLabel('La voz guardada no está disponible aquí; se usa otra.','Uložený hlas tu nie je dostupný; použije sa iný.'):''}</p></div></details>`;
 host.querySelector('#voice-main').value=voices.some(v=>voiceId(v)===p.main)?p.main:'';
 host.querySelector('#voice-second').value=voices.some(v=>voiceId(v)===p.second)&&p.second!==voiceId(main)?p.second:'';
 host.querySelector('#voice-main').onchange=e=>{const q=voicePrefs();q.main=e.target.value;saveVoicePrefs(q);renderVoiceSettings()};
 host.querySelector('#voice-second').onchange=e=>{const q=voicePrefs();q.second=e.target.value;saveVoicePrefs(q);renderVoiceSettings()};
 host.querySelector('#voice-preview').onclick=()=>listen([{text:'Hola. Vamos a practicar español juntos.',pause:350},{text:'¡Qué bien! Yo soy la segunda voz.',second:true}]);
}
document.addEventListener('click',e=>{const d=document.querySelector('#voice-settings details');if(d?.open&&!e.target.closest('#voice-settings'))d.open=false});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){const d=document.querySelector('#voice-settings details');if(d?.open){d.open=false;d.querySelector('summary').focus()}}});
if('speechSynthesis'in window)speechSynthesis.addEventListener('voiceschanged',renderVoiceSettings);
