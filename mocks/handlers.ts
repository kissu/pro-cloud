import { http, delay, HttpResponse } from 'msw'
import type { Subscription } from '~/utils/validators'
import { subscriptionSchema } from '~/utils/validators'

const subscriptions: Array<Subscription> = [
  {
    email: 'john@doe.com',
    password: '12345',
    wantsNewsletter: true,
  },
  {
    email: 'ariel@gmail.com',
    password: 'writepoems',
    wantsNewsletter: false,
  },
]

export const handlers = [
  http.get('/subscriptions', () => {
    return HttpResponse.json(Array.from(subscriptions.values()))
  }),

  http.post('/subscriptions', async ({ request }) => {
    const body = await request.json()
    const result = subscriptionSchema.safeParse(body)
    if (!result.success) {
      return HttpResponse.json(
        { error: 'Form is invalid' },
        { status: 422 },
      )
    }

    if (result.data) {
      // I do not handle duplicates here but for the purpose of the exercise I think it's fine
      subscriptions.push(result.data)
    }
    await delay(2000)
    return HttpResponse.json(result.data, { status: 201 })
  }),

  // Good one to be sure to see how errors are handled
  http.post('/subscriptions/error', async () => {
    await delay(1000)
    return HttpResponse.json(
      { error: 'Subscription error' },
      { status: 500 },
    )
  }),

  // Thought of putting this in production but could be confusing
  http.post('/subscriptions/flaky', async () => {
    await delay(800)
    const shouldError = Math.random() > 0.5

    if (shouldError) {
      return HttpResponse.json(
        { error: 'Server was unlucky this time, please try again' },
        { status: 500 },
      )
    }

    return HttpResponse.json(
      { success: true },
      { status: 200 },
    )
  }),
]
