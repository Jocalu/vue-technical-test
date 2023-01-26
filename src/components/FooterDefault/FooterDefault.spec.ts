import { render } from '@/utils/test.utils'

import FooterDefault from './FooterDefault.vue'

import { altLogoText, footerDefault } from '@/locales/en.json'

const componentBuilder = (options = {}) => {
  const component = render(FooterDefault, options)

  return {
    ...component
  }
}

describe('FooterDefault', () => {
  test('should render logo', () => {
    const { getByAltText } = componentBuilder()

    const logo = getByAltText(altLogoText)

    expect(logo).toBeVisible()
  })

  test('should render links', () => {
    const { getByText } = componentBuilder()

    footerDefault.links.forEach((link) => {
      const linkElement = getByText(link)

      expect(linkElement).toBeVisible()
    })
  })

  test('should render contact info', () => {
    const { getByText } = componentBuilder()

    footerDefault.contact.forEach((contact) => {
      const contactElement = getByText(contact)

      expect(contactElement).toBeVisible()
    })
  })

  test('should render social icons', () => {
    const { getByAltText } = componentBuilder()

    const socialIcons = getByAltText(footerDefault.altSocialIconsText)

    expect(socialIcons).toBeVisible()
  })
})
