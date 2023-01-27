import { reactive } from 'vue'

import type {
  ReservationDataSelected,
  ReservationSummaryData
} from '@/@types/Reservation'
import type { Room } from '@/@types/Room'

const DEFAULT_DATA_VALUE = '-'

const reservationSummaryData = reactive<ReservationSummaryData>({
  adults: DEFAULT_DATA_VALUE,
  checkinDate: DEFAULT_DATA_VALUE,
  checkoutDate: DEFAULT_DATA_VALUE,
  roomName: DEFAULT_DATA_VALUE,
  total: DEFAULT_DATA_VALUE
})

export const useReservationSummary = () => {
  const updateHotelData = (hotelData: Room): void => {
    reservationSummaryData.roomName = hotelData.name
    reservationSummaryData.total = hotelData.amount
  }

  const updateReservationData = (
    reservationData: ReservationDataSelected
  ): void => {
    reservationSummaryData.checkinDate = reservationData.startDate
    reservationSummaryData.checkoutDate = reservationData.endDate
    reservationSummaryData.adults = reservationData.adults
  }

  const saveHandler = () => {}

  return {
    reservationSummaryData,
    saveHandler,
    updateHotelData,
    updateReservationData
  }
}
