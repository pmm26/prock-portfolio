# prock.dev

Pedro Roque’s engineering portfolio. The homepage and project case studies are statically generated with the Next.js App Router and TypeScript.

## Run locally

Use the Node version in `.node-version` and the pnpm version in `package.json`.

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

The development server prints its local address. The existing Dockerfile builds and serves the standalone production output.

## Update the portfolio

Edit the profile, projects, experience, expertise and education in [the portfolio data](data/portfolio.ts). The order of the project records sets the order of the index and the next-project links. The first two get larger previews. Give each project a stable slug so existing case-study URLs continue to work.

Project images live in [public/artwork](public/artwork). The project plate component controls their framing. Typography, spacing, surfaces, colour and responsive layouts live in [app/globals.css](app/globals.css). The application serves its own licensed Geist font. The homepage sharing image is [public/social.jpg](public/social.jpg).

The [logo SVG](public/brand/prock-logo.svg) includes the outlined wordmark and the PR monogram. A [rendered PNG](public/brand/prock-logo.png) is available for previews. Next.js uses [the standalone monogram](app/icon.svg) and [the Apple touch icon](app/apple-icon.png) to generate versioned icon links. The bundled ICO includes 16, 32, 48, 64 and 256 pixel sizes.

## Verify a change

```sh
corepack pnpm format:check
corepack pnpm lint
corepack pnpm test
```

The test command builds the production pages, checks the bundled CV download, and verifies the case-study routes linked from the homepage.

The [content review](docs/content-review.md) records source decisions and the details needed for a future update. [Browser screenshots](docs/screenshots) cover the homepage, project index and individual case studies.
