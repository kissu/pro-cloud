import { expect, test } from '@nuxt/test-utils/playwright'

test.describe('index page', () => {
  test('check presence', async ({ page, goto }) => {
    await goto('/', { waitUntil: 'hydration' })
    expect(await page.getByTestId('email').isVisible()).toBe(true)
    expect(await page.getByTestId('password').isVisible()).toBe(true)
  })

  test('happy flow', async ({ page, goto }) => {
    await goto('/', { waitUntil: 'hydration' })
    await page.getByTestId('email').click()
    await page.getByTestId('email').locator('input').fill('hello@gmail.com')
    await page.getByTestId('password').click()
    await page.getByTestId('password').locator('input').fill('1234')
    await page.getByTestId('checkbox').click()
    await page.getByTestId('submit').click()
    await Promise.all([
      page.waitForResponse(resp => resp.url().includes('/subscriptions') && resp.status() === 201),
      page.waitForURL('**/thanks'),
    ])
    expect(page.url()).toContain('/thanks')
    await expect(page.getByText('Thanks a lot for caring!')).toBeVisible()
  })

  test('form non properly filled', async ({ page, goto }) => {
    await goto('/', { waitUntil: 'hydration' })
    await page.getByTestId('email').click()
    await page.getByTestId('email').locator('input').fill('hello')
    await page.getByTestId('password').click()
    await page.getByTestId('password').locator('input').fill('123')
    await page.getByTestId('submit').click()
    await expect(page.getByText('Please enter a valid email address.')).toBeVisible()
    await expect(page.getByText('Password must be at least 4 characters.')).toBeVisible()
    await expect(page.getByText('Please fill the form properly')).toBeVisible()
  })

  test('password toggle', async ({ page, goto }) => {
    await goto('/', { waitUntil: 'hydration' })
    await page.getByTestId('password').click()
    await page.getByTestId('password').locator('input').fill('123456')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Space')
    const input = page.getByTestId('password').locator('input')
    await expect(input).toHaveAttribute('type', 'text')
    await expect(input).toHaveValue('123456')
  })
})
