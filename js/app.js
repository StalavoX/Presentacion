const slidesData = window.slidesData;
let currentSlideIdx = 0;
let currentStepIdx = 0;
let externalWinRef = null;
const moduleVisualBySlide = {
  11: { src: 'assets/visual-defensas.svg', alt: 'Ilustración de una bóveda y una llave para proteger contraseñas', label: 'Contraseñas únicas · Bóveda segura' },
  12: { src: 'assets/visual-defensas.svg', alt: 'Ilustración de una defensa de acceso para proteger cuentas', label: 'Verifica cada solicitud de acceso' },
  13: { src: 'assets/visual-defensas.svg', alt: 'Ilustración de una llave para representar passkeys', label: 'Acceso moderno · Protección adicional' },
  14: { src: 'assets/visual-ia.svg', alt: 'Ilustración de inteligencia artificial para explicar deepfakes y clonación de voz', label: 'La voz o la imagen no bastan para verificar' },
  15: { src: 'assets/visual-ia.svg', alt: 'Ilustración de inteligencia artificial para el uso responsable de herramientas', label: 'Usa herramientas aprobadas y protege los datos' },
  16: { src: 'assets/visual-resiliencia.svg', alt: 'Ilustración de continuidad y recuperación ante incidentes', label: 'Actúa con calma · Reporta pronto' }
};
const presenterBriefsBySlide = {
  1: [
    'Da la bienvenida y presenta la sesión como una capacitación práctica que conecta el trabajo con la vida diaria. Aclara que no se trata de generar alarma ni de convertir a nadie en especialista: aprenderán a reconocer situaciones comunes, proteger sus cuentas y pedir ayuda a tiempo. Preséntate y explica brevemente cuánto durará el recorrido. Para iniciar, pregunta: «¿Qué dispositivo o cuenta usamos para algo importante todos los días?». Acepta respuestas generales —correo, teléfono, banca—, pero no solicites nombres de usuario, contraseñas ni detalles de incidentes personales. Transición: «Partiremos de esas experiencias cotidianas y veremos qué decisiones sencillas reducen el riesgo».'
  ],
  2: [
    'Preséntate en primera persona y describe brevemente tu función en O.S. GROUP, usando únicamente detalles que representen tu experiencia real. Si compartes un ejemplo, que sea general y sin nombres, datos de clientes ni incidentes confidenciales. Evita convertir esta parte en una lista extensa de cargos: basta con explicar por qué te interesa que el grupo salga con hábitos prácticos. Transición sugerida: «La seguridad no depende solo de herramientas; también de cómo respondemos en situaciones cotidianas».',
    'Explica los resultados esperados con verbos concretos: proteger, reconocer y responder. Aclara que no hace falta memorizar las siglas que aparecerán; lo importante es relacionarlas con una decisión útil. Puedes leer cada punto y pedir al grupo que piense cuál le sería más útil hoy, sin solicitar una experiencia personal. Recalca que las recomendaciones para cuentas de trabajo deben seguir las políticas y los canales de soporte de la organización. Pregunta: «Si recibieran una solicitud inesperada, ¿qué harían antes de responder?». Retoma esa pregunta al final para mostrar lo aprendido.'
  ],
  3: [
    'Agrupa phishing, smishing, vishing, quishing y AiTM como engaños que pueden llegar por correo, mensajes, llamadas o páginas falsas. No hace falta memorizar cada sigla: lo importante es reconocer una solicitud inesperada y no confiar solo en el canal o en la apariencia. Pregunta: «¿Qué tienen en común estos engaños?». Guía la respuesta hacia la pausa y la verificación por una vía independiente.',
    'Malware es el término general para software malicioso; ransomware es un tipo que puede bloquear archivos y usarse para extorsionar. Evita entrar en detalles técnicos: para el público, el paso importante es reportar pronto y seguir las indicaciones del equipo responsable, en lugar de intentar resolverlo por cuenta propia.',
    'MFA añade una comprobación de identidad; una passkey permite acceder mediante una credencial protegida por el dispositivo; un gestor ayuda a guardar y generar contraseñas únicas. Presenta estas opciones como capas complementarias y recuerda que, en el trabajo, se deben usar las herramientas aprobadas. No se debe aceptar una notificación de acceso que no se inició.',
    'Los deepfakes pueden imitar voz, imagen o video con IA. Una voz familiar no basta para confirmar una solicitud de dinero, datos o acceso: conviene verificarla mediante otro canal conocido. Usa un ejemplo ficticio y pregunta qué comprobación independiente elegirían.',
    'Sobreexposición es compartir más información de la necesaria; una fuga de datos expone información a quien no está autorizado; ciberresiliencia es prepararse, responder y recuperarse. Cierra el glosario conectando los términos con una sola idea: proteger, verificar y reportar pronto. No hace falta memorizar todas las siglas para actuar con criterio.'
  ],
  4: [
    'Introduce el paso sin culpar a nadie: los engaños se preparan para parecer normales y pueden aprovechar la prisa, la confianza o una tarea rutinaria. Modela la revisión con tres preguntas: quién escribe, qué solicita y si esperabas ese contacto. No es necesario detectar todas las señales ni resolver si un mensaje es falso a primera vista; primero queremos ganar tiempo para decidir. Pregunta: «¿Qué detalle mirarían antes de abrir un adjunto?».',
    'Pausar rompe la urgencia que impone el mensaje. No respondas por impulso, no compartas códigos y no apruebes un acceso que no iniciaste. Una frase útil para practicar es: «Voy a comprobarlo por el canal oficial y luego respondo». No hace falta discutir con quien llama ni demostrar que está engañando; termina la interacción y revisa la solicitud por separado. Transición: «La pausa nos da tiempo para el tercer paso: confirmar».',
    'Verifica por una vía independiente: abre la aplicación oficial, usa un marcador conocido o llama al número de contacto que ya tienes, no al que aparece en el mensaje sospechoso. Pide al grupo un ejemplo de canal confiable sin mencionar cuentas personales. Si alguien ya hizo clic o compartió algo por error, la prioridad es reportar pronto; no culpabilices ni sugieras ocultarlo. Cierra con la secuencia completa: reconocer, pausar, verificar y, si hay una sospecha o error, reportar.'
  ],
  5: [
    'Presenta el caso con atribución precisa: EPM informó que el incidente ocurrió en un contratista y que pudo comprometer información asociada a la cartera; también aclaró que su propia infraestructura y sistemas internos no fueron comprometidos. Mantén esa distinción para no exagerar el alcance. Pregunta qué información podría circular entre una organización y un proveedor, sin pedir ejemplos confidenciales. Aprendizaje: compartir datos con terceros requiere responsabilidades y canales claros, y cualquier envío inusual debe reportarse.',
    'Explica la noticia como una cifra de intentos reportados para el periodo indicado, bloqueados según la cobertura; no la presentes como millones de accesos exitosos ni como una medición independiente. Pregunta: «¿Un intento de ataque confirma que hubo una vulneración?». Usa las respuestas para diferenciar actividad detectada de impacto confirmado. El ejemplo permite reconocer el valor de prevenir y responder, pero no demuestra que todos los incidentes se puedan bloquear ni permite comparar por sí solo el nivel de seguridad entre organizaciones.',
    'Al presentar este caso, separa lo que informó la cobertura de aquello que la compañía confirmó; evita añadir una causa o un alcance que la fuente no establece. Centra la conversación en tres principios generales: limitar accesos a quienes los necesitan, proteger la información sensible y coordinar la respuesta y la comunicación. Pregunta qué ayuda a una organización a actuar con claridad cuando aparece una exposición. Transición: «Estos casos muestran por qué conviene conectar la protección de cuentas, dispositivos e información en nuestra vida diaria».'
  ],
  6: [
    'Empieza por las finanzas y explica que las cuentas de banca y pagos pueden tener consecuencias directas si alguien más obtiene acceso. No pidas que nadie comparta bancos, saldos, nombres de usuario ni ejemplos privados. Sugiere protegerlas con una clave única y el método de verificación disponible. Pregunta: «¿Qué hábito general protege una cuenta financiera sin revelar nada sobre ella?». Enfatiza las prácticas, no una marca o proveedor específico.',
    'El correo y las herramientas de trabajo pueden reunir mensajes, documentos y accesos a otros servicios. Por eso es importante usar las cuentas y aplicaciones conforme a las indicaciones de la organización y no reenviar información laboral a servicios personales sin autorización. Si llega una solicitud inusual de acceso o de envío de archivos, pausa y verifica. Transición: «La actividad laboral es solo uno de los entornos conectados; sigamos con nuestras comunicaciones».',
    'La mensajería facilita el contacto, pero también puede usarse para suplantar a familiares, colegas o proveedores. Un nombre o una foto conocida no prueban quién envía una solicitud. Para un pedido sensible —dinero, información o aprobación— verifica por otro canal que ya conozcas. Puedes proponer una situación ficticia de cambio urgente de cuenta bancaria y preguntar qué comprobación harían antes de actuar.',
    'Las cuentas del hogar y la vida personal —compras, salud o entretenimiento— también guardan datos valiosos y pueden estar vinculadas al correo principal. Recomienda contraseñas únicas y MFA donde el servicio lo ofrezca. Aclara que no todos los servicios tienen las mismas opciones y que no se deben compartir códigos de recuperación. Pregunta: «¿Qué cuenta podría ayudar a recuperar varias otras?». La respuesta permite conectar la importancia del correo principal con los entornos anteriores.',
    'Las plataformas educativas y de aprendizaje también pueden guardar datos personales, trabajos y credenciales. Recomienda entrar desde los canales oficiales y no reutilizar la contraseña de una cuenta importante. Si se comparte un dispositivo para estudiar, cerrar la sesión al terminar ayuda a evitar accesos accidentales. Pregunta: «¿Qué harían antes de iniciar sesión en un equipo compartido?».',
    'Añade los portales de servicios y trámites, donde puede haber información de identidad o datos de contacto. Antes de ingresar información, comprueba que abriste el portal oficial, especialmente si llegaste desde un mensaje o un código QR. Evita compartir documentos o códigos de verificación con quien te contacte de forma inesperada. Transición: «En todos estos entornos, un mismo dispositivo puede mantener varias sesiones abiertas».',
    'Cierra la idea del efecto dominó: un teléfono o portátil puede mantener abiertas sesiones de varios entornos, así que protegerlo ayuda a proteger más de una cuenta. Recorre las tres medidas de la tarjeta y explica su propósito: bloquear la pantalla dificulta el acceso casual, actualizar ayuda a mantener el sistema al día y reportar pronto una pérdida permite que soporte evalúe los siguientes pasos. Para dispositivos corporativos, sigue siempre las instrucciones internas; no indiques borrar datos, cambiar claves o aplicar otras acciones técnicas por cuenta propia. Transición: «Además de cuidar el dispositivo, revisemos cómo protegemos el acceso a las cuentas».'
  ],
  10: [
    'Explica el riesgo sin herramientas ni detalles técnicos: una página falsa puede intentar intermediar en un inicio de sesión y robar credenciales o una sesión. La idea no es hacer creer que MFA no sirve; sigue siendo una capa útil, pero no bloquea todos los engaños. Compara la página falsa con una recepción que parece legítima y pregunta qué comprobarían antes de entregar una llave. Enfatiza verificar el dominio y llegar al servicio por una ruta conocida.',
    'Presenta las passkeys o llaves de seguridad como alternativas que pueden ofrecer mayor resistencia al phishing, si el servicio las admite y la organización las aprueba. Si la persona usa notificaciones MFA, solo debe responder a las que inició y reconoce. Ante una solicitud inesperada, rechazarla y avisar a soporte es más seguro que aprobarla para quitarse la molestia. Pregunta: «¿Qué harían si llega una aprobación mientras no están intentando entrar?». Cierra el bloque de amenazas y enlaza con las defensas: «Empecemos por reducir el riesgo de las contraseñas reutilizadas».'
  ],
  7: [
    'Compara los dos canales que aparecen en la tarjeta: smishing llega por mensaje y vishing por llamada. Ambos pueden imitar a una entidad conocida y añadir urgencia. El nombre, logotipo o número visible no basta para autenticar a quien contacta. Usa el ejemplo ficticio del paquete retenido o la cuenta bloqueada y pide que el grupo identifique qué información están solicitando. Evita mostrar enlaces reales o hacer que alguien responda a un mensaje.',
  ],
  8: [
    'Un QR solo facilita abrir un destino; su apariencia no permite saber si ese destino es confiable. Antes de iniciar sesión, pagar o ingresar datos, revisa el dominio que muestra el teléfono y confirma que el código corresponde a algo que esperabas. Si la solicitud resulta extraña, no continúes y verifica por un canal conocido. No hace falta escanear un QR en vivo para enseñar el hábito: podemos practicar con la pregunta «¿Qué destino debería abrir y coincide con lo que esperaba?».',
    'Explica que una foto puede revelar información aunque el texto de la publicación parezca inocuo: identificaciones, documentos o pantallas al fondo, además de ubicación y rutinas. Sugiere revisar el encuadre, quién verá la publicación y si hace falta compartirla en ese momento. No se trata de abandonar las redes sociales, sino de reducir detalles innecesarios. Pregunta: «¿Qué revisarían en una foto de su escritorio antes de publicarla?». Acepta ideas generales, sin pedir que muestren imágenes personales. Transición: «Veamos dos ejemplos documentados de suplantación y distingamos qué técnica se usó en cada uno».'
  ],
  11: [
    'Explica el efecto dominó con una situación sencilla: si una clave se reutiliza y queda expuesta en un servicio, otras cuentas con la misma clave también podrían quedar en riesgo. Eso no significa que todas sean vulneradas automáticamente; el riesgo surge porque la misma contraseña sirve en más de un lugar. Pregunta qué cuentas sería prioritario proteger —por ejemplo, el correo principal—, sin pedir que nadie revele ni muestre sus contraseñas. Transición: «La solución debe hacer sostenible el uso de claves diferentes».',
    'Un gestor de contraseñas puede generar y guardar claves únicas, reduciendo la necesidad de memorizarlas todas. Para el trabajo, recomienda únicamente una herramienta aprobada por la organización. La cuenta que protege la bóveda también merece una clave robusta y las opciones de recuperación recomendadas. Antes de iniciar sesión, comprueba el dominio: el autocompletado puede ser una pista, no una garantía. Pregunta: «¿Qué beneficio tendría no repetir una clave?» y enlaza la respuesta con las siguientes medidas de autenticación.'
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  initializeCompanyLogo();
  renderSlide();
  setupKeyboard();
  setupViewTabs();
});

document.addEventListener('fullscreenchange', () => {
  const isPresenting = Boolean(document.fullscreenElement);
  document.body.classList.toggle('presentation-mode', isPresenting);
  const button = document.getElementById('presentation-button');
  const label = document.getElementById('presentation-button-label');
  button.setAttribute('aria-pressed', String(isPresenting));
  label.innerText = isPresenting ? 'Salir' : 'Presentar';
  button.title = isPresenting ? 'Salir de la presentación (Escape)' : 'Iniciar presentación (F)';
});

function renderSlide() {
  const slide = slidesData[currentSlideIdx];

  updateSlideArtwork(slide);
  document.getElementById('slide-badge').innerText = `Diapositiva ${slide.id} de ${slidesData.length}`;
  document.getElementById('slide-header-title').innerText = slide.title;
  document.getElementById('slide-category').innerText = slide.category;
  document.getElementById('slide-number-indicator').innerText = `${slide.id < 10 ? '0' + slide.id : slide.id} / ${slidesData.length}`;
  document.getElementById('slide-main-title').innerText = slide.title;
  const isGlossary = slide.id === 3;
  const isGuidedStep = [4, 6].includes(slide.id);
  const stepUnit = isGlossary ? 'Concepto' : isGuidedStep ? 'Paso' : 'Tarjeta';
  document.getElementById('step-counter').innerText = `${stepUnit} ${currentStepIdx + 1}/${slide.cards.length}`;
  document.getElementById('step-next-label').innerText = isGlossary ? 'Siguiente concepto' : isGuidedStep ? 'Siguiente paso' : 'Siguiente Tarjeta';

  const wrapper = document.getElementById('slide-cards-wrapper');
  wrapper.innerHTML = '';
  const moduleVisual = moduleVisualBySlide[slide.id];
  wrapper.classList.toggle('news-slide', slide.id === 5);
  wrapper.classList.toggle('glossary-slide', isGlossary);
  wrapper.classList.toggle('module-illustrated-slide', Boolean(moduleVisual));
  wrapper.classList.toggle('human-factor-slide', slide.id === 4);
  wrapper.classList.toggle('connected-environment-slide', slide.id === 6);
  wrapper.classList.toggle('connected-environment-complete', slide.id === 6 && currentStepIdx === slide.cards.length - 1);
  wrapper.classList.toggle('space-y-4', slide.id !== 5 && !isGlossary && !moduleVisual && !isGuidedStep);

  const cardsContainer = moduleVisual ? document.createElement('div') : wrapper;
  if (moduleVisual) {
    const layout = slide.id === 12 ? 'module-content-stack-three' : [11, 14, 16].includes(slide.id) ? 'module-content-stack-two' : '';
    cardsContainer.className = `module-content-stack ${layout}`;
  }

  slide.cards.forEach((card, idx) => {
    const cardDiv = document.createElement('div');
    const isActive = idx <= currentStepIdx;
    cardDiv.className = `card-step p-4 rounded-xl border ${isActive ? 'active' : ''}`;
    
    if (card.type === 'problem') {
      cardDiv.classList.add('bg-red-50/60', 'border-red-200', 'card-step-problem');
    } else if (card.type === 'solution') {
      cardDiv.classList.add('bg-emerald-50/60', 'border-emerald-200', 'card-step-solution');
    } else {
      cardDiv.classList.add('bg-slate-50/60', 'border-slate-200', 'card-step-info');
    }

    cardDiv.innerHTML = `
      <h3 class="text-sm font-bold text-slate-800 mb-2">${card.title}</h3>
      <div>${card.content}</div>
    `;
    cardsContainer.appendChild(cardDiv);
  });

  if (isGlossary) {
    const takeaway = document.createElement('div');
    takeaway.className = 'glossary-takeaway';
    takeaway.innerHTML = `
      <i class="fa-solid fa-shield-halved" aria-hidden="true"></i>
      <p><strong>No tienes que memorizar las siglas.</strong> Ante una duda: pausa, verifica y reporta.</p>
    `;
    wrapper.appendChild(takeaway);
  }

  if (moduleVisual) {
    const visualPanel = document.createElement('aside');
    visualPanel.className = 'module-visual-panel';
    visualPanel.innerHTML = `
      <img src="${moduleVisual.src}" alt="${moduleVisual.alt}">
      <p>${moduleVisual.label}</p>
    `;
    wrapper.appendChild(cardsContainer);
    wrapper.appendChild(visualPanel);
  }

  syncExternal();
}

function updateSlideArtwork(slide) {
  const artworkByModule = [
    { keyword: 'MÓDULO 1:', src: 'assets/visual-intro.svg', alt: 'Ilustración de ciberseguridad y protección digital' },
    { keyword: 'MÓDULO 2:', src: 'assets/visual-riesgos.svg', alt: 'Ilustración de alertas y evaluación de riesgos digitales' },
    { keyword: 'MÓDULO 3:', src: 'assets/visual-movil.svg', alt: 'Ilustración de autenticación segura en dispositivos móviles' },
    { keyword: 'MÓDULO 4:', src: 'assets/visual-defensas.svg', alt: 'Ilustración de defensas de cuentas y protección de accesos' },
    { keyword: 'MÓDULO 5:', src: 'assets/visual-ia.svg', alt: 'Ilustración de inteligencia artificial y verificación digital' },
    { keyword: 'MÓDULO 6:', src: 'assets/visual-resiliencia.svg', alt: 'Ilustración de continuidad y respuesta ante incidentes' }
  ];
  const artwork = artworkByModule.find(({ keyword }) => slide.category.startsWith(keyword));
  const image = document.getElementById('slide-artwork');

  if (slide.id === 5 || moduleVisualBySlide[slide.id] || !artwork) {
    image.classList.add('hidden');
    image.removeAttribute('src');
    image.alt = '';
    return;
  }

  if (image.getAttribute('src') !== artwork.src) {
    image.classList.remove('artwork-enter');
    image.src = artwork.src;
    void image.offsetWidth;
    image.classList.add('artwork-enter');
  }
  image.alt = artwork.alt;
  image.classList.remove('hidden');
}

function initializeCompanyLogo() {
  const logo = document.getElementById('company-logo');
  const fallback = document.getElementById('company-logo-fallback');

  const showLogo = () => {
    logo.classList.remove('hidden');
    fallback.classList.add('hidden');
  };
  const showFallback = () => {
    logo.classList.add('hidden');
    fallback.classList.remove('hidden');
  };

  logo.addEventListener('load', showLogo);
  logo.addEventListener('error', showFallback);

  if (logo.complete) {
    logo.naturalWidth > 0 ? showLogo() : showFallback();
  }
}

function nextStep() {
  const slide = slidesData[currentSlideIdx];
  if (currentStepIdx < slide.cards.length - 1) {
    currentStepIdx++;
  } else if (currentSlideIdx < slidesData.length - 1) {
    currentSlideIdx++;
    currentStepIdx = 0;
  }
  renderSlide();
}

function prevStep() {
  if (currentStepIdx > 0) {
    currentStepIdx--;
  } else if (currentSlideIdx > 0) {
    currentSlideIdx--;
    currentStepIdx = slidesData[currentSlideIdx].cards.length - 1;
  }
  renderSlide();
}

function setupKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (document.getElementById('presentation-view').hidden) {
      return;
    }

    if (e.target instanceof HTMLElement && e.target.isContentEditable) {
      return;
    }

    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      nextStep();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevStep();
    } else if (e.key.toLowerCase() === 'f' && !e.ctrlKey && !e.altKey && !e.metaKey) {
      e.preventDefault();
      togglePresentationMode();
    }
  });
}

function setupViewTabs() {
  const tablist = document.querySelector('[role="tablist"]');
  const tabs = [...tablist.querySelectorAll('[role="tab"]')];

  tabs.forEach((tab) => {
    tab.tabIndex = tab.getAttribute('aria-selected') === 'true' ? 0 : -1;
  });

  tablist.addEventListener('keydown', (event) => {
    const currentIndex = tabs.indexOf(document.activeElement);
    if (currentIndex < 0) {
      return;
    }

    let nextIndex;
    if (event.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % tabs.length;
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    tabs[nextIndex].focus();
    tabs[nextIndex].click();
  });
}

function switchAppView(view) {
  const views = [
    { id: 'presentation', view: 'presentation-view', tab: 'presentation-tab' },
    { id: 'assessment', view: 'assessment-view', tab: 'assessment-tab' },
    { id: 'simulator', view: 'simulator-view', tab: 'simulator-tab' }
  ];
  const selectedView = views.find((item) => item.id === view) || views[0];

  views.forEach((item) => {
    const isActive = item === selectedView;
    document.getElementById(item.view).hidden = !isActive;
    document.getElementById(item.tab).classList.toggle('active', isActive);
    document.getElementById(item.tab).setAttribute('aria-selected', String(isActive));
    document.getElementById(item.tab).tabIndex = isActive ? 0 : -1;
  });
  document.body.classList.toggle('secondary-view-active', selectedView.id !== 'presentation');
}

async function togglePresentationMode() {
  if (document.fullscreenElement) {
    await document.exitFullscreen();
    return;
  }

  if (!document.documentElement.requestFullscreen) {
    window.alert('Este navegador no permite iniciar el modo de pantalla completa.');
    return;
  }

  try {
    await document.documentElement.requestFullscreen();
  } catch (error) {
    console.error('No se pudo iniciar el modo de presentación:', error);
    window.alert('No se pudo iniciar la pantalla completa. Inténtalo desde un navegador compatible.');
  }
}

function openExternalPresenter() {
  externalWinRef = window.open('', 'ModoPresentadorOSGroup', 'width=600,height=700');
  if (!externalWinRef) {
    window.alert('El navegador bloqueó la ventana de notas. Permite las ventanas emergentes para este archivo e inténtalo de nuevo.');
    return;
  }

  externalWinRef.document.write(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Notas privadas del presentador</title>
      <style>
        :root { color-scheme: dark; font-family: system-ui, sans-serif; background: #0f172a; color: #e2e8f0; }
        body { max-width: 48rem; margin: 0 auto; padding: 1.5rem; }
        header { display: flex; justify-content: space-between; gap: 1rem; border-bottom: 1px solid #334155; padding-bottom: 1rem; }
        .brand { color: #fb923c; font-size: .75rem; font-weight: 800; letter-spacing: .08em; }
        #ext-slide-num { color: #cbd5e1; font-size: .8rem; }
        h1 { color: #fdba74; font-size: 1.35rem; margin: 1.5rem 0 .5rem; }
        #ext-card-title { color: #94a3b8; font-size: .85rem; font-weight: 700; text-transform: uppercase; }
        .notes { margin: 1.5rem 0; padding: 1.25rem; border: 1px solid #334155; border-radius: .8rem; background: #1e293b; line-height: 1.65; }
        .privacy { color: #94a3b8; font-size: .75rem; line-height: 1.5; }
        nav { display: flex; gap: .75rem; }
        button { flex: 1; padding: .75rem; border: 1px solid #475569; border-radius: .5rem; background: #1e293b; color: #f8fafc; font-weight: 700; cursor: pointer; }
        button:last-child { border-color: #ea580c; background: #ea580c; }
        button:focus-visible { outline: 3px solid #fdba74; outline-offset: 2px; }
      </style>
    </head>
    <body>
      <header>
        <span class="brand">O.S. GROUP · NOTAS PRIVADAS</span>
        <span id="ext-slide-num"></span>
      </header>
      <main>
        <h1 id="ext-title"></h1>
        <div id="ext-card-title"></div>
        <section class="notes" aria-labelledby="notes-heading">
          <h2 id="notes-heading">Guion breve para hablar</h2>
          <p id="ext-notes"></p>
        </section>
        <p class="privacy">Las notas no se incorporan a las diapositivas. Comparte solo la ventana de presentación y verifica qué ventana proyectas. No incluyas secretos: las notas forman parte de los archivos locales.</p>
        <nav aria-label="Controles de diapositiva">
          <button id="ext-prev" type="button">← Anterior</button>
          <button id="ext-next" type="button">Siguiente →</button>
        </nav>
      </main>
    </body>
    </html>
  `);
  externalWinRef.document.close();
  externalWinRef.document.getElementById('ext-prev').addEventListener('click', () => window.prevStep());
  externalWinRef.document.getElementById('ext-next').addEventListener('click', () => window.nextStep());
  syncExternal();
}

function syncExternal() {
  if (externalWinRef && !externalWinRef.closed) {
    const slide = slidesData[currentSlideIdx];
    const activeCard = slide.cards[currentStepIdx] || slide.cards[0];

    const extNum = externalWinRef.document.getElementById('ext-slide-num');
    const extTitle = externalWinRef.document.getElementById('ext-title');
    const extCardTitle = externalWinRef.document.getElementById('ext-card-title');
    const extNotes = externalWinRef.document.getElementById('ext-notes');

    if (extNum) extNum.innerText = `Diapositiva ${slide.id} / ${slidesData.length}`;
    if (extTitle) extTitle.innerText = slide.title;
    const stepUnit = slide.id === 3 ? 'Concepto' : [4, 6].includes(slide.id) ? 'Paso' : 'Tarjeta';
    if (extCardTitle) extCardTitle.innerText = `${stepUnit} ${currentStepIdx + 1}: ${activeCard.title}`;
    const slideBriefs = presenterBriefsBySlide[slide.id];
    if (extNotes) extNotes.innerText = slideBriefs ? slideBriefs[currentStepIdx] : activeCard.notes;
  }
}
