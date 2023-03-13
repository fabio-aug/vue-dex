<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'HeaderLayout',
  computed: {
    isHome() {
      return this.$route.path === '/home';
    },
    isNational() {
      return this.$route.path === '/national';
    },
    isRegional() {
      return this.$route.path === '/regional';
    },
  },
  components: {
    RouterLink
  }
};
</script>

<template>
  <header class="d-flex justify-content-center py-3 mb-3 border-bottom">
    <ul class="nav nav-pills d-flex justify-content-center">
      <li>
        <RouterLink
          to="/home"
          class="nav-link px-2"
          :class="{ 'link-secondary': isHome, 'link-dark': !isHome }"
        >
          VueDex
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/national"
          class="nav-link px-2"
          :class="{ 'link-secondary': isNational, 'link-dark': !isNational }"
        >
          Nacional
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/regional"
          class="nav-link px-2"
          :class="{ 'link-secondary': isRegional, 'link-dark': !isRegional }"
        >
          Regional
        </RouterLink>
      </li>
    </ul>
  </header>
</template>
