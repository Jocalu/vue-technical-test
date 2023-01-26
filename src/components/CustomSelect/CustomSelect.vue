<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<template>
  <div class="custom-select">
    <slot />
  </div>
</template>

<style scoped src="./CustomSelect.css"></style>
