<script setup lang="ts">
import '@provetcloud/web-components/lib/Layout'
import '@provetcloud/web-components/lib/Stack'
</script>

<template>
  <provet-layout>
    <provet-stack
      gap="l"
      class="align-vertical"
    >
      <slot />
    </provet-stack>
  </provet-layout>
</template>

<style scoped>
.align-vertical {
  min-height: 80dvh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
