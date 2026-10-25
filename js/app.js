const slidesData = window.slidesData;
let currentSlideIdx = 0;
let currentStepIdx = 0;
let externalWinRef = null;

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
  document.getElementById('step-counter').innerText = `Tarjeta ${currentStepIdx + 1}/${slide.cards.length}`;

  const wrapper = document.getElementById('slide-cards-wrapper');
  wrapper.innerHTML = '';
  wrapper.classList.toggle('news-slide', slide.id === 5);
  wrapper.classList.toggle('space-y-4', slide.id !== 5);

  slide.cards.forEach((card, idx) => {
    const cardDiv = document.createElement('div');
    cardDiv.className = `card-step p-4 rounded-xl border ${idx <= currentStepIdx ? 'active' : ''}`;
    
    if (card.type === 'problem') {
      cardDiv.classList.add('bg-red-50/60', 'border-red-200');
    } else if (card.type === 'solution') {
      cardDiv.classList.add('bg-emerald-50/60', 'border-emerald-200');
    } else {
      cardDiv.classList.add('bg-slate-50/60', 'border-slate-200');
    }

    cardDiv.innerHTML = `
      <h3 class="text-sm font-bold text-slate-800 mb-2">${card.title}</h3>
      <div>${card.content}</div>
    `;
    wrapper.appendChild(cardDiv);
  });

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

  if (slide.id === 5 || !artwork) {
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
          <h2 id="notes-heading">Guion para hablar</h2>
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
    if (extCardTitle) extCardTitle.innerText = `Tarjeta ${currentStepIdx + 1}: ${activeCard.title}`;
    if (extNotes) extNotes.innerText = activeCard.notes;
  }
}
