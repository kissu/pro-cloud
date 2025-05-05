# Pro-cloud assignment

<img src="./public/images/project.png" width="300" alt="How the app looks">

---

The latest deployed version is available [on Cloudflare](https://pro-cloud.pages.dev/). 🚀

## Requirements for local project

- node `v22.14.0`
- PNPM `v9/10`
- to get started: `pnpm i && pnpm dev`
- check the `scripts` section for the rest

## Features

- uses Nuxt3 (SPA-only mode) with Composition API
- usage of composables + other common good practices of Vue
- uses TS + Zod for type-safety/validations
- project comes with plenty of style code quality (ESlint with stylistic, husky, commitlint)
- MSW is available as a mocking server with plenty of use cases
- tests are available: Vitest + Playwright for important parts
- performance and a11y were kept in mind, the web-components did the heavy lifting tho!
- the [Design System](https://provetcloud.design/) was respected: tokens + font + good practices regarding the components
- Pinia was added for some polishing of the UX (toasts! 🍞)

---

### Thanks for your time

<img src="./public/images/thanks.png" width="300" alt="thanks">
