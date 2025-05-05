import { mount } from '@vue/test-utils'
// @ts-expect-error cannot find the type below
import PInput from '../Input.vue'

describe('PInput', () => {
  const baseProps = {
    kind: 'email' as 'email' | 'password',
    value: 'Email',
    placeholder: 'Test placeholder',
    form: null,
  }

  it('renders email type with mail icon', () => {
    const wrapper = mount(PInput, {
      props: {
        ...baseProps,
        kind: 'email',
      },
      global: {
        stubs: {
          'provet-input': true,
          'provet-icon': true,
          'provet-button': true,
          'provet-tooltip': true,
          'Transition': true,
        },
      },
    })

    const icon = wrapper.find('provet-icon')
    expect(icon.exists()).toBe(true)
  })

  it('renders provet-input', () => {
    const wrapper = mount(PInput, {
      props: {
        kind: 'email',
        value: 'Email',
        placeholder: 'Test placeholder',
        form: null,
      },
      global: {
        stubs: {
          'provet-input': true,
        },
      },
    })

    const input = wrapper.find('provet-input')
    expect(input.exists()).toBe(true)
  })

  it('renders password type with toggle button and tooltip', () => {
    const wrapper = mount(PInput, {
      props: {
        ...baseProps,
        kind: 'password',
        value: 'Password',
      },
      global: {
        stubs: {
          'provet-input': true,
          'provet-icon': true,
          'provet-button': true,
          'provet-tooltip': true,
          'Transition': true,
        },
      },
    })

    const button = wrapper.find('provet-button')
    expect(button.exists()).toBe(true)

    const tooltip = wrapper.find('provet-tooltip')
    expect(tooltip.exists()).toBe(true)
  })

  it('shows error message when touched and error exists', async () => {
    const wrapper = mount(PInput, {
      props: {
        ...baseProps,
        error: 'Invalid email',
      },
      global: {
        stubs: {
          'provet-input': {
            template: '<input @blur="$emit(\'blur\')" />',
          },
          'Transition': true,
        },
      },
    })

    await wrapper.find('provet-input').trigger('blur')
    expect(wrapper.find('.n-error').exists()).toBe(true)
    expect(wrapper.find('.n-error').text()).toBe('Invalid email')
  })

  it('emits input events', async () => {
    const wrapper = mount(PInput, {
      props: baseProps,
      global: {
        stubs: {
          'provet-input': {
            template: '<input @input="$emit(\'input\')" />',
          },
        },
      },
    })

    await wrapper.find('provet-input').trigger('input')
    expect(wrapper.emitted()).toHaveProperty('input')
  })
})
