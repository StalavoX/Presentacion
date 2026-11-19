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
            notes: "Da la bienvenida al grupo y presenta la sesión como un espacio práctico, pensado tanto para el trabajo como para la vida diaria. Puedes abrir con una pregunta sencilla: ¿qué cuenta o dispositivo usan todos los días para algo importante? Explica que no se busca generar alarma ni convertir a nadie en especialista, sino reconocer situaciones comunes y tomar decisiones más seguras. Deja los temas específicos para después: primero preséntate y explica los objetivos. Si el grupo responde, agradece las ideas sin pedir detalles sobre cuentas, contraseñas o incidentes personales. Aclara que los ejemplos se comentarán de manera general y que cualquier situación real debe canalizarse por los medios internos adecuados. Esta apertura ayuda a que las personas se sientan cómodas participando, incluso si no conocen todavía los términos técnicos."
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
            notes: "Preséntate con tu nombre y describe brevemente tu trabajo en O.S. GROUP, usando solo detalles que reflejen tu experiencia real. Si lo deseas, comparte un ejemplo general de cómo una práctica cotidiana ayuda a cuidar la información, sin revelar datos de clientes ni incidentes confidenciales. Mantén esta parte cercana y breve para centrar la atención en el aprendizaje del grupo. Luego enlaza tu experiencia con el propósito práctico de la sesión. Puedes explicar que la seguridad no depende únicamente de herramientas: también intervienen los procesos y las decisiones de cada día. Evita presentar tu trayectoria como una lista extensa de cargos; bastan uno o dos datos pertinentes que generen confianza. Haz una transición natural: hoy revisaremos situaciones que cualquier persona puede encontrar y cómo responder con criterio."
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
            notes: "Presenta los tres resultados en lenguaje sencillo: llevarse hábitos que puedan aplicar hoy, reconocer señales de engaño y saber cómo pedir ayuda si algo no parece correcto. Aclara que veremos ejemplos de amenazas actuales, pero que no es necesario memorizar nombres técnicos ni tener conocimientos especializados. La sesión tampoco evalúa el desempeño individual; la idea es aprender en conjunto y practicar respuestas seguras. Invita a hacer preguntas durante el recorrido. Puedes describir el resultado esperado al final: cada persona debería poder nombrar una medida preventiva y el canal al que acudiría si detecta algo sospechoso. Aclara que las recomendaciones deben convivir con las políticas de la organización y no reemplazan las instrucciones de TI. Da unos segundos para que el grupo piense qué le gustaría aclarar, sin forzar a nadie a compartir experiencias privadas."
          }
        ]
      },
      {
        id: 3,
        category: "MÓDULO 1: INTRODUCCIÓN",
        title: "Glosario de Ciberseguridad",
        cards: [
          {
            title: "Engaños y suplantación",
            type: "info",
            content: `
              <div class="glossary-terms"><span>Phishing</span><span>Smishing</span><span>Vishing</span><span>Quishing</span><span>AiTM</span></div>
            `,
            notes: "Phishing es el engaño general; smishing llega por mensajes de texto, vishing por llamadas y quishing mediante códigos QR. AiTM describe una modalidad de intermediario que intenta capturar credenciales o una sesión. El canal cambia, pero conviene aplicar la misma regla: pausar y verificar por una vía independiente."
          },
          {
            title: "Software malicioso",
            type: "problem",
            content: `
              <div class="glossary-terms"><span>Malware</span><span>Ransomware</span></div>
            `,
            notes: "Malware es el nombre general para software malicioso. Ransomware es un tipo de malware que puede bloquear archivos y usarse para extorsionar. Si se sospecha un incidente, se reporta pronto y se siguen las indicaciones del equipo responsable."
          },
          {
            title: "Acceso y contraseñas",
            type: "info",
            content: `
              <div class="glossary-terms"><span>MFA</span><span>Passkey</span><span>Gestor de contraseñas</span></div>
            `,
            notes: "MFA añade otra comprobación de identidad; passkey permite iniciar sesión con una credencial protegida por el dispositivo; un gestor ayuda a crear y guardar contraseñas únicas. Para el trabajo, utiliza únicamente las opciones aprobadas y no aceptes solicitudes de acceso que no iniciaste."
          },
          {
            title: "IA e identidad",
            type: "problem",
            content: `
              <div class="glossary-terms"><span>Deepfake</span><span>Clonación de voz</span></div>
            `,
            notes: "Un deepfake puede generar o alterar voz, imagen o video para imitar a alguien. Una voz familiar no confirma quién hace una solicitud: ante pedidos sensibles, verifica por otro canal conocido."
          },
          {
            title: "Privacidad y resiliencia",
            type: "problem",
            content: `
              <div class="glossary-terms"><span>Sobreexposición</span><span>Fuga de datos</span><span>Ciberresiliencia</span></div>
            `,
            notes: "Sobreexposición es compartir más información de la necesaria; una fuga de datos es la exposición de información a personas no autorizadas. Ciberresiliencia es prepararse, responder y recuperarse. Si algo se comparte por error, reportarlo pronto ayuda a limitar el impacto."
          }
        ]
      },
      {
        id: 4,
        category: "MÓDULO 2: RIESGOS Y CASOS REALES",
        title: "El factor humano: una oportunidad para prevenir",
        cards: [
          {
            title: "1. Reconocer",
            type: "info",
            content: `
              <div class="human-step-card human-step-recognize">
                <span class="human-step-icon"><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i></span>
                <div>
                  <strong>Observa antes de actuar</strong>
                  <p>Revisa quién escribe, qué solicita y si el enlace o adjunto coincide con lo que esperabas.</p>
                </div>
              </div>
            `,
            notes: "Introduce el primer paso sin culpar a las personas: los engaños están diseñados para parecer normales. Antes de abrir un enlace o responder, observa quién contacta, qué solicita y si esperabas ese mensaje. Una solicitud urgente no demuestra por sí sola que sea fraudulenta, pero es una buena razón para revisar el contexto."
          },
          {
            title: "2. Pausar",
            type: "problem",
            content: `
              <div class="human-step-card human-step-pause">
                <span class="human-step-icon"><i class="fa-solid fa-hand" aria-hidden="true"></i></span>
                <div>
                  <strong>Rompe la presión del momento</strong>
                  <p>No respondas por impulso, no compartas códigos y no apruebes solicitudes de acceso que no iniciaste.</p>
                </div>
              </div>
            `,
            notes: "La pausa crea tiempo para decidir con calma. Si un mensaje o una llamada presiona para actuar de inmediato, no compartas códigos ni apruebes solicitudes MFA inesperadas. No necesitas demostrar durante la conversación que el contacto es falso; puedes terminar la interacción y comprobarlo por separado."
          },
          {
            title: "3. Verificar",
            type: "solution",
            content: `
              <div class="human-step-card human-step-verify">
                <span class="human-step-icon"><i class="fa-solid fa-circle-check" aria-hidden="true"></i></span>
                <div>
                  <strong>Confirma por otra vía</strong>
                  <p>Abre la aplicación oficial o llama a un número conocido. Si te equivocaste, reportarlo pronto también ayuda.</p>
                </div>
              </div>
              <div class="news-links slide-sources mt-4">
                <a href="https://www.cisa.gov/secure-our-world/recognize-and-report-phishing" target="_blank" rel="noopener noreferrer">Guía de CISA sobre phishing <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
            `,
            notes: "Verifica con un canal independiente que ya conozcas, como la aplicación oficial o un número guardado. No uses los datos de contacto incluidos en el mensaje sospechoso. Cierra la secuencia recordando que reportar pronto es útil incluso si alguien hizo clic o compartió información por error."
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
                  <p>EPM informó que un incidente en su contratista SOLATI pudo comprometer información de cartera. Aclaró que sus sistemas internos no fueron afectados.</p>
                  <p class="news-lesson"><strong>Aprendizaje:</strong> también hay que gestionar los riesgos de proveedores.</p>
                  <div class="news-links">
                    <a href="https://www.epm.com.co/institucional/sala-de-prensa/noticias-y-novedades/incidente-ciberseguridad-contratista-solati-cartera-epm/" target="_blank" rel="noopener noreferrer">Comunicado de EPM <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                  </div>
                  <span class="news-source">Fuente: comunicado oficial de EPM · Ilustración editorial, no fotografía de prensa</span>
                </div>
              </article>
            `,
            notes: "Resume el comunicado con cuidado: EPM informó que un incidente en el contratista SOLATI pudo comprometer información relacionada con la cartera y aclaró que sus sistemas internos no fueron comprometidos. Mantén clara esa diferencia; el caso se refiere a información asociada con un proveedor, no a una intrusión confirmada en la infraestructura de EPM. El aprendizaje es que las relaciones con terceros también requieren controles, seguimiento y coordinación. Pregunta qué tipo de información podría circular entre una organización y sus proveedores, sin especular sobre datos no confirmados. Puedes explicar que compartir datos con un tercero crea responsabilidades para ambas partes: definir qué se comparte, quién puede consultarlo y cómo se informa una eventual afectación. Desde el rol de cada asistente, la lección es usar los canales aprobados para enviar información y avisar si se detecta un envío equivocado o una solicitud extraña. No atribuyas causas ni consecuencias que no aparezcan en el comunicado; mantén el análisis en los aprendizajes generales."
          },
          {
            title: "Colpensiones: millones de intentos de ciberataque",
            type: "info",
            content: `
              <article class="news-card">
                <img class="news-image" src="assets/noticia-colpensiones.svg" alt="Ilustración de un centro de monitoreo de ciberseguridad para el caso Colpensiones">
                <div class="news-copy">
                  <span class="news-kicker">ANTECEDENTE · ABR–MAY 2024</span>
                  <p>Colpensiones reportó 53 millones de intentos bloqueados entre abril y mayo de 2024, sin afectación de datos, según El Tiempo.</p>
                  <p class="news-lesson"><strong>Aprendizaje:</strong> intentos bloqueados no equivalen a accesos exitosos.</p>
                  <div class="news-links">
                    <a href="https://www.eltiempo.com/economia/sectores/colpensiones-revela-que-enfrento-53-millones-de-ciberataques-entre-abril-y-mayo-de-2024-todos-fueron-bloqueados-sin-afectar-informacion-3505878" target="_blank" rel="noopener noreferrer">Antecedente en El Tiempo <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                  </div>
                  <span class="news-source">Fuente: El Tiempo (2025; hechos reportados de 2024) · Ilustración editorial, no fotografía de prensa</span>
                </div>
              </article>
            `,
            notes: "Explica que la cifra corresponde a intentos reportados por Colpensiones para el periodo indicado, y que la cobertura señaló que fueron bloqueados sin afectar la información de afiliados y pensionados. No los presentes como millones de accesos exitosos ni como una medición independiente: un intento detectado no equivale a una vulneración. El caso permite hablar del valor de la prevención, la detección y la respuesta coordinada. Puedes preguntar qué diferencia hay entre recibir un intento de ataque y confirmar que hubo acceso. Enmarca la cifra como un antecedente concreto, no como una medida universal del nivel de riesgo de una organización ni como evidencia de que todas las defensas son infalibles. Una organización puede recibir actividad maliciosa y contenerla; por eso son importantes tanto los controles técnicos como los procedimientos para evaluar y comunicar lo ocurrido. Invita a leer el texto y la fuente con atención a las fechas y atribuciones."
          },
          {
            title: "Ecopetrol: información expuesta tras un ciberataque",
            type: "problem",
            content: `
              <article class="news-card">
                <img class="news-image" src="assets/noticia-ecopetrol.svg" alt="Ilustración de archivos protegidos y una alerta de seguridad para el caso Ecopetrol">
                <div class="news-copy">
                  <span class="news-kicker">NOTICIA · 30 JUL 2026</span>
                  <p>EL PAÍS reportó datos expuestos asociados a unas 3.300 cuentas. Ecopetrol no confirmó todos los documentos descritos por terceros.</p>
                  <p class="news-lesson"><strong>Aprendizaje:</strong> limitar accesos y coordinar la respuesta.</p>
                  <div class="news-links">
                    <a href="https://elpais.com/america-colombia/2026-07-30/un-ciberataque-a-ecopetrol-expone-informacion-del-negocio-y-de-sus-empleados.html" target="_blank" rel="noopener noreferrer">Ver cobertura de EL PAÍS <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                  </div>
                  <span class="news-source">Fuente: EL PAÍS · Ilustración editorial, no fotografía de prensa</span>
                </div>
              </article>
            `,
            notes: "Presenta el alcance tal como lo describe la nota: EL PAÍS reportó acceso a almacenamiento en la nube de empresas del grupo e información asociada a unas 3.300 cuentas. Aclara que el artículo distingue entre lo que reportó el medio y lo que la compañía confirmó; evita afirmar como verificado aquello que no lo esté. Conecta el ejemplo con tres prácticas organizacionales: clasificar la información, limitar los accesos a lo necesario y coordinar la respuesta y la comunicación. Invita a pensar cómo esos principios reducen el impacto sin entrar en detalles especulativos. Puedes desarrollar cada principio brevemente: clasificar ayuda a saber qué necesita mayor protección; aplicar acceso mínimo limita quién puede ver o modificar la información; y tener una respuesta coordinada evita mensajes contradictorios y facilita priorizar acciones. No intentes reconstruir el incidente ni atribuir responsabilidades a partir de una noticia. Cierra recordando que verificar las fuentes y distinguir entre hechos reportados y confirmados también es una práctica responsable."
          }
        ]
      },
      {
        id: 6,
        category: "MÓDULO 2: RIESGOS Y CASOS REALES",
        title: "Entorno Conectado: El Efecto Dominó",
        cards: [
          {
            title: "1. Finanzas",
            type: "info",
            content: `
              <div class="connected-environment-card environment-finance">
                <i class="fa-solid fa-building-columns" aria-hidden="true"></i>
                <div><strong>Finanzas</strong><p>Banca, pagos y servicios financieros.</p></div>
              </div>
            `,
            notes: "Empieza por las cuentas financieras: banca y pagos suelen contener información de alto impacto. Pregunta qué medidas ayudan a protegerlas, sin pedir que nadie comparta nombres de bancos, saldos ni otros datos privados."
          },
          {
            title: "2. Trabajo",
            type: "info",
            content: `
              <div class="connected-environment-card environment-work">
                <i class="fa-solid fa-briefcase" aria-hidden="true"></i>
                <div><strong>Trabajo</strong><p>Correo, archivos y herramientas de colaboración.</p></div>
              </div>
            `,
            notes: "El correo y las herramientas de trabajo pueden abrir acceso a archivos y conversaciones de la organización. Recomienda usar las cuentas y dispositivos según la política interna y reportar de inmediato solicitudes de acceso inesperadas."
          },
          {
            title: "3. Comunicación",
            type: "info",
            content: `
              <div class="connected-environment-card environment-communication">
                <i class="fa-solid fa-comments" aria-hidden="true"></i>
                <div><strong>Comunicación</strong><p>Mensajería, correo personal y redes sociales.</p></div>
              </div>
            `,
            notes: "La mensajería y las redes conectan a las personas, pero también pueden usarse para suplantarlas o difundir enlaces engañosos. Comprueba quién envía una solicitud sensible por un canal independiente antes de responder."
          },
          {
            title: "4. Hogar y vida personal",
            type: "info",
            content: `
              <div class="connected-environment-card environment-home">
                <i class="fa-solid fa-house" aria-hidden="true"></i>
                <div><strong>Hogar y vida personal</strong><p>Compras, salud, entretenimiento y servicios del hogar.</p></div>
              </div>
            `,
            notes: "Compras, servicios de salud y otros servicios personales también guardan información valiosa. Protege las cuentas importantes con contraseñas únicas y activa MFA cuando esté disponible."
          },
          {
            title: "5. Educación y aprendizaje",
            type: "info",
            content: `
              <div class="connected-environment-card environment-education">
                <i class="fa-solid fa-graduation-cap" aria-hidden="true"></i>
                <div><strong>Educación y aprendizaje</strong><p>Plataformas educativas, cursos y cuentas académicas.</p></div>
              </div>
            `,
            notes: "Las plataformas educativas y de aprendizaje también pueden guardar datos personales, trabajos y credenciales. Recomienda entrar desde los canales oficiales y no reutilizar la contraseña de una cuenta importante. Si se comparte un dispositivo para estudiar, cerrar la sesión al terminar ayuda a evitar accesos accidentales. Pregunta: «¿Qué harían antes de iniciar sesión en un equipo compartido?»."
          },
          {
            title: "6. Servicios y trámites digitales",
            type: "info",
            content: `
              <div class="connected-environment-card environment-services">
                <i class="fa-solid fa-file-signature" aria-hidden="true"></i>
                <div><strong>Servicios y trámites</strong><p>Portales de servicios, citas y gestiones en línea.</p></div>
              </div>
            `,
            notes: "Añade los portales de servicios y trámites, donde puede haber información de identidad o datos de contacto. Antes de ingresar información, comprueba que abriste el portal oficial, especialmente si llegaste desde un mensaje o un código QR. Evita compartir documentos o códigos de verificación con quien te contacte de forma inesperada. Transición: «En todos estos entornos, un mismo dispositivo puede mantener varias sesiones abiertas»."
          },
          {
            title: "7. Protege el dispositivo que los conecta",
            type: "problem",
            content: `
              <div class="connected-device-card">
                <div class="connected-device-summary">
                  <div class="connected-device-icon"><i class="fa-solid fa-mobile-screen-button" aria-hidden="true"></i></div>
                  <div class="connected-device-intro">
                    <strong>Un equipo, varios entornos</strong>
                    <p>Un teléfono o portátil puede mantener abiertas sesiones personales y de trabajo.</p>
                  </div>
                </div>
                <div class="connected-device-actions">
                  <div><i class="fa-solid fa-lock" aria-hidden="true"></i><span>Bloquea la pantalla cuando no lo uses.</span></div>
                  <div><i class="fa-solid fa-rotate" aria-hidden="true"></i><span>Mantén el sistema actualizado.</span></div>
                  <div><i class="fa-solid fa-bell" aria-hidden="true"></i><span>Reporta pronto si se pierde o queda expuesto.</span></div>
                </div>
              </div>
            `,
            notes: "Cierra la idea del efecto dominó: un teléfono o portátil puede mantener abiertas sesiones de varios entornos, así que protegerlo ayuda a proteger más de una cuenta. Recorre las tres medidas de la tarjeta y explica su propósito: bloquear la pantalla dificulta el acceso casual, actualizar ayuda a mantener el sistema al día y reportar pronto una pérdida permite que soporte evalúe los siguientes pasos. Para dispositivos corporativos, sigue siempre las instrucciones internas; no indiques borrar datos, cambiar claves o aplicar otras acciones técnicas por cuenta propia. Transición: «Además de cuidar el dispositivo, revisemos cómo protegemos el acceso a las cuentas»."
          }
        ]
      },
      {
        id: 7,
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
            notes: "Compara los dos ejemplos: el smishing llega por mensaje y suele llevar a un enlace, mientras que el vishing ocurre por llamada y puede pedir códigos o información. En ambos casos, quien engaña puede hacerse pasar por una entidad conocida y añadir urgencia para que la persona no compruebe la solicitud. Pide al grupo que identifique qué tienen en común, más allá del canal: una petición inesperada y presión para actuar rápido. Recuerda que el nombre o el número que aparece en pantalla no bastan para confirmar quién contacta. Puedes describir el caso del paquete retenido o la cuenta bloqueada como ejemplos reconocibles, sin pedir que nadie abra enlaces reales durante la sesión. A veces el mensaje tiene errores, pero también puede estar bien escrito; la ausencia de errores no lo hace legítimo. El criterio más fiable es preguntarse si esperabas ese contacto, qué acción te pide y cómo confirmar la solicitud por separado."
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
            notes: "Explica que la pausa de cinco segundos es un recordatorio sencillo para romper la urgencia, no una prueba que vuelva seguro un mensaje. Si una llamada entrante pide códigos, contraseñas o una aprobación inesperada, no compartas ni apruebes nada. Termina la llamada y contacta a la entidad usando un número o una aplicación oficial que ya conozcas, no los datos que te proporcionó quien llamó. Recalca que verificar no es descortés: es una práctica normal de seguridad. Puedes practicar en voz alta una frase breve: “No voy a compartir códigos por esta llamada; me comunicaré con ustedes por el canal oficial”. Tener una frase preparada facilita actuar sin entrar en una discusión ni intentar demostrar que la llamada es falsa. Si es un mensaje, no respondas ni uses su enlace para verificar; abre el canal oficial de forma independiente. En el trabajo, además, sigue el procedimiento de reporte que indique la organización."
          }
        ]
      },
      {
        id: 8,
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
            notes: "Aclara que un código QR simplemente codifica un destino; su apariencia no permite saber si ese destino es confiable. Antes de continuar, revisa el dominio que muestra el teléfono y pregúntate si esperabas ese código y para qué servicio debería llevarte. Si solicita credenciales, pagos o datos inesperados, detente y verifica por una vía conocida. Evita asegurar que los filtros de correo siempre pasan por alto los QR: la recomendación práctica es revisar el destino y el contexto. Puedes usar como ejemplo un código colocado sobre otro en un aviso o una mesa: la etiqueta visual puede parecer legítima, pero el enlace que abre puede no corresponder al servicio esperado. Recomienda no iniciar sesión si el dominio resulta extraño o si la petición no tiene sentido. No es necesario escanear ningún código durante la presentación; el propósito es que recuerden que un QR debe revisarse como cualquier otro enlace."
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
            notes: "Comenta que las publicaciones pueden revelar más de lo que parece: un carnet puede mostrar identificadores o datos de la empresa, y una foto del puesto de trabajo puede dejar ver información en pantalla o documentos. Compartir la ubicación en tiempo real también puede indicar cuándo una persona no está en casa o dónde encontrarla. Antes de publicar, revisa el fondo de la imagen, quién podrá verla y si realmente necesitas incluir esos detalles. No se trata de dejar de usar redes sociales, sino de compartir con intención. Añade que información aparentemente inocua, como el cargo, una rutina o el nombre de un proveedor, puede combinarse para crear mensajes de suplantación más convincentes. Una pausa breve antes de publicar permite recortar la imagen, ocultar identificadores o esperar a compartir una ubicación hasta haber salido del lugar. Propón como regla sencilla preguntarse: ¿publicaría esto si lo pudiera ver alguien fuera de mi círculo cercano? No hace falta borrar la presencia digital; conviene conocer la audiencia y cuidar los detalles."
          }
        ]
      },
      {
        id: 9,
        category: "MÓDULO 3: SUPLANTACIÓN DE IDENTIDAD",
        title: "Dos engaños distintos: Binance y dominios homógrafos",
        cards: [
          {
            title: "Binance (2026): entrevistas laborales falsas y malware",
            type: "problem",
            content: `
              <div class="p-3 bg-red-50 border border-red-200 rounded-lg text-xs space-y-2">
                <p class="text-red-900">Reuters y BBC informaron que el robo de aproximadamente <strong>US$6.3 mil millones</strong> a Binance estuvo relacionado con entrevistas de trabajo falsas: los atacantes engañaron a un empleado para que descargara malware presentado como una tarea técnica.</p>
                <p class="text-red-900"><strong>Importante:</strong> este caso fue ingeniería social y malware; no fue un ataque de caracteres homógrafos.</p>
                <div class="news-links slide-sources mt-3">
                  <a href="https://www.reuters.com/world/asia-pacific/binance-hackers-used-fake-job-interview-63-billion-attack-2026-11-03/" target="_blank" rel="noopener noreferrer">Reuters · 3 nov. 2026 <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                  <a href="https://www.bbc.com/news/articles/ck5ynwz9gy67o" target="_blank" rel="noopener noreferrer">BBC · 3 nov. 2026 <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
              </div>
            `,
            notes: "Presenta el caso con atribución: Reuters y BBC informaron el 3 de noviembre de 2026 sobre un robo de aproximadamente 6.3 mil millones de dólares a Binance. Las notas de prensa describieron entrevistas laborales falsas y una tarea técnica maliciosa como parte de la intrusión. Subraya que esto no fue una suplantación mediante letras de otros alfabetos; fueron tácticas de ingeniería social y malware. No añadas detalles técnicos sobre cómo ejecutar o esconder el malware. Para quienes buscan empleo, la lección es verificar la empresa y el proceso por canales oficiales y no ejecutar código o archivos no verificados enviados como prueba técnica."
          },
          {
            title: "Homógrafos (2017): una demostración con Apple",
            type: "solution",
            content: `
              <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs space-y-2">
                <p class="text-emerald-900">En 2017, el investigador Xudong Zheng demostró que un dominio hecho con letras cirílicas podía parecerse visualmente a <strong>apple.com</strong>. Fue una prueba de concepto sobre el riesgo de los dominios Unicode, no evidencia de que Apple hubiera sufrido un robo.</p>
                <div class="grid grid-cols-2 gap-2 text-center">
                  <div class="p-2 bg-white border border-emerald-200 rounded"><strong>a</strong><br><span class="text-slate-600">Latina · U+0061</span></div>
                  <div class="p-2 bg-white border border-emerald-200 rounded"><strong>а</strong><br><span class="text-slate-600">Cirílica · U+0430</span></div>
                </div>
                <p class="text-emerald-900">Verifica el dominio completo y llega a servicios importantes desde su aplicación oficial o un marcador guardado; no te guíes solo por el logotipo o el candado HTTPS.</p>
                <div class="news-links slide-sources mt-3">
                  <a href="https://www.xudongz.com/blog/2017/idn-phishing/" target="_blank" rel="noopener noreferrer">Demostración de Xudong Zheng <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                  <a href="https://www.unicode.org/reports/tr39/" target="_blank" rel="noopener noreferrer">Estándar Unicode sobre caracteres confundibles <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
              </div>
            `,
            notes: "Distingue claramente esta técnica del caso de Binance. En 2017, el investigador Xudong Zheng publicó una demostración de un dominio visualmente parecido a apple.com formado con caracteres cirílicos; no presentes la demostración como una intrusión o robo confirmado contra Apple. Compara la a latina U+0061 y la a cirílica U+0430 sin mostrar ni enlazar un dominio de imitación. Unicode documenta caracteres confundibles y sus riesgos. Cierra con una recomendación práctica: escribir o abrir el dominio por una ruta confiable, revisar la dirección completa y no confiar solo en la apariencia de la página. Transición: «Además de imitar una dirección, algunos engaños intentan capturar una sesión; veamos por qué MFA ayuda, pero no siempre basta»."
          }
        ]
      },
      {
        id: 10,
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
            notes: "Explica el ataque a nivel conceptual: una página falsa puede colocarse entre la persona y el servicio legítimo, retransmitir el inicio de sesión y tratar de capturar credenciales o una sesión autenticada. No hace falta explicar herramientas ni pasos técnicos; el punto es que una página que parece real puede intentar engañar incluso cuando existe MFA. Aclara que esto no ocurre en todos los ataques y que MFA sigue reduciendo muchos riesgos. La siguiente tarjeta muestra opciones que pueden ofrecer una protección más resistente al phishing. Puedes comparar el proceso con entregar una llave en una recepción falsa: el servicio parece familiar, pero el destino no es el correcto. Por eso hay que comprobar el dominio y llegar a las cuentas desde marcadores o aplicaciones oficiales cuando sea posible. Evita que el ejemplo deje la impresión de que MFA es inútil; es una capa valiosa, y la recomendación es complementarla con métodos adecuados y verificación del contexto."
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
            notes: "Recomienda passkeys o llaves de seguridad cuando estén disponibles y aprobadas por la organización, ya que pueden ayudar a resistir páginas de phishing. Si llega una notificación MFA que la persona no inició, debe rechazarla y reportarla; nunca conviene aprobarla para quitarse la molestia. Pide al grupo que recuerde que soporte puede orientar sobre los métodos permitidos para sus cuentas. Presenta estas opciones como reducción del riesgo, no como garantía absoluta. Diferencia las alternativas sin hacer una competencia de productos: lo esencial es escoger un método permitido y comprender qué hacer ante una solicitud inesperada. Si alguien recibe varias notificaciones seguidas, debe dejar de interactuar con ellas y reportar el evento, no responder a llamadas que pidan códigos. Una buena pregunta para el grupo es: ¿qué harías si aparece una aprobación justo cuando no estás iniciando sesión? La respuesta debe ser rechazar, verificar y avisar."
          }
        ]
      },
      {
        id: 11,
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
            notes: "Explica el efecto dominó de reutilizar una contraseña: si una cuenta queda expuesta, otras cuentas que usan la misma clave pueden convertirse en objetivos de intentos de acceso. No hace falta recordar una cantidad específica de claves ni cambiar todas de manera periódica sin motivo; lo importante es que cada servicio tenga una clave distinta. Pregunta qué cuentas sería especialmente importante proteger, como correo principal o servicios financieros, sin pedir que nadie revele sus contraseñas. Puedes explicar que una filtración de un servicio no significa automáticamente que todas las cuentas hayan sido abiertas; el riesgo aparece cuando se repite la misma clave y alguien prueba el acceso en otros sitios. Por eso una clave única limita el alcance de un problema. Si una contraseña ya se compartió por error o se sospecha expuesta, se debe seguir el proceso oficial de cambio y reporte, especialmente en las cuentas de trabajo."
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
            notes: "Presenta el gestor como una herramienta para facilitar claves largas y diferentes sin tener que memorizarlas todas. En el trabajo, usa una opción autorizada por la organización y protege la cuenta del gestor con las medidas recomendadas por TI. Antes de iniciar sesión, revisa que el sitio sea el correcto; el autocompletado puede ayudar a reconocer dominios distintos, pero no es infalible ni reemplaza la atención. Si alguien ya usa otro método, puede empezar protegiendo primero sus cuentas más importantes. Explica que la contraseña maestra merece especial cuidado porque protege el acceso a la bóveda: debe ser única y no compartirse con otras personas, y se deben conservar las opciones de recuperación de acuerdo con las instrucciones del proveedor u organización. No recomiendes instalar una herramienta personal para almacenar contraseñas de trabajo sin autorización. El objetivo es facilitar hábitos sostenibles, no añadir una herramienta más sin pensar en su configuración."
          }
        ]
      },
      {
        id: 12,
        category: "MÓDULO 4: DEFENSAS Y SOLUCIONES",
        title: "Autenticación Nivel 2 — MFA y Coincidencia de Números",
        cards: [
          {
            title: "1. MFA Tradicional (Segunda Cerradura)",
            type: "info",
            content: `
              <p class="text-xs text-slate-700">MFA añade una comprobación además de la contraseña. Actívalo en tus cuentas importantes y usa el método aprobado por tu organización.</p>
            `,
            notes: "Explica que la autenticación multifactor combina la contraseña con otra comprobación, como una aplicación, una llave o una passkey. Esto dificulta que una contraseña expuesta baste por sí sola para entrar en la cuenta. Recomienda activarla en las cuentas importantes y usar únicamente métodos aprobados por TI en el entorno de trabajo. Cuando haya alternativas disponibles, las opciones resistentes al phishing ofrecen una protección adicional, aunque ningún método elimina todos los riesgos. Puedes preguntar qué pasaría si alguien consigue una contraseña, pero no la segunda comprobación; esa capa adicional puede detener un acceso no autorizado. Aclara que MFA no da permiso para ignorar enlaces sospechosos ni aprobar solicitudes que no se iniciaron. Si se cambia o pierde el teléfono asociado, la persona debe usar los mecanismos oficiales de recuperación y pedir ayuda, en vez de improvisar o compartir códigos con quien la contacte."
          },
          {
            title: "2. 🔴 Fatiga de notificaciones MFA",
            type: "problem",
            content: `
              <p class="text-xs text-red-800">Una persona puede recibir repetidas solicitudes de aprobación que no inició. La presión o el cansancio pueden llevarla a aprobar una por error.</p>
            `,
            notes: "Describe la situación: llegan varias solicitudes MFA que la persona no inició y la repetición puede cansarla o presionarla para aprobar alguna. Insiste en una regla simple: si no inició el acceso, debe rechazar la solicitud y avisar a soporte por el canal oficial. No debe compartir códigos ni responder a quien llame para convencerla de aprobar. Si las notificaciones continúan, repórtalo; no intentes resolverlo aprobando una de ellas. Es importante no avergonzar a quien recibe estas solicitudes: el diseño del engaño busca interrumpir y presionar. La mejor respuesta es detener la interacción, tomar nota de cuándo ocurrió y comunicarlo por el procedimiento indicado, sin reenviar códigos ni capturas que contengan información sensible a grupos no autorizados. Si una solicitud coincide con un inicio de sesión propio, aun así debe comprobar que el proceso y el número esperado son los correctos."
          },
          {
            title: "3. 🟢 Coincidencia de Números (Number Matching)",
            type: "solution",
            content: `
              <p class="text-xs text-emerald-800 font-bold">La app pide confirmar un número mostrado durante el inicio de sesión. Esto ayuda a evitar aprobaciones a ciegas, pero no convierte todos los métodos MFA en resistentes al phishing.</p>
            `,
            notes: "Explica el funcionamiento de forma breve: la aplicación muestra un número y la persona debe seleccionar o escribir el que aparece en la pantalla del inicio de sesión. Esto reduce las aprobaciones a ciegas y ayuda a distinguir solicitudes, pero no convierte el método en una passkey ni detiene todos los ataques de intermediario. Si la persona no inició el acceso o no reconoce la pantalla, debe cancelar y reportar, incluso si ve un número. Preséntalo como una mejora concreta, no como protección perfecta. Puedes contrastarlo con una notificación que solo pregunta “¿Aprueba?”: al pedir comparar números, hay más contexto y menos oportunidad de aceptar por costumbre. Aun así, si el acceso no lo inició la persona, el número no debe tratarse como prueba suficiente para continuar. Recuerda al grupo que la política de la organización define qué métodos están habilitados y a quién informar ante una solicitud inesperada. Transición: «Otra alternativa, cuando el servicio la admite, es una credencial vinculada al sitio: las passkeys»."
          }
        ]
      },
      {
        id: 13,
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
            notes: "Describe la idea sin profundizar en matemáticas: el servicio guarda una clave pública y el dispositivo o autenticador conserva la clave privada, que no se escribe en una página web. El autenticador vincula la respuesta al servicio correcto; por eso una página falsa no puede simplemente reutilizar una contraseña como lo haría en un engaño común. Las passkeys pueden reducir mucho el phishing, pero siguen siendo importantes el bloqueo del dispositivo, sus actualizaciones y una recuperación segura de la cuenta. Indica que su disponibilidad depende del servicio y de las opciones autorizadas. Para hacerlo intuitivo, puedes decir que el dispositivo demuestra que posee una credencial para el sitio legítimo, sin revelar una contraseña que la persona tenga que teclear. No es necesario explicar algoritmos ni prometer que una passkey resuelve todos los problemas de seguridad. También importa proteger el dispositivo y saber cómo recuperar el acceso si se reemplaza o pierde; sigue siempre las instrucciones aprobadas para esa cuenta. Transición: «La autenticación es una parte de la seguridad; ahora veamos cómo una voz o un video también pueden usarse para suplantar a alguien»."
          }
        ]
      },
      {
        id: 14,
        category: "MÓDULO 5: AMENAZAS CON IA",
        title: "IA Ofensiva: Deepfakes y Clonación de Voz",
        cards: [
          {
            title: "🔴 EL PROBLEMA: Suplantación Sintética de Voz",
            type: "problem",
            content: `
              <p class="text-xs text-red-800">Herramientas de IA pueden imitar voces a partir de muestras de audio y usarlas en solicitudes falsas de dinero o información. Una voz conocida no confirma por sí sola la identidad.</p>
            `,
            notes: "Explica que herramientas de IA pueden imitar rasgos de una voz y hacer más convincente una llamada de suplantación. No des cifras universales sobre la cantidad de audio necesaria: las capacidades cambian y dependen de la herramienta y de la muestra. El mensaje central es que reconocer una voz no basta para confirmar la identidad, sobre todo ante una solicitud urgente de dinero, claves o información. Invita a pensar en una verificación alternativa que no dependa de la misma llamada. No hace falta decidir durante la conversación si un audio es auténtico a partir del tono, las pausas o la emoción; esos indicios pueden ser difíciles de juzgar y no sustituyen un proceso de verificación. La petición y su urgencia son motivos para aplicar el mismo criterio que ante cualquier suplantación. Mantén el enfoque en la respuesta útil, no en el sensacionalismo sobre la tecnología."
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
            notes: "Presenta la verificación fuera de banda como una forma de comprobar la solicitud usando un canal independiente: termina la llamada y devuelve el contacto a un número oficial que ya tengas guardado o puedas consultar de forma confiable. Para solicitudes familiares sensibles, una palabra de seguridad acordada previamente puede servir como apoyo, siempre que se mantenga privada y no se comparta en redes. No uses el número que te dicta la persona que llama ni sigas instrucciones bajo presión. Estas medidas también sirven ante suplantaciones sin IA. En un entorno laboral, verifica solicitudes de pagos o cambios de cuenta mediante el procedimiento establecido y con una persona autorizada, aunque el mensaje parezca venir de un directivo conocido. Una doble comprobación puede parecer menos rápida, pero evita que la urgencia dicte una decisión irreversible. Si no logras confirmar, espera y consulta a tu equipo o supervisor por el canal habitual. Transición: «Además de reconocer engaños con IA, también debemos cuidar qué información introducimos en herramientas de IA»."
          }
        ]
      },
      {
        id: 15,
        category: "MÓDULO 5: AMENAZAS CON IA",
        title: "Uso Seguro de la IA en la Empresa",
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
            notes: "Distingue entre usar una herramienta autorizada y asumir que cualquier servicio protege la información de la misma manera. El tratamiento de los datos depende del servicio, su configuración y los acuerdos aplicables; ni el precio ni una etiqueta empresarial bastan por sí solos para confirmarlo. Sigue la política de la organización y no pegues credenciales, datos personales, código privado ni información confidencial en una herramienta que no esté aprobada. Cuando esté permitido, comparte solo lo necesario y elimina o anonimiza detalles identificables. Si hay dudas, consulta a TI o al área responsable antes de cargar la información. Puedes explicar que incluso una pregunta aparentemente sencilla puede incluir nombres de clientes, cifras internas o fragmentos de documentos que no se deberían divulgar. Antes de copiar contenido, identifica su clasificación y confirma si el uso está permitido para ese caso concreto. También revisa las respuestas generadas antes de utilizarlas: pueden contener errores, información inventada o sesgos. La herramienta puede apoyar el trabajo, pero la persona sigue siendo responsable de validar el resultado y proteger los datos. Transición: «Si algo sale mal pese a estas medidas, detén la interacción y reporta pronto»."
          }
        ]
      },
      {
        id: 16,
        category: "MÓDULO 6: PROTOCOLOS Y RESUMEN",
        title: "Protocolo ante incidentes y próximos pasos",
        cards: [
          {
            title: "1. Si sospechas un incidente: detente y reporta",
            type: "solution",
            content: `
              <div class="incident-protocol">
                <article class="incident-action incident-stop">
                  <span class="incident-action-number">01</span>
                  <div><strong>Detén la interacción</strong><p>No abras más enlaces ni compartas claves, códigos o aprobaciones.</p></div>
                </article>
                <article class="incident-action incident-report">
                  <span class="incident-action-number">02</span>
                  <div><strong>Reporta pronto</strong><p>Contacta a TI por el canal oficial, incluso si solo tienes una duda o cometiste un error.</p></div>
                </article>
                <article class="incident-action incident-follow">
                  <span class="incident-action-number">03</span>
                  <div><strong>Sigue las indicaciones</strong><p>Explica qué pasó y cuándo. No borres mensajes ni cambies claves desde el dispositivo afectado salvo que soporte te lo indique.</p></div>
                </article>
              </div>
            `,
            notes: "Explica la secuencia sin alarmar: detén la interacción, reporta pronto por un canal oficial y sigue las instrucciones del equipo responsable. Reportar es útil aunque la persona solo tenga dudas o ya haya hecho clic; no hay que esperar a tener una explicación completa. Al informar, indica qué ocurrió y cuándo, pero nunca envíes contraseñas ni códigos. No borres mensajes ni cambies claves desde el dispositivo afectado salvo que soporte indique cómo proceder."
          },
          {
            title: "2. Elige un próximo paso concreto",
            type: "info",
            content: `
              <div class="next-steps-panel">
                <p>Al terminar esta sesión, elige una acción sencilla para aplicar hoy:</p>
                <ul>
                  <li><i class="fa-solid fa-key" aria-hidden="true"></i><span>Activa MFA en una cuenta importante con el método recomendado.</span></li>
                  <li><i class="fa-solid fa-mobile-screen-button" aria-hidden="true"></i><span>Configura el bloqueo de pantalla y las actualizaciones de tu dispositivo.</span></li>
                  <li><i class="fa-solid fa-phone" aria-hidden="true"></i><span>Identifica el canal oficial para reportar una solicitud sospechosa.</span></li>
                </ul>
                <strong>Reconoce · Pausa · Verifica · Reporta</strong>
              </div>
            `,
            notes: "Invita a cada persona a escoger una acción pequeña y realista para aplicar hoy; no es necesario hacer todo al mismo tiempo. Sugiere activar MFA, comprobar el bloqueo y las actualizaciones del dispositivo o ubicar el canal oficial de soporte. Cierra con la secuencia de la sesión: reconoce, pausa, verifica y reporta."
          }
        ]
      },
      {
        id: 17,
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
            notes: "Agradece la participación y deja espacio para preguntas o comentarios. Para cerrar de forma concreta, pide a cada persona que piense en una acción pequeña que pueda aplicar desde hoy, por ejemplo revisar una solicitud inesperada por un canal oficial o activar MFA donde esté disponible. Refuerza que la seguridad se construye con hábitos constantes y con la colaboración entre las personas y los equipos de soporte. Si surge una pregunta que dependa de una política interna, comprométete a confirmarla con el área responsable en lugar de improvisar una respuesta. Puedes invitar a que compartan solo la acción elegida, no detalles de sus cuentas o incidentes. Recapitula la idea central en tres verbos: reconocer, pausar y verificar; si algo sale mal, reportar pronto. Agradece también las preguntas que no puedas responder de inmediato y explica cómo darás seguimiento. Termina con una invitación a usar el simulador y la autoevaluación como práctica, recordando que sus resultados son orientativos y no se guardan."
          }
        ]
      }
    ];
