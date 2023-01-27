<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'

import BreadcrumbsRooms from '@/components/BreadcrumbsRooms/BreadcrumbsRooms.vue'
import HeroMenu from '@/components/HeroMenu/HeroMenu.vue'
import LayoutDefault from '@/layouts/default.vue'
import ReservationSummary from '@/components/ReservationSummary/ReservationSummary.vue'
import RoomsContainer from '@/components/RoomsContainer/RoomsContainer.vue'

import { useRooms } from '@/room/infrastructure/presentation/useRooms'
import { errorMessage } from '@/locales/en.json'
import { checkValidPromo } from '@/utils/checkValidPromo'

import type { Room } from '@/@types/Room'

const { getRooms } = useRooms()

const hasRooms = ref<boolean>(false)
const rooms = ref<Room[]>([])
const url = new URL(window.location.href)
const promoCode = url.searchParams.get('promo_code')
const discountPercentage = ref<number>(0)

onBeforeMount(async () => {
  rooms.value = await getRooms()
  hasRooms.value = rooms.value.length > 0

  if (promoCode) {
    discountPercentage.value = checkValidPromo(promoCode)
  }
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
          <ReservationSummary :discount-percentage="discountPercentage" />
        </div>
      </div>
    </div>
    <p v-else class="max-w-6xl p-8 mx-auto mb-4" v-text="errorMessage" />
  </LayoutDefault>
</template>
