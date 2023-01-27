import { render } from '@/utils/test.utils'

import RoomsContainer from './RoomsContainer.vue'

const mockedRooms = [
  {
    name: 'Mini Dreamy Room'
  },
  {
    name: 'Seet Bungalow'
  },
  {
    name: 'Los Cocos Suite'
  }
]

const componentBuilder = () => {
  const component = render(RoomsContainer)

  return {
    ...component
  }
}

describe('RoomsContainer', () => {
  test('should render as many room cards as we have rooms', () => {
    const { getByText } = componentBuilder()

    const roomCards: HTMLElement[] = []

    mockedRooms.forEach((room) => {
      roomCards.push(getByText(room.name))
    })

    expect(roomCards).toHaveLength(mockedRooms.length)
  })
})
