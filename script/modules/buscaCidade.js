export default class buscaCidade {
  constructor() {
    this.latitude;
    this.longitude;
    this.erro = null;
    this.cidade = document.querySelector('.info-cidade');
  }

  async init(cidade) {
    this.erro = null;
    this.cidade.innerHTML = cidade;
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cidade}`,
    );
    const json = await response.json();

    if (json.results === undefined) {
      return (this.erro = true);
    }

    const latitude = json.results[0].latitude;
    const longitude = json.results[0].longitude;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
