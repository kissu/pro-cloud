import { defineVitestConfig } from '@nuxt/test-utils/config'
import { configDefaults } from 'vitest/config'

export default defineVitestConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    exclude: [
      ...configDefaults.exclude,
      'e2e',
      '**/mocks/browser.ts',
      '**/mocks/handlers.ts',
    ],
  },
})
