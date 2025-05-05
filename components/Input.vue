<script setup lang="ts">
import '@provetcloud/web-components/lib/Input'
import '@provetcloud/web-components/lib/Tooltip'

interface Props {
  kind: 'email' | 'password'
  value: string
  placeholder: string
  form: HTMLFormElement | null
  error?: string
}
const { kind, error } = defineProps<Props>()

const emit = defineEmits(['blur', 'input'])

const inputValue = defineModel<string>()

const touched = ref(false)

function canDisplayErrors() {
  return touched.value ? error : undefined
}
</script>

<template>
  <provet-input
    v-model="inputValue"
    :label="value"
    required
    :name="value.toLowerCase()"
    :type="kind"
    expand
    :autocomplete="kind === 'email' ? 'email' : undefined"
    :placeholder
    :form="form"
    @input="emit('input')"
    @blur="touched = true"
  >
    <Transition name="fade-slide-down">
      <div
        v-if="canDisplayErrors()"
        slot="error"
        class="n-caption n-error"
        role="alert"
      >
        {{ error }}
      </div>
    </Transition>
    <provet-button
      v-if="kind === 'password'"
      slot="end"
      aria-describedby="password-tooltip"
      square
    >
      <provet-icon name="interface-edit-on" />
      <provet-icon name="interface-edit-off" />
    </provet-button>

    <provet-icon
      v-if="kind === 'email'"
      slot="start"
      name="generic-mail"
    />
  </provet-input>
  <provet-tooltip
    v-if="kind === 'password'"
    id="password-tooltip"
  >
    Show / hide password
  </provet-tooltip>
</template>

<style scoped>
[type="password"] provet-icon[name="interface-edit-off"],
[type="text"] provet-icon[name="interface-edit-on"] {
  display: none;
}

.fade-slide-down-enter-active,
.fade-slide-down-leave-active {
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(.4, 0, .2, 1);
}

.fade-slide-down-enter-from,
.fade-slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.fade-slide-down-enter-to,
.fade-slide-down-leave-from {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .fade-slide-down-enter-active,
  .fade-slide-down-leave-active {
    transition: none !important;
  }
}
</style>
