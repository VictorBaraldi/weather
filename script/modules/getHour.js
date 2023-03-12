export default class DefinirHora {
  constructor() {
    this.dayName = new Array(
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',
    );
    this.monName = new Array(
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Agosto',
      'Outubro',
      'Novembro',
      'Dezembro',
    );
    this.data = new Date();
    this.hora = this.data.getHours();
    this.horaCerta = this.hora < 10 ? `0${this.hora}` : this.hora;
    this.minuto = this.data.getMinutes();
    this.minutoCerto = this.minuto < 10 ? `0${this.minuto}` : this.minuto;
    this.dia = this.data.getDate();
    this.diaSemana = this.data.getDay();
    this.mes = this.data.getMonth();
    this.ano = this.data.getFullYear();
    this.dataCompleta = `${this.horaCerta}:${this.minutoCerto} - ${
      this.dayName[this.diaSemana]
    }, ${this.dia} de ${this.monName[this.mes]} de ${this.ano}`;
  }
}
