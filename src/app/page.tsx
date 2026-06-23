import Link from 'next/link';

import { ShortUrlForm } from '@/components/short-url-form';
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
  },
  {
    title: 'Analytics',
    description: 'Track visits, understand engagement, and see which links perform best.',
  },
  {
    title: 'Custom slugs',
    description:
      'Use memorable branded aliases that make every campaign easier to recognize.',
  },
  {
    title: 'Secure redirects',
    description:
      'Keep every destination validated and protected before your audience clicks.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
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
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-80 max-w-5xl rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div className="max-w-3xl text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-300">
                Simple link management
              </p>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
                Shorten your links instantly
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-300">
                Turn long, messy URLs into clean short links you can share anywhere.
                Create links quickly, keep them organized, and make every click easier to
                remember.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
                <Link
                  className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
                  href="#shorten"
                >
                  Shorten a link
                </Link>
                <Link
                  className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-blue-300/40 dark:hover:text-blue-200"
                  href="about/"
                >
                  Explore features
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-xl" id="shorten">
              <ShortUrlForm />
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8" id="about">
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
                    <span className="text-xl font-bold">✓</span>
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

        <section className="px-4 py-16 sm:px-6 lg:px-8" id="dashboard">
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 px-6 py-12 text-center shadow-2xl shadow-slate-950/10 sm:px-12 dark:bg-white dark:text-slate-950">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl dark:text-slate-950">
              Ready to simplify every share?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 dark:text-slate-600">
              Create your first short link now and build a dashboard of links your
              audience can trust.
            </p>
            <Link
              className="mt-8 inline-flex rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
              href="#shorten"
            >
              Get started
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 px-4 py-8 text-center text-sm text-slate-500 sm:px-6 lg:px-8 dark:border-white/10 dark:text-slate-400">
        <p>© 2026 ShortLink. Short, secure, and simple URLs.</p>
      </footer>
    </div>
  );
}
