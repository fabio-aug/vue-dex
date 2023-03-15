import RestApi from '../modules/RestApi';

export default class PokemonServices {
  static ENDPOINT = `${RestApi.URL}/pokemon`;

  static async GetPokemonPaginatedList(offset, limit) {
    return RestApi.httpGet(`${this.ENDPOINT}/?offset=${offset}&limit=${limit}`).then((response) => response);
  }

  static async GetPokemonData(pokemonName) {
    return RestApi.httpGet(`${this.ENDPOINT}/${pokemonName}`).then((response) => response);
  }
}
