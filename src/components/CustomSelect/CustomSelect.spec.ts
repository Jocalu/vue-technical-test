import { render } from '@/utils/test.utils'

import CustomSelect from './CustomSelect.vue'

import { adultsText, selectAdults } from '@/locales/en.json'

const mockedOptions = [
  { text: selectAdults, value: '' },
  { text: `${adultsText}: 1`, value: '1' },
  { text: `${adultsText}: 2`, value: '2' },
  { text: `${adultsText}: 3`, value: '3' },
  { text: `${adultsText}: 4`, value: '4' },
  { text: `${adultsText}: 5`, value: '5' }
]
const mockedValue = '1'

const componentBuilder = () => {
  const component = render(CustomSelect, {
    props: {
      options: mockedOptions,
      modelValue: mockedValue
    }
  })

  return {
    ...component
  }
}

describe('CustomSelect', () => {
  test('should render all options', () => {
    const { getByText } = componentBuilder()

    mockedOptions.forEach((option) => {
      const optionElement = getByText(option.text)

      expect(optionElement).toBeInTheDocument()
    })
  })

  test('should have value 2, when you select 2 adults, ', () => {
    const { getByText } = componentBuilder()

    const optionElement = getByText(`${adultsText}: 2`)

    expect((optionElement as HTMLInputElement).value).toBe('2')
  })
})
