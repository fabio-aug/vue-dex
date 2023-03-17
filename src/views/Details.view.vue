<script lang="js">
import { Utils } from '../modules';
import * as TypesSvg from './../assets/types';
import { PokemonServices } from '../services';

export default {
  name: 'DetailsView',

  data() {
    return {
      pokemon: null,
      loading: false,
      colorTheme: 'normal'
    };
  },

  methods: {
    getPokemonTypeSvg(typeName) {
      return TypesSvg[typeName];
    },

    getTypeColor(typeName) {
      return Utils.getTypeColor(typeName);
    }
  },

  mounted() {
    this.loading = true;
    PokemonServices.GetPokemonData(this.$route.params.pokename).then((res) => {
      if (res) {
        console.log(res);
        this.pokemon = res;
        this.colorTheme = this.getTypeColor(res.types[0].type.name);
      }
    }).catch((e) => {
      console.log('DetailsView -> mounted()', e);
    }).finally(() => this.loading = false);
  }
};
</script>

<template>
  <div
    v-if="pokemon === null && loading"
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

  <div v-else-if="pokemon === null && !loading">
    <p class="lead text-center">
      No information found at the moment.
    </p>
  </div>

  <div
    v-else
    :style="`background: linear-gradient(230deg, ${colorTheme} 0%, ${colorTheme}55 50%, ${colorTheme} 100%);`"
  >
    <div class="container">
      <div class="row align-items-center mb-3">
        <div class="col-12 col-sm-6 col-md-6 col-lg-6 d-flex justify-content-center">
          <img
            :src="pokemon.sprites.other['official-artwork'].front_default"
            class="d-block img-fluid img-pokeball"
            :alt="pokemon.name"
            loading="lazy"
          >
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-lg-6 d-flex justify-content-center flex-column align-items-sm-baseline align-items-center">
          <h3 class="cap-tt">
            # {{ pokemon.id }}
          </h3>
          <h1 class="display-5 fw-bold lh-1 cap-tt">
            {{ pokemon.name.replace('-', ' ') }}
          </h1>
          <div class="d-grid gap-2 d-flex justify-content-md-start">
            <div
              v-for="(type, idx) in pokemon.types"
              :key="idx"
              class="card-type m-1"
              :style="`background-color: ${getTypeColor(type.type.name)}`"
            >
              <img
                width="40"
                height="40"
                class="card-img-top img-type"
                :src="getPokemonTypeSvg(type.type.name)"
                :alt="`${pokemon.name} type ${type.type.name}`"
              > {{ type.type.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="radius-card">
      <div class="container row p-3">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
          <h4 :style="`color: ${colorTheme};`">
            Pokémon Data
          </h4>
          <p class="lead">
            Height:
            <small class="text-muted">{{ pokemon.height / 10 }}m</small>
          </p>
          <p class="lead">
            Weight:
            <small class="text-muted">{{ pokemon.weight / 10 }}kg</small>
          </p>
          <p class="lead">
            Base Experience:
            <small class="text-muted">{{ pokemon.base_experience }}</small>
          </p>
          <h4 :style="`color: ${colorTheme};`">
            Abilities
          </h4>
          <p
            v-for="(abilitie, idx) in pokemon.abilities"
            :key="idx"
            class="lead cap-tt"
          >
            {{ abilitie.ability.name.replace('-', ' ') }}
            <small
              class="text-muted"
              v-if="abilitie.is_hidden"
            >
              (hidden)
            </small>
          </p>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
          <h4 :style="`color: ${colorTheme};`">
            Base Stats
          </h4>

          <div
            v-for="(status, idx) in pokemon.stats"
            :key="idx"
          >
            <p class="lead cap-tt p-stats">
              {{ status.stat.name.replace('-', ' ') }} ({{ status.base_stat }})
            </p>
            <div
              class="text-muted status-bar"
              :style="`width: ${status.base_stat / 2}px; background-color: ${colorTheme}; display: block;`"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.cap-tt {
  text-transform: capitalize;
}

.p-stats {
  margin-bottom: 0px;
}

.status-bar {
  height: 15px;
  margin-bottom: 1rem;
}

.radius-card {
  padding: 10px;
  background-color: #ffffff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

.img-pokeball {
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain !important;
  background-attachment: initial !important;
  background-image: url('./../assets/other/pokeball.svg');
}

.card-type {
  padding: 8px;
  display: flex;
  font-size: 16px;
  color: #ffffff;
  border-radius: 3px;
  flex-direction: row;
  align-items: center;
  text-transform: uppercase;
}

.img-type {
  max-width: 40px;
  max-height: 40px;
  margin-right: 5px;
}
</style>
