<script lang="ts" setup>
import { defineEmits, defineProps } from 'vue'

defineProps<{
  options: {
    text: string
    value: string
  }[]
  modelValue: string
}>()

const emit = defineEmits(['update:modelValue'])

const emitEvent = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="custom-select" data-testid="select">
    <select :value="modelValue" @input="emitEvent">
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
