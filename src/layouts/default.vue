<script lang="ts" setup>
import HeaderDefault from '@/components/HeaderDefault/HeaderDefault.vue'
import FooterDefault from '@/components/FooterDefault/FooterDefault.vue'
</script>

<template>
  <HeaderDefault />
  <slot />
  <FooterDefault />
</template>
