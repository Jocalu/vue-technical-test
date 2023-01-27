<script lang="ts" setup>
import { computed, onBeforeMount } from 'vue'

import { useReservationSummary } from '@/composables/useReservationSummary'

import { reservationSummary, saveText, totalText } from '@/locales/en.json'

const { getReservationSummaryData, reservationSummaryData, saveHandler } =
  useReservationSummary()

onBeforeMount(() => {
  getReservationSummaryData()
})

const adultsSummary = computed(
  () => `${reservationSummaryData.adults} ${reservationSummary.adults}`
)
const childrenSummary = computed(
  () => `${reservationSummaryData.children} ${reservationSummary.children}`
)
const reservationDateSummary = computed(
  () =>
    `${reservationSummary.from} ${reservationSummaryData.checkinDate} ${reservationSummary.to} ${reservationSummaryData.checkoutDate}`
)
</script>

<template>
  <div class="p-4 border border-gray-light">
    <h2 class="mb-8 text-xl font-bold" v-text="reservationSummary.title" />
    <h3 class="mb-4 font-bold" v-text="reservationSummaryData.roomName" />
    <div class="mb-4 space-y-8 text-sm">
      <div class="flex space-x-12">
        <div>
          <p class="font-bold" v-text="reservationSummary.checkInText" />
          <p v-text="reservationSummary.checkInHour" />
        </div>
        <div>
          <p class="font-bold" v-text="reservationSummary.checkOutText" />
          <p v-text="reservationSummary.checkOutHour" />
        </div>
      </div>
      <div>
        <p class="font-bold" v-text="reservationSummary.reservationDateText" />
        <p v-text="reservationDateSummary" />
      </div>
      <div>
        <p class="font-bold" v-text="reservationSummary.people" />
        <p v-text="adultsSummary" />
        <p v-text="childrenSummary" />
      </div>
    </div>
    <hr class="mb-4 border-0 border-t border-gray-light" />
    <div class="flex justify-between mb-8">
      <p v-text="totalText" />
      <p v-text="reservationSummaryData.total" />
    </div>
    <button class="button" @click="saveHandler" v-text="saveText" />
  </div>
</template>
