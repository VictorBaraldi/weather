export default class buscaCidade {
  constructor() {
    this.erro = null;
    this.cidade = document.querySelector('[data-clima="cidade"]');
  }

  async buscarCidade() {
    this.latitude = window.localStorage.getItem('latitude');
    this.longitude = window.localStorage.getItem('longitude');
    const city = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${this.latitude}&longitude=${this.longitude}&localityLanguage=en`,
    );
    const response = await city.json();
    window.localStorage.setItem('padrao', response.city);
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

    window.localStorage.setItem('cidade', cidade);
    this.cidade.innerHTML = cidade;
    this.cidade.style.textTransform = 'capitalize';
    window.localStorage.setItem('latitude', json.results[0].latitude);
    window.localStorage.setItem('longitude', json.results[0].longitude);
  }
}
