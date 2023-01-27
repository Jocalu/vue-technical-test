<script lang="ts" setup>
import { ref } from 'vue'
import Datepicker from 'vue3-datepicker'

import CustomSelect from '@/components/CustomSelect/CustomSelect.vue'

import { useReservationSummary } from '@/composables/useReservationSummary'

import { heroMenu, modifyText } from '@/locales/en.json'

const { updateReservationData } = useReservationSummary()

const startDate = ref()
const endDate = ref()
const adults = ref('')
const children = ref('')

const modifyReservationHandler = () => {
  updateReservationData({
    startDate: new Intl.DateTimeFormat('en-US').format(startDate.value),
    endDate: new Intl.DateTimeFormat('en-US').format(endDate.value),
    adults: adults.value
  })

  alert('Summary Updated')
}

const adultsOptions = {
  options: [
    { text: heroMenu.selectAdults, value: '' },
    { text: `${heroMenu.adults}: 1`, value: '1' },
    { text: `${heroMenu.adults}: 2`, value: '2' },
    { text: `${heroMenu.adults}: 3`, value: '3' },
    { text: `${heroMenu.adults}: 4`, value: '4' },
    { text: `${heroMenu.adults}: 5`, value: '5' }
  ],
  value: adults
}

const childrenOptions = {
  options: [
    { text: heroMenu.selectChildren, value: '' },
    { text: `${heroMenu.children}: 0`, value: '0' },
    { text: `${heroMenu.children}: 1`, value: '1' },
    { text: `${heroMenu.children}: 2`, value: '2' },
    { text: `${heroMenu.children}: 3`, value: '3' },
    { text: `${heroMenu.children}: 4`, value: '4' },
    { text: `${heroMenu.children}: 5`, value: '5' },
    { text: `${heroMenu.children}: 6`, value: '6' }
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
        <CustomSelect v-model="adults" :options="adultsOptions.options" />
        <CustomSelect v-model="children" :options="childrenOptions.options" />
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
