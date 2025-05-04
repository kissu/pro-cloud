export default function (selector: string): void {
  onMounted(async () => {
    await nextTick()

    const hiddenInputs = document.querySelectorAll<HTMLInputElement>(selector)
    hiddenInputs.forEach((input) => {
      input.addEventListener('click', (event) => {
        // event.preventDefault()
        // event.stopPropagation()
        console.log('🟢🟢🟢', event)
        if (!(event.target instanceof HTMLElement)) return
        if (event.target.localName !== 'button') return
        input.type = input.type === 'password' ? 'text' : 'password'
      })
    })
  })
}
