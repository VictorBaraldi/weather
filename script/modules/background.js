export default class SetImage {
  constructor() {
    this.body = document.querySelector('body');
    this.photos = [
      '10',
      '11',
      '12',
      '14',
      '16',
      '17',
      '19',
      '27',
      '28',
      '29',
      '33',
      '54',
      '59',
      '62',
      '66',
      '74',
      '77',
      '81',
      '83',
      '89',
      '93',
      '106',
      '109',
      '110',
      '120',
      '124',
      '127',
      '128',
      '132',
      '136',
      '147',
      '161',
      '162',
      '168',
      '176',
      '179',
      '184',
      '190',
      '191',
      '198',
      '199',
      '215',
      '216',
      '217',
      '218',
      '231',
      '235',
      '243',
      '247',
      '251',
      '267',
      '271',
      '278',
      '287',
      '289',
      '293',
      '294',
      '295',
      '296',
      '301',
    ];
  }
  async init() {
    const largura = window.screen.width;
    const altura = window.screen.height;
    const random = Math.floor(Math.random() * (this.photos.length - 1));
    const response = await fetch(
      `https://picsum.photos/id/${this.photos[random]}/${largura}/${altura}`,
    );
    const url = response.url;
    this.body.style.background = `url('${url}') no-repeat center center`;
    this.body.style.backgroundSize = 'cover';
  }
}
