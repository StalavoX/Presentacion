const securityScenarios = [
  {
    channel: 'SMS / WHATSAPP',
    icon: 'fa-brands fa-whatsapp',
    title: 'Caso A: Paquete retenido',
    sender: 'Mensaje recibido',
    message: 'Estimado usuario, su paquete #CO-8921 está retenido. Actualice sus datos aquí para evitar devolución.',
    url: 'http://bit.ly/envio-urgente-2026',
    hint: '¿Esperabas un envío? Comprueba quién envía el mensaje y adónde conduce el enlace.',
    prompt: '¿Qué harías?',
    choices: [
      {
        label: 'Hacer clic de inmediato para no perder el envío.',
        correct: false,
        feedback: 'No abras el enlace. La urgencia, el remitente desconocido y el enlace acortado son señales de alerta. Si esperas un paquete, consulta su estado en el sitio o la aplicación oficial de la transportadora.'
      },
      {
        label: 'Eliminar el mensaje y bloquear el número sin hacer clic.',
        correct: true,
        feedback: 'Correcto. No abras ni respondas el mensaje; bloquéalo y repórtalo como spam. Si esperas un envío, verifica directamente en el canal oficial de la empresa.'
      }
    ]
  },
  {
    channel: 'CORREO / CÓDIGO QR',
    icon: 'fa-solid fa-envelope',
    title: 'Caso B: PDF con código QR de RRHH',
    sender: 'Correo recibido · PDF adjunto',
    message: 'Actualización de Nómina: escanee el código QR adjunto con su celular para confirmar su cuenta bancaria.',
    attachment: 'ACTUALIZACION_NOMINA.pdf  ·  Contiene un código QR',
    hint: 'Un QR puede abrir un enlace. ¿Puedes confirmar esta solicitud por un canal conocido?',
    prompt: '¿Qué harías?',
    choices: [
      {
        label: 'Escanear el QR con el celular personal rápidamente.',
        correct: false,
        feedback: 'No escanees un QR inesperado. Puede llevarte a una página falsa o solicitar credenciales y datos bancarios. Verifica la solicitud con RRHH usando un canal interno conocido.'
      },
      {
        label: 'Verificar por canal interno con RRHH antes de escanear.',
        correct: true,
        feedback: 'Correcto. Confirma la solicitud con RRHH por un canal interno que ya conozcas, no usando datos de contacto incluidos en el correo sospechoso.'
      }
    ]
  },
  {
    channel: 'LLAMADA TELEFÓNICA',
    icon: 'fa-solid fa-phone',
    title: 'Caso C: Llamada del “Soporte de TI”',
    sender: 'Llamada entrante · Número no verificado',
    message: 'Hola, soy del Soporte de Sistemas de O.S. GROUP. Te envié un código de 6 dígitos por SMS, dímelo urgente para bloquear un ataque.',
    hint: 'Un código de un solo uso puede permitir el acceso a tu cuenta. ¿Iniciaste tú esa acción?',
    prompt: '¿Qué harías?',
    choices: [
      {
        label: 'Colgar y verificar con TI por un canal oficial.',
        correct: true,
        feedback: 'Correcto. Nunca compartas códigos de verificación. Cuelga y contacta a TI mediante el número o canal oficial de la organización para reportar la llamada.'
      },
      {
        label: 'Dictar el código para acelerar el bloqueo del hacker.',
        correct: false,
        feedback: 'No compartas el código. Podría permitir que otra persona acceda a tu cuenta. Cuelga y contacta directamente al equipo de TI por un canal oficial.'
      }
    ]
  },
  {
    channel: 'GOBERNANZA DE IA',
    icon: 'fa-solid fa-wand-magic-sparkles',
    title: 'Caso D: Datos de clientes en una IA gratuita',
    sender: 'Situación de trabajo',
    message: 'Tienes una lista de clientes con nombres, cédulas y montos adeudados y decides pegarla en un modelo de IA pública gratuita para que te haga un resumen.',
    hint: '¿La herramienta está aprobada y tienes autorización para compartir esos datos?',
    prompt: '¿Qué harías?',
    choices: [
      {
        label: 'Es seguro; las IA no guardan nada.',
        correct: false,
        feedback: 'No asumas que una herramienta pública no conserva o procesa lo que envías. No cargues datos personales o confidenciales; sigue la política de tu organización y usa solo herramientas aprobadas.'
      },
      {
        label: 'No compartirlos; consultar la política y usar solo herramientas autorizadas.',
        correct: true,
        feedback: 'Correcto. No compartas datos personales o confidenciales sin autorización. Sigue la política de la organización y utiliza solo herramientas aprobadas, con las condiciones de privacidad adecuadas.'
      }
    ]
  }
];

let simulatorCaseIndex = 0;
let simulatorScore = 0;
let simulatorAnswered = false;

document.addEventListener('DOMContentLoaded', () => {
  renderSimulatorCase();
  document.getElementById('simulator-next').addEventListener('click', advanceSimulator);
  document.getElementById('simulator-restart').addEventListener('click', restartSimulator);
  document.getElementById('simulator-hint-toggle').addEventListener('click', toggleSimulatorHint);
});

function renderSimulatorCase() {
  const scenario = securityScenarios[simulatorCaseIndex];
  const icon = document.getElementById('simulator-case-icon');
  icon.className = `simulator-case-icon ${scenario.icon}`;
  document.getElementById('simulator-case-channel').innerText = scenario.channel;
  document.getElementById('simulator-case-title').innerText = scenario.title;
  document.getElementById('simulator-case-counter').innerText = `CASO ${simulatorCaseIndex + 1} DE ${securityScenarios.length}`;
  document.getElementById('simulator-progress-label').innerText = `${simulatorCaseIndex} de ${securityScenarios.length} decisiones`;
  document.getElementById('simulator-progress-fill').style.width = `${simulatorCaseIndex / securityScenarios.length * 100}%`;
  document.querySelector('.simulator-progress .assessment-progress-track').setAttribute('aria-valuenow', String(simulatorCaseIndex));
  document.getElementById('simulator-score').innerText = String(simulatorScore);
  const hint = document.getElementById('simulator-hint');
  hint.innerText = scenario.hint;
  hint.hidden = true;
  const hintToggle = document.getElementById('simulator-hint-toggle');
  hintToggle.hidden = false;
  hintToggle.innerText = 'Ver una pista';
  hintToggle.setAttribute('aria-expanded', 'false');

  renderScenarioMessage(scenario);
  renderScenarioChoices(scenario);

  const feedback = document.getElementById('simulator-feedback');
  feedback.hidden = true;
  feedback.className = 'simulator-feedback';
  document.getElementById('simulator-next').hidden = true;
  simulatorAnswered = false;
}

function toggleSimulatorHint() {
  const hint = document.getElementById('simulator-hint');
  const toggle = document.getElementById('simulator-hint-toggle');
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  hint.hidden = expanded;
  toggle.setAttribute('aria-expanded', String(!expanded));
  toggle.innerText = expanded ? 'Ver una pista' : 'Ocultar pista';
}

function renderScenarioMessage(scenario) {
  const scene = document.getElementById('simulator-scene');
  scene.replaceChildren();

  const sender = document.createElement('span');
  sender.className = 'simulator-scene-sender';
  sender.innerText = scenario.sender;
  scene.appendChild(sender);

  const bubble = document.createElement('p');
  bubble.className = 'simulator-message-bubble';
  bubble.innerText = scenario.message;
  scene.appendChild(bubble);

  if (scenario.url) {
    const url = document.createElement('code');
    url.className = 'simulator-suspicious-url';
    url.innerText = scenario.url;
    url.setAttribute('aria-label', `Enlace sospechoso mostrado como texto no activo: ${scenario.url}`);
    scene.appendChild(url);
  }

  if (scenario.attachment) {
    const attachment = document.createElement('span');
    attachment.className = 'simulator-attachment';
    attachment.innerHTML = '<i class="fa-solid fa-file-pdf" aria-hidden="true"></i>';
    const label = document.createElement('span');
    label.innerText = scenario.attachment;
    attachment.appendChild(label);
    scene.appendChild(attachment);
  }
}

function renderScenarioChoices(scenario) {
  const choices = document.getElementById('simulator-choices');
  choices.replaceChildren();

  scenario.choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.className = 'simulator-choice';
    button.type = 'button';
    button.innerText = choice.label;
    button.addEventListener('click', () => selectSimulatorChoice(index));
    choices.appendChild(button);
  });
}

function selectSimulatorChoice(choiceIndex) {
  if (simulatorAnswered) {
    return;
  }

  const scenario = securityScenarios[simulatorCaseIndex];
  const selectedChoice = scenario.choices[choiceIndex];
  if (!selectedChoice) {
    return;
  }

  simulatorAnswered = true;
  if (selectedChoice.correct) {
    simulatorScore++;
  }

  const choiceButtons = [...document.querySelectorAll('.simulator-choice')];
  choiceButtons.forEach((button, index) => {
    button.disabled = true;
    if (scenario.choices[index].correct) {
      button.classList.add('choice-correct');
    } else if (index === choiceIndex) {
      button.classList.add('choice-incorrect');
    }
  });

  const feedback = document.getElementById('simulator-feedback');
  feedback.classList.add(selectedChoice.correct ? 'feedback-correct' : 'feedback-incorrect');
  feedback.innerHTML = `
    <strong><i class="fa-solid ${selectedChoice.correct ? 'fa-circle-check' : 'fa-circle-xmark'}" aria-hidden="true"></i> ${selectedChoice.correct ? '¡Decisión segura!' : 'Señal de alerta'}</strong>
    <p></p>
  `;
  feedback.querySelector('p').innerText = selectedChoice.feedback;
  feedback.hidden = false;

  document.getElementById('simulator-score').innerText = String(simulatorScore);
  document.getElementById('simulator-progress-label').innerText = `${simulatorCaseIndex + 1} de ${securityScenarios.length} decisiones`;
  document.getElementById('simulator-progress-fill').style.width = `${(simulatorCaseIndex + 1) / securityScenarios.length * 100}%`;
  document.querySelector('.simulator-progress .assessment-progress-track').setAttribute('aria-valuenow', String(simulatorCaseIndex + 1));

  const nextButton = document.getElementById('simulator-next');
  nextButton.innerHTML = simulatorCaseIndex === securityScenarios.length - 1
    ? 'Ver resultado <i class="fa-solid fa-flag-checkered" aria-hidden="true"></i>'
    : 'Siguiente caso <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>';
  nextButton.hidden = false;
  document.getElementById('simulator-hint-toggle').hidden = true;
  document.getElementById('simulator-hint').hidden = true;
  nextButton.focus();
}

function advanceSimulator() {
  if (!simulatorAnswered) {
    return;
  }

  if (simulatorCaseIndex < securityScenarios.length - 1) {
    simulatorCaseIndex++;
    renderSimulatorCase();
    document.getElementById('simulator-case-title').focus();
    return;
  }

  showSimulatorResults();
}

function showSimulatorResults() {
  document.getElementById('simulator-game').hidden = true;
  document.getElementById('simulator-results').hidden = false;
  document.getElementById('simulator-final-score').innerText = `${simulatorScore}/${securityScenarios.length}`;

  let icon;
  let title;
  let message;
  if (simulatorScore === securityScenarios.length) {
    icon = 'fa-solid fa-shield-halved';
    title = '¡Excelente criterio!';
    message = 'Identificaste todas las decisiones seguras. Mantén la pausa, verifica por canales oficiales y reporta lo sospechoso.';
  } else if (simulatorScore >= 2) {
    icon = 'fa-solid fa-shield-halved';
    title = '¡Buen trabajo! Sigue practicando.';
    message = 'Reconociste varias señales de alerta. Revisa los casos que te hicieron dudar y vuelve a intentarlo para reforzar el hábito.';
  } else {
    icon = 'fa-solid fa-shield-halved';
    title = 'Cada intento es una oportunidad para aprender.';
    message = 'Repasa las explicaciones de cada caso y vuelve a jugar. Ante la duda, no compartas datos ni códigos: verifica por un canal oficial.';
  }

  document.getElementById('simulator-results-icon').className = `simulator-results-icon ${icon}`;
  document.getElementById('simulator-results-title').innerText = title;
  document.getElementById('simulator-results-message').innerText = message;
  document.getElementById('simulator-results-title').focus();
  document.getElementById('simulator-results').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartSimulator() {
  simulatorCaseIndex = 0;
  simulatorScore = 0;
  simulatorAnswered = false;
  document.getElementById('simulator-results').hidden = true;
  document.getElementById('simulator-game').hidden = false;
  renderSimulatorCase();
  document.getElementById('simulator-case-title').focus();
  document.getElementById('simulator-game').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
