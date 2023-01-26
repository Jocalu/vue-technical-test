import { render } from '@/utils/test.utils'
import { breadcrumbsRooms } from '@/locales/en.json'

import BreadcrumbsRooms from './BreadcrumbsRooms.vue'

const componentBuilder = (options = {}) => {
  const component = render(BreadcrumbsRooms, options)

  return {
    ...component
  }
}

describe('BreadcrumbsRooms', () => {
  test('should render title', () => {
    const { getByText } = componentBuilder()

    const title = getByText(breadcrumbsRooms.title)

    expect(title).toBeVisible()
  })

  test('should render description', () => {
    const { getByText } = componentBuilder()

    const description = getByText(breadcrumbsRooms.description)

    expect(description).toBeVisible()
  })

  test('should render image', () => {
    const { getByAltText } = componentBuilder()

    const image = getByAltText(breadcrumbsRooms.altText)

    expect(image).toBeVisible()
  })
})
