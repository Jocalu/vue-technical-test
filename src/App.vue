<script lang="ts" setup>
import BreadcrumbsRooms from '@/components/BreadcrumbsRooms/BreadcrumbsRooms.vue'
import HeroMenu from '@/components/HeroMenu/HeroMenu.vue'
import LayoutDefault from '@/layouts/default.vue'
import ReservationSummary from '@/components/ReservationSummary/ReservationSummary.vue'
import RoomsContainer from '@/components/RoomsContainer/RoomsContainer.vue'
</script>

<template>
  <LayoutDefault>
    <HeroMenu class="mb-4" />
    <BreadcrumbsRooms />
    <div class="inline-block px-8 mb-16">
      <div class="float-left w-2/3">
        <RoomsContainer />
      </div>
      <div class="float-right w-1/3 pl-4">
        <ReservationSummary ref="summary" />
      </div>
    </div>
  </LayoutDefault>
</template>
