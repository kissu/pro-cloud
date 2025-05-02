// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils',
    '@nuxt/fonts',
    '@nuxtjs/fontaine',
  ],
  ssr: false,
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
