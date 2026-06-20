# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 15 + React 19 short URL UI using TypeScript and Tailwind CSS. Keep work organized around the current app-router layout:

- `app/` contains route files, layouts, and global styles. `app/page.tsx` renders the home page.
- `components/` contains reusable UI components. Use kebab-case filenames such as `short-url-form.tsx` and PascalCase exported component names.
- `public/` is the preferred location for static assets if images, icons, or fonts are added.
- `.env.example` documents safe public environment variables. Local overrides should go in ignored files such as `.env.local`.

The app currently posts long URLs from `components/short-url-form.tsx` to `NEXT_PUBLIC_API_BASE_URL`, defaulting to `http://localhost:8080`.

## Build, Test, and Development Commands

Run commands from the repository root:

- `npm install` installs dependencies from `package-lock.json`.
- `npm run dev` starts the local Next.js development server.
- `npm run build` creates a production build.
- `npm run start` serves the production build after `npm run build`.
- `npm run lint` runs the configured Next.js lint command.
- `npm run typecheck` runs TypeScript without emitting files.

No test runner is configured yet. Add a test script when introducing a testing framework.

## Coding Style & Naming Conventions

Use TypeScript for application code and keep `strict` type checking clean. Follow 2-space indentation for TypeScript, JSON, CSS, and Markdown. Prefer named exports for shared components and helpers.

Use `camelCase` for variables and functions, `PascalCase` for React components and types, and `kebab-case` for component filenames, directories, route segments, and assets. Use the `@/*` path alias from `tsconfig.json` for root-relative imports when it improves clarity.

Style UI with Tailwind utility classes and keep global CSS in `app/globals.css`. Avoid adding broad global styles when component-local Tailwind classes are enough.

## Testing Guidelines

When tests are added, prefer colocated component tests such as `short-url-form.test.tsx` or a clearly named `tests/` directory for integration coverage. Cover URL validation, loading state, successful short URL creation, copy behavior, and backend error responses.

Until automated tests exist, validate meaningful UI changes with `npm run typecheck`, `npm run lint`, and `npm run build` when practical.

## Commit & Pull Request Guidelines

Use concise, imperative commit messages such as `Add short link form` or `Configure Tailwind theme`. Keep changes focused and avoid mixing formatting-only edits with feature work.

Pull requests should include a short summary, testing notes, linked issues when applicable, and screenshots or screen recordings for visible UI changes. Mention any environment variables or backend API assumptions that reviewers need to reproduce the change.

## Security & Configuration Tips

Do not commit secrets, API keys, or production-only endpoints. Only expose client-safe values through `NEXT_PUBLIC_*` variables. Keep `.env.example` safe and current when configuration changes.

Be careful with backend response handling in the short URL form. Validate user input before requests, avoid rendering untrusted HTML, and keep API errors user-readable without exposing sensitive backend details.
