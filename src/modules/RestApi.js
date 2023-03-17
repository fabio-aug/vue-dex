class RestApi {
  URL = 'https://pokeapi.co/api/v2';
  static TOKEN = '';

  async httpMethod(method, path, body) {
    return fetch(`${this.URL}${path}`, {
      method: method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: this.TOKEN
      },
      body: JSON.stringify(body)
    });
  }

  httpGet = (path) => this.httpMethod('GET', path).then((res) => res.json());
  httpPost = (path, body) => this.httpMethod('POST', path, body).then((res) => res.json());
  httpPut = (path, body) => this.httpMethod('PUT', path, body).then((res) => res.json());
  httpDelete = (path) => this.httpMethod('DELETE', path).then((res) => res.json());

  setToken = (token) => this.TOKEN = `Bearer ${token}`;
}

export default new RestApi();
