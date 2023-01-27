<script lang="ts" setup>
import { defineProps } from 'vue'

import RoomCard from '@/components/RoomCard/RoomCard.vue'

import { useReservationSummary } from '@/composables/useReservationSummary'

import type { Room } from '@/@types/Room'

const { updateHotelData } = useReservationSummary()

defineProps<{
  rooms: Room[]
}>()

const selectRoom = (room: Room) => {
  updateHotelData(room)
}
</script>
<template>
  <div class="space-y-4">
    <RoomCard
      v-for="room in rooms"
      :key="room.name"
      :room="room"
      @click="selectRoom(room)"
    />
  </div>
</template>
