import { render } from '@/utils/test.utils'

import HeaderDefault from './HeaderDefault.vue'

import { altLogoText, headerDefault } from '@/locales/en.json'

const componentBuilder = (options = {}) => {
  const component = render(HeaderDefault, options)

  return {
    ...component
  }
}

describe('HeaderDefault', () => {
  test('should render logo', () => {
    const { getByAltText } = componentBuilder()

    const logo = getByAltText(altLogoText)

    expect(logo).toBeVisible()
  })

  test('should render links', () => {
    const { getByText } = componentBuilder()

    headerDefault.links.forEach((link) => {
      const linkElement = getByText(link)

      expect(linkElement).toBeVisible()
    })
  })
})
