import DefinirHora from './modules/getHour.js';
import BuscaTempo from './modules/buscaTempo.js';
import SetImage from './modules/background.js';

const hora = new DefinirHora();
hora.definirHora();

const buscaTempo = new BuscaTempo('Bebedouro', hora.hora);

const setImage = new SetImage();
setImage.init();

const btn = document.querySelector('.btnEnviar');
const city = document.getElementById('cidade');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  setImage.init();
  buscaTempo.cidade = city.value;
  buscaTempo.init();
});

buscaTempo.init();
