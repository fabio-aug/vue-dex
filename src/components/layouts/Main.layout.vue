<script>
import { RouterView } from 'vue-router';
export default {
  name: 'MainLayout',

  components: {
    RouterView,
  }
};
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>
