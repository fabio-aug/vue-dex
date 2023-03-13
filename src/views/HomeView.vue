<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'HomeView',
  components: {
    RouterLink
  }
};
</script>

<template>
  <div class="text-center">
    <h1 class="display-5 fw-bold">
      VueDex
    </h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem harum enim labore asperiores vitae? Impedit nobis
        debitis vitae a eum inventore, commodi architecto unde tempora, fugiat iure beatae pariatur nesciunt.
      </p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <RouterLink to="/national">
          <button
            type="button"
            class="btn btn-danger btn-lg px-4 gap-3"
          >
            Pokédex Nacional
          </button>
        </RouterLink>
        <RouterLink to="/regional">
          <button
            type="button"
            class="btn btn-outline-dark btn-lg px-4"
          >
            Pokédex Regional
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
