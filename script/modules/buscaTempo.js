import BuscaCidade from './buscaCidade.js';
import SetImage from './background.js';

const buscaCidade = new BuscaCidade();
const background = new SetImage();

export default class BuscaTempo {
  constructor(cidade, hora) {
    this.cidade = cidade;
    this.hora = hora;
    this.temp = document.querySelector('[data-clima="temp"]');
    this.maxTemp = document.querySelector('[data-clima="max"]');
    this.minTemp = document.querySelector('[data-clima="min"]');
    this.chuva = document.querySelector('[data-clima="chuva"]');
    this.vento = document.querySelector('[data-clima="vento"]');
    this.erro = document.querySelector('.buscar-erro');
    this.latitude;
    this.longitude;
  }

  async init() {
    await buscaCidade.init(this.cidade);
    if (buscaCidade.erro === true) {
      this.erro.classList.add('animeLeft');
      return;
    } else {
      this.latitude = window.localStorage.getItem('latitude');
      this.longitude = window.localStorage.getItem('longitude');
      await background.init();
      await this.fetchDados();
    }
  }

  async fetchDados() {
    this.erro.classList.remove('animeLeft');
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&hourly=temperature_2m,precipitation_probability,windspeed_10m&daily=temperature_2m_max,temperature_2m_min&forecast_days=1&timezone=America%2FSao_Paulo`,
    );
    const json = await response.json();
    const minTemp = `${Math.floor(json.daily.temperature_2m_min[0])}°C`;
    const maxTemp = `${Math.floor(json.daily.temperature_2m_max[0])}°C`;
    const nowPrec = `${json.hourly.precipitation_probability[this.hora]}%`;
    const nowTemp = `${Math.floor(json.hourly.temperature_2m[this.hora])}°`;
    const windSpeed = `${json.hourly.windspeed_10m[this.hora]}km/h`;
    this.definirClima(minTemp, maxTemp, nowTemp, nowPrec, windSpeed);
  }

  definirClima(min, max, atual, chuva, vento) {
    this.maxTemp.innerHTML = max;
    this.minTemp.innerHTML = min;
    this.temp.innerHTML = atual;
    this.chuva.innerHTML = chuva;
    this.vento.innerHTML = vento;
  }
}
