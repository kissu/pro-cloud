// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'vue/no-deprecated-slot-attribute': 'off',
      'vue/v-slot-style': 'off',
    },
  },
)
