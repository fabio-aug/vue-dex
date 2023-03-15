<script>
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
      <ul class="nav d-flex col-12 col-md-auto col-lg-auto me-md-auto me-lg-auto justify-content-center">
        <li class="nav-item">
          <RouterLink
            class="nav-link"
            style="user-select: none;"
            :class="{ 'link-secondary': !isHome, 'link-dark': isHome }"
            to="/home"
          >
            Principal
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink
            class="nav-link"
            style="user-select: none;"
            :class="{ 'link-secondary': !isPokedex, 'link-dark': isPokedex }"
            to="pokedex"
          >
            Pokédex
          </RouterLink>
        </li>
      </ul>

      <form
        class="d-flex"
        role="search"
      >
        <input
          class="form-control me-2"
          type="search"
          placeholder="Procurar por um pokémon"
          aria-label="Search"
        >
        <button class="btn btn-outline-success">
          Buscar
        </button>
      </form>
    </div>
  </header>
</template>
