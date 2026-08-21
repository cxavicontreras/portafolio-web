import CalculadoraImg from "./assets/Calculadora.png";
import CRUDImg from "./assets/CRUD-Asistencia.png";
import TD from "./assets/ToDo.png";
import foto from "./assets/foto.jpeg";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Sistema de control de asistencia",
    description:
      "Aplicación CRUD construida con React para registrar, consultar, actualizar y eliminar estudiantes. Incluye una interfaz responsiva y persistencia de datos mediante localStorage.",
    tech: ["React", "JavaScript", "CSS"],
    github:
      "https://github.com/cxavicontreras/control-de-asistencia-academica",
    image: CRUDImg,
  },
  {
    title: "Calculadora web",
    description:
      "Calculadora responsiva que permite realizar operaciones básicas, potencias, raíces y porcentajes desde computadoras o dispositivos móviles.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/cxavicontreras/Calculator",
    image: CalculadoraImg,
  },
  {
    title: "Lista de tareas",
    description:
      "Aplicación web responsiva para crear, organizar, completar y eliminar tareas desde cualquier dispositivo.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/cxavicontreras/ToDoList",
    image: TD,
  },
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Git",
  "GitHub",
];

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-100">
      {/* Navegación */}
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur">
        <nav
          aria-label="Navegación principal"
          className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10"
        >
          <a
            href="#inicio"
            className="text-xl font-black text-green-400"
          >
            XC
          </a>

          <div className="flex items-center gap-5 text-sm text-zinc-300 sm:gap-8">
            <a
              href="#proyectos"
              className="transition hover:text-green-400"
            >
              Proyectos
            </a>

            <a
              href="#sobre-mi"
              className="transition hover:text-green-400"
            >
              Sobre mí
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section
          id="inicio"
          className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1fr_auto] md:py-24 lg:px-10 lg:py-28"
        >
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
              Portafolio frontend
            </p>

            <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              Hola, soy{" "}
              <span className="text-green-400">Xavier Contreras</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Desarrollador frontend junior con bases sólidas en HTML, CSS y
              JavaScript. Construyo interfaces responsivas y aplicaciones web
              utilizando React, Tailwind CSS, Git y GitHub.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#proyectos"
                className="rounded-xl bg-green-500 px-6 py-3 text-center font-semibold text-black transition hover:bg-green-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400"
              >
                Ver proyectos
              </a>

              <a
                href="mailto:xaviercrgt@gmail.com"
                className="rounded-xl border border-zinc-700 px-6 py-3 text-center font-semibold transition hover:border-green-400 hover:text-green-400"
              >
                Contactarme
              </a>
            </div>
          </div>

          <img
            src={foto}
            alt="Fotografía de Xavier Contreras"
            fetchPriority="high"
            className="mx-auto h-48 w-48 rounded-3xl border border-zinc-800 object-cover shadow-2xl sm:h-56 sm:w-56 lg:h-64 lg:w-64"
          />
        </section>

        {/* Tecnologías */}
        <section className="border-y border-zinc-800 bg-zinc-900/40">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:px-10">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-400">
                Habilidades
              </p>

              <h2 className="text-3xl font-bold sm:text-4xl">
                Tecnologías frontend
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-200 transition hover:border-green-400 hover:text-green-400 sm:text-base"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Proyectos */}
        <section
          id="proyectos"
          className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
        >
          <div className="mb-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-400">
              Trabajo práctico
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Proyectos destacados
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-400">
              Aplicaciones desarrolladas para practicar interfaces,
              responsividad, manipulación de datos y lógica con JavaScript.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 transition duration-300 hover:-translate-y-1 hover:border-green-400"
              >
                <div className="aspect-video overflow-hidden bg-zinc-900">
                  <img
                    src={project.image}
                    alt={`Vista previa de ${project.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-relaxed text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-sm text-green-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-xl bg-green-500 px-4 py-3 text-center font-semibold text-black transition hover:bg-green-400"
                      >
                        Ver demo
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-xl border border-zinc-700 px-4 py-3 text-center font-semibold transition hover:border-green-400 hover:text-green-400"
                    >
                      Ver código
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Sobre mí */}
        <section
          id="sobre-mi"
          className="border-y border-zinc-800 bg-zinc-900/40"
        >
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:px-8 md:grid-cols-2 lg:px-10">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-400">
                Conóceme
              </p>

              <h2 className="text-3xl font-bold sm:text-4xl">Sobre mí</h2>

              <p className="mt-6 leading-relaxed text-zinc-400">
                Actualmente estudio Ingeniería en Sistemas y desarrollo
                proyectos enfocados en frontend. Me interesa crear interfaces
                accesibles, responsivas y fáciles de utilizar mientras continúo
                profundizando en JavaScript y React.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 sm:p-8">
              <h2 className="text-2xl font-bold">
                ¿Trabajamos juntos?
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Busco una oportunidad como desarrollador frontend junior donde
                pueda aportar, aprender de un equipo y participar en proyectos
                reales.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:xaviercrgt@gmail.com"
                  className="rounded-xl bg-green-500 px-5 py-3 text-center font-semibold text-black transition hover:bg-green-400"
                >
                  Enviar correo
                </a>

                <a
                  href="https://github.com/cxavicontreras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-zinc-700 px-5 py-3 text-center font-semibold transition hover:border-green-400 hover:text-green-400"
                >
                  Ver GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-5 py-8 text-center text-sm text-zinc-500">
        © 2026 Xavier Contreras — Desarrollador Frontend Junior
      </footer>
    </div>
  );
}