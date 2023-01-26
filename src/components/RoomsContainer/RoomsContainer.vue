<script lang="ts">
import { defineComponent } from 'vue'

import img1 from '@/assets/img/room_1.png'
import img2 from '@/assets/img/room_2.png'
import img3 from '@/assets/img/room_3.png'

import RoomCard from '@/components/RoomCard/RoomCard.vue'

export default defineComponent({
  components: { RoomCard },
  props: {
    selectRoom: {
      type: Function,
      required: true
    }
  },
  setup() {
    const rooms = [
      {
        name: 'Mini Dreamy Room',
        description:
          'Generous and comfortable these modern furnished rooms offer two queen-size beds and are on the first floor.',
        size: '20m2',
        beds: '2',
        people: '2',
        amount: '200€',
        img: img1
      },
      {
        name: 'Seet Bungalow',
        description:
          'The perfect blend of comfort and culture, our superior room with a central graden view has the stunning, and comes with a jacuzzi.',
        size: '50m2',
        beds: '2',
        people: '4',
        amount: '350€',
        img: img2
      },
      {
        name: 'Los Cocos Suite',
        description:
          'If you want a little extra form your stay, you might like our superior rooms. A ocean view room has a private beach and a helicopter :-).',
        size: '125m2',
        beds: '3',
        people: '4',
        amount: '450€',
        img: img3
      }
    ]
    return {
      rooms
    }
  }
})
</script>
<template>
  <div class="space-y-4">
    <RoomCard
      v-for="n in rooms"
      :key="n.name"
      :room="n"
      @click="selectRoom(n)"
    />
  </div>
</template>
