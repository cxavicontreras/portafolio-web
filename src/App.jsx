import CalculadoraImg from "./assets/Calculadora.png";
import CRUDImg from "./assets/CRUD-Asistencia.png";
import TD from "./assets/ToDo.png";
import foto from "./assets/foto.jpeg"

export default function Portfolio() {
  const projects = [
        {
      title: "Calculadora",
      description:
        "Página que simula una calculadora con operaciones básicas, potencias, raices y porcentajes, se puede utilizar en cualquier dispositivo",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/cxavicontreras/Calculator",
      image: CalculadoraImg,
    },

    {
      title: "Página de control de asistencia",
      description:
        "Página web que permite registrar, mostrar, actualizar y eliminar estudiantes para llevar un buen control de asistencia en cualquier dispositivo que tengan a la mano",
      tech: ["HTML", "CSS", "React"],
      github: "https://github.com/cxavicontreras/control-de-asistencia-academica",
      image : CRUDImg,
    },
    {
      title: "Lista de qué haceres",
      description:
        "Página que permite llevar una agenda por medio de una lista de tareas que se puede ver en cualquier dispositivo",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/cxavicontreras/ToDoList",
      image: TD,
    },
  ];

  const skills = [
    "Java",
    "Python",
    "HTML",
    "CSS",
    "SQL",
    "Git",
    "JavaScript",
    "React",
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
          <div className="flex-1">
            <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-4">
              Portafolio
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Xavier <span className="text-green-400">Contreras</span>
            </h1>

            <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed mb-8">
              Estudiante y desarrollador enfocado en desarrollo de software,
              bases de datos y aplicaciones Java. Me interesa crear sistemas
              funcionales, interfaces limpias y proyectos escalables.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/cxavicontreras"
                target="_blank"
                className="bg-green-500 hover:bg-green-400 transition px-6 py-3 rounded-2xl font-semibold text-black"
              >
                GitHub
              </a>

              <a
                href="mailto:xaviercrgt@gmail.com"
                className="border border-zinc-700 hover:border-green-400 transition px-6 py-3 rounded-2xl"
              >
                Contacto
              </a>
            </div>
          </div>
          <img
          src={foto}
          alt="Xavier Contreras"
          className="w-40 h-40 object-cover rounded-[2rem] shadow-2xl border border-zinc-800"
          />
          
        </section>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Tecnologías</h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-5 py-3 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-green-400 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Proyectos</h2>

            <p className="text-zinc-500">
              GitHub + Experiencia práctica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-950 border border-zinc-800 rounded-[2rem] p-6 hover:border-green-400 hover:-translate-y-1 transition"
            >

              {/* Imagen */}
              <img
                src={project.image}
                alt={project.title}
                className="h-40 w-full object-cover rounded-2xl mb-6"
              />

              {/* Título */}
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              {/* Descripción */}
              <p className="text-zinc-400 leading-relaxed mb-6">
                {project.description}
              </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-sm bg-green-500/10 border border-green-500/20 text-green-400 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botón */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center bg-green-500 text-black font-semibold py-3 rounded-xl hover:bg-green-400 transition"
        >
          Ver Proyecto
        </a>

      </div>
    ))}
  </div>
</section>

        {/* About */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-zinc-950 border border-zinc-800 rounded-[2rem] p-8">
            <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>

            <p className="text-zinc-400 leading-relaxed">
              Actualmente estoy desarrollando proyectos relacionados con Java,
              bases de datos y desarrollo web. Me interesa mejorar en backend,
              frontend y arquitectura de software mientras construyo proyectos
              reales para mi portafolio profesional.
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-[2rem] p-8">
            <h2 className="text-3xl font-bold mb-6">Objetivo</h2>

            <p className="text-zinc-400 leading-relaxed">
              Busco oportunidades para seguir creciendo como desarrollador,
              trabajar en proyectos reales y fortalecer mis habilidades en
              desarrollo de software y tecnologías web.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-800 pt-8 text-center text-zinc-500">
          <p>
            © 2026 Xavi Contreras — Portafolio de Desarrollo Web y Software.
          </p>
        </footer>
      </div>
    </div>
  );
}
