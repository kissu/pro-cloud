import { z } from 'zod'

export const subscriptionSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(4, { message: 'Password must be at least 4 characters.' }),
  wantsNewsletter: z.boolean(),
})

export type Subscription = z.infer<typeof subscriptionSchema>
