# William D'Amato Design

The website for **William D'Amato Design** — an independent web studio. Built as its
own portfolio piece: fast, distinctive, and animated with intent.

## Stack

- **React 18** + **Vite** — fast dev server and optimized build
- **Framer Motion** — the page-load sequence, scroll reveals, and the signature "thread"
- **React Router** — Home + a dedicated Contact page

## Design direction — "Atelier of the Web"

| Token   | Value                                                    |
| ------- | -------------------------------------------------------- |
| Canvas  | `#E8E8E5` cool bone                                       |
| Ink     | `#16151A` warm near-black                                 |
| Accent  | `#3B2EF0` electric cobalt (used sparingly)               |
| Display | Bricolage Grotesque                                      |
| Body    | Instrument Sans                                          |
| Utility | JetBrains Mono (labels & data)                           |

The **signature** is a single continuous cobalt thread that draws itself across the
hero and weaves through the headline as it assembles — the through-line of good
design, made literal. It's echoed as animated section dividers.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Contact form

The Contact page composes a pre-filled email and opens the visitor's mail client,
addressed to **will@williamdamato.com**. No backend required. To wire it to a
form-handling service later (Formspree, Resend, a serverless function, etc.),
replace the `handleSubmit` body in `src/pages/Contact.jsx`.

## Editing content

- **Copy, services, work, process** — top of `src/pages/Home.jsx`
- **Contact options & email** — top of `src/pages/Contact.jsx`
- **Design tokens** — `:root` in `src/index.css`

> The "Selected work" entries are representative placeholders — swap in real case
> studies before going live.

## Deploy

Static SPA. `npm run build`, then deploy `/dist`. `vercel.json` and `public/_redirects`
already handle the client-side routing fallback for Vercel and Netlify.
