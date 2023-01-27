import { inmemoryRoomRepository } from '@/room/infrastructure/api/inmemoryRoomRepository'

export const useRooms = () => {
  const { getRooms } = inmemoryRoomRepository()

  return {
    getRooms
  }
}
