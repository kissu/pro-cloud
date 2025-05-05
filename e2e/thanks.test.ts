import { expect, test } from '@nuxt/test-utils/playwright'

test.describe('thanks page', () => {
  test('check presence', async ({ page, goto }) => {
    await goto('/thanks', { waitUntil: 'hydration' })
    expect(await page.getByRole('button', { name: /back/i }).isVisible()).toBe(true)
    await page.getByRole('button', { name: /back/i }).click()
    page.waitForURL('**/')
    await expect(page.getByText('Learn how we handle ethics')).toBeVisible()
  })
})
