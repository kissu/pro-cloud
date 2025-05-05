export const useErrorStore = defineStore('error', {
  state: () => ({
    currentError: null as string | null,
  }),
  actions: {
    setError(error: string) {
      this.currentError = error
    },
    clearError() {
      this.currentError = null
    },
  },
})
