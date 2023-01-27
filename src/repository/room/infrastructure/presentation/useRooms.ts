import { inmemoryRoomRepository } from '@/repository/room/infrastructure/api/inmemoryRoomRepository'

export const useRooms = () => {
  const { getRooms } = inmemoryRoomRepository()

  return {
    getRooms
  }
}
