<script setup lang="ts">
import '@provetcloud/web-components/lib/Checkbox'

interface Props {
  label: string
}

const { label } = defineProps<Props>()

const wantsNewsletter = defineModel<boolean>()
</script>

<template>
  <provet-checkbox
    v-model="wantsNewsletter"
    :label="label"
    data-testid="checkbox"
    type="checkbox"
  />
</template>
