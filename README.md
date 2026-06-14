# ⚡ MiPortafolioWeb-ABCALink - "NEOALF Ultimate Portfolio" (V2.0.0)

¡Bienvenido a la evolución de mi portafolio web profesional! Este proyecto representa una reconstrucción arquitectónica total bajo la marca **AbcaLink**. Se ha transformado un sitio monolítico en una plataforma **modular, desacoplada y de ultra alto rendimiento**, diseñada específicamente para exhibir mis competencias en Ingeniería en Informática y Telecomunicaciones, Gestión de Proyectos TI y Arquitecturas de Ciberdefensa.

Manteniendo mi identidad visual original, esta versión eleva la experiencia UI/UX a un estándar premium con una estética cyberpunk/futurista sin comprometer las mejores prácticas de desarrollo de software.

---

## 🚀 Características Clave de la V2.0.0

*   **Arquitectura Modular Escalable:** Estructura limpia basada en componentes web nativos, separando de forma estricta los estilos globales, las vistas de sección y las lógicas de interacción.
*   **Diseño Cyberpunk Premium:** Interfaz oscura moderna utilizando técnicas de *Glassmorphism*, efectos de brillo (*glow*) futuristas y transiciones fluidas con soporte nativo para Light/Dark Mode.
*   **Efectos Matrix Dinámicos:** Aislamiento de scripts de animación de alto rendimiento que no interfieren con la velocidad de carga ni con la accesibilidad de la página.
*   **Enfoque ATS-Friendly:** Contenido estratégicamente optimizado con palabras clave técnicas para superar con éxito los filtros automatizados de reclutamiento en el sector TI.

---

## 🛠️ Stack Tecnológico

*   **Frontend Core:** HTML5 semántico y CSS3 avanzado (Variables globales, CSS Grid, Flexbox, Custom Keyframes).
*   **Lógica de Interfaz:** JavaScript Vanilla (ES6+) nativo. Cero dependencias externas o librerías pesadas para garantizar la máxima velocidad de carga y un Score perfecto en Core Web Vitals.
*   **Iconografía y Tipografía:** FontAwesome & Inter Font Face.

---

## 📂 Arquitectura del Proyecto

El código se encuentra organizado bajo el principio de *Separación de Concernientes (Separation of Concerns)* para permitir un mantenimiento ágil y despliegues modulares:

```text
neoalf_ultimate_portfolio/
├── core/             # Estilos base, variables globales de diseño y reseteos CSS.
├── components/       # Elementos de interfaz reutilizables (botones, tarjetas, navbar).
├── sections/         # Estilos y lógicas de JavaScript divididos por secciones independientes.
├── animations/       # Scripts y CSS específicos para efectos visuales (Matrix rain, glows).
├── data/             # Archivos de configuración o JSON con información dinámica.
└── assets/           # Recursos estáticos optimizados (Imágenes corporativas, logos).
