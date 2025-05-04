<script setup lang="ts">
import '@provetcloud/web-components/lib/Button'

interface Props {
  expand: boolean
}

const { expand } = defineProps<Props>()
</script>

<template>
  <provet-button
    ref="submit-button"
    variant="primary"
    type="submit"
    size="l"
    :expand
  >
    <slot />
  </provet-button>
</template>
