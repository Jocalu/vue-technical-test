<script lang="ts">
import { defineComponent, reactive } from 'vue'

import { HotelData, ReservationData } from './ReservationSummary'

export default defineComponent({
  setup() {
    const data = reactive({
      roomName: '-',
      checkinDate: '-',
      checkoutDate: '-',
      adults: '-',
      total: '-'
    })
    const updateHotelData = (hotelData: HotelData): void => {
      data.roomName = hotelData.name
      data.total = hotelData.amount
    }
    const updateReservationData = (reservationData: ReservationData): void => {
      data.checkinDate = reservationData.startDate
      data.checkoutDate = reservationData.endDate
      data.adults = reservationData.adults
    }
    const saveHandler = () => {}

    return {
      data,
      updateHotelData,
      updateReservationData,
      saveHandler
    }
  }
})
</script>

<template>
  <div class="p-4 border border-gray-light">
    <h2 class="mb-8 text-xl">
      <strong>Reservation summary</strong>
    </h2>
    <h3 class="mb-4">
      <strong>{{ data.roomName }}</strong>
    </h3>
    <div class="mb-4 space-y-8 text-sm">
      <div class="flex space-x-12">
        <div>
          <p><strong>Check in</strong></p>
          <p>From 15.00h</p>
        </div>
        <div>
          <p><strong>Check out</strong></p>
          <p>Before 12.00h</p>
        </div>
      </div>
      <div>
        <p><strong>Reservation date</strong></p>
        <p>From {{ data.checkinDate }} to {{ data.checkoutDate }}</p>
      </div>
      <div>
        <p><strong>People</strong></p>
        <p>{{ data.adults }} Adults</p>
      </div>
    </div>
    <hr class="mb-4 border-0 border-t border-gray-light" />
    <div class="flex justify-between mb-8">
      <p>Total</p>
      <p>{{ data.total }}</p>
    </div>
    <button class="button" @click="saveHandler">Save</button>
  </div>
</template>