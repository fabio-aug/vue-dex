<script lang="js">
import { RouterLink } from 'vue-router';

export default {
  name: 'HomeView',

  mounted() {
    document.title = 'Home';
  },

  components: {
    RouterLink
  }
};
</script>

<template>
  <div class="position-relative overflow-hidden p-3 text-center bg-light h-100">
    <div class="col-md-5 mx-auto my-5">
      <h1 class="display-4 fw-normal">
        Welcome to
        <p class="font-vd">
          Vue Dex!
        </p>
      </h1>
      <p class="lead fw-normal">
        Your pokémon database with simple and efficient information.
      </p>
      <RouterLink
        class="btn btn-outline-success"
        style="text-transform: uppercase;"
        to="/pokedex"
      >
        See Pokédex
      </RouterLink>
    </div>
  </div>
</template>
