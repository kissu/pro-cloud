<script setup lang="ts">
import type { Ref } from 'vue'

usePasswordToggle('provet-input[type=\'password\']')

const emailValue = ref('')
const passwordValue = ref('')
const wantsNewsletter: Ref<boolean> = ref(false)

const { errors, validate } = useValidate({ wantsNewsletter, emailValue, passwordValue })

const { status, execute } = useFetchApi('/subscriptions', {
  method: 'POST',
  body: {
    email: emailValue,
    password: passwordValue,
    wantsNewsletter,
  },
})

async function sendPayload() {
  validate()
  if (Object.entries(errors.value).length) {
    const errorStore = useErrorStore()
    errorStore.setError('Please fill the form properly')
    return
  }
  await execute()
  if (status.value === 'success') await navigateTo({ name: 'thanks' })
}

const subscriptionForm = useTemplateRef<HTMLFormElement>('subscription-form')
</script>

<template>
  <div>
    <provet-stack
      class="n-margin-auto"
      style="max-width: 340px;"
    >
      <section class="n-font-size-xl n-font-weight-heading">
        Learn how we handle ethics of AI in veterinary medicine
        <PBadge>new</PBadge>
      </section>
      <img
        src="/images/cutie.webp"
        alt="cute cat"
        width="340"
        height="227"
        class="n-border-radius"
      >

      <PCard>
        <form
          id="subcription-form"
          ref="subscription-form"
          action="#"
          @submit.prevent
        >
          <provet-stack>
            <PInput
              v-model="emailValue"
              kind="email"
              value="Email"
              placeholder="john@doe.com"
              :form="subscriptionForm?.value"
              :error="errors['email']"
              @input="validate"
              @blur="validate"
            />
            <PInput
              v-model="passwordValue"
              kind="password"
              :form="subscriptionForm?.value"
              value="Password"
              placeholder="••••••••"
              :error="errors['password']"
              @blur="validate"
              @input="validate"
            />
            <PCheckbox
              v-model="wantsNewsletter"
              label="Receive occasional product updates"
            />
            <PButton
              expand
              :loading="status === 'pending'"
              @click.capture.prevent="sendPayload"
            >
              Sign up
            </PButton>
          </provet-stack>
        </form>
      </PCard>
    </provet-stack>
  </div>
</template>

<style scoped>
section {
  text-align: center;
}
</style>
