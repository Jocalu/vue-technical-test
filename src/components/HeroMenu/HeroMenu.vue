<script lang="ts" setup>
import { ref } from 'vue'
import Datepicker from 'vue3-datepicker'

import CustomSelect from '@/components/CustomSelect/CustomSelect.vue'
import ReservationSummary from '@/components/ReservationSummary/ReservationSummary.vue'

import {
  adultsText,
  childrenText,
  modifyText,
  selectAdults,
  selectChildren
} from '@/locales/en.json'

const startDate = ref()
const endDate = ref()
const adults = ref('')
const children = ref('')
const summary = ref<typeof ReservationSummary>()

const modifyReservationHandler = () => {
  if (summary.value) {
    summary.value.updateReservationData({
      startDate: new Intl.DateTimeFormat('en-US').format(startDate.value),
      endDate: new Intl.DateTimeFormat('en-US').format(endDate.value),
      adults: adults.value
    })
    alert('Summary Updated')
  }
}

const adultsOptions = {
  options: [
    { text: selectAdults, value: '' },
    { text: `${adultsText}: 1`, value: '1' },
    { text: `${adultsText}: 2`, value: '2' },
    { text: `${adultsText}: 3`, value: '3' },
    { text: `${adultsText}: 4`, value: '4' },
    { text: `${adultsText}: 5`, value: '5' }
  ],
  value: adults
}

const childrenOptions = {
  options: [
    { text: selectChildren, value: '' },
    { text: `${childrenText}: 0`, value: '0' },
    { text: `${childrenText}: 1`, value: '1' },
    { text: `${childrenText}: 2`, value: '2' },
    { text: `${childrenText}: 3`, value: '3' },
    { text: `${childrenText}: 4`, value: '4' },
    { text: `${childrenText}: 5`, value: '5' },
    { text: `${childrenText}: 6`, value: '6' }
  ],
  value: children
}
</script>

<template>
  <div class="hero-menu">
    <div class="flex justify-center px-8 py-4 bg-primary bg-opacity-40">
      <div class="flex items-start space-x-4">
        <div class="hero-menu__calendar-wrapper">
          <Datepicker v-model="startDate" class="calendar-input" />
        </div>
        <div class="hero-menu__calendar-wrapper">
          <Datepicker v-model="endDate" class="hero-menu__calendar-input" />
        </div>
        <CustomSelect :options="adultsOptions.options" :model-value="adults" />
        <CustomSelect
          :options="childrenOptions.options"
          :model-value="children"
        />
        <button
          class="primary-button"
          @click="modifyReservationHandler"
          v-text="modifyText"
        />
      </div>
    </div>
  </div>
</template>

<style scoped src="./HeroMenu.css"></style>
