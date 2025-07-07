# My Website Starter

This is my opinionated starter for building content-rich websites with **Next.js 15 App Router** and **Sanity Studio** (v3+), featuring live editing, strong TypeScript, and a scalable structure for real-world projects.

## Key Features

- **Next.js 15 (App Router)**: File-based routing, layouts, and React Server Components.
- **Sanity Studio v3+**: Embedded at `/admin` for content authoring, with Presentation tool for visual editing.
- **Live Editing & Visual Editing**: Real-time content updates and click-to-edit overlays via Sanity Presentation.
- **Strict TypeScript**: Enforced strict mode and type safety throughout.
- **Scalable Structure**:
  - `src/app/(website)`: All website code, pages, layouts, and styles.
  - `src/app/(studio)`: All Sanity Studio code and admin routes.
  - `src/sanity`: Strongly-typed Sanity schemas, queries, and helpers.
  - `src/components`, `src/types`, `src/helpers`, `src/hooks`, `src/utils`: For modular, maintainable code.
- **SCSS Modules**: Component-scoped styles, BEM naming, and utility classes.
- **Accessibility & Modern JS**: Semantic HTML, a11y best practices, and modern language features.
- **API Routes**: For live editing, revalidation, and custom endpoints under `src/app/(studio)/api`.

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```
2. **Set up environment variables:**
   - Copy `.env.example` to `.env.local` and fill in your Sanity project details.
3. **Run the dev server:**
   ```sh
   npm run dev
   ```
   - Website: [http://localhost:3000](http://localhost:3000)
   - Studio: [http://localhost:3000/admin](http://localhost:3000/admin)

## Structure

```
my-portfolio/
  src/
    app/
      (website)/      # Website pages, layouts, styles
      (studio)/       # Sanity Studio, admin, and API routes
    components/       # Reusable UI components
    sanity/           # Sanity schemas, queries, helpers
    types/            # Shared TypeScript types
    helpers/          # Generic helpers
    hooks/            # Custom React hooks
    utils/            # Utilities
```

## Live Editing & Visual Editing
- Presentation tool is enabled for real-time content preview and click-to-edit overlays.
- See [Sanity Visual Editing docs](https://www.sanity.io/docs/visual-editing-with-next-js-app-router) for more info.

## Customization
- Update schemas in `src/sanity/schemaTypes` to model your content.
- Add pages/components under `(website)` and `(studio)` as needed.
- Follow `.cursor-rules.json` for codebase conventions and best practices.

---

**Built by Billy Myles-Berkouwer**
