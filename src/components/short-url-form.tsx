'use client';

import { FormEvent, useMemo, useState } from 'react';

type CreateShortUrlResponse = {
  shortUrl?: string;
  short_url?: string;
  url?: string;
  code?: string;
  slug?: string;
};

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:8080';

export function ShortUrlForm() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const endpoint = useMemo(() => `${apiBaseUrl.replace(/\/$/, '')}/`, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setShortUrl('');
    setIsCopied(false);

    if (!isValidUrl(longUrl)) {
      setError('Please enter a valid URL, for example https://example.com/page.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: longUrl }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = (await response.json()) as CreateShortUrlResponse;

      const nextShortUrl = normalizeShortUrl(data);

      if (!nextShortUrl) {
        throw new Error('The API response did not include a short URL.');
      }

      setShortUrl(nextShortUrl);
    } catch (requestError) {
      setError(
        requestError instanceof Error ? requestError.message : 'Something went wrong.',
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCopy() {
    if (!shortUrl) {
      return;
    }

    await navigator.clipboard.writeText(shortUrl);
    setIsCopied(true);
  }

  return (
    <div className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-soft backdrop-blur sm:p-8 dark:border-white/10 dark:bg-slate-950/70 dark:shadow-black/30">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
          Shortener
        </p>
        <h2 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">
          Create a short URL
        </h2>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label
            className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
            htmlFor="long-url"
          >
            Destination URL
          </label>
          <input
            id="long-url"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
            onChange={(event) => setLongUrl(event.target.value)}
            placeholder="https://example.com/very/long/link"
            type="url"
            value={longUrl}
          />
        </div>

        {error ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-400/30 dark:bg-red-950/40 dark:text-red-200">
            {error}
          </div>
        ) : null}

        <button
          className="w-full rounded-2xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none dark:bg-blue-500 dark:shadow-blue-500/20 dark:hover:bg-blue-400 dark:focus:ring-blue-400/30 dark:disabled:bg-slate-700"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? 'Creating...' : 'Create short URL'}
        </button>
      </form>

      {shortUrl ? (
        <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-400/30 dark:bg-emerald-950/30">
          <p className="text-sm font-medium text-emerald-800 dark:text-emerald-200">
            Your short link is ready
          </p>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <a
              className="min-w-0 flex-1 truncate rounded-2xl bg-white px-4 py-3 font-mono text-sm text-slate-800 ring-1 ring-emerald-100 dark:bg-slate-900 dark:text-slate-100 dark:ring-emerald-400/20"
              href={shortUrl}
              rel="noreferrer"
              target="_blank"
            >
              {shortUrl}
            </a>
            <button
              className="rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
              onClick={handleCopy}
              type="button"
            >
              {isCopied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function isValidUrl(value: string) {
  try {
    const parsedUrl = new URL(value);
    return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
  } catch {
    return false;
  }
}

function normalizeShortUrl(data: CreateShortUrlResponse) {
  const value = data.shortUrl ?? data.short_url ?? data.url;

  if (value) {
    return value;
  }

  const code = data.code ?? data.slug;

  if (!code) {
    return '';
  }

  return `${apiBaseUrl.replace(/\/$/, '')}/${code.replace(/^\//, '')}`;
}
