import { useState } from 'react';
import {
  MapPin,
  Calendar,
  Award,
  Mail,
  Phone,
  Menu,
  X,
} from 'lucide-react';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
];

const LINKEDIN_URL = 'https://www.linkedin.com/in/bita-bahadori';
const GITHUB_URL = 'https://github.com/Bita04';

function Github({ size = 20, className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function Linkedin({ size = 20, className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function BulletItem({ children }) {
  return (
    <li className="relative pl-4 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand">
      {children}
    </li>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-slate-900 transition-colors"
      aria-label={label}
    >
      {children}
    </a>
  );
}

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-brand selection:text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-brand focus:text-white focus:font-medium"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="#hero"
            className="text-xl font-bold tracking-wider text-white hover:text-brand transition-colors"
          >
            Bita<span className="text-brand">Bahadori</span>
          </a>

          <nav
            className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400"
            aria-label="Main"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className="hover:text-white transition-colors">
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-brand text-white hover:bg-brand-dark transition-all shadow-lg shadow-brand/20"
            >
              Let&apos;s Connect
            </a>
          </nav>

          <button
            type="button"
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav
            id="mobile-nav"
            className="md:hidden border-t border-slate-800/60 bg-slate-950/95 px-6 py-4 flex flex-col gap-1"
            aria-label="Main"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={closeMobileMenu}
                className="py-3 text-slate-300 hover:text-white transition-colors border-b border-slate-900 last:border-0"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="mt-2 py-3 text-center rounded-lg bg-brand text-white font-medium hover:bg-brand-dark transition-colors"
            >
              Let&apos;s Connect
            </a>
          </nav>
        )}
      </header>

      <main id="main">
        <section
          id="hero"
          className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 md:pt-36 md:pb-32 flex flex-col-reverse md:flex-row items-center gap-12"
        >
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-brand motion-safe:animate-pulse" />
              Open to New Opportunities
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-brand">
                Bita Bahadori
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-slate-300">
              Front-End Developer
            </p>
            <p className="text-base md:text-lg text-slate-400 max-w-xl leading-relaxed">
              Data-driven Front-End Developer with professional experience architecting and
              shipping production-ready React, React Native, and TypeScript applications.
              Specialized in functional programming principles and predictable unidirectional
              data flows.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin size={16} className="text-brand" aria-hidden="true" /> Munich, Germany
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-700" aria-hidden="true" />
              <span>Open to Relocation</span>
            </div>
            <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-brand text-white font-medium hover:bg-brand-dark transition-all shadow-lg shadow-brand/20 motion-safe:hover:-translate-y-0.5"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-slate-900 text-slate-300 font-medium border border-slate-800 hover:border-slate-700 hover:text-white transition-all motion-safe:hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-brand to-emerald-500 opacity-20 blur-xl motion-safe:animate-pulse" />
            <div className="w-full h-full rounded-2xl border-2 border-brand/40 p-2 bg-slate-900/50 backdrop-blur-sm overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Bita Bahadori"
                width={256}
                height={256}
                fetchPriority="high"
                decoding="async"
                className="w-full h-full rounded-xl object-cover object-center scale-[1.6] hover:scale-[1.7] -translate-x-6 translate-y-6 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </section>

        <section id="skills" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-900">
          <div className="text-center md:text-left mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Technical Expertise</h2>
            <p className="text-slate-400 mt-2">
              Tools, frameworks, and languages I use to build stable user interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Languages',
                items: ['JavaScript (ES6+)', 'TypeScript'],
              },
              {
                title: 'Frameworks',
                items: ['React', 'React Native', 'Angular'],
              },
              {
                title: 'Architecture & Styling',
                items: [
                  'Tailwind CSS / NativeWind',
                  'Chakra UI / Material UI',
                  'Redux / Elm Architecture',
                  'RxJS / TS-Pattern',
                ],
                compact: true,
              },
              {
                title: 'Tools & Testing',
                items: ['Webpack / Babel', 'Jest Testing Suite', 'Git / Agile / Scrum'],
              },
            ].map(({ title, items, compact }) => (
              <div
                key={title}
                className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-brand/40 transition-colors group"
              >
                <h3 className="text-sm font-semibold text-brand uppercase tracking-wider mb-4">
                  {title}
                </h3>
                <ul className={`space-y-2 text-slate-300 font-medium ${compact ? 'text-sm' : ''}`}>
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-brand shrink-0"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="max-w-4xl mx-auto px-6 py-20 border-t border-slate-900">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Professional Journey</h2>
            <p className="text-slate-400 mt-2">Roles where I shipped production front-end systems.</p>
          </div>

          <div className="relative border-l border-slate-800 ml-4 space-y-12">
            <div className="relative pl-8 group">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-brand group-hover:bg-brand transition-colors" />
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors">
                  Senior Front-End Developer
                </h3>
                <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center gap-1.5">
                  <Calendar size={12} aria-hidden="true" /> 02/2025 - 03/2026
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-400 mb-4">Superz — Remote</p>
              <ul className="space-y-2.5 text-slate-300 text-sm list-none">
                <BulletItem>
                  Architected and developed a highly modular, professional enterprise project
                  management dashboard using <strong>React 19</strong> and <strong>TypeScript</strong>{' '}
                  from scratch.
                </BulletItem>
                <BulletItem>
                  Engineered clean, unified state management systems by combining{' '}
                  <strong>Zustand</strong> for lightweight local UI state and{' '}
                  <strong>TanStack Query (React Query)</strong> for efficient server-state caching,
                  synchronization, and optimistic UI updates.
                </BulletItem>
                <BulletItem>
                  Implemented modern, type-safe client-side routing using{' '}
                  <strong>TanStack Router</strong> to seamlessly manage deeply nested parameters and
                  complex layout state transitions.
                </BulletItem>
                <BulletItem>
                  Crafted a responsive, accessible (WCAG-compliant) UI design system using{' '}
                  <strong>shadcn/ui</strong> and <strong>Tailwind CSS</strong> to ensure
                  pixel-perfect visual fidelity across all layouts.
                </BulletItem>
                <BulletItem>
                  Spearheaded performance optimizations, reducing initial page load times by 40%
                  through lazy-loading, code-splitting strategies, and <strong>Webpack</strong>{' '}
                  bundle configuration audits.
                </BulletItem>
                <BulletItem>
                  Facilitated collaborative sprint workflows under <strong>Agile/Scrum</strong>{' '}
                  methodologies, conducting rigorous pull request reviews and establishing unit
                  and integration test coverage with <strong>Vitest</strong>.
                </BulletItem>
              </ul>
            </div>

            <div className="relative pl-8 group">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-brand group-hover:bg-brand transition-colors" />
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors">
                  Front-End Developer
                </h3>
                <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center gap-1.5">
                  <Calendar size={12} aria-hidden="true" /> 04/2024 - 10/2024
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-400 mb-4">
                Press&apos;nXPress — Canada / Remote
              </p>
              <ul className="space-y-2.5 text-slate-300 text-sm list-none">
                <BulletItem>
                  Engineered and optimized high-performance <strong>React Native</strong> screens
                  for a core, real-time employee feedback mobile application used at scale.
                </BulletItem>
                <BulletItem>
                  Championed the adoption of the <strong>Elm architecture</strong> pattern to
                  enforce a strict unidirectional data flow, significantly reducing application
                  bugs and improving state predictability.
                </BulletItem>
                <BulletItem>
                  Designed and integrated robust <strong>REST API</strong> communication layers to
                  ensure smooth, asynchronous data fetching and state synchronization across
                  multiple product features.
                </BulletItem>
                <BulletItem>
                  Applied strict functional programming paradigms to keep UI components pure,
                  side-effect-free, and highly reusable.
                </BulletItem>
                <BulletItem>
                  Utilized <strong>TS-Pattern</strong> to implement exhaustive compile-time pattern
                  matching in <strong>TypeScript</strong>, drastically mitigating runtime errors.
                </BulletItem>
              </ul>
            </div>

            <div className="relative pl-8 group">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-brand group-hover:bg-brand transition-colors" />
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors">
                  Front-End Developer
                </h3>
                <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center gap-1.5">
                  <Calendar size={12} aria-hidden="true" /> 06/2023 - 09/2023
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-400 mb-4">Rahnema College — Tehran</p>
              <ul className="space-y-2.5 text-slate-300 text-sm list-none">
                <BulletItem>
                  Developed a full-featured, dynamic social media application from scratch utilizing{' '}
                  <strong>React</strong> and <strong>TypeScript</strong>.
                </BulletItem>
                <BulletItem>
                  Built consistent, responsive, and pixel-perfect user interfaces by leveraging{' '}
                  <strong>Tailwind CSS</strong> and <strong>Chakra UI</strong> component libraries.
                </BulletItem>
                <BulletItem>
                  Architected the global application state using <strong>Redux</strong> to manage
                  complex user interactions and data flows efficiently.
                </BulletItem>
                <BulletItem>
                  Collaborated actively within an <strong>Agile/Scrum</strong> framework,
                  participating in daily standups, sprint planning, and rigorous peer code reviews
                  via <strong>Git</strong>.
                </BulletItem>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-900">
          <div className="text-center md:text-left mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Work</h2>
            <p className="text-slate-400 mt-2">
              Demonstrating modern architecture transitions and tooling mastery.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <article className="p-6 md:p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-brand/50 transition-all flex flex-col justify-between group">
              <div>
                <span className="text-xs font-semibold text-brand uppercase tracking-widest font-mono">
                  05/2026 - Present
                </span>
                <h3 className="text-xl font-bold text-white mt-4 mb-3">Task Manager Evolution</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Led the architectural migration of an enterprise-grade task management system from
                  legacy Vanilla JavaScript to a modern, structured Angular framework, drastically
                  improving runtime scalability and rendering performance.
                </p>
                <ul className="space-y-3 text-sm text-slate-300 mb-6 list-none">
                  <BulletItem>
                    Built clean, modular features utilizing <strong>Angular services</strong>,
                    reactive <strong>RxJS observables</strong>, and structural directives to handle
                    complex, asynchronous data streams.
                  </BulletItem>
                  <BulletItem>
                    Implemented a comprehensive, test-driven validation suite utilizing{' '}
                    <strong>Jest</strong> and <strong>TypeScript</strong> to assert the integrity
                    of core business logic and state transitions.
                  </BulletItem>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-900">
                {['Angular', 'TypeScript', 'RxJS', 'Jest'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>

            <article className="p-6 md:p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-brand/50 transition-all flex flex-col justify-between group">
              <div>
                <span className="text-xs font-semibold text-brand uppercase tracking-widest font-mono">
                  Performance Engineering
                </span>
                <h3 className="text-xl font-bold text-white mt-4 mb-3">
                  Custom Bundling & Tooling Architecture
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Designed and engineered a production-ready custom frontend build configuration from
                  the ground up using Webpack, gaining comprehensive expertise in modern asset
                  bundling, optimization patterns, and custom loader pipelines.
                </p>
                <ul className="space-y-3 text-sm text-slate-300 mb-6 list-none">
                  <BulletItem>
                    Implemented advanced build-time optimizations including strategic{' '}
                    <strong>code splitting</strong>, dependency chunking, and resource minification
                    with <strong>Webpack</strong> and <strong>Babel</strong>.
                  </BulletItem>
                  <BulletItem>
                    Configured highly responsive local development environments featuring{' '}
                    <strong>Hot Module Replacement (HMR)</strong> to enable instant runtime feedback
                    and efficient coding cycles.
                  </BulletItem>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-900">
                {['Webpack', 'Babel', 'JavaScript'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="about" className="max-w-4xl mx-auto px-6 py-20 border-t border-slate-900">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white">About Me</h2>
            <p className="text-slate-400 mt-2 max-w-2xl leading-relaxed">
              Munich-based front-end developer focused on predictable state, accessible interfaces,
              and shipping maintainable React and TypeScript products for distributed teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Award size={20} className="text-brand" aria-hidden="true" /> Education
              </h3>
              <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800">
                <p className="text-xs font-semibold text-brand uppercase mb-1">
                  Graduation Year: 2026
                </p>
                <h4 className="text-base font-bold text-white">B.Sc. in Software Engineering</h4>
                <p className="text-sm text-slate-400 mt-1">Azad University (Tehran)</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-6">Languages</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm font-medium mb-1">
                    <span className="text-white">English</span>
                    <span className="text-slate-400">Fluent</span>
                  </div>
                  <div
                    className="w-full bg-slate-900 h-2 rounded-full overflow-hidden"
                    role="progressbar"
                    aria-valuenow={95}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label="English proficiency"
                  >
                    <div className="bg-brand h-full w-[95%] rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-medium mb-1">
                    <span className="text-white">German</span>
                    <span className="text-slate-400">Beginner (A1)</span>
                  </div>
                  <div
                    className="w-full bg-slate-900 h-2 rounded-full overflow-hidden"
                    role="progressbar"
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label="German proficiency"
                  >
                    <div className="bg-brand/40 h-full w-[25%] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="bg-gradient-to-b from-slate-950 to-slate-900 text-slate-400 border-t border-slate-900"
      >
        <div className="max-w-4xl mx-auto px-6 py-16 text-center space-y-8">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Let&apos;s build something exceptional together.
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-base leading-relaxed">
            I am exploring senior front-end opportunities with teams that value maintainable
            architecture, accessible interfaces, and disciplined TypeScript delivery. If you are
            building products with similar standards, I would welcome a conversation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-white pt-4">
            <a
              href="mailto:bita.bahadori.dev@gmail.com"
              className="flex items-center gap-2 hover:text-brand transition-colors bg-slate-900 px-4 py-2.5 rounded-lg border border-slate-800"
            >
              <Mail size={16} className="text-brand shrink-0" aria-hidden="true" />
              <span className="break-all">bita.bahadori.dev@gmail.com</span>
            </a>
            <a
              href="tel:+4917676144432"
              className="flex items-center gap-2 hover:text-brand transition-colors bg-slate-900 px-4 py-2.5 rounded-lg border border-slate-800"
            >
              <Phone size={16} className="text-brand shrink-0" aria-hidden="true" />
              +49 176 76144432
            </a>
          </div>

          <div className="flex justify-center gap-2 pt-6">
            <SocialLink href={LINKEDIN_URL} label="LinkedIn profile">
              <Linkedin size={20} />
            </SocialLink>
            <SocialLink href={GITHUB_URL} label="GitHub profile">
              <Github size={20} />
            </SocialLink>
          </div>

          <p className="text-xs text-slate-600 pt-8 border-t border-slate-900">
            © {new Date().getFullYear()} Bita Bahadori. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
