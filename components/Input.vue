<script setup lang="ts">
import '@provetcloud/web-components/lib/Input'
import '@provetcloud/web-components/lib/Tooltip'

interface Props {
  kind: 'email' | 'password'
  value: string
  placeholder: string
  form: HTMLFormElement | null
}

const { value, kind } = defineProps<Props>()

const inputValue = defineModel<string>()
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
  >
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
      name="interface-email"
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
</style>
