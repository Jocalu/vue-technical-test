<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'

import RoomCard from '@/components/RoomCard/RoomCard.vue'

import { useReservationSummary } from '@/composables/useReservationSummary'
import { useRooms } from '@/repository/room/infrastructure/presentation/useRooms'

import type { Room } from '@/@types/Room'

const { updateHotelData } = useReservationSummary()
const { getRooms } = useRooms()

const rooms = ref<Room[]>([])

onBeforeMount(async () => {
  rooms.value = await getRooms()
})

const selectRoom = (room: Room) => {
  updateHotelData(room)
}
</script>
<template>
  <div v-if="rooms.length" class="space-y-4">
    <RoomCard
      v-for="room in rooms"
      :key="room.name"
      :room="room"
      @click="selectRoom(room)"
    />
  </div>
</template>
