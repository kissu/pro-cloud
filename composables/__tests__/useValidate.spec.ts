import { ref } from 'vue'

vi.mock('~/utils/validators', () => ({
  subscriptionSchema: {
    safeParse: (data: { email: string, password: string, wantsNewsletter: boolean }) => {
      if (!data.email.includes('@')) {
        return { success: false, error: { errors: [{ path: ['email'], message: 'Invalid email' }] } }
      }
      if (data.password.length < 6) {
        return { success: false, error: { errors: [{ path: ['password'], message: 'Password too short' }] } }
      }
      return { success: true }
    },
  },
}))

describe('useValidate', () => {
  it('validates successfully with correct data', () => {
    const emailValue = ref('test@example.com')
    const passwordValue = ref('password123')
    const wantsNewsletter = ref(true)
    const { validate, errors } = useValidate({ emailValue, passwordValue, wantsNewsletter })
    expect(validate()).toBe(true)
    expect(errors.value).toEqual({})
  })

  it('fails validation with invalid email', () => {
    const emailValue = ref('invalid-email')
    const passwordValue = ref('password123')
    const wantsNewsletter = ref(true)
    const { validate, errors } = useValidate({ emailValue, passwordValue, wantsNewsletter })
    expect(validate()).toBe(false)
    expect(errors.value).toEqual({ email: 'Invalid email' })
  })

  it('fails validation with short password', () => {
    const emailValue = ref('test@example.com')
    const passwordValue = ref('123')
    const wantsNewsletter = ref(true)
    const { validate, errors } = useValidate({ emailValue, passwordValue, wantsNewsletter })
    expect(validate()).toBe(false)
    expect(errors.value).toEqual({ password: 'Password too short' })
  })
})
