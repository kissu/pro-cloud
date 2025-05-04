<script setup lang="ts">
usePasswordToggle('provet-input[type=\'password\']')

const wantsNewsletter = ref(false)
const emailValue = ref('')
const passwordValue = ref('hehe')

const payload = ref({
  wantsNewsletter,
  emailValue,
  passwordValue,
})

function sendPayload() {
  console.log('to send', payload.value)
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
          @submit.prevent="sendPayload"
        >
          <provet-stack>
            <PInput
              v-model="emailValue"
              kind="email"
              value="Email"
              placeholder="john@doe.com"
              :form="subscriptionForm?.value"
            />
            <PInput
              v-model="passwordValue"
              kind="password"
              :form="subscriptionForm?.value"
              value="Password"
              placeholder="••••••••"
            />
            <PCheckbox
              v-model="wantsNewsletter"
              label="Receive occasional product updates"
            />
            <PButton
              expand
              @click="$router.push({ name: 'thanks' })"
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
