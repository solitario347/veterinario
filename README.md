# veterinaria
PAGINA WEB PARA LA SALUD Y AYUDA DE MASCOTAS NECESITADAS.
# Animal Care - Sistema de Gestión Veterinaria

## Nombre del proyecto
**Animal Care - Aplicación Web Responsive para Gestión y Servicios Veterinarios**[cite: 1, 2]

---

## Integrantes
* **Edgar Fabián Pedraza Barrios** — Aprendiz SENA (Programa ADSO)[cite: 1, 2].
  * Responsable del diseño visual (UI/UX), hoja de estilos personalizada CSS3 con variables y animaciones, desarrollo de la sección independiente con Tailwind CSS e integración con la API pública[cite: 1, 2].
* **Thomas C.M.** — Aprendiz SENA (Programa ADSO)[cite: 1, 2].
  * Responsable de la maquetación semántica HTML5, desarrollo de la lógica del sistema CRUD en JavaScript, validación dinámica de formularios y manejo del almacenamiento persistente en LocalStorage[cite: 1, 2].

---

## Objetivo
* **Objetivo General:** Diseñar y desarrollar una solución web Front-End responsiva, interactiva y moderna para la veterinaria **Animal Care**, que permita optimizar la gestión de citas médicas, administración de pacientes y presentación del catálogo de servicios clínicos, como cumplimiento del Taller Final Integrador del programa Análisis y Desarrollo de Software (ADSO) del SENA[cite: 1, 2].
* **Objetivos Específicos:**
  * Implementar una interfaz adaptable (Responsive Design) para computadores, tablets y teléfonos móviles mediante Breakpoints y Media Queries[cite: 2].
  * Desarrollar un sistema de operaciones CRUD (Crear, Consultar, Editar, Eliminar) utilizando únicamente JavaScript y LocalStorage para la persistencia de información[cite: 2].
  * Integrar y consumir datos dinámicos en tiempo real provenientes de una API pública externa[cite: 2].
  * Aplicar buenas prácticas de desarrollo web, semántica HTML5, separación de responsabilidades y accesibilidad[cite: 2].

---

## Tecnologías utilizadas
* **HTML5:** Estructuración semántica repartida en 5 páginas web independientes (`index.html`, `admin.html`, `servicios.html`, `contacto.html`, `tailwind-seccion.html`)[cite: 1, 2].
* **CSS3:** Estilos personalizados, variables CSS (`:root`), modelo Flexbox, animaciones de entrada, efectos hover y diseño responsive[cite: 2].
* **JavaScript (ES6+):** Lógica del lado del cliente para manipulación del DOM, manejo de eventos (`click`, `input`, `submit`), validaciones de seguridad en formularios y peticiones asíncronas mediante `fetch`[cite: 2].
* **Bootstrap 5:** Maquetación rápida mediante el sistema Grid y componentes UI como Navbar, Cards, Carousel, Modal, Toast, Accordion y Offcanvas[cite: 2].
* **Tailwind CSS:** Framework utilitario utilizado para construir de manera exclusiva una sección independiente (`tailwind-seccion.html`) sin cruzarse con los estilos de Bootstrap[cite: 1, 2].
* **LocalStorage:** Sistema de almacenamiento local en el navegador para la persistencia de los registros del CRUD sin necesidad de base de datos backend[cite: 2].
* **API Pública:** Consumo de servicio web REST externo para obtener e insertar información e imágenes dinámicas en tiempo real[cite: 2].
* **Entorno de Desarrollo:** Visual Studio Code / Windsurf, Live Server para ejecución local y Git/GitHub para control de versiones[cite: 1].

---

## Instrucciones para ejecutar

1. **Requisitos previos:**
   Disponer de un navegador web moderno (Google Chrome, Microsoft Edge, Brave o Mozilla Firefox) y un editor de código instalado.

2. **Obtención del proyecto:**
   Descargar o descomprimir el proyecto asegurando conservar intacta la estructura original de carpetas (`css/`, `js/`, `pages/`)[cite: 1, 2].

3. **Ejecución en el navegador:**
   * **Opción A (Recomendada):** Abrir la carpeta `veterinario-main` en Visual Studio Code, hacer clic derecho sobre `index.html` y seleccionar **Open with Live Server**[cite: 1].
   * **Opción B (Directa):** Entrar a la carpeta raíz `veterinario-main` y hacer doble clic en el archivo `index.html` para abrirlo directamente en el navegador[cite: 1].

4. **Navegación e Interacción:**
   * Utilizar la barra de menú superior para explorar la landing page (`index.html`), servicios (`pages/servicios.html`), formulario de contacto (`pages/contacto.html`) y la sección desarrollada con Tailwind CSS (`pages/tailwind-seccion.html`)[cite: 1, 2].
   * Ingresar al módulo de administración (`pages/admin.html`) para crear, editar, listar o eliminar mascotas/citas médicas y verificar cómo la información persiste al recargar la página gracias a LocalStorage[cite: 1, 2].
   * Interactuar con los botones de la API pública para comprobar la carga dinámica de datos externos[cite: 2].