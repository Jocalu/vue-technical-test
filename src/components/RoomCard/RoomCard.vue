<script lang="ts" setup>
import { defineProps } from 'vue'

import { roomCard } from '@/locales/en.json'

import type { Room } from '@/@types/Room'

const props = defineProps<{
  room: Room
}>()

const bedSummary = `${roomCard.beds} ${props.room.beds}`
const peopleSummary = `${roomCard.people} ${props.room.people}`
const sizeSummary = `${roomCard.size} ${props.room.size}`
</script>

<template>
  <div
    class="p-4 transition-all duration-300 border cursor-pointer border-gray-light hover:bg-gray-light hover:bg-opacity-20 hover:shadow-sm"
  >
    <div class="flex space-x-4">
      <div class="w-1/3">
        <img
          :src="room.img"
          :alt="room.name"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="flex flex-col w-2/3 text-sm">
        <p class="mb-2 text-base font-display font-bold" v-text="room.name" />
        <p class="flex-1" v-text="room.description" />
        <p class="mb-6" v-text="sizeSummary" />
        <div class="flex items-baseline space-x-16">
          <div>
            <img
              class="w-8 mb-1"
              src="@/assets/img/double-bed.svg"
              :alt="roomCard.altBedIcon"
            />
            <p v-text="bedSummary" />
          </div>
          <p class="flex-1" v-text="peopleSummary" />
          <p class="text-xl font-bold" v-text="`${room.amount}€`" />
        </div>
      </div>
    </div>
  </div>
</template>
