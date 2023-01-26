<script lang="ts">
import { defineComponent, ref } from 'vue'

import BreadcrumbsRooms from '@/components/BreadcrumbsRooms/BreadcrumbsRooms.vue'
import HeroMenu from '@/components/HeroMenu/HeroMenu.vue'
import LayoutDefault from '@/layouts/default.vue'
import ReservationSummary from '@/components/ReservationSummary/ReservationSummary.vue'
import RoomsContainer from '@/components/RoomsContainer/RoomsContainer.vue'

import { Room } from '@/@types/Room'

export default defineComponent({
  components: {
    BreadcrumbsRooms,
    HeroMenu,
    LayoutDefault,
    RoomsContainer,
    ReservationSummary
  },
  setup() {
    const summary = ref<typeof ReservationSummary>()

    const selectRoom = (room: Room) => {
      if (summary.value) {
        summary.value.updateHotelData(room)
      }
    }

    return {
      selectRoom,
      summary
    }
  }
})
</script>

<template>
  <LayoutDefault>
    <HeroMenu class="mb-4" />
    <BreadcrumbsRooms />
    <div class="inline-block px-8 mb-16">
      <div class="float-left w-2/3">
        <RoomsContainer :select-room="selectRoom" />
      </div>
      <div class="float-right w-1/3 pl-4">
        <ReservationSummary ref="summary" />
      </div>
    </div>
  </LayoutDefault>
</template>
