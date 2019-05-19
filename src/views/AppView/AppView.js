export default class AppView {
  constructor(titles) {
    this.titles = titles;
    this.watchURL = 'https://www.youtube.com/watch?v=';
  }

  render() {
    const {
      channelTitle, videoTitle, videoImage, videoDate, videoDescription, videoId,
    } = this.titles;
    const clipWrapper = document.createElement('div');
    clipWrapper.className = 'clips__wrapper';
    document.body.appendChild(clipWrapper);

    const icons = document.createElement('link');
    icons.innerHTML = '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">';
    document.head.appendChild(icons);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 15; i++) {
      const clip = document.createElement('div');
      clip.className = 'clip';
      clipWrapper.appendChild(clip);

      const vTitle = document.createElement('div');
      vTitle.innerHTML = `<a href="${this.watchURL}${videoId[i]}">${videoTitle[i]}</a>`;

      const chTitle = document.createElement('div');
      chTitle.className = 'info__wrapper';
      chTitle.innerHTML = `<i class="icon fas fa-user"></i><div>${channelTitle[i]}</div>`;

      const vImage = document.createElement('div');
      vImage.innerHTML = `<img src="${videoImage[i]}">`;

      const vDate = document.createElement('div');
      vDate.className = 'info__wrapper';
      vDate.innerHTML = `<i class=" icon far fa-calendar-alt"></i><div>${videoDate[i].slice(0, 10)}</div>`;

      const vDescription = document.createElement('div');
      vDescription.innerHTML = `<div>${videoDescription[i]}</div>`;

      clip.appendChild(vImage);
      clip.appendChild(vTitle);
      clip.appendChild(chTitle);
      clip.appendChild(vDate);
      clip.appendChild(vDescription);
    }
  }
}
