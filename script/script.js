import DefinirHora from './modules/getHour.js';
import BuscaTempo from './modules/buscaTempo.js';

const hora = new DefinirHora();
const buscaTempo = new BuscaTempo('Bebedouro', hora.hora);

const btn = document.querySelector('.btnEnviar');
const city = document.getElementById('cidade');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  buscaTempo.cidade = city.value;
  buscaTempo.init();
});

console.log(hora.dataCompleta);
