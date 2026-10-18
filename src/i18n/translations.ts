export type Language = "es" | "en";

export const languages: readonly Language[] = ["es", "en"];

export const defaultLanguage: Language = "es";

export const STORAGE_KEY = "portfolio-language";

export function isLanguage(value: string | null | undefined): value is Language {
  return value != null && (languages as readonly string[]).includes(value);
}

const es = {
  meta: {
    title: "Xavier Contreras | Software Developer - Desarrollo Web",
    description:
      "Portafolio de Xavier Contreras, Software Developer enfocado en desarrollo web. Interfaces con React, TypeScript, JavaScript y Tailwind CSS, con interés en frontend y backend.",
    ogLocale: "es_ES",
  },
  a11y: {
    skipToContent: "Saltar al contenido",
    mainNavigation: "Navegación principal",
    homeLink: "Xavier Contreras, ir al inicio",
    openMenu: "Abrir menú de navegación",
    closeMenu: "Cerrar menú de navegación",
    languageSelector: "Seleccionar idioma",
    languageOptionEs: "Cambiar a español",
    languageOptionEn: "Cambiar a inglés",
    heroTechLabel: "Tecnologías principales",
    photoAlt: "Fotografía de Xavier Contreras",
  },
  nav: {
    home: "Inicio",
    technologies: "Tecnologías",
    projects: "Proyectos",
    about: "Sobre mí",
  },
  hero: {
    availability: "Abierto a oportunidades",
    greeting: "Hola, soy",
    role: "Software Developer enfocado en desarrollo web",
    intro:
      "Construyo interfaces modernas, accesibles y responsivas con React, TypeScript y Tailwind CSS, cuidando el detalle y la experiencia de usuario. Actualmente amplío mis conocimientos en backend con Java, Spring Boot, C# y SQL Server, y busco seguir creciendo en proyectos reales.",
    viewProjects: "Ver proyectos",
    contactMe: "Contactarme",
  },
  technologies: {
    eyebrow: "Habilidades",
    heading: "Tecnologías y herramientas",
    description:
      "Herramientas que utilizo en mi día a día y tecnologías que sigo incorporando de forma progresiva.",
    groups: {
      frontend: "Frontend",
      tools: "Herramientas",
      learning: "Aprendiendo",
    },
    inProgress: "En progreso",
  },
  projects: {
    eyebrow: "Portafolio",
    heading: "Proyectos destacados",
    description:
      "Aplicaciones web que he desarrollado de principio a fin, aplicando diseño responsivo, gestión de estado y lógica de negocio con React y JavaScript.",
    featuredBadge: "Proyecto principal",
    focusLabel: "Enfoque",
    liveDemo: "Ver demo",
    sourceCode: "Ver código",
    demoAria: (title: string) =>
      `Abrir demostración en vivo de ${title} en una nueva pestaña`,
    sourceAria: (title: string) =>
      `Ver el código fuente de ${title} en GitHub en una nueva pestaña`,
  },
  about: {
    eyebrow: "Conóceme",
    heading: "Sobre mí",
    description:
      "Actualmente estudio Ingeniería en Sistemas y desarrollo proyectos enfocados en desarrollo web. Me interesa crear interfaces accesibles, responsivas y fáciles de utilizar, mientras profundizo tanto en frontend como en backend.",
    ctaHeading: "¿Trabajamos juntos?",
    ctaDescription:
      "Busco una oportunidad como desarrollador de software donde pueda aportar, aprender de un equipo y participar en proyectos reales.",
    sendEmail: "Enviar correo",
    viewGitHub: "Ver GitHub",
  },
  footer: {
    rights: "© 2026 Xavier Contreras — Software Developer",
  },
};

export type Dictionary = typeof es;

const en: Dictionary = {
  meta: {
    title: "Xavier Contreras | Software Developer - Web Development",
    description:
      "Portfolio of Xavier Contreras, Software Developer focused on web development. Interfaces built with React, TypeScript, JavaScript and Tailwind CSS, with an interest in frontend and backend.",
    ogLocale: "en_US",
  },
  a11y: {
    skipToContent: "Skip to content",
    mainNavigation: "Main navigation",
    homeLink: "Xavier Contreras, go to top",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    languageSelector: "Select language",
    languageOptionEs: "Switch to Spanish",
    languageOptionEn: "Switch to English",
    heroTechLabel: "Main technologies",
    photoAlt: "Photograph of Xavier Contreras",
  },
  nav: {
    home: "Home",
    technologies: "Technologies",
    projects: "Projects",
    about: "About",
  },
  hero: {
    availability: "Open to opportunities",
    greeting: "Hi, I'm",
    role: "Software Developer focused on Web Development",
    intro:
      "I build modern, accessible and responsive interfaces with React, TypeScript and Tailwind CSS, paying close attention to detail and user experience. I'm currently expanding my backend skills with Java, Spring Boot, C# and SQL Server, and I'm looking to keep growing on real projects.",
    viewProjects: "View projects",
    contactMe: "Contact me",
  },
  technologies: {
    eyebrow: "Skills",
    heading: "Technologies and tools",
    description:
      "Tools I use in my day-to-day work and technologies I keep incorporating progressively.",
    groups: {
      frontend: "Frontend",
      tools: "Tools",
      learning: "Learning",
    },
    inProgress: "In progress",
  },
  projects: {
    eyebrow: "Portfolio",
    heading: "Featured projects",
    description:
      "Web applications I have built end to end, applying responsive design, state management and business logic with React and JavaScript.",
    featuredBadge: "Featured project",
    focusLabel: "Focus",
    liveDemo: "Live demo",
    sourceCode: "View code",
    demoAria: (title: string) => `Open the live demo of ${title} in a new tab`,
    sourceAria: (title: string) =>
      `View the source code of ${title} on GitHub in a new tab`,
  },
  about: {
    eyebrow: "Get to know me",
    heading: "About me",
    description:
      "I'm currently studying Systems Engineering and build projects focused on web development. I enjoy creating accessible, responsive and easy-to-use interfaces while deepening both my frontend and backend skills.",
    ctaHeading: "Let's work together?",
    ctaDescription:
      "I'm looking for a software developer opportunity where I can contribute, learn from a team and take part in real projects.",
    sendEmail: "Send email",
    viewGitHub: "View GitHub",
  },
  footer: {
    rights: "© 2026 Xavier Contreras — Software Developer",
  },
};

export const translations: Record<Language, Dictionary> = { es, en };
