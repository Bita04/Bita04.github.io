import { useEffect, useRef, useState } from 'react';
import {
  MapPin,
  Calendar,
  Award,
  Mail,
  Phone,
  Menu,
  X,
  Sparkles,
  FileDown,
  ArrowRight,
} from 'lucide-react';

const CV_URL = '/Bita-Bahadori-CV.pdf';

const HERO_BTN =
  'inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold bb-transition-smooth motion-safe:hover:-translate-y-0.5';

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2.5 rounded-xl text-slate-400 hover:text-white bg-slate-900/40 hover:bg-slate-800/60 border border-slate-800/50 hover:border-brand/40 bb-transition-smooth hover:scale-110 hover:shadow-lg hover:shadow-brand/10"
      aria-label={label}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`${isHovered ? 'bb-animate-bounce-subtle' : ''}`}>
        {children}
      </div>
    </a>
  );
}

function MagneticButton({ children, className = '', ...props }) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <a
        {...props}
        className={className}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {children}
      </a>
    </div>
  );
}

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef(0);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Cursor spotlight effect
  useEffect(() => {
    const root = document.documentElement;

    const onMove = (e) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        root.style.setProperty('--bb-cx', `${e.clientX}px`);
        root.style.setProperty('--bb-cy', `${e.clientY}px`);
      });
    };

    const onLeave = () => {
      root.style.setProperty('--bb-cx', `50%`);
      root.style.setProperty('--bb-cy', `20%`);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for reveal animations
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-reveal]'));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('bb-in');
          observer.unobserve(entry.target);
        }
      },
      { root: null, threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-slate-100 font-sans antialiased selection:bg-brand selection:text-white relative overflow-x-hidden">
      {/* Animated background elements */}
      <div className="bb-cursor-spotlight" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 bb-grid" aria-hidden="true" />
      
      {/* Floating gradient orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-[120px] bb-animate-pulse-glow pointer-events-none" aria-hidden="true" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-[140px] bb-animate-pulse-glow pointer-events-none" style={{ animationDelay: '1s' }} aria-hidden="true" />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-brand focus:text-white focus:font-semibold"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 backdrop-blur-xl bb-glass-strong border-b shadow-lg shadow-black/5">
        <div className="bb-container h-[4.75rem] flex items-center justify-between relative z-10">
          <a
            href="#hero"
            className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-brand bb-transition-smooth group"
          >
            Bita<span className="text-brand group-hover:bb-gradient-text">Bahadori</span>
          </a>

          <nav
            className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400"
            aria-label="Main"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="hover:text-white bb-transition-smooth hover:-translate-y-[1px] relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <MagneticButton
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-brand to-emerald-600 text-white font-semibold hover:shadow-xl hover:shadow-brand/30 bb-transition-smooth flex items-center gap-2 group"
            >
              Let&apos;s Connect
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
          </nav>

          <button
            type="button"
            className="md:hidden p-2 text-slate-300 hover:text-white rounded-xl hover:bg-slate-900/60 bb-transition-smooth"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <button
              type="button"
              className="fixed inset-0 bg-black/40 backdrop-blur-[2px]"
              aria-label="Close menu overlay"
              onClick={closeMobileMenu}
            />
            <nav
              id="mobile-nav"
              className="relative border-t border-slate-800/60 bg-slate-950/95 px-5 py-4 flex flex-col gap-1 bb-animate-fade-up"
              aria-label="Main"
            >
              {NAV_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMobileMenu}
                  className="py-3 text-slate-200 hover:text-white bb-transition-smooth border-b border-slate-900/70 last:border-0 hover:translate-x-1"
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="mt-2 py-3 text-center rounded-xl bg-brand text-white font-semibold hover:bg-brand-dark bb-transition-smooth"
              >
                Let&apos;s Connect
              </a>
            </nav>
          </div>
        )}
      </header>

      <main id="main" className="relative z-10">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative bb-container pt-14 pb-16 sm:pt-16 sm:pb-18 md:pt-24 md:pb-24 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-14"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        >
          <div className="absolute -top-10 -left-10 w-80 h-80 bg-brand/10 rounded-full blur-[110px] pointer-events-none bb-animate-pulse-glow" />
          <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none bb-animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-semibold uppercase tracking-wider bb-animate-fade-up bb-shimmer">
              <Sparkles size={14} className="bb-animate-pulse-glow" aria-hidden="true" />
              Open to New Opportunities
            </div>
            
            <h1 className="text-[2.25rem] sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              <span className="bb-animate-fade-up inline-block text-white">Hi, I&apos;m </span>
              <span className="bb-animate-fade-up bb-stagger-1 inline-block bb-gradient-text">
                Bita Bahadori
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-300 bb-animate-fade-up bb-stagger-2">
              Front-End Developer
            </p>
            
            <p className="text-base sm:text-[1.05rem] text-slate-400 max-w-xl leading-relaxed bb-animate-fade-up bb-stagger-3">
              Data-driven Front-End Developer with professional experience architecting and
              shipping production-ready React, React Native, and TypeScript applications.
              Specialized in functional programming principles and predictable unidirectional
              data flows.
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-sm text-slate-400 bb-animate-fade-up bb-stagger-4">
              <span className="flex items-center gap-1.5 group">
                <MapPin size={16} className="text-brand group-hover:scale-110 transition-transform" aria-hidden="true" /> 
                Munich, Germany
              </span>
              <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-700" aria-hidden="true" />
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand/70 bb-animate-pulse-glow" aria-hidden="true" />
                Open to Relocation
              </span>
            </div>
            
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 bb-animate-fade-up bb-stagger-5">
              <MagneticButton
                href="#contact"
                className={`${HERO_BTN} bg-slate-900/60 text-slate-200 border border-slate-800 hover:border-brand/50 hover:text-white hover:bg-slate-800/60`}
              >
                Contact Me
              </MagneticButton>
              <MagneticButton
                href={CV_URL}
                download="BitaBahadori.pdf"
                className={`${HERO_BTN} bg-slate-900/60 text-slate-200 border border-slate-800 hover:border-brand/50 hover:text-white hover:bg-slate-800/60`}
              >
                <FileDown size={18} className="text-brand shrink-0" aria-hidden="true" />
                Download CV
              </MagneticButton>
            </div>
          </div>

          <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 shrink-0 bb-animate-scale-in bb-stagger-2">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-brand via-emerald-500 to-brand opacity-20 blur-2xl bb-animate-pulse-glow bb-animate-gradient" />
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-brand to-emerald-500 opacity-30 blur-md bb-animate-rotate-slow" />
            <div className="relative w-full h-full rounded-2xl border border-brand/30 p-2 bg-slate-900/50 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/30 bb-animate-float group">
              <img
                src="/profile.jpg"
                alt="Bita Bahadori"
                width={256}
                height={256}
                fetchPriority="high"
                decoding="async"
                className="w-full h-full rounded-xl object-cover object-center scale-[1.6] group-hover:scale-[1.7] -translate-x-6 translate-y-6 grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="bb-container py-16 sm:py-18 md:py-20 border-t border-slate-900"
        >
          <div className="text-center md:text-left mb-12 bb-reveal" data-reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 flex items-center justify-center md:justify-start gap-3">
              <span className="bb-gradient-text">Technical Expertise</span>
            </h2>
            <p className="text-slate-400 text-lg">
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
                items: ['React', 'React Native', 'Angular', 'Angular Material', 'Angular CDK'],
              },
              {
                title: 'Architecture & Styling',
                items: [
                  'Tailwind CSS / NativeWind',
                  'Chakra UI / Material UI',
                  'NgRx (Store / Effects / Entity / ComponentStore)',
                  'Angular Router (Guards / Resolvers / Lazy Loading)',
                  'RxJS / TS-Pattern',
                  'SCSS Design Tokens / Theming',
                ],
                compact: true,
              },
              {
                title: 'Tools & Testing',
                items: [
                  'Webpack / Babel',
                  'Jest / Testing Library / Cypress',
                  'Git / Agile / Scrum',
                ],
              },
            ].map(({ title, items, compact }) => (
              <div
                key={title}
                className="p-6 rounded-2xl bg-slate-900/35 border border-slate-800/80 hover:border-brand/40 bb-card-hover group hover:shadow-2xl hover:shadow-brand/10 bb-reveal relative overflow-hidden"
                data-reveal
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-sm font-semibold text-brand uppercase tracking-wider mb-4 flex items-center gap-2 relative z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand bb-animate-pulse-glow" />
                  {title}
                </h3>
                <ul className={`space-y-2.5 text-slate-300 font-medium ${compact ? 'text-sm' : ''} relative z-10`}>
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 group/item">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover/item:bg-brand shrink-0 transition-colors"
                        aria-hidden="true"
                      />
                      <span className="group-hover/item:translate-x-1 transition-transform">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="max-w-4xl mx-auto px-5 sm:px-6 py-16 sm:py-18 md:py-20 border-t border-slate-900"
        >
          <div className="mb-12 text-center md:text-left bb-reveal" data-reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="bb-gradient-text">Professional Journey</span>
            </h2>
            <p className="text-slate-400 text-lg">Roles where I shipped production front-end systems.</p>
          </div>

          <div className="relative border-l-2 border-slate-800 ml-4 space-y-12">
            <div className="relative pl-8 group bb-reveal" data-reveal>
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-brand group-hover:bg-brand group-hover:scale-125 bb-transition-smooth bb-animate-pulse-glow" />
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-brand bb-transition-smooth">
                  Senior Front-End Developer
                </h3>
                <span className="px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-1.5 group-hover:border-brand/40 bb-transition-smooth">
                  <Calendar size={12} aria-hidden="true" /> 02/2025 - 03/2026
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-400 mb-4">Superz — Remote</p>
              <ul className="space-y-2.5 text-slate-300 text-sm list-none">
                <BulletItem>
                  Led the front-end architecture of an enterprise project management platform using{' '}
                  <strong>Angular</strong> (standalone components) and <strong>TypeScript</strong>,
                  establishing scalable patterns for feature delivery across multiple teams.
                </BulletItem>
                <BulletItem>
                  Implemented predictable state management with <strong>NgRx</strong> (Store, Effects,
                  Entity, ComponentStore) and <strong>RxJS</strong> to model complex workflows,
                  optimistic updates, and real-time UI synchronization.
                </BulletItem>
                <BulletItem>
                  Designed a robust navigation system with <strong>Angular Router</strong> using
                  lazy-loaded feature areas, route guards, and resolvers for fast initial loads and
                  secure, permission-aware flows.
                </BulletItem>
                <BulletItem>
                  Built a responsive, accessible design system with <strong>Angular Material</strong>{' '}
                  + <strong>CDK</strong> and theming via <strong>SCSS</strong> design tokens,
                  delivering consistent typography, spacing, and component behavior across the app.
                </BulletItem>
                <BulletItem>
                  Improved rendering performance with <strong>OnPush</strong> change detection,
                  trackBy strategies, and reactive composition; reduced unnecessary re-renders and
                  tightened bundle footprints through route-level splitting.
                </BulletItem>
                <BulletItem>
                  Established testing and quality gates using <strong>Jest</strong> (unit),
                  <strong> Testing Library</strong> (component), and <strong>Cypress</strong> (e2e),
                  aligning delivery with <strong>Agile/Scrum</strong> ceremonies and rigorous PR
                  review standards.
                </BulletItem>
              </ul>
            </div>

            <div className="relative pl-8 group bb-reveal" data-reveal>
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-brand group-hover:bg-brand group-hover:scale-125 bb-transition-smooth" />
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-brand bb-transition-smooth">
                  Front-End Developer
                </h3>
                <span className="px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-1.5 group-hover:border-brand/40 bb-transition-smooth">
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

            <div className="relative pl-8 group bb-reveal" data-reveal>
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-brand group-hover:bg-brand group-hover:scale-125 bb-transition-smooth" />
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-brand bb-transition-smooth">
                  Front-End Developer
                </h3>
                <span className="px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-1.5 group-hover:border-brand/40 bb-transition-smooth">
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

        {/* Projects Section */}
        <section
          id="projects"
          className="bb-container py-16 sm:py-18 md:py-20 border-t border-slate-900"
        >
          <div className="text-center md:text-left mb-12 bb-reveal" data-reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="bb-gradient-text">Featured Work</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Demonstrating modern architecture transitions and tooling mastery.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <article
              className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950 border border-slate-800 hover:border-brand/50 bb-card-hover flex flex-col justify-between group hover:shadow-2xl hover:shadow-brand/20 bb-reveal relative overflow-hidden"
              data-reveal
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <span className="text-xs font-semibold text-brand uppercase tracking-widest font-mono flex items-center gap-2">
                  <Sparkles size={12} className="bb-animate-pulse-glow" />
                  05/2026 - Present
                </span>
                <h3 className="text-2xl font-bold text-white mt-4 mb-3 group-hover:text-brand bb-transition-smooth">
                  Task Manager Evolution
                </h3>
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
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-900 relative z-10">
                {['Angular', 'TypeScript', 'RxJS', 'Jest'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-200 font-mono text-xs hover:border-brand/40 hover:bg-slate-800/60 bb-transition-smooth"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>

            <article
              className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950 border border-slate-800 hover:border-brand/50 bb-card-hover flex flex-col justify-between group hover:shadow-2xl hover:shadow-brand/20 bb-reveal relative overflow-hidden"
              data-reveal
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <span className="text-xs font-semibold text-brand uppercase tracking-widest font-mono flex items-center gap-2">
                  <Sparkles size={12} className="bb-animate-pulse-glow" />
                  Performance Engineering
                </span>
                <h3 className="text-2xl font-bold text-white mt-4 mb-3 group-hover:text-brand bb-transition-smooth">
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
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-900 relative z-10">
                {['Webpack', 'Babel', 'JavaScript'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-200 font-mono text-xs hover:border-brand/40 hover:bg-slate-800/60 bb-transition-smooth"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="max-w-4xl mx-auto px-5 sm:px-6 py-16 sm:py-18 md:py-20 border-t border-slate-900 bb-reveal"
          data-reveal
        >
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="bb-gradient-text">About Me</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              Munich-based front-end developer focused on predictable state, accessible interfaces,
              and shipping maintainable React and TypeScript products for distributed teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bb-reveal" data-reveal>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Award size={20} className="text-brand bb-animate-pulse-glow" aria-hidden="true" /> 
                Education
              </h3>
              <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-brand/40 bb-card-hover group">
                <p className="text-xs font-semibold text-brand uppercase mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand bb-animate-pulse-glow" />
                  Graduation Year: 2026
                </p>
                <h4 className="text-base font-bold text-white group-hover:text-brand bb-transition-smooth">
                  B.Sc. in Software Engineering
                </h4>
                <p className="text-sm text-slate-400 mt-1">Azad University (Tehran)</p>
              </div>
            </div>

            <div className="bb-reveal" data-reveal>
              <h3 className="text-xl font-bold text-white mb-6">Languages</h3>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-white">English</span>
                    <span className="text-slate-400">Fluent</span>
                  </div>
                  <div
                    className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden"
                    role="progressbar"
                    aria-valuenow={95}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label="English proficiency"
                  >
                    <div className="bg-gradient-to-r from-brand to-emerald-500 h-full w-[95%] rounded-full bb-shimmer" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-white">German</span>
                    <span className="text-slate-400">Beginner (A1)</span>
                  </div>
                  <div
                    className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden"
                    role="progressbar"
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label="German proficiency"
                  >
                    <div className="bg-gradient-to-r from-brand/60 to-emerald-500/60 h-full w-[25%] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-gradient-to-b from-slate-950 to-slate-900 text-slate-400 border-t border-slate-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-emerald-500/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-5 sm:px-6 py-16 text-center space-y-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight bb-gradient-text">
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
              className="flex items-center gap-2 hover:text-brand bb-transition-smooth bg-slate-900/60 px-5 py-3 rounded-xl border border-slate-800 hover:border-brand/40 hover:bg-slate-800/60 group"
            >
              <Mail size={16} className="text-brand shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span className="break-all">bita.bahadori.dev@gmail.com</span>
            </a>
            <a
              href="tel:+4917676144432"
              className="flex items-center gap-2 hover:text-brand bb-transition-smooth bg-slate-900/60 px-5 py-3 rounded-xl border border-slate-800 hover:border-brand/40 hover:bg-slate-800/60 group"
            >
              <Phone size={16} className="text-brand shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
              +49 176 76144432
            </a>
          </div>

          <div className="flex justify-center gap-3 pt-6">
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
