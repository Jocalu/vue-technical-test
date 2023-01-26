<script lang="ts" setup>
import { defineProps } from 'vue'

import { roomCard } from '@/locales/en.json'

import { type Room } from '@/@types/Room'

const props = defineProps<{
  room: Room
}>()

const bedText = `${roomCard.beds} ${props.room.beds}`
const peopleText = `${roomCard.people} ${props.room.people}`
const sizeText = `${roomCard.size} ${props.room.size}`
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
        <p
          class="mb-2 text-base font-display font-semibold"
          v-text="room.name"
        />
        <p class="flex-1" v-text="room.description" />
        <p class="mb-6" v-text="sizeText" />
        <div class="flex items-baseline space-x-16">
          <div>
            <img
              class="w-8 mb-1"
              src="@/assets/img/double-bed.svg"
              :alt="roomCard.altBedIcon"
            />
            <p v-text="bedText" />
          </div>
          <p class="flex-1" v-text="peopleText" />
          <p class="text-xl font-semibold" v-text="room.amount" />
        </div>
      </div>
    </div>
  </div>
</template>
