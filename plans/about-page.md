# About Page Plan

## 1. Feature Overview

Add a **dedicated About page** at `/about` that the navigation can link to. Currently, "About" in the nav is just a hash anchor (`#about`) that scrolls to a section on the home page. We'll replace that with a real route.

---

## 2. Next.js Concepts Involved

| Concept                | What It Is                                                                                                                             | How It Applies Here                                                                      |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **File-based Routing** | Next.js creates routes automatically from the file structure inside `app/`. A file at `app/about/page.tsx` becomes the `/about` route. | Create `src/app/about/page.tsx` to get the `/about` route for free.                      |
| **`Link` Component**   | `<Link>` from `next/link` enables client-side navigation between pages without a full page reload.                                     | Change the nav's `href="#about"` to `href="/about"` so it navigates to the new page.     |
| **Layout Inheritance** | The root `layout.tsx` wraps every page in `app/` with `<ThemeProvider>`, `<html>`, and `<body>`.                                       | The About page will automatically inherit the theme provider and global styles.          |
| **Named Exports**      | Components are exported with `export default` (for pages) or named exports (for reusables).                                            | The About page is the default export; reusable UI could be extracted into `components/`. |

---

## 3. Project Structure Changes

After this is done, the project will look like this (new files shown in **bold**):

```
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx                          ← modified: nav link href changes from #about to /about
│   └── about/
│       └── page.tsx                      ← NEW: the About page
```

---

## 4. Step‑by‑Step Implementation Tasks

### Step 1 — Create the About page file

- **File:** `src/app/about/page.tsx`
- **Task:** Create a new folder called `about` inside `src/app/`, then create `page.tsx` inside it.
- **Why:** Next.js file-based routing reads `app/about/page.tsx` and automatically maps it to the `/about` URL.
- **Try this first:** Just create the file with a simple heading — we'll build it up.

### Step 2 — Add meaningful About page content

- **Task:** Fill the page with about-section content. You might include:
  - A brief description of the ShortURL product
  - Team info or mission statement
  - A call-to-action linking back to the home page
- **Why:** Practice building a full page with Tailwind styling that matches the project's design system.
- **Try this first:** Copy the section structure from the home page (headings, descriptions, styled containers) and adapt the text.

### Step 3 — Update the navigation link

- **File:** `src/app/page.tsx`
- **Task:** Find the `navigationLinks` array (line 6–10) and change:
  ```typescript
  { href: '#about', label: 'About' },
  ```
  to:
  ```typescript
  { href: '/about', label: 'About' },
  ```
- **Why:** Changing from `#about` (page scroll anchor) to `/about` (full route) tells Next.js to navigate to the new dedicated page instead of scrolling within the home page.
- **Try this first:** Make this single-line change and test by clicking "About" in your nav.

### Step 4 — (Optional) Add a shared layout for the About section

- **File:** `src/app/about/layout.tsx`
- **Task:** If you want the About page to have a different header or back-button, create a layout specific to the `about/` route segment.
- **Why:** Next.js supports nested layouts — a layout inside a route segment wraps only that segment's pages.
- **Try this first:** Copy content from the root layout's header, modify it, and see what the nested layout inherits.

---

## 5. Hints

- **Preview your work:** Run `npm run dev` and visit `http://localhost:3000/about` after creating the file.
- **Styling tip:** Use the same Tailwind color palette (`slate-950`, `blue-600`, `dark:` variants) so the About page feels consistent with the home page.
- **Linking from About back to Home:** Use `<Link href="/">Back to Home</Link>` — you don't need to import Link differently inside the about folder.
