import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'

describe('usePasswordToggle', () => {
  it('toggles input type when input is clicked with button target', async () => {
    document.body.innerHTML = `
      <input type="password" class="test-input">
      <button class="test-button">Toggle</button>
    `

    const TestComponent = {
      setup() {
        usePasswordToggle('.test-input')
        return () => null
      },
    }
    await mount(TestComponent)
    await nextTick()

    const input = document.querySelector('.test-input') as HTMLInputElement
    const button = document.querySelector('.test-button') as HTMLButtonElement

    const event = new MouseEvent('click', { bubbles: true })
    Object.defineProperty(event, 'target', { value: button })

    input.dispatchEvent(event)
    await nextTick()
    expect(input.type).toBe('text')

    input.dispatchEvent(event)
    await nextTick()
    expect(input.type).toBe('password')
  })
})
