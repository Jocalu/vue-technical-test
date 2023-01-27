import type { Room } from '@/@types/Room'

export interface RoomRepository {
  getRooms(): Promise<Room[]>
}
