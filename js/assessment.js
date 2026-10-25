const securityHabits = [
  {
    id: 'mfa',
    title: 'Activo la verificación en dos pasos (MFA) en mis cuentas importantes.',
    recommendation: 'Activa MFA en las cuentas importantes, empezando por tu correo y tus cuentas financieras.',
    priority: 1
  },
  {
    id: 'password-manager',
    title: 'Uso contraseñas únicas y un gestor para no reutilizarlas.',
    recommendation: 'Usa un gestor de contraseñas y cambia las claves reutilizadas por claves únicas.',
    priority: 2
  },
  {
    id: 'updates',
    title: 'Mantengo actualizados el sistema operativo, el navegador y las aplicaciones.',
    recommendation: 'Activa las actualizaciones automáticas en tus dispositivos y aplicaciones.',
    priority: 3
  },
  {
    id: 'verify-links',
    title: 'Me detengo y verifico por otro canal antes de abrir enlaces o atender solicitudes urgentes.',
    recommendation: 'Ante mensajes urgentes, haz una pausa y verifica con la persona o entidad por un canal oficial.',
    priority: 1
  },
  {
    id: 'verification-codes',
    title: 'Nunca comparto códigos de verificación ni apruebo accesos que no inicié.',
    recommendation: 'No compartas códigos; rechaza solicitudes de acceso que no hayas iniciado y avisa a soporte.',
    priority: 1
  },
  {
    id: 'backups',
    title: 'Hago copias de seguridad periódicas de mis archivos importantes.',
    recommendation: 'Programa copias periódicas y comprueba que puedas recuperar los archivos.',
    priority: 3
  },
  {
    id: 'official-apps',
    title: 'Descargo aplicaciones solo de tiendas oficiales y reviso quién las publica.',
    recommendation: 'Descarga aplicaciones desde tiendas oficiales y verifica el nombre del desarrollador.',
    priority: 3
  },
  {
    id: 'ai-privacy',
    title: 'Evito ingresar información personal, confidencial o de trabajo en herramientas públicas de IA.',
    recommendation: 'No pegues información confidencial en herramientas no aprobadas; sigue las reglas de tu organización.',
    priority: 2
  },
  {
    id: 'screen-lock',
    title: 'Bloqueo la pantalla cuando me alejo de mi dispositivo.',
    recommendation: 'Configura el bloqueo automático y úsalo cada vez que te alejes del dispositivo.',
    priority: 2
  },
  {
    id: 'report',
    title: 'Reporto mensajes, enlaces o comportamientos sospechosos a soporte o al área responsable.',
    recommendation: 'Reporta los mensajes o comportamientos sospechosos cuanto antes, incluso si no estás seguro.',
    priority: 1
  }
];

const answerOptions = [
  { value: 10, label: 'Sí, siempre' },
  { value: 5, label: 'A veces' },
  { value: 0, label: 'No / No estoy seguro' }
];

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('assessment-form');
  const questions = document.getElementById('assessment-questions');

  questions.innerHTML = securityHabits.map((habit, index) => `
    <fieldset class="habit-question">
      <legend><span class="habit-number">${String(index + 1).padStart(2, '0')}</span>${habit.title}</legend>
      <div class="habit-options">
        ${answerOptions.map((option) => `
          <label class="habit-option">
            <input type="radio" name="${habit.id}" value="${option.value}" required>
            <span>${option.label}</span>
          </label>
        `).join('')}
      </div>
    </fieldset>
  `).join('');

  form.addEventListener('change', () => {
    document.getElementById('assessment-results').hidden = true;
    updateAssessmentProgress(form);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) {
      document.getElementById('assessment-validation').innerText = 'Completa las preguntas pendientes para calcular tus resultados.';
      return;
    }

    showAssessmentResults(form);
  });

  form.addEventListener('reset', () => {
    window.setTimeout(() => {
      document.getElementById('assessment-results').hidden = true;
      document.getElementById('assessment-validation').innerText = 'Responde las 10 preguntas para ver tus resultados.';
      updateAssessmentProgress(form);
    }, 0);
  });

  document.getElementById('assessment-edit').addEventListener('click', () => {
    document.getElementById('assessment-results').hidden = true;
    document.querySelector('.habit-question input').focus();
    document.getElementById('assessment-questions').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  updateAssessmentProgress(form);
});

function updateAssessmentProgress(form) {
  const answered = securityHabits.filter((habit) => form.querySelector(`input[name="${habit.id}"]:checked`)).length;
  const progress = document.querySelector('.assessment-progress-track');
  const submit = document.getElementById('assessment-submit');

  document.getElementById('assessment-progress-text').innerText = `${answered} de ${securityHabits.length} respondidos`;
  document.getElementById('assessment-progress-fill').style.width = `${answered / securityHabits.length * 100}%`;
  progress.setAttribute('aria-valuenow', String(answered));
  submit.disabled = answered !== securityHabits.length;
  document.getElementById('assessment-validation').innerText = answered === securityHabits.length
    ? '¡Listo! Ya puedes consultar tu resumen.'
    : `Responde las ${securityHabits.length} preguntas para ver tus resultados.`;
}

function showAssessmentResults(form) {
  const answers = securityHabits.map((habit) => ({
    habit,
    score: Number(form.querySelector(`input[name="${habit.id}"]:checked`).value)
  }));
  const habitsScore = Math.round(answers.reduce((total, answer) => total + answer.score, 0) / (securityHabits.length * 10) * 100);
  const habitsLevel = habitsScore >= 80
    ? 'Buenos hábitos consolidados'
    : habitsScore >= 60
      ? 'Buenas bases, con mejoras pendientes'
      : 'Hay hábitos importantes por reforzar';
  const recommendations = answers
    .filter((answer) => answer.score < 10)
    .sort((first, second) => first.habit.priority - second.habit.priority || first.score - second.score)
    .map((answer) => `<li>${answer.habit.recommendation}</li>`);

  document.getElementById('habits-score').innerText = `${habitsScore}%`;
  document.getElementById('habits-level').innerText = habitsLevel;
  document.getElementById('habits-meter').style.width = `${habitsScore}%`;
  document.querySelector('.score-habits .score-meter').setAttribute('aria-valuenow', String(habitsScore));
  document.getElementById('assessment-recommendations').innerHTML = recommendations.length
    ? recommendations.join('')
    : '<li>¡Vas por buen camino! Mantén estos hábitos y revisa periódicamente la seguridad de tus cuentas.</li>';

  const results = document.getElementById('assessment-results');
  results.hidden = false;
  document.getElementById('assessment-results-title').focus();
  results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
