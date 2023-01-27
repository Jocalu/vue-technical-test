import { render } from '@/utils/test.utils'

import { useReservationSummary } from '@/composables/useReservationSummary'

import ReservationSummary from './ReservationSummary.vue'

import { reservationSummary, saveText, totalText } from '@/locales/en.json'

const { reservationSummaryData } = useReservationSummary()

const componentBuilder = () => {
  const component = render(ReservationSummary)

  return {
    ...component
  }
}

describe('ReservationSummary', () => {
  test('should render title', () => {
    const { getByText } = componentBuilder()

    const title = getByText(reservationSummary.title)

    expect(title).toBeVisible()
  })

  test('should render default values for title and number of adults', () => {
    const { getAllByText } = componentBuilder()

    const defaultValues = getAllByText('-')

    expect(defaultValues).toHaveLength(2)
  })

  test('should render default reservartion date', () => {
    const { getByText } = componentBuilder()

    const defaultReservationDate = getByText(
      `${reservationSummary.from} ${reservationSummaryData.checkinDate} ${reservationSummary.to} ${reservationSummaryData.checkoutDate}`
    )

    expect(defaultReservationDate).toBeVisible()
  })

  test('should render people', () => {
    const { getByText } = componentBuilder()

    const people = getByText(reservationSummary.people)

    expect(people).toBeVisible()
  })

  test('should render total', () => {
    const { getByText } = componentBuilder()

    const total = getByText(totalText)

    expect(total).toBeVisible()
  })

  test('should render save button', () => {
    const { getByText } = componentBuilder()

    const button = getByText(saveText)

    expect(button).toBeVisible()
  })
})
