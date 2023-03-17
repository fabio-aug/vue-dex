import RestApi from '../modules/RestApi';

class PokemonServices {
  ENDPOINT = '/pokemon';

  async GetPokemonPaginatedList(offset, limit) {
    return RestApi.httpGet(`${this.ENDPOINT}/?offset=${offset}&limit=${limit}`).then((response) => response);
  }

  async GetPokemonData(pokemonName) {
    return RestApi.httpGet(`${this.ENDPOINT}/${pokemonName}`).then((response) => response);
  }
}

export default new PokemonServices();
