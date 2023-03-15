import buscaCidade from './buscaCidade.js';
import BuscaTempo from './buscaTempo.js';
const buscarCidade = new buscaCidade();

export default class UserLocation {
  init() {
    navigator.geolocation.getCurrentPosition(this.sucess);
  }

  async sucess(pos) {
    window.localStorage.setItem('latitude', pos.coords.latitude);
    window.localStorage.setItem('longitude', pos.coords.longitude);
    buscarCidade.buscarCidade();

    if (window.localStorage.getItem('refresh') === null) {
      window.localStorage.setItem('refresh', 'yes');
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  }
}
