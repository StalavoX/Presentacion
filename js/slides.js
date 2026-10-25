window.slidesData = [
      {
        id: 1,
        category: "MÓDULO 1: INTRODUCCIÓN",
        title: "Protege tu Vida Digital: Ciberseguridad y Ciberresiliencia",
        cards: [
          {
            title: "Capacitación Estratégica para el Trabajo y el Hogar (Año 2026)",
            type: "info",
            content: `
              <div class="text-center py-6">
                <div class="inline-block bg-orange-100 text-orange-700 p-4 rounded-2xl mb-4">
                  <i class="fa-solid fa-shield-halved text-5xl"></i>
                </div>
                <h3 class="text-2xl font-black text-slate-800 mb-2">O.S. GROUP | Aliado Estratégico de TI</h3>
                <p class="text-slate-600 font-medium">Expositor: <span class="font-bold text-orange-600">Steven Alexander Avilés</span></p>
                <div class="mt-4 inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-xs text-slate-600 font-bold">
                  <i class="fa-solid fa-calendar"></i>
                  <span>Edición Corporativa 2026</span>
                </div>
              </div>
            `,
            notes: "Da la bienvenida y presenta el propósito en una frase: practicar decisiones cotidianas que ayudan a proteger la información personal y de la organización. No desarrolles todavía los temas; la siguiente diapositiva presenta al expositor y los objetivos."
          }
        ]
      },
      {
        id: 2,
        category: "MÓDULO 1: INTRODUCCIÓN",
        title: "Presentación del Expositor y Objetivo General",
        cards: [
          {
            title: "1. ¿Quién Soy? — Steven Alexander Avilés",
            type: "info",
            content: `
              <div class="flex items-start gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <div class="bg-orange-600 text-white p-3 rounded-lg text-xl"><i class="fa-solid fa-user-tie"></i></div>
                <div>
                  <h4 class="font-bold text-slate-800 text-sm">Experiencia Profesional</h4>
                  <p class="text-xs text-slate-600 mt-1 leading-relaxed">
                    En O.S. GROUP acompaño a las organizaciones en la protección de sus activos digitales y la continuidad de sus servicios.
                  </p>
                </div>
              </div>
            `,
            notes: "Preséntate y menciona brevemente tu trabajo en O.S. GROUP. Puedes añadir aquí un ejemplo propio de tu experiencia; evita enumerar responsabilidades que no correspondan a tu trayectoria."
          },
          {
            title: "2. Objetivo General de la Sesión",
            type: "solution",
            content: `
              <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                <h4 class="font-bold text-emerald-900 text-sm flex items-center gap-2 mb-2">
                  <i class="fa-solid fa-bullseye text-emerald-600"></i>
                  <span>¿Qué Lograremos Hoy?</span>
                </h4>
                <ol class="text-xs text-emerald-800 space-y-1.5 list-decimal list-inside">
                  <li>Desarrollar hábitos digitales preventivos de aplicación inmediata.</li>
                  <li>Identificar amenazas modernas (IA ofensiva, ataques AiTM, Quishing, fuga de datos).</li>
                  <li>Aplicar el protocolo antipánico para actuar de forma eficiente frente a incidentes.</li>
                </ol>
              </div>
            `,
            notes: "Explica los tres resultados esperados: practicar hábitos, reconocer señales de engaño y saber a quién reportar. Aclara que es una sesión práctica, no una evaluación técnica."
          }
        ]
      },
      {
        id: 3,
        category: "MÓDULO 1: INTRODUCCIÓN",
        title: "Glosario Rápido de Ciberseguridad",
        cards: [
          {
            title: "Conceptos Clave en 1 Minuto",
            type: "info",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <span class="text-xs font-bold text-orange-600 block mb-1"><i class="fa-solid fa-fish"></i> Phishing</span>
                  <p class="text-xs text-slate-600">Engaño mediante mensajes o correos para robar claves o dinero.</p>
                </div>
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <span class="text-xs font-bold text-red-600 block mb-1"><i class="fa-solid fa-lock text-red-500"></i> Ransomware</span>
                  <p class="text-xs text-slate-600">Malware que bloquea o cifra información y busca extorsionar a la víctima.</p>
                </div>
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <span class="text-xs font-bold text-blue-600 block mb-1"><i class="fa-solid fa-key"></i> MFA (Doble Factor)</span>
                  <p class="text-xs text-slate-600">Segunda cerradura de acceso (código o huella) requerida tras la clave.</p>
                </div>
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <span class="text-xs font-bold text-emerald-600 block mb-1"><i class="fa-solid fa-rotate-right"></i> Ciberresiliencia</span>
                  <p class="text-xs text-slate-600">Capacidad de responder, adaptarse y seguir operando tras sufrir un ataque.</p>
                </div>
              </div>
            `,
            notes: "Aclara que phishing es el engaño para obtener información o inducir una acción; ransomware es un tipo de malware usado para extorsionar; MFA añade una prueba de identidad; y resiliencia es prepararse para responder y recuperarse."
          }
        ]
      },
      {
        id: 4,
        category: "MÓDULO 2: RIESGOS Y CASOS REALES",
        title: "El factor humano: una oportunidad para prevenir",
        cards: [
          {
            title: "Reconocer, pausar y verificar",
            type: "info",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="p-5 bg-orange-50 rounded-xl border border-orange-200 text-center">
                  <i class="fa-solid fa-magnifying-glass text-3xl text-orange-600 mb-3"></i>
                  <h4 class="text-sm font-bold text-slate-800">1. Reconocer</h4>
                  <p class="text-xs text-slate-600 mt-2">Observa remitente, enlace, adjunto y solicitud.</p>
                </div>
                <div class="p-5 bg-slate-50 rounded-xl border border-slate-200 text-center">
                  <i class="fa-solid fa-hand text-3xl text-blue-600 mb-3"></i>
                  <h4 class="text-sm font-bold text-slate-800">2. Pausar</h4>
                  <p class="text-xs text-slate-600 mt-2">Desconfía de la urgencia y no entregues códigos.</p>
                </div>
                <div class="p-5 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
                  <i class="fa-solid fa-circle-check text-3xl text-emerald-600 mb-3"></i>
                  <h4 class="text-sm font-bold text-slate-800">3. Verificar</h4>
                  <p class="text-xs text-slate-600 mt-2">Confirma por un canal oficial que ya conozcas.</p>
                </div>
              </div>
              <p class="mt-4 text-center text-xs text-slate-600">La tecnología ayuda; reportar un error rápidamente también reduce el impacto.</p>
              <div class="news-links slide-sources mt-3">
                <a href="https://www.cisa.gov/secure-our-world/recognize-and-report-phishing" target="_blank" rel="noopener noreferrer">Guía de CISA sobre phishing <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
            `,
            notes: "En lugar de atribuir una cifra única a todos los incidentes, enfoca la conversación en acciones observables: reconocer señales, pausar y verificar. CISA recomienda desconfiar de solicitudes urgentes y entrar al sitio oficial por una ruta conocida. Invita al grupo a nombrar una señal que les haría detenerse."
          }
        ]
      },
      {
        id: 5,
        category: "MÓDULO 2: RIESGOS Y CASOS REALES",
        title: "Noticias de Ciberseguridad en Colombia",
        cards: [
          {
            title: "EPM: incidente de ciberseguridad en un contratista",
            type: "problem",
            content: `
              <article class="news-card">
                <img class="news-image" src="assets/noticia-epm.svg" alt="Ilustración de seguridad digital para la noticia de EPM; no es una fotografía del incidente">
                <div class="news-copy">
                  <span class="news-kicker">NOTICIA · 29 MAY 2026</span>
                  <p>EPM informó que un incidente en su contratista SOLATI pudo comprometer información asociada a la cartera. Aclaró que su infraestructura, plataformas y sistemas internos no fueron comprometidos.</p>
                  <p class="news-lesson"><strong>Aprendizaje:</strong> evaluar y monitorear los riesgos de los proveedores también protege a la organización.</p>
                  <div class="news-links">
                    <a href="https://www.epm.com.co/institucional/sala-de-prensa/noticias-y-novedades/incidente-ciberseguridad-contratista-solati-cartera-epm/" target="_blank" rel="noopener noreferrer">Comunicado de EPM <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                  </div>
                  <span class="news-source">Fuente: comunicado oficial de EPM · Ilustración editorial, no fotografía de prensa</span>
                </div>
              </article>
            `,
            notes: "EPM indicó que el incidente en SOLATI pudo comprometer información asociada a su cartera, y aclaró que sus propios sistemas internos no fueron vulnerados. Distingue el riesgo sobre información del proveedor de una afectación a la infraestructura de EPM."
          },
          {
            title: "Colpensiones: millones de intentos de ciberataque",
            type: "info",
            content: `
              <article class="news-card">
                <img class="news-image" src="assets/noticia-colpensiones.svg" alt="Ilustración de un centro de monitoreo de ciberseguridad para el caso Colpensiones">
                <div class="news-copy">
                  <span class="news-kicker">ANTECEDENTE · ABR–MAY 2024</span>
                  <p>El Tiempo informó que Colpensiones reportó cerca de 53 millones de intentos de ataque entre finales de abril y mayo de 2024, bloqueados sin afectar la información de afiliados y pensionados.</p>
                  <p class="news-lesson"><strong>Aprendizaje:</strong> una cifra de intentos no equivale a accesos exitosos; importa explicar qué detectó y contuvo la entidad.</p>
                  <div class="news-links">
                    <a href="https://www.eltiempo.com/economia/sectores/colpensiones-revela-que-enfrento-53-millones-de-ciberataques-entre-abril-y-mayo-de-2024-todos-fueron-bloqueados-sin-afectar-informacion-3505878" target="_blank" rel="noopener noreferrer">Antecedente en El Tiempo <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                  </div>
                  <span class="news-source">Fuente: El Tiempo (2025; hechos reportados de 2024) · Ilustración editorial, no fotografía de prensa</span>
                </div>
              </article>
            `,
            notes: "El Tiempo publicó en 2025 la cifra que Colpensiones atribuyó a intentos ocurridos entre finales de abril y mayo de 2024, e informó que fueron bloqueados sin afectar información. Preséntala como un reporte de la entidad, no como una medición independiente ni como intrusiones exitosas."
          },
          {
            title: "Ecopetrol: información expuesta tras un ciberataque",
            type: "problem",
            content: `
              <article class="news-card">
                <img class="news-image" src="assets/noticia-ecopetrol.svg" alt="Ilustración de archivos protegidos y una alerta de seguridad para el caso Ecopetrol">
                <div class="news-copy">
                  <span class="news-kicker">NOTICIA · 30 JUL 2026</span>
                  <p>EL PAÍS informó que un ataque a almacenamiento en la nube de empresas del grupo Ecopetrol expuso datos asociados a unas 3.300 cuentas de usuario. La compañía no confirmó la autenticidad de todos los documentos descritos por terceros.</p>
                  <p class="news-lesson"><strong>Aprendizaje:</strong> limitar accesos, proteger datos sensibles y contar con un protocolo de respuesta y comunicación.</p>
                  <div class="news-links">
                    <a href="https://elpais.com/america-colombia/2026-07-30/un-ciberataque-a-ecopetrol-expone-informacion-del-negocio-y-de-sus-empleados.html" target="_blank" rel="noopener noreferrer">Ver cobertura de EL PAÍS <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                  </div>
                  <span class="news-source">Fuente: EL PAÍS · Ilustración editorial, no fotografía de prensa</span>
                </div>
              </article>
            `,
            notes: "EL PAÍS reportó acceso a almacenamiento en la nube de empresas del grupo y datos asociados a unas 3.300 cuentas. El artículo distingue lo descrito por el medio de lo confirmado por Ecopetrol. Enfatiza clasificación de datos, accesos mínimos y respuesta coordinada."
          }
        ]
      },
      {
        id: 6,
        category: "MÓDULO 2: RIESGOS Y CASOS REALES",
        title: "Entorno Conectado: El Efecto Dominó",
        cards: [
          {
            title: "1. Tus 4 Entornos Digitales Diarios",
            type: "info",
            content: `
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div class="p-3 bg-slate-50 border rounded-lg text-center">
                  <i class="fa-solid fa-building-columns text-orange-600 text-lg mb-1"></i>
                  <span class="text-xs font-bold block text-slate-800">Finanzas</span>
                  <span class="text-[10px] text-slate-500">Bancos, Nequi</span>
                </div>
                <div class="p-3 bg-slate-50 border rounded-lg text-center">
                  <i class="fa-solid fa-briefcase text-blue-600 text-lg mb-1"></i>
                  <span class="text-xs font-bold block text-slate-800">Trabajo</span>
                  <span class="text-[10px] text-slate-500">Teams, Correo</span>
                </div>
                <div class="p-3 bg-slate-50 border rounded-lg text-center">
                  <i class="fa-solid fa-comments text-emerald-600 text-lg mb-1"></i>
                  <span class="text-xs font-bold block text-slate-800">Comunicación</span>
                  <span class="text-[10px] text-slate-500">WhatsApp, Gmail</span>
                </div>
                <div class="p-3 bg-slate-50 border rounded-lg text-center">
                  <i class="fa-solid fa-house text-purple-600 text-lg mb-1"></i>
                  <span class="text-xs font-bold block text-slate-800">Hogar</span>
                  <span class="text-[10px] text-slate-500">Compras, Salud</span>
                </div>
              </div>
            `,
            notes: "Pide al grupo que identifique qué información guarda en finanzas, trabajo, comunicación y hogar. Señala que cada entorno necesita protección adecuada a los datos y a las cuentas que contiene."
          },
          {
            title: "2. Protege también los dispositivos y las sesiones",
            type: "problem",
            content: `
              <div class="p-4 bg-red-50 border border-red-200 rounded-xl">
                <h4 class="font-bold text-red-900 text-xs flex items-center gap-2 mb-1">
                  <i class="fa-solid fa-triangle-exclamation text-red-600"></i>
                  <span>Un dispositivo puede conectar varios entornos</span>
                </h4>
                <p class="text-xs text-red-800 leading-relaxed">
                  Un dispositivo sin bloqueo puede dejar abiertas sesiones de correo, mensajería y trabajo. Bloquea la pantalla, instala actualizaciones y reporta de inmediato la pérdida de un equipo.
                </p>
              </div>
            `,
            notes: "Este ejemplo trata de sesiones abiertas y pérdida de dispositivos, no de reutilización de claves; ese tema se desarrolla en la siguiente sección de contraseñas. Pide al grupo que piense qué servicios quedan abiertos si pierde su teléfono o portátil."
          }
        ]
      },
      {
        id: 7,
        category: "MÓDULO 3: AMENAZAS EN LA AUTENTICACIÓN",
        title: "MFA: protección útil, pero no infalible",
        cards: [
          {
            title: "Cuando un engaño intenta interceptar la sesión",
            type: "problem",
            content: `
              <div class="p-3 bg-red-50 border border-red-200 rounded-lg text-xs space-y-1">
                <span class="font-bold text-red-900 block">Algunos ataques de phishing retransmiten el inicio de sesión</span>
                <p class="text-red-800">Una página falsa puede intermediar entre la persona y el servicio legítimo e intentar robar credenciales o tokens de sesión. El MFA común reduce el riesgo, pero no detiene todos los ataques de intermediario.</p>
              </div>
            `,
            notes: "Explica el concepto sin entrar en nombres de herramientas: algunos sitios de phishing retransmiten el inicio de sesión y pueden intentar obtener una sesión autenticada. No todos los ataques funcionan así y MFA sigue siendo valioso."
          },
          {
            title: "Prefiere autenticación resistente al phishing",
            type: "solution",
            content: `
              <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs space-y-1">
                <span class="font-bold text-emerald-900 block">Usa las opciones aprobadas por la organización</span>
                <ul class="list-disc list-inside space-y-1 text-emerald-800">
                  <li>Prefiere passkeys o llaves de seguridad cuando estén disponibles.</li>
                  <li>Si usas notificaciones MFA, aprueba solo las que tú iniciaste.</li>
                  <li>Rechaza solicitudes inesperadas y avisa a soporte.</li>
                </ul>
              </div>
            `,
            notes: "Recomienda passkeys o llaves de seguridad si la organización las ofrece. Las notificaciones MFA no solicitadas se deben rechazar y reportar. Evita prometer que una medida elimina todo riesgo."
          }
        ]
      },
      {
        id: 8,
        category: "MÓDULO 3: AMENAZAS EN EL CELULAR",
        title: "Engaños Directos: Phishing, Smishing y Vishing",
        cards: [
          {
            title: "🔴 EL PROBLEMA: Estafas en el teléfono móvil",
            type: "problem",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div class="p-2.5 bg-red-50 border border-red-200 rounded-lg">
                  <span class="font-bold text-red-900 block">Smishing (SMS / WhatsApp)</span>
                  <p class="text-red-800 mt-1">Mensajes de "Paquete retenido" o "Cuenta bloqueada" con enlaces acortados falsos.</p>
                </div>
                <div class="p-2.5 bg-red-50 border border-red-200 rounded-lg">
                  <span class="font-bold text-red-900 block">Vishing (Llamadas Falsas)</span>
                  <p class="text-red-800 mt-1">Falsos agentes de soporte técnico o banco presionando para que dictes códigos SMS/MFA.</p>
                </div>
              </div>
            `,
            notes: "Compara las dos formas de contacto: el mensaje empuja a abrir un enlace y la llamada pide un código. En ambos casos, la urgencia intenta impedir que verifiques."
          },
          {
            title: "🟢 LA SOLUCIÓN: La Regla de los 5 Segundos",
            type: "solution",
            content: `
              <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs space-y-1.5">
                <h4 class="font-bold text-emerald-900 uppercase">Protocolo Inmediato</h4>
                <ul class="list-disc list-inside text-emerald-800 space-y-1">
                  <li><strong>Pausa 5 segundos:</strong> Si genera urgencia o miedo, detente.</li>
                  <li><strong>Cuelga y Verifica:</strong> Llama directamente al número oficial de la entidad.</li>
                  <li><strong>No compartas códigos:</strong> No los dictes por una llamada entrante, aunque la persona afirme ser del banco o de TI.</li>
                </ul>
              </div>
            `,
            notes: "Usa la pausa como recordatorio, no como garantía de seguridad. Cuelga ante solicitudes de códigos y vuelve a contactar a la entidad por un canal oficial que ya conozcas."
          }
        ]
      },
      {
        id: 9,
        category: "MÓDULO 3: AMENAZAS EN EL CELULAR",
        title: "Nuevos Vectores: Quishing (QR) y Sobreexposición",
        cards: [
          {
            title: "📱 Quishing — verifica antes de abrir un QR",
            type: "problem",
            content: `
              <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs">
                <span class="font-bold text-amber-900 block">Un código QR también puede dirigir a un sitio falso</span>
                <p class="text-amber-800 mt-1">Antes de abrir el destino, revisa el dominio que muestra el teléfono. No ingreses credenciales ni datos si no esperabas el mensaje; verifica la solicitud por un canal conocido.</p>
              </div>
            `,
            notes: "Un QR es una forma de presentar un enlace, no una garantía de confianza. Antes de abrirlo, revisa el dominio y pregunta si la solicitud es esperada. No afirmes que todos los filtros de correo ignoran imágenes."
          },
          {
            title: "🌐 Oversharing — Sobreexposición en Redes Sociales",
            type: "problem",
            content: `
              <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                <span class="font-bold text-slate-800 block">Cuida lo que publicas</span>
                <p class="text-slate-600 mt-1">Carnets corporativos, fotos del puesto de trabajo o ubicaciones en tiempo real pueden revelar información útil para una suplantación o un engaño dirigido.</p>
              </div>
            `,
            notes: "Tampoco publiquemos carnets corporativos ni ubicaciones en tiempo real en redes sociales."
          }
        ]
      },
      {
        id: 10,
        category: "MÓDULO 4: DEFENSAS Y SOLUCIONES",
        title: "Autenticación Nivel 1 — Bóvedas de Contraseñas",
        cards: [
          {
            title: "🔴 EL PROBLEMA: Reutilizar claves aumenta el impacto",
            type: "problem",
            content: `
              <div class="p-3 bg-red-50 border border-red-200 rounded-lg text-xs">
                <p class="text-red-800">Si una contraseña se reutiliza y queda expuesta en un servicio, otras cuentas que usan la misma clave también pueden quedar en riesgo.</p>
              </div>
            `,
            notes: "El problema no es recordar una cantidad concreta de claves, sino reutilizarlas. Una filtración en un servicio puede facilitar intentos de acceso a otras cuentas que compartan contraseña."
          },
          {
            title: "🟢 LA SOLUCIÓN: Gestores de Contraseñas (Bóveda Cifrada)",
            type: "solution",
            content: `
              <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs space-y-1">
                <span class="font-bold text-emerald-900 block">Uso de Herramientas (Bitwarden, 1Password, Google/Apple)</span>
                <ul class="list-disc list-inside text-emerald-800 space-y-1">
                  <li>Solo memorizas <strong>Una Contraseña Maestra</strong>.</li>
                  <li>Genera contraseñas largas y únicas para cada servicio.</li>
                  <li>Comprueba que el dominio sea el correcto antes de iniciar sesión; el autocompletado puede ayudar, pero no reemplaza la verificación.</li>
                </ul>
              </div>
            `,
            notes: "Recomienda un gestor aprobado por la organización para generar y guardar claves únicas. El autocompletado puede advertir sobre dominios distintos, pero no debe presentarse como una defensa infalible."
          }
        ]
      },
      {
        id: 11,
        category: "MÓDULO 4: DEFENSAS Y SOLUCIONES",
        title: "Autenticación Nivel 2 — MFA y Coincidencia de Números",
        cards: [
          {
            title: "1. MFA Tradicional (Segunda Cerradura)",
            type: "info",
            content: `
              <p class="text-xs text-slate-700">MFA añade una comprobación además de la contraseña. Actívalo en tus cuentas importantes y usa el método aprobado por tu organización.</p>
            `,
            notes: "Explica que MFA añade una comprobación además de la contraseña. Es una protección importante; cuando sea posible, prefiere métodos resistentes al phishing y sigue las opciones aprobadas por TI."
          },
          {
            title: "2. 🔴 Fatiga de notificaciones MFA",
            type: "problem",
            content: `
              <p class="text-xs text-red-800">Una persona puede recibir repetidas solicitudes de aprobación que no inició. La presión o el cansancio pueden llevarla a aprobar una por error.</p>
            `,
            notes: "Describe la fatiga de notificaciones: una persona puede aprobar por presión una solicitud que no inició. La respuesta segura es rechazarla y reportarla, no intentar adivinar quién la envió."
          },
          {
            title: "3. 🟢 Coincidencia de Números (Number Matching)",
            type: "solution",
            content: `
              <p class="text-xs text-emerald-800 font-bold">La app pide confirmar un número mostrado durante el inicio de sesión. Esto ayuda a evitar aprobaciones a ciegas, pero no convierte todos los métodos MFA en resistentes al phishing.</p>
            `,
            notes: "La coincidencia de números dificulta aprobar una notificación sin mirar la pantalla, pero no equivale a una passkey ni detiene todos los ataques de intermediario. Preséntala como una mejora frente a la aprobación a ciegas."
          }
        ]
      },
      {
        id: 12,
        category: "MÓDULO 4: DEFENSAS Y SOLUCIONES",
        title: "Autenticación Nivel 3 — Passkeys (FIDO2)",
        cards: [
          {
            title: "🔑 Reemplazo Radical de Contraseñas (Criptografía Asimétrica)",
            type: "solution",
            content: `
              <div class="p-3 bg-orange-50 border border-orange-200 rounded-lg text-xs space-y-2">
                <div class="grid grid-cols-2 gap-2 text-center font-bold">
                  <div class="bg-white p-2 rounded border">Clave Pública<br><span class="text-[10px] text-slate-500">Reside en el Servidor</span></div>
                  <div class="bg-white p-2 rounded border">Clave Privada<br><span class="text-[10px] text-slate-500">Protegida por tu autenticador</span></div>
                </div>
                <p class="text-orange-900 font-semibold">Las passkeys usan criptografía vinculada al servicio y ayudan a resistir el phishing. Protege también el dispositivo y sus opciones de recuperación.</p>
              </div>
            `,
            notes: "Una passkey utiliza criptografía de clave pública y el autenticador verifica el servicio para el que se usa. Esto ayuda a resistir páginas de phishing, pero no protege un dispositivo comprometido ni sustituye una recuperación segura de la cuenta."
          }
        ]
      },
      {
        id: 13,
        category: "MÓDULO 5: AMENAZAS CON IA",
        title: "IA Ofensiva: Deepfakes y Clonación de Voz",
        cards: [
          {
            title: "🔴 EL PROBLEMA: Suplantación Sintética de Voz",
            type: "problem",
            content: `
              <p class="text-xs text-red-800">Herramientas de IA pueden imitar voces a partir de muestras de audio y usarlas en solicitudes falsas de dinero o información. Una voz conocida no confirma por sí sola la identidad.</p>
            `,
            notes: "Evita cifras universales sobre cuánto audio se necesita: depende de la herramienta y la calidad de la muestra. El aprendizaje central es que una voz convincente no autentica por sí sola a quien llama."
          },
          {
            title: "🟢 LA SOLUCIÓN: Protocolos de Verificación",
            type: "solution",
            content: `
              <ul class="text-xs text-emerald-800 list-disc list-inside space-y-1">
                <li><strong>Verificación Fuera de Banda:</strong> Colgar y llamar tú mismo al número oficial de agenda antes de mover dinero.</li>
                <li><strong>Palabra de Seguridad (Code Word):</strong> Código verbal secreto acordado en persona.</li>
              </ul>
            `,
            notes: "Si reciben una llamada urgente pidiendo dinero o claves, cuelguen y llamen ustedes directamente al número oficial de agenda."
          }
        ]
      },
      {
        id: 14,
        category: "MÓDULO 5: AMENAZAS CON IA",
        title: "Uso Seguro de la IA en la Empresa (Gobernanza)",
        cards: [
          {
            title: "Protege la información al usar herramientas de IA",
            type: "info",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div class="p-2.5 bg-red-50 border border-red-200 rounded-lg">
                  <span class="font-bold text-red-900 block">🚨 Datos sensibles</span>
                  <p class="text-red-800 mt-1">No pegues datos personales, credenciales, código privado o información confidencial en servicios que no estén aprobados.</p>
                </div>
                <div class="p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <span class="font-bold text-emerald-900 block">✅ Herramientas autorizadas</span>
                  <p class="text-emerald-800 mt-1">Usa servicios aprobados por la organización y confirma sus condiciones de privacidad y tratamiento de datos.</p>
                </div>
              </div>
              <div class="mt-2 p-2 bg-amber-50 border border-amber-200 rounded text-xs text-amber-900 font-bold text-center">
                📌 Regla práctica: comparte solo la información necesaria y anonimízala cuando esté permitido.
              </div>
            `,
            notes: "No generalices que todas las herramientas gratuitas usan los datos para entrenar ni que una suscripción empresarial garantiza por sí sola privacidad. El tratamiento depende del servicio, la configuración y los acuerdos; sigue la política de la organización y no ingreses datos sensibles sin autorización."
          }
        ]
      },
      {
        id: 15,
        category: "MÓDULO 6: PROTOCOLOS Y RESUMEN",
        title: "Gobernanza, Protocolo Antipánico y Próximos Pasos",
        cards: [
          {
            title: "1. 🏛️ Gobernanza (NIST CSF 2.0 & ISO 27001:2022)",
            type: "info",
            content: `
              <p class="text-xs text-slate-700">La dirección define prioridades, responsables y tolerancia al riesgo. NIST CSF 2.0 incluye la función Govern; ISO/IEC 27001:2022 contempla inteligencia sobre amenazas en el control 5.7.</p>
            `,
            notes: "Presenta los marcos como referencias para organizar responsabilidades y prioridades, no como una lista que cada usuario deba memorizar. Conecta la gobernanza con acciones cotidianas: seguir las políticas y reportar incidentes."
          },
          {
            title: "2. 🚨 Si sospechas un incidente: detente y reporta",
            type: "solution",
            content: `
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs font-bold">
                <div class="p-3 bg-orange-50 rounded border">1. DETENER<br><span class="text-[10px] font-normal">No sigas el enlace ni compartas códigos</span></div>
                <div class="p-3 bg-orange-50 rounded border">2. REPORTAR<br><span class="text-[10px] font-normal">Contacta a TI por el canal oficial</span></div>
                <div class="p-3 bg-orange-50 rounded border">3. SEGUIR INDICACIONES<br><span class="text-[10px] font-normal">No borres evidencia ni cambies claves desde el equipo afectado</span></div>
              </div>
            `,
            notes: "Si alguien cree que hizo clic, compartió un código o detectó actividad extraña, debe reportarlo pronto a TI por un canal oficial y seguir el procedimiento de la organización. No indiques desconectar equipos o cambiar claves a ciegas: soporte determinará la respuesta adecuada. Invita a probar el simulador y luego la autoevaluación."
          }
        ]
      },
      {
        id: 16,
        category: "MÓDULO 6: PROTOCOLOS Y RESUMEN",
        title: "Gracias: la seguridad la construimos entre todos",
        cards: [
          {
            title: "Gracias por participar",
            type: "solution",
            content: `
              <div class="text-center py-8">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-700 rounded-2xl mb-4">
                  <i class="fa-solid fa-shield-heart text-3xl" aria-hidden="true"></i>
                </div>
                <p class="text-lg sm:text-xl font-bold text-slate-800">Un hábito seguro empieza con una buena decisión.</p>
                <p class="mt-3 text-sm text-slate-600">¿Qué acción pondrás en práctica desde hoy?</p>
                <p class="mt-6 text-sm font-semibold text-orange-700">Preguntas y conversación</p>
              </div>
            `,
            notes: "Agradece al grupo y abre un espacio para preguntas. Cierra invitando a cada persona a nombrar una acción concreta que aplicará desde hoy. Si surge una pregunta que dependa de la política interna, indica que la confirmarás con el área responsable."
          }
        ]
      }
    ];
