import type { Language } from "../i18n/translations";

export type Localized<T> = Record<Language, T>;

export type Project = {
  id: string;
  title: Localized<string>;
  description: Localized<string>;
  focus?: Localized<string>;
  highlights?: Localized<string[]>;
  tech: string[];
  github: string;
  demo?: string;
  image: string;
  imageAlt: Localized<string>;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "analizador-lexico",
    title: {
      es: "Analizador Léxico",
      en: "Lexical Analyzer",
    },
    description: {
      es: "Aplicación web académica en desarrollo para el análisis léxico de documentos, con autenticación de usuarios, procesamiento de texto y visualización de resultados.",
      en: "Academic web application under development for lexical analysis of documents, featuring user authentication, text processing, and result visualization.",
    },
    focus: {
      es: "Desarrollo frontend, integración con API REST y trabajo colaborativo.",
      en: "Frontend development, REST API integration, and team collaboration.",
    },
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Java",
      "Spring Boot",
      "MySQL",
    ],
    github: "",
    demo: "https://analizador-lexico-umg.vercel.app/",
    image: "/projects/lexical.webp",
    imageAlt: {
      es: "Vista previa del Analizador Léxico",
      en: "Preview of the Lexical Analyzer",
    },
    featured: true,
  },
  {
    id: "control-asistencia",
    title: {
      es: "Sistema de Control de Asistencia",
      en: "Attendance Management System",
    },
    description: {
      es: "Aplicación web para gestionar el registro de asistencia de estudiantes. Permite crear, consultar, editar y eliminar registros desde una interfaz clara y responsiva, con persistencia local de los datos.",
      en: "Web application to manage student attendance records. It allows creating, viewing, editing and deleting records through a clear, responsive interface with local data persistence.",
    },
    highlights: {
      es: [
        "Operaciones CRUD completas sobre los registros",
        "Gestión de estado y formularios en React",
        "Persistencia de datos con localStorage",
        "Interfaz responsiva enfocada en la usabilidad",
      ],
      en: [
        "Full CRUD operations on records",
        "State management and forms in React",
        "Data persistence with localStorage",
        "Responsive interface focused on usability",
      ],
    },
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/cxavicontreras/control-de-asistencia-academica",
    demo: "https://control-de-asistencia-academica-xc.vercel.app/",
    image: "/projects/attendance.webp",
    imageAlt: {
      es: "Vista previa del Sistema de Control de Asistencia",
      en: "Preview of the Attendance Management System",
    },
  },
  {
    id: "lista-tareas",
    title: {
      es: "Lista de Tareas",
      en: "To-Do List",
    },
    description: {
      es: "Aplicación web responsiva para crear, organizar, completar y eliminar tareas desde cualquier dispositivo.",
      en: "Responsive web application to create, organize, complete and delete tasks from any device.",
    },
    focus: {
      es: "Manipulación del DOM, gestión de estado local y diseño responsivo.",
      en: "DOM manipulation, local state management and responsive design.",
    },
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/cxavicontreras/ToDoList",
    demo: "https://to-do-list-xc.vercel.app/",
    image: "/projects/todo.webp",
    imageAlt: {
      es: "Vista previa de la Lista de Tareas",
      en: "Preview of the To-Do List",
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const secondaryProjects = projects.filter((project) => !project.featured);
