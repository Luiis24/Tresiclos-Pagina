# README — Landing Page TRESICLOS

> Página web provisional de TRESICLOS, creada para **publicar las políticas de privacidad y términos legales** requeridos por Google Play Store y Apple App Store, y para servir como **landing comercial B2B** mientras se lanza la aplicación.

---

## 📋 Tabla de contenido

- [Contexto y propósito](#-contexto-y-propósito)
- [Estado del proyecto](#-estado-del-proyecto)
- [Qué incluye la página](#-qué-incluye-la-página)
- [Stack técnico](#-stack-técnico)
- [Estructura de archivos](#-estructura-de-archivos)
- [Cómo ejecutarla localmente](#-cómo-ejecutarla-localmente)
- [Cómo desplegarla](#-cómo-desplegarla)
- [Requisitos para publicación en tiendas](#-requisitos-para-publicación-en-tiendas)
- [Documentos legales](#-documentos-legales)
- [Qué es real y qué es placeholder](#-qué-es-real-y-qué-es-placeholder)
- [Checklist antes de publicar](#-checklist-antes-de-publicar)
- [Mantenimiento y siguientes pasos](#-mantenimiento-y-siguientes-pasos)
- [Contacto](#-contacto)

---

## 🎯 Contexto y propósito

Este proyecto nace de una necesidad concreta de la empresa **Inversiones Valencia Calderón** (marca **TRESICLOS**): para **publicar una aplicación** en Google Play Store y Apple App Store, ambas tiendas exigen una **URL pública y accesible** donde se alojen:

1. **Política de Privacidad** (obligatoria en ambas tiendas).
2. **Términos y Condiciones** (recomendado y en muchos casos obligatorio).
3. **Mecanismo de cancelación de suscripción** (obligatorio en App Store para apps con suscripciones).
4. **Datos de contacto del responsable** (email, dirección, teléfono).

Adicionalmente, la página funciona como **landing comercial provisional** que presenta el producto a clientes B2B mientras la app se lanza oficialmente.

> **Nota importante:** este sitio es **provisional**. No es la versión definitiva ni la app en sí. Su objetivo principal es cumplir con los requisitos de las tiendas y dar presencia comercial mínima.

---

## 🚦 Estado del proyecto

| Aspecto | Estado |
|---|---|
| Landing comercial | ✅ Funcional |
| Política de Privacidad | ✅ Publicada (versión inicial) |
| Términos y Condiciones | ✅ Publicados (versión inicial) |
| Cancelación de suscripción | ✅ Publicada |
| DPA (encargo de tratamiento) | ⚠️ Versión resumida — falta versión completa legal |
| Formulario de contacto | ⚠️ Solo frontend (no envía a servidor) |
| Autenticación / login | ❌ No implementado (placeholder) |
| Pasarela de pagos | ❌ No implementada |
| Backend / API | ❌ No implementado |
| Dominio propio | ⚠️ Pendiente de confirmar |

---

## 🧩 Qué incluye la página

### Secciones públicas

1. **Header sticky** con navegación y CTAs.
2. **Hero** con propuesta de valor, badge animado y 3 métricas clave.
3. **Ticker** con keywords del producto.
4. **Solución** — 3 pilares: automatización con IA, monitoreo en tiempo real, supervisión de infraestructura.
5. **Nota sobre uso de IA** — aclaración de que las salidas son apoyo a la decisión.
6. **Planes** — Starter / Business / Enterprise con precios de referencia.
7. **Seguridad y cumplimiento** — rol del tratamiento, retención, entrenamiento IA, autoridad de control.
8. **FAQ** — 6 preguntas frecuentes en acordeón.
9. **Contacto** — formulario + datos de la empresa.
10. **Footer** — enlaces a producto, legal y contacto.

### Documentos legales (modal accesible desde footer y formulario)

- **Términos y Condiciones**
- **Política de Privacidad**
- **Cancelación de suscripción**
- **DPA (Acuerdo de Encargo de Tratamiento)** — versión resumida

Los documentos se abren en un **modal** dentro de la misma página, sin recargar. Esto permite **una sola URL** que cubre todos los requisitos legales de las tiendas.

### Características técnicas destacadas

- ✅ **Totalmente responsive** (3 breakpoints: 960px, 720px, móvil).
- ✅ **Accesible**: `aria-expanded`, `aria-modal`, foco en modal, cierre con `Escape`, `role="status"` en formulario.
- ✅ **Sin dependencias externas** salvo Google Fonts (Inter).
- ✅ **Animaciones respetuosas** con `prefers-reduced-motion`.
- ✅ **SEO básico**: meta description, Open Graph, `lang="es"`.
- ✅ **Rendimiento**: un solo archivo HTML, sin frameworks, sin build step.

---

## 🛠 Stack técnico

| Capa | Tecnología |
|---|---|
| Markup | HTML5 semántico |
| Estilos | CSS3 (variables CSS, grid, flexbox, animaciones) |
| Interactividad | JavaScript vanilla (ES6+) |
| Tipografía | Inter (Google Fonts) |
| Iconografía | SVG inline (sin librerías) |
| Build | **Ninguno** — archivo único |
| Dependencias | **Ninguna** (salvo fuente web) |

**Decisión de diseño:** se eligió un **único archivo HTML autocontenido** para maximizar portabilidad, facilitar el despliegue en cualquier hosting estático y evitar mantenimiento de dependencias. Es ideal para un sitio provisional.

---

## 📁 Estructura de archivos

```
tresiclos/
└── index.html      # Página completa (HTML + CSS + JS embebidos)
└── README.md       # Este archivo
```

> Si en el futuro se separan los assets, la estructura sugerida sería:
> ```
> tresiclos/
> ├── index.html
> ├── assets/
> │   ├── css/styles.css
> │   ├── js/main.js
> │   └── img/
> └── README.md
> ```

---

## 💻 Cómo ejecutarla localmente

### Opción 1 — Abrir directamente
1. Descarga o clona el repositorio.
2. Haz doble clic en `index.html`.
3. Se abrirá en tu navegador por defecto.

> ⚠️ Algunos navegadores bloquean ciertas funciones con `file://`. Para probar el formulario o futuras integraciones, usa la opción 2.

### Opción 2 — Servidor local (recomendado)

Con Python:
```bash
# Python 3
python -m http.server 8000

# Python 2 (si aún lo usas)
python -m SimpleHTTPServer 8000
```
Luego abre `http://localhost:8000`.

Con Node.js:
```bash
npx serve .
```

Con VS Code:
- Instala la extensión **Live Server**.
- Clic derecho sobre `index.html` → **Open with Live Server**.

---

## 🚀 Cómo desplegarla

Al ser un sitio estático de un solo archivo, **cualquier hosting estático funciona**. Opciones recomendadas (de menor a mayor esfuerzo):

### Opción A — Netlify Drop (la más rápida, sin cuenta al inicio)
1. Ve a [app.netlify.com/drop](https://app.netlify.com/drop).
2. Arrastra la carpeta del proyecto.
3. Obtienes una URL pública tipo `https://nombre-aleatorio.netlify.app`.
4. (Opcional) Crea cuenta gratis para conservar el sitio y poner dominio propio.

### Opción B — Vercel
1. Sube el repo a GitHub.
2. Importa el proyecto en [vercel.com](https://vercel.com).
3. Deploy automático en cada push.

### Opción C — GitHub Pages
1. Sube el repo a GitHub.
2. Settings → Pages → Source: `main` branch, `/root`.
3. URL: `https://usuario.github.io/repo/`.

### Opción D — Hosting propio / cPanel
1. Sube `index.html` a `public_html/`.
2. Listo.

### Opción E — Cloudflare Pages
1. Conecta repo de GitHub.
2. Build command: *(vacío)*. Output directory: `/`.
3. Deploy.

> **Recomendación para TRESICLOS:** usar **Netlify o Vercel** con dominio propio (`tresiclos.com` o subdominio `legal.tresiclos.com`). El dominio propio es **requisito** para que Google Play y Apple App Store acepten las URLs legales.

### Configuración de dominio (una vez tengas el dominio)
- Apunta el dominio al hosting elegido (registros A o CNAME).
- Habilita **HTTPS** (Netlify/Vercel lo hacen automático con Let's Encrypt).
- Verifica que las URLs legales sean accesibles **sin autenticación** y **sin redirecciones raras**.

---

## 📱 Requisitos para publicación en tiendas

### Google Play Store
Para publicar una app con suscripciones o que recolecta datos, Google exige:

- ✅ **URL de Política de Privacidad** pública y accesible → esta página la cumple.
- ✅ **Descripción de qué datos se recolectan** → cubierto en la Política de Privacidad.
- ✅ **Mecanismo de eliminación de cuenta/datos** → cubierto en la sección de Cancelación.
- ✅ **Datos de contacto del desarrollador** → visibles en el footer y contacto.
- ⚠️ **Data Safety form** en Play Console → debes completarlo declarando lo mismo que dice la política.

**URL sugerida para Play Console:** `https://tresiclos.com/#privacidad` o la URL directa al modal.

### Apple App Store
Apple es más estricto con apps de suscripción:

- ✅ **URL de Política de Privacidad** (obligatoria).
- ✅ **URL de Términos de uso (EULA)** (obligatoria si hay suscripciones).
- ✅ **Mecanismo de cancelación claro** (obligatorio según App Store Review Guidelines 3.1.2).
- ✅ **Datos de contacto** del responsable.
- ⚠️ **App Privacy Details** en App Store Connect → debes declarar las categorías de datos recolectados.

**URLs sugeridas para App Store Connect:**
- Privacy Policy URL: `https://tresiclos.com/#privacidad`
- Terms of Use (EULA): `https://tresiclos.com/#terminos`

### Consideraciones adicionales para tiendas
- Las URLs deben ser **HTTPS** (ambas tiendas lo exigen).
- Deben ser **accesibles sin login**.
- No deben tener **redirects a la app** (deben funcionar en navegador normal).
- Deben estar **en el idioma del país** o en inglés (idealmente ambas).
- **No uses enlaces temporales** tipo Netlify aleatorio; usa dominio propio.

---

## 📜 Documentos legales

Los cuatro documentos se encuentran en el objeto `LEGAL` dentro del `<script>` de `index.html`. Para editarlos, busca:

```js
const LEGAL = {
  terminos: `...`,
  privacidad: `...`,
  cancelacion: `...`,
  dpa: `...`
};
```

Cada uno se abre en el modal cuando el usuario hace clic en los enlaces con `data-legal="..."`.

### Estado de cada documento

| Documento | Estado | Observaciones |
|---|---|---|
| **Términos y Condiciones** | ✅ Versión inicial publicable | Incluye renovación automática, SLA, naturaleza IA, suspensión. |
| **Política de Privacidad** | ✅ Versión inicial publicable | Incluye base legal, entrenamiento IA, autoridad de control, medidas de seguridad. |
| **Cancelación** | ✅ Versión inicial publicable | Incluye confirmación por email y advertencia de renovación. |
| **DPA** | ⚠️ Resumen | Falta versión completa con anexos. Un abogado debe redactarla. |

### Recomendaciones legales antes de publicar
1. **Revisión por abogado** especializado en protección de datos (Ley 1581 de 2012, Colombia) y RGPD (UE).
2. **Registro de la base de datos** ante la SIC (si aplica según volumen).
3. **Designar un contacto de privacidad** (no necesariamente DPO formal).
4. **Verificar que la política refleje la realidad técnica** de la app (dónde se alojan los datos, qué proveedores cloud se usan, etc.).
5. **Completar el Data Safety form** (Google) y **App Privacy Details** (Apple) de forma coherente con la política.

> ⚠️ **Advertencia:** los textos legales actuales son un **borrador funcional**. No sustituyen asesoría legal profesional. Publicar una política que no refleje la realidad puede acarrear sanciones de la SIC y rechazo en las tiendas.

---

## 🔍 Qué es real y qué es placeholder

Esta sección es crítica para que quien retome el proyecto sepa qué falta.

### ✅ Real / funcional
- Diseño y maquetación completos.
- Navegación y menú móvil.
- FAQ acordeón.
- Modal legal con los 4 documentos.
- Validación de formulario (frontend).
- Animaciones y responsive.
- SEO básico y Open Graph.

### ⚠️ Placeholder / demo
- **Formulario de contacto:** valida pero **no envía** a ningún servidor. Muestra mensaje de éxito simulado. **Debe conectarse a un backend, Formspree, Resend, o al CRM de la empresa.**
- **Botón "Iniciar sesión":** apunta a `#contacto`. Debe enlazarse a la app real cuando exista.
- **Precios de planes:** son valores de referencia (USD 149 / 399 / a medida). **Deben validarse con el área comercial.**
- **Métricas del hero** ("99%", "15k+"): tomadas de la landing original. **Deben confirmarse con datos reales** o marcarse como "métricas internas".
- **Logo:** es un placeholder textual (`T3`). Debe reemplazarse por el logo oficial de TRESICLOS cuando esté disponible.
- **Favicon:** no incluido. Debe agregarse (`<link rel="icon" ...>`).
- **Redes sociales:** el footer menciona "Síguenos" en la versión original pero no se incluyeron enlaces. Deben agregarse si aplica.

### ❌ No implementado (fuera de alcance de esta página)
- Backend / API.
- Autenticación real.
- Pasarela de pagos.
- Panel de administración.
- Analítica (Google Analytics, Plausible, etc.).
- Cookies de sesión reales.
- Internacionalización (i18n) — actualmente solo español.

---

## ✅ Checklist antes de publicar

Antes de considerar esta página lista para enviar a las tiendas:

### Contenido
- [ ] Reemplazar logo placeholder por logo oficial.
- [ ] Agregar favicon.
- [ ] Validar precios con el área comercial.
- [ ] Confirmar o ajustar las métricas del hero (99%, 15k+, 24/7).
- [ ] Agregar enlaces a redes sociales si aplica.
- [ ] Revisar textos legales con abogado.

### Técnico
- [ ] Conectar formulario de contacto a backend real.
- [ ] Enlazar "Iniciar sesión" a la app cuando exista.
- [ ] Configurar dominio propio con HTTPS.
- [ ] Verificar que las URLs legales sean accesibles sin login.
- [ ] Probar en Chrome, Safari, Firefox y Edge.
- [ ] Probar en iOS Safari y Android Chrome (móvil real).
- [ ] Validar HTML en [validator.w3.org](https://validator.w3.org/).
- [ ] Ejecutar Lighthouse (objetivo: 90+ en Performance, Accessibility, Best Practices, SEO).
- [ ] Configurar `robots.txt` y `sitemap.xml` si se indexa.
- [ ] Agregar analítica si la empresa lo requiere (con consentimiento si aplica).

### Legal / tiendas
- [ ] Completar **Data Safety form** en Google Play Console.
- [ ] Completar **App Privacy Details** en App Store Connect.
- [ ] Verificar que la política mencione **todos** los datos que la app recolecta.
- [ ] Verificar que el mecanismo de cancelación sea **visible y funcional**.
- [ ] Confirmar datos de contacto del responsable (email, dirección, teléfono).
- [ ] Publicar URLs definitivas en ambas consolas.

---

## 🔧 Mantenimiento y siguientes pasos

### Corto plazo (provisional)
1. Publicar en Netlify/Vercel con dominio propio.
2. Conectar el formulario a un servicio real (Formspree es la opción más rápida).
3. Reemplazar logo y favicon.
4. Validar textos legales con abogado.
5. Enviar URLs a Google Play Console y App Store Connect.

### Mediano plazo (cuando la app esté lista)
1. Enlazar "Iniciar sesión" y "Solicitar demo" al flujo real de la app.
2. Agregar sección de **casos de éxito** o **testimonios**.
3. Agregar **capturas de la app** o video demo.
4. Considerar versión en inglés (i18n) si se apunta a mercados internacionales.
5. Evaluar migrar a un framework (Next.js, Astro) si el sitio crece.

### Largo plazo (producto maduro)
1. Reemplazar landing provisional por sitio oficial.
2. Agregar blog / recursos.
3. Integrar CRM y automatizaciones de marketing.
4. Panel de cliente para gestionar suscripciones.
5. Documentación técnica pública (API docs) si aplica.

---

## 🧠 Decisiones de diseño (por qué se hizo así)

| Decisión | Razón |
|---|---|
| **Un solo archivo HTML** | Portabilidad máxima, despliegue trivial, cero dependencias, ideal para sitio provisional. |
| **Sin frameworks** | No hay build step; cualquiera puede editar y publicar. |
| **Dark theme** | Coherente con productos de IA/tech B2B; reduce fatiga visual; look premium. |
| **Modal legal en la misma página** | Una sola URL cumple requisitos de tiendas; el usuario no se pierde. |
| **DPA incluido en modal** | Los clientes B2B suelen pedirlo; tenerlo visible acelera ventas. |
| **Sección de Seguridad visible** | Reduce fricción en ventas B2B; responde las dudas que la landing original no cubría. |
| **FAQ con las preguntas críticas** | Anticipa objeciones de compra y reduce carga de soporte. |
| **`prefers-reduced-motion`** | Accesibilidad y respeto a usuarios con sensibilidad al movimiento. |
| **SVG inline** | Sin dependencias de iconos; rendimiento y control total. |

---

## 🏢 Contacto

**TRESICLOS** — Inversiones Valencia Calderón

- 📧 Email: [soy@tresiclos.com](mailto:soy@tresiclos.com)
- 📞 Teléfono: [+57 315 571 0638](tel:+573155710638)
- 📍 Dirección: Avenida 6A 28-98, Oficina 201 — Cali, Colombia
- 🌐 Sitio: *(pendiente de dominio definitivo)*

---

## 📄 Licencia y propiedad

Todo el código, diseño y contenido de esta página es **propiedad de Inversiones Valencia Calderón (TRESICLOS)**. Uso interno y comercial autorizado únicamente por la empresa. No distribuir sin permiso.

© 2026 TRESICLOS. Todos los derechos reservados.

---

## 📝 Historial de cambios

### v1.0 — Mayo 2026 (commit inicial)
- Creación de la landing page completa.
- Publicación de Términos y Condiciones, Política de Privacidad, Cancelación y DPA (resumen).
- Diseño responsive, accesible y con modal legal integrado.
- Preparada para servir como URL de políticas para Google Play Store y Apple App Store.

---

> **Nota final para quien retome el proyecto:** este README asume que la página es **provisional** y su objetivo principal es **cumplir con los requisitos legales de las tiendas**. Antes de tratarla como sitio definitivo, revisa la sección [Qué es real y qué es placeholder](#-qué-es-real-y-qué-es-placeholder) y completa el [Checklist antes de publicar](#-checklist-antes-de-publicar).
