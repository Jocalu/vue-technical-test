import { render } from '@/utils/test.utils'

import RoomCard from './RoomCard.vue'

import { roomCard } from '@/locales/en.json'

const mockedRoom = {
  amount: 100,
  beds: '2',
  description: 'Room 1 description',
  img: 'room-1.jpg',
  name: 'Room 1',
  people: '3',
  size: '20m2'
}

const componentBuilder = () => {
  const component = render(RoomCard, {
    props: {
      room: mockedRoom
    }
  })

  return {
    ...component
  }
}

describe('RoomCard', () => {
  test('should render image', () => {
    const { getByAltText } = componentBuilder()

    const image = getByAltText(mockedRoom.name)

    expect(image).toBeVisible()
  })

  test('should render title', () => {
    const { getByText } = componentBuilder()

    const title = getByText(mockedRoom.name)

    expect(title).toBeVisible()
  })

  test('should render description', () => {
    const { getByText } = componentBuilder()

    const description = getByText(mockedRoom.description)

    expect(description).toBeVisible()
  })

  test('should render size', () => {
    const { getByText } = componentBuilder()

    const size = getByText(`${roomCard.size} ${mockedRoom.size}`)

    expect(size).toBeVisible()
  })

  test('should render bed icon', () => {
    const { getByAltText } = componentBuilder()

    const bedIcon = getByAltText(roomCard.altBedIcon)

    expect(bedIcon).toBeVisible()
  })

  test('should render number of beds', () => {
    const { getByText } = componentBuilder()

    const beds = getByText(`${roomCard.beds} ${mockedRoom.beds}`)

    expect(beds).toBeVisible()
  })

  test('should render people', () => {
    const { getByText } = componentBuilder()

    const people = getByText(`${roomCard.people} ${mockedRoom.people}`)

    expect(people).toBeVisible()
  })

  test('should render amount', () => {
    const { getByText } = componentBuilder()

    const amount = getByText(`${mockedRoom.amount}€`)

    expect(amount).toBeVisible()
  })
})
