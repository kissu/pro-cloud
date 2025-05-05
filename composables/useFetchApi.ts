import type { UseFetchOptions } from 'nuxt/app'

export function useFetchApi<T>(
  url: string | (() => string),
  options?: UseFetchOptions<T>,
) {
  return useFetch(url, {
    ...options,
    dedupe: 'defer',
    immediate: false,
    server: false,
    watch: false,
    $fetch: useNuxtApp().$api as typeof $fetch,
    async onResponseError({ response }) {
      const errorStore = useErrorStore()
      errorStore.setError(response._data.error)
    },
  })
}
