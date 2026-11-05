/* ===================== TEMA ===================== */
const themeToggle = document.getElementById('themeToggle');
const themeMeta = document.querySelector('meta[name="theme-color"]');

function syncThemeButton(theme) {
  const dark = theme === 'dark';
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.setAttribute('aria-label', dark ? 'Activar modo claro' : 'Activar modo oscuro');
  if (themeMeta) themeMeta.setAttribute('content', dark ? '#1D2142' : '#FFFFFF');
}

syncThemeButton(document.documentElement.getAttribute('data-theme') || 'light');

themeToggle.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem('tresiclos-theme', next); } catch (e) {}
  syncThemeButton(next);
});

/* ===================== MENÚ MÓVIL ===================== */
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

/* ===================== FAQ ACORDEÓN ===================== */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const open = item.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
});

/* ===================== FORMULARIO (demo) ===================== */
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if (!name || !email || !message) {
    status.textContent = 'Por favor completa nombre, email y mensaje.';
    status.classList.add('is-error');
    status.classList.remove('is-ok');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.textContent = 'Ingresa un email válido.';
    status.classList.add('is-error');
    status.classList.remove('is-ok');
    return;
  }
  status.textContent = '¡Gracias! Te contactaremos pronto. (Demo: no se envía a servidor)';
  status.classList.add('is-ok');
  status.classList.remove('is-error');
  form.reset();
});

/* ===================== CONTENIDO LEGAL ===================== */
const LEGAL = {
  terminos: `
    <h3 id="legalTitle">Términos y Condiciones</h3>
    <p><em>Última actualización: Mayo 2026</em></p>
    <h4>1. Partes</h4>
    <p>Estos términos regulan el uso de la plataforma TRESICLOS, operada por Inversiones Valencia Calderón, con domicilio en Avenida 6A 28-98, Oficina 201, Cali, Colombia. Al usar la plataforma, el usuario acepta estos términos en su totalidad.</p>
    <h4>2. Descripción del servicio</h4>
    <p>TRESICLOS es una plataforma de gestión de procesos y riesgos de negocio asistida por inteligencia artificial, disponible bajo modalidad de suscripción. Permite a empresas definir, ejecutar y auditar sus procesos operativos.</p>
    <h4>3. Condiciones de uso</h4>
    <p>El usuario se compromete a usar la plataforma únicamente para fines legales y legítimos, a no compartir sus credenciales de acceso, y a no intentar vulnerar la seguridad del sistema.</p>
    <h4>4. Planes, pagos y renovación</h4>
    <p>El acceso requiere una suscripción activa. Los planes y precios se publican en la sección Planes del sitio. La suscripción se renueva automáticamente al final de cada período salvo cancelación antes de la fecha de renovación. Los pagos no son reembolsables salvo disposición legal aplicable.</p>
    <h4>5. Disponibilidad y SLA</h4>
    <p>Nos esforzamos por mantener la plataforma disponible de forma continua, pero no garantizamos disponibilidad ininterrumpida. Los niveles de servicio (SLA) aplican únicamente cuando se pactan por escrito (plan Enterprise). Métricas internas como "99% de precisión" no constituyen garantía contractual salvo acuerdo expreso.</p>
    <h4>6. Naturaleza de la IA</h4>
    <p>Las salidas generadas por IA son apoyo a la decisión y pueden contener imprecisiones. El usuario es responsable de validar los resultados antes de tomar decisiones legales, financieras u operativas. TRESICLOS no sustituye asesoría profesional.</p>
    <h4>7. Propiedad intelectual</h4>
    <p>Todo el software, diseño y contenido de TRESICLOS es propiedad de Inversiones Valencia Calderón. El usuario no adquiere ningún derecho sobre estos elementos más allá del uso autorizado por su suscripción.</p>
    <h4>8. Limitación de responsabilidad</h4>
    <p>TRESICLOS no será responsable por pérdidas de negocio, datos o ingresos derivadas del uso o imposibilidad de uso de la plataforma, en la medida permitida por la ley aplicable.</p>
    <h4>9. Suspensión y terminación</h4>
    <p>Podemos suspender o terminar el acceso por impago, uso indebido o incumplimiento de estos términos, previa notificación cuando sea posible.</p>
    <h4>10. Modificaciones</h4>
    <p>Nos reservamos el derecho de modificar estos términos. Los cambios sustanciales serán notificados por email con al menos 15 días de anticipación. Si el usuario no acepta los cambios, podrá cancelar sin penalidad.</p>
    <h4>11. Ley aplicable</h4>
    <p>Estos términos se rigen por las leyes de la República de Colombia. Para usuarios en otros países, la ley colombiana aplica en lo que no contradiga normativa local imperativa.</p>
    <h4>12. Contacto</h4>
    <p>soy@tresiclos.com</p>
  `,
  privacidad: `
    <h3 id="legalTitle">Política de Privacidad</h3>
    <p><em>Última actualización: Mayo 2026</em></p>
    <h4>1. Responsable del tratamiento</h4>
    <p>Inversiones Valencia Calderón, Avenida 6A 28-98, Oficina 201, Cali, Colombia. Contacto: soy@tresiclos.com</p>
    <h4>2. Datos que recolectamos</h4>
    <ul>
      <li>Datos de registro: nombre, email, empresa, cargo.</li>
      <li>Datos de uso: actividad dentro de la plataforma, logs de operación.</li>
      <li>Datos de comunicación: mensajes procesados a través de canales integrados (incluyendo WhatsApp Business).</li>
      <li>Datos de pago: procesados por pasarelas externas; no almacenamos datos de tarjetas.</li>
    </ul>
    <h4>3. Base legal</h4>
    <p>Tratamos datos con base en la ejecución del contrato, el consentimiento del usuario, el interés legítimo (mejora del servicio y seguridad) y el cumplimiento de obligaciones legales.</p>
    <h4>4. Finalidad del tratamiento</h4>
    <ul>
      <li>Prestar el servicio contratado.</li>
      <li>Mejorar la plataforma.</li>
      <li>Comunicar cambios relevantes al servicio.</li>
      <li>Cumplir obligaciones legales.</li>
    </ul>
    <h4>5. Compartición de datos</h4>
    <p>Podemos compartir datos con Meta Platforms (WhatsApp Business API) para habilitar comunicaciones, con proveedores de infraestructura cloud (almacenamiento y procesamiento), y con autoridades competentes cuando la ley lo exija. No vendemos datos personales a terceros.</p>
    <h4>6. Entrenamiento de modelos de IA</h4>
    <p>No utilizamos datos de clientes para entrenar modelos fundacionales sin autorización expresa. Los modelos operan sobre la información del cliente dentro de su espacio de trabajo.</p>
    <h4>7. Transferencias internacionales</h4>
    <p>Los datos pueden ser procesados en servidores ubicados fuera de Colombia. En tales casos, aplicamos salvaguardas adecuadas conforme a la normativa aplicable, incluyendo la Ley 1581 de 2012 (Colombia) y el RGPD (para usuarios en la Unión Europea).</p>
    <h4>8. Retención de datos</h4>
    <p>Conservamos los datos mientras la cuenta esté activa y hasta 2 años después de su cancelación, salvo obligación legal de conservación mayor.</p>
    <h4>9. Derechos del usuario</h4>
    <p>El usuario puede en cualquier momento solicitar acceso, corrección, eliminación o portabilidad de sus datos escribiendo a soy@tresiclos.com. Respondemos en un plazo máximo de 15 días hábiles. También puede reclamar ante la Superintendencia de Industria y Comercio (SIC) en Colombia o la autoridad de control correspondiente en la UE.</p>
    <h4>10. Menores de edad</h4>
    <p>TRESICLOS no recolecta ni procesa datos de personas menores de 18 años. Si detectamos que se han proporcionado datos de un menor, los eliminaremos de inmediato.</p>
    <h4>11. Cookies</h4>
    <p>El sitio web puede usar cookies técnicas necesarias para su funcionamiento (sesión y seguridad). No usamos cookies de seguimiento publicitario.</p>
    <h4>12. Medidas de seguridad</h4>
    <p>Aplicamos cifrado en tránsito y en reposo, control de acceso por roles, logs de auditoría y respaldos periódicos.</p>
    <h4>13. Cambios a esta política</h4>
    <p>Notificaremos cambios sustanciales por email. La versión vigente siempre estará disponible en este sitio.</p>
  `,
  cancelacion: `
    <h3 id="legalTitle">Cancelación de suscripción</h3>
    <p><em>Última actualización: Mayo 2026</em></p>
    <h4>¿Quieres cancelar tu suscripción?</h4>
    <p>Puedes cancelar tu suscripción a TRESICLOS en cualquier momento escribiéndonos a <strong>soy@tresiclos.com</strong> con el asunto "Cancelar suscripción" e indicando el correo asociado a tu cuenta.</p>
    <p>Procesamos todas las solicitudes en un plazo máximo de 5 días hábiles y enviamos confirmación por email.</p>
    <h4>Importante sobre renovación automática</h4>
    <p>La suscripción se renueva automáticamente. Para evitar el siguiente cargo, la solicitud debe recibirse antes de la fecha de renovación. No se realizan reembolsos del período en curso salvo disposición legal aplicable.</p>
    <h4>¿Qué pasa después de cancelar?</h4>
    <ul>
      <li>Tu acceso a la plataforma se mantiene activo hasta el final del período pagado.</li>
      <li>No se realizan cargos adicionales.</li>
      <li>Tus datos se conservan por 2 años y luego se eliminan, salvo que solicites eliminación inmediata.</li>
    </ul>
    <h4>¿Quieres eliminar tus datos?</h4>
    <p>Escríbenos a <strong>soy@tresiclos.com</strong> con el asunto "Eliminar mis datos" y procesamos tu solicitud en máximo 15 días hábiles. Ten en cuenta que la eliminación inmediata impide la reactivación o recuperación de la cuenta.</p>
    <h4>Contacto</h4>
    <p>soy@tresiclos.com</p>
  `,
  dpa: `
    <h3 id="legalTitle">Acuerdo de Encargo de Tratamiento (DPA)</h3>
    <p><em>Versión resumida para clientes B2B</em></p>
    <h4>1. Roles</h4>
    <p>El cliente actúa como <strong>responsable del tratamiento</strong> de los datos personales que carga en la plataforma. TRESICLOS actúa como <strong>encargado del tratamiento</strong> y solo los procesa conforme a las instrucciones del cliente y a este acuerdo.</p>
    <h4>2. Objeto</h4>
    <p>TRESICLOS presta servicios de gestión de procesos y riesgos asistidos por IA, lo que puede implicar el acceso a datos personales contenidos en los procesos del cliente.</p>
    <h4>3. Obligaciones de TRESICLOS</h4>
    <ul>
      <li>Tratar los datos solo para prestar el servicio contratado.</li>
      <li>Aplicar medidas técnicas y organizativas de seguridad.</li>
      <li>No subcontratar sin autorización y con obligaciones equivalentes.</li>
      <li>Asistir al cliente en la atención de derechos de los titulares.</li>
      <li>Notificar incidentes de seguridad sin demora injustificada.</li>
      <li>Eliminar o devolver los datos al finalizar el servicio, según instrucciones.</li>
    </ul>
    <h4>4. Subencargados</h4>
    <p>TRESICLOS podrá usar proveedores de infraestructura cloud y canales de comunicación (incluyendo Meta Platforms para WhatsApp Business API). La lista de subencargados se mantiene a disposición del cliente.</p>
    <h4>5. Transferencias internacionales</h4>
    <p>Las transferencias se amparan en cláusulas contractuales tipo y salvaguardas equivalentes.</p>
    <h4>6. Contacto</h4>
    <p>Para solicitar la versión completa del DPA: <strong>soy@tresiclos.com</strong>.</p>
  `
};

const modal = document.getElementById('legalModal');
const legalContent = document.getElementById('legalContent');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('[data-legal]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const key = el.getAttribute('data-legal');
    if (LEGAL[key]) {
      legalContent.innerHTML = LEGAL[key];
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  });
});

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
