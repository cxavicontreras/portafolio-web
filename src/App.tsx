import { useState } from "react";
import foto from "./assets/foto.jpeg";
import LanguageSelector from "./components/LanguageSelector";
import ProjectsSection from "./components/ProjectsSection";
import TechBadge from "./components/TechBadge";
import { useLanguage } from "./i18n/context";

const navLinks = [
  { href: "#inicio", key: "home" },
  { href: "#tecnologias", key: "technologies" },
  { href: "#proyectos", key: "projects" },
  { href: "#sobre-mi", key: "about" },
] as const;

const heroTech = ["React", "TypeScript", "JavaScript", "Tailwind CSS"];

type Tech = { name: string; featured?: boolean };

type TechGroup = {
  id: "frontend" | "tools" | "learning";
  items: Tech[];
  learning?: boolean;
};

const techGroups: TechGroup[] = [
  {
    id: "frontend",
    items: [
      { name: "React", featured: true },
      { name: "TypeScript", featured: true },
      { name: "JavaScript", featured: true },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: "tools",
    items: [{ name: "Git" }, { name: "GitHub" }],
  },
  {
    id: "learning",
    learning: true,
    items: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "C#" },
      { name: "SQL Server" },
    ],
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { text } = useLanguage();

  return (
    <div className="min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-100">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-green-500 focus:px-4 focus:py-2 focus:font-semibold focus:text-black"
      >
        {text.a11y.skipToContent}
      </a>

      {/* Navegación */}
      <header
        className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur"
        onKeyDown={(event) => {
          if (event.key === "Escape") setMenuOpen(false);
        }}
      >
        <nav
          aria-label={text.a11y.mainNavigation}
          className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 sm:px-8 lg:px-10"
        >
          <a
            href="#inicio"
            aria-label={text.a11y.homeLink}
            onClick={() => setMenuOpen(false)}
            className="rounded-lg text-xl font-black text-green-400 transition hover:text-green-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400"
          >
            XC
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            <ul className="hidden items-center gap-1 text-sm text-zinc-300 md:flex md:gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-lg px-3 py-2 transition hover:bg-zinc-900 hover:text-green-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
                  >
                    {text.nav[link.key]}
                  </a>
                </li>
              ))}
            </ul>

            <LanguageSelector />

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="menu-movil"
              aria-label={menuOpen ? text.a11y.closeMenu : text.a11y.openMenu}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-200 transition hover:border-green-400 hover:text-green-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 md:hidden"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-5 w-5"
              >
                {menuOpen ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M18 6L6 18" />
                  </>
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div
            id="menu-movil"
            className="border-t border-zinc-800 bg-zinc-950/95 backdrop-blur md:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col px-3 py-3 sm:px-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base text-zinc-200 transition hover:bg-zinc-900 hover:text-green-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
                  >
                    {text.nav[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section
          id="inicio"
          aria-labelledby="hero-titulo"
          className="relative overflow-hidden"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(74,222,128,0.12),transparent_45%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.10),transparent_50%)]" />
            <div className="absolute inset-0 bg-tech-grid" />
          </div>

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:px-10 lg:py-28">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-green-400"
                />
                {text.hero.availability}
              </p>

              <h1
                id="hero-titulo"
                className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              >
                {text.hero.greeting}{" "}
                <span className="text-green-400">Xavier Contreras</span>
              </h1>

              <p className="mt-5 text-lg font-semibold text-zinc-200 sm:text-xl">
                {text.hero.role}
              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                {text.hero.intro}
              </p>

              <ul
                aria-label={text.a11y.heroTechLabel}
                className="mt-6 flex flex-wrap gap-2"
              >
                {heroTech.map((tech) => (
                  <li key={tech}>
                    <TechBadge name={tech} size="md" emphasis />
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#proyectos"
                  className="rounded-xl bg-green-500 px-6 py-3 text-center font-semibold text-black transition hover:bg-green-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400"
                >
                  {text.hero.viewProjects}
                </a>

                <a
                  href="mailto:xaviercrgt@gmail.com"
                  className="rounded-xl border border-zinc-700 px-6 py-3 text-center font-semibold transition hover:border-green-400 hover:text-green-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400"
                >
                  {text.hero.contactMe}
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-fit">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-green-500/30 via-transparent to-green-400/20 blur-2xl"
              />

              <img
                src={foto}
                alt={text.a11y.photoAlt}
                width="320"
                height="320"
                fetchPriority="high"
                className="relative h-56 w-56 rounded-[2rem] border border-zinc-800 object-cover shadow-2xl ring-1 ring-green-400/20 sm:h-64 sm:w-64 lg:h-80 lg:w-80"
              />
            </div>
          </div>
        </section>

        {/* Tecnologías */}
        <section
          id="tecnologias"
          aria-labelledby="tecnologias-titulo"
          className="relative overflow-hidden border-y border-zinc-800/60 bg-gradient-to-b from-zinc-950 via-zinc-900/40 to-zinc-950"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.06),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.05),transparent_50%)]" />
          </div>

          <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="max-w-2xl">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-400">
                {text.technologies.eyebrow}
              </p>

              <h2
                id="tecnologias-titulo"
                className="text-3xl font-bold sm:text-4xl"
              >
                {text.technologies.heading}
              </h2>

              <p className="mt-4 text-zinc-400">
                {text.technologies.description}
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {techGroups.map((group) => (
                <div
                  key={group.id}
                  className={`relative flex flex-col overflow-hidden rounded-3xl border bg-gradient-to-b from-zinc-900/60 to-zinc-950/60 p-6 shadow-sm transition duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:content-[''] hover:border-zinc-700 ${
                    group.learning
                      ? "border-dashed border-zinc-700"
                      : "border-zinc-800"
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-green-500/5 blur-2xl"
                  />

                  <div className="relative flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="h-4 w-1 rounded-full bg-green-400"
                    />

                    <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-200">
                      {text.technologies.groups[group.id]}
                    </h3>

                    {group.learning && (
                      <span className="rounded-full border border-dashed border-zinc-600 px-2 py-0.5 text-xs font-medium text-zinc-400">
                        {text.technologies.inProgress}
                      </span>
                    )}
                  </div>

                  <ul className="relative mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <TechBadge
                          name={item.name}
                          size="md"
                          emphasis={item.featured}
                          learning={group.learning}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proyectos */}
        <ProjectsSection />

        {/* Sobre mí */}
        <section
          id="sobre-mi"
          aria-labelledby="sobre-mi-titulo"
          className="relative overflow-hidden border-y border-zinc-800/60 bg-gradient-to-b from-zinc-950 via-zinc-900/40 to-zinc-950"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(74,222,128,0.05),transparent_45%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.04),transparent_45%)]" />
          </div>

          <div className="relative mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:px-8 md:grid-cols-2 lg:px-10">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-400">
                {text.about.eyebrow}
              </p>

              <h2 id="sobre-mi-titulo" className="text-3xl font-bold sm:text-4xl">
                {text.about.heading}
              </h2>

              <p className="mt-6 leading-relaxed text-zinc-400">
                {text.about.description}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/70 to-zinc-950 p-7 shadow-sm before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:content-[''] sm:p-8">
              <h3 className="text-2xl font-bold">{text.about.ctaHeading}</h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                {text.about.ctaDescription}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:xaviercrgt@gmail.com"
                  className="rounded-xl bg-green-500 px-5 py-3 text-center font-semibold text-black transition hover:bg-green-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400"
                >
                  {text.about.sendEmail}
                </a>

                <a
                  href="https://github.com/cxavicontreras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-zinc-700 px-5 py-3 text-center font-semibold transition hover:border-green-400 hover:text-green-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400"
                >
                  {text.about.viewGitHub}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-5 py-8 text-center text-sm text-zinc-500">
        {text.footer.rights}
      </footer>
    </div>
  );
}
