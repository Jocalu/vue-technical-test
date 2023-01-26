<script lang="ts">
import { defineComponent, ref } from 'vue'

import Datepicker from 'vue3-datepicker'

import CustomSelect from '@/components/CustomSelect/CustomSelect.vue'
import ReservationSummary from '@/components/ReservationSummary/ReservationSummary.vue'

export default defineComponent({
  components: {
    CustomSelect,
    Datepicker
  },
  setup() {
    const sd = ref()
    const ed = ref()
    const adults = ref('')
    const children = ref('')
    const summary = ref<typeof ReservationSummary>()

    const modifyReservationHandler = () => {
      if (summary.value) {
        summary.value.updateReservationData({
          startDate: new Intl.DateTimeFormat('en-US').format(sd.value),
          endDate: new Intl.DateTimeFormat('en-US').format(ed.value),
          adults: adults.value
        })
        alert('Summary Updated')
      }
    }
    return {
      sd,
      ed,
      adults,
      children,
      summary,
      modifyReservationHandler
    }
  }
})
</script>

<template>
  <div class="hero">
    <div class="flex justify-center px-8 py-4 bg-primary bg-opacity-40">
      <div class="flex items-start space-x-4">
        <div class="calendar-wrapper">
          <Datepicker v-model="sd" class="calendar-input" />
        </div>
        <div class="calendar-wrapper">
          <Datepicker v-model="ed" class="calendar-input" />
        </div>
        <CustomSelect>
          <select v-model="adults">
            <option value="">Select Adults</option>
            <option value="1">Adults: 1</option>
            <option value="2">Adults: 2</option>
            <option value="3">Adults: 3</option>
            <option value="4">Adults: 4</option>
            <option value="5">Adults: 5</option>
          </select>
        </CustomSelect>
        <CustomSelect>
          <select v-model="children">
            <option value="">Select Children</option>
            <option value="0">Children: 0</option>
            <option value="1">Children: 1</option>
            <option value="2">Children: 2</option>
            <option value="3">Children: 3</option>
            <option value="4">Children: 4</option>
            <option value="5">Children: 5</option>
            <option value="6">Children: 6</option>
          </select>
        </CustomSelect>
        <button class="primary-btn" @click="modifyReservationHandler">
          Modify
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped src="./HeroMenu.css"></style>
