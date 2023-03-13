<script>
import { RouterView } from 'vue-router';
import HeaderLayout from './components/HeaderLayout.vue';
import FooterLayout from './components/FooterLayout.vue';

export default {
  name: 'App',
  components: {
    RouterView,
    HeaderLayout,
    FooterLayout
  }
};
</script>

<template>
  <HeaderLayout />

  <main>
    <RouterView />
  </main>

  <FooterLayout />
</template>

<style>
html,
body,
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
