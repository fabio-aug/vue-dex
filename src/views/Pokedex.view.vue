<script lang="js">
import { PokemonCard } from '../components/cards';
import { PokemonServices } from '../services';

export default {
  name: 'PokedexView',

  data() {
    return {
      limit: 151,
      offset: 0,
      next: true,
      loading: false,
      renderList: [],
    };
  },

  methods: {
    getPokemonList() {
      if (!this.next) return;

      this.loading = true;
      PokemonServices.GetPokemonPaginatedList(this.offset, this.limit).then((res) => {
        if (res) {
          this.next = res.next !== null;
          this.offset = this.offset + this.limit;
          this.renderList = [...this.renderList, ...res.results];
        }
      }).catch((e) => {
        console.log('NationalView -> methods -> getPokemonList()', e);
      }).finally(() => this.loading = false);
    }
  },

  mounted() {
    document.title = 'Pokédex';

    this.getPokemonList();
  },

  components: {
    PokemonCard
  }
};
</script>

<template>
  <div class="container mb-3">
    <div class="row d-flex justify-content-center">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12">
        <h1 class="display-4 text-center">
          National Pokédex
        </h1>
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 text-center">
        <p>
          Here the little monsters of all generations are listed. For more details of a pokémon just click on it.
        </p>
      </div>
    </div>

    <div
      v-if="renderList.length === 0 && loading"
      class="d-flex justify-content-center"
    >
      <div
        role="status"
        class="spinner-border m-5"
        style="width: 5rem; height: 5rem;"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else-if="renderList.length === 0 && !loading">
      <p class="lead text-center">
        No information found at the moment.
      </p>
    </div>
    <div
      v-else
      class="row d-flex justify-content-center"
    >
      <PokemonCard
        v-for="(pokemon, idx) in renderList"
        :key="idx"
        :pokemon-name="pokemon.name"
      />

      <div
        class="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center"
        v-if="next"
      >
        <button
          v-if="loading"
          disabled
          type="button"
          class="btn btn-success"
          style="text-transform: uppercase;"
        >
          <span
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          />
          Carregando...
        </button>
        <button
          v-else
          @click="getPokemonList"
          type="button"
          class="btn btn-success"
          style="text-transform: uppercase;"
        >
          Load more
        </button>
      </div>
    </div>
  </div>
</template>
