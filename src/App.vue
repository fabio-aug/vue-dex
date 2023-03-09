<script setup>
import { RouterView } from 'vue-router';
import HeaderLayout from './components/HeaderLayout.vue';
import FooterLayout from './components/FooterLayout.vue';
</script>

<template>
  <HeaderLayout />

  <main>
    <RouterView />
  </main>

  <FooterLayout />
</template>

<style scoped></style>
