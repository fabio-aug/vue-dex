<script>
import { Utils } from '../../modules';
import * as TypesSvg from '../../assets/types';
import { PokemonServices } from '../../services';

export default {
  name: 'PokemonCard',

  props: {
    pokemonName: {
      default: '',
      type: String
    },
  },

  data() {
    return {
      pokemon: null,
      loading: false
    };
  },

  computed: {
    isReady() {
      return this.pokemon !== null && this.loading === false;
    },
  },

  methods: {
    getPokemonTypeSvg(typeName) {
      return TypesSvg[typeName];
    },

    getPokemonTypeColor(typeName) {
      return Utils.getTypeColor(typeName);
    }
  },

  mounted() {
    if (!this.pokemonName) return;

    this.loading = true;
    PokemonServices.GetPokemonData(this.pokemonName).then((res) => {
      if (res) {
        this.pokemon = res;
      }
    }).catch((e) => {
      console.log('NationalView -> methods -> getPokemonList()', e);
    }).finally(() => this.loading = false);
  }
};
</script>

<template>
  <div
    v-if="isReady"
    class="card card-body card-poke mb-3"
    :style="`background-color: ${getPokemonTypeColor(pokemon.types[0].type.name)}55`"
  >
    <img
      :src="pokemon.sprites.other['official-artwork'].front_default"
      class="card-img-top img-pokemon img-pokeball"
      :alt="pokemon.name"
    >
    <h5 class="card-title cap">
      <small class="text-muted"> # {{ pokemon.id }} </small>
      {{ pokemon.name }}
    </h5>
    <div class="type-container">
      <div
        v-for="(type, idx) in pokemon.types"
        :key="idx"
        class="card-type m-1"
        :style="`background-color: ${getPokemonTypeColor(type.type.name)}`"
      >
        <img
          width="20"
          height="20"
          class="card-img-top img-type"
          :src="getPokemonTypeSvg(type.type.name)"
          :alt="`${pokemon.name} type ${type.type.name}`"
        > {{ type.type.name }}
      </div>
    </div>
  </div>
</template>

<style>
.cap {
  display: flex;
  margin-top: .5rem;
  align-items: center;
  flex-direction: column;
  text-transform: capitalize;
}

.card-poke {
  display: flex;
  user-select: none;
  border-radius: 10px;
  align-items: center;
  transform: scale(1);
  flex-direction: column;
  transition: all 0.5s ease-out;
}

.card-poke:hover {
  cursor: pointer;
  transform: scale(1.025);
  transition: all 0.5s ease-out;
}

.img-pokemon {
  max-width: 150px;
  max-height: 150px;
}

.img-pokeball {
  background-size: 180px;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url('./../../assets/other/pokeball.svg');
}

.type-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  max-width: 15px;
  max-height: 15px;
  margin-right: 5px;
}
</style>
