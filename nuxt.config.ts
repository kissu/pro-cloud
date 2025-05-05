import checker from 'vite-plugin-checker'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils',
    '@nuxt/fonts',
    '@nuxtjs/fontaine',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxt/test-utils/module',
  ],
  ssr: false,
  components: [
    { path: '~/components/', prefix: 'P' },
  ],
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: ['@provetcloud/css', '~/assets/css/main.css'],
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('provet-'),
    },
  },
  compatibilityDate: '2024-11-01',
  vite: {
    plugins: [
      checker({
        typescript: true,
      }),
    ],
  },
  telemetry: false,
  hooks: {
    'prerender:routes'({ routes }) {
      routes.clear()
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
    checker: true,
  },
  fonts: {
    provider: 'local',
  },
})
