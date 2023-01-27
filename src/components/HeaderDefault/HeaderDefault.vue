<script lang="ts" setup>
import { altLogoText, headerDefault } from '@/locales/en.json'

const leftLinks = headerDefault.links.slice(0, 3)
const rightLinks = headerDefault.links.slice(3, 6)
</script>

<template>
  <header class="flex justify-between max-w-6xl px-8 py-4 mx-auto">
    <div class="md:flex hidden justify-between w-1/3">
      <a
        v-for="(link, index) in leftLinks"
        :key="index"
        class="header-default__menu-item"
        href="#"
        v-text="link"
      />
    </div>
    <div class="flex justify-center w-1/3">
      <img
        class="header-default__logo"
        src="@/assets/img/logo-cocos.png"
        :alt="altLogoText"
      />
    </div>
    <div class="md:flex hidden justify-between w-1/3">
      <a
        v-for="(link, index) in rightLinks"
        :key="index"
        class="header-default__menu-item"
        href="#"
        v-text="link"
      />
    </div>
  </header>
</template>

<style scoped src="./HeaderDefault.css"></style>
