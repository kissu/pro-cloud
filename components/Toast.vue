<script setup lang="ts">
import '@provetcloud/web-components/lib/Toast'
import '@provetcloud/web-components/lib/ToastGroup'

const errorStore = useErrorStore()

function resetError() {
  errorStore.clearError()
}
</script>

<template>
  <provet-toast-group>
    <provet-toast
      v-if="errorStore.currentError?.length"
      ref="toast"
      :auto-dismiss="3000"
      variant="danger"
      @dismiss="resetError"
    >
      {{ errorStore.currentError }}
    </provet-toast>
  </provet-toast-group>
</template>
