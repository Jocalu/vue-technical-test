<script lang="ts" setup>
import { breadcrumbsRooms } from '@/locales/en.json'
</script>

<template>
  <div class="max-w-6xl p-8 mx-auto mb-4">
    <h1 class="mb-2 text-2xl font-display" v-text="breadcrumbsRooms.title" />
    <p class="mb-4" v-text="breadcrumbsRooms.description" />
    <img
      class="breadcrumbs-rooms__image"
      src="@/assets/img/path.png"
      :alt="breadcrumbsRooms.altText"
    />
  </div>
</template>

<style src="./BreadcrumbsRooms.css"></style>
