export default defineNuxtPlugin({
  name: 'msw',
  async setup() {
    import('~/mocks/browser').then(({ worker }) => {
      return worker.start({
        onUnhandledRequest(req) {
          // bypass Nuxt/Vite internal requests to avoid noise
          if (req?.url.startsWith('/_nuxt/') || req?.url.includes('?vue&')) {
            return
          }
        },
      })
    })
  },
})
