<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps<{
  options: {
    text: string
    value: string
  }[]
  modelValue: string
}>()
</script>

<template>
  <div class="custom-select" data-testid="select">
    <select
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        v-text="option.text"
      />
    </select>
  </div>
</template>

<style scoped src="./CustomSelect.css"></style>
