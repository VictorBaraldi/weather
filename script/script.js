import DefinirHora from './modules/getHour.js';
import BuscaTempo from './modules/buscaTempo.js';
import UserLocation from './modules/location.js';
let cidade;

const location = new UserLocation();
location.init();

const hora = new DefinirHora();
hora.definirHora();

if (window.localStorage.getItem('padrao') === null) cidade = 'Paris';
else cidade = window.localStorage.getItem('padrao');
console.log(cidade);

const buscaTempo = new BuscaTempo(cidade, hora.hora);
buscaTempo.init();

const btn = document.querySelector('.btnEnviar');
const city = document.getElementById('cidade');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  buscaTempo.cidade = city.value;
  buscaTempo.init();
});
