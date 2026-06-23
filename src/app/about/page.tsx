import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '#dashboard', label: 'Dashboard' },
];

const features = [
  {
    title: 'Fast links',
    description:
      'Create compact, share-ready URLs in seconds with a flow built for speed.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="13 17 18 12 13 7" />
        <polyline points="6 17 11 12 6 7" />
      </svg>
    ),
  },
  {
    title: 'Analytics',
    description: 'Track visits, understand engagement, and see which links perform best.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: 'Custom slugs',
    description:
      'Use memorable branded aliases that make every campaign easier to recognize.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: 'Secure redirects',
    description:
      'Keep every destination validated and protected before your audience clicks.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const techStack = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'Next.js 16', description: 'React framework with App Router' },
      { name: 'React 19', description: 'UI component library' },
      { name: 'TypeScript 5', description: 'Type-safe development' },
      { name: 'Tailwind CSS 4', description: 'Utility-first styling' },
    ],
  },
  {
    category: 'Infrastructure',
    technologies: [
      { name: 'Vercel', description: 'Recommended deployment platform' },
      { name: 'Geist Fonts', description: 'Typography by Vercel' },
      { name: 'REST API', description: 'External URL shortener backend' },
    ],
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:flex-nowrap sm:px-6 lg:px-8">
          <Link
            className="text-xl font-bold tracking-tight text-slate-950 dark:text-white"
            href="/"
          >
            ShortURL
          </Link>

          <nav
            aria-label="Primary navigation"
            className="order-3 flex w-full items-center justify-center gap-6 text-sm font-medium text-slate-600 sm:order-2 sm:w-auto dark:text-slate-300"
          >
            {navigationLinks.map((link) => (
              <Link
                className="transition hover:text-blue-600 dark:hover:text-blue-300"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="order-2 sm:order-3">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-80 max-w-5xl rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-300">
              About ShortURL
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
              Short, secure, and simple URLs
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-300">
              ShortURL is a modern URL shortener built for developers, marketers, and
              anyone who shares links online. Transform long, messy URLs into clean,
              memorable short links — in seconds.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
                href="/"
              >
                Shorten a link
              </Link>
              <Link
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-blue-300/40 dark:hover:text-blue-200"
                href="https://github.com/Aknexad/short-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
                How it works
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                Three simple steps to create your first short link.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {[
                {
                  step: '01',
                  title: 'Paste your URL',
                  description:
                    'Enter any long destination URL into the input field on the home page.',
                },
                {
                  step: '02',
                  title: 'Generate short link',
                  description:
                    'Click "Create short URL" and the API instantly generates a compact, shareable link.',
                },
                {
                  step: '03',
                  title: 'Copy and share',
                  description:
                    'One click copies your new short link to the clipboard — ready to share anywhere.',
                },
              ].map((item) => (
                <article key={item.step} className="relative text-center">
                  <span className="mx-auto mb-4 block text-5xl font-extrabold text-blue-600/10 dark:text-blue-400/10">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
                Everything you need for smarter links
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                Share cleaner URLs, measure performance, and keep campaigns moving with
                practical short-link tools.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <article
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.05]"
                  key={feature.title}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
                Built with modern tools
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                ShortURL is powered by the latest web technologies for speed, reliability,
                and developer experience.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {techStack.map((category) => (
                <div
                  key={category.category}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <h3 className="mb-5 text-lg font-semibold text-slate-950 dark:text-white">
                    {category.category}
                  </h3>
                  <ul className="space-y-4">
                    {category.technologies.map((tech) => (
                      <li key={tech.name}>
                        <span className="block text-sm font-medium text-slate-950 dark:text-white">
                          {tech.name}
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {tech.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 px-6 py-12 text-center shadow-2xl shadow-slate-950/10 sm:px-12 dark:bg-white dark:text-slate-950">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl dark:text-slate-950">
              Ready to simplify every share?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 dark:text-slate-600">
              Create your first short link now and build a dashboard of links your
              audience can trust.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-500"
                href="/"
              >
                Get started
              </Link>
              <Link
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 dark:border-slate-300/30 dark:hover:border-slate-300/60 dark:hover:bg-slate-100/50"
                href="https://github.com/Aknexad/short-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline-flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  GitHub Repository
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-4 py-8 text-center text-sm text-slate-500 sm:px-6 lg:px-8 dark:border-white/10 dark:text-slate-400">
        <p>© 2026 ShortURL. Short, secure, and simple URLs.</p>
      </footer>
    </div>
  );
}
