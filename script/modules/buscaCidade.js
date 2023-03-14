export default class buscaCidade {
  constructor() {
    this.latitude;
    this.longitude;
    this.erro = null;
    this.cidade = document.querySelector('[data-clima="cidade"]');
  }

  async init(cidade) {
    this.erro = null;
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cidade}`,
    );
    const json = await response.json();

    if (json.results === undefined) {
      return (this.erro = true);
    }

    this.cidade.innerHTML = cidade;
    const latitude = json.results[0].latitude;
    const longitude = json.results[0].longitude;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
