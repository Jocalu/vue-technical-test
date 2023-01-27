<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'

import BreadcrumbsRooms from '@/components/BreadcrumbsRooms/BreadcrumbsRooms.vue'
import HeroMenu from '@/components/HeroMenu/HeroMenu.vue'
import LayoutDefault from '@/layouts/default.vue'
import ReservationSummary from '@/components/ReservationSummary/ReservationSummary.vue'
import RoomsContainer from '@/components/RoomsContainer/RoomsContainer.vue'

import { useRooms } from '@/room/infrastructure/presentation/useRooms'
import { errorMessage } from '@/locales/en.json'

import type { Room } from '@/@types/Room'

const { getRooms } = useRooms()

const rooms = ref<Room[]>([])
const hasRooms = ref<boolean>(false)

onBeforeMount(async () => {
  rooms.value = await getRooms()
  hasRooms.value = rooms.value.length > 0
})
</script>

<template>
  <LayoutDefault>
    <HeroMenu class="mb-4" />
    <div v-if="hasRooms">
      <BreadcrumbsRooms />
      <div class="inline-block px-8 mb-16">
        <div class="float-left w-2/3">
          <RoomsContainer :rooms="rooms" />
        </div>
        <div class="float-right w-1/3 pl-4">
          <ReservationSummary ref="summary" />
        </div>
      </div>
    </div>
    <p v-else class="max-w-6xl p-8 mx-auto mb-4" v-text="errorMessage" />
  </LayoutDefault>
</template>
