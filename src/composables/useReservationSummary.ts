import { reactive } from 'vue'

import { useStorage } from '@/composables/useStorage'

import type {
  ReservationDataSelected,
  ReservationSummaryData
} from '@/@types/Reservation'
import type { Room } from '@/@types/Room'

const { getStorageItem, setStorageItem } = useStorage()

const DEFAULT_DATA_VALUE = '-'
const RESERVATION_SUMMARY_DATA_KEY = 'reservation-summary-data'

const reservationSummaryData = reactive<ReservationSummaryData>({
  adults: DEFAULT_DATA_VALUE,
  checkinDate: DEFAULT_DATA_VALUE,
  checkoutDate: DEFAULT_DATA_VALUE,
  children: DEFAULT_DATA_VALUE,
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
    reservationSummaryData.adults = reservationData.adults
    reservationSummaryData.checkinDate = reservationData.startDate
    reservationSummaryData.checkoutDate = reservationData.endDate
    reservationSummaryData.children = reservationData.children
  }

  const getReservationSummaryData = (): ReservationSummaryData | null => {
    const savedData = getStorageItem<ReservationSummaryData>(
      RESERVATION_SUMMARY_DATA_KEY
    )

    if (savedData) {
      reservationSummaryData.adults = savedData.adults
      reservationSummaryData.checkinDate = savedData.checkinDate
      reservationSummaryData.checkoutDate = savedData.checkoutDate
      reservationSummaryData.children = savedData.children
      reservationSummaryData.roomName = savedData.roomName
      reservationSummaryData.total = savedData.total
    }

    return null
  }

  const saveHandler = () => {
    setStorageItem<ReservationSummaryData>(
      RESERVATION_SUMMARY_DATA_KEY,
      reservationSummaryData
    )
  }

  return {
    getReservationSummaryData,
    reservationSummaryData,
    saveHandler,
    updateHotelData,
    updateReservationData
  }
}
