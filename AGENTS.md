<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Coding Style & Naming Conventions

Use TypeScript for application code and keep `strict` type checking clean. Follow 2-space indentation for TypeScript, JSON, CSS, and Markdown. Prefer named exports for shared components and helpers.

Use `camelCase` for variables and functions, `PascalCase` for React components and types, and `kebab-case` for component filenames, directories, route segments, and assets. Use the `@/*` path alias from `tsconfig.json` for root-relative imports when it improves clarity.

Style UI with Tailwind utility classes and keep global CSS in `app/globals.css`. Avoid adding broad global styles when component-local Tailwind classes are enough.

## Security & Configuration Tips

Do not commit secrets, API keys, or production-only endpoints. Only expose client-safe values through `NEXT_PUBLIC_*` variables. Keep `.env.example` safe and current when configuration changes.

Be careful with backend response handling in the short URL form. Validate user input before requests, avoid rendering untrusted HTML, and keep API errors user-readable without exposing sensitive backend details.
