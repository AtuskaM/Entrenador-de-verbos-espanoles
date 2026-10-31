function readSkOnlyMode(){try{return localStorage.getItem('rdm-language-mode')==='slovak'}catch{return false}}
function readLanguageMode(){try{return localStorage.getItem('rdm-language-mode')==='spanish'}catch{return false}}
function escapeText(s){return String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;')}
function bi(spanish,slovak,extra=''){if(es||!slovak)return `<span lang="es">${spanish}</span>`;return `<span class="parallel ${extra}${skOnly?' sk-only':''}"><span class="parallel-es" lang="es">${spanish}</span><span class="parallel-sk" lang="sk">${slovak}</span></span>`}
function skHint(){return '<p class="sk-tap-hint">👆 Klepnite na španielsky text a zobrazí sa slovenský preklad.</p>'}
function dual(value){const bits=String(value).split(' ⟷ ');return bits.length===2?bi(bits[0],bits[1],'parallel-copy'):value}
const sentenceTranslations={
'Es alto. Es médico.':'Je vysoký. Je lekár.',
'Está muerto. Está casado.':'Je mŕtvy. Je ženatý.',
'Hoy he hablado con papá.':'Dnes som hovoril(a) s otcom.',
'Cuando vivía en Madrid, conocí a Ana.':'Keď som býval(a) v Madride, spoznal(a) som Anu.',
'Sé que vienes. / Quiero que vengas.':'Viem, že prídeš. / Chcem, aby si prišiel/prišla.',
'Tu hija: «¿Os viene bien que vayamos el sábado?»':'Dcéra: „Vyhovuje vám, ak prídeme v sobotu?“',
'Tu nieto: «Abuelo, ¿vienes al parque?»':'Vnuk: „Dedko, pôjdeš do parku?“',
'Tu hija: «Ya estamos de camino.»':'Dcéra: „Už sme na ceste.“',
'Tu nieta: «¿Qué hacías cuando eras pequeño?»':'Vnučka: „Čo si robieval, keď si bol malý?“',
'Tu hijo: «¿Qué tal ayer con los niños?»':'Syn: „Ako bolo včera s deťmi?“',
'Tu hija: «La comida ya está en la mesa.»':'Dcéra: „Jedlo je už na stole.“',
'Sí, nos viene muy bien.':'Áno, veľmi nám to vyhovuje.',
'Sí, tenemos muy bien.':'Doslovne: „Áno, máme veľmi dobre.“ Tu to nie je správne.',
'Claro, ahora voy.':'Jasné, hneď prídem.',
'Claro, ayer fui.':'Jasné, včera som tam bol(a).',
'Vale, avísame cuando lleguéis.':'Dobre, daj mi vedieť, keď prídete.',
'Vale, avísame cuando llegasteis.':'Nesprávny tvar pre zamýšľaný budúci príchod.',
'Jugaba mucho con mis hermanos.':'Často som sa hrával(a) so súrodencami.',
'Mañana jugaré con mis hermanos.':'Zajtra sa budem hrať so súrodencami.',
'Lo pasamos genial.':'Výborne sme sa bavili.',
'Lo pasaremos ayer.':'Nesprávne spojenie budúceho tvaru so slovom včera.',
'¡Qué bien! ¿Os echo una mano?':'Výborne! Pomôžem vám?',
'¡Qué bien! ¿Os hago una mano?':'Nesprávne spojenie; pomoc sa vyjadruje echar una mano.'
};
const exampleTranslations=[
'Máš chuť ísť po obede na prechádzku?', 'O piatej mi to vyhovuje.', 'Neviem, či môžem prísť; ešte ti dám vedieť.', '—Si unavený? —Ale kdeže!', 'Hovoria tak rýchlo, že im nerozumiem.', 'Tak dobre, vidíme sa v sobotu.', '—Prepáč za meškanie. —Nič sa nedeje.', 'Čaj alebo kávu? Je mi to jedno, čo máš.', 'Stretneme sa o šiestej na námestí?', 'Som na ceste, prídem o desať minút.', 'Daj mi vedieť, keď prídeš domov.', 'Jedlo je hotové. Dobrú chuť!', 'Po ceste som úplne vyčerpaný.', 'Čo som to chcel hľadať? Úplne som zabudol.', 'Pomôžeš mi s taškami?', 'Veľmi sa teším, že vás toto leto uvidím.', 'Aký čas vám vyhovuje, aby sme prišli?', 'Ide o to, že zajtra mám dohodnuté stretnutie.', 'Stratil(a) si kľúče? To je ale nepríjemnosť!', 'Hneď ti zavolám.', 'Prepáč, môžeš to zopakovať pomalšie?', '—Dedko, poď! —Už idem!', 'Včera sme sa s deťmi výborne bavili.', 'Ďakujem za vstupenky. Koľko ti dlžím?'
];

const basicSlovakForms={
hablar:'hovorím|hovoríš|hovorí|hovoríme|hovoríte|hovoria',comer:'jem|ješ|je|jeme|jete|jedia',vivir:'žijem|žiješ|žije|žijeme|žijete|žijú',ser:'som|si|je|sme|ste|sú',estar:'som|si|je|sme|ste|sú',tener:'mám|máš|má|máme|máte|majú',ir:'idem|ideš|ide|ideme|idete|idú',hacer:'robím|robíš|robí|robíme|robíte|robia',poder:'môžem|môžeš|môže|môžeme|môžete|môžu',querer:'chcem|chceš|chce|chceme|chcete|chcú',venir:'prichádzam|prichádzaš|prichádza|prichádzame|prichádzate|prichádzajú',decir:'hovorím|hovoríš|hovorí|hovoríme|hovoríte|hovoria',saber:'viem|vieš|vie|vieme|viete|vedia',ver:'vidím|vidíš|vidí|vidíme|vidíte|vidia',salir:'vychádzam|vychádzaš|vychádza|vychádzame|vychádzate|vychádzajú',poner:'kladiem|kladieš|kladie|kladieme|kladiete|kladú',dar:'dávam|dávaš|dáva|dávame|dávate|dávajú',traer:'prinášam|prinášaš|prináša|prinášame|prinášate|prinášajú'};
function registerBasicParallels(){const persons=['yo','tú','él / ella / usted','nosotros / nosotras','vosotros / vosotras','ellos / ellas / ustedes'];const sk=['ja','ty','on / ona / vy zdvorilo','my','vy neformálne','oni / ony / vy zdvorilo'];Object.entries(basicSlovakForms).forEach(([v,forms])=>{forms.split('|').forEach((f,n)=>{const spanish=verbs[v][1][n];sentenceTranslations[spanish]=f;sentenceTranslations[persons[n]+' · '+v+' → ______']=sk[n]+' · '+verbs[v][0]+' → ______';sentenceTranslations[persons[n]+' → '+spanish]=sk[n]+' → '+f})})}
