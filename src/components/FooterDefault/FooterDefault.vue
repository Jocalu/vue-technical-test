<script lang="ts" setup>
import { altLogoText, footerDefault } from '@/locales/en.json'
</script>

<template>
  <div class="p-4 border-t border-gray-light">
    <div class="footer flex justify-between mx-auto text-sm">
      <div class="hidden md:flex items-center space-x-4">
        <img
          class="footer__logo"
          src="@/assets/img/los-cocos-iso-footer.png"
          :alt="altLogoText"
        />
        <a
          v-for="(link, index) in footerDefault.links"
          :key="index"
          href="#"
          v-text="link"
        />
      </div>
      <div class="flex items-center space-x-4">
        <a
          v-for="(contact, index) in footerDefault.contact"
          :key="index"
          class="hidden md:flex"
          href="#"
          v-text="contact"
        />
        <img
          class="footer__icons"
          src="@/assets/img/footer_icons.png"
          :alt="footerDefault.altSocialIconsText"
        />
      </div>
    </div>
  </div>
</template>

<style src="./FooterDefault.css"></style>
