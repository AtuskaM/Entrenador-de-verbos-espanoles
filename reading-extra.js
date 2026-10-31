// One hundred distinct original short readings, authored in work/readings-extra*.txt.
const extraReadingCategories={"sea":["Mar, viajes y horizontes","More, plavby a obzory"],"books":["Libros, narradores y traducción","Knihy, rozprávači a preklad"],"art":["Arte, música y miradas","Umenie, hudba a pohľady"],"city":["Ciudad, espacios y convivencia","Mesto, priestory a spolužitie"],"science":["Preguntas, observación y pruebas","Otázky, pozorovanie a overovanie"],"work":["Trabajo, oficio y colaboración","Práca, remeslo a spolupráca"],"debate":["Opiniones, acuerdos y decisiones","Názory, dohody a rozhodnutia"],"travel":["Viajar, llegar y descubrir","Cestovať, prísť a objavovať"],"memory":["Memoria, tiempo y objetos","Pamäť, čas a predmety"],"humour":["Humor, palabras y vida cotidiana","Humor, slová a každodennosť"]};
const extraReadings=[
 {
  "id": "reading-001",
  "topic": "sea",
  "title": [
   "List bez adresáta",
   "La carta sin destinatario"
  ],
  "tag": [
   "More, plavby a obzory",
   "Mar, viajes y horizontes"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Entre las páginas del diario apareció una carta sin nombre. El capitán la había escrito antes de salir del puerto. Nadie quiso abrirla. Clara propuso guardarla hasta que alguien pudiera explicar por qué estaba allí.",
  "sk": "Medzi stránkami denníka sa objavil list bez mena. Kapitán ho napísal ešte pred vyplávaním z prístavu. Nikto ho nechcel otvoriť. Clara navrhla odložiť ho, kým niekto nebude vedieť vysvetliť, prečo tam je.",
  "vocab": [
   [
    "destinatario",
    "adresát",
    "La persona a quien se dirige un mensaje.",
    "Osoba, ktorej je správa určená."
   ],
   [
    "había escrito",
    "napísal už predtým",
    "Algo anterior a otro punto pasado.",
    "Niečo skoršie než iný minulý bod."
   ],
   [
    "nadie",
    "nikto",
    "Indica la ausencia de una persona que cumpla lo dicho.",
    "Označuje neprítomnosť osoby, ktorá by spĺňala uvedené."
   ]
  ],
  "questions": [
   [
    "En «La carta sin destinatario», ¿qué idea resume mejor lo que ocurre?",
    [
     "El grupo decide esperar antes de abrir una carta.",
     "La calidad de una ruta no depende solo del tiempo.",
     "Representar bien otra postura mejora el desacuerdo."
    ],
    0,
    "Celá scéna podporuje tento výklad: Skupina sa rozhodne počkať s otvorením listu.",
    "El conjunto de la escena apoya esta lectura: El grupo decide esperar antes de abrir una carta."
   ],
   [
    "¿Qué significa «destinatario» en «La carta sin destinatario»?",
    [
     "El lugar o resultado al que se llega.",
     "La relación que permite interpretar los valores de un gráfico.",
     "La persona a quien se dirige un mensaje."
    ],
    2,
    "V tomto kontexte má „destinatario“ tento význam.",
    "En este contexto, «destinatario» tiene este sentido."
   ],
   [
    "¿Qué aporta «había escrito» a la escena «La carta sin destinatario»?",
    [
     "Una petición de no hacer algo.",
     "Algo anterior a otro punto pasado.",
     "Una previsión o promesa sobre después."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La carta sin destinatario»?",
    [
     "Rosa tardó cinco minutos más.",
     "La moderadora propuso explicar primero la opción contraria.",
     "La carta estaba dentro de un diario."
    ],
    2,
    "Text to uvádza: List bol v denníku.",
    "El texto lo indica: La carta estaba dentro de un diario."
   ]
  ],
  "discussion": [
   "Kedy máme právo čítať cudzí list?",
   "¿Cuándo tenemos derecho a leer una carta ajena?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-001"
 },
 {
  "id": "reading-002",
  "topic": "sea",
  "title": [
   "Svetlo na pobreží",
   "Una luz en la costa"
  ],
  "tag": [
   "More, plavby a obzory",
   "Mar, viajes y horizontes"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "La luz se encendía cada noche a la misma hora. Inés creía que era una señal para los barcos. Cuando habló con el vecino, descubrió una explicación más sencilla: alguien dejaba la lámpara encendida para que su hermana encontrara el camino.",
  "sk": "Svetlo sa každý večer rozsvietilo v rovnakom čase. Inés si myslela, že je to signál pre lode. Keď sa porozprávala so susedom, objavila jednoduchšie vysvetlenie: niekto nechával lampu svietiť, aby jeho sestra našla cestu.",
  "vocab": [
   [
    "dejar encendido",
    "nechať rozsvietené",
    "Mantener una luz funcionando.",
    "Ponechať svetlo zapnuté."
   ],
   [
    "se encendía",
    "rozsvecovalo sa",
    "Una situación, costumbre o acción en curso en el pasado.",
    "Minulá situácia, zvyk alebo prebiehajúci dej."
   ],
   [
    "para que",
    "aby",
    "Introduce el propósito de una acción.",
    "Uvádza účel činnosti."
   ]
  ],
  "questions": [
   [
    "En «Una luz en la costa», ¿qué idea resume mejor lo que ocurre?",
    [
     "La incertidumbre puede llenarse con relatos distintos.",
     "Una prueba reversible facilita decidir.",
     "Una señal misteriosa tiene un motivo cotidiano."
    ],
    2,
    "Celá scéna podporuje tento výklad: Záhadný signál má každodenný dôvod.",
    "El conjunto de la escena apoya esta lectura: Una señal misteriosa tiene un motivo cotidiano."
   ],
   [
    "¿Qué significa «dejar encendido» en «Una luz en la costa»?",
    [
     "Que apoya una idea o una posibilidad.",
     "Mantener una luz funcionando.",
     "Que parece real sin serlo necesariamente."
    ],
    1,
    "V tomto kontexte má „dejar encendido“ tento význam.",
    "En este contexto, «dejar encendido» tiene este sentido."
   ],
   [
    "¿Qué aporta «se encendía» a la escena «Una luz en la costa»?",
    [
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Una luz en la costa»?",
    [
     "La prueba duraría una semana.",
     "La lámpara ayudaba a una hermana.",
     "Había transcurrido media hora."
    ],
    1,
    "Text to uvádza: Lampa pomáhala sestre.",
    "El texto lo indica: La lámpara ayudaba a una hermana."
   ]
  ],
  "discussion": [
   "Prečo niekedy uprednostníme záhadné vysvetlenie?",
   "¿Por qué preferimos a veces una explicación misteriosa?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-002"
 },
 {
  "id": "reading-003",
  "topic": "sea",
  "title": [
   "Meno búrky",
   "El nombre de la tormenta"
  ],
  "tag": [
   "More, plavby a obzory",
   "Mar, viajes y horizontes"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "«No llamemos desastre a lo que aún no conocemos», dijo Julia. El cielo estaba oscuro, pero el mar seguía tranquilo. El marinero más joven preguntó si debían volver. Julia decidió consultar el mapa antes de responder.",
  "sk": "„Nenazývajme katastrofou niečo, čo ešte nepoznáme,“ povedala Julia. Obloha bola tmavá, ale more zostávalo pokojné. Najmladší námorník sa opýtal, či sa majú vrátiť. Julia sa pred odpoveďou rozhodla pozrieť na mapu.",
  "vocab": [
   [
    "consultar",
    "pozrieť si informácie",
    "Buscar orientación en una fuente.",
    "Hľadať usmernenie v informačnom zdroji."
   ],
   [
    "No llamemos",
    "nenazývajme",
    "Una petición de no hacer algo.",
    "Žiadosť, aby sa niečo nerobilo."
   ],
   [
    "antes de",
    "predtým než",
    "Sitúa algo antes de otro momento o acción.",
    "Umiestňuje niečo pred iný okamih alebo činnosť."
   ]
  ],
  "questions": [
   [
    "En «El nombre de la tormenta», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una buena pregunta puede cerrar mejor que una victoria.",
     "Julia busca información antes de valorar el riesgo.",
     "Una molestia habitual también podía orientar."
    ],
    1,
    "Celá scéna podporuje tento výklad: Julia hľadá informácie pred posúdením rizika.",
    "El conjunto de la escena apoya esta lectura: Julia busca información antes de valorar el riesgo."
   ],
   [
    "¿Qué significa «consultar» en «El nombre de la tormenta»?",
    [
     "Buscar orientación en una fuente.",
     "Que respeta el carácter de algo.",
     "Escribir algo para conservarlo y revisarlo."
    ],
    0,
    "V tomto kontexte má „consultar“ tento význam.",
    "En este contexto, «consultar» tiene este sentido."
   ],
   [
    "¿Qué aporta «No llamemos» a la escena «El nombre de la tormenta»?",
    [
     "Una situación, costumbre o acción en curso en el pasado.",
     "Un resultado ya terminado en un punto futuro.",
     "Una petición de no hacer algo."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El nombre de la tormenta»?",
    [
     "El mar seguía tranquilo.",
     "El reloj estuvo una semana sin sonar.",
     "Decidieron qué investigar después."
    ],
    0,
    "Text to uvádza: More zostávalo pokojné.",
    "El texto lo indica: El mar seguía tranquilo."
   ]
  ],
  "discussion": [
   "Pomáha pomenovanie nebezpečenstva pochopiť ho?",
   "¿Poner nombre a un peligro ayuda a entenderlo?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-003"
 },
 {
  "id": "reading-004",
  "topic": "sea",
  "title": [
   "Dve mapy",
   "Dos mapas"
  ],
  "tag": [
   "More, plavby a obzory",
   "Mar, viajes y horizontes"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Mateo extendió dos mapas sobre la mesa. En uno aparecía una cala que faltaba en el otro. No sabía cuál era más reciente. «Puede que los dos tengan razón», observó Sara: quizá mostraban la costa con propósitos distintos.",
  "sk": "Mateo rozložil na stôl dve mapy. Na jednej bola zátoka, ktorá na druhej chýbala. Nevedel, ktorá je novšia. „Možno majú obe pravdu,“ poznamenala Sara: azda zobrazovali pobrežie s odlišnými zámermi.",
  "vocab": [
   [
    "cala",
    "malá zátoka",
    "Una entrada pequeña del mar en la costa.",
    "Malý morský záliv na pobreží."
   ],
   [
    "tengan",
    "mali by",
    "Un contenido ligado a un deseo, reacción o acción pendiente.",
    "Obsah spojený so želaním, reakciou alebo očakávaným dejom."
   ],
   [
    "no",
    "nie",
    "Niega un contenido.",
    "Popiera obsah."
   ]
  ],
  "questions": [
   [
    "En «Dos mapas», ¿qué idea resume mejor lo que ocurre?",
    [
     "Dos representaciones diferentes pueden tener usos distintos.",
     "Una regla compartida puede funcionar sin una fila visible.",
     "Explicar el problema con claridad ayuda a colaborar."
    ],
    0,
    "Celá scéna podporuje tento výklad: Dve odlišné zobrazenia môžu mať rôzne použitie.",
    "El conjunto de la escena apoya esta lectura: Dos representaciones diferentes pueden tener usos distintos."
   ],
   [
    "¿Qué significa «cala» en «Dos mapas»?",
    [
     "Una interrupción breve que organiza el discurso.",
     "Ser compatible con otras partes o datos.",
     "Una entrada pequeña del mar en la costa."
    ],
    2,
    "V tomto kontexte má „cala“ tento význam.",
    "En este contexto, «cala» tiene este sentido."
   ],
   [
    "¿Qué aporta «tengan» a la escena «Dos mapas»?",
    [
     "Una petición de no hacer algo.",
     "Un contenido ligado a un deseo, reacción o acción pendiente.",
     "Algo anterior a otro punto pasado."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Dos mapas»?",
    [
     "Una mujer indicó que era la última.",
     "Los hoteles tenían nombres parecidos.",
     "Solo uno de los mapas mostraba una cala."
    ],
    2,
    "Text to uvádza: Iba jedna mapa zobrazovala zátoku.",
    "El texto lo indica: Solo uno de los mapas mostraba una cala."
   ]
  ],
  "discussion": [
   "Môže byť mapa užitočná, aj keď neukazuje všetko?",
   "¿Puede un mapa ser útil sin mostrarlo todo?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-004"
 },
 {
  "id": "reading-005",
  "topic": "sea",
  "title": [
   "Ticho prístavu",
   "El silencio del puerto"
  ],
  "tag": [
   "More, plavby a obzory",
   "Mar, viajes y horizontes"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "A las seis, el puerto parecía vacío. Sin embargo, Elena oía pasos dentro de los barcos y voces detrás de las puertas. Había confundido la falta de movimiento visible con la ausencia de trabajo. Sacó la libreta y cambió la primera frase de su relato.",
  "sk": "O šiestej vyzeral prístav prázdny. Elena však počula kroky v lodiach a hlasy za dverami. Pomýlila si nedostatok viditeľného pohybu s neprítomnosťou práce. Vytiahla zápisník a zmenila prvú vetu svojho príbehu.",
  "vocab": [
   [
    "sin embargo",
    "avšak",
    "Introduce un contraste con lo anterior.",
    "Uvádza protiklad k predchádzajúcemu tvrdeniu."
   ],
   [
    "Había confundido",
    "predtým si pomýlila",
    "Algo anterior a otro punto pasado.",
    "Niečo skoršie než iný minulý bod."
   ],
   [
    "sin embargo",
    "avšak",
    "Introduce una idea que contrasta con la anterior.",
    "Uvádza myšlienku v protiklade k predchádzajúcej."
   ]
  ],
  "questions": [
   [
    "En «El silencio del puerto», ¿qué idea resume mejor lo que ocurre?",
    [
     "La memoria del barrio puede dejar espacio al cambio.",
     "Un cambio de plan puede crear otro tipo de experiencia.",
     "Elena corrige una impresión después de escuchar."
    ],
    2,
    "Celá scéna podporuje tento výklad: Elena po počúvaní opraví svoj prvý dojem.",
    "El conjunto de la escena apoya esta lectura: Elena corrige una impresión después de escuchar."
   ],
   [
    "¿Qué significa «sin embargo» en «El silencio del puerto»?",
    [
     "Indicaciones que explican cómo realizar una tarea.",
     "Introduce un contraste con lo anterior.",
     "Un comentario que presenta y valora una obra."
    ],
    1,
    "V tomto kontexte má „sin embargo“ tento význam.",
    "En este contexto, «sin embargo» tiene este sentido."
   ],
   [
    "¿Qué aporta «Había confundido» a la escena «El silencio del puerto»?",
    [
     "Algo anterior a otro punto pasado.",
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El silencio del puerto»?",
    [
     "La lluvia impidió la excursión.",
     "Elena llevaba una libreta.",
     "Propusieron dejar una parte sin pintar."
    ],
    1,
    "Text to uvádza: Elena mala zápisník.",
    "El texto lo indica: Elena llevaba una libreta."
   ]
  ],
  "discussion": [
   "Čo môžeme prehliadnuť, keď sa iba pozeráme?",
   "¿Qué podemos pasar por alto cuando solo miramos?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-005"
 },
 {
  "id": "reading-006",
  "topic": "sea",
  "title": [
   "Nové lano",
   "La cuerda nueva"
  ],
  "tag": [
   "More, plavby a obzory",
   "Mar, viajes y horizontes"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "La cuerda nueva era más ligera, pero Tomás seguía usando la antigua. «Nunca me ha fallado», explicó. Su compañera no discutió: le pidió que compararan ambas antes de elegir. La costumbre podía ser una razón, pero no la única.",
  "sk": "Nové lano bolo ľahšie, ale Tomás stále používal staré. „Nikdy ma nesklamalo,“ vysvetlil. Kolegyňa sa nehádala: požiadala ho, aby pred výberom porovnali obe. Zvyk mohol byť dôvodom, ale nie jediným.",
  "vocab": [
   [
    "fallar",
    "zlyhať",
    "No cumplir la función esperada.",
    "Nesplniť očakávanú funkciu."
   ],
   [
    "ha fallado",
    "zlyhalo",
    "Una acción anterior presentada como noticia o experiencia.",
    "Predchádzajúci dej podaný ako správa alebo skúsenosť."
   ],
   [
    "antes de",
    "predtým než",
    "Sitúa algo antes de otro momento o acción.",
    "Umiestňuje niečo pred iný okamih alebo činnosť."
   ]
  ],
  "questions": [
   [
    "En «La cuerda nueva», ¿qué idea resume mejor lo que ocurre?",
    [
     "Preguntar por un plato puede abrir una historia.",
     "Una elección habitual se somete a comparación.",
     "Una mejora debe considerar a usuarios diferentes."
    ],
    1,
    "Celá scéna podporuje tento výklad: Obvyklá voľba sa podrobí porovnaniu.",
    "El conjunto de la escena apoya esta lectura: Una elección habitual se somete a comparación."
   ],
   [
    "¿Qué significa «fallar» en «La cuerda nueva»?",
    [
     "No cumplir la función esperada.",
     "Despertar interés por algo que no se entiende del todo.",
     "Los límites dentro de los que algo sirve."
    ],
    0,
    "V tomto kontexte má „fallar“ tento význam.",
    "En este contexto, «fallar» tiene este sentido."
   ],
   [
    "¿Qué aporta «ha fallado» a la escena «La cuerda nueva»?",
    [
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo.",
     "Una acción anterior presentada como noticia o experiencia."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La cuerda nueva»?",
    [
     "La cuerda nueva pesaba menos.",
     "La nueva puerta requería más fuerza.",
     "El camarero compartió un recuerdo."
    ],
    0,
    "Text to uvádza: Nové lano vážilo menej.",
    "El texto lo indica: La cuerda nueva pesaba menos."
   ]
  ],
  "discussion": [
   "Kedy sa oplatí zmeniť niečo, čo funguje?",
   "¿Cuándo merece la pena cambiar algo que funciona?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-006"
 },
 {
  "id": "reading-007",
  "topic": "sea",
  "title": [
   "Predstavovaný ostrov",
   "Una isla imaginada"
  ],
  "tag": [
   "More, plavby a obzory",
   "Mar, viajes y horizontes"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Si llegáramos a una isla desconocida, ¿qué buscaríamos primero? Las respuestas del grupo fueron distintas: agua, sombra, un lugar alto. Al final comprendieron que cada elección revelaba una preocupación diferente, no necesariamente un error.",
  "sk": "Keby sme dorazili na neznámy ostrov, čo by sme hľadali najprv? Odpovede skupiny boli rôzne: vodu, tieň, vyvýšené miesto. Napokon pochopili, že každá voľba odhaľuje inú obavu, nie nevyhnutne chybu.",
  "vocab": [
   [
    "preocupación",
    "obava",
    "Algo que ocupa la atención y causa inquietud.",
    "Niečo, čo zamestnáva pozornosť a vyvoláva nepokoj."
   ],
   [
    "llegáramos",
    "keby sme dorazili",
    "Una situación imaginada o ligada a un marco pasado.",
    "Predstavovaná situácia alebo súvislosť s minulým rámcom."
   ],
   [
    "no",
    "nie",
    "Niega un contenido.",
    "Popiera obsah."
   ]
  ],
  "questions": [
   [
    "En «Una isla imaginada», ¿qué idea resume mejor lo que ocurre?",
    [
     "Un supuesto permite comparar prioridades.",
     "Respetar un límite puede estimular la creatividad.",
     "Renunciar a cantidad permite prestar más atención."
    ],
    0,
    "Celá scéna podporuje tento výklad: Predstavovaná situácia umožňuje porovnať priority.",
    "El conjunto de la escena apoya esta lectura: Un supuesto permite comparar prioridades."
   ],
   [
    "¿Qué significa «preocupación» en «Una isla imaginada»?",
    [
     "La sucesión principal de hechos de una historia.",
     "Un valor que resume un conjunto de cantidades.",
     "Algo que ocupa la atención y causa inquietud."
    ],
    2,
    "V tomto kontexte má „preocupación“ tento význam.",
    "En este contexto, «preocupación» tiene este sentido."
   ],
   [
    "¿Qué aporta «llegáramos» a la escena «Una isla imaginada»?",
    [
     "Una petición de no hacer algo.",
     "Una situación imaginada o ligada a un marco pasado.",
     "Algo anterior a otro punto pasado."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Una isla imaginada»?",
    [
     "La mesa dejó espacio para el tronco.",
     "El plan inicial incluía cuatro pueblos.",
     "Una de las respuestas fue buscar sombra."
    ],
    2,
    "Text to uvádza: Jednou z odpovedí bolo hľadať tieň.",
    "El texto lo indica: Una de las respuestas fue buscar sombra."
   ]
  ],
  "discussion": [
   "Čo o nás hovorí prvá otázka, ktorú položíme?",
   "¿Qué dice de nosotros la primera pregunta que hacemos?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-007"
 },
 {
  "id": "reading-008",
  "topic": "sea",
  "title": [
   "Plánovaný návrat",
   "El regreso previsto"
  ],
  "tag": [
   "More, plavby a obzory",
   "Mar, viajes y horizontes"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "«Antes del anochecer habremos vuelto», prometió el patrón. Lucía preguntó qué harían si cambiaba el viento. La pregunta no molestó a nadie: permitió acordar otro plan. Tener una alternativa les dio más tranquilidad que repetir la promesa.",
  "sk": "„Pred zotmením už budeme späť,“ sľúbil lodník. Lucía sa opýtala, čo urobia, ak sa zmení vietor. Otázka nikomu neprekážala: umožnila dohodnúť náhradný plán. Alternatíva im priniesla viac pokoja než opakovanie sľubu.",
  "vocab": [
   [
    "anochecer",
    "zotmenie",
    "El momento en que empieza la noche.",
    "Chvíľa, keď sa začína noc."
   ],
   [
    "habremos vuelto",
    "už budeme späť",
    "Un resultado ya terminado en un punto futuro.",
    "Výsledok už dokončený v budúcom bode."
   ],
   [
    "nadie",
    "nikto",
    "Indica la ausencia de una persona que cumpla lo dicho.",
    "Označuje neprítomnosť osoby, ktorá by spĺňala uvedené."
   ]
  ],
  "questions": [
   [
    "En «El regreso previsto», ¿qué idea resume mejor lo que ocurre?",
    [
     "Un dibujo compartido cambia la forma de discutir.",
     "Nombres diferentes pueden señalar el mismo lugar.",
     "Pensar en una alternativa mejora un plan."
    ],
    2,
    "Celá scéna podporuje tento výklad: Premyslenie alternatívy zlepšuje plán.",
    "El conjunto de la escena apoya esta lectura: Pensar en una alternativa mejora un plan."
   ],
   [
    "¿Qué significa «anochecer» en «El regreso previsto»?",
    [
     "Cuidado al afirmar algo o actuar.",
     "El momento en que empieza la noche.",
     "La posición que adopta el cuerpo."
    ],
    1,
    "V tomto kontexte má „anochecer“ tento význam.",
    "En este contexto, «anochecer» tiene este sentido."
   ],
   [
    "¿Qué aporta «habremos vuelto» a la escena «El regreso previsto»?",
    [
     "Un resultado ya terminado en un punto futuro.",
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El regreso previsto»?",
    [
     "Una vecina aclaró la diferencia.",
     "Lucía preguntó por un cambio de viento.",
     "Todos usaron el mismo papel."
    ],
    1,
    "Text to uvádza: Lucía sa pýtala na zmenu vetra.",
    "El texto lo indica: Lucía preguntó por un cambio de viento."
   ]
  ],
  "discussion": [
   "Potrebuje sľub náhradný plán?",
   "¿Una promesa necesita un plan alternativo?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-008"
 },
 {
  "id": "reading-009",
  "topic": "sea",
  "title": [
   "Naklonená fotografia",
   "La fotografía torcida"
  ],
  "tag": [
   "More, plavby a obzory",
   "Mar, viajes y horizontes"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "En la foto, el horizonte estaba torcido. Andrés quiso borrarla, pero su amiga le pidió que esperara. Aquel defecto le recordaba el movimiento del barco mejor que una imagen perfecta. Guardaron las dos versiones y discutieron cuál contaba más.",
  "sk": "Na fotografii bol obzor naklonený. Andrés ju chcel vymazať, ale kamarátka ho požiadala, aby počkal. Tá chyba jej pripomínala pohyb lode lepšie než dokonalý obrázok. Uložili obe verzie a debatovali, ktorá povie viac.",
  "vocab": [
   [
    "torcido",
    "naklonený",
    "Que no sigue la posición recta esperada.",
    "Ktorý nemá očakávanú rovnú polohu."
   ],
   [
    "estaba",
    "bol v danom stave",
    "Una situación, costumbre o acción en curso en el pasado.",
    "Minulá situácia, zvyk alebo prebiehajúci dej."
   ],
   [
    "pero",
    "ale",
    "Introduce un contraste.",
    "Uvádza protiklad."
   ]
  ],
  "questions": [
   [
    "En «La fotografía torcida», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una historia puede cambiar nuestra atención al paisaje.",
     "Un defecto visual puede conservar una experiencia.",
     "La memoria de una persona conecta una dirección con su pasado."
    ],
    1,
    "Celá scéna podporuje tento výklad: Vizuálna chyba môže zachovať zážitok.",
    "El conjunto de la escena apoya esta lectura: Un defecto visual puede conservar una experiencia."
   ],
   [
    "¿Qué significa «torcido» en «La fotografía torcida»?",
    [
     "Que no sigue la posición recta esperada.",
     "El momento de separarse de alguien.",
     "Buscar información hasta aclarar algo."
    ],
    0,
    "V tomto kontexte má „torcido“ tento význam.",
    "En este contexto, «torcido» tiene este sentido."
   ],
   [
    "¿Qué aporta «estaba» a la escena «La fotografía torcida»?",
    [
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo.",
     "Una situación, costumbre o acción en curso en el pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La fotografía torcida»?",
    [
     "Conservaron dos versiones de la fotografía.",
     "Una vecina reconoció el nombre del destinatario.",
     "Rosa buscó un puente al regresar."
    ],
    0,
    "Text to uvádza: Zachovali dve verzie fotografie.",
    "El texto lo indica: Conservaron dos versiones de la fotografía."
   ]
  ],
  "discussion": [
   "Kedy nedokonalý obraz lepšie vystihuje zážitok?",
   "¿Cuándo una imagen imperfecta cuenta mejor lo vivido?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-009"
 },
 {
  "id": "reading-010",
  "topic": "sea",
  "title": [
   "Hlas z rádia",
   "La voz de la radio"
  ],
  "tag": [
   "More, plavby a obzory",
   "Mar, viajes y horizontes"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Durante la travesía escucharon una voz que pedía repetir un mensaje. Nadie respondió hasta comprobar el canal. Después supieron que la llamada no era para ellos. Haber entendido las palabras no significaba haber entendido la situación.",
  "sk": "Počas plavby počuli hlas, ktorý žiadal zopakovať správu. Nikto neodpovedal, kým neoverili kanál. Potom zistili, že volanie nebolo určené im. Rozumieť slovám neznamenalo rozumieť situácii.",
  "vocab": [
   [
    "travesía",
    "plavba",
    "Un recorrido que cruza una extensión de agua.",
    "Cesta cez vodnú plochu."
   ],
   [
    "supieron",
    "zistili",
    "Un episodio de un relato pasado.",
    "Epizóda minulého príbehu."
   ],
   [
    "nadie",
    "nikto",
    "Indica la ausencia de una persona que cumpla lo dicho.",
    "Označuje neprítomnosť osoby, ktorá by spĺňala uvedené."
   ]
  ],
  "questions": [
   [
    "En «La voz de la radio», ¿qué idea resume mejor lo que ocurre?",
    [
     "Comprender un mensaje exige reconocer su contexto.",
     "Repetir una prueba ayuda a valorar un resultado.",
     "Prepararse también implica aceptar cierta incertidumbre."
    ],
    0,
    "Celá scéna podporuje tento výklad: Porozumenie správe si vyžaduje rozpoznanie kontextu.",
    "El conjunto de la escena apoya esta lectura: Comprender un mensaje exige reconocer su contexto."
   ],
   [
    "¿Qué significa «travesía» en «La voz de la radio»?",
    [
     "El tiempo transcurrido desde su origen.",
     "Evitar gastar un recurso innecesariamente.",
     "Un recorrido que cruza una extensión de agua."
    ],
    2,
    "V tomto kontexte má „travesía“ tento význam.",
    "En este contexto, «travesía» tiene este sentido."
   ],
   [
    "¿Qué aporta «supieron» a la escena «La voz de la radio»?",
    [
     "Una petición de no hacer algo.",
     "Un episodio de un relato pasado.",
     "Una previsión o promesa sobre después."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La voz de la radio»?",
    [
     "El equipo utilizó otro instrumento.",
     "La maleta se estaba quedando sin espacio.",
     "Comprobaron el canal antes de responder."
    ],
    2,
    "Text to uvádza: Pred odpoveďou overili kanál.",
    "El texto lo indica: Comprobaron el canal antes de responder."
   ]
  ],
  "discussion": [
   "Aké informácie potrebujeme okrem slov?",
   "¿Qué información necesitamos además de las palabras?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-010"
 },
 {
  "id": "reading-011",
  "topic": "books",
  "title": [
   "Zahnutá stránka",
   "La página doblada"
  ],
  "tag": [
   "Knihy, rozprávači a preklad",
   "Libros, narradores y traducción"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Clara encontró una página doblada en el libro de la biblioteca. La frase marcada no parecía importante. Solo al terminar la novela entendió por qué alguien había querido volver a ella. Empezó otra vez, ahora con una pregunta distinta.",
  "sk": "Clara našla v knižničnej knihe zahnutú stránku. Označená veta sa nezdala dôležitá. Až po dočítaní románu pochopila, prečo sa k nej niekto chcel vrátiť. Začala znovu, tentoraz s inou otázkou.",
  "vocab": [
   [
    "marcada",
    "označená",
    "Señalada para llamar la atención sobre ella.",
    "Zvýraznená, aby pritiahla pozornosť."
   ],
   [
    "entendió",
    "pochopila",
    "Un episodio de un relato pasado.",
    "Epizóda minulého príbehu."
   ],
   [
    "solo",
    "iba",
    "Limita la cantidad o el alcance.",
    "Obmedzuje množstvo alebo rozsah."
   ]
  ],
  "questions": [
   [
    "En «La página doblada», ¿qué idea resume mejor lo que ocurre?",
    [
     "La presentación visual puede exagerar una diferencia.",
     "Dos recomendaciones pueden ser complementarias.",
     "El final cambia la lectura de una frase anterior."
    ],
    2,
    "Celá scéna podporuje tento výklad: Záver mení čítanie skoršej vety.",
    "El conjunto de la escena apoya esta lectura: El final cambia la lectura de una frase anterior."
   ],
   [
    "¿Qué significa «marcada» en «La página doblada»?",
    [
     "Modificar algo para que funcione de forma adecuada.",
     "Señalada para llamar la atención sobre ella.",
     "Un mensaje que informa de algo importante."
    ],
    1,
    "V tomto kontexte má „marcada“ tento význam.",
    "En este contexto, «marcada» tiene este sentido."
   ],
   [
    "¿Qué aporta «entendió» a la escena «La página doblada»?",
    [
     "Un episodio de un relato pasado.",
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La página doblada»?",
    [
     "Elena visitó los dos puntos de vista.",
     "El libro pertenecía a una biblioteca.",
     "Julia añadió una escala."
    ],
    1,
    "Text to uvádza: Kniha patrila knižnici.",
    "El texto lo indica: El libro pertenecía a una biblioteca."
   ]
  ],
  "discussion": [
   "Čo sa mení, keď príbeh čítame znova?",
   "¿Qué cambia cuando releemos una historia?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-011"
 },
 {
  "id": "reading-012",
  "topic": "books",
  "title": [
   "Príliš istý rozprávač",
   "Un narrador demasiado seguro"
  ],
  "tag": [
   "Knihy, rozprávači a preklad",
   "Libros, narradores y traducción"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "El narrador aseguraba conocer los motivos de todos. Sin embargo, cuando su hermano hablaba, cambiaba de tema. Irene empezó a desconfiar no de sus datos, sino de sus silencios. Quizá lo más revelador fuera aquello que evitaba contar.",
  "sk": "Rozprávač tvrdil, že pozná pohnútky všetkých. Keď však prehovoril jeho brat, menil tému. Irene začala pochybovať nie o jeho údajoch, ale o jeho mlčaní. Možno najviac odhaľovalo práve to, čomu sa vyhýbal.",
  "vocab": [
   [
    "revelador",
    "odhaľujúci",
    "Que ayuda a descubrir algo importante.",
    "Ktorý pomáha odhaliť niečo podstatné."
   ],
   [
    "fuera",
    "možno bolo",
    "Una situación imaginada o ligada a un marco pasado.",
    "Predstavovaná situácia alebo súvislosť s minulým rámcom."
   ],
   [
    "sin embargo",
    "avšak",
    "Introduce una idea que contrasta con la anterior.",
    "Uvádza myšlienku v protiklade k predchádzajúcej."
   ]
  ],
  "questions": [
   [
    "En «Un narrador demasiado seguro», ¿qué idea resume mejor lo que ocurre?",
    [
     "Un mensaje puede valer por el gesto y no por su rapidez.",
     "Los silencios hacen dudar de un narrador.",
     "Una explicación necesita saber qué podría cuestionarla."
    ],
    1,
    "Celá scéna podporuje tento výklad: Mlčanie vyvoláva pochybnosti o rozprávačovi.",
    "El conjunto de la escena apoya esta lectura: Los silencios hacen dudar de un narrador."
   ],
   [
    "¿Qué significa «revelador» en «Un narrador demasiado seguro»?",
    [
     "Que ayuda a descubrir algo importante.",
     "El espacio donde actúan los intérpretes.",
     "Volver a incorporar algo que se había quitado."
    ],
    0,
    "V tomto kontexte má „revelador“ tento význam.",
    "En este contexto, «revelador» tiene este sentido."
   ],
   [
    "¿Qué aporta «fuera» a la escena «Un narrador demasiado seguro»?",
    [
     "Algo anterior a otro punto pasado.",
     "Una petición de no hacer algo.",
     "Una situación imaginada o ligada a un marco pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Un narrador demasiado seguro»?",
    [
     "El narrador cambiaba de tema cuando hablaba su hermano.",
     "La profesora agradeció la pregunta.",
     "La amiga puso la postal junto al escritorio."
    ],
    0,
    "Text to uvádza: Rozprávač menil tému, keď hovoril jeho brat.",
    "El texto lo indica: El narrador cambiaba de tema cuando hablaba su hermano."
   ]
  ],
  "discussion": [
   "Môže rozprávač zavádzať bez priameho klamstva?",
   "¿Puede un narrador engañar sin mentir directamente?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-012"
 },
 {
  "id": "reading-013",
  "topic": "books",
  "title": [
   "Chýbajúce slovo",
   "La palabra que faltaba"
  ],
  "tag": [
   "Knihy, rozprávači a preklad",
   "Libros, narradores y traducción"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Dos traducciones usaban palabras distintas para la misma escena. Una sonaba amable; la otra, distante. El grupo dejó de preguntar cuál era correcta y empezó a preguntar qué relación creaba cada una entre los personajes.",
  "sk": "Dva preklady použili v rovnakej scéne odlišné slová. Jeden pôsobil priateľsky, druhý odmerane. Skupina sa prestala pýtať, ktorý je správny, a začala skúmať, aký vzťah každý vytvára medzi postavami.",
  "vocab": [
   [
    "distante",
    "odmeraný",
    "Que muestra poca cercanía emocional.",
    "Ktorý prejavuje malú citovú blízkosť."
   ],
   [
    "usaban",
    "používali",
    "Una situación, costumbre o acción en curso en el pasado.",
    "Minulá situácia, zvyk alebo prebiehajúci dej."
   ],
   [
    "y",
    "a",
    "Une elementos o acciones.",
    "Spája prvky alebo činnosti."
   ]
  ],
  "questions": [
   [
    "En «La palabra que faltaba», ¿qué idea resume mejor lo que ocurre?",
    [
     "La elección de una palabra modifica una relación.",
     "Registrar una ausencia también puede aportar información.",
     "Pedir orientación puede crear un contacto humano."
    ],
    0,
    "Celá scéna podporuje tento výklad: Výber slova mení vzťah.",
    "El conjunto de la escena apoya esta lectura: La elección de una palabra modifica una relación."
   ],
   [
    "¿Qué significa «distante» en «La palabra que faltaba»?",
    [
     "La práctica previa a una actuación.",
     "Ser suficiente para una necesidad.",
     "Que muestra poca cercanía emocional."
    ],
    2,
    "V tomto kontexte má „distante“ tento význam.",
    "En este contexto, «distante» tiene este sentido."
   ],
   [
    "¿Qué aporta «usaban» a la escena «La palabra que faltaba»?",
    [
     "Una petición de no hacer algo.",
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una previsión o promesa sobre después."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La palabra que faltaba»?",
    [
     "Luis registraba días sin avistamientos.",
     "El teléfono dejó de funcionar antes de la llegada.",
     "Compararon dos traducciones."
    ],
    2,
    "Text to uvádza: Porovnávali dva preklady.",
    "El texto lo indica: Compararon dos traducciones."
   ]
  ],
  "discussion": [
   "Čo sa môže stratiť aj pri správnom preklade slova?",
   "¿Qué puede perderse al traducir una palabra correctamente?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-013"
 },
 {
  "id": "reading-014",
  "topic": "books",
  "title": [
   "Najprv prečítať koniec",
   "Leer el final primero"
  ],
  "tag": [
   "Knihy, rozprávači a preklad",
   "Libros, narradores y traducción"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Pablo siempre leía la última página antes de empezar. Ana decía que así destruía la sorpresa. Él respondía que conocer el destino le permitía mirar mejor el camino. Ninguno convenció al otro, pero ambos descubrieron otra forma de leer.",
  "sk": "Pablo si vždy pred začiatkom prečítal poslednú stránku. Ana tvrdila, že tým ničí prekvapenie. Odpovedal, že poznanie cieľa mu umožňuje lepšie sledovať cestu. Ani jeden druhého nepresvedčil, ale obaja objavili iný spôsob čítania.",
  "vocab": [
   [
    "destino",
    "cieľ cesty",
    "El lugar o resultado al que se llega.",
    "Miesto alebo výsledok, ku ktorému smerujeme."
   ],
   [
    "leía",
    "čítaval",
    "Una situación, costumbre o acción en curso en el pasado.",
    "Minulá situácia, zvyk alebo prebiehajúci dej."
   ],
   [
    "ninguno",
    "ani jeden",
    "Niega que alguno de los mencionados cumpla lo dicho.",
    "Popiera, že niektorý zo spomenutých spĺňa uvedené."
   ]
  ],
  "questions": [
   [
    "En «Leer el final primero», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una idea atractiva sigue necesitando pruebas.",
     "Una memoria parcial puede conservarse sin inventar el resto.",
     "Dos lectores valoran de forma distinta la sorpresa."
    ],
    2,
    "Celá scéna podporuje tento výklad: Dvaja čitatelia odlišne hodnotia prekvapenie.",
    "El conjunto de la escena apoya esta lectura: Dos lectores valoran de forma distinta la sorpresa."
   ],
   [
    "¿Qué significa «destino» en «Leer el final primero»?",
    [
     "El momento de presentar un trabajo terminado.",
     "El lugar o resultado al que se llega.",
     "Una señal que deja el paso del tiempo o una acción."
    ],
    1,
    "V tomto kontexte má „destino“ tento význam.",
    "En este contexto, «destino» tiene este sentido."
   ],
   [
    "¿Qué aporta «leía» a la escena «Leer el final primero»?",
    [
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Leer el final primero»?",
    [
     "Isabel recordó una luz sobre una mesa.",
     "Pablo consultaba la última página.",
     "Ana organizó la información en dos columnas."
    ],
    1,
    "Text to uvádza: Pablo si pozeral poslednú stránku.",
    "El texto lo indica: Pablo consultaba la última página."
   ]
  ],
  "discussion": [
   "Mení znalosť konca nevyhnutne potešenie z čítania?",
   "¿Saber el final cambia necesariamente el placer de leer?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-014"
 },
 {
  "id": "reading-015",
  "topic": "books",
  "title": [
   "Nesympatická postava",
   "El personaje antipático"
  ],
  "tag": [
   "Knihy, rozprávači a preklad",
   "Libros, narradores y traducción"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "«No me gustaría cenar con ella», dijo Marta sobre la protagonista. «Pero quiero seguir leyéndola». La contradicción solo era aparente: una persona agradable y un personaje interesante no tienen por qué ser lo mismo.",
  "sk": "„Nechcela by som s ňou večerať,“ povedala Marta o hlavnej postave. „Chcem však o nej čítať ďalej.“ Rozpor bol iba zdanlivý: príjemný človek a zaujímavá literárna postava nemusia byť to isté.",
  "vocab": [
   [
    "aparente",
    "zdanlivý",
    "Que parece real sin serlo necesariamente.",
    "Ktorý sa javí skutočný, ale nemusí ním byť."
   ],
   [
    "gustaría",
    "páčilo by sa",
    "Una posibilidad o algo posterior visto desde el pasado.",
    "Možnosť alebo neskorší dej videný z minulosti."
   ],
   [
    "pero",
    "ale",
    "Introduce un contraste.",
    "Uvádza protiklad."
   ]
  ],
  "questions": [
   [
    "En «El personaje antipático», ¿qué idea resume mejor lo que ocurre?",
    [
     "Los recuerdos reflejan focos de atención diferentes.",
     "El interés literario no depende de la simpatía.",
     "Comparar exige revisar las condiciones iniciales."
    ],
    1,
    "Celá scéna podporuje tento výklad: Literárna zaujímavosť nezávisí od sympatie.",
    "El conjunto de la escena apoya esta lectura: El interés literario no depende de la simpatía."
   ],
   [
    "¿Qué significa «aparente» en «El personaje antipático»?",
    [
     "Que parece real sin serlo necesariamente.",
     "Una situación que daña la dignidad de alguien.",
     "Realizar lo prometido dentro de las condiciones acordadas."
    ],
    0,
    "V tomto kontexte má „aparente“ tento význam.",
    "En este contexto, «aparente» tiene este sentido."
   ],
   [
    "¿Qué aporta «gustaría» a la escena «El personaje antipático»?",
    [
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una petición de no hacer algo.",
     "Una posibilidad o algo posterior visto desde el pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El personaje antipático»?",
    [
     "Marta quería continuar la lectura.",
     "Solo un grupo podía ver el reloj.",
     "Un amigo recordaba especialmente la comida."
    ],
    0,
    "Text to uvádza: Marta chcela pokračovať v čítaní.",
    "El texto lo indica: Marta quería continuar la lectura."
   ]
  ],
  "discussion": [
   "Ktoré postavy ťa zaujímajú, hoci ich neobdivuješ?",
   "¿Qué personajes te interesan aunque no los admires?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-015"
 },
 {
  "id": "reading-016",
  "topic": "books",
  "title": [
   "Požičaný názov",
   "Un título prestado"
  ],
  "tag": [
   "Knihy, rozprávači a preklad",
   "Libros, narradores y traducción"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "La editora propuso un título más claro. El autor aceptó hasta que vio la portada: parecía anunciar una aventura, no una conversación entre dos hermanas. Decidieron buscar una frase menos brillante, pero más fiel al libro.",
  "sk": "Redaktorka navrhla jasnejší názov. Autor súhlasil, kým neuvidel obálku: sľubovala skôr dobrodružstvo než rozhovor dvoch sestier. Rozhodli sa hľadať menej pôsobivú vetu, ktorá však bude vernejšia knihe.",
  "vocab": [
   [
    "fiel",
    "verný",
    "Que respeta el carácter de algo.",
    "Ktorý rešpektuje povahu niečoho."
   ],
   [
    "parecía",
    "zdalo sa",
    "Una situación, costumbre o acción en curso en el pasado.",
    "Minulá situácia, zvyk alebo prebiehajúci dej."
   ],
   [
    "pero",
    "ale",
    "Introduce un contraste.",
    "Uvádza protiklad."
   ]
  ],
  "questions": [
   [
    "En «Un título prestado», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una promesa atractiva puede representar mal un libro.",
     "Las excepciones pueden precisar una regla.",
     "Una reparación puede añadir significado a un objeto."
    ],
    0,
    "Celá scéna podporuje tento výklad: Príťažlivý prísľub môže knihu skresliť.",
    "El conjunto de la escena apoya esta lectura: Una promesa atractiva puede representar mal un libro."
   ],
   [
    "¿Qué significa «fiel» en «Un título prestado»?",
    [
     "Una relación entre cosas que comparten rasgos.",
     "Decidir no conservar o perseguir algo.",
     "Que respeta el carácter de algo."
    ],
    2,
    "V tomto kontexte má „fiel“ tento význam.",
    "En este contexto, «fiel» tiene este sentido."
   ],
   [
    "¿Qué aporta «parecía» a la escena «Un título prestado»?",
    [
     "Una petición de no hacer algo.",
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una previsión o promesa sobre después."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Un título prestado»?",
    [
     "La colega empezó por el final del informe.",
     "Ana no quiso ocultar la reparación.",
     "La historia trataba de dos hermanas."
    ],
    2,
    "Text to uvádza: Príbeh bol o dvoch sestrách.",
    "El texto lo indica: La historia trataba de dos hermanas."
   ]
  ],
  "discussion": [
   "Čo by mal sľubovať dobrý názov?",
   "¿Qué debería prometer un buen título?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-016"
 },
 {
  "id": "reading-017",
  "topic": "books",
  "title": [
   "Čítanie nahlas",
   "La lectura en voz alta"
  ],
  "tag": [
   "Knihy, rozprávači a preklad",
   "Libros, narradores y traducción"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Al escuchar el párrafo, Luis se rio. Cuando lo había leído en silencio, no había notado ninguna broma. La pausa y el tono cambiaban la interpretación. Pidió que alguien más lo leyera sin imitar la primera voz. «Me alegra que hayas notado la broma», comentó Ana.",
  "sk": "Pri počúvaní odseku sa Luis zasmial. Keď ho čítal potichu, nevšimol si žiadny vtip. Prestávka a tón menili výklad. Požiadal, aby ho niekto ďalší prečítal bez napodobňovania prvého hlasu. „Teší ma, že si si všimol vtip,“ poznamenala Ana.",
  "vocab": [
   [
    "pausa",
    "prestávka v reči",
    "Una interrupción breve que organiza el discurso.",
    "Krátke prerušenie, ktoré usporadúva reč."
   ],
   [
    "hayas notado",
    "že si si všimol",
    "Algo anterior dentro de una esperanza o reacción.",
    "Skorší dej v nádeji alebo reakcii."
   ],
   [
    "cuando",
    "keď",
    "Relaciona una acción con un momento.",
    "Spája dej s časovým bodom."
   ]
  ],
  "questions": [
   [
    "En «La lectura en voz alta», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una conclusión depende de a quién incluye.",
     "Elegir qué guardar puede dar sentido a un archivo.",
     "La voz puede descubrir un humor que pasa inadvertido."
    ],
    2,
    "Celá scéna podporuje tento výklad: Hlas môže odhaliť nepovšimnutý humor.",
    "El conjunto de la escena apoya esta lectura: La voz puede descubrir un humor que pasa inadvertido."
   ],
   [
    "¿Qué significa «pausa» en «La lectura en voz alta»?",
    [
     "Una expresión de reconocimiento positivo.",
     "Una interrupción breve que organiza el discurso.",
     "Algo que dificulta acceder o participar."
    ],
    1,
    "V tomto kontexte má „pausa“ tento význam.",
    "En este contexto, «pausa» tiene este sentido."
   ],
   [
    "¿Qué aporta «hayas notado» a la escena «La lectura en voz alta»?",
    [
     "Algo anterior dentro de una esperanza o reacción.",
     "Algo anterior a otro punto pasado.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La lectura en voz alta»?",
    [
     "Pedro conservó una frase amable.",
     "Luis no había detectado la broma al leer en silencio.",
     "Había personas que habían abandonado el proyecto."
    ],
    1,
    "Text to uvádza: Luis pri tichom čítaní neodhalil vtip.",
    "El texto lo indica: Luis no había detectado la broma al leer en silencio."
   ]
  ],
  "discussion": [
   "Koľko významu sa nachádza v hlase?",
   "¿Cuánto del significado está en la voz?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-017"
 },
 {
  "id": "reading-018",
  "topic": "books",
  "title": [
   "Krátka recenzia",
   "La reseña breve"
  ],
  "tag": [
   "Knihy, rozprávači a preklad",
   "Libros, narradores y traducción"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Elena escribió que la novela era aburrida. Antes de publicarlo, se preguntó qué quería decir exactamente. Borró el adjetivo y explicó qué escenas le habían parecido repetidas. Su crítica se volvió más larga, pero también más útil.",
  "sk": "Elena napísala, že román je nudný. Pred zverejnením sa spýtala samej seba, čo tým presne myslí. Prídavné meno vymazala a vysvetlila, ktoré scény sa jej zdali opakované. Kritika bola dlhšia, ale aj užitočnejšia.",
  "vocab": [
   [
    "reseña",
    "recenzia",
    "Un comentario que presenta y valora una obra.",
    "Komentár, ktorý predstavuje a hodnotí dielo."
   ],
   [
    "se volvió",
    "stala sa",
    "Un episodio de un relato pasado.",
    "Epizóda minulého príbehu."
   ],
   [
    "antes de",
    "predtým než",
    "Sitúa algo antes de otro momento o acción.",
    "Umiestňuje niečo pred iný okamih alebo činnosť."
   ]
  ],
  "questions": [
   [
    "En «La reseña breve», ¿qué idea resume mejor lo que ocurre?",
    [
     "La práctica compartida aclara instrucciones imprecisas.",
     "Una valoración concreta ayuda más que una etiqueta.",
     "Reconocer límites no equivale a carecer de conocimiento."
    ],
    1,
    "Celá scéna podporuje tento výklad: Konkrétne hodnotenie pomáha viac než nálepka.",
    "El conjunto de la escena apoya esta lectura: Una valoración concreta ayuda más que una etiqueta."
   ],
   [
    "¿Qué significa «reseña» en «La reseña breve»?",
    [
     "Un comentario que presenta y valora una obra.",
     "Permanecer en un lugar en vez de marcharse.",
     "Aparecer una idea o una situación."
    ],
    0,
    "V tomto kontexte má „reseña“ tento význam.",
    "En este contexto, «reseña» tiene este sentido."
   ],
   [
    "¿Qué aporta «se volvió» a la escena «La reseña breve»?",
    [
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo.",
     "Un episodio de un relato pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La reseña breve»?",
    [
     "Elena sustituyó un adjetivo por ejemplos.",
     "La ponente presentó una explicación provisional.",
     "Laura cocinó con su tío."
    ],
    0,
    "Text to uvádza: Elena nahradila prídavné meno príkladmi.",
    "El texto lo indica: Elena sustituyó un adjetivo por ejemplos."
   ]
  ],
  "discussion": [
   "Čo robí kritiku užitočnou?",
   "¿Qué hace que una crítica sea útil?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-018"
 },
 {
  "id": "reading-019",
  "topic": "books",
  "title": [
   "Poznámka na okraji",
   "La nota al margen"
  ],
  "tag": [
   "Knihy, rozprávači a preklad",
   "Libros, narradores y traducción"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "En el margen alguien había escrito: «No estoy de acuerdo». No explicaba con qué. La nota intrigó más a Javier que el párrafo. Imaginó tres lectores distintos y comprendió cuánto rellenamos nosotros cuando falta una explicación.",
  "sk": "Na okraj niekto napísal: „Nesúhlasím.“ Nevysvetlil s čím. Poznámka Javiera zaujala viac než odsek. Predstavil si troch odlišných čitateľov a pochopil, koľko si sami dopĺňame, keď vysvetlenie chýba.",
  "vocab": [
   [
    "intrigar",
    "vzbudzovať zvedavosť",
    "Despertar interés por algo que no se entiende del todo.",
    "Vzbudzovať záujem o niečo nie celkom pochopené."
   ],
   [
    "había escrito",
    "predtým napísal",
    "Algo anterior a otro punto pasado.",
    "Niečo skoršie než iný minulý bod."
   ],
   [
    "cuando",
    "keď",
    "Relaciona una acción con un momento.",
    "Spája dej s časovým bodom."
   ]
  ],
  "questions": [
   [
    "En «La nota al margen», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una nota incompleta invita a proyectar interpretaciones.",
     "La pregunta orienta lo que observamos.",
     "No saber una fecha no elimina el valor de una imagen."
    ],
    0,
    "Celá scéna podporuje tento výklad: Neúplná poznámka vyvoláva vlastné výklady.",
    "El conjunto de la escena apoya esta lectura: Una nota incompleta invita a proyectar interpretaciones."
   ],
   [
    "¿Qué significa «intrigar» en «La nota al margen»?",
    [
     "Proponer una opción que se considera conveniente.",
     "Una razón que cuestiona una propuesta.",
     "Despertar interés por algo que no se entiende del todo."
    ],
    2,
    "V tomto kontexte má „intrigar“ tento význam.",
    "En este contexto, «intrigar» tiene este sentido."
   ],
   [
    "¿Qué aporta «había escrito» a la escena «La nota al margen»?",
    [
     "Una petición de no hacer algo.",
     "Algo anterior a otro punto pasado.",
     "Una previsión o promesa sobre después."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La nota al margen»?",
    [
     "Uno de los observadores contó las hojas.",
     "En la foto identificaron una ventana.",
     "La nota no explicaba el desacuerdo."
    ],
    2,
    "Text to uvádza: Poznámka nevysvetľovala nesúhlas.",
    "El texto lo indica: La nota no explicaba el desacuerdo."
   ]
  ],
  "discussion": [
   "Čo sami pridávame k tomu, čo čítame?",
   "¿Qué añadimos nosotros a lo que leemos?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-019"
 },
 {
  "id": "reading-020",
  "topic": "books",
  "title": [
   "Malá knižnica",
   "Una biblioteca pequeña"
  ],
  "tag": [
   "Knihy, rozprávači a preklad",
   "Libros, narradores y traducción"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "La biblioteca tenía pocos libros, pero todos llevaban señales de uso. Cada viernes alguien recomendaba uno sin decir el argumento. Hablar de lo que una lectura había provocado resultó más interesante que resumir sus acontecimientos.",
  "sk": "Knižnica mala málo kníh, ale na všetkých bolo vidno používanie. Každý piatok niekto odporučil jednu bez prezradenia deja. Hovoriť o tom, čo čítanie vyvolalo, sa ukázalo zaujímavejšie než zhŕňať udalosti.",
  "vocab": [
   [
    "argumento",
    "dej diela",
    "La sucesión principal de hechos de una historia.",
    "Hlavná postupnosť udalostí príbehu."
   ],
   [
    "recomendaba",
    "odporúčal",
    "Una situación, costumbre o acción en curso en el pasado.",
    "Minulá situácia, zvyk alebo prebiehajúci dej."
   ],
   [
    "pero",
    "ale",
    "Introduce un contraste.",
    "Uvádza protiklad."
   ]
  ],
  "questions": [
   [
    "En «Una biblioteca pequeña», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una reunión breve no siempre resuelve mejor.",
     "Una explicación puede depender también del gesto y del sonido.",
     "Las recomendaciones se centran en la experiencia de leer."
    ],
    2,
    "Celá scéna podporuje tento výklad: Odporúčania sa zameriavajú na čitateľský zážitok.",
    "El conjunto de la escena apoya esta lectura: Las recomendaciones se centran en la experiencia de leer."
   ],
   [
    "¿Qué significa «argumento» en «Una biblioteca pequeña»?",
    [
     "La posición que se mantiene sobre una cuestión.",
     "La sucesión principal de hechos de una historia.",
     "Dentro de muy poco tiempo, según quien habla."
    ],
    1,
    "V tomto kontexte má „argumento“ tento význam.",
    "En este contexto, «argumento» tiene este sentido."
   ],
   [
    "¿Qué aporta «recomendaba» a la escena «Una biblioteca pequeña»?",
    [
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Una biblioteca pequeña»?",
    [
     "La grabación incluía el sonido de una suela.",
     "Las recomendaciones se hacían los viernes.",
     "La primera reunión duró diez minutos."
    ],
    1,
    "Text to uvádza: Odporúčania zaznievali v piatok.",
    "El texto lo indica: Las recomendaciones se hacían los viernes."
   ]
  ],
  "discussion": [
   "Ako by si odporučil(a) knihu bez vyrozprávania deja?",
   "¿Cómo recomendarías un libro sin contar su argumento?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-020"
 },
 {
  "id": "reading-021",
  "topic": "art",
  "title": [
   "Lavička v múzeu",
   "El banco del museo"
  ],
  "tag": [
   "Umenie, hudba a pohľady",
   "Arte, música y miradas"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Nora entró para ver una exposición y acabó mirando a los visitantes. Frente al mismo cuadro, unos pasaban deprisa y otros se quedaban sentados. Dibujó las posturas, no la pintura. Había encontrado otra exposición dentro de la primera.",
  "sk": "Nora prišla na výstavu a napokon pozorovala návštevníkov. Pred rovnakým obrazom jedni rýchlo prechádzali, druhí zostávali sedieť. Kreslila postoje ľudí, nie maľbu. V prvej výstave našla ďalšiu.",
  "vocab": [
   [
    "postura",
    "držanie tela",
    "La posición que adopta el cuerpo.",
    "Poloha, ktorú zaujíma telo."
   ],
   [
    "acabó",
    "napokon začala",
    "Un episodio de un relato pasado.",
    "Epizóda minulého príbehu."
   ],
   [
    "no",
    "nie",
    "Niega un contenido.",
    "Popiera obsah."
   ]
  ],
  "questions": [
   [
    "En «El banco del museo», ¿qué idea resume mejor lo que ocurre?",
    [
     "El tiempo puede volver significativo lo que parecía corriente.",
     "Observar a quienes miran abre otra perspectiva.",
     "Conocer lo antiguo no impide probar lo nuevo."
    ],
    1,
    "Celá scéna podporuje tento výklad: Pozorovanie divákov otvára ďalšiu perspektívu.",
    "El conjunto de la escena apoya esta lectura: Observar a quienes miran abre otra perspectiva."
   ],
   [
    "¿Qué significa «postura» en «El banco del museo»?",
    [
     "La posición que adopta el cuerpo.",
     "Notar con deseo la ausencia de algo o alguien.",
     "Que se aparta de lo que ocurre normalmente."
    ],
    0,
    "V tomto kontexte má „postura“ tento význam.",
    "En este contexto, «postura» tiene este sentido."
   ],
   [
    "¿Qué aporta «acabó» a la escena «El banco del museo»?",
    [
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo.",
     "Un episodio de un relato pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El banco del museo»?",
    [
     "Nora dibujó a los visitantes.",
     "El carpintero enseñó a ajustar un cepillo.",
     "Sofía volvió al diario veinte años después."
    ],
    0,
    "Text to uvádza: Nora kreslila návštevníkov.",
    "El texto lo indica: Nora dibujó a los visitantes."
   ]
  ],
  "discussion": [
   "Patrí k umeniu aj spôsob, akým sa naň pozeráme?",
   "¿También forma parte del arte la manera de mirarlo?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-021"
 },
 {
  "id": "reading-022",
  "topic": "art",
  "title": [
   "Neznáma pieseň",
   "La canción desconocida"
  ],
  "tag": [
   "Umenie, hudba a pohľady",
   "Arte, música y miradas"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "El músico olvidó anunciar el título. Al terminar, una oyente dijo que le había recordado a su ciudad. Otra pensó en una despedida. Él no corrigió a ninguna: la canción no trataba de esos lugares, pero había llegado hasta ellos.",
  "sk": "Hudobník zabudol oznámiť názov. Po skončení poslucháčka povedala, že jej pieseň pripomenula rodné mesto. Iná myslela na lúčenie. Ani jednu neopravoval: pieseň nebola o tých miestach, ale dosiahla k nim.",
  "vocab": [
   [
    "despedida",
    "lúčenie",
    "El momento de separarse de alguien.",
    "Chvíľa rozchodu alebo odchodu od niekoho."
   ],
   [
    "había recordado",
    "predtým pripomenula",
    "Algo anterior a otro punto pasado.",
    "Niečo skoršie než iný minulý bod."
   ],
   [
    "pero",
    "ale",
    "Introduce un contraste.",
    "Uvádza protiklad."
   ]
  ],
  "questions": [
   [
    "En «La canción desconocida», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una obra puede despertar recuerdos no previstos.",
     "Mostrar dudas puede hacer un informe más claro.",
     "Un nombre puede cambiar la relación con lo inacabado."
    ],
    0,
    "Celá scéna podporuje tento výklad: Dielo môže prebudiť neplánované spomienky.",
    "El conjunto de la escena apoya esta lectura: Una obra puede despertar recuerdos no previstos."
   ],
   [
    "¿Qué significa «despedida» en «La canción desconocida»?",
    [
     "Personas colocadas siguiendo un orden.",
     "Mostrar como verdadero algo que no se sostiene realmente.",
     "El momento de separarse de alguien."
    ],
    2,
    "V tomto kontexte má „despedida“ tento význam.",
    "En este contexto, «despedida» tiene este sentido."
   ],
   [
    "¿Qué aporta «había recordado» a la escena «La canción desconocida»?",
    [
     "Una petición de no hacer algo.",
     "Algo anterior a otro punto pasado.",
     "Una previsión o promesa sobre después."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La canción desconocida»?",
    [
     "Ana pidió recuperar parte de las discusiones.",
     "Miguel separó proyectos todavía interesantes de otros abandonados.",
     "El músico no anunció el título."
    ],
    2,
    "Text to uvádza: Hudobník neoznámil názov.",
    "El texto lo indica: El músico no anunció el título."
   ]
  ],
  "discussion": [
   "Má autor opravovať výklady publika?",
   "¿Debe el autor corregir las interpretaciones del público?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-022"
 },
 {
  "id": "reading-023",
  "topic": "art",
  "title": [
   "Obraz bez popisu",
   "El cuadro sin cartel"
  ],
  "tag": [
   "Umenie, hudba a pohľady",
   "Arte, música y miradas"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Faltaba el cartel junto al cuadro. Dos visitantes discutían si era antiguo o reciente. Cuando apareció la encargada, ninguno pidió primero la fecha. Querían saber por qué habían usado la antigüedad como medida de su valor.",
  "sk": "Pri obraze chýbal popis. Dvaja návštevníci sa sporili, či je starý alebo nový. Keď prišla pracovníčka, ani jeden sa najprv nepýtal na dátum. Chceli vedieť, prečo hodnotu posudzovali podľa veku.",
  "vocab": [
   [
    "antigüedad",
    "vek predmetu",
    "El tiempo transcurrido desde su origen.",
    "Čas, ktorý uplynul od jeho vzniku."
   ],
   [
    "discutían",
    "diskutovali",
    "Una situación, costumbre o acción en curso en el pasado.",
    "Minulá situácia, zvyk alebo prebiehajúci dej."
   ],
   [
    "ninguno",
    "ani jeden",
    "Niega que alguno de los mencionados cumpla lo dicho.",
    "Popiera, že niektorý zo spomenutých spĺňa uvedené."
   ]
  ],
  "questions": [
   [
    "En «El cuadro sin cartel», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una pregunta básica revela una rutina innecesaria.",
     "La procedencia de un relato forma parte de su sentido.",
     "La falta de una etiqueta revela un prejuicio."
    ],
    2,
    "Celá scéna podporuje tento výklad: Chýbajúci popis odhalí predsudok.",
    "El conjunto de la escena apoya esta lectura: La falta de una etiqueta revela un prejuicio."
   ],
   [
    "¿Qué significa «antigüedad» en «El cuadro sin cartel»?",
    [
     "Una previsión de los recursos y gastos disponibles.",
     "El tiempo transcurrido desde su origen.",
     "Una muestra pública de reconocimiento."
    ],
    1,
    "V tomto kontexte má „antigüedad“ tento význam.",
    "En este contexto, «antigüedad» tiene este sentido."
   ],
   [
    "¿Qué aporta «discutían» a la escena «El cuadro sin cartel»?",
    [
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El cuadro sin cartel»?",
    [
     "La hermana corrigió la procedencia de la anécdota.",
     "El cuadro no tenía cartel.",
     "Utilizaban tres formularios."
    ],
    1,
    "Text to uvádza: Obraz nemal popis.",
    "El texto lo indica: El cuadro no tenía cartel."
   ]
  ],
  "discussion": [
   "Mení sa tvoj pohľad, keď poznáš dátum vzniku diela?",
   "¿Cambia tu mirada cuando conoces la fecha de una obra?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-023"
 },
 {
  "id": "reading-024",
  "topic": "art",
  "title": [
   "Socha na dotyk",
   "Una escultura tocada"
  ],
  "tag": [
   "Umenie, hudba a pohľady",
   "Arte, música y miradas"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "«No la toques», dijo un visitante. La guía sonrió y señaló el aviso: esa escultura se había creado para explorarla con las manos. La norma que él recordaba no servía allí. Antes de prohibir, habría sido mejor preguntar.",
  "sk": "„Nedotýkaj sa jej,“ povedal návštevník. Sprievodkyňa sa usmiala a ukázala oznam: túto sochu vytvorili na skúmanie rukami. Pravidlo, ktoré si pamätal, tam neplatilo. Pred zákazom by bolo lepšie opýtať sa.",
  "vocab": [
   [
    "aviso",
    "oznam",
    "Un mensaje que informa de algo importante.",
    "Správa, ktorá upozorňuje na niečo dôležité."
   ],
   [
    "No la toques",
    "nedotýkaj sa jej",
    "Una petición de no hacer algo.",
    "Žiadosť, aby sa niečo nerobilo."
   ],
   [
    "antes de",
    "predtým než",
    "Sitúa algo antes de otro momento o acción.",
    "Umiestňuje niečo pred iný okamih alebo činnosť."
   ]
  ],
  "questions": [
   [
    "En «Una escultura tocada», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una contradicción permite cuestionar una rutina.",
     "Una norma habitual no se aplica a todas las obras.",
     "El trabajo resuelto también necesita ser comunicado."
    ],
    1,
    "Celá scéna podporuje tento výklad: Bežné pravidlo neplatí pre všetky diela.",
    "El conjunto de la escena apoya esta lectura: Una norma habitual no se aplica a todas las obras."
   ],
   [
    "¿Qué significa «aviso» en «Una escultura tocada»?",
    [
     "Un mensaje que informa de algo importante.",
     "De manera simultánea.",
     "De forma cuidadosa, sin brusquedad."
    ],
    0,
    "V tomto kontexte má „aviso“ tento význam.",
    "En este contexto, «aviso» tiene este sentido."
   ],
   [
    "¿Qué aporta «No la toques» a la escena «Una escultura tocada»?",
    [
     "Una situación, costumbre o acción en curso en el pasado.",
     "Un resultado ya terminado en un punto futuro.",
     "Una petición de no hacer algo."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Una escultura tocada»?",
    [
     "La escultura estaba hecha para tocarla.",
     "Luis dejó una nota la siguiente vez.",
     "Nuria añadió una tarea para no cumplir la lista."
    ],
    0,
    "Text to uvádza: Socha bola určená na dotýkanie.",
    "El texto lo indica: La escultura estaba hecha para tocarla."
   ]
  ],
  "discussion": [
   "Kedy nám pravidlo bráni objaviť niečo nové?",
   "¿Cuándo nos impide una regla descubrir algo nuevo?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-024"
 },
 {
  "id": "reading-025",
  "topic": "art",
  "title": [
   "Prázdna stolička",
   "La silla vacía"
  ],
  "tag": [
   "Umenie, hudba a pohľady",
   "Arte, música y miradas"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "En el escenario solo había una silla. Durante varios minutos nadie salió. Algunos espectadores empezaron a hablar; otros seguían esperando. Cuando apareció la actriz, preguntó qué habían imaginado. La obra ya había comenzado sin que lo supieran.",
  "sk": "Na javisku bola iba stolička. Niekoľko minút nikto neprišiel. Niektorí diváci začali hovoriť, iní ďalej čakali. Keď sa objavila herečka, opýtala sa, čo si predstavovali. Predstavenie sa už začalo bez ich vedomia.",
  "vocab": [
   [
    "escenario",
    "javisko",
    "El espacio donde actúan los intérpretes.",
    "Priestor, kde vystupujú účinkujúci."
   ],
   [
    "había comenzado",
    "začalo sa už predtým",
    "Algo anterior a otro punto pasado.",
    "Niečo skoršie než iný minulý bod."
   ],
   [
    "nadie",
    "nikto",
    "Indica la ausencia de una persona que cumpla lo dicho.",
    "Označuje neprítomnosť osoby, ktorá by spĺňala uvedené."
   ]
  ],
  "questions": [
   [
    "En «La silla vacía», ¿qué idea resume mejor lo que ocurre?",
    [
     "La espera también forma parte de la representación.",
     "Un plazo necesita considerar los recursos disponibles.",
     "El uso inmediato no cuenta toda la historia de un objeto."
    ],
    0,
    "Celá scéna podporuje tento výklad: Aj čakanie je súčasťou predstavenia.",
    "El conjunto de la escena apoya esta lectura: La espera también forma parte de la representación."
   ],
   [
    "¿Qué significa «escenario» en «La silla vacía»?",
    [
     "La parte principal que sostiene las ramas de un árbol.",
     "Una idea básica que orienta los juicios o actos.",
     "El espacio donde actúan los intérpretes."
    ],
    2,
    "V tomto kontexte má „escenario“ tento význam.",
    "En este contexto, «escenario» tiene este sentido."
   ],
   [
    "¿Qué aporta «había comenzado» a la escena «La silla vacía»?",
    [
     "Una petición de no hacer algo.",
     "Algo anterior a otro punto pasado.",
     "Una previsión o promesa sobre después."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La silla vacía»?",
    [
     "El plazo se amplió dos días.",
     "El capítulo más largo trataba de la limpieza.",
     "Había una sola silla en el escenario."
    ],
    2,
    "Text to uvádza: Na javisku bola jediná stolička.",
    "El texto lo indica: Había una sola silla en el escenario."
   ]
  ],
  "discussion": [
   "Kedy sa vlastne začína divadelné predstavenie?",
   "¿Cuándo empieza realmente una obra de teatro?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-025"
 },
 {
  "id": "reading-026",
  "topic": "art",
  "title": [
   "Otvorená skúška",
   "El ensayo abierto"
  ],
  "tag": [
   "Umenie, hudba a pohľady",
   "Arte, música y miradas"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "La pianista repitió un pasaje seis veces. En el concierto habría parecido natural; allí se oía el esfuerzo. Carlos salió con más admiración, no menos. Ver cómo se construía la facilidad le permitió escucharla de otra manera.",
  "sk": "Klaviristka zopakovala úsek šesťkrát. Na koncerte by pôsobil prirodzene, ale tam bolo počuť námahu. Carlos odchádzal s väčším obdivom. Pohľad na vznik ľahkosti mu umožnil počúvať ju inak.",
  "vocab": [
   [
    "ensayo",
    "skúška",
    "La práctica previa a una actuación.",
    "Príprava pred verejným vystúpením."
   ],
   [
    "habría parecido",
    "pôsobil by",
    "Un resultado imaginado como ya realizado.",
    "Výsledok predstavený ako už uskutočnený."
   ],
   [
    "no",
    "nie",
    "Niega un contenido.",
    "Popiera obsah."
   ]
  ],
  "questions": [
   [
    "En «El ensayo abierto», ¿qué idea resume mejor lo que ocurre?",
    [
     "Quitar algo puede mejorar el conjunto.",
     "Una broma puede señalar un exceso sin confrontación directa.",
     "Conocer el esfuerzo cambia la percepción de la facilidad."
    ],
    2,
    "Celá scéna podporuje tento výklad: Poznanie úsilia mení vnímanie ľahkosti.",
    "El conjunto de la escena apoya esta lectura: Conocer el esfuerzo cambia la percepción de la facilidad."
   ],
   [
    "¿Qué significa «ensayo» en «El ensayo abierto»?",
    [
     "Que presenta poca variación entre sus partes.",
     "La práctica previa a una actuación.",
     "Dificultar el paso o la actividad de otro."
    ],
    1,
    "V tomto kontexte má „ensayo“ tento význam.",
    "En este contexto, «ensayo» tiene este sentido."
   ],
   [
    "¿Qué aporta «habría parecido» a la escena «El ensayo abierto»?",
    [
     "Un resultado imaginado como ya realizado.",
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El ensayo abierto»?",
    [
     "El invitado llevaba cinco minutos hablando.",
     "La pianista repitió el pasaje seis veces.",
     "Probaron una versión reducida."
    ],
    1,
    "Text to uvádza: Klaviristka zopakovala úsek šesťkrát.",
    "El texto lo indica: La pianista repitió el pasaje seis veces."
   ]
  ],
  "discussion": [
   "Zvyšuje poznanie postupu tvoj obdiv?",
   "¿Saber cómo se hizo algo aumenta tu admiración?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-026"
 },
 {
  "id": "reading-027",
  "topic": "art",
  "title": [
   "Obnova diela",
   "La restauración"
  ],
  "tag": [
   "Umenie, hudba a pohľady",
   "Arte, música y miradas"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "La restauradora explicó que no iba a dejar el cuadro como nuevo. Quería conservar sus huellas sin ocultar los daños importantes. Un visitante entendió entonces que cuidar algo no siempre significa borrar su historia.",
  "sk": "Reštaurátorka vysvetlila, že obraz nechce urobiť ako nový. Chcela zachovať jeho stopy a pritom nezakrývať dôležité poškodenia. Návštevník vtedy pochopil, že starať sa o niečo nemusí znamenať vymazať jeho históriu.",
  "vocab": [
   [
    "huella",
    "stopa",
    "Una señal que deja el paso del tiempo o una acción.",
    "Znak zanechaný časom alebo konaním."
   ],
   [
    "iba a dejar",
    "chystala sa zanechať",
    "Un plan o una intención, también vistos desde el pasado.",
    "Plán alebo zámer aj z pohľadu minulosti."
   ],
   [
    "no",
    "nie",
    "Niega un contenido.",
    "Popiera obsah."
   ]
  ],
  "questions": [
   [
    "En «La restauración», ¿qué idea resume mejor lo que ocurre?",
    [
     "Reírse de un error facilita reconocerlo.",
     "Conservar no equivale siempre a renovar por completo.",
     "Una observación concreta convierte el elogio en aprendizaje."
    ],
    1,
    "Celá scéna podporuje tento výklad: Zachovanie nie je vždy úplná obnova.",
    "El conjunto de la escena apoya esta lectura: Conservar no equivale siempre a renovar por completo."
   ],
   [
    "¿Qué significa «huella» en «La restauración»?",
    [
     "Una señal que deja el paso del tiempo o una acción.",
     "La persona a la que pertenece algo.",
     "La persona que organiza los turnos de una conversación."
    ],
    0,
    "V tomto kontexte má „huella“ tento význam.",
    "En este contexto, «huella» tiene este sentido."
   ],
   [
    "¿Qué aporta «iba a dejar» a la escena «La restauración»?",
    [
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una petición de no hacer algo.",
     "Un plan o una intención, también vistos desde el pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La restauración»?",
    [
     "La restauradora no quería borrar toda la historia.",
     "La observación se refería a una tabla.",
     "Marta no recordaba su contraseña."
    ],
    0,
    "Text to uvádza: Reštaurátorka nechcela vymazať celú históriu.",
    "El texto lo indica: La restauradora no quería borrar toda la historia."
   ]
  ],
  "discussion": [
   "Ktoré stopy času sa oplatí zachovať?",
   "¿Qué marcas del tiempo merece la pena conservar?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-027"
 },
 {
  "id": "reading-028",
  "topic": "art",
  "title": [
   "Potlesk v nesprávnej chvíli",
   "Un aplauso fuera de tiempo"
  ],
  "tag": [
   "Umenie, hudba a pohľady",
   "Arte, música y miradas"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Alguien aplaudió antes de que acabara la música. Marta sintió vergüenza por esa persona. Después el director agradeció el entusiasmo y explicó la pausa. La corrección había sido clara sin convertir un error en una humillación.",
  "sk": "Niekto zatlieskal pred koncom hudby. Marta za toho človeka pocítila rozpaky. Dirigent potom poďakoval za nadšenie a vysvetlil prestávku. Oprava bola jasná bez toho, aby sa chyba zmenila na poníženie.",
  "vocab": [
   [
    "humillación",
    "poníženie",
    "Una situación que daña la dignidad de alguien.",
    "Situácia, ktorá poškodzuje dôstojnosť človeka."
   ],
   [
    "acabara",
    "skončila",
    "Una situación imaginada o ligada a un marco pasado.",
    "Predstavovaná situácia alebo súvislosť s minulým rámcom."
   ],
   [
    "antes de",
    "predtým než",
    "Sitúa algo antes de otro momento o acción.",
    "Umiestňuje niečo pred iný okamih alebo činnosť."
   ]
  ],
  "questions": [
   [
    "En «Un aplauso fuera de tiempo», ¿qué idea resume mejor lo que ocurre?",
    [
     "Se puede corregir sin humillar.",
     "Cambiar de contexto facilita una conexión inesperada.",
     "Una misma preparación puede responder a motivos opuestos."
    ],
    0,
    "Celá scéna podporuje tento výklad: Opravovať sa dá bez ponižovania.",
    "El conjunto de la escena apoya esta lectura: Se puede corregir sin humillar."
   ],
   [
    "¿Qué significa «humillación» en «Un aplauso fuera de tiempo»?",
    [
     "Una herramienta utilizada para observar o medir.",
     "Que puede deshacerse o cambiarse después.",
     "Una situación que daña la dignidad de alguien."
    ],
    2,
    "V tomto kontexte má „humillación“ tento význam.",
    "En este contexto, «humillación» tiene este sentido."
   ],
   [
    "¿Qué aporta «acabara» a la escena «Un aplauso fuera de tiempo»?",
    [
     "Una petición de no hacer algo.",
     "Una situación imaginada o ligada a un marco pasado.",
     "Algo anterior a otro punto pasado."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Un aplauso fuera de tiempo»?",
    [
     "El grupo regresó para comprobar la solución.",
     "La amiga usaba el paraguas para buscar sombra.",
     "El director agradeció el entusiasmo."
    ],
    2,
    "Text to uvádza: Dirigent poďakoval za nadšenie.",
    "El texto lo indica: El director agradeció el entusiasmo."
   ]
  ],
  "discussion": [
   "Ako by si chcel(a), aby opravili tvoju verejnú chybu?",
   "¿Cómo te gustaría que corrigieran un error público tuyo?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-028"
 },
 {
  "id": "reading-029",
  "topic": "art",
  "title": [
   "Susedov portrét",
   "El retrato del vecino"
  ],
  "tag": [
   "Umenie, hudba a pohľady",
   "Arte, música y miradas"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "El pintor exageró las manos y redujo el tamaño del rostro. El vecino se reconoció enseguida: llevaba años trabajando con madera. «Es más yo que una fotografía», dijo. La semejanza no dependía de copiar todas las proporciones.",
  "sk": "Maliar zväčšil ruky a zmenšil tvár. Sused sa hneď spoznal: roky pracoval s drevom. „Som to viac ja než na fotografii,“ povedal. Podobnosť nezávisela od kopírovania všetkých proporcií.",
  "vocab": [
   [
    "semejanza",
    "podobnosť",
    "Una relación entre cosas que comparten rasgos.",
    "Vzťah medzi vecami so spoločnými črtami."
   ],
   [
    "se reconoció",
    "spoznal sa",
    "Un episodio de un relato pasado.",
    "Epizóda minulého príbehu."
   ],
   [
    "no",
    "nie",
    "Niega un contenido.",
    "Popiera obsah."
   ]
  ],
  "questions": [
   [
    "En «El retrato del vecino», ¿qué idea resume mejor lo que ocurre?",
    [
     "La forma de participar puede ocultar o revelar desacuerdos.",
     "Una preferencia inesperada deja en evidencia una discusión complicada.",
     "Una deformación puede expresar una identidad."
    ],
    2,
    "Celá scéna podporuje tento výklad: Zmenené proporcie môžu vyjadriť identitu.",
    "El conjunto de la escena apoya esta lectura: Una deformación puede expresar una identidad."
   ],
   [
    "¿Qué significa «semejanza» en «El retrato del vecino»?",
    [
     "Que pretende cerrar una cuestión.",
     "Una relación entre cosas que comparten rasgos.",
     "La relación que permite interpretar los valores de un gráfico."
    ],
    1,
    "V tomto kontexte má „semejanza“ tento význam.",
    "En este contexto, «semejanza» tiene este sentido."
   ],
   [
    "¿Qué aporta «se reconoció» a la escena «El retrato del vecino»?",
    [
     "Un episodio de un relato pasado.",
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El retrato del vecino»?",
    [
     "El gato eligió una caja vacía.",
     "El vecino había trabajado con madera.",
     "Recibieron tres objeciones por escrito."
    ],
    1,
    "Text to uvádza: Sused pracoval s drevom.",
    "El texto lo indica: El vecino había trabajado con madera."
   ]
  ],
  "discussion": [
   "Ktorý detail by si vybral(a) na zobrazenie človeka?",
   "¿Qué detalle elegirías para representar a alguien?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-029"
 },
 {
  "id": "reading-030",
  "topic": "art",
  "title": [
   "Bezplatný vstup",
   "La entrada gratuita"
  ],
  "tag": [
   "Umenie, hudba a pohľady",
   "Arte, música y miradas"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "El museo abrió una tarde sin cobrar entrada. Irene esperaba muchas visitas, pero casi nadie llegó. Al preguntar en el barrio, descubrió que pocos conocían el horario. El precio no había sido la única barrera.",
  "sk": "Múzeum jedno popoludnie otvorilo bez vstupného. Irene očakávala veľa návštev, ale takmer nikto neprišiel. Pri rozhovoroch v štvrti zistila, že málokto pozná otváracie hodiny. Cena nebola jedinou prekážkou.",
  "vocab": [
   [
    "barrera",
    "prekážka",
    "Algo que dificulta acceder o participar.",
    "Niečo, čo sťažuje prístup alebo účasť."
   ],
   [
    "esperaba",
    "očakávala",
    "Una situación, costumbre o acción en curso en el pasado.",
    "Minulá situácia, zvyk alebo prebiehajúci dej."
   ],
   [
    "nadie",
    "nikto",
    "Indica la ausencia de una persona que cumpla lo dicho.",
    "Označuje neprítomnosť osoby, ktorá by spĺňala uvedené."
   ]
  ],
  "questions": [
   [
    "En «La entrada gratuita», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una respuesta literal transforma un consejo en participación.",
     "Quitar un precio no elimina todas las barreras.",
     "Cambiar de postura puede ser un resultado valioso."
    ],
    1,
    "Celá scéna podporuje tento výklad: Odstránenie ceny neodstráni všetky prekážky.",
    "El conjunto de la escena apoya esta lectura: Quitar un precio no elimina todas las barreras."
   ],
   [
    "¿Qué significa «barrera» en «La entrada gratuita»?",
    [
     "Algo que dificulta acceder o participar.",
     "Que apoya una idea o una posibilidad.",
     "Después de un intervalo de tiempo."
    ],
    0,
    "V tomto kontexte má „barrera“ tento význam.",
    "En este contexto, «barrera» tiene este sentido."
   ],
   [
    "¿Qué aporta «esperaba» a la escena «La entrada gratuita»?",
    [
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo.",
     "Una situación, costumbre o acción en curso en el pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La entrada gratuita»?",
    [
     "Pocos vecinos conocían el horario.",
     "Vera escuchó un ejemplo nuevo.",
     "Bruno recibió un cuchillo y una cebolla."
    ],
    0,
    "Text to uvádza: Málo susedov poznalo otváracie hodiny.",
    "El texto lo indica: Pocos vecinos conocían el horario."
   ]
  ],
  "discussion": [
   "Čo robí pozvanie skutočne prístupným?",
   "¿Qué hace que una invitación sea realmente accesible?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-030"
 },
 {
  "id": "reading-031",
  "topic": "city",
  "title": [
   "Námestie bez lavičiek",
   "La plaza sin bancos"
  ],
  "tag": [
   "Mesto, priestory a spolužitie",
   "Ciudad, espacios y convivencia"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "La plaza nueva tenía árboles, luces y una fuente, pero ningún banco. Los vecinos la cruzaban sin quedarse. Cuando colocaron unas sillas durante una fiesta, aparecieron conversaciones que antes no ocurrían. A veces un objeto pequeño cambia el uso de todo un espacio.",
  "sk": "Nové námestie malo stromy, svetlá a fontánu, ale nijakú lavičku. Susedia ním prechádzali bez zastavenia. Keď počas slávnosti priniesli stoličky, vznikli rozhovory, ktoré sa predtým nekonali. Malý predmet niekedy zmení využitie celého priestoru.",
  "vocab": [
   [
    "quedarse",
    "zostať",
    "Permanecer en un lugar en vez de marcharse.",
    "Ostať na mieste namiesto odchodu."
   ],
   [
    "cruzaban",
    "prechádzali",
    "Una situación, costumbre o acción en curso en el pasado.",
    "Minulá situácia, zvyk alebo prebiehajúci dej."
   ],
   [
    "cuando",
    "keď",
    "Relaciona una acción con un momento.",
    "Spája dej s časovým bodom."
   ]
  ],
  "questions": [
   [
    "En «La plaza sin bancos», ¿qué idea resume mejor lo que ocurre?",
    [
     "Un asiento transforma un lugar de paso en encuentro.",
     "Un caso excepcional no representa necesariamente lo habitual.",
     "Una forma llamativa puede distraer del propio mensaje."
    ],
    0,
    "Celá scéna podporuje tento výklad: Sedenie mení priechodné miesto na miesto stretnutí.",
    "El conjunto de la escena apoya esta lectura: Un asiento transforma un lugar de paso en encuentro."
   ],
   [
    "¿Qué significa «quedarse» en «La plaza sin bancos»?",
    [
     "Escribir algo para conservarlo y revisarlo.",
     "La mujer a la que pertenece un negocio o una cosa.",
     "Permanecer en un lugar en vez de marcharse."
    ],
    2,
    "V tomto kontexte má „quedarse“ tento význam.",
    "En este contexto, «quedarse» tiene este sentido."
   ],
   [
    "¿Qué aporta «cruzaban» a la escena «La plaza sin bancos»?",
    [
     "Una petición de no hacer algo.",
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una previsión o promesa sobre después."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La plaza sin bancos»?",
    [
     "Ana pidió pensar en un día corriente.",
     "El segundo cartel era más pequeño.",
     "Las primeras sillas llegaron durante una fiesta."
    ],
    2,
    "Text to uvádza: Prvé stoličky priniesli počas slávnosti.",
    "El texto lo indica: Las primeras sillas llegaron durante una fiesta."
   ]
  ],
  "discussion": [
   "Čo miesto potrebuje, aby lákalo zostať?",
   "¿Qué necesita un lugar para invitar a quedarse?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-031"
 },
 {
  "id": "reading-032",
  "topic": "city",
  "title": [
   "Najkratšia cesta",
   "El camino más corto"
  ],
  "tag": [
   "Mesto, priestory a spolužitie",
   "Ciudad, espacios y convivencia"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "El teléfono aconsejaba ir por una avenida. Rosa eligió las calles pequeñas porque allí encontraba sombra y menos ruido. Llegó cinco minutos después, pero más descansada. La ruta más corta no había sido, para ella, la mejor.",
  "sk": "Telefón odporúčal cestu po veľkej triede. Rosa zvolila malé ulice, lebo tam našla tieň a menej hluku. Prišla o päť minút neskôr, ale oddýchnutejšia. Najkratšia trasa pre ňu nebola najlepšia.",
  "vocab": [
   [
    "aconsejar",
    "odporúčať",
    "Proponer una opción que se considera conveniente.",
    "Navrhovať možnosť považovanú za vhodnú."
   ],
   [
    "eligió",
    "vybrala si",
    "Un episodio de un relato pasado.",
    "Epizóda minulého príbehu."
   ],
   [
    "después",
    "potom",
    "Sitúa algo en un momento posterior.",
    "Umiestňuje niečo do neskoršieho okamihu."
   ]
  ],
  "questions": [
   [
    "En «El camino más corto», ¿qué idea resume mejor lo que ocurre?",
    [
     "Explicar una causa y asignar responsabilidad son tareas distintas.",
     "Una instrucción absoluta puede producir una interpretación inesperada.",
     "La calidad de una ruta no depende solo del tiempo."
    ],
    2,
    "Celá scéna podporuje tento výklad: Kvalita trasy nezávisí iba od času.",
    "El conjunto de la escena apoya esta lectura: La calidad de una ruta no depende solo del tiempo."
   ],
   [
    "¿Qué significa «aconsejar» en «El camino más corto»?",
    [
     "Tener un ingrediente como parte de un plato.",
     "Proponer una opción que se considera conveniente.",
     "Ser compatible con otras partes o datos."
    ],
    1,
    "V tomto kontexte má „aconsejar“ tento význam.",
    "En este contexto, «aconsejar» tiene este sentido."
   ],
   [
    "¿Qué aporta «eligió» a la escena «El camino más corto»?",
    [
     "Un episodio de un relato pasado.",
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El camino más corto»?",
    [
     "Solo una planta llevaba el cartel.",
     "Rosa tardó cinco minutos más.",
     "Luis hablaba de la causa del error."
    ],
    1,
    "Text to uvádza: Rose cesta trvala o päť minút dlhšie.",
    "El texto lo indica: Rosa tardó cinco minutos más."
   ]
  ],
  "discussion": [
   "Čo je pre teba dôležité pri výbere cesty?",
   "¿Qué cuenta para ti al elegir un camino?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-032"
 },
 {
  "id": "reading-033",
  "topic": "city",
  "title": [
   "Zatvorený obchod",
   "La tienda cerrada"
  ],
  "tag": [
   "Mesto, priestory a spolužitie",
   "Ciudad, espacios y convivencia"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "El cartel decía «Volvemos enseguida». Pasó media hora. Un cliente se enfadó; otro imaginó un problema familiar. Ninguno sabía qué había ocurrido. La misma falta de información había producido dos historias opuestas.",
  "sk": "Na ozname stálo „Hneď sa vrátime“. Prešla polhodina. Jeden zákazník sa nahneval, druhý si predstavil rodinný problém. Ani jeden nevedel, čo sa stalo. Rovnaký nedostatok informácií vytvoril dva opačné príbehy.",
  "vocab": [
   [
    "enseguida",
    "hneď",
    "Dentro de muy poco tiempo, según quien habla.",
    "O veľmi krátky čas podľa hovoriaceho."
   ],
   [
    "había ocurrido",
    "stalo sa predtým",
    "Algo anterior a otro punto pasado.",
    "Niečo skoršie než iný minulý bod."
   ],
   [
    "ninguno",
    "ani jeden",
    "Niega que alguno de los mencionados cumpla lo dicho.",
    "Popiera, že niektorý zo spomenutých spĺňa uvedené."
   ]
  ],
  "questions": [
   [
    "En «La tienda cerrada», ¿qué idea resume mejor lo que ocurre?",
    [
     "El aprendizaje puede medirse por descubrimientos concretos.",
     "La incertidumbre puede llenarse con relatos distintos.",
     "Precisar una propuesta hace visible el alcance del acuerdo."
    ],
    1,
    "Celá scéna podporuje tento výklad: Neistotu možno vyplniť odlišnými príbehmi.",
    "El conjunto de la escena apoya esta lectura: La incertidumbre puede llenarse con relatos distintos."
   ],
   [
    "¿Qué significa «enseguida» en «La tienda cerrada»?",
    [
     "Dentro de muy poco tiempo, según quien habla.",
     "Indicaciones que explican cómo realizar una tarea.",
     "Los elementos que quedan fuera del primero o del grupo citado."
    ],
    0,
    "V tomto kontexte má „enseguida“ tento význam.",
    "En este contexto, «enseguida» tiene este sentido."
   ],
   [
    "¿Qué aporta «había ocurrido» a la escena «La tienda cerrada»?",
    [
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo.",
     "Algo anterior a otro punto pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La tienda cerrada»?",
    [
     "Había transcurrido media hora.",
     "Escribieron los cambios antes de votar.",
     "Luis había consultado tres palabras."
    ],
    0,
    "Text to uvádza: Uplynula polhodina.",
    "El texto lo indica: Había transcurrido media hora."
   ]
  ],
  "discussion": [
   "Čo si zvyčajne predstavujeme pri nevysvetlenom zdržaní?",
   "¿Qué solemos imaginar cuando nadie nos explica una demora?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-033"
 },
 {
  "id": "reading-034",
  "topic": "city",
  "title": [
   "Známy zvuk",
   "Un ruido conocido"
  ],
  "tag": [
   "Mesto, priestory a spolužitie",
   "Ciudad, espacios y convivencia"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "El reloj de la torre dejó de sonar durante una semana. Al principio, muchos celebraron el silencio. Después descubrieron que lo usaban sin darse cuenta para organizar la mañana. Echaron de menos algo de lo que antes se quejaban.",
  "sk": "Vežové hodiny na týždeň prestali odbíjať. Najprv sa mnohí tešili z ticha. Potom zistili, že si podľa nich nevedome organizovali dopoludnie. Chýbalo im niečo, na čo sa predtým sťažovali.",
  "vocab": [
   [
    "echar de menos",
    "cítiť neprítomnosť",
    "Notar con deseo la ausencia de algo o alguien.",
    "Pociťovať, že nám niečo alebo niekto chýba."
   ],
   [
    "se quejaban",
    "sťažovali sa",
    "Una situación, costumbre o acción en curso en el pasado.",
    "Minulá situácia, zvyk alebo prebiehajúci dej."
   ],
   [
    "después",
    "potom",
    "Sitúa algo en un momento posterior.",
    "Umiestňuje niečo do neskoršieho okamihu."
   ]
  ],
  "questions": [
   [
    "En «Un ruido conocido», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una molestia habitual también podía orientar.",
     "Escuchar una preocupación puede preceder al consejo.",
     "El grupo decide esperar antes de abrir una carta."
    ],
    0,
    "Celá scéna podporuje tento výklad: Obvyklé obťažovanie mohlo zároveň usmerňovať.",
    "El conjunto de la escena apoya esta lectura: Una molestia habitual también podía orientar."
   ],
   [
    "¿Qué significa «echar de menos» en «Un ruido conocido»?",
    [
     "Los límites dentro de los que algo sirve.",
     "Un texto visible que identifica o informa.",
     "Notar con deseo la ausencia de algo o alguien."
    ],
    2,
    "V tomto kontexte má „echar de menos“ tento význam.",
    "En este contexto, «echar de menos» tiene este sentido."
   ],
   [
    "¿Qué aporta «se quejaban» a la escena «Un ruido conocido»?",
    [
     "Una petición de no hacer algo.",
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una previsión o promesa sobre después."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Un ruido conocido»?",
    [
     "La amiga pidió ser comprendida primero.",
     "La carta estaba dentro de un diario.",
     "El reloj estuvo una semana sin sonar."
    ],
    2,
    "Text to uvádza: Hodiny týždeň neodbíjali.",
    "El texto lo indica: El reloj estuvo una semana sin sonar."
   ]
  ],
  "discussion": [
   "Ktoré zvuky patria k tvojej predstave domova?",
   "¿Qué sonidos forman parte de tu idea de casa?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-034"
 },
 {
  "id": "reading-035",
  "topic": "city",
  "title": [
   "Neviditeľný rad",
   "La cola invisible"
  ],
  "tag": [
   "Mesto, priestory a spolužitie",
   "Ciudad, espacios y convivencia"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "En la panadería nadie estaba colocado en fila. Inés preguntó quién era el último y una mujer levantó la mano. El orden existía, aunque no se veía en el espacio. Para entenderlo había que escuchar a las personas, no mirar sus posiciones.",
  "sk": "V pekárni nikto nestál v rade. Inés sa opýtala, kto je posledný, a žena zdvihla ruku. Poradie existovalo, hoci ho v priestore nebolo vidno. Na jeho pochopenie bolo treba počúvať ľudí, nie sledovať ich polohu.",
  "vocab": [
   [
    "fila",
    "rad",
    "Personas colocadas siguiendo un orden.",
    "Ľudia zoradení podľa určitého poradia."
   ],
   [
    "levantó",
    "zdvihla",
    "Un episodio de un relato pasado.",
    "Epizóda minulého príbehu."
   ],
   [
    "nadie",
    "nikto",
    "Indica la ausencia de una persona que cumpla lo dicho.",
    "Označuje neprítomnosť osoby, ktorá by spĺňala uvedené."
   ]
  ],
  "questions": [
   [
    "En «La cola invisible», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una misma palabra puede apoyarse en experiencias diferentes.",
     "Una señal misteriosa tiene un motivo cotidiano.",
     "Una regla compartida puede funcionar sin una fila visible."
    ],
    2,
    "Celá scéna podporuje tento výklad: Spoločné pravidlo môže fungovať bez viditeľného radu.",
    "El conjunto de la escena apoya esta lectura: Una regla compartida puede funcionar sin una fila visible."
   ],
   [
    "¿Qué significa «fila» en «La cola invisible»?",
    [
     "En una cantidad o intensidad muy pequeña.",
     "Personas colocadas siguiendo un orden.",
     "Un valor que resume un conjunto de cantidades."
    ],
    1,
    "V tomto kontexte má „fila“ tento význam.",
    "En este contexto, «fila» tiene este sentido."
   ],
   [
    "¿Qué aporta «levantó» a la escena «La cola invisible»?",
    [
     "Un episodio de un relato pasado.",
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La cola invisible»?",
    [
     "La lámpara ayudaba a una hermana.",
     "Una mujer indicó que era la última.",
     "Los dos hablaban de libertad."
    ],
    1,
    "Text to uvádza: Žena naznačila, že je posledná.",
    "El texto lo indica: Una mujer indicó que era la última."
   ]
  ],
  "discussion": [
   "Ktoré miestne pravidlá sú pre nováčika neviditeľné?",
   "¿Qué reglas de un lugar resultan invisibles al recién llegado?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-035"
 },
 {
  "id": "reading-036",
  "topic": "city",
  "title": [
   "Nástenná maľba v štvrti",
   "El mural del barrio"
  ],
  "tag": [
   "Mesto, priestory a spolužitie",
   "Ciudad, espacios y convivencia"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "El mural mostraba comercios que ya no existían. Unos vecinos lo veían como un homenaje; otros decían que faltaban los negocios nuevos. La discusión terminó con una idea: dejar un espacio sin pintar para lo que todavía estaba cambiando.",
  "sk": "Maľba zobrazovala obchody, ktoré už neexistovali. Niektorí susedia v nej videli poctu, iní hovorili, že chýbajú nové podniky. Debata skončila nápadom nechať nenamaľovanú časť pre to, čo sa ešte mení.",
  "vocab": [
   [
    "homenaje",
    "pocta",
    "Una muestra pública de reconocimiento.",
    "Verejný prejav uznania."
   ],
   [
    "mostraba",
    "zobrazovala",
    "Una situación, costumbre o acción en curso en el pasado.",
    "Minulá situácia, zvyk alebo prebiehajúci dej."
   ],
   [
    "no",
    "nie",
    "Niega un contenido.",
    "Popiera obsah."
   ]
  ],
  "questions": [
   [
    "En «El mural del barrio», ¿qué idea resume mejor lo que ocurre?",
    [
     "Julia busca información antes de valorar el riesgo.",
     "La memoria del barrio puede dejar espacio al cambio.",
     "El silencio no confirma por sí solo el acuerdo."
    ],
    1,
    "Celá scéna podporuje tento výklad: Pamäť štvrte môže nechať priestor zmene.",
    "El conjunto de la escena apoya esta lectura: La memoria del barrio puede dejar espacio al cambio."
   ],
   [
    "¿Qué significa «homenaje» en «El mural del barrio»?",
    [
     "Una muestra pública de reconocimiento.",
     "Cuidado al afirmar algo o actuar.",
     "Algo que ocurre sin haber sido previsto."
    ],
    0,
    "V tomto kontexte má „homenaje“ tento význam.",
    "En este contexto, «homenaje» tiene este sentido."
   ],
   [
    "¿Qué aporta «mostraba» a la escena «El mural del barrio»?",
    [
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo.",
     "Una situación, costumbre o acción en curso en el pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El mural del barrio»?",
    [
     "Propusieron dejar una parte sin pintar.",
     "Las respuestas se recogieron sin nombres.",
     "El mar seguía tranquilo."
    ],
    0,
    "Text to uvádza: Navrhli ponechať časť nenamaľovanú.",
    "El texto lo indica: Propusieron dejar una parte sin pintar."
   ]
  ],
  "discussion": [
   "Ako by si zobrazil(a) štvrť bez jej navždy pevnej podoby?",
   "¿Cómo representarías un barrio sin fijarlo para siempre?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-036"
 },
 {
  "id": "reading-037",
  "topic": "city",
  "title": [
   "Ťažké dvere",
   "Una puerta pesada"
  ],
  "tag": [
   "Mesto, priestory a spolužitie",
   "Ciudad, espacios y convivencia"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "En el edificio habían cambiado la puerta por otra más segura. Después llegaron las quejas: abrirla exigía demasiada fuerza. La comunidad tuvo que pensar en dos necesidades a la vez. Una mejora para unos podía convertirse en una barrera para otros.",
  "sk": "V budove vymenili dvere za bezpečnejšie. Potom prišli sťažnosti: otvorenie vyžadovalo priveľa sily. Spoločenstvo muselo premýšľať nad dvoma potrebami zároveň. Zlepšenie pre jedných sa mohlo stať prekážkou pre druhých.",
  "vocab": [
   [
    "a la vez",
    "zároveň",
    "De manera simultánea.",
    "V tom istom čase."
   ],
   [
    "habían cambiado",
    "vymenili už predtým",
    "Algo anterior a otro punto pasado.",
    "Niečo skoršie než iný minulý bod."
   ],
   [
    "después",
    "potom",
    "Sitúa algo en un momento posterior.",
    "Umiestňuje niečo do neskoršieho okamihu."
   ]
  ],
  "questions": [
   [
    "En «Una puerta pesada», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una mejora debe considerar a usuarios diferentes.",
     "Representar bien otra postura mejora el desacuerdo.",
     "Dos representaciones diferentes pueden tener usos distintos."
    ],
    0,
    "Celá scéna podporuje tento výklad: Zlepšenie musí zohľadniť odlišných používateľov.",
    "El conjunto de la escena apoya esta lectura: Una mejora debe considerar a usuarios diferentes."
   ],
   [
    "¿Qué significa «a la vez» en «Una puerta pesada»?",
    [
     "Buscar información hasta aclarar algo.",
     "Desde una posición más elevada.",
     "De manera simultánea."
    ],
    2,
    "V tomto kontexte má „a la vez“ tento význam.",
    "En este contexto, «a la vez» tiene este sentido."
   ],
   [
    "¿Qué aporta «habían cambiado» a la escena «Una puerta pesada»?",
    [
     "Una petición de no hacer algo.",
     "Algo anterior a otro punto pasado.",
     "Una previsión o promesa sobre después."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Una puerta pesada»?",
    [
     "La moderadora propuso explicar primero la opción contraria.",
     "Solo uno de los mapas mostraba una cala.",
     "La nueva puerta requería más fuerza."
    ],
    2,
    "Text to uvádza: Nové dvere vyžadovali väčšiu silu.",
    "El texto lo indica: La nueva puerta requería más fuerza."
   ]
  ],
  "discussion": [
   "Ako zistíme, pre koho zlepšenie funguje?",
   "¿Cómo sabemos para quién funciona una mejora?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-037"
 },
 {
  "id": "reading-038",
  "topic": "city",
  "title": [
   "Strom a stôl",
   "El árbol y la mesa"
  ],
  "tag": [
   "Mesto, priestory a spolužitie",
   "Ciudad, espacios y convivencia"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "El dueño del café quería ampliar la terraza. El jardinero señaló que el árbol seguiría creciendo. En vez de cortarlo, diseñaron una mesa con espacio alrededor del tronco. El límite había obligado a imaginar una solución mejor.",
  "sk": "Majiteľ kaviarne chcel zväčšiť terasu. Záhradník upozornil, že strom bude ďalej rásť. Namiesto výrubu navrhli stôl s priestorom okolo kmeňa. Obmedzenie ich prinútilo predstaviť si lepšie riešenie.",
  "vocab": [
   [
    "tronco",
    "kmeň",
    "La parte principal que sostiene las ramas de un árbol.",
    "Hlavná časť stromu nesúca konáre."
   ],
   [
    "seguiría",
    "pokračoval by",
    "Una posibilidad o algo posterior visto desde el pasado.",
    "Možnosť alebo neskorší dej videný z minulosti."
   ],
   [
    "en vez de",
    "namiesto",
    "Presenta una alternativa a lo que se esperaba.",
    "Predstavuje alternatívu k očakávanej činnosti."
   ]
  ],
  "questions": [
   [
    "En «El árbol y la mesa», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una prueba reversible facilita decidir.",
     "Elena corrige una impresión después de escuchar.",
     "Respetar un límite puede estimular la creatividad."
    ],
    2,
    "Celá scéna podporuje tento výklad: Rešpektovanie hranice môže podnietiť tvorivosť.",
    "El conjunto de la escena apoya esta lectura: Respetar un límite puede estimular la creatividad."
   ],
   [
    "¿Qué significa «tronco» en «El árbol y la mesa»?",
    [
     "Una acción que comunica una intención o un sentimiento.",
     "La parte principal que sostiene las ramas de un árbol.",
     "Evitar gastar un recurso innecesariamente."
    ],
    1,
    "V tomto kontexte má „tronco“ tento význam.",
    "En este contexto, «tronco» tiene este sentido."
   ],
   [
    "¿Qué aporta «seguiría» a la escena «El árbol y la mesa»?",
    [
     "Una posibilidad o algo posterior visto desde el pasado.",
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El árbol y la mesa»?",
    [
     "Elena llevaba una libreta.",
     "La mesa dejó espacio para el tronco.",
     "La prueba duraría una semana."
    ],
    1,
    "Text to uvádza: Stôl ponechal priestor pre kmeň.",
    "El texto lo indica: La mesa dejó espacio para el tronco."
   ]
  ],
  "discussion": [
   "Ktoré obmedzenia ti pomohli nájsť dobrý nápad?",
   "¿Qué restricciones te han ayudado a encontrar una buena idea?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-038"
 },
 {
  "id": "reading-039",
  "topic": "city",
  "title": [
   "Spoločný roh ulice",
   "La esquina compartida"
  ],
  "tag": [
   "Mesto, priestory a spolužitie",
   "Ciudad, espacios y convivencia"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "En la esquina se cruzaban bicicletas, peatones y repartidores. Cada grupo decía que los demás estorbaban. Durante una reunión dibujaron sus recorridos en el mismo papel. Por primera vez vieron el problema como un cruce de necesidades, no de enemigos.",
  "sk": "Na rohu sa stretávali bicykle, chodci a kuriéri. Každá skupina tvrdila, že ostatní prekážajú. Na stretnutí nakreslili svoje trasy na jeden papier. Prvýkrát videli problém ako stret potrieb, nie nepriateľov.",
  "vocab": [
   [
    "estorbar",
    "prekážať",
    "Dificultar el paso o la actividad de otro.",
    "Sťažovať druhému priechod alebo činnosť."
   ],
   [
    "dibujaron",
    "nakreslili",
    "Un episodio de un relato pasado.",
    "Epizóda minulého príbehu."
   ],
   [
    "no",
    "nie",
    "Niega un contenido.",
    "Popiera obsah."
   ]
  ],
  "questions": [
   [
    "En «La esquina compartida», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una elección habitual se somete a comparación.",
     "Un dibujo compartido cambia la forma de discutir.",
     "Una buena pregunta puede cerrar mejor que una victoria."
    ],
    1,
    "Celá scéna podporuje tento výklad: Spoločný nákres mení spôsob diskusie.",
    "El conjunto de la escena apoya esta lectura: Un dibujo compartido cambia la forma de discutir."
   ],
   [
    "¿Qué significa «estorbar» en «La esquina compartida»?",
    [
     "Dificultar el paso o la actividad de otro.",
     "Modificar algo para que funcione de forma adecuada.",
     "Recorrer un espacio de un lado a otro."
    ],
    0,
    "V tomto kontexte má „estorbar“ tento význam.",
    "En este contexto, «estorbar» tiene este sentido."
   ],
   [
    "¿Qué aporta «dibujaron» a la escena «La esquina compartida»?",
    [
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo.",
     "Un episodio de un relato pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La esquina compartida»?",
    [
     "Todos usaron el mismo papel.",
     "Decidieron qué investigar después.",
     "La cuerda nueva pesaba menos."
    ],
    0,
    "Text to uvádza: Všetci použili ten istý papier.",
    "El texto lo indica: Todos usaron el mismo papel."
   ]
  ],
  "discussion": [
   "Čo sa mení, keď problém spoločne nakreslíme?",
   "¿Qué cambia cuando dibujamos un problema juntos?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-039"
 },
 {
  "id": "reading-040",
  "topic": "city",
  "title": [
   "Stará adresa",
   "La dirección antigua"
  ],
  "tag": [
   "Mesto, priestory a spolužitie",
   "Ciudad, espacios y convivencia"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "La carta llegó a una tienda que había cambiado de dueño. El nuevo propietario quiso devolverla. Una vecina reconoció el nombre y pidió tiempo para localizar al destinatario. La dirección seguía siendo útil porque alguien recordaba su historia.",
  "sk": "List prišiel do obchodu, ktorý zmenil majiteľa. Nový vlastník ho chcel vrátiť. Susedka spoznala meno a požiadala o čas na nájdenie adresáta. Adresa bola stále užitočná, pretože si niekto pamätal jej históriu.",
  "vocab": [
   [
    "propietario",
    "vlastník",
    "La persona a la que pertenece algo.",
    "Osoba, ktorej niečo patrí."
   ],
   [
    "había cambiado",
    "zmenil už predtým",
    "Algo anterior a otro punto pasado.",
    "Niečo skoršie než iný minulý bod."
   ],
   [
    "porque",
    "pretože",
    "Introduce una causa o una explicación.",
    "Uvádza príčinu alebo vysvetlenie."
   ]
  ],
  "questions": [
   [
    "En «La dirección antigua», ¿qué idea resume mejor lo que ocurre?",
    [
     "La memoria de una persona conecta una dirección con su pasado.",
     "Explicar el problema con claridad ayuda a colaborar.",
     "Un supuesto permite comparar prioridades."
    ],
    0,
    "Celá scéna podporuje tento výklad: Pamäť človeka spája adresu s jej minulosťou.",
    "El conjunto de la escena apoya esta lectura: La memoria de una persona conecta una dirección con su pasado."
   ],
   [
    "¿Qué significa «propietario» en «La dirección antigua»?",
    [
     "Volver a incorporar algo que se había quitado.",
     "Sin escribir o completar el espacio.",
     "La persona a la que pertenece algo."
    ],
    2,
    "V tomto kontexte má „propietario“ tento význam.",
    "En este contexto, «propietario» tiene este sentido."
   ],
   [
    "¿Qué aporta «había cambiado» a la escena «La dirección antigua»?",
    [
     "Una petición de no hacer algo.",
     "Algo anterior a otro punto pasado.",
     "Una previsión o promesa sobre después."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La dirección antigua»?",
    [
     "Los hoteles tenían nombres parecidos.",
     "Una de las respuestas fue buscar sombra.",
     "Una vecina reconoció el nombre del destinatario."
    ],
    2,
    "Text to uvádza: Susedka spoznala meno adresáta.",
    "El texto lo indica: Una vecina reconoció el nombre del destinatario."
   ]
  ],
  "discussion": [
   "Čo vie človek o mieste, čo na mape nenájdeme?",
   "¿Qué sabe una persona de un lugar que no aparece en un mapa?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-040"
 },
 {
  "id": "reading-041",
  "topic": "science",
  "title": [
   "Opakované meranie",
   "La medida repetida"
  ],
  "tag": [
   "Otázky, pozorovanie a overovanie",
   "Preguntas, observación y pruebas"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "El primer resultado parecía extraordinario. Antes de anunciarlo, el equipo repitió la medida con otro instrumento. La diferencia se redujo mucho. No habían perdido un descubrimiento: habían aprendido a distinguir una señal de un error de medida.",
  "sk": "Prvý výsledok sa zdal mimoriadny. Pred oznámením tím zopakoval meranie iným prístrojom. Rozdiel sa výrazne zmenšil. Nestratili objav: naučili sa odlíšiť signál od chyby merania.",
  "vocab": [
   [
    "instrumento",
    "prístroj",
    "Una herramienta utilizada para observar o medir.",
    "Pomôcka používaná na pozorovanie alebo meranie."
   ],
   [
    "repitió",
    "zopakoval",
    "Un episodio de un relato pasado.",
    "Epizóda minulého príbehu."
   ],
   [
    "antes de",
    "predtým než",
    "Sitúa algo antes de otro momento o acción.",
    "Umiestňuje niečo pred iný okamih alebo činnosť."
   ]
  ],
  "questions": [
   [
    "En «La medida repetida», ¿qué idea resume mejor lo que ocurre?",
    [
     "Un cambio de plan puede crear otro tipo de experiencia.",
     "Pensar en una alternativa mejora un plan.",
     "Repetir una prueba ayuda a valorar un resultado."
    ],
    2,
    "Celá scéna podporuje tento výklad: Opakovanie skúšky pomáha posúdiť výsledok.",
    "El conjunto de la escena apoya esta lectura: Repetir una prueba ayuda a valorar un resultado."
   ],
   [
    "¿Qué significa «instrumento» en «La medida repetida»?",
    [
     "Contener algo como parte de un conjunto.",
     "Una herramienta utilizada para observar o medir.",
     "Ser suficiente para una necesidad."
    ],
    1,
    "V tomto kontexte má „instrumento“ tento význam.",
    "En este contexto, «instrumento» tiene este sentido."
   ],
   [
    "¿Qué aporta «repitió» a la escena «La medida repetida»?",
    [
     "Un episodio de un relato pasado.",
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La medida repetida»?",
    [
     "Lucía preguntó por un cambio de viento.",
     "El equipo utilizó otro instrumento.",
     "La lluvia impidió la excursión."
    ],
    1,
    "Text to uvádza: Tím použil iný prístroj.",
    "El texto lo indica: El equipo utilizó otro instrumento."
   ]
  ],
  "discussion": [
   "Čo dáva hodnotu výsledku, ktorý nepotvrdzuje očakávanie?",
   "¿Qué hace valioso un resultado que no confirma lo esperado?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-041"
 },
 {
  "id": "reading-042",
  "topic": "science",
  "title": [
   "Graf bez mierky",
   "El gráfico sin escala"
  ],
  "tag": [
   "Otázky, pozorovanie a overovanie",
   "Preguntas, observación y pruebas"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Las dos líneas parecían separarse mucho. Cuando Julia añadió la escala, la diferencia resultó pequeña. Los datos no habían cambiado; había cambiado su presentación. La reunión pasó de celebrar un gran efecto a preguntar si aquel efecto importaba.",
  "sk": "Dve čiary sa zdali výrazne vzdialené. Keď Julia doplnila mierku, rozdiel bol malý. Údaje sa nezmenili, zmenilo sa ich podanie. Na stretnutí namiesto oslavy veľkého účinku začali skúmať, či je dôležitý.",
  "vocab": [
   [
    "escala",
    "mierka",
    "La relación que permite interpretar los valores de un gráfico.",
    "Vzťah umožňujúci čítať hodnoty grafu."
   ],
   [
    "habían cambiado",
    "zmenili sa predtým",
    "Algo anterior a otro punto pasado.",
    "Niečo skoršie než iný minulý bod."
   ],
   [
    "cuando",
    "keď",
    "Relaciona una acción con un momento.",
    "Spája dej s časovým bodom."
   ]
  ],
  "questions": [
   [
    "En «El gráfico sin escala», ¿qué idea resume mejor lo que ocurre?",
    [
     "Un defecto visual puede conservar una experiencia.",
     "La presentación visual puede exagerar una diferencia.",
     "Preguntar por un plato puede abrir una historia."
    ],
    1,
    "Celá scéna podporuje tento výklad: Vizuálne zobrazenie môže zveličovať rozdiel.",
    "El conjunto de la escena apoya esta lectura: La presentación visual puede exagerar una diferencia."
   ],
   [
    "¿Qué significa «escala» en «El gráfico sin escala»?",
    [
     "La relación que permite interpretar los valores de un gráfico.",
     "El momento de presentar un trabajo terminado.",
     "Deshacerse de algo que ya no se conserva."
    ],
    0,
    "V tomto kontexte má „escala“ tento význam.",
    "En este contexto, «escala» tiene este sentido."
   ],
   [
    "¿Qué aporta «habían cambiado» a la escena «El gráfico sin escala»?",
    [
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo.",
     "Algo anterior a otro punto pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El gráfico sin escala»?",
    [
     "Julia añadió una escala.",
     "El camarero compartió un recuerdo.",
     "Conservaron dos versiones de la fotografía."
    ],
    0,
    "Text to uvádza: Julia doplnila mierku.",
    "El texto lo indica: Julia añadió una escala."
   ]
  ],
  "discussion": [
   "Čo si všimneš najprv pri pohľade na graf?",
   "¿Qué miras primero cuando ves un gráfico?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-042"
 },
 {
  "id": "reading-043",
  "topic": "science",
  "title": [
   "Nepríjemná otázka",
   "La pregunta incómoda"
  ],
  "tag": [
   "Otázky, pozorovanie a overovanie",
   "Preguntas, observación y pruebas"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Un estudiante preguntó cómo sabrían que la explicación era falsa. Hubo un silencio largo. La profesora le agradeció la pregunta. «Explicad qué os haría cambiar de idea», pidió. Hasta entonces habían reunido ejemplos favorables, pero no habían decidido qué los haría cambiar de idea.",
  "sk": "Študent sa opýtal, ako by zistili, že vysvetlenie je nesprávne. Nastalo dlhé ticho. Učiteľka mu poďakovala. „Vysvetlite, čo by vás priviedlo k zmene názoru,“ požiadala. Dovtedy zhromažďovali priaznivé príklady, ale neurčili, čo by ich priviedlo k zmene názoru.",
  "vocab": [
   [
    "favorable",
    "priaznivý",
    "Que apoya una idea o una posibilidad.",
    "Ktorý podporuje myšlienku alebo možnosť."
   ],
   [
    "Explicad",
    "vysvetlite",
    "Una invitación o instrucción afirmativa.",
    "Kladná výzva alebo pokyn."
   ],
   [
    "pero",
    "ale",
    "Introduce un contraste.",
    "Uvádza protiklad."
   ]
  ],
  "questions": [
   [
    "En «La pregunta incómoda», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una explicación necesita saber qué podría cuestionarla.",
     "Renunciar a cantidad permite prestar más atención.",
     "Comprender un mensaje exige reconocer su contexto."
    ],
    0,
    "Celá scéna podporuje tento výklad: Vysvetlenie potrebuje určiť, čo by ho mohlo spochybniť.",
    "El conjunto de la escena apoya esta lectura: Una explicación necesita saber qué podría cuestionarla."
   ],
   [
    "¿Qué significa «favorable» en «La pregunta incómoda»?",
    [
     "Realizar lo prometido dentro de las condiciones acordadas.",
     "Una reunión de cosas sin que siempre haya selección.",
     "Que apoya una idea o una posibilidad."
    ],
    2,
    "V tomto kontexte má „favorable“ tento význam.",
    "En este contexto, «favorable» tiene este sentido."
   ],
   [
    "¿Qué aporta «Explicad» a la escena «La pregunta incómoda»?",
    [
     "Un resultado ya terminado en un punto futuro.",
     "Una invitación o instrucción afirmativa.",
     "Una situación, costumbre o acción en curso en el pasado."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La pregunta incómoda»?",
    [
     "El plan inicial incluía cuatro pueblos.",
     "Comprobaron el canal antes de responder.",
     "La profesora agradeció la pregunta."
    ],
    2,
    "Text to uvádza: Učiteľka poďakovala za otázku.",
    "El texto lo indica: La profesora agradeció la pregunta."
   ]
  ],
  "discussion": [
   "Ktorý údaj by ťa priviedol k opusteniu obľúbeného vysvetlenia?",
   "¿Qué dato te haría abandonar una explicación que te gusta?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-043"
 },
 {
  "id": "reading-044",
  "topic": "science",
  "title": [
   "Terénny zápisník",
   "El cuaderno de campo"
  ],
  "tag": [
   "Otázky, pozorovanie a overovanie",
   "Preguntas, observación y pruebas"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Luis anotaba también los días en que no veía ningún pájaro. Su compañero pensaba que aquellas páginas no servían. Al revisar el mes completo, comprendieron que las ausencias ayudaban a formular preguntas que una colección de encuentros habría ocultado.",
  "sk": "Luis zapisoval aj dni, keď nevidel nijakého vtáka. Kolega si myslel, že tie stránky sú zbytočné. Pri prezeraní celého mesiaca pochopili, že neprítomnosť pomáha položiť otázky, ktoré by zbierka stretnutí zakryla.",
  "vocab": [
   [
    "anotar",
    "zaznamenať",
    "Escribir algo para conservarlo y revisarlo.",
    "Zapísať si niečo na uchovanie a kontrolu."
   ],
   [
    "anotaba",
    "zapisoval",
    "Una situación, costumbre o acción en curso en el pasado.",
    "Minulá situácia, zvyk alebo prebiehajúci dej."
   ],
   [
    "también",
    "aj / tiež",
    "Añade algo a lo que ya se ha dicho.",
    "Pridáva niečo k už povedanému."
   ]
  ],
  "questions": [
   [
    "En «El cuaderno de campo», ¿qué idea resume mejor lo que ocurre?",
    [
     "Nombres diferentes pueden señalar el mismo lugar.",
     "El final cambia la lectura de una frase anterior.",
     "Registrar una ausencia también puede aportar información."
    ],
    2,
    "Celá scéna podporuje tento výklad: Aj zaznamenanie neprítomnosti môže priniesť informáciu.",
    "El conjunto de la escena apoya esta lectura: Registrar una ausencia también puede aportar información."
   ],
   [
    "¿Qué significa «anotar» en «El cuaderno de campo»?",
    [
     "La forma en que se percibe una materia al tocarla.",
     "Escribir algo para conservarlo y revisarlo.",
     "Decidir no conservar o perseguir algo."
    ],
    1,
    "V tomto kontexte má „anotar“ tento význam.",
    "En este contexto, «anotar» tiene este sentido."
   ],
   [
    "¿Qué aporta «anotaba» a la escena «El cuaderno de campo»?",
    [
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El cuaderno de campo»?",
    [
     "El libro pertenecía a una biblioteca.",
     "Luis registraba días sin avistamientos.",
     "Una vecina aclaró la diferencia."
    ],
    1,
    "Text to uvádza: Luis zaznamenával dni bez pozorovaných vtákov.",
    "El texto lo indica: Luis registraba días sin avistamientos."
   ]
  ],
  "discussion": [
   "Čo vynechávame, keď zaznamenávame iba nápadné veci?",
   "¿Qué dejamos fuera cuando solo registramos lo llamativo?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-044"
 },
 {
  "id": "reading-045",
  "topic": "science",
  "title": [
   "Príliš elegantné vysvetlenie",
   "Una explicación demasiado elegante"
  ],
  "tag": [
   "Otázky, pozorovanie a overovanie",
   "Preguntas, observación y pruebas"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "La hipótesis encajaba con casi todo y era fácil de recordar. Por eso costaba discutirla. Ana separó en dos columnas lo que explicaba y lo que solo parecía explicar. La belleza de la idea no desapareció, pero dejó de sustituir a las pruebas.",
  "sk": "Hypotéza sedela takmer na všetko a ľahko sa pamätala. Preto sa ťažko spochybňovala. Ana rozdelila do dvoch stĺpcov to, čo vysvetľovala, a to, čo iba zdanlivo vysvetľovala. Krása myšlienky nezmizla, ale prestala nahrádzať dôkazy.",
  "vocab": [
   [
    "encajar",
    "zapadať",
    "Ser compatible con otras partes o datos.",
    "Byť v súlade s inými časťami alebo údajmi."
   ],
   [
    "costaba",
    "bolo ťažké",
    "Una situación, costumbre o acción en curso en el pasado.",
    "Minulá situácia, zvyk alebo prebiehajúci dej."
   ],
   [
    "pero",
    "ale",
    "Introduce un contraste.",
    "Uvádza protiklad."
   ]
  ],
  "questions": [
   [
    "En «Una explicación demasiado elegante», ¿qué idea resume mejor lo que ocurre?",
    [
     "Los silencios hacen dudar de un narrador.",
     "Una idea atractiva sigue necesitando pruebas.",
     "Una historia puede cambiar nuestra atención al paisaje."
    ],
    1,
    "Celá scéna podporuje tento výklad: Príťažlivá myšlienka naďalej potrebuje dôkazy.",
    "El conjunto de la escena apoya esta lectura: Una idea atractiva sigue necesitando pruebas."
   ],
   [
    "¿Qué significa «encajar» en «Una explicación demasiado elegante»?",
    [
     "Ser compatible con otras partes o datos.",
     "Una expresión de reconocimiento positivo.",
     "Identificar algo visto o conocido anteriormente."
    ],
    0,
    "V tomto kontexte má „encajar“ tento význam.",
    "En este contexto, «encajar» tiene este sentido."
   ],
   [
    "¿Qué aporta «costaba» a la escena «Una explicación demasiado elegante»?",
    [
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo.",
     "Una situación, costumbre o acción en curso en el pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Una explicación demasiado elegante»?",
    [
     "Ana organizó la información en dos columnas.",
     "Rosa buscó un puente al regresar.",
     "El narrador cambiaba de tema cuando hablaba su hermano."
    ],
    0,
    "Text to uvádza: Ana usporiadala informácie do dvoch stĺpcov.",
    "El texto lo indica: Ana organizó la información en dos columnas."
   ]
  ],
  "discussion": [
   "Je jednoduché vysvetlenie vždy lepšie?",
   "¿Una explicación sencilla es siempre mejor?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-045"
 },
 {
  "id": "reading-046",
  "topic": "science",
  "title": [
   "Pokus s hodinami",
   "El experimento del reloj"
  ],
  "tag": [
   "Otázky, pozorovanie a overovanie",
   "Preguntas, observación y pruebas"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Dos grupos hicieron la misma tarea. Uno podía ver un reloj; el otro no. Antes de comparar resultados, la investigadora comprobó si habían recibido las mismas instrucciones. Una diferencia pequeña en la preparación podía explicar una diferencia grande al final.",
  "sk": "Dve skupiny plnili rovnakú úlohu. Jedna videla hodiny, druhá nie. Pred porovnaním výsledkov výskumníčka overila, či dostali rovnaké pokyny. Malý rozdiel v príprave mohol vysvetliť veľký rozdiel na konci.",
  "vocab": [
   [
    "instrucciones",
    "pokyny",
    "Indicaciones que explican cómo realizar una tarea.",
    "Usmernenia vysvetľujúce postup úlohy."
   ],
   [
    "habían recibido",
    "dostali už predtým",
    "Algo anterior a otro punto pasado.",
    "Niečo skoršie než iný minulý bod."
   ],
   [
    "antes de",
    "predtým než",
    "Sitúa algo antes de otro momento o acción.",
    "Umiestňuje niečo pred iný okamih alebo činnosť."
   ]
  ],
  "questions": [
   [
    "En «El experimento del reloj», ¿qué idea resume mejor lo que ocurre?",
    [
     "Comparar exige revisar las condiciones iniciales.",
     "Prepararse también implica aceptar cierta incertidumbre.",
     "La elección de una palabra modifica una relación."
    ],
    0,
    "Celá scéna podporuje tento výklad: Porovnanie si vyžaduje kontrolu počiatočných podmienok.",
    "El conjunto de la escena apoya esta lectura: Comparar exige revisar las condiciones iniciales."
   ],
   [
    "¿Qué significa «instrucciones» en «El experimento del reloj»?",
    [
     "Aparecer una idea o una situación.",
     "La parte inferior del calzado.",
     "Indicaciones que explican cómo realizar una tarea."
    ],
    2,
    "V tomto kontexte má „instrucciones“ tento význam.",
    "En este contexto, «instrucciones» tiene este sentido."
   ],
   [
    "¿Qué aporta «habían recibido» a la escena «El experimento del reloj»?",
    [
     "Una petición de no hacer algo.",
     "Algo anterior a otro punto pasado.",
     "Una previsión o promesa sobre después."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El experimento del reloj»?",
    [
     "La maleta se estaba quedando sin espacio.",
     "Compararon dos traducciones.",
     "Solo un grupo podía ver el reloj."
    ],
    2,
    "Text to uvádza: Iba jedna skupina videla hodiny.",
    "El texto lo indica: Solo un grupo podía ver el reloj."
   ]
  ],
  "discussion": [
   "Čo robí porovnanie spravodlivým?",
   "¿Qué hace justa una comparación?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-046"
 },
 {
  "id": "reading-047",
  "topic": "science",
  "title": [
   "Zoznam výnimiek",
   "La lista de excepciones"
  ],
  "tag": [
   "Otázky, pozorovanie a overovanie",
   "Preguntas, observación y pruebas"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Pedro guardaba las excepciones al final de su informe. Una colega empezó a leer por allí. No quería rechazar la propuesta, sino entender dónde dejaba de funcionar. Las excepciones acabaron definiendo mejor el alcance de la idea.",
  "sk": "Pedro ukladal výnimky na koniec správy. Kolegyňa začala čítať práve tam. Nechcela návrh odmietnuť, ale pochopiť, kde prestáva fungovať. Výnimky napokon lepšie vymedzili dosah myšlienky.",
  "vocab": [
   [
    "alcance",
    "dosah",
    "Los límites dentro de los que algo sirve.",
    "Hranice, v ktorých je niečo použiteľné."
   ],
   [
    "quería",
    "chcela",
    "Una situación, costumbre o acción en curso en el pasado.",
    "Minulá situácia, zvyk alebo prebiehajúci dej."
   ],
   [
    "no",
    "nie",
    "Niega un contenido.",
    "Popiera obsah."
   ]
  ],
  "questions": [
   [
    "En «La lista de excepciones», ¿qué idea resume mejor lo que ocurre?",
    [
     "Dos recomendaciones pueden ser complementarias.",
     "Dos lectores valoran de forma distinta la sorpresa.",
     "Las excepciones pueden precisar una regla."
    ],
    2,
    "Celá scéna podporuje tento výklad: Výnimky môžu spresniť pravidlo.",
    "El conjunto de la escena apoya esta lectura: Las excepciones pueden precisar una regla."
   ],
   [
    "¿Qué significa «alcance» en «La lista de excepciones»?",
    [
     "Lo que forma parte de los días habituales.",
     "Los límites dentro de los que algo sirve.",
     "Una razón que cuestiona una propuesta."
    ],
    1,
    "V tomto kontexte má „alcance“ tento význam.",
    "En este contexto, «alcance» tiene este sentido."
   ],
   [
    "¿Qué aporta «quería» a la escena «La lista de excepciones»?",
    [
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La lista de excepciones»?",
    [
     "Pablo consultaba la última página.",
     "La colega empezó por el final del informe.",
     "Elena visitó los dos puntos de vista."
    ],
    1,
    "Text to uvádza: Kolegyňa začala koncom správy.",
    "El texto lo indica: La colega empezó por el final del informe."
   ]
  ],
  "discussion": [
   "Ničí výnimka pravidlo, alebo ho môže zlepšiť?",
   "¿Una excepción destruye una regla o puede mejorarla?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-047"
 },
 {
  "id": "reading-048",
  "topic": "science",
  "title": [
   "Chýbajúci údaj",
   "El dato que faltaba"
  ],
  "tag": [
   "Otázky, pozorovanie a overovanie",
   "Preguntas, observación y pruebas"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "El promedio había mejorado, pero nadie sabía qué había ocurrido con las personas que abandonaron el proyecto. Marta pidió incluirlas en la discusión. Un resultado sobre quienes terminaron no respondía automáticamente a una pregunta sobre todos.",
  "sk": "Priemer sa zlepšil, ale nikto nevedel, čo sa stalo s ľuďmi, ktorí projekt opustili. Marta požiadala, aby ich zahrnuli do debaty. Výsledok o tých, ktorí dokončili, automaticky neodpovedal na otázku o všetkých.",
  "vocab": [
   [
    "promedio",
    "priemer",
    "Un valor que resume un conjunto de cantidades.",
    "Hodnota zhŕňajúca súbor veličín."
   ],
   [
    "pidió",
    "požiadala",
    "Un episodio de un relato pasado.",
    "Epizóda minulého príbehu."
   ],
   [
    "nadie",
    "nikto",
    "Indica la ausencia de una persona que cumpla lo dicho.",
    "Označuje neprítomnosť osoby, ktorá by spĺňala uvedené."
   ]
  ],
  "questions": [
   [
    "En «El dato que faltaba», ¿qué idea resume mejor lo que ocurre?",
    [
     "El interés literario no depende de la simpatía.",
     "Una conclusión depende de a quién incluye.",
     "Un mensaje puede valer por el gesto y no por su rapidez."
    ],
    1,
    "Celá scéna podporuje tento výklad: Záver závisí od toho, koho zahŕňa.",
    "El conjunto de la escena apoya esta lectura: Una conclusión depende de a quién incluye."
   ],
   [
    "¿Qué significa «promedio» en «El dato que faltaba»?",
    [
     "Un valor que resume un conjunto de cantidades.",
     "La posición que se mantiene sobre una cuestión.",
     "Que todavía espera atención o resolución."
    ],
    0,
    "V tomto kontexte má „promedio“ tento význam.",
    "En este contexto, «promedio» tiene este sentido."
   ],
   [
    "¿Qué aporta «pidió» a la escena «El dato que faltaba»?",
    [
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo.",
     "Un episodio de un relato pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El dato que faltaba»?",
    [
     "Había personas que habían abandonado el proyecto.",
     "La amiga puso la postal junto al escritorio.",
     "Marta quería continuar la lectura."
    ],
    0,
    "Text to uvádza: Niektorí ľudia projekt opustili.",
    "El texto lo indica: Había personas que habían abandonado el proyecto."
   ]
  ],
  "discussion": [
   "Ktorí ľudia môžu v zhrnutí zostať neviditeľní?",
   "¿Qué personas pueden quedar invisibles en un resumen?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-048"
 },
 {
  "id": "reading-049",
  "topic": "science",
  "title": [
   "Predbežná odpoveď",
   "La respuesta provisional"
  ],
  "tag": [
   "Otázky, pozorovanie a overovanie",
   "Preguntas, observación y pruebas"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "«Esta es nuestra mejor explicación por ahora», dijo la ponente. Un oyente interpretó la cautela como falta de conocimiento. Ella distinguió entre no saber nada y saber qué parte de una respuesta sigue abierta. La precisión también podía sonar insegura.",
  "sk": "„Toto je zatiaľ naše najlepšie vysvetlenie,“ povedala prednášajúca. Poslucháč si opatrnosť vyložil ako nevedomosť. Odlíšila nevedieť nič od vedieť, ktorá časť odpovede zostáva otvorená. Aj presnosť mohla znieť neisto.",
  "vocab": [
   [
    "cautela",
    "opatrnosť",
    "Cuidado al afirmar algo o actuar.",
    "Obozretnosť pri tvrdení alebo konaní."
   ],
   [
    "sigue",
    "stále zostáva",
    "Una situación presente o habitual.",
    "Súčasná alebo obvyklá situácia."
   ],
   [
    "también",
    "aj / tiež",
    "Añade algo a lo que ya se ha dicho.",
    "Pridáva niečo k už povedanému."
   ]
  ],
  "questions": [
   [
    "En «La respuesta provisional», ¿qué idea resume mejor lo que ocurre?",
    [
     "Reconocer límites no equivale a carecer de conocimiento.",
     "Pedir orientación puede crear un contacto humano.",
     "Una promesa atractiva puede representar mal un libro."
    ],
    0,
    "Celá scéna podporuje tento výklad: Priznať hranice neznamená nemať poznanie.",
    "El conjunto de la escena apoya esta lectura: Reconocer límites no equivale a carecer de conocimiento."
   ],
   [
    "¿Qué significa «cautela» en «La respuesta provisional»?",
    [
     "Que se aparta de lo que ocurre normalmente.",
     "El lugar o la persona de donde viene algo.",
     "Cuidado al afirmar algo o actuar."
    ],
    2,
    "V tomto kontexte má „cautela“ tento význam.",
    "En este contexto, «cautela» tiene este sentido."
   ],
   [
    "¿Qué aporta «sigue» a la escena «La respuesta provisional»?",
    [
     "Una petición de no hacer algo.",
     "Una situación presente o habitual.",
     "Una previsión o promesa sobre después."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La respuesta provisional»?",
    [
     "El teléfono dejó de funcionar antes de la llegada.",
     "La historia trataba de dos hermanas.",
     "La ponente presentó una explicación provisional."
    ],
    2,
    "Text to uvádza: Prednášajúca predstavila predbežné vysvetlenie.",
    "El texto lo indica: La ponente presentó una explicación provisional."
   ]
  ],
  "discussion": [
   "Aký je rozdiel medzi dôverou a istotou?",
   "¿Qué diferencia hay entre confianza y certeza?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-049"
 },
 {
  "id": "reading-050",
  "topic": "science",
  "title": [
   "Dvaja pozorovatelia",
   "Dos observadores"
  ],
  "tag": [
   "Otázky, pozorovanie a overovanie",
   "Preguntas, observación y pruebas"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Ante la misma planta, una persona describió el color y otra contó las hojas. No se contradecían: habían empezado con preguntas diferentes. Antes de comparar sus notas, tuvieron que explicar qué estaban intentando averiguar.",
  "sk": "Pri rovnakej rastline jedna osoba opísala farbu a druhá spočítala listy. Neprotirečili si: začali odlišnými otázkami. Pred porovnaním poznámok museli vysvetliť, čo sa pokúšajú zistiť.",
  "vocab": [
   [
    "averiguar",
    "zistiť",
    "Buscar información hasta aclarar algo.",
    "Hľadať informácie na objasnenie niečoho."
   ],
   [
    "habían empezado",
    "začali už predtým",
    "Algo anterior a otro punto pasado.",
    "Niečo skoršie než iný minulý bod."
   ],
   [
    "antes de",
    "predtým než",
    "Sitúa algo antes de otro momento o acción.",
    "Umiestňuje niečo pred iný okamih alebo činnosť."
   ]
  ],
  "questions": [
   [
    "En «Dos observadores», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una memoria parcial puede conservarse sin inventar el resto.",
     "La voz puede descubrir un humor que pasa inadvertido.",
     "La pregunta orienta lo que observamos."
    ],
    2,
    "Celá scéna podporuje tento výklad: Otázka usmerňuje to, čo pozorujeme.",
    "El conjunto de la escena apoya esta lectura: La pregunta orienta lo que observamos."
   ],
   [
    "¿Qué significa «averiguar» en «Dos observadores»?",
    [
     "La disminución de una preocupación o tensión.",
     "Buscar información hasta aclarar algo.",
     "Mostrar como verdadero algo que no se sostiene realmente."
    ],
    1,
    "V tomto kontexte má „averiguar“ tento význam.",
    "En este contexto, «averiguar» tiene este sentido."
   ],
   [
    "¿Qué aporta «habían empezado» a la escena «Dos observadores»?",
    [
     "Algo anterior a otro punto pasado.",
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Dos observadores»?",
    [
     "Luis no había detectado la broma al leer en silencio.",
     "Uno de los observadores contó las hojas.",
     "Isabel recordó una luz sobre una mesa."
    ],
    1,
    "Text to uvádza: Jeden z pozorovateľov spočítal listy.",
    "El texto lo indica: Uno de los observadores contó las hojas."
   ]
  ],
  "discussion": [
   "Dá sa pozorovať bez predchádzajúceho výberu, na čo sa pozerať?",
   "¿Es posible observar sin elegir antes qué mirar?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-050"
 },
 {
  "id": "reading-051",
  "topic": "work",
  "title": [
   "Desaťminútové stretnutie",
   "La reunión de diez minutos"
  ],
  "tag": [
   "Práca, remeslo a spolupráca",
   "Trabajo, oficio y colaboración"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "El equipo decidió reducir la reunión a diez minutos. Hablaron menos, pero salieron con dudas. La semana siguiente enviaron antes las preguntas y dejaron tiempo para las difíciles. Ahorrar minutos no había sido lo mismo que ahorrar trabajo.",
  "sk": "Tím sa rozhodol skrátiť stretnutie na desať minút. Hovorili menej, ale odchádzali s otázkami. Ďalší týždeň poslali otázky vopred a nechali čas na náročné. Ušetriť minúty nebolo to isté ako ušetriť prácu.",
  "vocab": [
   [
    "ahorrar",
    "ušetriť",
    "Evitar gastar un recurso innecesariamente.",
    "Vyhnúť sa zbytočnému míňaniu zdroja."
   ],
   [
    "enviaron",
    "poslali",
    "Un episodio de un relato pasado.",
    "Epizóda minulého príbehu."
   ],
   [
    "pero",
    "ale",
    "Introduce un contraste.",
    "Uvádza protiklad."
   ]
  ],
  "questions": [
   [
    "En «La reunión de diez minutos», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una valoración concreta ayuda más que una etiqueta.",
     "Una reunión breve no siempre resuelve mejor.",
     "Los recuerdos reflejan focos de atención diferentes."
    ],
    1,
    "Celá scéna podporuje tento výklad: Krátke stretnutie nemusí priniesť lepšie riešenie.",
    "El conjunto de la escena apoya esta lectura: Una reunión breve no siempre resuelve mejor."
   ],
   [
    "¿Qué significa «ahorrar» en «La reunión de diez minutos»?",
    [
     "Evitar gastar un recurso innecesariamente.",
     "Una previsión de los recursos y gastos disponibles.",
     "Saber realizar algo con seguridad."
    ],
    0,
    "V tomto kontexte má „ahorrar“ tento význam.",
    "En este contexto, «ahorrar» tiene este sentido."
   ],
   [
    "¿Qué aporta «enviaron» a la escena «La reunión de diez minutos»?",
    [
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo.",
     "Un episodio de un relato pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La reunión de diez minutos»?",
    [
     "La primera reunión duró diez minutos.",
     "Un amigo recordaba especialmente la comida.",
     "Elena sustituyó un adjetivo por ejemplos."
    ],
    0,
    "Text to uvádza: Prvé stretnutie trvalo desať minút.",
    "El texto lo indica: La primera reunión duró diez minutos."
   ]
  ],
  "discussion": [
   "Ako by si odlíšil(a) krátke stretnutie od užitočného?",
   "¿Cómo distinguirías una reunión breve de una útil?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-051"
 },
 {
  "id": "reading-052",
  "topic": "work",
  "title": [
   "Opotrebovaný nástroj",
   "La herramienta gastada"
  ],
  "tag": [
   "Práca, remeslo a spolupráca",
   "Trabajo, oficio y colaboración"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "El aprendiz quiso sustituir el cepillo viejo del carpintero. Este le mostró cómo ajustarlo. La herramienta seguía siendo útil, aunque exigía conocerla. Más tarde probaron también una nueva: la experiencia no tenía por qué convertirse en rechazo al cambio.",
  "sk": "Učeň chcel vymeniť stolárov starý hoblík. Stolár mu ukázal, ako ho nastaviť. Nástroj bol stále užitočný, hoci ho bolo treba poznať. Neskôr vyskúšali aj nový: skúsenosť sa nemusela meniť na odmietanie zmeny.",
  "vocab": [
   [
    "ajustar",
    "nastaviť",
    "Modificar algo para que funcione de forma adecuada.",
    "Upraviť niečo tak, aby správne fungovalo."
   ],
   [
    "seguía",
    "naďalej bol",
    "Una situación, costumbre o acción en curso en el pasado.",
    "Minulá situácia, zvyk alebo prebiehajúci dej."
   ],
   [
    "aunque",
    "hoci",
    "Introduce una dificultad que no impide lo principal.",
    "Uvádza ťažkosť, ktorá nebráni hlavnej veci."
   ]
  ],
  "questions": [
   [
    "En «La herramienta gastada», ¿qué idea resume mejor lo que ocurre?",
    [
     "Conocer lo antiguo no impide probar lo nuevo.",
     "Una reparación puede añadir significado a un objeto.",
     "Una nota incompleta invita a proyectar interpretaciones."
    ],
    0,
    "Celá scéna podporuje tento výklad: Poznanie starého nebráni skúšaniu nového.",
    "El conjunto de la escena apoya esta lectura: Conocer lo antiguo no impide probar lo nuevo."
   ],
   [
    "¿Qué significa «ajustar» en «La herramienta gastada»?",
    [
     "De forma cuidadosa, sin brusquedad.",
     "La parte inicial que prepara lo que sigue.",
     "Modificar algo para que funcione de forma adecuada."
    ],
    2,
    "V tomto kontexte má „ajustar“ tento význam.",
    "En este contexto, «ajustar» tiene este sentido."
   ],
   [
    "¿Qué aporta «seguía» a la escena «La herramienta gastada»?",
    [
     "Una petición de no hacer algo.",
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una previsión o promesa sobre después."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La herramienta gastada»?",
    [
     "Ana no quiso ocultar la reparación.",
     "La nota no explicaba el desacuerdo.",
     "El carpintero enseñó a ajustar un cepillo."
    ],
    2,
    "Text to uvádza: Stolár učil nastaviť hoblík.",
    "El texto lo indica: El carpintero enseñó a ajustar un cepillo."
   ]
  ],
  "discussion": [
   "Ktoré poznatky žijú v rukách, nie v príručkách?",
   "¿Qué conocimientos viven en las manos y no en los manuales?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-052"
 },
 {
  "id": "reading-053",
  "topic": "work",
  "title": [
   "Príliš uhladená správa",
   "Un informe demasiado limpio"
  ],
  "tag": [
   "Práca, remeslo a spolupráca",
   "Trabajo, oficio y colaboración"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "El documento final no mostraba ninguna duda. Ana recordó las discusiones del equipo y pidió recuperar algunas. No quería presentar un trabajo peor, sino permitir que otro lector entendiera qué se había decidido y por qué.",
  "sk": "Záverečný dokument neukazoval nijakú pochybnosť. Ana si spomenula na tímové diskusie a požiadala niektoré obnoviť. Nechcela prácu zhoršiť, ale umožniť čitateľovi pochopiť, čo rozhodli a prečo.",
  "vocab": [
   [
    "recuperar",
    "obnoviť",
    "Volver a incorporar algo que se había quitado.",
    "Znovu zaradiť niečo, čo bolo odstránené."
   ],
   [
    "entendiera",
    "aby porozumel",
    "Una situación imaginada o ligada a un marco pasado.",
    "Predstavovaná situácia alebo súvislosť s minulým rámcom."
   ],
   [
    "no",
    "nie",
    "Niega un contenido.",
    "Popiera obsah."
   ]
  ],
  "questions": [
   [
    "En «Un informe demasiado limpio», ¿qué idea resume mejor lo que ocurre?",
    [
     "Elegir qué guardar puede dar sentido a un archivo.",
     "Las recomendaciones se centran en la experiencia de leer.",
     "Mostrar dudas puede hacer un informe más claro."
    ],
    2,
    "Celá scéna podporuje tento výklad: Ukázanie pochybností môže správu sprehľadniť.",
    "El conjunto de la escena apoya esta lectura: Mostrar dudas puede hacer un informe más claro."
   ],
   [
    "¿Qué significa «recuperar» en «Un informe demasiado limpio»?",
    [
     "Añade un caso que hace más llamativa una negación.",
     "Volver a incorporar algo que se había quitado.",
     "Una idea básica que orienta los juicios o actos."
    ],
    1,
    "V tomto kontexte má „recuperar“ tento význam.",
    "En este contexto, «recuperar» tiene este sentido."
   ],
   [
    "¿Qué aporta «entendiera» a la escena «Un informe demasiado limpio»?",
    [
     "Una situación imaginada o ligada a un marco pasado.",
     "Algo anterior a otro punto pasado.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Un informe demasiado limpio»?",
    [
     "Las recomendaciones se hacían los viernes.",
     "Ana pidió recuperar parte de las discusiones.",
     "Pedro conservó una frase amable."
    ],
    1,
    "Text to uvádza: Ana požiadala obnoviť časť diskusií.",
    "El texto lo indica: Ana pidió recuperar parte de las discusiones."
   ]
  ],
  "discussion": [
   "Ktoré pochybnosti sa oplatí zachovať v konečnom výsledku?",
   "¿Qué dudas conviene conservar en un resultado final?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-053"
 },
 {
  "id": "reading-054",
  "topic": "work",
  "title": [
   "Otázka nováčika",
   "La pregunta del recién llegado"
  ],
  "tag": [
   "Práca, remeslo a spolupráca",
   "Trabajo, oficio y colaboración"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Llevaban años usando tres formularios. El nuevo compañero preguntó por qué no bastaba uno. Nadie se sintió cómodo con la pregunta, pero tampoco supo responder. Al revisar el proceso, descubrieron que dos documentos repetían la misma información.",
  "sk": "Roky používali tri formuláre. Nový kolega sa opýtal, prečo nestačí jeden. Otázka bola všetkým nepríjemná, ale nikto nevedel odpovedať. Pri kontrole postupu zistili, že dva dokumenty opakujú rovnaké informácie.",
  "vocab": [
   [
    "bastar",
    "stačiť",
    "Ser suficiente para una necesidad.",
    "Byť postačujúci pre určitú potrebu."
   ],
   [
    "repetían",
    "opakovali",
    "Una situación, costumbre o acción en curso en el pasado.",
    "Minulá situácia, zvyk alebo prebiehajúci dej."
   ],
   [
    "nadie",
    "nikto",
    "Indica la ausencia de una persona que cumpla lo dicho.",
    "Označuje neprítomnosť osoby, ktorá by spĺňala uvedené."
   ]
  ],
  "questions": [
   [
    "En «La pregunta del recién llegado», ¿qué idea resume mejor lo que ocurre?",
    [
     "Observar a quienes miran abre otra perspectiva.",
     "Una pregunta básica revela una rutina innecesaria.",
     "La práctica compartida aclara instrucciones imprecisas."
    ],
    1,
    "Celá scéna podporuje tento výklad: Základná otázka odhaľuje zbytočnú rutinu.",
    "El conjunto de la escena apoya esta lectura: Una pregunta básica revela una rutina innecesaria."
   ],
   [
    "¿Qué significa «bastar» en «La pregunta del recién llegado»?",
    [
     "Ser suficiente para una necesidad.",
     "Que presenta poca variación entre sus partes.",
     "Que se prepara para lo que puede ocurrir."
    ],
    0,
    "V tomto kontexte má „bastar“ tento význam.",
    "En este contexto, «bastar» tiene este sentido."
   ],
   [
    "¿Qué aporta «repetían» a la escena «La pregunta del recién llegado»?",
    [
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo.",
     "Una situación, costumbre o acción en curso en el pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La pregunta del recién llegado»?",
    [
     "Utilizaban tres formularios.",
     "Laura cocinó con su tío.",
     "Nora dibujó a los visitantes."
    ],
    0,
    "Text to uvádza: Používali tri formuláre.",
    "El texto lo indica: Utilizaban tres formularios."
   ]
  ],
  "discussion": [
   "Ktorú jednoduchú otázku je ťažké položiť pri zaužívanej rutine?",
   "¿Qué pregunta sencilla cuesta hacer cuando todos conocen una rutina?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-054"
 },
 {
  "id": "reading-055",
  "topic": "work",
  "title": [
   "Neviditeľná oprava",
   "La corrección invisible"
  ],
  "tag": [
   "Práca, remeslo a spolupráca",
   "Trabajo, oficio y colaboración"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Luis arregló un error antes de que el equipo lo viera. Después nadie entendió por qué había retrasado la entrega. Aprendió que solucionar un problema y comunicarlo eran tareas distintas. La siguiente vez dejó una nota breve sobre el cambio.",
  "sk": "Luis opravil chybu skôr, než ju tím videl. Potom nikto nechápal, prečo meškal s odovzdaním. Naučil sa, že vyriešiť problém a oznámiť ho sú odlišné úlohy. Nabudúce nechal krátku poznámku o zmene.",
  "vocab": [
   [
    "entrega",
    "odovzdanie",
    "El momento de presentar un trabajo terminado.",
    "Chvíľa predloženia dokončenej práce."
   ],
   [
    "viera",
    "uvidel",
    "Una situación imaginada o ligada a un marco pasado.",
    "Predstavovaná situácia alebo súvislosť s minulým rámcom."
   ],
   [
    "nadie",
    "nikto",
    "Indica la ausencia de una persona que cumpla lo dicho.",
    "Označuje neprítomnosť osoby, ktorá by spĺňala uvedené."
   ]
  ],
  "questions": [
   [
    "En «La corrección invisible», ¿qué idea resume mejor lo que ocurre?",
    [
     "El trabajo resuelto también necesita ser comunicado.",
     "No saber una fecha no elimina el valor de una imagen.",
     "Una obra puede despertar recuerdos no previstos."
    ],
    0,
    "Celá scéna podporuje tento výklad: Aj vyriešenú prácu treba oznámiť.",
    "El conjunto de la escena apoya esta lectura: El trabajo resuelto también necesita ser comunicado."
   ],
   [
    "¿Qué significa «entrega» en «La corrección invisible»?",
    [
     "La persona que organiza los turnos de una conversación.",
     "La unión de piezas para formar un objeto.",
     "El momento de presentar un trabajo terminado."
    ],
    2,
    "V tomto kontexte má „entrega“ tento význam.",
    "En este contexto, «entrega» tiene este sentido."
   ],
   [
    "¿Qué aporta «viera» a la escena «La corrección invisible»?",
    [
     "Una petición de no hacer algo.",
     "Una situación imaginada o ligada a un marco pasado.",
     "Algo anterior a otro punto pasado."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La corrección invisible»?",
    [
     "En la foto identificaron una ventana.",
     "El músico no anunció el título.",
     "Luis dejó una nota la siguiente vez."
    ],
    2,
    "Text to uvádza: Luis nabudúce zanechal poznámku.",
    "El texto lo indica: Luis dejó una nota la siguiente vez."
   ]
  ],
  "discussion": [
   "Ktorá časť dobre vykonanej práce býva neviditeľná?",
   "¿Qué parte de un trabajo bien hecho suele quedar invisible?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-055"
 },
 {
  "id": "reading-056",
  "topic": "work",
  "title": [
   "Realistický termín",
   "El plazo realista"
  ],
  "tag": [
   "Práca, remeslo a spolupráca",
   "Trabajo, oficio y colaboración"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "«Lo tendremos listo mañana», dijo alguien con entusiasmo. Teresa preguntó qué habría que dejar sin hacer para cumplirlo. La pregunta cambió la conversación: ya no hablaban de voluntad, sino de recursos y prioridades. La fecha se movió dos días.",
  "sk": "„Zajtra to bude hotové,“ povedal niekto nadšene. Teresa sa opýtala, čo budú musieť vynechať, aby to stihli. Otázka zmenila rozhovor: už nehovorili o vôli, ale o zdrojoch a prioritách. Termín posunuli o dva dni.",
  "vocab": [
   [
    "cumplir",
    "splniť",
    "Realizar lo prometido dentro de las condiciones acordadas.",
    "Vykonať sľúbené za dohodnutých podmienok."
   ],
   [
    "tendremos",
    "budeme mať",
    "Una previsión o promesa sobre después.",
    "Predpoveď alebo sľub o budúcnosti."
   ],
   [
    "no",
    "nie",
    "Niega un contenido.",
    "Popiera obsah."
   ]
  ],
  "questions": [
   [
    "En «El plazo realista», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una explicación puede depender también del gesto y del sonido.",
     "La falta de una etiqueta revela un prejuicio.",
     "Un plazo necesita considerar los recursos disponibles."
    ],
    2,
    "Celá scéna podporuje tento výklad: Termín musí zohľadniť dostupné zdroje.",
    "El conjunto de la escena apoya esta lectura: Un plazo necesita considerar los recursos disponibles."
   ],
   [
    "¿Qué significa «cumplir» en «El plazo realista»?",
    [
     "Que nadie había pedido.",
     "Realizar lo prometido dentro de las condiciones acordadas.",
     "Que puede deshacerse o cambiarse después."
    ],
    1,
    "V tomto kontexte má „cumplir“ tento význam.",
    "En este contexto, «cumplir» tiene este sentido."
   ],
   [
    "¿Qué aporta «tendremos» a la escena «El plazo realista»?",
    [
     "Una previsión o promesa sobre después.",
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El plazo realista»?",
    [
     "El cuadro no tenía cartel.",
     "El plazo se amplió dos días.",
     "La grabación incluía el sonido de una suela."
    ],
    1,
    "Text to uvádza: Termín predĺžili o dva dni.",
    "El texto lo indica: El plazo se amplió dos días."
   ]
  ],
  "discussion": [
   "Kedy prestáva byť optimistický záväzok užitočný?",
   "¿Cuándo un compromiso optimista deja de ser útil?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-056"
 },
 {
  "id": "reading-057",
  "topic": "work",
  "title": [
   "Dobré vzdanie sa",
   "Una buena renuncia"
  ],
  "tag": [
   "Práca, remeslo a spolupráca",
   "Trabajo, oficio y colaboración"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "El proyecto tenía demasiadas funciones. Quitar una parecía una derrota. Cuando probaron la versión reducida, los usuarios entendieron mejor para qué servía. Habían renunciado a una posibilidad para que las demás tuvieran sentido.",
  "sk": "Projekt mal priveľa funkcií. Odstránenie jednej vyzeralo ako prehra. Keď vyskúšali zmenšenú verziu, používatelia lepšie pochopili jej účel. Vzdali sa jednej možnosti, aby ostatné dávali zmysel.",
  "vocab": [
   [
    "renunciar",
    "vzdať sa",
    "Decidir no conservar o perseguir algo.",
    "Rozhodnúť sa niečo si neponechať alebo nesledovať."
   ],
   [
    "tuvieran",
    "aby mali",
    "Una situación imaginada o ligada a un marco pasado.",
    "Predstavovaná situácia alebo súvislosť s minulým rámcom."
   ],
   [
    "para que",
    "aby",
    "Introduce el propósito de una acción.",
    "Uvádza účel činnosti."
   ]
  ],
  "questions": [
   [
    "En «Una buena renuncia», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una norma habitual no se aplica a todas las obras.",
     "Quitar algo puede mejorar el conjunto.",
     "El tiempo puede volver significativo lo que parecía corriente."
    ],
    1,
    "Celá scéna podporuje tento výklad: Odstránenie niečoho môže zlepšiť celok.",
    "El conjunto de la escena apoya esta lectura: Quitar algo puede mejorar el conjunto."
   ],
   [
    "¿Qué significa «renunciar» en «Una buena renuncia»?",
    [
     "Decidir no conservar o perseguir algo.",
     "Que pretende cerrar una cuestión.",
     "Interrumpir el movimiento o una actividad."
    ],
    0,
    "V tomto kontexte má „renunciar“ tento význam.",
    "En este contexto, «renunciar» tiene este sentido."
   ],
   [
    "¿Qué aporta «tuvieran» a la escena «Una buena renuncia»?",
    [
     "Algo anterior a otro punto pasado.",
     "Una petición de no hacer algo.",
     "Una situación imaginada o ligada a un marco pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Una buena renuncia»?",
    [
     "Probaron una versión reducida.",
     "Sofía volvió al diario veinte años después.",
     "La escultura estaba hecha para tocarla."
    ],
    0,
    "Text to uvádza: Vyskúšali menšiu verziu.",
    "El texto lo indica: Probaron una versión reducida."
   ]
  ],
  "discussion": [
   "Čo si zlepšil(a) tým, že si časť odstránil(a)?",
   "¿Qué has mejorado al quitarle una parte?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-057"
 },
 {
  "id": "reading-058",
  "topic": "work",
  "title": [
   "Konkrétna pochvala",
   "El elogio concreto"
  ],
  "tag": [
   "Práca, remeslo a spolupráca",
   "Trabajo, oficio y colaboración"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "«Buen trabajo» alegró a Elena, pero no le enseñó qué debía repetir. Otro compañero mencionó cómo había aclarado una tabla confusa. Esa observación le dio una herramienta para el siguiente informe, además de una alegría.",
  "sk": "„Dobrá práca“ Elenu potešilo, ale neukázalo jej, čo má zopakovať. Iný kolega spomenul, ako objasnila neprehľadnú tabuľku. Tá poznámka jej okrem radosti dala nástroj na ďalšiu správu.",
  "vocab": [
   [
    "elogio",
    "pochvala",
    "Una expresión de reconocimiento positivo.",
    "Vyjadrenie pozitívneho uznania."
   ],
   [
    "había aclarado",
    "predtým objasnila",
    "Algo anterior a otro punto pasado.",
    "Niečo skoršie než iný minulý bod."
   ],
   [
    "pero",
    "ale",
    "Introduce un contraste.",
    "Uvádza protiklad."
   ]
  ],
  "questions": [
   [
    "En «El elogio concreto», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una observación concreta convierte el elogio en aprendizaje.",
     "Un nombre puede cambiar la relación con lo inacabado.",
     "La espera también forma parte de la representación."
    ],
    0,
    "Celá scéna podporuje tento výklad: Konkrétna poznámka mení pochvalu na učenie.",
    "El conjunto de la escena apoya esta lectura: Una observación concreta convierte el elogio en aprendizaje."
   ],
   [
    "¿Qué significa «elogio» en «El elogio concreto»?",
    [
     "Después de un intervalo de tiempo.",
     "Interpretar algo como una indicación importante o literal.",
     "Una expresión de reconocimiento positivo."
    ],
    2,
    "V tomto kontexte má „elogio“ tento význam.",
    "En este contexto, «elogio» tiene este sentido."
   ],
   [
    "¿Qué aporta «había aclarado» a la escena «El elogio concreto»?",
    [
     "Una petición de no hacer algo.",
     "Algo anterior a otro punto pasado.",
     "Una previsión o promesa sobre después."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El elogio concreto»?",
    [
     "Miguel separó proyectos todavía interesantes de otros abandonados.",
     "Había una sola silla en el escenario.",
     "La observación se refería a una tabla."
    ],
    2,
    "Text to uvádza: Poznámka sa týkala tabuľky.",
    "El texto lo indica: La observación se refería a una tabla."
   ]
  ],
  "discussion": [
   "Akú pochvalu si pamätáš najlepšie?",
   "¿Qué tipo de elogio recuerdas mejor?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-058"
 },
 {
  "id": "reading-059",
  "topic": "work",
  "title": [
   "Spoločná prestávka",
   "La pausa compartida"
  ],
  "tag": [
   "Práca, remeslo a spolupráca",
   "Trabajo, oficio y colaboración"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Durante una pausa surgió la solución que la reunión no había encontrado. Nadie estaba mirando la pantalla. La conversación dejó de seguir el orden del documento y conectó dos problemas separados. Después volvieron a la mesa para comprobar la idea.",
  "sk": "Počas prestávky sa objavilo riešenie, ktoré stretnutie nenašlo. Nikto sa nepozeral na obrazovku. Rozhovor prestal sledovať poradie dokumentu a prepojil dva oddelené problémy. Potom sa vrátili k stolu overiť nápad.",
  "vocab": [
   [
    "surgir",
    "objaviť sa",
    "Aparecer una idea o una situación.",
    "Vzniknúť ako myšlienka alebo situácia."
   ],
   [
    "volvieron",
    "vrátili sa",
    "Un episodio de un relato pasado.",
    "Epizóda minulého príbehu."
   ],
   [
    "nadie",
    "nikto",
    "Indica la ausencia de una persona que cumpla lo dicho.",
    "Označuje neprítomnosť osoby, ktorá by spĺňala uvedené."
   ]
  ],
  "questions": [
   [
    "En «La pausa compartida», ¿qué idea resume mejor lo que ocurre?",
    [
     "La procedencia de un relato forma parte de su sentido.",
     "Conocer el esfuerzo cambia la percepción de la facilidad.",
     "Cambiar de contexto facilita una conexión inesperada."
    ],
    2,
    "Celá scéna podporuje tento výklad: Zmena prostredia uľahčuje nečakané prepojenie.",
    "El conjunto de la escena apoya esta lectura: Cambiar de contexto facilita una conexión inesperada."
   ],
   [
    "¿Qué significa «surgir» en «La pausa compartida»?",
    [
     "Que produce una impresión muy llamativa.",
     "Aparecer una idea o una situación.",
     "La mujer a la que pertenece un negocio o una cosa."
    ],
    1,
    "V tomto kontexte má „surgir“ tento význam.",
    "En este contexto, «surgir» tiene este sentido."
   ],
   [
    "¿Qué aporta «volvieron» a la escena «La pausa compartida»?",
    [
     "Un episodio de un relato pasado.",
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La pausa compartida»?",
    [
     "La pianista repitió el pasaje seis veces.",
     "El grupo regresó para comprobar la solución.",
     "La hermana corrigió la procedencia de la anécdota."
    ],
    1,
    "Text to uvádza: Skupina sa vrátila overiť riešenie.",
    "El texto lo indica: El grupo regresó para comprobar la solución."
   ]
  ],
  "discussion": [
   "Kde dostávaš nápady, ktoré pri stole neprichádzajú?",
   "¿Dónde se te ocurren las ideas que no aparecen ante la mesa?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-059"
 },
 {
  "id": "reading-060",
  "topic": "work",
  "title": [
   "Písomný nesúhlas",
   "El desacuerdo escrito"
  ],
  "tag": [
   "Práca, remeslo a spolupráca",
   "Trabajo, oficio y colaboración"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "En persona todos parecían de acuerdo. Por escrito aparecieron tres objeciones. No habían cambiado de opinión: necesitaban tiempo y un modo distinto de explicarse. El coordinador decidió recoger comentarios antes de la siguiente reunión.",
  "sk": "Osobne sa zdalo, že všetci súhlasia. Písomne sa objavili tri námietky. Názor nezmenili: potrebovali čas a iný spôsob vyjadrenia. Koordinátor sa rozhodol zbierať pripomienky pred ďalším stretnutím.",
  "vocab": [
   [
    "objeción",
    "námietka",
    "Una razón que cuestiona una propuesta.",
    "Dôvod spochybňujúci návrh."
   ],
   [
    "habían cambiado",
    "zmenili už predtým",
    "Algo anterior a otro punto pasado.",
    "Niečo skoršie než iný minulý bod."
   ],
   [
    "antes de",
    "predtým než",
    "Sitúa algo antes de otro momento o acción.",
    "Umiestňuje niečo pred iný okamih alebo činnosť."
   ]
  ],
  "questions": [
   [
    "En «El desacuerdo escrito», ¿qué idea resume mejor lo que ocurre?",
    [
     "Conservar no equivale siempre a renovar por completo.",
     "La forma de participar puede ocultar o revelar desacuerdos.",
     "Una contradicción permite cuestionar una rutina."
    ],
    1,
    "Celá scéna podporuje tento výklad: Spôsob účasti môže nesúhlas skryť alebo odhaliť.",
    "El conjunto de la escena apoya esta lectura: La forma de participar puede ocultar o revelar desacuerdos."
   ],
   [
    "¿Qué significa «objeción» en «El desacuerdo escrito»?",
    [
     "Una razón que cuestiona una propuesta.",
     "Tener un ingrediente como parte de un plato.",
     "La persona a quien se dirige un mensaje."
    ],
    0,
    "V tomto kontexte má „objeción“ tento význam.",
    "En este contexto, «objeción» tiene este sentido."
   ],
   [
    "¿Qué aporta «habían cambiado» a la escena «El desacuerdo escrito»?",
    [
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo.",
     "Algo anterior a otro punto pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El desacuerdo escrito»?",
    [
     "Recibieron tres objeciones por escrito.",
     "Nuria añadió una tarea para no cumplir la lista.",
     "La restauradora no quería borrar toda la historia."
    ],
    0,
    "Text to uvádza: Písomne dostali tri námietky.",
    "El texto lo indica: Recibieron tres objeciones por escrito."
   ]
  ],
  "discussion": [
   "Ktoré názory stratíme, ak počúvame iba rýchle odpovede?",
   "¿Qué opiniones se pierden si solo escuchamos a quien responde rápido?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-060"
 },
 {
  "id": "reading-061",
  "topic": "debate",
  "title": [
   "Zmeniť názor",
   "Cambiar de opinión"
  ],
  "tag": [
   "Názory, dohody a rozhodnutia",
   "Opiniones, acuerdos y decisiones"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Al empezar la conversación, Vera estaba segura. Después escuchó un ejemplo que no había considerado. «Ahora lo veo distinto», dijo. Nadie celebró haber ganado; la conversación había servido precisamente para que una postura pudiera cambiar.",
  "sk": "Na začiatku rozhovoru si bola Vera istá. Potom počula príklad, ktorý nezohľadnila. „Teraz to vidím inak,“ povedala. Nikto neoslavoval víťazstvo; rozhovor poslúžil práve na to, aby sa postoj mohol zmeniť.",
  "vocab": [
   [
    "postura",
    "postoj",
    "La posición que se mantiene sobre una cuestión.",
    "Stanovisko zaujímané k určitej otázke."
   ],
   [
    "pudiera",
    "aby mohla",
    "Una situación imaginada o ligada a un marco pasado.",
    "Predstavovaná situácia alebo súvislosť s minulým rámcom."
   ],
   [
    "nadie",
    "nikto",
    "Indica la ausencia de una persona que cumpla lo dicho.",
    "Označuje neprítomnosť osoby, ktorá by spĺňala uvedené."
   ]
  ],
  "questions": [
   [
    "En «Cambiar de opinión», ¿qué idea resume mejor lo que ocurre?",
    [
     "Cambiar de postura puede ser un resultado valioso.",
     "El uso inmediato no cuenta toda la historia de un objeto.",
     "Se puede corregir sin humillar."
    ],
    0,
    "Celá scéna podporuje tento výklad: Zmena postoja môže byť hodnotným výsledkom.",
    "El conjunto de la escena apoya esta lectura: Cambiar de postura puede ser un resultado valioso."
   ],
   [
    "¿Qué significa «postura» en «Cambiar de opinión»?",
    [
     "Los elementos que quedan fuera del primero o del grupo citado.",
     "Mantener una luz funcionando.",
     "La posición que se mantiene sobre una cuestión."
    ],
    2,
    "V tomto kontexte má „postura“ tento význam.",
    "En este contexto, «postura» tiene este sentido."
   ],
   [
    "¿Qué aporta «pudiera» a la escena «Cambiar de opinión»?",
    [
     "Una petición de no hacer algo.",
     "Una situación imaginada o ligada a un marco pasado.",
     "Algo anterior a otro punto pasado."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Cambiar de opinión»?",
    [
     "El capítulo más largo trataba de la limpieza.",
     "El director agradeció el entusiasmo.",
     "Vera escuchó un ejemplo nuevo."
    ],
    2,
    "Text to uvádza: Vera počula nový príklad.",
    "El texto lo indica: Vera escuchó un ejemplo nuevo."
   ]
  ],
  "discussion": [
   "Čo uľahčuje priznať zmenu názoru?",
   "¿Qué facilita reconocer que hemos cambiado de opinión?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-061"
 },
 {
  "id": "reading-062",
  "topic": "debate",
  "title": [
   "Krajný príklad",
   "El ejemplo extremo"
  ],
  "tag": [
   "Názory, dohody a rozhodnutia",
   "Opiniones, acuerdos y decisiones"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Para defender la norma, Pablo presentó un caso excepcional. Ana le pidió que imaginaran también un día corriente. No negaba que el caso fuera posible; preguntaba si debía organizar todas las decisiones habituales. La discusión cambió de escala.",
  "sk": "Na obhajobu pravidla Pablo uviedol výnimočný prípad. Ana požiadala, aby si predstavili aj obyčajný deň. Nepopierala možnosť prípadu; pýtala sa, či má určovať všetky bežné rozhodnutia. Debata zmenila mierku.",
  "vocab": [
   [
    "excepcional",
    "výnimočný",
    "Que se aparta de lo que ocurre normalmente.",
    "Ktorý sa odlišuje od bežného diania."
   ],
   [
    "fuera",
    "bol možný",
    "Una situación imaginada o ligada a un marco pasado.",
    "Predstavovaná situácia alebo súvislosť s minulým rámcom."
   ],
   [
    "también",
    "aj / tiež",
    "Añade algo a lo que ya se ha dicho.",
    "Pridáva niečo k už povedanému."
   ]
  ],
  "questions": [
   [
    "En «El ejemplo extremo», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una broma puede señalar un exceso sin confrontación directa.",
     "Una deformación puede expresar una identidad.",
     "Un caso excepcional no representa necesariamente lo habitual."
    ],
    2,
    "Celá scéna podporuje tento výklad: Výnimočný prípad nemusí zastupovať bežnú situáciu.",
    "El conjunto de la escena apoya esta lectura: Un caso excepcional no representa necesariamente lo habitual."
   ],
   [
    "¿Qué significa «excepcional» en «El ejemplo extremo»?",
    [
     "Buscar orientación en una fuente.",
     "Que se aparta de lo que ocurre normalmente.",
     "Un texto visible que identifica o informa."
    ],
    1,
    "V tomto kontexte má „excepcional“ tento význam.",
    "En este contexto, «excepcional» tiene este sentido."
   ],
   [
    "¿Qué aporta «fuera» a la escena «El ejemplo extremo»?",
    [
     "Una situación imaginada o ligada a un marco pasado.",
     "Algo anterior a otro punto pasado.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El ejemplo extremo»?",
    [
     "El vecino había trabajado con madera.",
     "Ana pidió pensar en un día corriente.",
     "El invitado llevaba cinco minutos hablando."
    ],
    1,
    "Text to uvádza: Ana požiadala predstaviť si obyčajný deň.",
    "El texto lo indica: Ana pidió pensar en un día corriente."
   ]
  ],
  "discussion": [
   "Kedy krajný príklad pomáha a kedy odvádza pozornosť?",
   "¿Cuándo ayuda un ejemplo extremo y cuándo distrae?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-062"
 },
 {
  "id": "reading-063",
  "topic": "debate",
  "title": [
   "Dve odlišné otázky",
   "Dos preguntas distintas"
  ],
  "tag": [
   "Názory, dohody a rozhodnutia",
   "Opiniones, acuerdos y decisiones"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Luis explicaba por qué había ocurrido el error. Marta seguía preguntando quién debía responder. Parecían discutir, pero intentaban resolver problemas diferentes. Cuando separaron causa y responsabilidad, pudieron avanzar sin fingir que habían dicho lo mismo.",
  "sk": "Luis vysvetľoval, prečo vznikla chyba. Marta sa stále pýtala, kto má za ňu zodpovedať. Vyzeralo to ako spor, ale riešili odlišné problémy. Keď oddelili príčinu od zodpovednosti, mohli pokračovať bez predstierania zhody.",
  "vocab": [
   [
    "fingir",
    "predstierať",
    "Mostrar como verdadero algo que no se sostiene realmente.",
    "Tváriť sa, že niečo platí, hoci to tak nie je."
   ],
   [
    "había ocurrido",
    "stalo sa predtým",
    "Algo anterior a otro punto pasado.",
    "Niečo skoršie než iný minulý bod."
   ],
   [
    "cuando",
    "keď",
    "Relaciona una acción con un momento.",
    "Spája dej s časovým bodom."
   ]
  ],
  "questions": [
   [
    "En «Dos preguntas distintas», ¿qué idea resume mejor lo que ocurre?",
    [
     "Quitar un precio no elimina todas las barreras.",
     "Explicar una causa y asignar responsabilidad son tareas distintas.",
     "Reírse de un error facilita reconocerlo."
    ],
    1,
    "Celá scéna podporuje tento výklad: Vysvetliť príčinu a určiť zodpovednosť sú odlišné úlohy.",
    "El conjunto de la escena apoya esta lectura: Explicar una causa y asignar responsabilidad son tareas distintas."
   ],
   [
    "¿Qué significa «fingir» en «Dos preguntas distintas»?",
    [
     "Mostrar como verdadero algo que no se sostiene realmente.",
     "En una cantidad o intensidad muy pequeña.",
     "Una entrada pequeña del mar en la costa."
    ],
    0,
    "V tomto kontexte má „fingir“ tento význam.",
    "En este contexto, «fingir» tiene este sentido."
   ],
   [
    "¿Qué aporta «había ocurrido» a la escena «Dos preguntas distintas»?",
    [
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo.",
     "Algo anterior a otro punto pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Dos preguntas distintas»?",
    [
     "Luis hablaba de la causa del error.",
     "Marta no recordaba su contraseña.",
     "Pocos vecinos conocían el horario."
    ],
    0,
    "Text to uvádza: Luis hovoril o príčine chyby.",
    "El texto lo indica: Luis hablaba de la causa del error."
   ]
  ],
  "discussion": [
   "Prečo si niekedy mýlime vysvetlenie s výhovorkou?",
   "¿Por qué confundimos a veces explicación y excusa?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-063"
 },
 {
  "id": "reading-064",
  "topic": "debate",
  "title": [
   "Neúplná dohoda",
   "El acuerdo incompleto"
  ],
  "tag": [
   "Názory, dohody a rozhodnutia",
   "Opiniones, acuerdos y decisiones"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Todos aprobaron la frase «Hay que mejorar el servicio». Sin embargo, cada uno imaginaba una mejora diferente. Antes de votar el presupuesto, escribieron qué cambios esperaban ver. El acuerdo parecía menor, pero por fin se podía comprobar.",
  "sk": "Všetci schválili vetu „Treba zlepšiť službu“. Každý si však predstavoval iné zlepšenie. Pred hlasovaním o rozpočte napísali, aké zmeny očakávajú. Zhoda sa zdala menšia, ale konečne ju bolo možné overiť.",
  "vocab": [
   [
    "presupuesto",
    "rozpočet",
    "Una previsión de los recursos y gastos disponibles.",
    "Plán dostupných prostriedkov a výdavkov."
   ],
   [
    "esperaban",
    "očakávali",
    "Una situación, costumbre o acción en curso en el pasado.",
    "Minulá situácia, zvyk alebo prebiehajúci dej."
   ],
   [
    "sin embargo",
    "avšak",
    "Introduce una idea que contrasta con la anterior.",
    "Uvádza myšlienku v protiklade k predchádzajúcej."
   ]
  ],
  "questions": [
   [
    "En «El acuerdo incompleto», ¿qué idea resume mejor lo que ocurre?",
    [
     "Precisar una propuesta hace visible el alcance del acuerdo.",
     "Una misma preparación puede responder a motivos opuestos.",
     "Un asiento transforma un lugar de paso en encuentro."
    ],
    0,
    "Celá scéna podporuje tento výklad: Spresnenie návrhu ukáže skutočný rozsah dohody.",
    "El conjunto de la escena apoya esta lectura: Precisar una propuesta hace visible el alcance del acuerdo."
   ],
   [
    "¿Qué significa «presupuesto» en «El acuerdo incompleto»?",
    [
     "Algo que ocurre sin haber sido previsto.",
     "Introduce un contraste con lo anterior.",
     "Una previsión de los recursos y gastos disponibles."
    ],
    2,
    "V tomto kontexte má „presupuesto“ tento význam.",
    "En este contexto, «presupuesto» tiene este sentido."
   ],
   [
    "¿Qué aporta «esperaban» a la escena «El acuerdo incompleto»?",
    [
     "Una petición de no hacer algo.",
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una previsión o promesa sobre después."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El acuerdo incompleto»?",
    [
     "La amiga usaba el paraguas para buscar sombra.",
     "Las primeras sillas llegaron durante una fiesta.",
     "Escribieron los cambios antes de votar."
    ],
    2,
    "Text to uvádza: Pred hlasovaním spísali očakávané zmeny.",
    "El texto lo indica: Escribieron los cambios antes de votar."
   ]
  ],
  "discussion": [
   "Ktoré slová vytvárajú príliš ľahkú zhodu?",
   "¿Qué palabras producen acuerdos demasiado fáciles?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-064"
 },
 {
  "id": "reading-065",
  "topic": "debate",
  "title": [
   "Otázka pred radou",
   "La pregunta antes del consejo"
  ],
  "tag": [
   "Názory, dohody a rozhodnutia",
   "Opiniones, acuerdos y decisiones"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "En cuanto oyó el problema, Diego empezó a proponer soluciones. Su amiga lo interrumpió con suavidad: «Primero quiero que entiendas qué me preocupa». Él dejó de buscar una respuesta y empezó a hacer preguntas. La ayuda cambió de forma.",
  "sk": "Len čo Diego počul problém, začal navrhovať riešenia. Kamarátka ho jemne prerušila: „Najprv chcem, aby si pochopil, čo ma trápi.“ Prestal hľadať odpoveď a začal klásť otázky. Pomoc zmenila podobu.",
  "vocab": [
   [
    "con suavidad",
    "jemne",
    "De forma cuidadosa, sin brusquedad.",
    "Ohľaduplne, bez prudkosti."
   ],
   [
    "entiendas",
    "aby si pochopil",
    "Un contenido ligado a un deseo, reacción o acción pendiente.",
    "Obsah spojený so želaním, reakciou alebo očakávaným dejom."
   ],
   [
    "y",
    "a",
    "Une elementos o acciones.",
    "Spája prvky alebo činnosti."
   ]
  ],
  "questions": [
   [
    "En «La pregunta antes del consejo», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una preferencia inesperada deja en evidencia una discusión complicada.",
     "La calidad de una ruta no depende solo del tiempo.",
     "Escuchar una preocupación puede preceder al consejo."
    ],
    2,
    "Celá scéna podporuje tento výklad: Vypočutie obavy môže predchádzať rade.",
    "El conjunto de la escena apoya esta lectura: Escuchar una preocupación puede preceder al consejo."
   ],
   [
    "¿Qué significa «con suavidad» en «La pregunta antes del consejo»?",
    [
     "No cumplir la función esperada.",
     "De forma cuidadosa, sin brusquedad.",
     "Desde una posición más elevada."
    ],
    1,
    "V tomto kontexte má „con suavidad“ tento význam.",
    "En este contexto, «con suavidad» tiene este sentido."
   ],
   [
    "¿Qué aporta «entiendas» a la escena «La pregunta antes del consejo»?",
    [
     "Un contenido ligado a un deseo, reacción o acción pendiente.",
     "Algo anterior a otro punto pasado.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La pregunta antes del consejo»?",
    [
     "Rosa tardó cinco minutos más.",
     "La amiga pidió ser comprendida primero.",
     "El gato eligió una caja vacía."
    ],
    1,
    "Text to uvádza: Kamarátka najprv požiadala o porozumenie.",
    "El texto lo indica: La amiga pidió ser comprendida primero."
   ]
  ],
  "discussion": [
   "Ako zistíme, či niekto chce riešenie alebo vypočutie?",
   "¿Cómo sabemos si alguien quiere una solución o ser escuchado?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-065"
 },
 {
  "id": "reading-066",
  "topic": "debate",
  "title": [
   "Spoločné slovo",
   "Una palabra compartida"
  ],
  "tag": [
   "Názory, dohody a rozhodnutia",
   "Opiniones, acuerdos y decisiones"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Ambos defendían la libertad, pero usaban ejemplos opuestos. En vez de repetir la palabra, describieron situaciones concretas. Descubrieron que una discusión sobre un principio también podía esconder distintas experiencias de lo que significa perderlo.",
  "sk": "Obaja obhajovali slobodu, ale používali opačné príklady. Namiesto opakovania slova opísali konkrétne situácie. Zistili, že spor o princíp môže skrývať odlišné skúsenosti s tým, čo znamená oň prísť.",
  "vocab": [
   [
    "principio",
    "zásada",
    "Una idea básica que orienta los juicios o actos.",
    "Základná myšlienka usmerňujúca úsudky alebo konanie."
   ],
   [
    "defendían",
    "obhajovali",
    "Una situación, costumbre o acción en curso en el pasado.",
    "Minulá situácia, zvyk alebo prebiehajúci dej."
   ],
   [
    "en vez de",
    "namiesto",
    "Presenta una alternativa a lo que se esperaba.",
    "Predstavuje alternatívu k očakávanej činnosti."
   ]
  ],
  "questions": [
   [
    "En «Una palabra compartida», ¿qué idea resume mejor lo que ocurre?",
    [
     "La incertidumbre puede llenarse con relatos distintos.",
     "Una misma palabra puede apoyarse en experiencias diferentes.",
     "Una respuesta literal transforma un consejo en participación."
    ],
    1,
    "Celá scéna podporuje tento výklad: Rovnaké slovo môže vychádzať z odlišných skúseností.",
    "El conjunto de la escena apoya esta lectura: Una misma palabra puede apoyarse en experiencias diferentes."
   ],
   [
    "¿Qué significa «principio» en «Una palabra compartida»?",
    [
     "Una idea básica que orienta los juicios o actos.",
     "Una acción que comunica una intención o un sentimiento.",
     "Algo que ocupa la atención y causa inquietud."
    ],
    0,
    "V tomto kontexte má „principio“ tento význam.",
    "En este contexto, «principio» tiene este sentido."
   ],
   [
    "¿Qué aporta «defendían» a la escena «Una palabra compartida»?",
    [
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo.",
     "Una situación, costumbre o acción en curso en el pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Una palabra compartida»?",
    [
     "Los dos hablaban de libertad.",
     "Bruno recibió un cuchillo y una cebolla.",
     "Había transcurrido media hora."
    ],
    0,
    "Text to uvádza: Obaja hovorili o slobode.",
    "El texto lo indica: Los dos hablaban de libertad."
   ]
  ],
  "discussion": [
   "Ktoré slovo by si pred debatou potreboval(a) definovať?",
   "¿Qué palabra necesitarías definir antes de discutir?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-066"
 },
 {
  "id": "reading-067",
  "topic": "debate",
  "title": [
   "Mlčiaca väčšina",
   "La mayoría silenciosa"
  ],
  "tag": [
   "Názory, dohody a rozhodnutia",
   "Opiniones, acuerdos y decisiones"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Tres personas hablaron casi toda la reunión. Después alguien dijo que todos habían apoyado la propuesta. Julia señaló que el silencio no permitía saberlo. Repartieron papeles para recoger respuestas sin nombres. El resultado fue menos uniforme de lo esperado.",
  "sk": "Traja ľudia hovorili takmer celé stretnutie. Potom niekto vyhlásil, že návrh podporili všetci. Julia upozornila, že z mlčania to nemožno zistiť. Rozdali papiere na anonymné odpovede. Výsledok bol menej jednotný, než čakali.",
  "vocab": [
   [
    "uniforme",
    "jednotný",
    "Que presenta poca variación entre sus partes.",
    "Ktorý má medzi časťami malé rozdiely."
   ],
   [
    "habían apoyado",
    "podporili už predtým",
    "Algo anterior a otro punto pasado.",
    "Niečo skoršie než iný minulý bod."
   ],
   [
    "después",
    "potom",
    "Sitúa algo en un momento posterior.",
    "Umiestňuje niečo do neskoršieho okamihu."
   ]
  ],
  "questions": [
   [
    "En «La mayoría silenciosa», ¿qué idea resume mejor lo que ocurre?",
    [
     "El silencio no confirma por sí solo el acuerdo.",
     "Una forma llamativa puede distraer del propio mensaje.",
     "Una molestia habitual también podía orientar."
    ],
    0,
    "Celá scéna podporuje tento výklad: Mlčanie samo osebe nepotvrdzuje súhlas.",
    "El conjunto de la escena apoya esta lectura: El silencio no confirma por sí solo el acuerdo."
   ],
   [
    "¿Qué significa «uniforme» en «La mayoría silenciosa»?",
    [
     "Recorrer un espacio de un lado a otro.",
     "El momento en que empieza la noche.",
     "Que presenta poca variación entre sus partes."
    ],
    2,
    "V tomto kontexte má „uniforme“ tento význam.",
    "En este contexto, «uniforme» tiene este sentido."
   ],
   [
    "¿Qué aporta «habían apoyado» a la escena «La mayoría silenciosa»?",
    [
     "Una petición de no hacer algo.",
     "Algo anterior a otro punto pasado.",
     "Una previsión o promesa sobre después."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La mayoría silenciosa»?",
    [
     "El segundo cartel era más pequeño.",
     "El reloj estuvo una semana sin sonar.",
     "Las respuestas se recogieron sin nombres."
    ],
    2,
    "Text to uvádza: Odpovede zbierali bez mien.",
    "El texto lo indica: Las respuestas se recogieron sin nombres."
   ]
  ],
  "discussion": [
   "Čo skupina potrebuje na vypočutie tých, ktorí nehovoria?",
   "¿Qué necesita un grupo para escuchar a quienes no intervienen?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-067"
 },
 {
  "id": "reading-068",
  "topic": "debate",
  "title": [
   "Obhájiť druhú možnosť",
   "Defender la otra opción"
  ],
  "tag": [
   "Názory, dohody a rozhodnutia",
   "Opiniones, acuerdos y decisiones"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "La moderadora pidió que cada participante explicara la opción contraria antes de criticarla. Al principio pareció una pérdida de tiempo. Luego disminuyeron las discusiones sobre cosas que nadie había dicho. Comprender no les obligó a estar de acuerdo.",
  "sk": "Moderátorka požiadala, aby každý pred kritikou vysvetlil opačnú možnosť. Spočiatku to vyzeralo ako strata času. Potom ubudli spory o výrokoch, ktoré nikto nevyslovil. Porozumenie ich nenútilo súhlasiť.",
  "vocab": [
   [
    "moderadora",
    "moderátorka",
    "La persona que organiza los turnos de una conversación.",
    "Osoba usporadúvajúca priebeh rozhovoru."
   ],
   [
    "explicara",
    "aby vysvetlil",
    "Una situación imaginada o ligada a un marco pasado.",
    "Predstavovaná situácia alebo súvislosť s minulým rámcom."
   ],
   [
    "nadie",
    "nikto",
    "Indica la ausencia de una persona que cumpla lo dicho.",
    "Označuje neprítomnosť osoby, ktorá by spĺňala uvedené."
   ]
  ],
  "questions": [
   [
    "En «Defender la otra opción», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una instrucción absoluta puede producir una interpretación inesperada.",
     "Una regla compartida puede funcionar sin una fila visible.",
     "Representar bien otra postura mejora el desacuerdo."
    ],
    2,
    "Celá scéna podporuje tento výklad: Verné podanie cudzieho postoja zlepšuje nesúhlas.",
    "El conjunto de la escena apoya esta lectura: Representar bien otra postura mejora el desacuerdo."
   ],
   [
    "¿Qué significa «moderadora» en «Defender la otra opción»?",
    [
     "Que no sigue la posición recta esperada.",
     "La persona que organiza los turnos de una conversación.",
     "Sin escribir o completar el espacio."
    ],
    1,
    "V tomto kontexte má „moderadora“ tento význam.",
    "En este contexto, «moderadora» tiene este sentido."
   ],
   [
    "¿Qué aporta «explicara» a la escena «Defender la otra opción»?",
    [
     "Una situación imaginada o ligada a un marco pasado.",
     "Algo anterior a otro punto pasado.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Defender la otra opción»?",
    [
     "Una mujer indicó que era la última.",
     "La moderadora propuso explicar primero la opción contraria.",
     "Solo una planta llevaba el cartel."
    ],
    1,
    "Text to uvádza: Moderátorka navrhla najprv vysvetliť opačnú možnosť.",
    "El texto lo indica: La moderadora propuso explicar primero la opción contraria."
   ]
  ],
  "discussion": [
   "Dokázal(a) by si nesúhlasný názor vysvetliť tak, aby ho jeho autor spoznal?",
   "¿Podrías explicar una opinión que no compartes de forma que su autor la reconociera?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-068"
 },
 {
  "id": "reading-069",
  "topic": "debate",
  "title": [
   "Vratné rozhodnutie",
   "La decisión reversible"
  ],
  "tag": [
   "Názory, dohody a rozhodnutia",
   "Opiniones, acuerdos y decisiones"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "El grupo no lograba elegir una distribución para la sala. Inés propuso probar una durante una semana. Saber que podrían cambiarla redujo la tensión. No necesitaban acertar para siempre, sino aprender qué funcionaba al usar el espacio.",
  "sk": "Skupina si nevedela vybrať rozloženie miestnosti. Inés navrhla jedno týždeň skúšať. Vedomie, že ho môžu zmeniť, znížilo napätie. Nemuseli navždy trafiť správnu možnosť, iba zistiť, čo funguje pri používaní priestoru.",
  "vocab": [
   [
    "reversible",
    "vratný",
    "Que puede deshacerse o cambiarse después.",
    "Ktorý možno neskôr zrušiť alebo zmeniť."
   ],
   [
    "podrían",
    "mohli by",
    "Una posibilidad o algo posterior visto desde el pasado.",
    "Možnosť alebo neskorší dej videný z minulosti."
   ],
   [
    "no",
    "nie",
    "Niega un contenido.",
    "Popiera obsah."
   ]
  ],
  "questions": [
   [
    "En «La decisión reversible», ¿qué idea resume mejor lo que ocurre?",
    [
     "La memoria del barrio puede dejar espacio al cambio.",
     "Una prueba reversible facilita decidir.",
     "El aprendizaje puede medirse por descubrimientos concretos."
    ],
    1,
    "Celá scéna podporuje tento výklad: Vratná skúška uľahčuje rozhodovanie.",
    "El conjunto de la escena apoya esta lectura: Una prueba reversible facilita decidir."
   ],
   [
    "¿Qué significa «reversible» en «La decisión reversible»?",
    [
     "Que puede deshacerse o cambiarse después.",
     "Contener algo como parte de un conjunto.",
     "Un recorrido que cruza una extensión de agua."
    ],
    0,
    "V tomto kontexte má „reversible“ tento význam.",
    "En este contexto, «reversible» tiene este sentido."
   ],
   [
    "¿Qué aporta «podrían» a la escena «La decisión reversible»?",
    [
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una petición de no hacer algo.",
     "Una posibilidad o algo posterior visto desde el pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La decisión reversible»?",
    [
     "La prueba duraría una semana.",
     "Luis había consultado tres palabras.",
     "Propusieron dejar una parte sin pintar."
    ],
    0,
    "Text to uvádza: Skúška mala trvať týždeň.",
    "El texto lo indica: La prueba duraría una semana."
   ]
  ],
  "discussion": [
   "Ktoré rozhodnutia sú ľahšie, keď sú iba skúškou?",
   "¿Qué decisiones se vuelven más fáciles si son pruebas?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-069"
 },
 {
  "id": "reading-070",
  "topic": "debate",
  "title": [
   "Posledné slovo",
   "El último turno"
  ],
  "tag": [
   "Názory, dohody a rozhodnutia",
   "Opiniones, acuerdos y decisiones"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Cada uno quería cerrar la discusión con una frase definitiva. La conversación se alargó sin añadir ideas. Alguien propuso terminar con una pregunta que ambos consideraran importante. Dejaron de competir por la conclusión y acordaron qué investigar después.",
  "sk": "Každý chcel debatu uzavrieť rozhodujúcou vetou. Rozhovor sa predlžoval bez nových myšlienok. Niekto navrhol skončiť otázkou, ktorú obaja považujú za dôležitú. Prestali súťažiť o záver a dohodli sa, čo preskúmajú ďalej.",
  "vocab": [
   [
    "definitiva",
    "konečná",
    "Que pretende cerrar una cuestión.",
    "Ktorý má uzavrieť otázku."
   ],
   [
    "consideraran",
    "aby považovali",
    "Una situación imaginada o ligada a un marco pasado.",
    "Predstavovaná situácia alebo súvislosť s minulým rámcom."
   ],
   [
    "después",
    "potom",
    "Sitúa algo en un momento posterior.",
    "Umiestňuje niečo do neskoršieho okamihu."
   ]
  ],
  "questions": [
   [
    "En «El último turno», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una buena pregunta puede cerrar mejor que una victoria.",
     "El grupo decide esperar antes de abrir una carta.",
     "Una mejora debe considerar a usuarios diferentes."
    ],
    0,
    "Celá scéna podporuje tento výklad: Dobrá otázka môže uzavrieť rozhovor lepšie než víťazstvo.",
    "El conjunto de la escena apoya esta lectura: Una buena pregunta puede cerrar mejor que una victoria."
   ],
   [
    "¿Qué significa «definitiva» en «El último turno»?",
    [
     "Deshacerse de algo que ya no se conserva.",
     "Señalada para llamar la atención sobre ella.",
     "Que pretende cerrar una cuestión."
    ],
    2,
    "V tomto kontexte má „definitiva“ tento význam.",
    "En este contexto, «definitiva» tiene este sentido."
   ],
   [
    "¿Qué aporta «consideraran» a la escena «El último turno»?",
    [
     "Una petición de no hacer algo.",
     "Una situación imaginada o ligada a un marco pasado.",
     "Algo anterior a otro punto pasado."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El último turno»?",
    [
     "La carta estaba dentro de un diario.",
     "La nueva puerta requería más fuerza.",
     "Decidieron qué investigar después."
    ],
    2,
    "Text to uvádza: Dohodli sa, čo budú skúmať ďalej.",
    "El texto lo indica: Decidieron qué investigar después."
   ]
  ],
  "discussion": [
   "Dá sa debata dobre ukončiť aj bez vyriešenia?",
   "¿Se puede terminar bien una discusión sin resolverla?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-070"
 },
 {
  "id": "reading-071",
  "topic": "travel",
  "title": [
   "Nesprávny hotel",
   "El hotel equivocado"
  ],
  "tag": [
   "Cestovať, prísť a objavovať",
   "Viajar, llegar y descubrir"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "La reserva estaba hecha, pero en un hotel de nombre parecido. En recepción nadie podía cambiarla directamente. La viajera explicó el error sin buscar culpables. Al cabo de unos minutos, habían encontrado una solución entre los dos establecimientos.",
  "sk": "Rezervácia bola hotová, ale v hoteli s podobným názvom. Na recepcii ju nikto nemohol priamo zmeniť. Cestujúca vysvetlila chybu bez hľadania vinníkov. Po niekoľkých minútach našli riešenie medzi oboma zariadeniami.",
  "vocab": [
   [
    "al cabo de",
    "po uplynutí",
    "Después de un intervalo de tiempo.",
    "Po určitom časovom úseku."
   ],
   [
    "habían encontrado",
    "už našli",
    "Algo anterior a otro punto pasado.",
    "Niečo skoršie než iný minulý bod."
   ],
   [
    "nadie",
    "nikto",
    "Indica la ausencia de una persona que cumpla lo dicho.",
    "Označuje neprítomnosť osoby, ktorá by spĺňala uvedené."
   ]
  ],
  "questions": [
   [
    "En «El hotel equivocado», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una señal misteriosa tiene un motivo cotidiano.",
     "Respetar un límite puede estimular la creatividad.",
     "Explicar el problema con claridad ayuda a colaborar."
    ],
    2,
    "Celá scéna podporuje tento výklad: Jasné vysvetlenie problému pomáha spolupráci.",
    "El conjunto de la escena apoya esta lectura: Explicar el problema con claridad ayuda a colaborar."
   ],
   [
    "¿Qué significa «al cabo de» en «El hotel equivocado»?",
    [
     "Que ayuda a descubrir algo importante.",
     "Después de un intervalo de tiempo.",
     "Una reunión de cosas sin que siempre haya selección."
    ],
    1,
    "V tomto kontexte má „al cabo de“ tento význam.",
    "En este contexto, «al cabo de» tiene este sentido."
   ],
   [
    "¿Qué aporta «habían encontrado» a la escena «El hotel equivocado»?",
    [
     "Algo anterior a otro punto pasado.",
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El hotel equivocado»?",
    [
     "La mesa dejó espacio para el tronco.",
     "Los hoteles tenían nombres parecidos.",
     "La lámpara ayudaba a una hermana."
    ],
    1,
    "Text to uvádza: Hotely mali podobné názvy.",
    "El texto lo indica: Los hoteles tenían nombres parecidos."
   ]
  ],
  "discussion": [
   "Aký tón pomáha žiadať o pomoc po vlastnej chybe?",
   "¿Qué tono facilita pedir ayuda cuando hemos cometido un error?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-071"
 },
 {
  "id": "reading-072",
  "topic": "travel",
  "title": [
   "Popoludnie bez programu",
   "Una tarde sin programa"
  ],
  "tag": [
   "Cestovať, prísť a objavovať",
   "Viajar, llegar y descubrir"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "La lluvia canceló la excursión. Samuel pensó que habían perdido la tarde. Entraron en una pequeña librería para esperar y terminaron conversando con la dueña. Años después recordaría aquella charla mejor que las visitas que sí habían planeado.",
  "sk": "Dážď zrušil výlet. Samuel si myslel, že prišli o popoludnie. Vošli čakať do malého kníhkupectva a napokon sa rozprávali s majiteľkou. Po rokoch si ten rozhovor pamätal lepšie než plánované návštevy.",
  "vocab": [
   [
    "dueña",
    "majiteľka",
    "La mujer a la que pertenece un negocio o una cosa.",
    "Žena, ktorej patrí podnik alebo vec."
   ],
   [
    "recordaría",
    "neskôr si mal pamätať",
    "Una posibilidad o algo posterior visto desde el pasado.",
    "Možnosť alebo neskorší dej videný z minulosti."
   ],
   [
    "después",
    "potom",
    "Sitúa algo en un momento posterior.",
    "Umiestňuje niečo do neskoršieho okamihu."
   ]
  ],
  "questions": [
   [
    "En «Una tarde sin programa», ¿qué idea resume mejor lo que ocurre?",
    [
     "Un dibujo compartido cambia la forma de discutir.",
     "Un cambio de plan puede crear otro tipo de experiencia.",
     "Julia busca información antes de valorar el riesgo."
    ],
    1,
    "Celá scéna podporuje tento výklad: Zmena plánu môže vytvoriť iný druh zážitku.",
    "El conjunto de la escena apoya esta lectura: Un cambio de plan puede crear otro tipo de experiencia."
   ],
   [
    "¿Qué significa «dueña» en «Una tarde sin programa»?",
    [
     "La mujer a la que pertenece un negocio o una cosa.",
     "La forma en que se percibe una materia al tocarla.",
     "Que muestra poca cercanía emocional."
    ],
    0,
    "V tomto kontexte má „dueña“ tento význam.",
    "En este contexto, «dueña» tiene este sentido."
   ],
   [
    "¿Qué aporta «recordaría» a la escena «Una tarde sin programa»?",
    [
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una petición de no hacer algo.",
     "Una posibilidad o algo posterior visto desde el pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Una tarde sin programa»?",
    [
     "La lluvia impidió la excursión.",
     "El mar seguía tranquilo.",
     "Todos usaron el mismo papel."
    ],
    0,
    "Text to uvádza: Dážď znemožnil výlet.",
    "El texto lo indica: La lluvia impidió la excursión."
   ]
  ],
  "discussion": [
   "Na ktorú cestu spomínaš pre niečo neplánované?",
   "¿Qué viaje recuerdas por algo que no estaba previsto?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-072"
 },
 {
  "id": "reading-073",
  "topic": "travel",
  "title": [
   "Jedálny lístok bez fotografií",
   "El menú sin fotografías"
  ],
  "tag": [
   "Cestovať, prísť a objavovať",
   "Viajar, llegar y descubrir"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Lucía no reconocía los nombres del menú. En vez de pedir lo conocido, preguntó qué llevaba cada plato. La explicación del camarero incluyó un recuerdo de su casa. La comida empezó antes de que llegaran los platos.",
  "sk": "Lucía nepoznala názvy v jedálnom lístku. Namiesto známeho jedla sa pýtala na zloženie. Vysvetlenie čašníka zahŕňalo spomienku na domov. Jedlo sa začalo skôr, než prišli taniere.",
  "vocab": [
   [
    "llevar",
    "obsahovať",
    "Tener un ingrediente como parte de un plato.",
    "Mať surovinu ako súčasť jedla."
   ],
   [
    "llegaran",
    "prišli",
    "Una situación imaginada o ligada a un marco pasado.",
    "Predstavovaná situácia alebo súvislosť s minulým rámcom."
   ],
   [
    "en vez de",
    "namiesto",
    "Presenta una alternativa a lo que se esperaba.",
    "Predstavuje alternatívu k očakávanej činnosti."
   ]
  ],
  "questions": [
   [
    "En «El menú sin fotografías», ¿qué idea resume mejor lo que ocurre?",
    [
     "Preguntar por un plato puede abrir una historia.",
     "Dos representaciones diferentes pueden tener usos distintos.",
     "La memoria de una persona conecta una dirección con su pasado."
    ],
    0,
    "Celá scéna podporuje tento výklad: Otázka o jedle môže otvoriť príbeh.",
    "El conjunto de la escena apoya esta lectura: Preguntar por un plato puede abrir una historia."
   ],
   [
    "¿Qué significa «llevar» en «El menú sin fotografías»?",
    [
     "Identificar algo visto o conocido anteriormente.",
     "El lugar o resultado al que se llega.",
     "Tener un ingrediente como parte de un plato."
    ],
    2,
    "V tomto kontexte má „llevar“ tento význam.",
    "En este contexto, «llevar» tiene este sentido."
   ],
   [
    "¿Qué aporta «llegaran» a la escena «El menú sin fotografías»?",
    [
     "Una petición de no hacer algo.",
     "Una situación imaginada o ligada a un marco pasado.",
     "Algo anterior a otro punto pasado."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El menú sin fotografías»?",
    [
     "Solo uno de los mapas mostraba una cala.",
     "Una vecina reconoció el nombre del destinatario.",
     "El camarero compartió un recuerdo."
    ],
    2,
    "Text to uvádza: Čašník sa podelil o spomienku.",
    "El texto lo indica: El camarero compartió un recuerdo."
   ]
  ],
  "discussion": [
   "Čo môže naučiť rozhovor o jedle?",
   "¿Qué puede enseñar una conversación sobre comida?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-073"
 },
 {
  "id": "reading-074",
  "topic": "travel",
  "title": [
   "Príliš rýchla návšteva",
   "La visita demasiado rápida"
  ],
  "tag": [
   "Cestovať, prísť a objavovať",
   "Viajar, llegar y descubrir"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Querían ver cuatro pueblos en un día. En el primero encontraron un mercado y cambiaron de idea. «Volveremos otro día para los demás», dijeron. No habían completado la lista, pero habían dejado de mirar el reloj.",
  "sk": "Chceli za deň vidieť štyri dediny. V prvej našli trh a zmenili názor. „Do ostatných sa vrátime inokedy,“ povedali. Zoznam nesplnili, ale prestali sledovať hodiny.",
  "vocab": [
   [
    "los demás",
    "ostatní",
    "Los elementos que quedan fuera del primero o del grupo citado.",
    "Prvky zostávajúce mimo prvého alebo spomenutého súboru."
   ],
   [
    "Volveremos",
    "vrátime sa",
    "Una previsión o promesa sobre después.",
    "Predpoveď alebo sľub o budúcnosti."
   ],
   [
    "pero",
    "ale",
    "Introduce un contraste.",
    "Uvádza protiklad."
   ]
  ],
  "questions": [
   [
    "En «La visita demasiado rápida», ¿qué idea resume mejor lo que ocurre?",
    [
     "Elena corrige una impresión después de escuchar.",
     "Repetir una prueba ayuda a valorar un resultado.",
     "Renunciar a cantidad permite prestar más atención."
    ],
    2,
    "Celá scéna podporuje tento výklad: Zníženie počtu umožňuje väčšiu pozornosť.",
    "El conjunto de la escena apoya esta lectura: Renunciar a cantidad permite prestar más atención."
   ],
   [
    "¿Qué significa «los demás» en «La visita demasiado rápida»?",
    [
     "Que parece real sin serlo necesariamente.",
     "Los elementos que quedan fuera del primero o del grupo citado.",
     "La parte inferior del calzado."
    ],
    1,
    "V tomto kontexte má „los demás“ tento význam.",
    "En este contexto, «los demás» tiene este sentido."
   ],
   [
    "¿Qué aporta «Volveremos» a la escena «La visita demasiado rápida»?",
    [
     "Una previsión o promesa sobre después.",
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La visita demasiado rápida»?",
    [
     "El equipo utilizó otro instrumento.",
     "El plan inicial incluía cuatro pueblos.",
     "Elena llevaba una libreta."
    ],
    1,
    "Text to uvádza: Pôvodný plán zahŕňal štyri dediny.",
    "El texto lo indica: El plan inicial incluía cuatro pueblos."
   ]
  ],
  "discussion": [
   "Radšej spoznáš viac miest alebo stráviš dlhšie na jednom?",
   "¿Prefieres conocer más lugares o pasar más tiempo en uno?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-074"
 },
 {
  "id": "reading-075",
  "topic": "travel",
  "title": [
   "Adresa v dvoch jazykoch",
   "Una dirección en dos idiomas"
  ],
  "tag": [
   "Cestovať, prísť a objavovať",
   "Viajar, llegar y descubrir"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "En el mapa aparecía un nombre y en el letrero otro. El visitante pensó que estaba perdido. Una vecina le explicó que ambos se referían al mismo lugar. Aprendió a preguntar antes de decidir que una diferencia era un error.",
  "sk": "Na mape bol jeden názov a na tabuli druhý. Návštevník si myslel, že zablúdil. Susedka vysvetlila, že oba označujú rovnaké miesto. Naučil sa opýtať skôr, než rozdiel označí za chybu.",
  "vocab": [
   [
    "letrero",
    "nápis na tabuli",
    "Un texto visible que identifica o informa.",
    "Viditeľný text označujúci alebo informujúci."
   ],
   [
    "se referían",
    "odkazovali",
    "Una situación, costumbre o acción en curso en el pasado.",
    "Minulá situácia, zvyk alebo prebiehajúci dej."
   ],
   [
    "antes de",
    "predtým než",
    "Sitúa algo antes de otro momento o acción.",
    "Umiestňuje niečo pred iný okamih alebo činnosť."
   ]
  ],
  "questions": [
   [
    "En «Una dirección en dos idiomas», ¿qué idea resume mejor lo que ocurre?",
    [
     "La presentación visual puede exagerar una diferencia.",
     "Nombres diferentes pueden señalar el mismo lugar.",
     "Una elección habitual se somete a comparación."
    ],
    1,
    "Celá scéna podporuje tento výklad: Odlišné názvy môžu označovať rovnaké miesto.",
    "El conjunto de la escena apoya esta lectura: Nombres diferentes pueden señalar el mismo lugar."
   ],
   [
    "¿Qué significa «letrero» en «Una dirección en dos idiomas»?",
    [
     "Un texto visible que identifica o informa.",
     "Lo que forma parte de los días habituales.",
     "Que respeta el carácter de algo."
    ],
    0,
    "V tomto kontexte má „letrero“ tento význam.",
    "En este contexto, «letrero» tiene este sentido."
   ],
   [
    "¿Qué aporta «se referían» a la escena «Una dirección en dos idiomas»?",
    [
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo.",
     "Una situación, costumbre o acción en curso en el pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Una dirección en dos idiomas»?",
    [
     "Una vecina aclaró la diferencia.",
     "La cuerda nueva pesaba menos.",
     "Julia añadió una escala."
    ],
    0,
    "Text to uvádza: Susedka objasnila rozdiel.",
    "El texto lo indica: Una vecina aclaró la diferencia."
   ]
  ],
  "discussion": [
   "Čo robíme, keď má miesto viac názvov?",
   "¿Qué hacemos cuando un lugar tiene más de un nombre?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-075"
 },
 {
  "id": "reading-076",
  "topic": "travel",
  "title": [
   "Spiatočná cesta",
   "El viaje de vuelta"
  ],
  "tag": [
   "Cestovať, prísť a objavovať",
   "Viajar, llegar y descubrir"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Durante la ida, Rosa apenas miró por la ventana. A la vuelta reconoció el río del que le habían hablado y buscó el puente. El paisaje era el mismo; lo que podía ver en él había cambiado con una conversación.",
  "sk": "Pri ceste tam sa Rosa takmer nepozerala z okna. Späť spoznala rieku, o ktorej jej rozprávali, a hľadala most. Krajina bola rovnaká; po rozhovore sa zmenilo to, čo v nej dokázala vidieť.",
  "vocab": [
   [
    "apenas",
    "takmer vôbec",
    "En una cantidad o intensidad muy pequeña.",
    "Vo veľmi malom množstve alebo miere."
   ],
   [
    "habían hablado",
    "rozprávali už predtým",
    "Algo anterior a otro punto pasado.",
    "Niečo skoršie než iný minulý bod."
   ],
   [
    "y",
    "a",
    "Une elementos o acciones.",
    "Spája prvky alebo činnosti."
   ]
  ],
  "questions": [
   [
    "En «El viaje de vuelta», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una historia puede cambiar nuestra atención al paisaje.",
     "Un supuesto permite comparar prioridades.",
     "Una explicación necesita saber qué podría cuestionarla."
    ],
    0,
    "Celá scéna podporuje tento výklad: Príbeh môže zmeniť pozornosť venovanú krajine.",
    "El conjunto de la escena apoya esta lectura: Una historia puede cambiar nuestra atención al paisaje."
   ],
   [
    "¿Qué significa «apenas» en «El viaje de vuelta»?",
    [
     "Que todavía espera atención o resolución.",
     "Una interrupción breve que organiza el discurso.",
     "En una cantidad o intensidad muy pequeña."
    ],
    2,
    "V tomto kontexte má „apenas“ tento význam.",
    "En este contexto, «apenas» tiene este sentido."
   ],
   [
    "¿Qué aporta «habían hablado» a la escena «El viaje de vuelta»?",
    [
     "Una petición de no hacer algo.",
     "Algo anterior a otro punto pasado.",
     "Una previsión o promesa sobre después."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El viaje de vuelta»?",
    [
     "Una de las respuestas fue buscar sombra.",
     "La profesora agradeció la pregunta.",
     "Rosa buscó un puente al regresar."
    ],
    2,
    "Text to uvádza: Rosa pri návrate hľadala most.",
    "El texto lo indica: Rosa buscó un puente al regresar."
   ]
  ],
  "discussion": [
   "Ktoré miesto si po spoznaní histórie videl(a) inak?",
   "¿Qué lugar has visto de otra manera después de conocer su historia?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-076"
 },
 {
  "id": "reading-077",
  "topic": "travel",
  "title": [
   "Ľahký kufor",
   "La maleta ligera"
  ],
  "tag": [
   "Cestovať, prísť a objavovať",
   "Viajar, llegar y descubrir"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Marcos llevaba objetos para cualquier imprevisto. Al hacer la maleta, notó que casi no quedaba espacio. Eligió algunas cosas y dejó otras. No podía eliminar toda incertidumbre, pero sí decidir cuánto peso quería darle.",
  "sk": "Marcos nosil veci na každú nečakanú udalosť. Pri balení si všimol, že takmer nezostal priestor. Niektoré veci vybral a iné nechal. Nemohol odstrániť všetku neistotu, ale mohol rozhodnúť, akú váhu jej dá.",
  "vocab": [
   [
    "imprevisto",
    "nečakaná udalosť",
    "Algo que ocurre sin haber sido previsto.",
    "Niečo, čo sa stane bez predchádzajúceho plánovania."
   ],
   [
    "podía",
    "mohol",
    "Una situación, costumbre o acción en curso en el pasado.",
    "Minulá situácia, zvyk alebo prebiehajúci dej."
   ],
   [
    "pero",
    "ale",
    "Introduce un contraste.",
    "Uvádza protiklad."
   ]
  ],
  "questions": [
   [
    "En «La maleta ligera», ¿qué idea resume mejor lo que ocurre?",
    [
     "Pensar en una alternativa mejora un plan.",
     "Registrar una ausencia también puede aportar información.",
     "Prepararse también implica aceptar cierta incertidumbre."
    ],
    2,
    "Celá scéna podporuje tento výklad: Príprava znamená aj prijať určitú neistotu.",
    "El conjunto de la escena apoya esta lectura: Prepararse también implica aceptar cierta incertidumbre."
   ],
   [
    "¿Qué significa «imprevisto» en «La maleta ligera»?",
    [
     "Un comentario que presenta y valora una obra.",
     "Algo que ocurre sin haber sido previsto.",
     "El lugar o la persona de donde viene algo."
    ],
    1,
    "V tomto kontexte má „imprevisto“ tento význam.",
    "En este contexto, «imprevisto» tiene este sentido."
   ],
   [
    "¿Qué aporta «podía» a la escena «La maleta ligera»?",
    [
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La maleta ligera»?",
    [
     "Luis registraba días sin avistamientos.",
     "La maleta se estaba quedando sin espacio.",
     "Lucía preguntó por un cambio de viento."
    ],
    1,
    "Text to uvádza: V kufri sa míňalo miesto.",
    "El texto lo indica: La maleta se estaba quedando sin espacio."
   ]
  ],
  "discussion": [
   "Čo nosíš z potreby a čo pre pokoj?",
   "¿Qué llevas por necesidad y qué llevas por tranquilidad?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-077"
 },
 {
  "id": "reading-078",
  "topic": "travel",
  "title": [
   "Miestna rada",
   "Un consejo local"
  ],
  "tag": [
   "Cestovať, prísť a objavovať",
   "Viajar, llegar y descubrir"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "La guía recomendaba la vista desde arriba. Un vecino sugirió mirar el edificio desde una calle estrecha. Elena probó ambos lugares. No tuvo que elegir una recomendación contra la otra: cada perspectiva respondía a una pregunta diferente.",
  "sk": "Sprievodca odporúčal pohľad zhora. Sused navrhol pozrieť sa na budovu z úzkej ulice. Elena vyskúšala obe miesta. Nemusela voliť jedno odporúčanie proti druhému: každá perspektíva odpovedala na inú otázku.",
  "vocab": [
   [
    "desde arriba",
    "zhora",
    "Desde una posición más elevada.",
    "Z vyššie položeného miesta."
   ],
   [
    "probó",
    "vyskúšala",
    "Un episodio de un relato pasado.",
    "Epizóda minulého príbehu."
   ],
   [
    "no",
    "nie",
    "Niega un contenido.",
    "Popiera obsah."
   ]
  ],
  "questions": [
   [
    "En «Un consejo local», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una idea atractiva sigue necesitando pruebas.",
     "Dos recomendaciones pueden ser complementarias.",
     "Un defecto visual puede conservar una experiencia."
    ],
    1,
    "Celá scéna podporuje tento výklad: Dve odporúčania sa môžu dopĺňať.",
    "El conjunto de la escena apoya esta lectura: Dos recomendaciones pueden ser complementarias."
   ],
   [
    "¿Qué significa «desde arriba» en «Un consejo local»?",
    [
     "Desde una posición más elevada.",
     "La disminución de una preocupación o tensión.",
     "Despertar interés por algo que no se entiende del todo."
    ],
    0,
    "V tomto kontexte má „desde arriba“ tento význam.",
    "En este contexto, «desde arriba» tiene este sentido."
   ],
   [
    "¿Qué aporta «probó» a la escena «Un consejo local»?",
    [
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo.",
     "Un episodio de un relato pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Un consejo local»?",
    [
     "Elena visitó los dos puntos de vista.",
     "Conservaron dos versiones de la fotografía.",
     "Ana organizó la información en dos columnas."
    ],
    0,
    "Text to uvádza: Elena navštívila obe vyhliadkové miesta.",
    "El texto lo indica: Elena visitó los dos puntos de vista."
   ]
  ],
  "discussion": [
   "Ako spájaš sprievodcov s radami miestnych?",
   "¿Cómo combinas las guías con los consejos de quienes viven allí?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-078"
 },
 {
  "id": "reading-079",
  "topic": "travel",
  "title": [
   "Oneskorená pohľadnica",
   "La postal tardía"
  ],
  "tag": [
   "Cestovať, prísť a objavovať",
   "Viajar, llegar y descubrir"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "La postal llegó cuando su autora ya había regresado. Parecía inútil anunciar un viaje terminado. Sin embargo, su amiga la colocó junto al escritorio: no era una noticia urgente, sino un gesto que mostraba que alguien había pensado en ella desde lejos.",
  "sk": "Pohľadnica prišla, keď sa jej autorka už vrátila. Oznamovať skončenú cestu sa zdalo zbytočné. Kamarátka ju však položila k písaciemu stolu: nebola súrnou správou, ale gestom ukazujúcim, že na ňu niekto myslel z diaľky.",
  "vocab": [
   [
    "gesto",
    "gesto",
    "Una acción que comunica una intención o un sentimiento.",
    "Konanie vyjadrujúce zámer alebo pocit."
   ],
   [
    "había regresado",
    "vrátila sa už predtým",
    "Algo anterior a otro punto pasado.",
    "Niečo skoršie než iný minulý bod."
   ],
   [
    "sin embargo",
    "avšak",
    "Introduce una idea que contrasta con la anterior.",
    "Uvádza myšlienku v protiklade k predchádzajúcej."
   ]
  ],
  "questions": [
   [
    "En «La postal tardía», ¿qué idea resume mejor lo que ocurre?",
    [
     "Un mensaje puede valer por el gesto y no por su rapidez.",
     "Comprender un mensaje exige reconocer su contexto.",
     "Comparar exige revisar las condiciones iniciales."
    ],
    0,
    "Celá scéna podporuje tento výklad: Správa môže mať hodnotu pre gesto, nie rýchlosť.",
    "El conjunto de la escena apoya esta lectura: Un mensaje puede valer por el gesto y no por su rapidez."
   ],
   [
    "¿Qué significa «gesto» en «La postal tardía»?",
    [
     "Saber realizar algo con seguridad.",
     "La sucesión principal de hechos de una historia.",
     "Una acción que comunica una intención o un sentimiento."
    ],
    2,
    "V tomto kontexte má „gesto“ tento význam.",
    "En este contexto, «gesto» tiene este sentido."
   ],
   [
    "¿Qué aporta «había regresado» a la escena «La postal tardía»?",
    [
     "Una petición de no hacer algo.",
     "Algo anterior a otro punto pasado.",
     "Una previsión o promesa sobre después."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La postal tardía»?",
    [
     "Comprobaron el canal antes de responder.",
     "Solo un grupo podía ver el reloj.",
     "La amiga puso la postal junto al escritorio."
    ],
    2,
    "Text to uvádza: Kamarátka položila pohľadnicu k stolu.",
    "El texto lo indica: La amiga puso la postal junto al escritorio."
   ]
  ],
  "discussion": [
   "Ktoré správy uchovávaš, aj keď už ich informácia neslúži?",
   "¿Qué mensajes guardas aunque su información ya no sirva?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-079"
 },
 {
  "id": "reading-080",
  "topic": "travel",
  "title": [
   "Pýtať sa bez mapy",
   "Preguntar sin mapa"
  ],
  "tag": [
   "Cestovať, prísť a objavovať",
   "Viajar, llegar y descubrir"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "El móvil se apagó antes de llegar. Al preguntar por la estación, Javier recibió tres indicaciones y una breve conversación sobre el barrio. Tardó más, pero dejó de sentir que atravesaba un lugar sin conocer a nadie.",
  "sk": "Mobil sa pred príchodom vypol. Keď sa Javier pýtal na stanicu, dostal tri usmernenia a krátky rozhovor o štvrti. Trvalo to dlhšie, ale prestal mať pocit, že prechádza miestom bez jediného známeho človeka.",
  "vocab": [
   [
    "atravesar",
    "prechádzať cez",
    "Recorrer un espacio de un lado a otro.",
    "Prejsť priestorom z jednej strany na druhú."
   ],
   [
    "recibió",
    "dostal",
    "Un episodio de un relato pasado.",
    "Epizóda minulého príbehu."
   ],
   [
    "nadie",
    "nikto",
    "Indica la ausencia de una persona que cumpla lo dicho.",
    "Označuje neprítomnosť osoby, ktorá by spĺňala uvedené."
   ]
  ],
  "questions": [
   [
    "En «Preguntar sin mapa», ¿qué idea resume mejor lo que ocurre?",
    [
     "El final cambia la lectura de una frase anterior.",
     "Las excepciones pueden precisar una regla.",
     "Pedir orientación puede crear un contacto humano."
    ],
    2,
    "Celá scéna podporuje tento výklad: Žiadosť o usmernenie môže vytvoriť ľudský kontakt.",
    "El conjunto de la escena apoya esta lectura: Pedir orientación puede crear un contacto humano."
   ],
   [
    "¿Qué significa «atravesar» en «Preguntar sin mapa»?",
    [
     "La posición que adopta el cuerpo.",
     "Recorrer un espacio de un lado a otro.",
     "La parte inicial que prepara lo que sigue."
    ],
    1,
    "V tomto kontexte má „atravesar“ tento význam.",
    "En este contexto, «atravesar» tiene este sentido."
   ],
   [
    "¿Qué aporta «recibió» a la escena «Preguntar sin mapa»?",
    [
     "Un episodio de un relato pasado.",
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Preguntar sin mapa»?",
    [
     "La colega empezó por el final del informe.",
     "El teléfono dejó de funcionar antes de la llegada.",
     "El libro pertenecía a una biblioteca."
    ],
    1,
    "Text to uvádza: Telefón prestal fungovať pred príchodom.",
    "El texto lo indica: El teléfono dejó de funcionar antes de la llegada."
   ]
  ],
  "discussion": [
   "Čo získavaš a strácaš pri orientácii iba podľa obrazovky?",
   "¿Qué ganas y qué pierdes al orientarte solo con una pantalla?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-080"
 },
 {
  "id": "reading-081",
  "topic": "memory",
  "title": [
   "Vôňa zošita",
   "El olor del cuaderno"
  ],
  "tag": [
   "Pamäť, čas a predmety",
   "Memoria, tiempo y objetos"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Al abrir el cuaderno, Isabel recordó una habitación que creía olvidada. No apareció una fecha ni una historia completa, sino una luz sobre la mesa. Escribió lo que recordaba y dejó en blanco lo que no sabía, sin intentar completar la escena.",
  "sk": "Pri otvorení zošita si Isabel spomenula na izbu, ktorú považovala za zabudnutú. Nevynoril sa dátum ani celý príbeh, iba svetlo na stole. Zapísala si spomínané a neznáme nechala prázdne bez dopĺňania scény.",
  "vocab": [
   [
    "en blanco",
    "prázdne",
    "Sin escribir o completar el espacio.",
    "Bez zapísania alebo vyplnenia miesta."
   ],
   [
    "creía",
    "myslela si",
    "Una situación, costumbre o acción en curso en el pasado.",
    "Minulá situácia, zvyk alebo prebiehajúci dej."
   ],
   [
    "no",
    "nie",
    "Niega un contenido.",
    "Popiera obsah."
   ]
  ],
  "questions": [
   [
    "En «El olor del cuaderno», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una conclusión depende de a quién incluye.",
     "Una memoria parcial puede conservarse sin inventar el resto.",
     "Los silencios hacen dudar de un narrador."
    ],
    1,
    "Celá scéna podporuje tento výklad: Čiastočnú spomienku možno uchovať bez vymýšľania zvyšku.",
    "El conjunto de la escena apoya esta lectura: Una memoria parcial puede conservarse sin inventar el resto."
   ],
   [
    "¿Qué significa «en blanco» en «El olor del cuaderno»?",
    [
     "Sin escribir o completar el espacio.",
     "Añade un caso que hace más llamativa una negación.",
     "El momento de separarse de alguien."
    ],
    0,
    "V tomto kontexte má „en blanco“ tento význam.",
    "En este contexto, «en blanco» tiene este sentido."
   ],
   [
    "¿Qué aporta «creía» a la escena «El olor del cuaderno»?",
    [
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo.",
     "Una situación, costumbre o acción en curso en el pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El olor del cuaderno»?",
    [
     "Isabel recordó una luz sobre una mesa.",
     "El narrador cambiaba de tema cuando hablaba su hermano.",
     "Había personas que habían abandonado el proyecto."
    ],
    0,
    "Text to uvádza: Isabel si spomenula na svetlo na stole.",
    "El texto lo indica: Isabel recordó una luz sobre una mesa."
   ]
  ],
  "discussion": [
   "Ktoré detaily prebúdzajú spomienky bez celého príbehu?",
   "¿Qué detalles despiertan recuerdos sin una historia completa?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-081"
 },
 {
  "id": "reading-082",
  "topic": "memory",
  "title": [
   "Dve verzie večere",
   "Dos versiones de una cena"
  ],
  "tag": [
   "Pamäť, čas a predmety",
   "Memoria, tiempo y objetos"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Los amigos recordaban la misma cena de maneras distintas. Uno hablaba de la comida; otro, de una conversación. Al comparar recuerdos no encontraron una versión que lo incluyera todo. Cada relato mostraba dónde había estado la atención de quien lo contaba.",
  "sk": "Priatelia si tú istú večeru pamätali rôzne. Jeden hovoril o jedle, druhý o rozhovore. Pri porovnaní nenašli verziu zahŕňajúcu všetko. Každé rozprávanie ukazovalo, na čo sa rozprávač sústredil.",
  "vocab": [
   [
    "incluir",
    "zahŕňať",
    "Contener algo como parte de un conjunto.",
    "Obsahovať niečo ako súčasť celku."
   ],
   [
    "incluyera",
    "aby zahŕňala",
    "Una situación imaginada o ligada a un marco pasado.",
    "Predstavovaná situácia alebo súvislosť s minulým rámcom."
   ],
   [
    "no",
    "nie",
    "Niega un contenido.",
    "Popiera obsah."
   ]
  ],
  "questions": [
   [
    "En «Dos versiones de una cena», ¿qué idea resume mejor lo que ocurre?",
    [
     "Los recuerdos reflejan focos de atención diferentes.",
     "La elección de una palabra modifica una relación.",
     "Reconocer límites no equivale a carecer de conocimiento."
    ],
    0,
    "Celá scéna podporuje tento výklad: Spomienky odrážajú odlišné zameranie pozornosti.",
    "El conjunto de la escena apoya esta lectura: Los recuerdos reflejan focos de atención diferentes."
   ],
   [
    "¿Qué significa «incluir» en «Dos versiones de una cena»?",
    [
     "Que se prepara para lo que puede ocurrir.",
     "El tiempo transcurrido desde su origen.",
     "Contener algo como parte de un conjunto."
    ],
    2,
    "V tomto kontexte má „incluir“ tento význam.",
    "En este contexto, «incluir» tiene este sentido."
   ],
   [
    "¿Qué aporta «incluyera» a la escena «Dos versiones de una cena»?",
    [
     "Una petición de no hacer algo.",
     "Una situación imaginada o ligada a un marco pasado.",
     "Algo anterior a otro punto pasado."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Dos versiones de una cena»?",
    [
     "Compararon dos traducciones.",
     "La ponente presentó una explicación provisional.",
     "Un amigo recordaba especialmente la comida."
    ],
    2,
    "Text to uvádza: Jeden priateľ si zvlášť pamätal jedlo.",
    "El texto lo indica: Un amigo recordaba especialmente la comida."
   ]
  ],
  "discussion": [
   "Kedy sú dve odlišné spomienky zlučiteľné?",
   "¿Cuándo son compatibles dos recuerdos diferentes?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-082"
 },
 {
  "id": "reading-083",
  "topic": "memory",
  "title": [
   "Opravená šálka",
   "La taza reparada"
  ],
  "tag": [
   "Pamäť, čas a predmety",
   "Memoria, tiempo y objetos"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "La taza tenía una línea visible donde se había roto. El taller ofreció ocultarla, pero Ana prefirió conservarla. Le recordaba el día en que decidió reparar en vez de tirar. La marca ya no era solo un defecto.",
  "sk": "Šálka mala viditeľnú čiaru na mieste zlomenia. Dielňa ponúkla jej zakrytie, ale Ana ju chcela zachovať. Pripomínala jej deň, keď sa rozhodla opravovať namiesto vyhadzovania. Stopa už nebola iba chybou.",
  "vocab": [
   [
    "tirar",
    "vyhodiť",
    "Deshacerse de algo que ya no se conserva.",
    "Zbaviť sa niečoho, čo už neuchovávame."
   ],
   [
    "se había roto",
    "rozbila sa už predtým",
    "Algo anterior a otro punto pasado.",
    "Niečo skoršie než iný minulý bod."
   ],
   [
    "en vez de",
    "namiesto",
    "Presenta una alternativa a lo que se esperaba.",
    "Predstavuje alternatívu k očakávanej činnosti."
   ]
  ],
  "questions": [
   [
    "En «La taza reparada», ¿qué idea resume mejor lo que ocurre?",
    [
     "Dos lectores valoran de forma distinta la sorpresa.",
     "La pregunta orienta lo que observamos.",
     "Una reparación puede añadir significado a un objeto."
    ],
    2,
    "Celá scéna podporuje tento výklad: Oprava môže predmetu pridať význam.",
    "El conjunto de la escena apoya esta lectura: Una reparación puede añadir significado a un objeto."
   ],
   [
    "¿Qué significa «tirar» en «La taza reparada»?",
    [
     "Un mensaje que informa de algo importante.",
     "Deshacerse de algo que ya no se conserva.",
     "La unión de piezas para formar un objeto."
    ],
    1,
    "V tomto kontexte má „tirar“ tento význam.",
    "En este contexto, «tirar» tiene este sentido."
   ],
   [
    "¿Qué aporta «se había roto» a la escena «La taza reparada»?",
    [
     "Algo anterior a otro punto pasado.",
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La taza reparada»?",
    [
     "Uno de los observadores contó las hojas.",
     "Ana no quiso ocultar la reparación.",
     "Pablo consultaba la última página."
    ],
    1,
    "Text to uvádza: Ana nechcela zakryť opravu.",
    "El texto lo indica: Ana no quiso ocultar la reparación."
   ]
  ],
  "discussion": [
   "Ktoré predmety si nechávaš pre ich stopy, nie napriek nim?",
   "¿Qué objetos conservas por sus marcas y no a pesar de ellas?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-083"
 },
 {
  "id": "reading-084",
  "topic": "memory",
  "title": [
   "Uložená správa",
   "El mensaje guardado"
  ],
  "tag": [
   "Pamäť, čas a predmety",
   "Memoria, tiempo y objetos"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Pedro iba a borrar una conversación antigua. Entre mensajes prácticos encontró una frase amable que ya no recordaba. Guardó solo esa parte. El archivo dejó de ser una acumulación y se convirtió en una elección de lo que quería conservar.",
  "sk": "Pedro chcel vymazať starý rozhovor. Medzi praktickými správami našiel milú vetu, na ktorú zabudol. Uložil iba túto časť. Archív prestal byť hromadením a stal sa výberom toho, čo chce zachovať.",
  "vocab": [
   [
    "acumulación",
    "hromadenie",
    "Una reunión de cosas sin que siempre haya selección.",
    "Zhromažďovanie vecí, nie vždy s výberom."
   ],
   [
    "se convirtió",
    "zmenil sa",
    "Un episodio de un relato pasado.",
    "Epizóda minulého príbehu."
   ],
   [
    "solo",
    "iba",
    "Limita la cantidad o el alcance.",
    "Obmedzuje množstvo alebo rozsah."
   ]
  ],
  "questions": [
   [
    "En «El mensaje guardado», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una reunión breve no siempre resuelve mejor.",
     "Elegir qué guardar puede dar sentido a un archivo.",
     "El interés literario no depende de la simpatía."
    ],
    1,
    "Celá scéna podporuje tento výklad: Výber uloženého môže archívu dať zmysel.",
    "El conjunto de la escena apoya esta lectura: Elegir qué guardar puede dar sentido a un archivo."
   ],
   [
    "¿Qué significa «acumulación» en «El mensaje guardado»?",
    [
     "Una reunión de cosas sin que siempre haya selección.",
     "Que nadie había pedido.",
     "El espacio donde actúan los intérpretes."
    ],
    0,
    "V tomto kontexte má „acumulación“ tento význam.",
    "En este contexto, «acumulación» tiene este sentido."
   ],
   [
    "¿Qué aporta «se convirtió» a la escena «El mensaje guardado»?",
    [
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo.",
     "Un episodio de un relato pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El mensaje guardado»?",
    [
     "Pedro conservó una frase amable.",
     "Marta quería continuar la lectura.",
     "La primera reunión duró diez minutos."
    ],
    0,
    "Text to uvádza: Pedro zachoval milú vetu.",
    "El texto lo indica: Pedro conservó una frase amable."
   ]
  ],
  "discussion": [
   "Znamená ukladať viac nevyhnutne lepšie si pamätať?",
   "¿Guardar más significa necesariamente recordar mejor?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-084"
 },
 {
  "id": "reading-085",
  "topic": "memory",
  "title": [
   "Recept bez množstiev",
   "La receta sin cantidades"
  ],
  "tag": [
   "Pamäť, čas a predmety",
   "Memoria, tiempo y objetos"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "La receta decía «un poco» y «hasta que esté bien». A Laura le parecieron instrucciones inútiles. Al cocinar con su tío, entendió qué textura debía buscar. Algunas palabras solo se aclaraban al compartir la experiencia que resumían.",
  "sk": "V recepte stálo „trochu“ a „kým to nebude dobré“. Laure pokyny pripadali zbytočné. Pri varení so strýkom pochopila, akú konzistenciu má hľadať. Niektoré slová sa vyjasnili až zdieľaním skúsenosti, ktorú zhŕňali.",
  "vocab": [
   [
    "textura",
    "konzistencia",
    "La forma en que se percibe una materia al tocarla.",
    "Spôsob, akým látku vnímame pri dotyku."
   ],
   [
    "esté",
    "aby bolo v danom stave",
    "Un contenido ligado a un deseo, reacción o acción pendiente.",
    "Obsah spojený so želaním, reakciou alebo očakávaným dejom."
   ],
   [
    "solo",
    "iba",
    "Limita la cantidad o el alcance.",
    "Obmedzuje množstvo alebo rozsah."
   ]
  ],
  "questions": [
   [
    "En «La receta sin cantidades», ¿qué idea resume mejor lo que ocurre?",
    [
     "La práctica compartida aclara instrucciones imprecisas.",
     "Una promesa atractiva puede representar mal un libro.",
     "Conocer lo antiguo no impide probar lo nuevo."
    ],
    0,
    "Celá scéna podporuje tento výklad: Spoločná prax objasňuje nepresné pokyny.",
    "El conjunto de la escena apoya esta lectura: La práctica compartida aclara instrucciones imprecisas."
   ],
   [
    "¿Qué significa «textura» en «La receta sin cantidades»?",
    [
     "Interrumpir el movimiento o una actividad.",
     "La práctica previa a una actuación.",
     "La forma en que se percibe una materia al tocarla."
    ],
    2,
    "V tomto kontexte má „textura“ tento význam.",
    "En este contexto, «textura» tiene este sentido."
   ],
   [
    "¿Qué aporta «esté» a la escena «La receta sin cantidades»?",
    [
     "Una petición de no hacer algo.",
     "Un contenido ligado a un deseo, reacción o acción pendiente.",
     "Algo anterior a otro punto pasado."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La receta sin cantidades»?",
    [
     "La historia trataba de dos hermanas.",
     "El carpintero enseñó a ajustar un cepillo.",
     "Laura cocinó con su tío."
    ],
    2,
    "Text to uvádza: Laura varila so strýkom.",
    "El texto lo indica: Laura cocinó con su tío."
   ]
  ],
  "discussion": [
   "Čo vieš robiť, ale ťažko to vysvetlíš mierami?",
   "¿Qué sabes hacer pero te cuesta explicar con medidas?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-085"
 },
 {
  "id": "reading-086",
  "topic": "memory",
  "title": [
   "Fotografia bez dátumu",
   "La fotografía sin fecha"
  ],
  "tag": [
   "Pamäť, čas a predmety",
   "Memoria, tiempo y objetos"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Nadie recordaba el año de la fotografía. Sin embargo, reconocieron la ventana, el abrigo y un perro que siempre se escondía. La conversación produjo una historia más rica que una fecha, aunque decidieron no inventar la que faltaba.",
  "sk": "Nikto si nepamätal rok fotografie. Spoznali však okno, kabát a psa, ktorý sa vždy skrýval. Rozhovor priniesol bohatší príbeh než dátum, hoci sa rozhodli nevymýšľať chýbajúci údaj.",
  "vocab": [
   [
    "reconocer",
    "spoznať",
    "Identificar algo visto o conocido anteriormente.",
    "Určiť niečo už videné alebo známe."
   ],
   [
    "se escondía",
    "schovával sa",
    "Una situación, costumbre o acción en curso en el pasado.",
    "Minulá situácia, zvyk alebo prebiehajúci dej."
   ],
   [
    "nadie",
    "nikto",
    "Indica la ausencia de una persona que cumpla lo dicho.",
    "Označuje neprítomnosť osoby, ktorá by spĺňala uvedené."
   ]
  ],
  "questions": [
   [
    "En «La fotografía sin fecha», ¿qué idea resume mejor lo que ocurre?",
    [
     "La voz puede descubrir un humor que pasa inadvertido.",
     "Mostrar dudas puede hacer un informe más claro.",
     "No saber una fecha no elimina el valor de una imagen."
    ],
    2,
    "Celá scéna podporuje tento výklad: Neznalosť dátumu neodstraňuje hodnotu obrázka.",
    "El conjunto de la escena apoya esta lectura: No saber una fecha no elimina el valor de una imagen."
   ],
   [
    "¿Qué significa «reconocer» en «La fotografía sin fecha»?",
    [
     "Una señal que deja el paso del tiempo o una acción.",
     "Identificar algo visto o conocido anteriormente.",
     "Interpretar algo como una indicación importante o literal."
    ],
    1,
    "V tomto kontexte má „reconocer“ tento význam.",
    "En este contexto, «reconocer» tiene este sentido."
   ],
   [
    "¿Qué aporta «se escondía» a la escena «La fotografía sin fecha»?",
    [
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La fotografía sin fecha»?",
    [
     "Ana pidió recuperar parte de las discusiones.",
     "En la foto identificaron una ventana.",
     "Luis no había detectado la broma al leer en silencio."
    ],
    1,
    "Text to uvádza: Na fotografii spoznali okno.",
    "El texto lo indica: En la foto identificaron una ventana."
   ]
  ],
  "discussion": [
   "Čo by si sa opýtal(a) fotografie bez dátumu?",
   "¿Qué preguntas le harías a una fotografía sin fecha?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-086"
 },
 {
  "id": "reading-087",
  "topic": "memory",
  "title": [
   "Vyrozprávané remeslo",
   "Un oficio contado"
  ],
  "tag": [
   "Pamäť, čas a predmety",
   "Memoria, tiempo y objetos"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "La entrevista empezó con fechas y terminó con un gesto: el zapatero mostró cómo escuchaba una suela al doblarla. La grabación conservó el sonido. Quien transcribiera solo las palabras perdería una parte de la explicación.",
  "sk": "Rozhovor sa začal dátumami a skončil gestom: obuvník ukázal, ako počúva podrážku pri ohýbaní. Nahrávka zachovala zvuk. Ten, kto by prepísal iba slová, by stratil časť vysvetlenia.",
  "vocab": [
   [
    "suela",
    "podrážka",
    "La parte inferior del calzado.",
    "Spodná časť obuvi."
   ],
   [
    "perdería",
    "stratil by",
    "Una posibilidad o algo posterior visto desde el pasado.",
    "Možnosť alebo neskorší dej videný z minulosti."
   ],
   [
    "solo",
    "iba",
    "Limita la cantidad o el alcance.",
    "Obmedzuje množstvo alebo rozsah."
   ]
  ],
  "questions": [
   [
    "En «Un oficio contado», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una pregunta básica revela una rutina innecesaria.",
     "Una explicación puede depender también del gesto y del sonido.",
     "Una valoración concreta ayuda más que una etiqueta."
    ],
    1,
    "Celá scéna podporuje tento výklad: Vysvetlenie môže závisieť aj od gesta a zvuku.",
    "El conjunto de la escena apoya esta lectura: Una explicación puede depender también del gesto y del sonido."
   ],
   [
    "¿Qué significa «suela» en «Un oficio contado»?",
    [
     "La parte inferior del calzado.",
     "Que produce una impresión muy llamativa.",
     "Una situación que daña la dignidad de alguien."
    ],
    0,
    "V tomto kontexte má „suela“ tento význam.",
    "En este contexto, «suela» tiene este sentido."
   ],
   [
    "¿Qué aporta «perdería» a la escena «Un oficio contado»?",
    [
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una petición de no hacer algo.",
     "Una posibilidad o algo posterior visto desde el pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Un oficio contado»?",
    [
     "La grabación incluía el sonido de una suela.",
     "Elena sustituyó un adjetivo por ejemplos.",
     "Utilizaban tres formularios."
    ],
    0,
    "Text to uvádza: Nahrávka obsahovala zvuk podrážky.",
    "El texto lo indica: La grabación incluía el sonido de una suela."
   ]
  ],
  "discussion": [
   "Ako by si zachoval(a) poznanie závislé od tela?",
   "¿Cómo conservarías un conocimiento que depende del cuerpo?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-087"
 },
 {
  "id": "reading-088",
  "topic": "memory",
  "title": [
   "Dátum v denníku",
   "La fecha del diario"
  ],
  "tag": [
   "Pamäť, čas a predmety",
   "Memoria, tiempo y objetos"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "«Hoy ha sido un día normal», había escrito Sofía. Veinte años después, los detalles normales le resultaban extraños: una tienda desaparecida, un trayecto distinto, una llamada esperada. Lo cotidiano también había guardado una historia.",
  "sk": "„Dnes bol obyčajný deň,“ napísala Sofía. O dvadsať rokov jej bežné detaily pripadali zvláštne: zaniknutý obchod, iná trasa, očakávaný telefonát. Aj každodennosť uchovala príbeh.",
  "vocab": [
   [
    "cotidiano",
    "každodenný",
    "Lo que forma parte de los días habituales.",
    "To, čo patrí k bežným dňom."
   ],
   [
    "ha sido",
    "bol",
    "Una acción anterior presentada como noticia o experiencia.",
    "Predchádzajúci dej podaný ako správa alebo skúsenosť."
   ],
   [
    "después",
    "potom",
    "Sitúa algo en un momento posterior.",
    "Umiestňuje niečo do neskoršieho okamihu."
   ]
  ],
  "questions": [
   [
    "En «La fecha del diario», ¿qué idea resume mejor lo que ocurre?",
    [
     "El tiempo puede volver significativo lo que parecía corriente.",
     "Una nota incompleta invita a proyectar interpretaciones.",
     "El trabajo resuelto también necesita ser comunicado."
    ],
    0,
    "Celá scéna podporuje tento výklad: Čas môže dodať význam zdanlivo obyčajnému.",
    "El conjunto de la escena apoya esta lectura: El tiempo puede volver significativo lo que parecía corriente."
   ],
   [
    "¿Qué significa «cotidiano» en «La fecha del diario»?",
    [
     "La persona a quien se dirige un mensaje.",
     "Una relación entre cosas que comparten rasgos.",
     "Lo que forma parte de los días habituales."
    ],
    2,
    "V tomto kontexte má „cotidiano“ tento význam.",
    "En este contexto, «cotidiano» tiene este sentido."
   ],
   [
    "¿Qué aporta «ha sido» a la escena «La fecha del diario»?",
    [
     "Una petición de no hacer algo.",
     "Una acción anterior presentada como noticia o experiencia.",
     "Una previsión o promesa sobre después."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La fecha del diario»?",
    [
     "La nota no explicaba el desacuerdo.",
     "Luis dejó una nota la siguiente vez.",
     "Sofía volvió al diario veinte años después."
    ],
    2,
    "Text to uvádza: Sofía sa k denníku vrátila o dvadsať rokov.",
    "El texto lo indica: Sofía volvió al diario veinte años después."
   ]
  ],
  "discussion": [
   "Ktorá časť dneška by ťa mohla prekvapiť o dvadsať rokov?",
   "¿Qué parte de hoy podría sorprenderte dentro de veinte años?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-088"
 },
 {
  "id": "reading-089",
  "topic": "memory",
  "title": [
   "Premenovať priečinok",
   "Cambiar el nombre de una carpeta"
  ],
  "tag": [
   "Pamäť, čas a predmety",
   "Memoria, tiempo y objetos"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "La carpeta se llamaba «Pendiente». Contenía proyectos abandonados y otros que aún interesaban. Al separarlos, Miguel dejó de sentir que todos eran deudas. A algunos les puso otro nombre: ideas que habían servido para llegar a algo distinto.",
  "sk": "Priečinok sa volal „Nedokončené“. Obsahoval opustené aj stále zaujímavé projekty. Po oddelení Miguel prestal všetky vnímať ako dlhy. Niektoré pomenoval inak: myšlienky, ktoré pomohli dostať sa k niečomu ďalšiemu.",
  "vocab": [
   [
    "pendiente",
    "nevybavený",
    "Que todavía espera atención o resolución.",
    "Ktorý stále čaká na pozornosť alebo riešenie."
   ],
   [
    "habían servido",
    "predtým poslúžili",
    "Algo anterior a otro punto pasado.",
    "Niečo skoršie než iný minulý bod."
   ],
   [
    "y",
    "a",
    "Une elementos o acciones.",
    "Spája prvky alebo činnosti."
   ]
  ],
  "questions": [
   [
    "En «Cambiar el nombre de una carpeta», ¿qué idea resume mejor lo que ocurre?",
    [
     "Las recomendaciones se centran en la experiencia de leer.",
     "Un plazo necesita considerar los recursos disponibles.",
     "Un nombre puede cambiar la relación con lo inacabado."
    ],
    2,
    "Celá scéna podporuje tento výklad: Názov môže zmeniť vzťah k nedokončenému.",
    "El conjunto de la escena apoya esta lectura: Un nombre puede cambiar la relación con lo inacabado."
   ],
   [
    "¿Qué significa «pendiente» en «Cambiar el nombre de una carpeta»?",
    [
     "Algo que dificulta acceder o participar.",
     "Que todavía espera atención o resolución.",
     "Mantener una luz funcionando."
    ],
    1,
    "V tomto kontexte má „pendiente“ tento význam.",
    "En este contexto, «pendiente» tiene este sentido."
   ],
   [
    "¿Qué aporta «habían servido» a la escena «Cambiar el nombre de una carpeta»?",
    [
     "Algo anterior a otro punto pasado.",
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Cambiar el nombre de una carpeta»?",
    [
     "El plazo se amplió dos días.",
     "Miguel separó proyectos todavía interesantes de otros abandonados.",
     "Las recomendaciones se hacían los viernes."
    ],
    1,
    "Text to uvádza: Miguel oddelil zaujímavé projekty od opustených.",
    "El texto lo indica: Miguel separó proyectos todavía interesantes de otros abandonados."
   ]
  ],
  "discussion": [
   "Kedy je opustenie projektu tiež spôsobom ukončenia?",
   "¿Cuándo dejar un proyecto es también una forma de terminarlo?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-089"
 },
 {
  "id": "reading-090",
  "topic": "memory",
  "title": [
   "Príbeh, ktorý nebol jeho",
   "La historia que no era suya"
  ],
  "tag": [
   "Pamäť, čas a predmety",
   "Memoria, tiempo y objetos"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Tomás contaba una anécdota como si la hubiera vivido. Su hermana le recordó que la había oído de otro. Se rio, pero corrigió la presentación. La historia seguía siendo buena; lo que había cambiado era la procedencia del relato.",
  "sk": "Tomás rozprával príhodu, akoby ju zažil. Sestra pripomenula, že ju počul od niekoho iného. Zasmial sa, ale opravil uvedenie. Príbeh bol stále dobrý; zmenil sa pôvod rozprávania.",
  "vocab": [
   [
    "procedencia",
    "pôvod",
    "El lugar o la persona de donde viene algo.",
    "Miesto alebo osoba, odkiaľ niečo pochádza."
   ],
   [
    "hubiera vivido",
    "akoby bol zažil",
    "Una alternativa pasada o algo anterior a una reacción pasada.",
    "Minulá alternatíva alebo dej skorší než minulá reakcia."
   ],
   [
    "pero",
    "ale",
    "Introduce un contraste.",
    "Uvádza protiklad."
   ]
  ],
  "questions": [
   [
    "En «La historia que no era suya», ¿qué idea resume mejor lo que ocurre?",
    [
     "Quitar algo puede mejorar el conjunto.",
     "La procedencia de un relato forma parte de su sentido.",
     "Observar a quienes miran abre otra perspectiva."
    ],
    1,
    "Celá scéna podporuje tento výklad: Pôvod rozprávania patrí k jeho významu.",
    "El conjunto de la escena apoya esta lectura: La procedencia de un relato forma parte de su sentido."
   ],
   [
    "¿Qué significa «procedencia» en «La historia que no era suya»?",
    [
     "El lugar o la persona de donde viene algo.",
     "Buscar orientación en una fuente.",
     "Permanecer en un lugar en vez de marcharse."
    ],
    0,
    "V tomto kontexte má „procedencia“ tento význam.",
    "En este contexto, «procedencia» tiene este sentido."
   ],
   [
    "¿Qué aporta «hubiera vivido» a la escena «La historia que no era suya»?",
    [
     "Algo anterior a otro punto pasado.",
     "Una petición de no hacer algo.",
     "Una alternativa pasada o algo anterior a una reacción pasada."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La historia que no era suya»?",
    [
     "La hermana corrigió la procedencia de la anécdota.",
     "Nora dibujó a los visitantes.",
     "Probaron una versión reducida."
    ],
    0,
    "Text to uvádza: Sestra opravila pôvod príhody.",
    "El texto lo indica: La hermana corrigió la procedencia de la anécdota."
   ]
  ],
  "discussion": [
   "Záleží pri rozprávaní na tom, kto príbeh zažil?",
   "¿Importa quién vivió una historia cuando la contamos?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-090"
 },
 {
  "id": "reading-091",
  "topic": "humour",
  "title": [
   "Zoznam na oddych",
   "La lista para descansar"
  ],
  "tag": [
   "Humor, slová a každodennosť",
   "Humor, palabras y vida cotidiana"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Nuria hizo una lista de todo lo que haría durante su día libre. Cuando vio que no cabía en la página, añadió una última tarea: «No cumplir esta lista». Por primera vez en semanas, una tarea le produjo alivio antes de empezar.",
  "sk": "Nuria si spísala všetko, čo bude robiť vo voľný deň. Keď sa zoznam nezmestil na stránku, pridala poslednú úlohu: „Nesplniť tento zoznam.“ Prvýkrát po týždňoch jej úloha priniesla úľavu ešte pred začiatkom.",
  "vocab": [
   [
    "alivio",
    "úľava",
    "La disminución de una preocupación o tensión.",
    "Zmiernenie starosti alebo napätia."
   ],
   [
    "haría",
    "robila by neskôr",
    "Una posibilidad o algo posterior visto desde el pasado.",
    "Možnosť alebo neskorší dej videný z minulosti."
   ],
   [
    "antes de",
    "predtým než",
    "Sitúa algo antes de otro momento o acción.",
    "Umiestňuje niečo pred iný okamih alebo činnosť."
   ]
  ],
  "questions": [
   [
    "En «La lista para descansar», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una contradicción permite cuestionar una rutina.",
     "Una obra puede despertar recuerdos no previstos.",
     "Una observación concreta convierte el elogio en aprendizaje."
    ],
    0,
    "Celá scéna podporuje tento výklad: Rozpor umožňuje spochybniť rutinu.",
    "El conjunto de la escena apoya esta lectura: Una contradicción permite cuestionar una rutina."
   ],
   [
    "¿Qué significa «alivio» en «La lista para descansar»?",
    [
     "Una entrada pequeña del mar en la costa.",
     "Proponer una opción que se considera conveniente.",
     "La disminución de una preocupación o tensión."
    ],
    2,
    "V tomto kontexte má „alivio“ tento význam.",
    "En este contexto, «alivio» tiene este sentido."
   ],
   [
    "¿Qué aporta «haría» a la escena «La lista para descansar»?",
    [
     "Una petición de no hacer algo.",
     "Una posibilidad o algo posterior visto desde el pasado.",
     "Una situación, costumbre o acción en curso en el pasado."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La lista para descansar»?",
    [
     "El músico no anunció el título.",
     "La observación se refería a una tabla.",
     "Nuria añadió una tarea para no cumplir la lista."
    ],
    2,
    "Text to uvádza: Nuria pridala úlohu nesplniť zoznam.",
    "El texto lo indica: Nuria añadió una tarea para no cumplir la lista."
   ]
  ],
  "discussion": [
   "Dá sa oddych naplánovať tak veľmi, že prestane byť oddychom?",
   "¿Se puede organizar tanto el descanso que deje de ser descanso?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-091"
 },
 {
  "id": "reading-092",
  "topic": "humour",
  "title": [
   "Kniha pokynov",
   "El libro de instrucciones"
  ],
  "tag": [
   "Humor, slová a každodennosť",
   "Humor, palabras y vida cotidiana"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "La cafetera nueva traía un manual enorme. Luis preparó café antes de leerlo y se sintió orgulloso. Después descubrió que el capítulo más largo explicaba cómo limpiarla. Había dominado la parte que menos tiempo ocuparía en su relación con la máquina.",
  "sk": "Nový kávovar mal obrovský návod. Luis pripravil kávu pred čítaním a bol hrdý. Potom zistil, že najdlhšia kapitola vysvetľuje čistenie. Zvládol časť, ktorá mala zabrať najmenej času v jeho vzťahu so strojom.",
  "vocab": [
   [
    "dominar",
    "ovládať",
    "Saber realizar algo con seguridad.",
    "Vedieť niečo spoľahlivo vykonať."
   ],
   [
    "había dominado",
    "už zvládol",
    "Algo anterior a otro punto pasado.",
    "Niečo skoršie než iný minulý bod."
   ],
   [
    "antes de",
    "predtým než",
    "Sitúa algo antes de otro momento o acción.",
    "Umiestňuje niečo pred iný okamih alebo činnosť."
   ]
  ],
  "questions": [
   [
    "En «El libro de instrucciones», ¿qué idea resume mejor lo que ocurre?",
    [
     "La falta de una etiqueta revela un prejuicio.",
     "Cambiar de contexto facilita una conexión inesperada.",
     "El uso inmediato no cuenta toda la historia de un objeto."
    ],
    2,
    "Celá scéna podporuje tento výklad: Okamžité použitie nevystihuje celý príbeh predmetu.",
    "El conjunto de la escena apoya esta lectura: El uso inmediato no cuenta toda la historia de un objeto."
   ],
   [
    "¿Qué significa «dominar» en «El libro de instrucciones»?",
    [
     "Dentro de muy poco tiempo, según quien habla.",
     "Saber realizar algo con seguridad.",
     "Introduce un contraste con lo anterior."
    ],
    1,
    "V tomto kontexte má „dominar“ tento význam.",
    "En este contexto, «dominar» tiene este sentido."
   ],
   [
    "¿Qué aporta «había dominado» a la escena «El libro de instrucciones»?",
    [
     "Algo anterior a otro punto pasado.",
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El libro de instrucciones»?",
    [
     "El grupo regresó para comprobar la solución.",
     "El capítulo más largo trataba de la limpieza.",
     "El cuadro no tenía cartel."
    ],
    1,
    "Text to uvádza: Najdlhšia kapitola bola o čistení.",
    "El texto lo indica: El capítulo más largo trataba de la limpieza."
   ]
  ],
  "discussion": [
   "Ktorú časť učenia niečoho oslavujeme priskoro?",
   "¿Qué parte de aprender algo solemos celebrar demasiado pronto?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-092"
 },
 {
  "id": "reading-093",
  "topic": "humour",
  "title": [
   "Veľmi dlhé ticho",
   "Un silencio muy largo"
  ],
  "tag": [
   "Humor, slová a každodennosť",
   "Humor, palabras y vida cotidiana"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "«Voy a hablar solo un minuto», anunció el invitado. Cinco minutos después explicó que todavía no había empezado su argumento. En la mesa alguien preguntó si el minuto incluía la introducción. La risa logró lo que una interrupción seria no había conseguido.",
  "sk": "„Budem hovoriť iba minútu,“ oznámil hosť. O päť minút vysvetlil, že svoj argument ešte nezačal. Niekto pri stole sa opýtal, či minúta zahŕňa úvod. Smiech dosiahol to, čo vážne prerušenie nedokázalo.",
  "vocab": [
   [
    "introducción",
    "úvod",
    "La parte inicial que prepara lo que sigue.",
    "Počiatočná časť pripravujúca ďalší obsah."
   ],
   [
    "Voy a hablar",
    "budem hovoriť",
    "Un plan o una intención, también vistos desde el pasado.",
    "Plán alebo zámer aj z pohľadu minulosti."
   ],
   [
    "después",
    "potom",
    "Sitúa algo en un momento posterior.",
    "Umiestňuje niečo do neskoršieho okamihu."
   ]
  ],
  "questions": [
   [
    "En «Un silencio muy largo», ¿qué idea resume mejor lo que ocurre?",
    [
     "La forma de participar puede ocultar o revelar desacuerdos.",
     "Una broma puede señalar un exceso sin confrontación directa.",
     "Una norma habitual no se aplica a todas las obras."
    ],
    1,
    "Celá scéna podporuje tento výklad: Vtip môže upozorniť na preháňanie bez priameho konfliktu.",
    "El conjunto de la escena apoya esta lectura: Una broma puede señalar un exceso sin confrontación directa."
   ],
   [
    "¿Qué significa «introducción» en «Un silencio muy largo»?",
    [
     "La parte inicial que prepara lo que sigue.",
     "No cumplir la función esperada.",
     "Notar con deseo la ausencia de algo o alguien."
    ],
    0,
    "V tomto kontexte má „introducción“ tento význam.",
    "En este contexto, «introducción» tiene este sentido."
   ],
   [
    "¿Qué aporta «Voy a hablar» a la escena «Un silencio muy largo»?",
    [
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una petición de no hacer algo.",
     "Un plan o una intención, también vistos desde el pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Un silencio muy largo»?",
    [
     "El invitado llevaba cinco minutos hablando.",
     "La escultura estaba hecha para tocarla.",
     "Recibieron tres objeciones por escrito."
    ],
    0,
    "Text to uvádza: Hosť hovoril už päť minút.",
    "El texto lo indica: El invitado llevaba cinco minutos hablando."
   ]
  ],
  "discussion": [
   "Kedy humor pomáha vysloviť niečo náročné?",
   "¿Cuándo ayuda el humor a decir algo difícil?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-093"
 },
 {
  "id": "reading-094",
  "topic": "humour",
  "title": [
   "Dokonalé heslo",
   "La contraseña perfecta"
  ],
  "tag": [
   "Humor, slová a každodennosť",
   "Humor, palabras y vida cotidiana"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Marta inventó una contraseña tan difícil que no podía recordarla. «Es muy segura: ni siquiera yo puedo entrar», bromeó. Después buscó una forma de organizar sus accesos. El chiste no resolvió el problema, pero le permitió reconocerlo sin enfadarse consigo misma.",
  "sk": "Marta vymyslela také ťažké heslo, že si ho nepamätala. „Je veľmi bezpečné: nedostanem sa tam ani ja,“ zažartovala. Potom hľadala spôsob usporiadania prístupov. Vtip problém nevyriešil, ale umožnil jej priznať ho bez hnevu na seba.",
  "vocab": [
   [
    "ni siquiera",
    "dokonca ani",
    "Añade un caso que hace más llamativa una negación.",
    "Pridáva prípad zdôrazňujúci záporné tvrdenie."
   ],
   [
    "puedo",
    "môžem",
    "Una situación presente o habitual.",
    "Súčasná alebo obvyklá situácia."
   ],
   [
    "después",
    "potom",
    "Sitúa algo en un momento posterior.",
    "Umiestňuje niečo do neskoršieho okamihu."
   ]
  ],
  "questions": [
   [
    "En «La contraseña perfecta», ¿qué idea resume mejor lo que ocurre?",
    [
     "Reírse de un error facilita reconocerlo.",
     "La espera también forma parte de la representación.",
     "Cambiar de postura puede ser un resultado valioso."
    ],
    0,
    "Celá scéna podporuje tento výklad: Smiech z vlastnej chyby uľahčuje jej priznanie.",
    "El conjunto de la escena apoya esta lectura: Reírse de un error facilita reconocerlo."
   ],
   [
    "¿Qué significa «ni siquiera» en «La contraseña perfecta»?",
    [
     "Algo que ocupa la atención y causa inquietud.",
     "Personas colocadas siguiendo un orden.",
     "Añade un caso que hace más llamativa una negación."
    ],
    2,
    "V tomto kontexte má „ni siquiera“ tento význam.",
    "En este contexto, «ni siquiera» tiene este sentido."
   ],
   [
    "¿Qué aporta «puedo» a la escena «La contraseña perfecta»?",
    [
     "Una petición de no hacer algo.",
     "Una situación presente o habitual.",
     "Una previsión o promesa sobre después."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La contraseña perfecta»?",
    [
     "Había una sola silla en el escenario.",
     "Vera escuchó un ejemplo nuevo.",
     "Marta no recordaba su contraseña."
    ],
    2,
    "Text to uvádza: Marta si nepamätala heslo.",
    "El texto lo indica: Marta no recordaba su contraseña."
   ]
  ],
  "discussion": [
   "Aký je rozdiel medzi smiechom zo seba a sebapohŕdaním?",
   "¿Qué diferencia hay entre reírse de uno mismo y despreciarse?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-094"
 },
 {
  "id": "reading-095",
  "topic": "humour",
  "title": [
   "Predvídavý dáždnik",
   "El paraguas previsor"
  ],
  "tag": [
   "Humor, slová a každodennosť",
   "Humor, palabras y vida cotidiana"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Pedro llevaba paraguas porque siempre podía llover. Su amiga llevaba uno porque podía hacer sol y quería sombra. Cuando se cruzaron en la calle, ambos dijeron: «Menos mal que venía preparado». El mismo objeto justificaba previsiones contrarias.",
  "sk": "Pedro nosil dáždnik, lebo mohlo pršať. Kamarátka ho nosila, lebo mohlo svietiť slnko a chcela tieň. Keď sa stretli, obaja povedali: „Ešteže som pripravený.“ Rovnaký predmet zdôvodňoval opačné očakávania.",
  "vocab": [
   [
    "previsor",
    "predvídavý",
    "Que se prepara para lo que puede ocurrir.",
    "Ktorý sa pripravuje na možné udalosti."
   ],
   [
    "podía",
    "mohlo",
    "Una situación, costumbre o acción en curso en el pasado.",
    "Minulá situácia, zvyk alebo prebiehajúci dej."
   ],
   [
    "porque",
    "pretože",
    "Introduce una causa o una explicación.",
    "Uvádza príčinu alebo vysvetlenie."
   ]
  ],
  "questions": [
   [
    "En «El paraguas previsor», ¿qué idea resume mejor lo que ocurre?",
    [
     "Conocer el esfuerzo cambia la percepción de la facilidad.",
     "Un caso excepcional no representa necesariamente lo habitual.",
     "Una misma preparación puede responder a motivos opuestos."
    ],
    2,
    "Celá scéna podporuje tento výklad: Rovnaká príprava môže reagovať na opačné dôvody.",
    "El conjunto de la escena apoya esta lectura: Una misma preparación puede responder a motivos opuestos."
   ],
   [
    "¿Qué significa «previsor» en «El paraguas previsor»?",
    [
     "Una muestra pública de reconocimiento.",
     "Que se prepara para lo que puede ocurrir.",
     "El momento en que empieza la noche."
    ],
    1,
    "V tomto kontexte má „previsor“ tento význam.",
    "En este contexto, «previsor» tiene este sentido."
   ],
   [
    "¿Qué aporta «podía» a la escena «El paraguas previsor»?",
    [
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El paraguas previsor»?",
    [
     "Ana pidió pensar en un día corriente.",
     "La amiga usaba el paraguas para buscar sombra.",
     "La pianista repitió el pasaje seis veces."
    ],
    1,
    "Text to uvádza: Kamarátka používala dáždnik na tieň.",
    "El texto lo indica: La amiga usaba el paraguas para buscar sombra."
   ]
  ],
  "discussion": [
   "Koľko dôvodov môže mať rovnaký zvyk?",
   "¿Cuántas razones distintas puede tener una misma costumbre?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-095"
 },
 {
  "id": "reading-096",
  "topic": "humour",
  "title": [
   "Mačací názor",
   "La opinión del gato"
  ],
  "tag": [
   "Humor, slová a každodennosť",
   "Humor, palabras y vida cotidiana"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "El grupo discutía dónde colocar el sillón. Movieron muebles durante una hora. El gato esperó a que terminaran y se tumbó en la caja vacía. Nadie había propuesto aquella opción, que además tenía la ventaja de no necesitar montaje.",
  "sk": "Skupina diskutovala, kam dať kreslo. Hodinu presúvali nábytok. Mačka počkala na koniec a ľahla si do prázdnej škatule. Túto možnosť nikto nenavrhol a navyše nepotrebovala montáž.",
  "vocab": [
   [
    "montaje",
    "montáž",
    "La unión de piezas para formar un objeto.",
    "Spájanie dielov do jedného predmetu."
   ],
   [
    "terminaran",
    "kým skončia",
    "Una situación imaginada o ligada a un marco pasado.",
    "Predstavovaná situácia alebo súvislosť s minulým rámcom."
   ],
   [
    "nadie",
    "nikto",
    "Indica la ausencia de una persona que cumpla lo dicho.",
    "Označuje neprítomnosť osoby, ktorá by spĺňala uvedené."
   ]
  ],
  "questions": [
   [
    "En «La opinión del gato», ¿qué idea resume mejor lo que ocurre?",
    [
     "Explicar una causa y asignar responsabilidad son tareas distintas.",
     "Una preferencia inesperada deja en evidencia una discusión complicada.",
     "Conservar no equivale siempre a renovar por completo."
    ],
    1,
    "Celá scéna podporuje tento výklad: Nečakaná voľba odhalí prehnane zložitú debatu.",
    "El conjunto de la escena apoya esta lectura: Una preferencia inesperada deja en evidencia una discusión complicada."
   ],
   [
    "¿Qué significa «montaje» en «La opinión del gato»?",
    [
     "La unión de piezas para formar un objeto.",
     "Que no sigue la posición recta esperada.",
     "De manera simultánea."
    ],
    0,
    "V tomto kontexte má „montaje“ tento význam.",
    "En este contexto, «montaje» tiene este sentido."
   ],
   [
    "¿Qué aporta «terminaran» a la escena «La opinión del gato»?",
    [
     "Algo anterior a otro punto pasado.",
     "Una petición de no hacer algo.",
     "Una situación imaginada o ligada a un marco pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La opinión del gato»?",
    [
     "El gato eligió una caja vacía.",
     "La restauradora no quería borrar toda la historia.",
     "Luis hablaba de la causa del error."
    ],
    0,
    "Text to uvádza: Mačka si vybrala prázdnu škatuľu.",
    "El texto lo indica: El gato eligió una caja vacía."
   ]
  ],
  "discussion": [
   "Ktoré jednoduché riešenia prehliadame, lebo sú až príliš jednoduché?",
   "¿Qué soluciones sencillas pasamos por alto por parecer demasiado simples?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-096"
 },
 {
  "id": "reading-097",
  "topic": "humour",
  "title": [
   "Nevyžiadaná rada",
   "El consejo no solicitado"
  ],
  "tag": [
   "Humor, slová a každodennosť",
   "Humor, palabras y vida cotidiana"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "«Yo en tu lugar descansaría», le dijo Bruno a quien estaba preparando la cena para todos. Ella le entregó el cuchillo y una cebolla. «Perfecto, tú en mi lugar». Bruno comprendió que algunas frases se entienden mejor cuando se toman en serio.",
  "sk": "„Ja by som si na tvojom mieste oddýchol,“ povedal Bruno žene, ktorá všetkým chystala večeru. Podala mu nôž a cibuľu. „Výborne, ty na mojom mieste.“ Bruno pochopil, že niektorým vetám lepšie rozumieme, keď ich vezmeme vážne.",
  "vocab": [
   [
    "no solicitado",
    "nevyžiadaný",
    "Que nadie había pedido.",
    "Ktorý si nikto nepýtal."
   ],
   [
    "descansaría",
    "oddychoval by som",
    "Una posibilidad o algo posterior visto desde el pasado.",
    "Možnosť alebo neskorší dej videný z minulosti."
   ],
   [
    "cuando",
    "keď",
    "Relaciona una acción con un momento.",
    "Spája dej s časovým bodom."
   ]
  ],
  "questions": [
   [
    "En «El consejo no solicitado», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una respuesta literal transforma un consejo en participación.",
     "Se puede corregir sin humillar.",
     "Precisar una propuesta hace visible el alcance del acuerdo."
    ],
    0,
    "Celá scéna podporuje tento výklad: Doslovná odpoveď mení radu na spoluúčasť.",
    "El conjunto de la escena apoya esta lectura: Una respuesta literal transforma un consejo en participación."
   ],
   [
    "¿Qué significa «no solicitado» en «El consejo no solicitado»?",
    [
     "Un recorrido que cruza una extensión de agua.",
     "La parte principal que sostiene las ramas de un árbol.",
     "Que nadie había pedido."
    ],
    2,
    "V tomto kontexte má „no solicitado“ tento význam.",
    "En este contexto, «no solicitado» tiene este sentido."
   ],
   [
    "¿Qué aporta «descansaría» a la escena «El consejo no solicitado»?",
    [
     "Una petición de no hacer algo.",
     "Una posibilidad o algo posterior visto desde el pasado.",
     "Una situación, costumbre o acción en curso en el pasado."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El consejo no solicitado»?",
    [
     "El director agradeció el entusiasmo.",
     "Escribieron los cambios antes de votar.",
     "Bruno recibió un cuchillo y una cebolla."
    ],
    2,
    "Text to uvádza: Bruno dostal nôž a cibuľu.",
    "El texto lo indica: Bruno recibió un cuchillo y una cebolla."
   ]
  ],
  "discussion": [
   "Čo robí radu vhodnou?",
   "¿Qué hace que un consejo sea oportuno?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-097"
 },
 {
  "id": "reading-098",
  "topic": "humour",
  "title": [
   "Oznam o tichu",
   "El cartel del silencio"
  ],
  "tag": [
   "Humor, slová a každodennosť",
   "Humor, palabras y vida cotidiana"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "La biblioteca puso un cartel enorme pidiendo silencio. Todos se detenían a comentarlo. La bibliotecaria lo cambió por uno pequeño junto a la entrada. El mensaje dejó de ser el tema de conversación y empezó a cumplir su función.",
  "sk": "Knižnica vyvesila obrovský oznam žiadajúci ticho. Všetci sa pri ňom zastavovali a komentovali ho. Knihovníčka ho nahradila malým pri vchode. Odkaz prestal byť témou rozhovorov a začal plniť svoju funkciu.",
  "vocab": [
   [
    "detenerse",
    "zastaviť sa",
    "Interrumpir el movimiento o una actividad.",
    "Prerušiť pohyb alebo činnosť."
   ],
   [
    "se detenían",
    "zastavovali sa",
    "Una situación, costumbre o acción en curso en el pasado.",
    "Minulá situácia, zvyk alebo prebiehajúci dej."
   ],
   [
    "y",
    "a",
    "Une elementos o acciones.",
    "Spája prvky alebo činnosti."
   ]
  ],
  "questions": [
   [
    "En «El cartel del silencio», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una deformación puede expresar una identidad.",
     "Escuchar una preocupación puede preceder al consejo.",
     "Una forma llamativa puede distraer del propio mensaje."
    ],
    2,
    "Celá scéna podporuje tento výklad: Nápadná forma môže odvádzať od samotného odkazu.",
    "El conjunto de la escena apoya esta lectura: Una forma llamativa puede distraer del propio mensaje."
   ],
   [
    "¿Qué significa «detenerse» en «El cartel del silencio»?",
    [
     "Dificultar el paso o la actividad de otro.",
     "Interrumpir el movimiento o una actividad.",
     "Señalada para llamar la atención sobre ella."
    ],
    1,
    "V tomto kontexte má „detenerse“ tento význam.",
    "En este contexto, «detenerse» tiene este sentido."
   ],
   [
    "¿Qué aporta «se detenían» a la escena «El cartel del silencio»?",
    [
     "Una situación, costumbre o acción en curso en el pasado.",
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo."
    ],
    0,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «El cartel del silencio»?",
    [
     "La amiga pidió ser comprendida primero.",
     "El segundo cartel era más pequeño.",
     "El vecino había trabajado con madera."
    ],
    1,
    "Text to uvádza: Druhý oznam bol menší.",
    "El texto lo indica: El segundo cartel era más pequeño."
   ]
  ],
  "discussion": [
   "Kedy pokyn púta pozornosť natoľko, že prestane fungovať?",
   "¿Cuándo llama tanto la atención una instrucción que deja de funcionar?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-098"
 },
 {
  "id": "reading-099",
  "topic": "humour",
  "title": [
   "Veľmi samostatná rastlina",
   "Una planta muy independiente"
  ],
  "tag": [
   "Humor, slová a každodennosť",
   "Humor, palabras y vida cotidiana"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Al volver del viaje, Elena encontró todas las plantas sanas menos una. Era la única a la que había dejado un cartel: «No necesita cuidados». Su vecino se había tomado la frase demasiado en serio. Acordaron usar instrucciones menos filosóficas la próxima vez.",
  "sk": "Po návrate našla Elena zdravé všetky rastliny okrem jednej. Iba pri nej nechala oznam: „Nepotrebuje starostlivosť.“ Sused vzal vetu príliš vážne. Dohodli sa, že nabudúce použijú menej filozofické pokyny.",
  "vocab": [
   [
    "tomarse en serio",
    "brať vážne",
    "Interpretar algo como una indicación importante o literal.",
    "Vnímať niečo ako dôležitý alebo doslovný pokyn."
   ],
   [
    "había dejado",
    "nechala už predtým",
    "Algo anterior a otro punto pasado.",
    "Niečo skoršie než iný minulý bod."
   ],
   [
    "no",
    "nie",
    "Niega un contenido.",
    "Popiera obsah."
   ]
  ],
  "questions": [
   [
    "En «Una planta muy independiente», ¿qué idea resume mejor lo que ocurre?",
    [
     "Una misma palabra puede apoyarse en experiencias diferentes.",
     "Una instrucción absoluta puede producir una interpretación inesperada.",
     "Quitar un precio no elimina todas las barreras."
    ],
    1,
    "Celá scéna podporuje tento výklad: Absolútny pokyn môže vyvolať nečakaný výklad.",
    "El conjunto de la escena apoya esta lectura: Una instrucción absoluta puede producir una interpretación inesperada."
   ],
   [
    "¿Qué significa «tomarse en serio» en «Una planta muy independiente»?",
    [
     "Interpretar algo como una indicación importante o literal.",
     "Que ayuda a descubrir algo importante.",
     "La persona a la que pertenece algo."
    ],
    0,
    "V tomto kontexte má „tomarse en serio“ tento význam.",
    "En este contexto, «tomarse en serio» tiene este sentido."
   ],
   [
    "¿Qué aporta «había dejado» a la escena «Una planta muy independiente»?",
    [
     "Una previsión o promesa sobre después.",
     "Una petición de no hacer algo.",
     "Algo anterior a otro punto pasado."
    ],
    2,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «Una planta muy independiente»?",
    [
     "Solo una planta llevaba el cartel.",
     "Pocos vecinos conocían el horario.",
     "Los dos hablaban de libertad."
    ],
    0,
    "Text to uvádza: Iba jedna rastlina mala oznam.",
    "El texto lo indica: Solo una planta llevaba el cartel."
   ]
  ],
  "discussion": [
   "Ktoré výrazy používame absolútne bez takého zámeru?",
   "¿Qué expresiones usamos de forma absoluta sin querer hacerlo?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-099"
 },
 {
  "id": "reading-100",
  "topic": "humour",
  "title": [
   "Posledné slovo slovníka",
   "La última palabra del diccionario"
  ],
  "tag": [
   "Humor, slová a každodennosť",
   "Humor, palabras y vida cotidiana"
  ],
  "note": [
   "Pôvodný cvičný príbeh. Nejde o citát ani skutočnú udalosť.",
   "Relato original de práctica. No es una cita ni un suceso documentado."
  ],
  "es": "Tras buscar tres palabras, Luis cerró el diccionario satisfecho. Su amiga le preguntó si ya sabía todo el español. «No, pero he encontrado tres cosas que ayer no sabía». La broma dejó una medida del progreso menos espectacular y más justa.",
  "sk": "Po vyhľadaní troch slov Luis spokojne zatvoril slovník. Kamarátka sa opýtala, či už ovláda celú španielčinu. „Nie, ale našiel som tri veci, ktoré som včera nevedel.“ Vtip priniesol menej veľkolepú, no spravodlivejšiu mieru pokroku.",
  "vocab": [
   [
    "espectacular",
    "veľkolepý",
    "Que produce una impresión muy llamativa.",
    "Ktorý vyvoláva mimoriadne silný dojem."
   ],
   [
    "he encontrado",
    "našiel som",
    "Una acción anterior presentada como noticia o experiencia.",
    "Predchádzajúci dej podaný ako správa alebo skúsenosť."
   ],
   [
    "pero",
    "ale",
    "Introduce un contraste.",
    "Uvádza protiklad."
   ]
  ],
  "questions": [
   [
    "En «La última palabra del diccionario», ¿qué idea resume mejor lo que ocurre?",
    [
     "El aprendizaje puede medirse por descubrimientos concretos.",
     "Un asiento transforma un lugar de paso en encuentro.",
     "El silencio no confirma por sí solo el acuerdo."
    ],
    0,
    "Celá scéna podporuje tento výklad: Učenie možno merať konkrétnymi objavmi.",
    "El conjunto de la escena apoya esta lectura: El aprendizaje puede medirse por descubrimientos concretos."
   ],
   [
    "¿Qué significa «espectacular» en «La última palabra del diccionario»?",
    [
     "Que muestra poca cercanía emocional.",
     "Una herramienta utilizada para observar o medir.",
     "Que produce una impresión muy llamativa."
    ],
    2,
    "V tomto kontexte má „espectacular“ tento význam.",
    "En este contexto, «espectacular» tiene este sentido."
   ],
   [
    "¿Qué aporta «he encontrado» a la escena «La última palabra del diccionario»?",
    [
     "Una petición de no hacer algo.",
     "Una acción anterior presentada como noticia o experiencia.",
     "Una previsión o promesa sobre después."
    ],
    1,
    "Sledujte sloveso spolu s časovým bodom a zámerom vety.",
    "Observa el verbo junto con el momento y la intención de la frase."
   ],
   [
    "¿Qué detalle aparece en «La última palabra del diccionario»?",
    [
     "Las primeras sillas llegaron durante una fiesta.",
     "Las respuestas se recogieron sin nombres.",
     "Luis había consultado tres palabras."
    ],
    2,
    "Text to uvádza: Luis si vyhľadal tri slová.",
    "El texto lo indica: Luis había consultado tres palabras."
   ]
  ],
  "discussion": [
   "Ktorý malý objav ti priniesol veľké uspokojenie?",
   "¿Qué descubrimiento pequeño te ha dado una satisfacción grande?"
  ],
  "starter": [
   "Myslím si, že… / V texte vidím… / Iný výklad by bol…",
   "Creo que… / En el texto veo… / Otra interpretación sería…"
  ],
  "illustration": "story-100"
 }
];
readingTexts.push(...extraReadings);
const extraReadingTranslations=[["En «La carta sin destinatario», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „List bez adresáta“?"],["El grupo decide esperar antes de abrir una carta.","Skupina sa rozhodne počkať s otvorením listu."],["La calidad de una ruta no depende solo del tiempo.","Kvalita trasy nezávisí iba od času."],["Representar bien otra postura mejora el desacuerdo.","Verné podanie cudzieho postoja zlepšuje nesúhlas."],["¿Qué significa «destinatario» en «La carta sin destinatario»?","Čo znamená „destinatario“ v texte „List bez adresáta“?"],["El lugar o resultado al que se llega.","Miesto alebo výsledok, ku ktorému smerujeme."],["La relación que permite interpretar los valores de un gráfico.","Vzťah umožňujúci čítať hodnoty grafu."],["La persona a quien se dirige un mensaje.","Osoba, ktorej je správa určená."],["¿Qué aporta «había escrito» a la escena «La carta sin destinatario»?","Čo prináša tvar „había escrito“ do scény „List bez adresáta“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["¿Qué detalle aparece en «La carta sin destinatario»?","Ktorý detail sa nachádza v texte „List bez adresáta“?"],["Rosa tardó cinco minutos más.","Rose cesta trvala o päť minút dlhšie."],["La moderadora propuso explicar primero la opción contraria.","Moderátorka navrhla najprv vysvetliť opačnú možnosť."],["La carta estaba dentro de un diario.","List bol v denníku."],["En «Una luz en la costa», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Svetlo na pobreží“?"],["La incertidumbre puede llenarse con relatos distintos.","Neistotu možno vyplniť odlišnými príbehmi."],["Una prueba reversible facilita decidir.","Vratná skúška uľahčuje rozhodovanie."],["Una señal misteriosa tiene un motivo cotidiano.","Záhadný signál má každodenný dôvod."],["¿Qué significa «dejar encendido» en «Una luz en la costa»?","Čo znamená „dejar encendido“ v texte „Svetlo na pobreží“?"],["Que apoya una idea o una posibilidad.","Ktorý podporuje myšlienku alebo možnosť."],["Mantener una luz funcionando.","Ponechať svetlo zapnuté."],["Que parece real sin serlo necesariamente.","Ktorý sa javí skutočný, ale nemusí ním byť."],["¿Qué aporta «se encendía» a la escena «Una luz en la costa»?","Čo prináša tvar „se encendía“ do scény „Svetlo na pobreží“?"],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «Una luz en la costa»?","Ktorý detail sa nachádza v texte „Svetlo na pobreží“?"],["La prueba duraría una semana.","Skúška mala trvať týždeň."],["La lámpara ayudaba a una hermana.","Lampa pomáhala sestre."],["Había transcurrido media hora.","Uplynula polhodina."],["En «El nombre de la tormenta», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Meno búrky“?"],["Una buena pregunta puede cerrar mejor que una victoria.","Dobrá otázka môže uzavrieť rozhovor lepšie než víťazstvo."],["Julia busca información antes de valorar el riesgo.","Julia hľadá informácie pred posúdením rizika."],["Una molestia habitual también podía orientar.","Obvyklé obťažovanie mohlo zároveň usmerňovať."],["¿Qué significa «consultar» en «El nombre de la tormenta»?","Čo znamená „consultar“ v texte „Meno búrky“?"],["Buscar orientación en una fuente.","Hľadať usmernenie v informačnom zdroji."],["Que respeta el carácter de algo.","Ktorý rešpektuje povahu niečoho."],["Escribir algo para conservarlo y revisarlo.","Zapísať si niečo na uchovanie a kontrolu."],["¿Qué aporta «No llamemos» a la escena «El nombre de la tormenta»?","Čo prináša tvar „No llamemos“ do scény „Meno búrky“?"],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Un resultado ya terminado en un punto futuro.","Výsledok už dokončený v budúcom bode."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «El nombre de la tormenta»?","Ktorý detail sa nachádza v texte „Meno búrky“?"],["El mar seguía tranquilo.","More zostávalo pokojné."],["El reloj estuvo una semana sin sonar.","Hodiny týždeň neodbíjali."],["Decidieron qué investigar después.","Dohodli sa, čo budú skúmať ďalej."],["En «Dos mapas», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Dve mapy“?"],["Dos representaciones diferentes pueden tener usos distintos.","Dve odlišné zobrazenia môžu mať rôzne použitie."],["Una regla compartida puede funcionar sin una fila visible.","Spoločné pravidlo môže fungovať bez viditeľného radu."],["Explicar el problema con claridad ayuda a colaborar.","Jasné vysvetlenie problému pomáha spolupráci."],["¿Qué significa «cala» en «Dos mapas»?","Čo znamená „cala“ v texte „Dve mapy“?"],["Una interrupción breve que organiza el discurso.","Krátke prerušenie, ktoré usporadúva reč."],["Ser compatible con otras partes o datos.","Byť v súlade s inými časťami alebo údajmi."],["Una entrada pequeña del mar en la costa.","Malý morský záliv na pobreží."],["¿Qué aporta «tengan» a la escena «Dos mapas»?","Čo prináša tvar „tengan“ do scény „Dve mapy“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Un contenido ligado a un deseo, reacción o acción pendiente.","Obsah spojený so želaním, reakciou alebo očakávaným dejom."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["¿Qué detalle aparece en «Dos mapas»?","Ktorý detail sa nachádza v texte „Dve mapy“?"],["Una mujer indicó que era la última.","Žena naznačila, že je posledná."],["Los hoteles tenían nombres parecidos.","Hotely mali podobné názvy."],["Solo uno de los mapas mostraba una cala.","Iba jedna mapa zobrazovala zátoku."],["En «El silencio del puerto», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Ticho prístavu“?"],["La memoria del barrio puede dejar espacio al cambio.","Pamäť štvrte môže nechať priestor zmene."],["Un cambio de plan puede crear otro tipo de experiencia.","Zmena plánu môže vytvoriť iný druh zážitku."],["Elena corrige una impresión después de escuchar.","Elena po počúvaní opraví svoj prvý dojem."],["¿Qué significa «sin embargo» en «El silencio del puerto»?","Čo znamená „sin embargo“ v texte „Ticho prístavu“?"],["Indicaciones que explican cómo realizar una tarea.","Usmernenia vysvetľujúce postup úlohy."],["Introduce un contraste con lo anterior.","Uvádza protiklad k predchádzajúcemu tvrdeniu."],["Un comentario que presenta y valora una obra.","Komentár, ktorý predstavuje a hodnotí dielo."],["¿Qué aporta «Había confundido» a la escena «El silencio del puerto»?","Čo prináša tvar „Había confundido“ do scény „Ticho prístavu“?"],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «El silencio del puerto»?","Ktorý detail sa nachádza v texte „Ticho prístavu“?"],["La lluvia impidió la excursión.","Dážď znemožnil výlet."],["Elena llevaba una libreta.","Elena mala zápisník."],["Propusieron dejar una parte sin pintar.","Navrhli ponechať časť nenamaľovanú."],["En «La cuerda nueva», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Nové lano“?"],["Preguntar por un plato puede abrir una historia.","Otázka o jedle môže otvoriť príbeh."],["Una elección habitual se somete a comparación.","Obvyklá voľba sa podrobí porovnaniu."],["Una mejora debe considerar a usuarios diferentes.","Zlepšenie musí zohľadniť odlišných používateľov."],["¿Qué significa «fallar» en «La cuerda nueva»?","Čo znamená „fallar“ v texte „Nové lano“?"],["No cumplir la función esperada.","Nesplniť očakávanú funkciu."],["Despertar interés por algo que no se entiende del todo.","Vzbudzovať záujem o niečo nie celkom pochopené."],["Los límites dentro de los que algo sirve.","Hranice, v ktorých je niečo použiteľné."],["¿Qué aporta «ha fallado» a la escena «La cuerda nueva»?","Čo prináša tvar „ha fallado“ do scény „Nové lano“?"],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una acción anterior presentada como noticia o experiencia.","Predchádzajúci dej podaný ako správa alebo skúsenosť."],["¿Qué detalle aparece en «La cuerda nueva»?","Ktorý detail sa nachádza v texte „Nové lano“?"],["La cuerda nueva pesaba menos.","Nové lano vážilo menej."],["La nueva puerta requería más fuerza.","Nové dvere vyžadovali väčšiu silu."],["El camarero compartió un recuerdo.","Čašník sa podelil o spomienku."],["En «Una isla imaginada», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Predstavovaný ostrov“?"],["Un supuesto permite comparar prioridades.","Predstavovaná situácia umožňuje porovnať priority."],["Respetar un límite puede estimular la creatividad.","Rešpektovanie hranice môže podnietiť tvorivosť."],["Renunciar a cantidad permite prestar más atención.","Zníženie počtu umožňuje väčšiu pozornosť."],["¿Qué significa «preocupación» en «Una isla imaginada»?","Čo znamená „preocupación“ v texte „Predstavovaný ostrov“?"],["La sucesión principal de hechos de una historia.","Hlavná postupnosť udalostí príbehu."],["Un valor que resume un conjunto de cantidades.","Hodnota zhŕňajúca súbor veličín."],["Algo que ocupa la atención y causa inquietud.","Niečo, čo zamestnáva pozornosť a vyvoláva nepokoj."],["¿Qué aporta «llegáramos» a la escena «Una isla imaginada»?","Čo prináša tvar „llegáramos“ do scény „Predstavovaný ostrov“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una situación imaginada o ligada a un marco pasado.","Predstavovaná situácia alebo súvislosť s minulým rámcom."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["¿Qué detalle aparece en «Una isla imaginada»?","Ktorý detail sa nachádza v texte „Predstavovaný ostrov“?"],["La mesa dejó espacio para el tronco.","Stôl ponechal priestor pre kmeň."],["El plan inicial incluía cuatro pueblos.","Pôvodný plán zahŕňal štyri dediny."],["Una de las respuestas fue buscar sombra.","Jednou z odpovedí bolo hľadať tieň."],["En «El regreso previsto», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Plánovaný návrat“?"],["Un dibujo compartido cambia la forma de discutir.","Spoločný nákres mení spôsob diskusie."],["Nombres diferentes pueden señalar el mismo lugar.","Odlišné názvy môžu označovať rovnaké miesto."],["Pensar en una alternativa mejora un plan.","Premyslenie alternatívy zlepšuje plán."],["¿Qué significa «anochecer» en «El regreso previsto»?","Čo znamená „anochecer“ v texte „Plánovaný návrat“?"],["Cuidado al afirmar algo o actuar.","Obozretnosť pri tvrdení alebo konaní."],["El momento en que empieza la noche.","Chvíľa, keď sa začína noc."],["La posición que adopta el cuerpo.","Poloha, ktorú zaujíma telo."],["¿Qué aporta «habremos vuelto» a la escena «El regreso previsto»?","Čo prináša tvar „habremos vuelto“ do scény „Plánovaný návrat“?"],["Un resultado ya terminado en un punto futuro.","Výsledok už dokončený v budúcom bode."],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «El regreso previsto»?","Ktorý detail sa nachádza v texte „Plánovaný návrat“?"],["Una vecina aclaró la diferencia.","Susedka objasnila rozdiel."],["Lucía preguntó por un cambio de viento.","Lucía sa pýtala na zmenu vetra."],["Todos usaron el mismo papel.","Všetci použili ten istý papier."],["En «La fotografía torcida», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Naklonená fotografia“?"],["Una historia puede cambiar nuestra atención al paisaje.","Príbeh môže zmeniť pozornosť venovanú krajine."],["Un defecto visual puede conservar una experiencia.","Vizuálna chyba môže zachovať zážitok."],["La memoria de una persona conecta una dirección con su pasado.","Pamäť človeka spája adresu s jej minulosťou."],["¿Qué significa «torcido» en «La fotografía torcida»?","Čo znamená „torcido“ v texte „Naklonená fotografia“?"],["Que no sigue la posición recta esperada.","Ktorý nemá očakávanú rovnú polohu."],["El momento de separarse de alguien.","Chvíľa rozchodu alebo odchodu od niekoho."],["Buscar información hasta aclarar algo.","Hľadať informácie na objasnenie niečoho."],["¿Qué aporta «estaba» a la escena «La fotografía torcida»?","Čo prináša tvar „estaba“ do scény „Naklonená fotografia“?"],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["¿Qué detalle aparece en «La fotografía torcida»?","Ktorý detail sa nachádza v texte „Naklonená fotografia“?"],["Conservaron dos versiones de la fotografía.","Zachovali dve verzie fotografie."],["Una vecina reconoció el nombre del destinatario.","Susedka spoznala meno adresáta."],["Rosa buscó un puente al regresar.","Rosa pri návrate hľadala most."],["En «La voz de la radio», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Hlas z rádia“?"],["Comprender un mensaje exige reconocer su contexto.","Porozumenie správe si vyžaduje rozpoznanie kontextu."],["Repetir una prueba ayuda a valorar un resultado.","Opakovanie skúšky pomáha posúdiť výsledok."],["Prepararse también implica aceptar cierta incertidumbre.","Príprava znamená aj prijať určitú neistotu."],["¿Qué significa «travesía» en «La voz de la radio»?","Čo znamená „travesía“ v texte „Hlas z rádia“?"],["El tiempo transcurrido desde su origen.","Čas, ktorý uplynul od jeho vzniku."],["Evitar gastar un recurso innecesariamente.","Vyhnúť sa zbytočnému míňaniu zdroja."],["Un recorrido que cruza una extensión de agua.","Cesta cez vodnú plochu."],["¿Qué aporta «supieron» a la escena «La voz de la radio»?","Čo prináša tvar „supieron“ do scény „Hlas z rádia“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Un episodio de un relato pasado.","Epizóda minulého príbehu."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["¿Qué detalle aparece en «La voz de la radio»?","Ktorý detail sa nachádza v texte „Hlas z rádia“?"],["El equipo utilizó otro instrumento.","Tím použil iný prístroj."],["La maleta se estaba quedando sin espacio.","V kufri sa míňalo miesto."],["Comprobaron el canal antes de responder.","Pred odpoveďou overili kanál."],["En «La página doblada», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Zahnutá stránka“?"],["La presentación visual puede exagerar una diferencia.","Vizuálne zobrazenie môže zveličovať rozdiel."],["Dos recomendaciones pueden ser complementarias.","Dve odporúčania sa môžu dopĺňať."],["El final cambia la lectura de una frase anterior.","Záver mení čítanie skoršej vety."],["¿Qué significa «marcada» en «La página doblada»?","Čo znamená „marcada“ v texte „Zahnutá stránka“?"],["Modificar algo para que funcione de forma adecuada.","Upraviť niečo tak, aby správne fungovalo."],["Señalada para llamar la atención sobre ella.","Zvýraznená, aby pritiahla pozornosť."],["Un mensaje que informa de algo importante.","Správa, ktorá upozorňuje na niečo dôležité."],["¿Qué aporta «entendió» a la escena «La página doblada»?","Čo prináša tvar „entendió“ do scény „Zahnutá stránka“?"],["Un episodio de un relato pasado.","Epizóda minulého príbehu."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «La página doblada»?","Ktorý detail sa nachádza v texte „Zahnutá stránka“?"],["Elena visitó los dos puntos de vista.","Elena navštívila obe vyhliadkové miesta."],["El libro pertenecía a una biblioteca.","Kniha patrila knižnici."],["Julia añadió una escala.","Julia doplnila mierku."],["En «Un narrador demasiado seguro», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Príliš istý rozprávač“?"],["Un mensaje puede valer por el gesto y no por su rapidez.","Správa môže mať hodnotu pre gesto, nie rýchlosť."],["Los silencios hacen dudar de un narrador.","Mlčanie vyvoláva pochybnosti o rozprávačovi."],["Una explicación necesita saber qué podría cuestionarla.","Vysvetlenie potrebuje určiť, čo by ho mohlo spochybniť."],["¿Qué significa «revelador» en «Un narrador demasiado seguro»?","Čo znamená „revelador“ v texte „Príliš istý rozprávač“?"],["Que ayuda a descubrir algo importante.","Ktorý pomáha odhaliť niečo podstatné."],["El espacio donde actúan los intérpretes.","Priestor, kde vystupujú účinkujúci."],["Volver a incorporar algo que se había quitado.","Znovu zaradiť niečo, čo bolo odstránené."],["¿Qué aporta «fuera» a la escena «Un narrador demasiado seguro»?","Čo prináša tvar „fuera“ do scény „Príliš istý rozprávač“?"],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una situación imaginada o ligada a un marco pasado.","Predstavovaná situácia alebo súvislosť s minulým rámcom."],["¿Qué detalle aparece en «Un narrador demasiado seguro»?","Ktorý detail sa nachádza v texte „Príliš istý rozprávač“?"],["El narrador cambiaba de tema cuando hablaba su hermano.","Rozprávač menil tému, keď hovoril jeho brat."],["La profesora agradeció la pregunta.","Učiteľka poďakovala za otázku."],["La amiga puso la postal junto al escritorio.","Kamarátka položila pohľadnicu k stolu."],["En «La palabra que faltaba», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Chýbajúce slovo“?"],["La elección de una palabra modifica una relación.","Výber slova mení vzťah."],["Registrar una ausencia también puede aportar información.","Aj zaznamenanie neprítomnosti môže priniesť informáciu."],["Pedir orientación puede crear un contacto humano.","Žiadosť o usmernenie môže vytvoriť ľudský kontakt."],["¿Qué significa «distante» en «La palabra que faltaba»?","Čo znamená „distante“ v texte „Chýbajúce slovo“?"],["La práctica previa a una actuación.","Príprava pred verejným vystúpením."],["Ser suficiente para una necesidad.","Byť postačujúci pre určitú potrebu."],["Que muestra poca cercanía emocional.","Ktorý prejavuje malú citovú blízkosť."],["¿Qué aporta «usaban» a la escena «La palabra que faltaba»?","Čo prináša tvar „usaban“ do scény „Chýbajúce slovo“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["¿Qué detalle aparece en «La palabra que faltaba»?","Ktorý detail sa nachádza v texte „Chýbajúce slovo“?"],["Luis registraba días sin avistamientos.","Luis zaznamenával dni bez pozorovaných vtákov."],["El teléfono dejó de funcionar antes de la llegada.","Telefón prestal fungovať pred príchodom."],["Compararon dos traducciones.","Porovnávali dva preklady."],["En «Leer el final primero», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Najprv prečítať koniec“?"],["Una idea atractiva sigue necesitando pruebas.","Príťažlivá myšlienka naďalej potrebuje dôkazy."],["Una memoria parcial puede conservarse sin inventar el resto.","Čiastočnú spomienku možno uchovať bez vymýšľania zvyšku."],["Dos lectores valoran de forma distinta la sorpresa.","Dvaja čitatelia odlišne hodnotia prekvapenie."],["¿Qué significa «destino» en «Leer el final primero»?","Čo znamená „destino“ v texte „Najprv prečítať koniec“?"],["El momento de presentar un trabajo terminado.","Chvíľa predloženia dokončenej práce."],["El lugar o resultado al que se llega.","Miesto alebo výsledok, ku ktorému smerujeme."],["Una señal que deja el paso del tiempo o una acción.","Znak zanechaný časom alebo konaním."],["¿Qué aporta «leía» a la escena «Leer el final primero»?","Čo prináša tvar „leía“ do scény „Najprv prečítať koniec“?"],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «Leer el final primero»?","Ktorý detail sa nachádza v texte „Najprv prečítať koniec“?"],["Isabel recordó una luz sobre una mesa.","Isabel si spomenula na svetlo na stole."],["Pablo consultaba la última página.","Pablo si pozeral poslednú stránku."],["Ana organizó la información en dos columnas.","Ana usporiadala informácie do dvoch stĺpcov."],["En «El personaje antipático», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Nesympatická postava“?"],["Los recuerdos reflejan focos de atención diferentes.","Spomienky odrážajú odlišné zameranie pozornosti."],["El interés literario no depende de la simpatía.","Literárna zaujímavosť nezávisí od sympatie."],["Comparar exige revisar las condiciones iniciales.","Porovnanie si vyžaduje kontrolu počiatočných podmienok."],["¿Qué significa «aparente» en «El personaje antipático»?","Čo znamená „aparente“ v texte „Nesympatická postava“?"],["Que parece real sin serlo necesariamente.","Ktorý sa javí skutočný, ale nemusí ním byť."],["Una situación que daña la dignidad de alguien.","Situácia, ktorá poškodzuje dôstojnosť človeka."],["Realizar lo prometido dentro de las condiciones acordadas.","Vykonať sľúbené za dohodnutých podmienok."],["¿Qué aporta «gustaría» a la escena «El personaje antipático»?","Čo prináša tvar „gustaría“ do scény „Nesympatická postava“?"],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una posibilidad o algo posterior visto desde el pasado.","Možnosť alebo neskorší dej videný z minulosti."],["¿Qué detalle aparece en «El personaje antipático»?","Ktorý detail sa nachádza v texte „Nesympatická postava“?"],["Marta quería continuar la lectura.","Marta chcela pokračovať v čítaní."],["Solo un grupo podía ver el reloj.","Iba jedna skupina videla hodiny."],["Un amigo recordaba especialmente la comida.","Jeden priateľ si zvlášť pamätal jedlo."],["En «Un título prestado», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Požičaný názov“?"],["Una promesa atractiva puede representar mal un libro.","Príťažlivý prísľub môže knihu skresliť."],["Las excepciones pueden precisar una regla.","Výnimky môžu spresniť pravidlo."],["Una reparación puede añadir significado a un objeto.","Oprava môže predmetu pridať význam."],["¿Qué significa «fiel» en «Un título prestado»?","Čo znamená „fiel“ v texte „Požičaný názov“?"],["Una relación entre cosas que comparten rasgos.","Vzťah medzi vecami so spoločnými črtami."],["Decidir no conservar o perseguir algo.","Rozhodnúť sa niečo si neponechať alebo nesledovať."],["Que respeta el carácter de algo.","Ktorý rešpektuje povahu niečoho."],["¿Qué aporta «parecía» a la escena «Un título prestado»?","Čo prináša tvar „parecía“ do scény „Požičaný názov“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["¿Qué detalle aparece en «Un título prestado»?","Ktorý detail sa nachádza v texte „Požičaný názov“?"],["La colega empezó por el final del informe.","Kolegyňa začala koncom správy."],["Ana no quiso ocultar la reparación.","Ana nechcela zakryť opravu."],["La historia trataba de dos hermanas.","Príbeh bol o dvoch sestrách."],["En «La lectura en voz alta», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Čítanie nahlas“?"],["Una conclusión depende de a quién incluye.","Záver závisí od toho, koho zahŕňa."],["Elegir qué guardar puede dar sentido a un archivo.","Výber uloženého môže archívu dať zmysel."],["La voz puede descubrir un humor que pasa inadvertido.","Hlas môže odhaliť nepovšimnutý humor."],["¿Qué significa «pausa» en «La lectura en voz alta»?","Čo znamená „pausa“ v texte „Čítanie nahlas“?"],["Una expresión de reconocimiento positivo.","Vyjadrenie pozitívneho uznania."],["Una interrupción breve que organiza el discurso.","Krátke prerušenie, ktoré usporadúva reč."],["Algo que dificulta acceder o participar.","Niečo, čo sťažuje prístup alebo účasť."],["¿Qué aporta «hayas notado» a la escena «La lectura en voz alta»?","Čo prináša tvar „hayas notado“ do scény „Čítanie nahlas“?"],["Algo anterior dentro de una esperanza o reacción.","Skorší dej v nádeji alebo reakcii."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «La lectura en voz alta»?","Ktorý detail sa nachádza v texte „Čítanie nahlas“?"],["Pedro conservó una frase amable.","Pedro zachoval milú vetu."],["Luis no había detectado la broma al leer en silencio.","Luis pri tichom čítaní neodhalil vtip."],["Había personas que habían abandonado el proyecto.","Niektorí ľudia projekt opustili."],["En «La reseña breve», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Krátka recenzia“?"],["La práctica compartida aclara instrucciones imprecisas.","Spoločná prax objasňuje nepresné pokyny."],["Una valoración concreta ayuda más que una etiqueta.","Konkrétne hodnotenie pomáha viac než nálepka."],["Reconocer límites no equivale a carecer de conocimiento.","Priznať hranice neznamená nemať poznanie."],["¿Qué significa «reseña» en «La reseña breve»?","Čo znamená „reseña“ v texte „Krátka recenzia“?"],["Un comentario que presenta y valora una obra.","Komentár, ktorý predstavuje a hodnotí dielo."],["Permanecer en un lugar en vez de marcharse.","Ostať na mieste namiesto odchodu."],["Aparecer una idea o una situación.","Vzniknúť ako myšlienka alebo situácia."],["¿Qué aporta «se volvió» a la escena «La reseña breve»?","Čo prináša tvar „se volvió“ do scény „Krátka recenzia“?"],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Un episodio de un relato pasado.","Epizóda minulého príbehu."],["¿Qué detalle aparece en «La reseña breve»?","Ktorý detail sa nachádza v texte „Krátka recenzia“?"],["Elena sustituyó un adjetivo por ejemplos.","Elena nahradila prídavné meno príkladmi."],["La ponente presentó una explicación provisional.","Prednášajúca predstavila predbežné vysvetlenie."],["Laura cocinó con su tío.","Laura varila so strýkom."],["En «La nota al margen», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Poznámka na okraji“?"],["Una nota incompleta invita a proyectar interpretaciones.","Neúplná poznámka vyvoláva vlastné výklady."],["La pregunta orienta lo que observamos.","Otázka usmerňuje to, čo pozorujeme."],["No saber una fecha no elimina el valor de una imagen.","Neznalosť dátumu neodstraňuje hodnotu obrázka."],["¿Qué significa «intrigar» en «La nota al margen»?","Čo znamená „intrigar“ v texte „Poznámka na okraji“?"],["Proponer una opción que se considera conveniente.","Navrhovať možnosť považovanú za vhodnú."],["Una razón que cuestiona una propuesta.","Dôvod spochybňujúci návrh."],["Despertar interés por algo que no se entiende del todo.","Vzbudzovať záujem o niečo nie celkom pochopené."],["¿Qué aporta «había escrito» a la escena «La nota al margen»?","Čo prináša tvar „había escrito“ do scény „Poznámka na okraji“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["¿Qué detalle aparece en «La nota al margen»?","Ktorý detail sa nachádza v texte „Poznámka na okraji“?"],["Uno de los observadores contó las hojas.","Jeden z pozorovateľov spočítal listy."],["En la foto identificaron una ventana.","Na fotografii spoznali okno."],["La nota no explicaba el desacuerdo.","Poznámka nevysvetľovala nesúhlas."],["En «Una biblioteca pequeña», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Malá knižnica“?"],["Una reunión breve no siempre resuelve mejor.","Krátke stretnutie nemusí priniesť lepšie riešenie."],["Una explicación puede depender también del gesto y del sonido.","Vysvetlenie môže závisieť aj od gesta a zvuku."],["Las recomendaciones se centran en la experiencia de leer.","Odporúčania sa zameriavajú na čitateľský zážitok."],["¿Qué significa «argumento» en «Una biblioteca pequeña»?","Čo znamená „argumento“ v texte „Malá knižnica“?"],["La posición que se mantiene sobre una cuestión.","Stanovisko zaujímané k určitej otázke."],["La sucesión principal de hechos de una historia.","Hlavná postupnosť udalostí príbehu."],["Dentro de muy poco tiempo, según quien habla.","O veľmi krátky čas podľa hovoriaceho."],["¿Qué aporta «recomendaba» a la escena «Una biblioteca pequeña»?","Čo prináša tvar „recomendaba“ do scény „Malá knižnica“?"],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «Una biblioteca pequeña»?","Ktorý detail sa nachádza v texte „Malá knižnica“?"],["La grabación incluía el sonido de una suela.","Nahrávka obsahovala zvuk podrážky."],["Las recomendaciones se hacían los viernes.","Odporúčania zaznievali v piatok."],["La primera reunión duró diez minutos.","Prvé stretnutie trvalo desať minút."],["En «El banco del museo», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Lavička v múzeu“?"],["El tiempo puede volver significativo lo que parecía corriente.","Čas môže dodať význam zdanlivo obyčajnému."],["Observar a quienes miran abre otra perspectiva.","Pozorovanie divákov otvára ďalšiu perspektívu."],["Conocer lo antiguo no impide probar lo nuevo.","Poznanie starého nebráni skúšaniu nového."],["¿Qué significa «postura» en «El banco del museo»?","Čo znamená „postura“ v texte „Lavička v múzeu“?"],["La posición que adopta el cuerpo.","Poloha, ktorú zaujíma telo."],["Notar con deseo la ausencia de algo o alguien.","Pociťovať, že nám niečo alebo niekto chýba."],["Que se aparta de lo que ocurre normalmente.","Ktorý sa odlišuje od bežného diania."],["¿Qué aporta «acabó» a la escena «El banco del museo»?","Čo prináša tvar „acabó“ do scény „Lavička v múzeu“?"],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Un episodio de un relato pasado.","Epizóda minulého príbehu."],["¿Qué detalle aparece en «El banco del museo»?","Ktorý detail sa nachádza v texte „Lavička v múzeu“?"],["Nora dibujó a los visitantes.","Nora kreslila návštevníkov."],["El carpintero enseñó a ajustar un cepillo.","Stolár učil nastaviť hoblík."],["Sofía volvió al diario veinte años después.","Sofía sa k denníku vrátila o dvadsať rokov."],["En «La canción desconocida», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Neznáma pieseň“?"],["Una obra puede despertar recuerdos no previstos.","Dielo môže prebudiť neplánované spomienky."],["Mostrar dudas puede hacer un informe más claro.","Ukázanie pochybností môže správu sprehľadniť."],["Un nombre puede cambiar la relación con lo inacabado.","Názov môže zmeniť vzťah k nedokončenému."],["¿Qué significa «despedida» en «La canción desconocida»?","Čo znamená „despedida“ v texte „Neznáma pieseň“?"],["Personas colocadas siguiendo un orden.","Ľudia zoradení podľa určitého poradia."],["Mostrar como verdadero algo que no se sostiene realmente.","Tváriť sa, že niečo platí, hoci to tak nie je."],["El momento de separarse de alguien.","Chvíľa rozchodu alebo odchodu od niekoho."],["¿Qué aporta «había recordado» a la escena «La canción desconocida»?","Čo prináša tvar „había recordado“ do scény „Neznáma pieseň“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["¿Qué detalle aparece en «La canción desconocida»?","Ktorý detail sa nachádza v texte „Neznáma pieseň“?"],["Ana pidió recuperar parte de las discusiones.","Ana požiadala obnoviť časť diskusií."],["Miguel separó proyectos todavía interesantes de otros abandonados.","Miguel oddelil zaujímavé projekty od opustených."],["El músico no anunció el título.","Hudobník neoznámil názov."],["En «El cuadro sin cartel», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Obraz bez popisu“?"],["Una pregunta básica revela una rutina innecesaria.","Základná otázka odhaľuje zbytočnú rutinu."],["La procedencia de un relato forma parte de su sentido.","Pôvod rozprávania patrí k jeho významu."],["La falta de una etiqueta revela un prejuicio.","Chýbajúci popis odhalí predsudok."],["¿Qué significa «antigüedad» en «El cuadro sin cartel»?","Čo znamená „antigüedad“ v texte „Obraz bez popisu“?"],["Una previsión de los recursos y gastos disponibles.","Plán dostupných prostriedkov a výdavkov."],["El tiempo transcurrido desde su origen.","Čas, ktorý uplynul od jeho vzniku."],["Una muestra pública de reconocimiento.","Verejný prejav uznania."],["¿Qué aporta «discutían» a la escena «El cuadro sin cartel»?","Čo prináša tvar „discutían“ do scény „Obraz bez popisu“?"],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «El cuadro sin cartel»?","Ktorý detail sa nachádza v texte „Obraz bez popisu“?"],["La hermana corrigió la procedencia de la anécdota.","Sestra opravila pôvod príhody."],["El cuadro no tenía cartel.","Obraz nemal popis."],["Utilizaban tres formularios.","Používali tri formuláre."],["En «Una escultura tocada», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Socha na dotyk“?"],["Una contradicción permite cuestionar una rutina.","Rozpor umožňuje spochybniť rutinu."],["Una norma habitual no se aplica a todas las obras.","Bežné pravidlo neplatí pre všetky diela."],["El trabajo resuelto también necesita ser comunicado.","Aj vyriešenú prácu treba oznámiť."],["¿Qué significa «aviso» en «Una escultura tocada»?","Čo znamená „aviso“ v texte „Socha na dotyk“?"],["Un mensaje que informa de algo importante.","Správa, ktorá upozorňuje na niečo dôležité."],["De manera simultánea.","V tom istom čase."],["De forma cuidadosa, sin brusquedad.","Ohľaduplne, bez prudkosti."],["¿Qué aporta «No la toques» a la escena «Una escultura tocada»?","Čo prináša tvar „No la toques“ do scény „Socha na dotyk“?"],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Un resultado ya terminado en un punto futuro.","Výsledok už dokončený v budúcom bode."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «Una escultura tocada»?","Ktorý detail sa nachádza v texte „Socha na dotyk“?"],["La escultura estaba hecha para tocarla.","Socha bola určená na dotýkanie."],["Luis dejó una nota la siguiente vez.","Luis nabudúce zanechal poznámku."],["Nuria añadió una tarea para no cumplir la lista.","Nuria pridala úlohu nesplniť zoznam."],["En «La silla vacía», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Prázdna stolička“?"],["La espera también forma parte de la representación.","Aj čakanie je súčasťou predstavenia."],["Un plazo necesita considerar los recursos disponibles.","Termín musí zohľadniť dostupné zdroje."],["El uso inmediato no cuenta toda la historia de un objeto.","Okamžité použitie nevystihuje celý príbeh predmetu."],["¿Qué significa «escenario» en «La silla vacía»?","Čo znamená „escenario“ v texte „Prázdna stolička“?"],["La parte principal que sostiene las ramas de un árbol.","Hlavná časť stromu nesúca konáre."],["Una idea básica que orienta los juicios o actos.","Základná myšlienka usmerňujúca úsudky alebo konanie."],["El espacio donde actúan los intérpretes.","Priestor, kde vystupujú účinkujúci."],["¿Qué aporta «había comenzado» a la escena «La silla vacía»?","Čo prináša tvar „había comenzado“ do scény „Prázdna stolička“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["¿Qué detalle aparece en «La silla vacía»?","Ktorý detail sa nachádza v texte „Prázdna stolička“?"],["El plazo se amplió dos días.","Termín predĺžili o dva dni."],["El capítulo más largo trataba de la limpieza.","Najdlhšia kapitola bola o čistení."],["Había una sola silla en el escenario.","Na javisku bola jediná stolička."],["En «El ensayo abierto», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Otvorená skúška“?"],["Quitar algo puede mejorar el conjunto.","Odstránenie niečoho môže zlepšiť celok."],["Una broma puede señalar un exceso sin confrontación directa.","Vtip môže upozorniť na preháňanie bez priameho konfliktu."],["Conocer el esfuerzo cambia la percepción de la facilidad.","Poznanie úsilia mení vnímanie ľahkosti."],["¿Qué significa «ensayo» en «El ensayo abierto»?","Čo znamená „ensayo“ v texte „Otvorená skúška“?"],["Que presenta poca variación entre sus partes.","Ktorý má medzi časťami malé rozdiely."],["La práctica previa a una actuación.","Príprava pred verejným vystúpením."],["Dificultar el paso o la actividad de otro.","Sťažovať druhému priechod alebo činnosť."],["¿Qué aporta «habría parecido» a la escena «El ensayo abierto»?","Čo prináša tvar „habría parecido“ do scény „Otvorená skúška“?"],["Un resultado imaginado como ya realizado.","Výsledok predstavený ako už uskutočnený."],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «El ensayo abierto»?","Ktorý detail sa nachádza v texte „Otvorená skúška“?"],["El invitado llevaba cinco minutos hablando.","Hosť hovoril už päť minút."],["La pianista repitió el pasaje seis veces.","Klaviristka zopakovala úsek šesťkrát."],["Probaron una versión reducida.","Vyskúšali menšiu verziu."],["En «La restauración», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Obnova diela“?"],["Reírse de un error facilita reconocerlo.","Smiech z vlastnej chyby uľahčuje jej priznanie."],["Conservar no equivale siempre a renovar por completo.","Zachovanie nie je vždy úplná obnova."],["Una observación concreta convierte el elogio en aprendizaje.","Konkrétna poznámka mení pochvalu na učenie."],["¿Qué significa «huella» en «La restauración»?","Čo znamená „huella“ v texte „Obnova diela“?"],["Una señal que deja el paso del tiempo o una acción.","Znak zanechaný časom alebo konaním."],["La persona a la que pertenece algo.","Osoba, ktorej niečo patrí."],["La persona que organiza los turnos de una conversación.","Osoba usporadúvajúca priebeh rozhovoru."],["¿Qué aporta «iba a dejar» a la escena «La restauración»?","Čo prináša tvar „iba a dejar“ do scény „Obnova diela“?"],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Un plan o una intención, también vistos desde el pasado.","Plán alebo zámer aj z pohľadu minulosti."],["¿Qué detalle aparece en «La restauración»?","Ktorý detail sa nachádza v texte „Obnova diela“?"],["La restauradora no quería borrar toda la historia.","Reštaurátorka nechcela vymazať celú históriu."],["La observación se refería a una tabla.","Poznámka sa týkala tabuľky."],["Marta no recordaba su contraseña.","Marta si nepamätala heslo."],["En «Un aplauso fuera de tiempo», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Potlesk v nesprávnej chvíli“?"],["Se puede corregir sin humillar.","Opravovať sa dá bez ponižovania."],["Cambiar de contexto facilita una conexión inesperada.","Zmena prostredia uľahčuje nečakané prepojenie."],["Una misma preparación puede responder a motivos opuestos.","Rovnaká príprava môže reagovať na opačné dôvody."],["¿Qué significa «humillación» en «Un aplauso fuera de tiempo»?","Čo znamená „humillación“ v texte „Potlesk v nesprávnej chvíli“?"],["Una herramienta utilizada para observar o medir.","Pomôcka používaná na pozorovanie alebo meranie."],["Que puede deshacerse o cambiarse después.","Ktorý možno neskôr zrušiť alebo zmeniť."],["Una situación que daña la dignidad de alguien.","Situácia, ktorá poškodzuje dôstojnosť človeka."],["¿Qué aporta «acabara» a la escena «Un aplauso fuera de tiempo»?","Čo prináša tvar „acabara“ do scény „Potlesk v nesprávnej chvíli“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una situación imaginada o ligada a un marco pasado.","Predstavovaná situácia alebo súvislosť s minulým rámcom."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["¿Qué detalle aparece en «Un aplauso fuera de tiempo»?","Ktorý detail sa nachádza v texte „Potlesk v nesprávnej chvíli“?"],["El grupo regresó para comprobar la solución.","Skupina sa vrátila overiť riešenie."],["La amiga usaba el paraguas para buscar sombra.","Kamarátka používala dáždnik na tieň."],["El director agradeció el entusiasmo.","Dirigent poďakoval za nadšenie."],["En «El retrato del vecino», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Susedov portrét“?"],["La forma de participar puede ocultar o revelar desacuerdos.","Spôsob účasti môže nesúhlas skryť alebo odhaliť."],["Una preferencia inesperada deja en evidencia una discusión complicada.","Nečakaná voľba odhalí prehnane zložitú debatu."],["Una deformación puede expresar una identidad.","Zmenené proporcie môžu vyjadriť identitu."],["¿Qué significa «semejanza» en «El retrato del vecino»?","Čo znamená „semejanza“ v texte „Susedov portrét“?"],["Que pretende cerrar una cuestión.","Ktorý má uzavrieť otázku."],["Una relación entre cosas que comparten rasgos.","Vzťah medzi vecami so spoločnými črtami."],["La relación que permite interpretar los valores de un gráfico.","Vzťah umožňujúci čítať hodnoty grafu."],["¿Qué aporta «se reconoció» a la escena «El retrato del vecino»?","Čo prináša tvar „se reconoció“ do scény „Susedov portrét“?"],["Un episodio de un relato pasado.","Epizóda minulého príbehu."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «El retrato del vecino»?","Ktorý detail sa nachádza v texte „Susedov portrét“?"],["El gato eligió una caja vacía.","Mačka si vybrala prázdnu škatuľu."],["El vecino había trabajado con madera.","Sused pracoval s drevom."],["Recibieron tres objeciones por escrito.","Písomne dostali tri námietky."],["En «La entrada gratuita», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Bezplatný vstup“?"],["Una respuesta literal transforma un consejo en participación.","Doslovná odpoveď mení radu na spoluúčasť."],["Quitar un precio no elimina todas las barreras.","Odstránenie ceny neodstráni všetky prekážky."],["Cambiar de postura puede ser un resultado valioso.","Zmena postoja môže byť hodnotným výsledkom."],["¿Qué significa «barrera» en «La entrada gratuita»?","Čo znamená „barrera“ v texte „Bezplatný vstup“?"],["Algo que dificulta acceder o participar.","Niečo, čo sťažuje prístup alebo účasť."],["Que apoya una idea o una posibilidad.","Ktorý podporuje myšlienku alebo možnosť."],["Después de un intervalo de tiempo.","Po určitom časovom úseku."],["¿Qué aporta «esperaba» a la escena «La entrada gratuita»?","Čo prináša tvar „esperaba“ do scény „Bezplatný vstup“?"],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["¿Qué detalle aparece en «La entrada gratuita»?","Ktorý detail sa nachádza v texte „Bezplatný vstup“?"],["Pocos vecinos conocían el horario.","Málo susedov poznalo otváracie hodiny."],["Vera escuchó un ejemplo nuevo.","Vera počula nový príklad."],["Bruno recibió un cuchillo y una cebolla.","Bruno dostal nôž a cibuľu."],["En «La plaza sin bancos», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Námestie bez lavičiek“?"],["Un asiento transforma un lugar de paso en encuentro.","Sedenie mení priechodné miesto na miesto stretnutí."],["Un caso excepcional no representa necesariamente lo habitual.","Výnimočný prípad nemusí zastupovať bežnú situáciu."],["Una forma llamativa puede distraer del propio mensaje.","Nápadná forma môže odvádzať od samotného odkazu."],["¿Qué significa «quedarse» en «La plaza sin bancos»?","Čo znamená „quedarse“ v texte „Námestie bez lavičiek“?"],["Escribir algo para conservarlo y revisarlo.","Zapísať si niečo na uchovanie a kontrolu."],["La mujer a la que pertenece un negocio o una cosa.","Žena, ktorej patrí podnik alebo vec."],["Permanecer en un lugar en vez de marcharse.","Ostať na mieste namiesto odchodu."],["¿Qué aporta «cruzaban» a la escena «La plaza sin bancos»?","Čo prináša tvar „cruzaban“ do scény „Námestie bez lavičiek“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["¿Qué detalle aparece en «La plaza sin bancos»?","Ktorý detail sa nachádza v texte „Námestie bez lavičiek“?"],["Ana pidió pensar en un día corriente.","Ana požiadala predstaviť si obyčajný deň."],["El segundo cartel era más pequeño.","Druhý oznam bol menší."],["Las primeras sillas llegaron durante una fiesta.","Prvé stoličky priniesli počas slávnosti."],["En «El camino más corto», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Najkratšia cesta“?"],["Explicar una causa y asignar responsabilidad son tareas distintas.","Vysvetliť príčinu a určiť zodpovednosť sú odlišné úlohy."],["Una instrucción absoluta puede producir una interpretación inesperada.","Absolútny pokyn môže vyvolať nečakaný výklad."],["La calidad de una ruta no depende solo del tiempo.","Kvalita trasy nezávisí iba od času."],["¿Qué significa «aconsejar» en «El camino más corto»?","Čo znamená „aconsejar“ v texte „Najkratšia cesta“?"],["Tener un ingrediente como parte de un plato.","Mať surovinu ako súčasť jedla."],["Proponer una opción que se considera conveniente.","Navrhovať možnosť považovanú za vhodnú."],["Ser compatible con otras partes o datos.","Byť v súlade s inými časťami alebo údajmi."],["¿Qué aporta «eligió» a la escena «El camino más corto»?","Čo prináša tvar „eligió“ do scény „Najkratšia cesta“?"],["Un episodio de un relato pasado.","Epizóda minulého príbehu."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «El camino más corto»?","Ktorý detail sa nachádza v texte „Najkratšia cesta“?"],["Solo una planta llevaba el cartel.","Iba jedna rastlina mala oznam."],["Rosa tardó cinco minutos más.","Rose cesta trvala o päť minút dlhšie."],["Luis hablaba de la causa del error.","Luis hovoril o príčine chyby."],["En «La tienda cerrada», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Zatvorený obchod“?"],["El aprendizaje puede medirse por descubrimientos concretos.","Učenie možno merať konkrétnymi objavmi."],["La incertidumbre puede llenarse con relatos distintos.","Neistotu možno vyplniť odlišnými príbehmi."],["Precisar una propuesta hace visible el alcance del acuerdo.","Spresnenie návrhu ukáže skutočný rozsah dohody."],["¿Qué significa «enseguida» en «La tienda cerrada»?","Čo znamená „enseguida“ v texte „Zatvorený obchod“?"],["Dentro de muy poco tiempo, según quien habla.","O veľmi krátky čas podľa hovoriaceho."],["Indicaciones que explican cómo realizar una tarea.","Usmernenia vysvetľujúce postup úlohy."],["Los elementos que quedan fuera del primero o del grupo citado.","Prvky zostávajúce mimo prvého alebo spomenutého súboru."],["¿Qué aporta «había ocurrido» a la escena «La tienda cerrada»?","Čo prináša tvar „había ocurrido“ do scény „Zatvorený obchod“?"],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["¿Qué detalle aparece en «La tienda cerrada»?","Ktorý detail sa nachádza v texte „Zatvorený obchod“?"],["Había transcurrido media hora.","Uplynula polhodina."],["Escribieron los cambios antes de votar.","Pred hlasovaním spísali očakávané zmeny."],["Luis había consultado tres palabras.","Luis si vyhľadal tri slová."],["En «Un ruido conocido», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Známy zvuk“?"],["Una molestia habitual también podía orientar.","Obvyklé obťažovanie mohlo zároveň usmerňovať."],["Escuchar una preocupación puede preceder al consejo.","Vypočutie obavy môže predchádzať rade."],["El grupo decide esperar antes de abrir una carta.","Skupina sa rozhodne počkať s otvorením listu."],["¿Qué significa «echar de menos» en «Un ruido conocido»?","Čo znamená „echar de menos“ v texte „Známy zvuk“?"],["Los límites dentro de los que algo sirve.","Hranice, v ktorých je niečo použiteľné."],["Un texto visible que identifica o informa.","Viditeľný text označujúci alebo informujúci."],["Notar con deseo la ausencia de algo o alguien.","Pociťovať, že nám niečo alebo niekto chýba."],["¿Qué aporta «se quejaban» a la escena «Un ruido conocido»?","Čo prináša tvar „se quejaban“ do scény „Známy zvuk“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["¿Qué detalle aparece en «Un ruido conocido»?","Ktorý detail sa nachádza v texte „Známy zvuk“?"],["La amiga pidió ser comprendida primero.","Kamarátka najprv požiadala o porozumenie."],["La carta estaba dentro de un diario.","List bol v denníku."],["El reloj estuvo una semana sin sonar.","Hodiny týždeň neodbíjali."],["En «La cola invisible», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Neviditeľný rad“?"],["Una misma palabra puede apoyarse en experiencias diferentes.","Rovnaké slovo môže vychádzať z odlišných skúseností."],["Una señal misteriosa tiene un motivo cotidiano.","Záhadný signál má každodenný dôvod."],["Una regla compartida puede funcionar sin una fila visible.","Spoločné pravidlo môže fungovať bez viditeľného radu."],["¿Qué significa «fila» en «La cola invisible»?","Čo znamená „fila“ v texte „Neviditeľný rad“?"],["En una cantidad o intensidad muy pequeña.","Vo veľmi malom množstve alebo miere."],["Personas colocadas siguiendo un orden.","Ľudia zoradení podľa určitého poradia."],["Un valor que resume un conjunto de cantidades.","Hodnota zhŕňajúca súbor veličín."],["¿Qué aporta «levantó» a la escena «La cola invisible»?","Čo prináša tvar „levantó“ do scény „Neviditeľný rad“?"],["Un episodio de un relato pasado.","Epizóda minulého príbehu."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «La cola invisible»?","Ktorý detail sa nachádza v texte „Neviditeľný rad“?"],["La lámpara ayudaba a una hermana.","Lampa pomáhala sestre."],["Una mujer indicó que era la última.","Žena naznačila, že je posledná."],["Los dos hablaban de libertad.","Obaja hovorili o slobode."],["En «El mural del barrio», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Nástenná maľba v štvrti“?"],["Julia busca información antes de valorar el riesgo.","Julia hľadá informácie pred posúdením rizika."],["La memoria del barrio puede dejar espacio al cambio.","Pamäť štvrte môže nechať priestor zmene."],["El silencio no confirma por sí solo el acuerdo.","Mlčanie samo osebe nepotvrdzuje súhlas."],["¿Qué significa «homenaje» en «El mural del barrio»?","Čo znamená „homenaje“ v texte „Nástenná maľba v štvrti“?"],["Una muestra pública de reconocimiento.","Verejný prejav uznania."],["Cuidado al afirmar algo o actuar.","Obozretnosť pri tvrdení alebo konaní."],["Algo que ocurre sin haber sido previsto.","Niečo, čo sa stane bez predchádzajúceho plánovania."],["¿Qué aporta «mostraba» a la escena «El mural del barrio»?","Čo prináša tvar „mostraba“ do scény „Nástenná maľba v štvrti“?"],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["¿Qué detalle aparece en «El mural del barrio»?","Ktorý detail sa nachádza v texte „Nástenná maľba v štvrti“?"],["Propusieron dejar una parte sin pintar.","Navrhli ponechať časť nenamaľovanú."],["Las respuestas se recogieron sin nombres.","Odpovede zbierali bez mien."],["El mar seguía tranquilo.","More zostávalo pokojné."],["En «Una puerta pesada», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Ťažké dvere“?"],["Una mejora debe considerar a usuarios diferentes.","Zlepšenie musí zohľadniť odlišných používateľov."],["Representar bien otra postura mejora el desacuerdo.","Verné podanie cudzieho postoja zlepšuje nesúhlas."],["Dos representaciones diferentes pueden tener usos distintos.","Dve odlišné zobrazenia môžu mať rôzne použitie."],["¿Qué significa «a la vez» en «Una puerta pesada»?","Čo znamená „a la vez“ v texte „Ťažké dvere“?"],["Buscar información hasta aclarar algo.","Hľadať informácie na objasnenie niečoho."],["Desde una posición más elevada.","Z vyššie položeného miesta."],["De manera simultánea.","V tom istom čase."],["¿Qué aporta «habían cambiado» a la escena «Una puerta pesada»?","Čo prináša tvar „habían cambiado“ do scény „Ťažké dvere“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["¿Qué detalle aparece en «Una puerta pesada»?","Ktorý detail sa nachádza v texte „Ťažké dvere“?"],["La moderadora propuso explicar primero la opción contraria.","Moderátorka navrhla najprv vysvetliť opačnú možnosť."],["Solo uno de los mapas mostraba una cala.","Iba jedna mapa zobrazovala zátoku."],["La nueva puerta requería más fuerza.","Nové dvere vyžadovali väčšiu silu."],["En «El árbol y la mesa», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Strom a stôl“?"],["Una prueba reversible facilita decidir.","Vratná skúška uľahčuje rozhodovanie."],["Elena corrige una impresión después de escuchar.","Elena po počúvaní opraví svoj prvý dojem."],["Respetar un límite puede estimular la creatividad.","Rešpektovanie hranice môže podnietiť tvorivosť."],["¿Qué significa «tronco» en «El árbol y la mesa»?","Čo znamená „tronco“ v texte „Strom a stôl“?"],["Una acción que comunica una intención o un sentimiento.","Konanie vyjadrujúce zámer alebo pocit."],["La parte principal que sostiene las ramas de un árbol.","Hlavná časť stromu nesúca konáre."],["Evitar gastar un recurso innecesariamente.","Vyhnúť sa zbytočnému míňaniu zdroja."],["¿Qué aporta «seguiría» a la escena «El árbol y la mesa»?","Čo prináša tvar „seguiría“ do scény „Strom a stôl“?"],["Una posibilidad o algo posterior visto desde el pasado.","Možnosť alebo neskorší dej videný z minulosti."],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «El árbol y la mesa»?","Ktorý detail sa nachádza v texte „Strom a stôl“?"],["Elena llevaba una libreta.","Elena mala zápisník."],["La mesa dejó espacio para el tronco.","Stôl ponechal priestor pre kmeň."],["La prueba duraría una semana.","Skúška mala trvať týždeň."],["En «La esquina compartida», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Spoločný roh ulice“?"],["Una elección habitual se somete a comparación.","Obvyklá voľba sa podrobí porovnaniu."],["Un dibujo compartido cambia la forma de discutir.","Spoločný nákres mení spôsob diskusie."],["Una buena pregunta puede cerrar mejor que una victoria.","Dobrá otázka môže uzavrieť rozhovor lepšie než víťazstvo."],["¿Qué significa «estorbar» en «La esquina compartida»?","Čo znamená „estorbar“ v texte „Spoločný roh ulice“?"],["Dificultar el paso o la actividad de otro.","Sťažovať druhému priechod alebo činnosť."],["Modificar algo para que funcione de forma adecuada.","Upraviť niečo tak, aby správne fungovalo."],["Recorrer un espacio de un lado a otro.","Prejsť priestorom z jednej strany na druhú."],["¿Qué aporta «dibujaron» a la escena «La esquina compartida»?","Čo prináša tvar „dibujaron“ do scény „Spoločný roh ulice“?"],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Un episodio de un relato pasado.","Epizóda minulého príbehu."],["¿Qué detalle aparece en «La esquina compartida»?","Ktorý detail sa nachádza v texte „Spoločný roh ulice“?"],["Todos usaron el mismo papel.","Všetci použili ten istý papier."],["Decidieron qué investigar después.","Dohodli sa, čo budú skúmať ďalej."],["La cuerda nueva pesaba menos.","Nové lano vážilo menej."],["En «La dirección antigua», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Stará adresa“?"],["La memoria de una persona conecta una dirección con su pasado.","Pamäť človeka spája adresu s jej minulosťou."],["Explicar el problema con claridad ayuda a colaborar.","Jasné vysvetlenie problému pomáha spolupráci."],["Un supuesto permite comparar prioridades.","Predstavovaná situácia umožňuje porovnať priority."],["¿Qué significa «propietario» en «La dirección antigua»?","Čo znamená „propietario“ v texte „Stará adresa“?"],["Volver a incorporar algo que se había quitado.","Znovu zaradiť niečo, čo bolo odstránené."],["Sin escribir o completar el espacio.","Bez zapísania alebo vyplnenia miesta."],["La persona a la que pertenece algo.","Osoba, ktorej niečo patrí."],["¿Qué aporta «había cambiado» a la escena «La dirección antigua»?","Čo prináša tvar „había cambiado“ do scény „Stará adresa“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["¿Qué detalle aparece en «La dirección antigua»?","Ktorý detail sa nachádza v texte „Stará adresa“?"],["Los hoteles tenían nombres parecidos.","Hotely mali podobné názvy."],["Una de las respuestas fue buscar sombra.","Jednou z odpovedí bolo hľadať tieň."],["Una vecina reconoció el nombre del destinatario.","Susedka spoznala meno adresáta."],["En «La medida repetida», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Opakované meranie“?"],["Un cambio de plan puede crear otro tipo de experiencia.","Zmena plánu môže vytvoriť iný druh zážitku."],["Pensar en una alternativa mejora un plan.","Premyslenie alternatívy zlepšuje plán."],["Repetir una prueba ayuda a valorar un resultado.","Opakovanie skúšky pomáha posúdiť výsledok."],["¿Qué significa «instrumento» en «La medida repetida»?","Čo znamená „instrumento“ v texte „Opakované meranie“?"],["Contener algo como parte de un conjunto.","Obsahovať niečo ako súčasť celku."],["Una herramienta utilizada para observar o medir.","Pomôcka používaná na pozorovanie alebo meranie."],["Ser suficiente para una necesidad.","Byť postačujúci pre určitú potrebu."],["¿Qué aporta «repitió» a la escena «La medida repetida»?","Čo prináša tvar „repitió“ do scény „Opakované meranie“?"],["Un episodio de un relato pasado.","Epizóda minulého príbehu."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «La medida repetida»?","Ktorý detail sa nachádza v texte „Opakované meranie“?"],["Lucía preguntó por un cambio de viento.","Lucía sa pýtala na zmenu vetra."],["El equipo utilizó otro instrumento.","Tím použil iný prístroj."],["La lluvia impidió la excursión.","Dážď znemožnil výlet."],["En «El gráfico sin escala», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Graf bez mierky“?"],["Un defecto visual puede conservar una experiencia.","Vizuálna chyba môže zachovať zážitok."],["La presentación visual puede exagerar una diferencia.","Vizuálne zobrazenie môže zveličovať rozdiel."],["Preguntar por un plato puede abrir una historia.","Otázka o jedle môže otvoriť príbeh."],["¿Qué significa «escala» en «El gráfico sin escala»?","Čo znamená „escala“ v texte „Graf bez mierky“?"],["La relación que permite interpretar los valores de un gráfico.","Vzťah umožňujúci čítať hodnoty grafu."],["El momento de presentar un trabajo terminado.","Chvíľa predloženia dokončenej práce."],["Deshacerse de algo que ya no se conserva.","Zbaviť sa niečoho, čo už neuchovávame."],["¿Qué aporta «habían cambiado» a la escena «El gráfico sin escala»?","Čo prináša tvar „habían cambiado“ do scény „Graf bez mierky“?"],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["¿Qué detalle aparece en «El gráfico sin escala»?","Ktorý detail sa nachádza v texte „Graf bez mierky“?"],["Julia añadió una escala.","Julia doplnila mierku."],["El camarero compartió un recuerdo.","Čašník sa podelil o spomienku."],["Conservaron dos versiones de la fotografía.","Zachovali dve verzie fotografie."],["En «La pregunta incómoda», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Nepríjemná otázka“?"],["Una explicación necesita saber qué podría cuestionarla.","Vysvetlenie potrebuje určiť, čo by ho mohlo spochybniť."],["Renunciar a cantidad permite prestar más atención.","Zníženie počtu umožňuje väčšiu pozornosť."],["Comprender un mensaje exige reconocer su contexto.","Porozumenie správe si vyžaduje rozpoznanie kontextu."],["¿Qué significa «favorable» en «La pregunta incómoda»?","Čo znamená „favorable“ v texte „Nepríjemná otázka“?"],["Realizar lo prometido dentro de las condiciones acordadas.","Vykonať sľúbené za dohodnutých podmienok."],["Una reunión de cosas sin que siempre haya selección.","Zhromažďovanie vecí, nie vždy s výberom."],["Que apoya una idea o una posibilidad.","Ktorý podporuje myšlienku alebo možnosť."],["¿Qué aporta «Explicad» a la escena «La pregunta incómoda»?","Čo prináša tvar „Explicad“ do scény „Nepríjemná otázka“?"],["Un resultado ya terminado en un punto futuro.","Výsledok už dokončený v budúcom bode."],["Una invitación o instrucción afirmativa.","Kladná výzva alebo pokyn."],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["¿Qué detalle aparece en «La pregunta incómoda»?","Ktorý detail sa nachádza v texte „Nepríjemná otázka“?"],["El plan inicial incluía cuatro pueblos.","Pôvodný plán zahŕňal štyri dediny."],["Comprobaron el canal antes de responder.","Pred odpoveďou overili kanál."],["La profesora agradeció la pregunta.","Učiteľka poďakovala za otázku."],["En «El cuaderno de campo», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Terénny zápisník“?"],["Nombres diferentes pueden señalar el mismo lugar.","Odlišné názvy môžu označovať rovnaké miesto."],["El final cambia la lectura de una frase anterior.","Záver mení čítanie skoršej vety."],["Registrar una ausencia también puede aportar información.","Aj zaznamenanie neprítomnosti môže priniesť informáciu."],["¿Qué significa «anotar» en «El cuaderno de campo»?","Čo znamená „anotar“ v texte „Terénny zápisník“?"],["La forma en que se percibe una materia al tocarla.","Spôsob, akým látku vnímame pri dotyku."],["Escribir algo para conservarlo y revisarlo.","Zapísať si niečo na uchovanie a kontrolu."],["Decidir no conservar o perseguir algo.","Rozhodnúť sa niečo si neponechať alebo nesledovať."],["¿Qué aporta «anotaba» a la escena «El cuaderno de campo»?","Čo prináša tvar „anotaba“ do scény „Terénny zápisník“?"],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «El cuaderno de campo»?","Ktorý detail sa nachádza v texte „Terénny zápisník“?"],["El libro pertenecía a una biblioteca.","Kniha patrila knižnici."],["Luis registraba días sin avistamientos.","Luis zaznamenával dni bez pozorovaných vtákov."],["Una vecina aclaró la diferencia.","Susedka objasnila rozdiel."],["En «Una explicación demasiado elegante», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Príliš elegantné vysvetlenie“?"],["Los silencios hacen dudar de un narrador.","Mlčanie vyvoláva pochybnosti o rozprávačovi."],["Una idea atractiva sigue necesitando pruebas.","Príťažlivá myšlienka naďalej potrebuje dôkazy."],["Una historia puede cambiar nuestra atención al paisaje.","Príbeh môže zmeniť pozornosť venovanú krajine."],["¿Qué significa «encajar» en «Una explicación demasiado elegante»?","Čo znamená „encajar“ v texte „Príliš elegantné vysvetlenie“?"],["Ser compatible con otras partes o datos.","Byť v súlade s inými časťami alebo údajmi."],["Una expresión de reconocimiento positivo.","Vyjadrenie pozitívneho uznania."],["Identificar algo visto o conocido anteriormente.","Určiť niečo už videné alebo známe."],["¿Qué aporta «costaba» a la escena «Una explicación demasiado elegante»?","Čo prináša tvar „costaba“ do scény „Príliš elegantné vysvetlenie“?"],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["¿Qué detalle aparece en «Una explicación demasiado elegante»?","Ktorý detail sa nachádza v texte „Príliš elegantné vysvetlenie“?"],["Ana organizó la información en dos columnas.","Ana usporiadala informácie do dvoch stĺpcov."],["Rosa buscó un puente al regresar.","Rosa pri návrate hľadala most."],["El narrador cambiaba de tema cuando hablaba su hermano.","Rozprávač menil tému, keď hovoril jeho brat."],["En «El experimento del reloj», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Pokus s hodinami“?"],["Comparar exige revisar las condiciones iniciales.","Porovnanie si vyžaduje kontrolu počiatočných podmienok."],["Prepararse también implica aceptar cierta incertidumbre.","Príprava znamená aj prijať určitú neistotu."],["La elección de una palabra modifica una relación.","Výber slova mení vzťah."],["¿Qué significa «instrucciones» en «El experimento del reloj»?","Čo znamená „instrucciones“ v texte „Pokus s hodinami“?"],["Aparecer una idea o una situación.","Vzniknúť ako myšlienka alebo situácia."],["La parte inferior del calzado.","Spodná časť obuvi."],["Indicaciones que explican cómo realizar una tarea.","Usmernenia vysvetľujúce postup úlohy."],["¿Qué aporta «habían recibido» a la escena «El experimento del reloj»?","Čo prináša tvar „habían recibido“ do scény „Pokus s hodinami“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["¿Qué detalle aparece en «El experimento del reloj»?","Ktorý detail sa nachádza v texte „Pokus s hodinami“?"],["La maleta se estaba quedando sin espacio.","V kufri sa míňalo miesto."],["Compararon dos traducciones.","Porovnávali dva preklady."],["Solo un grupo podía ver el reloj.","Iba jedna skupina videla hodiny."],["En «La lista de excepciones», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Zoznam výnimiek“?"],["Dos recomendaciones pueden ser complementarias.","Dve odporúčania sa môžu dopĺňať."],["Dos lectores valoran de forma distinta la sorpresa.","Dvaja čitatelia odlišne hodnotia prekvapenie."],["Las excepciones pueden precisar una regla.","Výnimky môžu spresniť pravidlo."],["¿Qué significa «alcance» en «La lista de excepciones»?","Čo znamená „alcance“ v texte „Zoznam výnimiek“?"],["Lo que forma parte de los días habituales.","To, čo patrí k bežným dňom."],["Los límites dentro de los que algo sirve.","Hranice, v ktorých je niečo použiteľné."],["Una razón que cuestiona una propuesta.","Dôvod spochybňujúci návrh."],["¿Qué aporta «quería» a la escena «La lista de excepciones»?","Čo prináša tvar „quería“ do scény „Zoznam výnimiek“?"],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «La lista de excepciones»?","Ktorý detail sa nachádza v texte „Zoznam výnimiek“?"],["Pablo consultaba la última página.","Pablo si pozeral poslednú stránku."],["La colega empezó por el final del informe.","Kolegyňa začala koncom správy."],["Elena visitó los dos puntos de vista.","Elena navštívila obe vyhliadkové miesta."],["En «El dato que faltaba», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Chýbajúci údaj“?"],["El interés literario no depende de la simpatía.","Literárna zaujímavosť nezávisí od sympatie."],["Una conclusión depende de a quién incluye.","Záver závisí od toho, koho zahŕňa."],["Un mensaje puede valer por el gesto y no por su rapidez.","Správa môže mať hodnotu pre gesto, nie rýchlosť."],["¿Qué significa «promedio» en «El dato que faltaba»?","Čo znamená „promedio“ v texte „Chýbajúci údaj“?"],["Un valor que resume un conjunto de cantidades.","Hodnota zhŕňajúca súbor veličín."],["La posición que se mantiene sobre una cuestión.","Stanovisko zaujímané k určitej otázke."],["Que todavía espera atención o resolución.","Ktorý stále čaká na pozornosť alebo riešenie."],["¿Qué aporta «pidió» a la escena «El dato que faltaba»?","Čo prináša tvar „pidió“ do scény „Chýbajúci údaj“?"],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Un episodio de un relato pasado.","Epizóda minulého príbehu."],["¿Qué detalle aparece en «El dato que faltaba»?","Ktorý detail sa nachádza v texte „Chýbajúci údaj“?"],["Había personas que habían abandonado el proyecto.","Niektorí ľudia projekt opustili."],["La amiga puso la postal junto al escritorio.","Kamarátka položila pohľadnicu k stolu."],["Marta quería continuar la lectura.","Marta chcela pokračovať v čítaní."],["En «La respuesta provisional», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Predbežná odpoveď“?"],["Reconocer límites no equivale a carecer de conocimiento.","Priznať hranice neznamená nemať poznanie."],["Pedir orientación puede crear un contacto humano.","Žiadosť o usmernenie môže vytvoriť ľudský kontakt."],["Una promesa atractiva puede representar mal un libro.","Príťažlivý prísľub môže knihu skresliť."],["¿Qué significa «cautela» en «La respuesta provisional»?","Čo znamená „cautela“ v texte „Predbežná odpoveď“?"],["Que se aparta de lo que ocurre normalmente.","Ktorý sa odlišuje od bežného diania."],["El lugar o la persona de donde viene algo.","Miesto alebo osoba, odkiaľ niečo pochádza."],["Cuidado al afirmar algo o actuar.","Obozretnosť pri tvrdení alebo konaní."],["¿Qué aporta «sigue» a la escena «La respuesta provisional»?","Čo prináša tvar „sigue“ do scény „Predbežná odpoveď“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una situación presente o habitual.","Súčasná alebo obvyklá situácia."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["¿Qué detalle aparece en «La respuesta provisional»?","Ktorý detail sa nachádza v texte „Predbežná odpoveď“?"],["El teléfono dejó de funcionar antes de la llegada.","Telefón prestal fungovať pred príchodom."],["La historia trataba de dos hermanas.","Príbeh bol o dvoch sestrách."],["La ponente presentó una explicación provisional.","Prednášajúca predstavila predbežné vysvetlenie."],["En «Dos observadores», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Dvaja pozorovatelia“?"],["Una memoria parcial puede conservarse sin inventar el resto.","Čiastočnú spomienku možno uchovať bez vymýšľania zvyšku."],["La voz puede descubrir un humor que pasa inadvertido.","Hlas môže odhaliť nepovšimnutý humor."],["La pregunta orienta lo que observamos.","Otázka usmerňuje to, čo pozorujeme."],["¿Qué significa «averiguar» en «Dos observadores»?","Čo znamená „averiguar“ v texte „Dvaja pozorovatelia“?"],["La disminución de una preocupación o tensión.","Zmiernenie starosti alebo napätia."],["Buscar información hasta aclarar algo.","Hľadať informácie na objasnenie niečoho."],["Mostrar como verdadero algo que no se sostiene realmente.","Tváriť sa, že niečo platí, hoci to tak nie je."],["¿Qué aporta «habían empezado» a la escena «Dos observadores»?","Čo prináša tvar „habían empezado“ do scény „Dvaja pozorovatelia“?"],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «Dos observadores»?","Ktorý detail sa nachádza v texte „Dvaja pozorovatelia“?"],["Luis no había detectado la broma al leer en silencio.","Luis pri tichom čítaní neodhalil vtip."],["Uno de los observadores contó las hojas.","Jeden z pozorovateľov spočítal listy."],["Isabel recordó una luz sobre una mesa.","Isabel si spomenula na svetlo na stole."],["En «La reunión de diez minutos», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Desaťminútové stretnutie“?"],["Una valoración concreta ayuda más que una etiqueta.","Konkrétne hodnotenie pomáha viac než nálepka."],["Una reunión breve no siempre resuelve mejor.","Krátke stretnutie nemusí priniesť lepšie riešenie."],["Los recuerdos reflejan focos de atención diferentes.","Spomienky odrážajú odlišné zameranie pozornosti."],["¿Qué significa «ahorrar» en «La reunión de diez minutos»?","Čo znamená „ahorrar“ v texte „Desaťminútové stretnutie“?"],["Evitar gastar un recurso innecesariamente.","Vyhnúť sa zbytočnému míňaniu zdroja."],["Una previsión de los recursos y gastos disponibles.","Plán dostupných prostriedkov a výdavkov."],["Saber realizar algo con seguridad.","Vedieť niečo spoľahlivo vykonať."],["¿Qué aporta «enviaron» a la escena «La reunión de diez minutos»?","Čo prináša tvar „enviaron“ do scény „Desaťminútové stretnutie“?"],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Un episodio de un relato pasado.","Epizóda minulého príbehu."],["¿Qué detalle aparece en «La reunión de diez minutos»?","Ktorý detail sa nachádza v texte „Desaťminútové stretnutie“?"],["La primera reunión duró diez minutos.","Prvé stretnutie trvalo desať minút."],["Un amigo recordaba especialmente la comida.","Jeden priateľ si zvlášť pamätal jedlo."],["Elena sustituyó un adjetivo por ejemplos.","Elena nahradila prídavné meno príkladmi."],["En «La herramienta gastada», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Opotrebovaný nástroj“?"],["Conocer lo antiguo no impide probar lo nuevo.","Poznanie starého nebráni skúšaniu nového."],["Una reparación puede añadir significado a un objeto.","Oprava môže predmetu pridať význam."],["Una nota incompleta invita a proyectar interpretaciones.","Neúplná poznámka vyvoláva vlastné výklady."],["¿Qué significa «ajustar» en «La herramienta gastada»?","Čo znamená „ajustar“ v texte „Opotrebovaný nástroj“?"],["De forma cuidadosa, sin brusquedad.","Ohľaduplne, bez prudkosti."],["La parte inicial que prepara lo que sigue.","Počiatočná časť pripravujúca ďalší obsah."],["Modificar algo para que funcione de forma adecuada.","Upraviť niečo tak, aby správne fungovalo."],["¿Qué aporta «seguía» a la escena «La herramienta gastada»?","Čo prináša tvar „seguía“ do scény „Opotrebovaný nástroj“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["¿Qué detalle aparece en «La herramienta gastada»?","Ktorý detail sa nachádza v texte „Opotrebovaný nástroj“?"],["Ana no quiso ocultar la reparación.","Ana nechcela zakryť opravu."],["La nota no explicaba el desacuerdo.","Poznámka nevysvetľovala nesúhlas."],["El carpintero enseñó a ajustar un cepillo.","Stolár učil nastaviť hoblík."],["En «Un informe demasiado limpio», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Príliš uhladená správa“?"],["Elegir qué guardar puede dar sentido a un archivo.","Výber uloženého môže archívu dať zmysel."],["Las recomendaciones se centran en la experiencia de leer.","Odporúčania sa zameriavajú na čitateľský zážitok."],["Mostrar dudas puede hacer un informe más claro.","Ukázanie pochybností môže správu sprehľadniť."],["¿Qué significa «recuperar» en «Un informe demasiado limpio»?","Čo znamená „recuperar“ v texte „Príliš uhladená správa“?"],["Añade un caso que hace más llamativa una negación.","Pridáva prípad zdôrazňujúci záporné tvrdenie."],["Volver a incorporar algo que se había quitado.","Znovu zaradiť niečo, čo bolo odstránené."],["Una idea básica que orienta los juicios o actos.","Základná myšlienka usmerňujúca úsudky alebo konanie."],["¿Qué aporta «entendiera» a la escena «Un informe demasiado limpio»?","Čo prináša tvar „entendiera“ do scény „Príliš uhladená správa“?"],["Una situación imaginada o ligada a un marco pasado.","Predstavovaná situácia alebo súvislosť s minulým rámcom."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «Un informe demasiado limpio»?","Ktorý detail sa nachádza v texte „Príliš uhladená správa“?"],["Las recomendaciones se hacían los viernes.","Odporúčania zaznievali v piatok."],["Ana pidió recuperar parte de las discusiones.","Ana požiadala obnoviť časť diskusií."],["Pedro conservó una frase amable.","Pedro zachoval milú vetu."],["En «La pregunta del recién llegado», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Otázka nováčika“?"],["Observar a quienes miran abre otra perspectiva.","Pozorovanie divákov otvára ďalšiu perspektívu."],["Una pregunta básica revela una rutina innecesaria.","Základná otázka odhaľuje zbytočnú rutinu."],["La práctica compartida aclara instrucciones imprecisas.","Spoločná prax objasňuje nepresné pokyny."],["¿Qué significa «bastar» en «La pregunta del recién llegado»?","Čo znamená „bastar“ v texte „Otázka nováčika“?"],["Ser suficiente para una necesidad.","Byť postačujúci pre určitú potrebu."],["Que presenta poca variación entre sus partes.","Ktorý má medzi časťami malé rozdiely."],["Que se prepara para lo que puede ocurrir.","Ktorý sa pripravuje na možné udalosti."],["¿Qué aporta «repetían» a la escena «La pregunta del recién llegado»?","Čo prináša tvar „repetían“ do scény „Otázka nováčika“?"],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["¿Qué detalle aparece en «La pregunta del recién llegado»?","Ktorý detail sa nachádza v texte „Otázka nováčika“?"],["Utilizaban tres formularios.","Používali tri formuláre."],["Laura cocinó con su tío.","Laura varila so strýkom."],["Nora dibujó a los visitantes.","Nora kreslila návštevníkov."],["En «La corrección invisible», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Neviditeľná oprava“?"],["El trabajo resuelto también necesita ser comunicado.","Aj vyriešenú prácu treba oznámiť."],["No saber una fecha no elimina el valor de una imagen.","Neznalosť dátumu neodstraňuje hodnotu obrázka."],["Una obra puede despertar recuerdos no previstos.","Dielo môže prebudiť neplánované spomienky."],["¿Qué significa «entrega» en «La corrección invisible»?","Čo znamená „entrega“ v texte „Neviditeľná oprava“?"],["La persona que organiza los turnos de una conversación.","Osoba usporadúvajúca priebeh rozhovoru."],["La unión de piezas para formar un objeto.","Spájanie dielov do jedného predmetu."],["El momento de presentar un trabajo terminado.","Chvíľa predloženia dokončenej práce."],["¿Qué aporta «viera» a la escena «La corrección invisible»?","Čo prináša tvar „viera“ do scény „Neviditeľná oprava“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una situación imaginada o ligada a un marco pasado.","Predstavovaná situácia alebo súvislosť s minulým rámcom."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["¿Qué detalle aparece en «La corrección invisible»?","Ktorý detail sa nachádza v texte „Neviditeľná oprava“?"],["En la foto identificaron una ventana.","Na fotografii spoznali okno."],["El músico no anunció el título.","Hudobník neoznámil názov."],["Luis dejó una nota la siguiente vez.","Luis nabudúce zanechal poznámku."],["En «El plazo realista», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Realistický termín“?"],["Una explicación puede depender también del gesto y del sonido.","Vysvetlenie môže závisieť aj od gesta a zvuku."],["La falta de una etiqueta revela un prejuicio.","Chýbajúci popis odhalí predsudok."],["Un plazo necesita considerar los recursos disponibles.","Termín musí zohľadniť dostupné zdroje."],["¿Qué significa «cumplir» en «El plazo realista»?","Čo znamená „cumplir“ v texte „Realistický termín“?"],["Que nadie había pedido.","Ktorý si nikto nepýtal."],["Realizar lo prometido dentro de las condiciones acordadas.","Vykonať sľúbené za dohodnutých podmienok."],["Que puede deshacerse o cambiarse después.","Ktorý možno neskôr zrušiť alebo zmeniť."],["¿Qué aporta «tendremos» a la escena «El plazo realista»?","Čo prináša tvar „tendremos“ do scény „Realistický termín“?"],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «El plazo realista»?","Ktorý detail sa nachádza v texte „Realistický termín“?"],["El cuadro no tenía cartel.","Obraz nemal popis."],["El plazo se amplió dos días.","Termín predĺžili o dva dni."],["La grabación incluía el sonido de una suela.","Nahrávka obsahovala zvuk podrážky."],["En «Una buena renuncia», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Dobré vzdanie sa“?"],["Una norma habitual no se aplica a todas las obras.","Bežné pravidlo neplatí pre všetky diela."],["Quitar algo puede mejorar el conjunto.","Odstránenie niečoho môže zlepšiť celok."],["El tiempo puede volver significativo lo que parecía corriente.","Čas môže dodať význam zdanlivo obyčajnému."],["¿Qué significa «renunciar» en «Una buena renuncia»?","Čo znamená „renunciar“ v texte „Dobré vzdanie sa“?"],["Decidir no conservar o perseguir algo.","Rozhodnúť sa niečo si neponechať alebo nesledovať."],["Que pretende cerrar una cuestión.","Ktorý má uzavrieť otázku."],["Interrumpir el movimiento o una actividad.","Prerušiť pohyb alebo činnosť."],["¿Qué aporta «tuvieran» a la escena «Una buena renuncia»?","Čo prináša tvar „tuvieran“ do scény „Dobré vzdanie sa“?"],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una situación imaginada o ligada a un marco pasado.","Predstavovaná situácia alebo súvislosť s minulým rámcom."],["¿Qué detalle aparece en «Una buena renuncia»?","Ktorý detail sa nachádza v texte „Dobré vzdanie sa“?"],["Probaron una versión reducida.","Vyskúšali menšiu verziu."],["Sofía volvió al diario veinte años después.","Sofía sa k denníku vrátila o dvadsať rokov."],["La escultura estaba hecha para tocarla.","Socha bola určená na dotýkanie."],["En «El elogio concreto», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Konkrétna pochvala“?"],["Una observación concreta convierte el elogio en aprendizaje.","Konkrétna poznámka mení pochvalu na učenie."],["Un nombre puede cambiar la relación con lo inacabado.","Názov môže zmeniť vzťah k nedokončenému."],["La espera también forma parte de la representación.","Aj čakanie je súčasťou predstavenia."],["¿Qué significa «elogio» en «El elogio concreto»?","Čo znamená „elogio“ v texte „Konkrétna pochvala“?"],["Después de un intervalo de tiempo.","Po určitom časovom úseku."],["Interpretar algo como una indicación importante o literal.","Vnímať niečo ako dôležitý alebo doslovný pokyn."],["Una expresión de reconocimiento positivo.","Vyjadrenie pozitívneho uznania."],["¿Qué aporta «había aclarado» a la escena «El elogio concreto»?","Čo prináša tvar „había aclarado“ do scény „Konkrétna pochvala“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["¿Qué detalle aparece en «El elogio concreto»?","Ktorý detail sa nachádza v texte „Konkrétna pochvala“?"],["Miguel separó proyectos todavía interesantes de otros abandonados.","Miguel oddelil zaujímavé projekty od opustených."],["Había una sola silla en el escenario.","Na javisku bola jediná stolička."],["La observación se refería a una tabla.","Poznámka sa týkala tabuľky."],["En «La pausa compartida», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Spoločná prestávka“?"],["La procedencia de un relato forma parte de su sentido.","Pôvod rozprávania patrí k jeho významu."],["Conocer el esfuerzo cambia la percepción de la facilidad.","Poznanie úsilia mení vnímanie ľahkosti."],["Cambiar de contexto facilita una conexión inesperada.","Zmena prostredia uľahčuje nečakané prepojenie."],["¿Qué significa «surgir» en «La pausa compartida»?","Čo znamená „surgir“ v texte „Spoločná prestávka“?"],["Que produce una impresión muy llamativa.","Ktorý vyvoláva mimoriadne silný dojem."],["Aparecer una idea o una situación.","Vzniknúť ako myšlienka alebo situácia."],["La mujer a la que pertenece un negocio o una cosa.","Žena, ktorej patrí podnik alebo vec."],["¿Qué aporta «volvieron» a la escena «La pausa compartida»?","Čo prináša tvar „volvieron“ do scény „Spoločná prestávka“?"],["Un episodio de un relato pasado.","Epizóda minulého príbehu."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «La pausa compartida»?","Ktorý detail sa nachádza v texte „Spoločná prestávka“?"],["La pianista repitió el pasaje seis veces.","Klaviristka zopakovala úsek šesťkrát."],["El grupo regresó para comprobar la solución.","Skupina sa vrátila overiť riešenie."],["La hermana corrigió la procedencia de la anécdota.","Sestra opravila pôvod príhody."],["En «El desacuerdo escrito», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Písomný nesúhlas“?"],["Conservar no equivale siempre a renovar por completo.","Zachovanie nie je vždy úplná obnova."],["La forma de participar puede ocultar o revelar desacuerdos.","Spôsob účasti môže nesúhlas skryť alebo odhaliť."],["Una contradicción permite cuestionar una rutina.","Rozpor umožňuje spochybniť rutinu."],["¿Qué significa «objeción» en «El desacuerdo escrito»?","Čo znamená „objeción“ v texte „Písomný nesúhlas“?"],["Una razón que cuestiona una propuesta.","Dôvod spochybňujúci návrh."],["Tener un ingrediente como parte de un plato.","Mať surovinu ako súčasť jedla."],["La persona a quien se dirige un mensaje.","Osoba, ktorej je správa určená."],["¿Qué aporta «habían cambiado» a la escena «El desacuerdo escrito»?","Čo prináša tvar „habían cambiado“ do scény „Písomný nesúhlas“?"],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["¿Qué detalle aparece en «El desacuerdo escrito»?","Ktorý detail sa nachádza v texte „Písomný nesúhlas“?"],["Recibieron tres objeciones por escrito.","Písomne dostali tri námietky."],["Nuria añadió una tarea para no cumplir la lista.","Nuria pridala úlohu nesplniť zoznam."],["La restauradora no quería borrar toda la historia.","Reštaurátorka nechcela vymazať celú históriu."],["En «Cambiar de opinión», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Zmeniť názor“?"],["Cambiar de postura puede ser un resultado valioso.","Zmena postoja môže byť hodnotným výsledkom."],["El uso inmediato no cuenta toda la historia de un objeto.","Okamžité použitie nevystihuje celý príbeh predmetu."],["Se puede corregir sin humillar.","Opravovať sa dá bez ponižovania."],["¿Qué significa «postura» en «Cambiar de opinión»?","Čo znamená „postura“ v texte „Zmeniť názor“?"],["Los elementos que quedan fuera del primero o del grupo citado.","Prvky zostávajúce mimo prvého alebo spomenutého súboru."],["Mantener una luz funcionando.","Ponechať svetlo zapnuté."],["La posición que se mantiene sobre una cuestión.","Stanovisko zaujímané k určitej otázke."],["¿Qué aporta «pudiera» a la escena «Cambiar de opinión»?","Čo prináša tvar „pudiera“ do scény „Zmeniť názor“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una situación imaginada o ligada a un marco pasado.","Predstavovaná situácia alebo súvislosť s minulým rámcom."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["¿Qué detalle aparece en «Cambiar de opinión»?","Ktorý detail sa nachádza v texte „Zmeniť názor“?"],["El capítulo más largo trataba de la limpieza.","Najdlhšia kapitola bola o čistení."],["El director agradeció el entusiasmo.","Dirigent poďakoval za nadšenie."],["Vera escuchó un ejemplo nuevo.","Vera počula nový príklad."],["En «El ejemplo extremo», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Krajný príklad“?"],["Una broma puede señalar un exceso sin confrontación directa.","Vtip môže upozorniť na preháňanie bez priameho konfliktu."],["Una deformación puede expresar una identidad.","Zmenené proporcie môžu vyjadriť identitu."],["Un caso excepcional no representa necesariamente lo habitual.","Výnimočný prípad nemusí zastupovať bežnú situáciu."],["¿Qué significa «excepcional» en «El ejemplo extremo»?","Čo znamená „excepcional“ v texte „Krajný príklad“?"],["Buscar orientación en una fuente.","Hľadať usmernenie v informačnom zdroji."],["Que se aparta de lo que ocurre normalmente.","Ktorý sa odlišuje od bežného diania."],["Un texto visible que identifica o informa.","Viditeľný text označujúci alebo informujúci."],["¿Qué aporta «fuera» a la escena «El ejemplo extremo»?","Čo prináša tvar „fuera“ do scény „Krajný príklad“?"],["Una situación imaginada o ligada a un marco pasado.","Predstavovaná situácia alebo súvislosť s minulým rámcom."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «El ejemplo extremo»?","Ktorý detail sa nachádza v texte „Krajný príklad“?"],["El vecino había trabajado con madera.","Sused pracoval s drevom."],["Ana pidió pensar en un día corriente.","Ana požiadala predstaviť si obyčajný deň."],["El invitado llevaba cinco minutos hablando.","Hosť hovoril už päť minút."],["En «Dos preguntas distintas», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Dve odlišné otázky“?"],["Quitar un precio no elimina todas las barreras.","Odstránenie ceny neodstráni všetky prekážky."],["Explicar una causa y asignar responsabilidad son tareas distintas.","Vysvetliť príčinu a určiť zodpovednosť sú odlišné úlohy."],["Reírse de un error facilita reconocerlo.","Smiech z vlastnej chyby uľahčuje jej priznanie."],["¿Qué significa «fingir» en «Dos preguntas distintas»?","Čo znamená „fingir“ v texte „Dve odlišné otázky“?"],["Mostrar como verdadero algo que no se sostiene realmente.","Tváriť sa, že niečo platí, hoci to tak nie je."],["En una cantidad o intensidad muy pequeña.","Vo veľmi malom množstve alebo miere."],["Una entrada pequeña del mar en la costa.","Malý morský záliv na pobreží."],["¿Qué aporta «había ocurrido» a la escena «Dos preguntas distintas»?","Čo prináša tvar „había ocurrido“ do scény „Dve odlišné otázky“?"],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["¿Qué detalle aparece en «Dos preguntas distintas»?","Ktorý detail sa nachádza v texte „Dve odlišné otázky“?"],["Luis hablaba de la causa del error.","Luis hovoril o príčine chyby."],["Marta no recordaba su contraseña.","Marta si nepamätala heslo."],["Pocos vecinos conocían el horario.","Málo susedov poznalo otváracie hodiny."],["En «El acuerdo incompleto», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Neúplná dohoda“?"],["Precisar una propuesta hace visible el alcance del acuerdo.","Spresnenie návrhu ukáže skutočný rozsah dohody."],["Una misma preparación puede responder a motivos opuestos.","Rovnaká príprava môže reagovať na opačné dôvody."],["Un asiento transforma un lugar de paso en encuentro.","Sedenie mení priechodné miesto na miesto stretnutí."],["¿Qué significa «presupuesto» en «El acuerdo incompleto»?","Čo znamená „presupuesto“ v texte „Neúplná dohoda“?"],["Algo que ocurre sin haber sido previsto.","Niečo, čo sa stane bez predchádzajúceho plánovania."],["Introduce un contraste con lo anterior.","Uvádza protiklad k predchádzajúcemu tvrdeniu."],["Una previsión de los recursos y gastos disponibles.","Plán dostupných prostriedkov a výdavkov."],["¿Qué aporta «esperaban» a la escena «El acuerdo incompleto»?","Čo prináša tvar „esperaban“ do scény „Neúplná dohoda“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["¿Qué detalle aparece en «El acuerdo incompleto»?","Ktorý detail sa nachádza v texte „Neúplná dohoda“?"],["La amiga usaba el paraguas para buscar sombra.","Kamarátka používala dáždnik na tieň."],["Las primeras sillas llegaron durante una fiesta.","Prvé stoličky priniesli počas slávnosti."],["Escribieron los cambios antes de votar.","Pred hlasovaním spísali očakávané zmeny."],["En «La pregunta antes del consejo», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Otázka pred radou“?"],["Una preferencia inesperada deja en evidencia una discusión complicada.","Nečakaná voľba odhalí prehnane zložitú debatu."],["La calidad de una ruta no depende solo del tiempo.","Kvalita trasy nezávisí iba od času."],["Escuchar una preocupación puede preceder al consejo.","Vypočutie obavy môže predchádzať rade."],["¿Qué significa «con suavidad» en «La pregunta antes del consejo»?","Čo znamená „con suavidad“ v texte „Otázka pred radou“?"],["No cumplir la función esperada.","Nesplniť očakávanú funkciu."],["De forma cuidadosa, sin brusquedad.","Ohľaduplne, bez prudkosti."],["Desde una posición más elevada.","Z vyššie položeného miesta."],["¿Qué aporta «entiendas» a la escena «La pregunta antes del consejo»?","Čo prináša tvar „entiendas“ do scény „Otázka pred radou“?"],["Un contenido ligado a un deseo, reacción o acción pendiente.","Obsah spojený so želaním, reakciou alebo očakávaným dejom."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «La pregunta antes del consejo»?","Ktorý detail sa nachádza v texte „Otázka pred radou“?"],["Rosa tardó cinco minutos más.","Rose cesta trvala o päť minút dlhšie."],["La amiga pidió ser comprendida primero.","Kamarátka najprv požiadala o porozumenie."],["El gato eligió una caja vacía.","Mačka si vybrala prázdnu škatuľu."],["En «Una palabra compartida», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Spoločné slovo“?"],["La incertidumbre puede llenarse con relatos distintos.","Neistotu možno vyplniť odlišnými príbehmi."],["Una misma palabra puede apoyarse en experiencias diferentes.","Rovnaké slovo môže vychádzať z odlišných skúseností."],["Una respuesta literal transforma un consejo en participación.","Doslovná odpoveď mení radu na spoluúčasť."],["¿Qué significa «principio» en «Una palabra compartida»?","Čo znamená „principio“ v texte „Spoločné slovo“?"],["Una idea básica que orienta los juicios o actos.","Základná myšlienka usmerňujúca úsudky alebo konanie."],["Una acción que comunica una intención o un sentimiento.","Konanie vyjadrujúce zámer alebo pocit."],["Algo que ocupa la atención y causa inquietud.","Niečo, čo zamestnáva pozornosť a vyvoláva nepokoj."],["¿Qué aporta «defendían» a la escena «Una palabra compartida»?","Čo prináša tvar „defendían“ do scény „Spoločné slovo“?"],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["¿Qué detalle aparece en «Una palabra compartida»?","Ktorý detail sa nachádza v texte „Spoločné slovo“?"],["Los dos hablaban de libertad.","Obaja hovorili o slobode."],["Bruno recibió un cuchillo y una cebolla.","Bruno dostal nôž a cibuľu."],["Había transcurrido media hora.","Uplynula polhodina."],["En «La mayoría silenciosa», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Mlčiaca väčšina“?"],["El silencio no confirma por sí solo el acuerdo.","Mlčanie samo osebe nepotvrdzuje súhlas."],["Una forma llamativa puede distraer del propio mensaje.","Nápadná forma môže odvádzať od samotného odkazu."],["Una molestia habitual también podía orientar.","Obvyklé obťažovanie mohlo zároveň usmerňovať."],["¿Qué significa «uniforme» en «La mayoría silenciosa»?","Čo znamená „uniforme“ v texte „Mlčiaca väčšina“?"],["Recorrer un espacio de un lado a otro.","Prejsť priestorom z jednej strany na druhú."],["El momento en que empieza la noche.","Chvíľa, keď sa začína noc."],["Que presenta poca variación entre sus partes.","Ktorý má medzi časťami malé rozdiely."],["¿Qué aporta «habían apoyado» a la escena «La mayoría silenciosa»?","Čo prináša tvar „habían apoyado“ do scény „Mlčiaca väčšina“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["¿Qué detalle aparece en «La mayoría silenciosa»?","Ktorý detail sa nachádza v texte „Mlčiaca väčšina“?"],["El segundo cartel era más pequeño.","Druhý oznam bol menší."],["El reloj estuvo una semana sin sonar.","Hodiny týždeň neodbíjali."],["Las respuestas se recogieron sin nombres.","Odpovede zbierali bez mien."],["En «Defender la otra opción», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Obhájiť druhú možnosť“?"],["Una instrucción absoluta puede producir una interpretación inesperada.","Absolútny pokyn môže vyvolať nečakaný výklad."],["Una regla compartida puede funcionar sin una fila visible.","Spoločné pravidlo môže fungovať bez viditeľného radu."],["Representar bien otra postura mejora el desacuerdo.","Verné podanie cudzieho postoja zlepšuje nesúhlas."],["¿Qué significa «moderadora» en «Defender la otra opción»?","Čo znamená „moderadora“ v texte „Obhájiť druhú možnosť“?"],["Que no sigue la posición recta esperada.","Ktorý nemá očakávanú rovnú polohu."],["La persona que organiza los turnos de una conversación.","Osoba usporadúvajúca priebeh rozhovoru."],["Sin escribir o completar el espacio.","Bez zapísania alebo vyplnenia miesta."],["¿Qué aporta «explicara» a la escena «Defender la otra opción»?","Čo prináša tvar „explicara“ do scény „Obhájiť druhú možnosť“?"],["Una situación imaginada o ligada a un marco pasado.","Predstavovaná situácia alebo súvislosť s minulým rámcom."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «Defender la otra opción»?","Ktorý detail sa nachádza v texte „Obhájiť druhú možnosť“?"],["Una mujer indicó que era la última.","Žena naznačila, že je posledná."],["La moderadora propuso explicar primero la opción contraria.","Moderátorka navrhla najprv vysvetliť opačnú možnosť."],["Solo una planta llevaba el cartel.","Iba jedna rastlina mala oznam."],["En «La decisión reversible», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Vratné rozhodnutie“?"],["La memoria del barrio puede dejar espacio al cambio.","Pamäť štvrte môže nechať priestor zmene."],["Una prueba reversible facilita decidir.","Vratná skúška uľahčuje rozhodovanie."],["El aprendizaje puede medirse por descubrimientos concretos.","Učenie možno merať konkrétnymi objavmi."],["¿Qué significa «reversible» en «La decisión reversible»?","Čo znamená „reversible“ v texte „Vratné rozhodnutie“?"],["Que puede deshacerse o cambiarse después.","Ktorý možno neskôr zrušiť alebo zmeniť."],["Contener algo como parte de un conjunto.","Obsahovať niečo ako súčasť celku."],["Un recorrido que cruza una extensión de agua.","Cesta cez vodnú plochu."],["¿Qué aporta «podrían» a la escena «La decisión reversible»?","Čo prináša tvar „podrían“ do scény „Vratné rozhodnutie“?"],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una posibilidad o algo posterior visto desde el pasado.","Možnosť alebo neskorší dej videný z minulosti."],["¿Qué detalle aparece en «La decisión reversible»?","Ktorý detail sa nachádza v texte „Vratné rozhodnutie“?"],["La prueba duraría una semana.","Skúška mala trvať týždeň."],["Luis había consultado tres palabras.","Luis si vyhľadal tri slová."],["Propusieron dejar una parte sin pintar.","Navrhli ponechať časť nenamaľovanú."],["En «El último turno», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Posledné slovo“?"],["Una buena pregunta puede cerrar mejor que una victoria.","Dobrá otázka môže uzavrieť rozhovor lepšie než víťazstvo."],["El grupo decide esperar antes de abrir una carta.","Skupina sa rozhodne počkať s otvorením listu."],["Una mejora debe considerar a usuarios diferentes.","Zlepšenie musí zohľadniť odlišných používateľov."],["¿Qué significa «definitiva» en «El último turno»?","Čo znamená „definitiva“ v texte „Posledné slovo“?"],["Deshacerse de algo que ya no se conserva.","Zbaviť sa niečoho, čo už neuchovávame."],["Señalada para llamar la atención sobre ella.","Zvýraznená, aby pritiahla pozornosť."],["Que pretende cerrar una cuestión.","Ktorý má uzavrieť otázku."],["¿Qué aporta «consideraran» a la escena «El último turno»?","Čo prináša tvar „consideraran“ do scény „Posledné slovo“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una situación imaginada o ligada a un marco pasado.","Predstavovaná situácia alebo súvislosť s minulým rámcom."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["¿Qué detalle aparece en «El último turno»?","Ktorý detail sa nachádza v texte „Posledné slovo“?"],["La carta estaba dentro de un diario.","List bol v denníku."],["La nueva puerta requería más fuerza.","Nové dvere vyžadovali väčšiu silu."],["Decidieron qué investigar después.","Dohodli sa, čo budú skúmať ďalej."],["En «El hotel equivocado», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Nesprávny hotel“?"],["Una señal misteriosa tiene un motivo cotidiano.","Záhadný signál má každodenný dôvod."],["Respetar un límite puede estimular la creatividad.","Rešpektovanie hranice môže podnietiť tvorivosť."],["Explicar el problema con claridad ayuda a colaborar.","Jasné vysvetlenie problému pomáha spolupráci."],["¿Qué significa «al cabo de» en «El hotel equivocado»?","Čo znamená „al cabo de“ v texte „Nesprávny hotel“?"],["Que ayuda a descubrir algo importante.","Ktorý pomáha odhaliť niečo podstatné."],["Después de un intervalo de tiempo.","Po určitom časovom úseku."],["Una reunión de cosas sin que siempre haya selección.","Zhromažďovanie vecí, nie vždy s výberom."],["¿Qué aporta «habían encontrado» a la escena «El hotel equivocado»?","Čo prináša tvar „habían encontrado“ do scény „Nesprávny hotel“?"],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «El hotel equivocado»?","Ktorý detail sa nachádza v texte „Nesprávny hotel“?"],["La mesa dejó espacio para el tronco.","Stôl ponechal priestor pre kmeň."],["Los hoteles tenían nombres parecidos.","Hotely mali podobné názvy."],["La lámpara ayudaba a una hermana.","Lampa pomáhala sestre."],["En «Una tarde sin programa», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Popoludnie bez programu“?"],["Un dibujo compartido cambia la forma de discutir.","Spoločný nákres mení spôsob diskusie."],["Un cambio de plan puede crear otro tipo de experiencia.","Zmena plánu môže vytvoriť iný druh zážitku."],["Julia busca información antes de valorar el riesgo.","Julia hľadá informácie pred posúdením rizika."],["¿Qué significa «dueña» en «Una tarde sin programa»?","Čo znamená „dueña“ v texte „Popoludnie bez programu“?"],["La mujer a la que pertenece un negocio o una cosa.","Žena, ktorej patrí podnik alebo vec."],["La forma en que se percibe una materia al tocarla.","Spôsob, akým látku vnímame pri dotyku."],["Que muestra poca cercanía emocional.","Ktorý prejavuje malú citovú blízkosť."],["¿Qué aporta «recordaría» a la escena «Una tarde sin programa»?","Čo prináša tvar „recordaría“ do scény „Popoludnie bez programu“?"],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una posibilidad o algo posterior visto desde el pasado.","Možnosť alebo neskorší dej videný z minulosti."],["¿Qué detalle aparece en «Una tarde sin programa»?","Ktorý detail sa nachádza v texte „Popoludnie bez programu“?"],["La lluvia impidió la excursión.","Dážď znemožnil výlet."],["El mar seguía tranquilo.","More zostávalo pokojné."],["Todos usaron el mismo papel.","Všetci použili ten istý papier."],["En «El menú sin fotografías», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Jedálny lístok bez fotografií“?"],["Preguntar por un plato puede abrir una historia.","Otázka o jedle môže otvoriť príbeh."],["Dos representaciones diferentes pueden tener usos distintos.","Dve odlišné zobrazenia môžu mať rôzne použitie."],["La memoria de una persona conecta una dirección con su pasado.","Pamäť človeka spája adresu s jej minulosťou."],["¿Qué significa «llevar» en «El menú sin fotografías»?","Čo znamená „llevar“ v texte „Jedálny lístok bez fotografií“?"],["Identificar algo visto o conocido anteriormente.","Určiť niečo už videné alebo známe."],["El lugar o resultado al que se llega.","Miesto alebo výsledok, ku ktorému smerujeme."],["Tener un ingrediente como parte de un plato.","Mať surovinu ako súčasť jedla."],["¿Qué aporta «llegaran» a la escena «El menú sin fotografías»?","Čo prináša tvar „llegaran“ do scény „Jedálny lístok bez fotografií“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una situación imaginada o ligada a un marco pasado.","Predstavovaná situácia alebo súvislosť s minulým rámcom."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["¿Qué detalle aparece en «El menú sin fotografías»?","Ktorý detail sa nachádza v texte „Jedálny lístok bez fotografií“?"],["Solo uno de los mapas mostraba una cala.","Iba jedna mapa zobrazovala zátoku."],["Una vecina reconoció el nombre del destinatario.","Susedka spoznala meno adresáta."],["El camarero compartió un recuerdo.","Čašník sa podelil o spomienku."],["En «La visita demasiado rápida», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Príliš rýchla návšteva“?"],["Elena corrige una impresión después de escuchar.","Elena po počúvaní opraví svoj prvý dojem."],["Repetir una prueba ayuda a valorar un resultado.","Opakovanie skúšky pomáha posúdiť výsledok."],["Renunciar a cantidad permite prestar más atención.","Zníženie počtu umožňuje väčšiu pozornosť."],["¿Qué significa «los demás» en «La visita demasiado rápida»?","Čo znamená „los demás“ v texte „Príliš rýchla návšteva“?"],["Que parece real sin serlo necesariamente.","Ktorý sa javí skutočný, ale nemusí ním byť."],["Los elementos que quedan fuera del primero o del grupo citado.","Prvky zostávajúce mimo prvého alebo spomenutého súboru."],["La parte inferior del calzado.","Spodná časť obuvi."],["¿Qué aporta «Volveremos» a la escena «La visita demasiado rápida»?","Čo prináša tvar „Volveremos“ do scény „Príliš rýchla návšteva“?"],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «La visita demasiado rápida»?","Ktorý detail sa nachádza v texte „Príliš rýchla návšteva“?"],["El equipo utilizó otro instrumento.","Tím použil iný prístroj."],["El plan inicial incluía cuatro pueblos.","Pôvodný plán zahŕňal štyri dediny."],["Elena llevaba una libreta.","Elena mala zápisník."],["En «Una dirección en dos idiomas», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Adresa v dvoch jazykoch“?"],["La presentación visual puede exagerar una diferencia.","Vizuálne zobrazenie môže zveličovať rozdiel."],["Nombres diferentes pueden señalar el mismo lugar.","Odlišné názvy môžu označovať rovnaké miesto."],["Una elección habitual se somete a comparación.","Obvyklá voľba sa podrobí porovnaniu."],["¿Qué significa «letrero» en «Una dirección en dos idiomas»?","Čo znamená „letrero“ v texte „Adresa v dvoch jazykoch“?"],["Un texto visible que identifica o informa.","Viditeľný text označujúci alebo informujúci."],["Lo que forma parte de los días habituales.","To, čo patrí k bežným dňom."],["Que respeta el carácter de algo.","Ktorý rešpektuje povahu niečoho."],["¿Qué aporta «se referían» a la escena «Una dirección en dos idiomas»?","Čo prináša tvar „se referían“ do scény „Adresa v dvoch jazykoch“?"],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["¿Qué detalle aparece en «Una dirección en dos idiomas»?","Ktorý detail sa nachádza v texte „Adresa v dvoch jazykoch“?"],["Una vecina aclaró la diferencia.","Susedka objasnila rozdiel."],["La cuerda nueva pesaba menos.","Nové lano vážilo menej."],["Julia añadió una escala.","Julia doplnila mierku."],["En «El viaje de vuelta», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Spiatočná cesta“?"],["Una historia puede cambiar nuestra atención al paisaje.","Príbeh môže zmeniť pozornosť venovanú krajine."],["Un supuesto permite comparar prioridades.","Predstavovaná situácia umožňuje porovnať priority."],["Una explicación necesita saber qué podría cuestionarla.","Vysvetlenie potrebuje určiť, čo by ho mohlo spochybniť."],["¿Qué significa «apenas» en «El viaje de vuelta»?","Čo znamená „apenas“ v texte „Spiatočná cesta“?"],["Que todavía espera atención o resolución.","Ktorý stále čaká na pozornosť alebo riešenie."],["Una interrupción breve que organiza el discurso.","Krátke prerušenie, ktoré usporadúva reč."],["En una cantidad o intensidad muy pequeña.","Vo veľmi malom množstve alebo miere."],["¿Qué aporta «habían hablado» a la escena «El viaje de vuelta»?","Čo prináša tvar „habían hablado“ do scény „Spiatočná cesta“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["¿Qué detalle aparece en «El viaje de vuelta»?","Ktorý detail sa nachádza v texte „Spiatočná cesta“?"],["Una de las respuestas fue buscar sombra.","Jednou z odpovedí bolo hľadať tieň."],["La profesora agradeció la pregunta.","Učiteľka poďakovala za otázku."],["Rosa buscó un puente al regresar.","Rosa pri návrate hľadala most."],["En «La maleta ligera», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Ľahký kufor“?"],["Pensar en una alternativa mejora un plan.","Premyslenie alternatívy zlepšuje plán."],["Registrar una ausencia también puede aportar información.","Aj zaznamenanie neprítomnosti môže priniesť informáciu."],["Prepararse también implica aceptar cierta incertidumbre.","Príprava znamená aj prijať určitú neistotu."],["¿Qué significa «imprevisto» en «La maleta ligera»?","Čo znamená „imprevisto“ v texte „Ľahký kufor“?"],["Un comentario que presenta y valora una obra.","Komentár, ktorý predstavuje a hodnotí dielo."],["Algo que ocurre sin haber sido previsto.","Niečo, čo sa stane bez predchádzajúceho plánovania."],["El lugar o la persona de donde viene algo.","Miesto alebo osoba, odkiaľ niečo pochádza."],["¿Qué aporta «podía» a la escena «La maleta ligera»?","Čo prináša tvar „podía“ do scény „Ľahký kufor“?"],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «La maleta ligera»?","Ktorý detail sa nachádza v texte „Ľahký kufor“?"],["Luis registraba días sin avistamientos.","Luis zaznamenával dni bez pozorovaných vtákov."],["La maleta se estaba quedando sin espacio.","V kufri sa míňalo miesto."],["Lucía preguntó por un cambio de viento.","Lucía sa pýtala na zmenu vetra."],["En «Un consejo local», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Miestna rada“?"],["Una idea atractiva sigue necesitando pruebas.","Príťažlivá myšlienka naďalej potrebuje dôkazy."],["Dos recomendaciones pueden ser complementarias.","Dve odporúčania sa môžu dopĺňať."],["Un defecto visual puede conservar una experiencia.","Vizuálna chyba môže zachovať zážitok."],["¿Qué significa «desde arriba» en «Un consejo local»?","Čo znamená „desde arriba“ v texte „Miestna rada“?"],["Desde una posición más elevada.","Z vyššie položeného miesta."],["La disminución de una preocupación o tensión.","Zmiernenie starosti alebo napätia."],["Despertar interés por algo que no se entiende del todo.","Vzbudzovať záujem o niečo nie celkom pochopené."],["¿Qué aporta «probó» a la escena «Un consejo local»?","Čo prináša tvar „probó“ do scény „Miestna rada“?"],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Un episodio de un relato pasado.","Epizóda minulého príbehu."],["¿Qué detalle aparece en «Un consejo local»?","Ktorý detail sa nachádza v texte „Miestna rada“?"],["Elena visitó los dos puntos de vista.","Elena navštívila obe vyhliadkové miesta."],["Conservaron dos versiones de la fotografía.","Zachovali dve verzie fotografie."],["Ana organizó la información en dos columnas.","Ana usporiadala informácie do dvoch stĺpcov."],["En «La postal tardía», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Oneskorená pohľadnica“?"],["Un mensaje puede valer por el gesto y no por su rapidez.","Správa môže mať hodnotu pre gesto, nie rýchlosť."],["Comprender un mensaje exige reconocer su contexto.","Porozumenie správe si vyžaduje rozpoznanie kontextu."],["Comparar exige revisar las condiciones iniciales.","Porovnanie si vyžaduje kontrolu počiatočných podmienok."],["¿Qué significa «gesto» en «La postal tardía»?","Čo znamená „gesto“ v texte „Oneskorená pohľadnica“?"],["Saber realizar algo con seguridad.","Vedieť niečo spoľahlivo vykonať."],["La sucesión principal de hechos de una historia.","Hlavná postupnosť udalostí príbehu."],["Una acción que comunica una intención o un sentimiento.","Konanie vyjadrujúce zámer alebo pocit."],["¿Qué aporta «había regresado» a la escena «La postal tardía»?","Čo prináša tvar „había regresado“ do scény „Oneskorená pohľadnica“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["¿Qué detalle aparece en «La postal tardía»?","Ktorý detail sa nachádza v texte „Oneskorená pohľadnica“?"],["Comprobaron el canal antes de responder.","Pred odpoveďou overili kanál."],["Solo un grupo podía ver el reloj.","Iba jedna skupina videla hodiny."],["La amiga puso la postal junto al escritorio.","Kamarátka položila pohľadnicu k stolu."],["En «Preguntar sin mapa», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Pýtať sa bez mapy“?"],["El final cambia la lectura de una frase anterior.","Záver mení čítanie skoršej vety."],["Las excepciones pueden precisar una regla.","Výnimky môžu spresniť pravidlo."],["Pedir orientación puede crear un contacto humano.","Žiadosť o usmernenie môže vytvoriť ľudský kontakt."],["¿Qué significa «atravesar» en «Preguntar sin mapa»?","Čo znamená „atravesar“ v texte „Pýtať sa bez mapy“?"],["La posición que adopta el cuerpo.","Poloha, ktorú zaujíma telo."],["Recorrer un espacio de un lado a otro.","Prejsť priestorom z jednej strany na druhú."],["La parte inicial que prepara lo que sigue.","Počiatočná časť pripravujúca ďalší obsah."],["¿Qué aporta «recibió» a la escena «Preguntar sin mapa»?","Čo prináša tvar „recibió“ do scény „Pýtať sa bez mapy“?"],["Un episodio de un relato pasado.","Epizóda minulého príbehu."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «Preguntar sin mapa»?","Ktorý detail sa nachádza v texte „Pýtať sa bez mapy“?"],["La colega empezó por el final del informe.","Kolegyňa začala koncom správy."],["El teléfono dejó de funcionar antes de la llegada.","Telefón prestal fungovať pred príchodom."],["El libro pertenecía a una biblioteca.","Kniha patrila knižnici."],["En «El olor del cuaderno», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Vôňa zošita“?"],["Una conclusión depende de a quién incluye.","Záver závisí od toho, koho zahŕňa."],["Una memoria parcial puede conservarse sin inventar el resto.","Čiastočnú spomienku možno uchovať bez vymýšľania zvyšku."],["Los silencios hacen dudar de un narrador.","Mlčanie vyvoláva pochybnosti o rozprávačovi."],["¿Qué significa «en blanco» en «El olor del cuaderno»?","Čo znamená „en blanco“ v texte „Vôňa zošita“?"],["Sin escribir o completar el espacio.","Bez zapísania alebo vyplnenia miesta."],["Añade un caso que hace más llamativa una negación.","Pridáva prípad zdôrazňujúci záporné tvrdenie."],["El momento de separarse de alguien.","Chvíľa rozchodu alebo odchodu od niekoho."],["¿Qué aporta «creía» a la escena «El olor del cuaderno»?","Čo prináša tvar „creía“ do scény „Vôňa zošita“?"],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["¿Qué detalle aparece en «El olor del cuaderno»?","Ktorý detail sa nachádza v texte „Vôňa zošita“?"],["Isabel recordó una luz sobre una mesa.","Isabel si spomenula na svetlo na stole."],["El narrador cambiaba de tema cuando hablaba su hermano.","Rozprávač menil tému, keď hovoril jeho brat."],["Había personas que habían abandonado el proyecto.","Niektorí ľudia projekt opustili."],["En «Dos versiones de una cena», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Dve verzie večere“?"],["Los recuerdos reflejan focos de atención diferentes.","Spomienky odrážajú odlišné zameranie pozornosti."],["La elección de una palabra modifica una relación.","Výber slova mení vzťah."],["Reconocer límites no equivale a carecer de conocimiento.","Priznať hranice neznamená nemať poznanie."],["¿Qué significa «incluir» en «Dos versiones de una cena»?","Čo znamená „incluir“ v texte „Dve verzie večere“?"],["Que se prepara para lo que puede ocurrir.","Ktorý sa pripravuje na možné udalosti."],["El tiempo transcurrido desde su origen.","Čas, ktorý uplynul od jeho vzniku."],["Contener algo como parte de un conjunto.","Obsahovať niečo ako súčasť celku."],["¿Qué aporta «incluyera» a la escena «Dos versiones de una cena»?","Čo prináša tvar „incluyera“ do scény „Dve verzie večere“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una situación imaginada o ligada a un marco pasado.","Predstavovaná situácia alebo súvislosť s minulým rámcom."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["¿Qué detalle aparece en «Dos versiones de una cena»?","Ktorý detail sa nachádza v texte „Dve verzie večere“?"],["Compararon dos traducciones.","Porovnávali dva preklady."],["La ponente presentó una explicación provisional.","Prednášajúca predstavila predbežné vysvetlenie."],["Un amigo recordaba especialmente la comida.","Jeden priateľ si zvlášť pamätal jedlo."],["En «La taza reparada», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Opravená šálka“?"],["Dos lectores valoran de forma distinta la sorpresa.","Dvaja čitatelia odlišne hodnotia prekvapenie."],["La pregunta orienta lo que observamos.","Otázka usmerňuje to, čo pozorujeme."],["Una reparación puede añadir significado a un objeto.","Oprava môže predmetu pridať význam."],["¿Qué significa «tirar» en «La taza reparada»?","Čo znamená „tirar“ v texte „Opravená šálka“?"],["Un mensaje que informa de algo importante.","Správa, ktorá upozorňuje na niečo dôležité."],["Deshacerse de algo que ya no se conserva.","Zbaviť sa niečoho, čo už neuchovávame."],["La unión de piezas para formar un objeto.","Spájanie dielov do jedného predmetu."],["¿Qué aporta «se había roto» a la escena «La taza reparada»?","Čo prináša tvar „se había roto“ do scény „Opravená šálka“?"],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «La taza reparada»?","Ktorý detail sa nachádza v texte „Opravená šálka“?"],["Uno de los observadores contó las hojas.","Jeden z pozorovateľov spočítal listy."],["Ana no quiso ocultar la reparación.","Ana nechcela zakryť opravu."],["Pablo consultaba la última página.","Pablo si pozeral poslednú stránku."],["En «El mensaje guardado», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Uložená správa“?"],["Una reunión breve no siempre resuelve mejor.","Krátke stretnutie nemusí priniesť lepšie riešenie."],["Elegir qué guardar puede dar sentido a un archivo.","Výber uloženého môže archívu dať zmysel."],["El interés literario no depende de la simpatía.","Literárna zaujímavosť nezávisí od sympatie."],["¿Qué significa «acumulación» en «El mensaje guardado»?","Čo znamená „acumulación“ v texte „Uložená správa“?"],["Una reunión de cosas sin que siempre haya selección.","Zhromažďovanie vecí, nie vždy s výberom."],["Que nadie había pedido.","Ktorý si nikto nepýtal."],["El espacio donde actúan los intérpretes.","Priestor, kde vystupujú účinkujúci."],["¿Qué aporta «se convirtió» a la escena «El mensaje guardado»?","Čo prináša tvar „se convirtió“ do scény „Uložená správa“?"],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Un episodio de un relato pasado.","Epizóda minulého príbehu."],["¿Qué detalle aparece en «El mensaje guardado»?","Ktorý detail sa nachádza v texte „Uložená správa“?"],["Pedro conservó una frase amable.","Pedro zachoval milú vetu."],["Marta quería continuar la lectura.","Marta chcela pokračovať v čítaní."],["La primera reunión duró diez minutos.","Prvé stretnutie trvalo desať minút."],["En «La receta sin cantidades», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Recept bez množstiev“?"],["La práctica compartida aclara instrucciones imprecisas.","Spoločná prax objasňuje nepresné pokyny."],["Una promesa atractiva puede representar mal un libro.","Príťažlivý prísľub môže knihu skresliť."],["Conocer lo antiguo no impide probar lo nuevo.","Poznanie starého nebráni skúšaniu nového."],["¿Qué significa «textura» en «La receta sin cantidades»?","Čo znamená „textura“ v texte „Recept bez množstiev“?"],["Interrumpir el movimiento o una actividad.","Prerušiť pohyb alebo činnosť."],["La práctica previa a una actuación.","Príprava pred verejným vystúpením."],["La forma en que se percibe una materia al tocarla.","Spôsob, akým látku vnímame pri dotyku."],["¿Qué aporta «esté» a la escena «La receta sin cantidades»?","Čo prináša tvar „esté“ do scény „Recept bez množstiev“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Un contenido ligado a un deseo, reacción o acción pendiente.","Obsah spojený so želaním, reakciou alebo očakávaným dejom."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["¿Qué detalle aparece en «La receta sin cantidades»?","Ktorý detail sa nachádza v texte „Recept bez množstiev“?"],["La historia trataba de dos hermanas.","Príbeh bol o dvoch sestrách."],["El carpintero enseñó a ajustar un cepillo.","Stolár učil nastaviť hoblík."],["Laura cocinó con su tío.","Laura varila so strýkom."],["En «La fotografía sin fecha», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Fotografia bez dátumu“?"],["La voz puede descubrir un humor que pasa inadvertido.","Hlas môže odhaliť nepovšimnutý humor."],["Mostrar dudas puede hacer un informe más claro.","Ukázanie pochybností môže správu sprehľadniť."],["No saber una fecha no elimina el valor de una imagen.","Neznalosť dátumu neodstraňuje hodnotu obrázka."],["¿Qué significa «reconocer» en «La fotografía sin fecha»?","Čo znamená „reconocer“ v texte „Fotografia bez dátumu“?"],["Una señal que deja el paso del tiempo o una acción.","Znak zanechaný časom alebo konaním."],["Identificar algo visto o conocido anteriormente.","Určiť niečo už videné alebo známe."],["Interpretar algo como una indicación importante o literal.","Vnímať niečo ako dôležitý alebo doslovný pokyn."],["¿Qué aporta «se escondía» a la escena «La fotografía sin fecha»?","Čo prináša tvar „se escondía“ do scény „Fotografia bez dátumu“?"],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «La fotografía sin fecha»?","Ktorý detail sa nachádza v texte „Fotografia bez dátumu“?"],["Ana pidió recuperar parte de las discusiones.","Ana požiadala obnoviť časť diskusií."],["En la foto identificaron una ventana.","Na fotografii spoznali okno."],["Luis no había detectado la broma al leer en silencio.","Luis pri tichom čítaní neodhalil vtip."],["En «Un oficio contado», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Vyrozprávané remeslo“?"],["Una pregunta básica revela una rutina innecesaria.","Základná otázka odhaľuje zbytočnú rutinu."],["Una explicación puede depender también del gesto y del sonido.","Vysvetlenie môže závisieť aj od gesta a zvuku."],["Una valoración concreta ayuda más que una etiqueta.","Konkrétne hodnotenie pomáha viac než nálepka."],["¿Qué significa «suela» en «Un oficio contado»?","Čo znamená „suela“ v texte „Vyrozprávané remeslo“?"],["La parte inferior del calzado.","Spodná časť obuvi."],["Que produce una impresión muy llamativa.","Ktorý vyvoláva mimoriadne silný dojem."],["Una situación que daña la dignidad de alguien.","Situácia, ktorá poškodzuje dôstojnosť človeka."],["¿Qué aporta «perdería» a la escena «Un oficio contado»?","Čo prináša tvar „perdería“ do scény „Vyrozprávané remeslo“?"],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una posibilidad o algo posterior visto desde el pasado.","Možnosť alebo neskorší dej videný z minulosti."],["¿Qué detalle aparece en «Un oficio contado»?","Ktorý detail sa nachádza v texte „Vyrozprávané remeslo“?"],["La grabación incluía el sonido de una suela.","Nahrávka obsahovala zvuk podrážky."],["Elena sustituyó un adjetivo por ejemplos.","Elena nahradila prídavné meno príkladmi."],["Utilizaban tres formularios.","Používali tri formuláre."],["En «La fecha del diario», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Dátum v denníku“?"],["El tiempo puede volver significativo lo que parecía corriente.","Čas môže dodať význam zdanlivo obyčajnému."],["Una nota incompleta invita a proyectar interpretaciones.","Neúplná poznámka vyvoláva vlastné výklady."],["El trabajo resuelto también necesita ser comunicado.","Aj vyriešenú prácu treba oznámiť."],["¿Qué significa «cotidiano» en «La fecha del diario»?","Čo znamená „cotidiano“ v texte „Dátum v denníku“?"],["La persona a quien se dirige un mensaje.","Osoba, ktorej je správa určená."],["Una relación entre cosas que comparten rasgos.","Vzťah medzi vecami so spoločnými črtami."],["Lo que forma parte de los días habituales.","To, čo patrí k bežným dňom."],["¿Qué aporta «ha sido» a la escena «La fecha del diario»?","Čo prináša tvar „ha sido“ do scény „Dátum v denníku“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una acción anterior presentada como noticia o experiencia.","Predchádzajúci dej podaný ako správa alebo skúsenosť."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["¿Qué detalle aparece en «La fecha del diario»?","Ktorý detail sa nachádza v texte „Dátum v denníku“?"],["La nota no explicaba el desacuerdo.","Poznámka nevysvetľovala nesúhlas."],["Luis dejó una nota la siguiente vez.","Luis nabudúce zanechal poznámku."],["Sofía volvió al diario veinte años después.","Sofía sa k denníku vrátila o dvadsať rokov."],["En «Cambiar el nombre de una carpeta», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Premenovať priečinok“?"],["Las recomendaciones se centran en la experiencia de leer.","Odporúčania sa zameriavajú na čitateľský zážitok."],["Un plazo necesita considerar los recursos disponibles.","Termín musí zohľadniť dostupné zdroje."],["Un nombre puede cambiar la relación con lo inacabado.","Názov môže zmeniť vzťah k nedokončenému."],["¿Qué significa «pendiente» en «Cambiar el nombre de una carpeta»?","Čo znamená „pendiente“ v texte „Premenovať priečinok“?"],["Algo que dificulta acceder o participar.","Niečo, čo sťažuje prístup alebo účasť."],["Que todavía espera atención o resolución.","Ktorý stále čaká na pozornosť alebo riešenie."],["Mantener una luz funcionando.","Ponechať svetlo zapnuté."],["¿Qué aporta «habían servido» a la escena «Cambiar el nombre de una carpeta»?","Čo prináša tvar „habían servido“ do scény „Premenovať priečinok“?"],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «Cambiar el nombre de una carpeta»?","Ktorý detail sa nachádza v texte „Premenovať priečinok“?"],["El plazo se amplió dos días.","Termín predĺžili o dva dni."],["Miguel separó proyectos todavía interesantes de otros abandonados.","Miguel oddelil zaujímavé projekty od opustených."],["Las recomendaciones se hacían los viernes.","Odporúčania zaznievali v piatok."],["En «La historia que no era suya», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Príbeh, ktorý nebol jeho“?"],["Quitar algo puede mejorar el conjunto.","Odstránenie niečoho môže zlepšiť celok."],["La procedencia de un relato forma parte de su sentido.","Pôvod rozprávania patrí k jeho významu."],["Observar a quienes miran abre otra perspectiva.","Pozorovanie divákov otvára ďalšiu perspektívu."],["¿Qué significa «procedencia» en «La historia que no era suya»?","Čo znamená „procedencia“ v texte „Príbeh, ktorý nebol jeho“?"],["El lugar o la persona de donde viene algo.","Miesto alebo osoba, odkiaľ niečo pochádza."],["Buscar orientación en una fuente.","Hľadať usmernenie v informačnom zdroji."],["Permanecer en un lugar en vez de marcharse.","Ostať na mieste namiesto odchodu."],["¿Qué aporta «hubiera vivido» a la escena «La historia que no era suya»?","Čo prináša tvar „hubiera vivido“ do scény „Príbeh, ktorý nebol jeho“?"],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una alternativa pasada o algo anterior a una reacción pasada.","Minulá alternatíva alebo dej skorší než minulá reakcia."],["¿Qué detalle aparece en «La historia que no era suya»?","Ktorý detail sa nachádza v texte „Príbeh, ktorý nebol jeho“?"],["La hermana corrigió la procedencia de la anécdota.","Sestra opravila pôvod príhody."],["Nora dibujó a los visitantes.","Nora kreslila návštevníkov."],["Probaron una versión reducida.","Vyskúšali menšiu verziu."],["En «La lista para descansar», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Zoznam na oddych“?"],["Una contradicción permite cuestionar una rutina.","Rozpor umožňuje spochybniť rutinu."],["Una obra puede despertar recuerdos no previstos.","Dielo môže prebudiť neplánované spomienky."],["Una observación concreta convierte el elogio en aprendizaje.","Konkrétna poznámka mení pochvalu na učenie."],["¿Qué significa «alivio» en «La lista para descansar»?","Čo znamená „alivio“ v texte „Zoznam na oddych“?"],["Una entrada pequeña del mar en la costa.","Malý morský záliv na pobreží."],["Proponer una opción que se considera conveniente.","Navrhovať možnosť považovanú za vhodnú."],["La disminución de una preocupación o tensión.","Zmiernenie starosti alebo napätia."],["¿Qué aporta «haría» a la escena «La lista para descansar»?","Čo prináša tvar „haría“ do scény „Zoznam na oddych“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una posibilidad o algo posterior visto desde el pasado.","Možnosť alebo neskorší dej videný z minulosti."],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["¿Qué detalle aparece en «La lista para descansar»?","Ktorý detail sa nachádza v texte „Zoznam na oddych“?"],["El músico no anunció el título.","Hudobník neoznámil názov."],["La observación se refería a una tabla.","Poznámka sa týkala tabuľky."],["Nuria añadió una tarea para no cumplir la lista.","Nuria pridala úlohu nesplniť zoznam."],["En «El libro de instrucciones», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Kniha pokynov“?"],["La falta de una etiqueta revela un prejuicio.","Chýbajúci popis odhalí predsudok."],["Cambiar de contexto facilita una conexión inesperada.","Zmena prostredia uľahčuje nečakané prepojenie."],["El uso inmediato no cuenta toda la historia de un objeto.","Okamžité použitie nevystihuje celý príbeh predmetu."],["¿Qué significa «dominar» en «El libro de instrucciones»?","Čo znamená „dominar“ v texte „Kniha pokynov“?"],["Dentro de muy poco tiempo, según quien habla.","O veľmi krátky čas podľa hovoriaceho."],["Saber realizar algo con seguridad.","Vedieť niečo spoľahlivo vykonať."],["Introduce un contraste con lo anterior.","Uvádza protiklad k predchádzajúcemu tvrdeniu."],["¿Qué aporta «había dominado» a la escena «El libro de instrucciones»?","Čo prináša tvar „había dominado“ do scény „Kniha pokynov“?"],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «El libro de instrucciones»?","Ktorý detail sa nachádza v texte „Kniha pokynov“?"],["El grupo regresó para comprobar la solución.","Skupina sa vrátila overiť riešenie."],["El capítulo más largo trataba de la limpieza.","Najdlhšia kapitola bola o čistení."],["El cuadro no tenía cartel.","Obraz nemal popis."],["En «Un silencio muy largo», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Veľmi dlhé ticho“?"],["La forma de participar puede ocultar o revelar desacuerdos.","Spôsob účasti môže nesúhlas skryť alebo odhaliť."],["Una broma puede señalar un exceso sin confrontación directa.","Vtip môže upozorniť na preháňanie bez priameho konfliktu."],["Una norma habitual no se aplica a todas las obras.","Bežné pravidlo neplatí pre všetky diela."],["¿Qué significa «introducción» en «Un silencio muy largo»?","Čo znamená „introducción“ v texte „Veľmi dlhé ticho“?"],["La parte inicial que prepara lo que sigue.","Počiatočná časť pripravujúca ďalší obsah."],["No cumplir la función esperada.","Nesplniť očakávanú funkciu."],["Notar con deseo la ausencia de algo o alguien.","Pociťovať, že nám niečo alebo niekto chýba."],["¿Qué aporta «Voy a hablar» a la escena «Un silencio muy largo»?","Čo prináša tvar „Voy a hablar“ do scény „Veľmi dlhé ticho“?"],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Un plan o una intención, también vistos desde el pasado.","Plán alebo zámer aj z pohľadu minulosti."],["¿Qué detalle aparece en «Un silencio muy largo»?","Ktorý detail sa nachádza v texte „Veľmi dlhé ticho“?"],["El invitado llevaba cinco minutos hablando.","Hosť hovoril už päť minút."],["La escultura estaba hecha para tocarla.","Socha bola určená na dotýkanie."],["Recibieron tres objeciones por escrito.","Písomne dostali tri námietky."],["En «La contraseña perfecta», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Dokonalé heslo“?"],["Reírse de un error facilita reconocerlo.","Smiech z vlastnej chyby uľahčuje jej priznanie."],["La espera también forma parte de la representación.","Aj čakanie je súčasťou predstavenia."],["Cambiar de postura puede ser un resultado valioso.","Zmena postoja môže byť hodnotným výsledkom."],["¿Qué significa «ni siquiera» en «La contraseña perfecta»?","Čo znamená „ni siquiera“ v texte „Dokonalé heslo“?"],["Algo que ocupa la atención y causa inquietud.","Niečo, čo zamestnáva pozornosť a vyvoláva nepokoj."],["Personas colocadas siguiendo un orden.","Ľudia zoradení podľa určitého poradia."],["Añade un caso que hace más llamativa una negación.","Pridáva prípad zdôrazňujúci záporné tvrdenie."],["¿Qué aporta «puedo» a la escena «La contraseña perfecta»?","Čo prináša tvar „puedo“ do scény „Dokonalé heslo“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una situación presente o habitual.","Súčasná alebo obvyklá situácia."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["¿Qué detalle aparece en «La contraseña perfecta»?","Ktorý detail sa nachádza v texte „Dokonalé heslo“?"],["Había una sola silla en el escenario.","Na javisku bola jediná stolička."],["Vera escuchó un ejemplo nuevo.","Vera počula nový príklad."],["Marta no recordaba su contraseña.","Marta si nepamätala heslo."],["En «El paraguas previsor», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Predvídavý dáždnik“?"],["Conocer el esfuerzo cambia la percepción de la facilidad.","Poznanie úsilia mení vnímanie ľahkosti."],["Un caso excepcional no representa necesariamente lo habitual.","Výnimočný prípad nemusí zastupovať bežnú situáciu."],["Una misma preparación puede responder a motivos opuestos.","Rovnaká príprava môže reagovať na opačné dôvody."],["¿Qué significa «previsor» en «El paraguas previsor»?","Čo znamená „previsor“ v texte „Predvídavý dáždnik“?"],["Una muestra pública de reconocimiento.","Verejný prejav uznania."],["Que se prepara para lo que puede ocurrir.","Ktorý sa pripravuje na možné udalosti."],["El momento en que empieza la noche.","Chvíľa, keď sa začína noc."],["¿Qué aporta «podía» a la escena «El paraguas previsor»?","Čo prináša tvar „podía“ do scény „Predvídavý dáždnik“?"],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «El paraguas previsor»?","Ktorý detail sa nachádza v texte „Predvídavý dáždnik“?"],["Ana pidió pensar en un día corriente.","Ana požiadala predstaviť si obyčajný deň."],["La amiga usaba el paraguas para buscar sombra.","Kamarátka používala dáždnik na tieň."],["La pianista repitió el pasaje seis veces.","Klaviristka zopakovala úsek šesťkrát."],["En «La opinión del gato», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Mačací názor“?"],["Explicar una causa y asignar responsabilidad son tareas distintas.","Vysvetliť príčinu a určiť zodpovednosť sú odlišné úlohy."],["Una preferencia inesperada deja en evidencia una discusión complicada.","Nečakaná voľba odhalí prehnane zložitú debatu."],["Conservar no equivale siempre a renovar por completo.","Zachovanie nie je vždy úplná obnova."],["¿Qué significa «montaje» en «La opinión del gato»?","Čo znamená „montaje“ v texte „Mačací názor“?"],["La unión de piezas para formar un objeto.","Spájanie dielov do jedného predmetu."],["Que no sigue la posición recta esperada.","Ktorý nemá očakávanú rovnú polohu."],["De manera simultánea.","V tom istom čase."],["¿Qué aporta «terminaran» a la escena «La opinión del gato»?","Čo prináša tvar „terminaran“ do scény „Mačací názor“?"],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una situación imaginada o ligada a un marco pasado.","Predstavovaná situácia alebo súvislosť s minulým rámcom."],["¿Qué detalle aparece en «La opinión del gato»?","Ktorý detail sa nachádza v texte „Mačací názor“?"],["El gato eligió una caja vacía.","Mačka si vybrala prázdnu škatuľu."],["La restauradora no quería borrar toda la historia.","Reštaurátorka nechcela vymazať celú históriu."],["Luis hablaba de la causa del error.","Luis hovoril o príčine chyby."],["En «El consejo no solicitado», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Nevyžiadaná rada“?"],["Una respuesta literal transforma un consejo en participación.","Doslovná odpoveď mení radu na spoluúčasť."],["Se puede corregir sin humillar.","Opravovať sa dá bez ponižovania."],["Precisar una propuesta hace visible el alcance del acuerdo.","Spresnenie návrhu ukáže skutočný rozsah dohody."],["¿Qué significa «no solicitado» en «El consejo no solicitado»?","Čo znamená „no solicitado“ v texte „Nevyžiadaná rada“?"],["Un recorrido que cruza una extensión de agua.","Cesta cez vodnú plochu."],["La parte principal que sostiene las ramas de un árbol.","Hlavná časť stromu nesúca konáre."],["Que nadie había pedido.","Ktorý si nikto nepýtal."],["¿Qué aporta «descansaría» a la escena «El consejo no solicitado»?","Čo prináša tvar „descansaría“ do scény „Nevyžiadaná rada“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una posibilidad o algo posterior visto desde el pasado.","Možnosť alebo neskorší dej videný z minulosti."],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["¿Qué detalle aparece en «El consejo no solicitado»?","Ktorý detail sa nachádza v texte „Nevyžiadaná rada“?"],["El director agradeció el entusiasmo.","Dirigent poďakoval za nadšenie."],["Escribieron los cambios antes de votar.","Pred hlasovaním spísali očakávané zmeny."],["Bruno recibió un cuchillo y una cebolla.","Bruno dostal nôž a cibuľu."],["En «El cartel del silencio», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Oznam o tichu“?"],["Una deformación puede expresar una identidad.","Zmenené proporcie môžu vyjadriť identitu."],["Escuchar una preocupación puede preceder al consejo.","Vypočutie obavy môže predchádzať rade."],["Una forma llamativa puede distraer del propio mensaje.","Nápadná forma môže odvádzať od samotného odkazu."],["¿Qué significa «detenerse» en «El cartel del silencio»?","Čo znamená „detenerse“ v texte „Oznam o tichu“?"],["Dificultar el paso o la actividad de otro.","Sťažovať druhému priechod alebo činnosť."],["Interrumpir el movimiento o una actividad.","Prerušiť pohyb alebo činnosť."],["Señalada para llamar la atención sobre ella.","Zvýraznená, aby pritiahla pozornosť."],["¿Qué aporta «se detenían» a la escena «El cartel del silencio»?","Čo prináša tvar „se detenían“ do scény „Oznam o tichu“?"],["Una situación, costumbre o acción en curso en el pasado.","Minulá situácia, zvyk alebo prebiehajúci dej."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["¿Qué detalle aparece en «El cartel del silencio»?","Ktorý detail sa nachádza v texte „Oznam o tichu“?"],["La amiga pidió ser comprendida primero.","Kamarátka najprv požiadala o porozumenie."],["El segundo cartel era más pequeño.","Druhý oznam bol menší."],["El vecino había trabajado con madera.","Sused pracoval s drevom."],["En «Una planta muy independiente», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Veľmi samostatná rastlina“?"],["Una misma palabra puede apoyarse en experiencias diferentes.","Rovnaké slovo môže vychádzať z odlišných skúseností."],["Una instrucción absoluta puede producir una interpretación inesperada.","Absolútny pokyn môže vyvolať nečakaný výklad."],["Quitar un precio no elimina todas las barreras.","Odstránenie ceny neodstráni všetky prekážky."],["¿Qué significa «tomarse en serio» en «Una planta muy independiente»?","Čo znamená „tomarse en serio“ v texte „Veľmi samostatná rastlina“?"],["Interpretar algo como una indicación importante o literal.","Vnímať niečo ako dôležitý alebo doslovný pokyn."],["Que ayuda a descubrir algo importante.","Ktorý pomáha odhaliť niečo podstatné."],["La persona a la que pertenece algo.","Osoba, ktorej niečo patrí."],["¿Qué aporta «había dejado» a la escena «Una planta muy independiente»?","Čo prináša tvar „había dejado“ do scény „Veľmi samostatná rastlina“?"],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Algo anterior a otro punto pasado.","Niečo skoršie než iný minulý bod."],["¿Qué detalle aparece en «Una planta muy independiente»?","Ktorý detail sa nachádza v texte „Veľmi samostatná rastlina“?"],["Solo una planta llevaba el cartel.","Iba jedna rastlina mala oznam."],["Pocos vecinos conocían el horario.","Málo susedov poznalo otváracie hodiny."],["Los dos hablaban de libertad.","Obaja hovorili o slobode."],["En «La última palabra del diccionario», ¿qué idea resume mejor lo que ocurre?","Ktorá myšlienka najlepšie zhŕňa dej v texte „Posledné slovo slovníka“?"],["El aprendizaje puede medirse por descubrimientos concretos.","Učenie možno merať konkrétnymi objavmi."],["Un asiento transforma un lugar de paso en encuentro.","Sedenie mení priechodné miesto na miesto stretnutí."],["El silencio no confirma por sí solo el acuerdo.","Mlčanie samo osebe nepotvrdzuje súhlas."],["¿Qué significa «espectacular» en «La última palabra del diccionario»?","Čo znamená „espectacular“ v texte „Posledné slovo slovníka“?"],["Que muestra poca cercanía emocional.","Ktorý prejavuje malú citovú blízkosť."],["Una herramienta utilizada para observar o medir.","Pomôcka používaná na pozorovanie alebo meranie."],["Que produce una impresión muy llamativa.","Ktorý vyvoláva mimoriadne silný dojem."],["¿Qué aporta «he encontrado» a la escena «La última palabra del diccionario»?","Čo prináša tvar „he encontrado“ do scény „Posledné slovo slovníka“?"],["Una petición de no hacer algo.","Žiadosť, aby sa niečo nerobilo."],["Una acción anterior presentada como noticia o experiencia.","Predchádzajúci dej podaný ako správa alebo skúsenosť."],["Una previsión o promesa sobre después.","Predpoveď alebo sľub o budúcnosti."],["¿Qué detalle aparece en «La última palabra del diccionario»?","Ktorý detail sa nachádza v texte „Posledné slovo slovníka“?"],["Las primeras sillas llegaron durante una fiesta.","Prvé stoličky priniesli počas slávnosti."],["Las respuestas se recogieron sin nombres.","Odpovede zbierali bez mien."],["Luis había consultado tres palabras.","Luis si vyhľadal tri slová."]];
extraReadingTranslations.forEach(([es,sk])=>sentenceTranslations[es]=sk);
