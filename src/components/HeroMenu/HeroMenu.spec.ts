import { render } from '@/utils/test.utils'

import HeroMenu from './HeroMenu.vue'

import { modifyText } from '@/locales/en.json'

const componentBuilder = () => {
  const component = render(HeroMenu)

  return {
    ...component
  }
}

describe('HeroMenu', () => {
  test('should render two selects', () => {
    const { getAllByTestId } = componentBuilder()

    const selects = getAllByTestId('select')

    expect(selects).toHaveLength(2)
  })

  test('should render modify button', () => {
    const { getByText } = componentBuilder()

    const button = getByText(modifyText)

    expect(button).toBeVisible()
  })
})
