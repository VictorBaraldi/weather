export default class SetImage {
  constructor() {
    this.body = document.querySelector('body');
    this.photos = [
      '10',
      '11',
      '14',
      '16',
      '17',
      '19',
      '27',
      '28',
      '29',
      '33',
      '54',
      '57',
      '62',
      '66',
      '74',
      '77',
      '81',
      '106',
      '110',
      '124',
      '127',
      '128',
      '136',
      '147',
      '161',
      '162',
      '168',
      '176',
      '190',
      '199',
      '215',
      '216',
      '217',
    ];
  }
  async init() {
    const largura = window.screen.width;
    const altura = window.screen.height;
    const random = Math.floor(Math.random() * this.photos.length - 1);
    const response = await fetch(
      `https://picsum.photos/id/${this.photos[random]}/${largura}/${altura}`,
    );
    const url = response.url;
    setTimeout(() => {
      this.body.style.background = `url('${url}') no-repeat center center`;
      this.body.style.backgroundSize = 'cover';
    }, 1000);
  }
}
