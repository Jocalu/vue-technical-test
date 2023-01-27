import { RoomRepository } from '@/room/domain/roomRepository'

import type { Room } from '@/@types/Room'

import roomImage1 from '@/assets/img/room_1.png'
import roomImage2 from '@/assets/img/room_2.png'
import roomImage3 from '@/assets/img/room_3.png'

const rooms = [
  {
    name: 'Mini Dreamy Room',
    description:
      'Generous and comfortable these modern furnished rooms offer two queen-size beds and are on the first floor.',
    size: '20m2',
    beds: '2',
    people: '2',
    amount: 200,
    img: roomImage1
  },
  {
    name: 'Seet Bungalow',
    description:
      'The perfect blend of comfort and culture, our superior room with a central graden view has the stunning, and comes with a jacuzzi.',
    size: '50m2',
    beds: '2',
    people: '4',
    amount: 350,
    img: roomImage2
  },
  {
    name: 'Los Cocos Suite',
    description:
      'If you want a little extra form your stay, you might like our superior rooms. A ocean view room has a private beach and a helicopter :-).',
    size: '125m2',
    beds: '3',
    people: '4',
    amount: 450,
    img: roomImage3
  }
]

export const inmemoryRoomRepository = (): RoomRepository => {
  return {
    getRooms() {
      return new Promise<Room[]>((resolve) => {
        resolve(rooms)
      })
    }
  }
}
