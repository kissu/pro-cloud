import type { Ref } from 'vue'
import { subscriptionSchema } from '~/utils/validators'

interface ValidationRefs {
  emailValue: Ref<string>
  passwordValue: Ref<string>
  wantsNewsletter: Ref<boolean>
}

export default function (refs: ValidationRefs) {
  function validate() {
    const result = subscriptionSchema.safeParse({
      email: refs.emailValue.value,
      password: refs.passwordValue.value,
      wantsNewsletter: refs.wantsNewsletter.value,
    })

    if (!result.success) {
      errors.value = {}
      result.error.errors.forEach((err) => {
        if (err.path[0]) errors.value[err.path[0]] = err.message
      })
      return false
    }
    errors.value = {}
    return true
  }

  const errors = ref<{ [k: string]: string }>({})

  return { validate, errors }
}
