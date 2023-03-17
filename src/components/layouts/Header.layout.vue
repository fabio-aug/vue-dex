<script lang="js">
import { RouterLink } from 'vue-router';

export default {
  name: 'HeaderLayout',

  computed: {
    isHome() {
      return this.$route.path === '/home';
    },
    isPokedex() {
      return this.$route.path === '/pokedex';
    },
  },

  components: {
    RouterLink
  }
};
</script>

<template>
  <header class="py-3 border-bottom">
    <div class="container d-flex flex-wrap justify-content-center">
      <RouterLink
        to="/home"
        class="font-vd col-12 col-md-auto col-lg-auto me-md-auto me-lg-auto "
      >
        <h3 class="font-vd h-100 d-flex justify-content-center align-items-center ">
          Vue Dex
        </h3>
      </RouterLink>

      <ul class="nav d-flex">
        <li class="nav-item">
          <RouterLink
            class="nav-link"
            style="user-select: none;"
            :class="{ 'link-secondary': !isHome, 'link-dark': isHome }"
            to="/home"
          >
            Home
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink
            class="nav-link"
            style="user-select: none;"
            :class="{ 'link-secondary': !isPokedex, 'link-dark': isPokedex }"
            to="/pokedex"
          >
            Pokédex
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>
