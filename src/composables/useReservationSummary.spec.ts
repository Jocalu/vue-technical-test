import { useReservationSummary } from '@/composables/useReservationSummary'

import type { ReservationDataSelected } from '@/@types/Reservation'
import type { Room } from '@/@types/Room'

const { reservationSummaryData, updateHotelData, updateReservationData } =
  useReservationSummary()

const mockedHotelData: Room = {
  amount: '500 €',
  beds: '2',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  img: '',
  name: 'Deluxe Suite',
  people: '2',
  size: '30m2'
}

const mockedReservationData: ReservationDataSelected = {
  adults: '2',
  children: '0',
  endDate: '2022-01-05',
  startDate: '2022-01-01'
}

describe('updateHotelData', () => {
  beforeEach(() => {
    reservationSummaryData.adults = '-'
    reservationSummaryData.checkinDate = '-'
    reservationSummaryData.checkoutDate = '-'
    reservationSummaryData.roomName = '-'
    reservationSummaryData.total = '-'
  })

  test('should updates reservationSummaryData with the correct data', () => {
    const expectedReservationSummaryData = {
      adults: '-',
      checkinDate: '-',
      checkoutDate: '-',
      children: '-',
      roomName: mockedHotelData.name,
      total: mockedHotelData.amount
    }

    updateHotelData(mockedHotelData)

    expect(reservationSummaryData).toEqual(expectedReservationSummaryData)
  })

  test('should not modify the input hotelData object', () => {
    const originalHotelData = { ...mockedHotelData }

    updateHotelData(mockedHotelData)

    expect(mockedHotelData).toEqual(originalHotelData)
  })

  test('should handles invalid input', () => {
    const mockedHotelData = null

    expect(() => updateHotelData(mockedHotelData as unknown as Room)).toThrow()
  })
})

describe('updateReservationData', () => {
  beforeEach(() => {
    reservationSummaryData.adults = '-'
    reservationSummaryData.checkinDate = '-'
    reservationSummaryData.checkoutDate = '-'
    reservationSummaryData.roomName = '-'
    reservationSummaryData.total = '-'
  })

  test('should updates reservationSummaryData with the correct data', () => {
    const expectedReservationSummaryData = {
      adults: mockedReservationData.adults,
      checkinDate: mockedReservationData.startDate,
      checkoutDate: mockedReservationData.endDate,
      children: mockedReservationData.children,
      roomName: '-',
      total: '-'
    }

    updateReservationData(mockedReservationData)

    expect(reservationSummaryData).toEqual(expectedReservationSummaryData)
  })

  test('should not modify date names', () => {
    const originalReservationData = { ...mockedReservationData }

    updateReservationData(mockedReservationData)

    expect(mockedReservationData).toEqual(originalReservationData)
  })

  test('should handles invalid input', () => {
    const reservationData = null

    expect(() =>
      updateReservationData(
        reservationData as unknown as ReservationDataSelected
      )
    ).toThrow()
  })
})
