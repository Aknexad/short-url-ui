import { ShortUrlForm } from "@/components/short-url-form";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 sm:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center">
        <div className="grid w-full gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur dark:border-blue-400/30 dark:bg-blue-950/40 dark:text-blue-200">
              Simple short links for your backend
            </div>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
              Create clean, shareable URLs in seconds.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste a long URL, send it to your backend, and get a short link ready to copy.
              This UI stays intentionally small so it is easy to connect to your API.
            </p>
            <div className="mt-8 grid gap-4 text-sm text-slate-600 sm:grid-cols-3 dark:text-slate-300">
              <Feature title="Fast" text="One form, one action." />
              <Feature title="Clear" text="Copy result instantly." />
              <Feature title="Configurable" text="Uses env API URL." />
            </div>
          </div>
          <ShortUrlForm />
        </div>
      </section>
    </main>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/70 bg-white/55 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
      <p className="font-semibold text-slate-950 dark:text-white">{title}</p>
      <p className="mt-1">{text}</p>
    </div>
  );
}
