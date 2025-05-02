<script setup lang="ts">
import '@provetcloud/web-components/lib/Button'

const count = ref(0)
</script>

<template>
  <div>
    <p>index page</p>
    <nuxt-link :to="{ name: 'thanks' }">thanks</nuxt-link>

    <br>
    <br>
    <br>
    <provet-button
      variant="primary"
      @click="count++"
    >
      Count is: {{ count }}
    </provet-button>
  </div>
</template>
