import AppModel from './AppModel';

export default class APILoader {
  constructor(apiKey, userRequest) {
    this.baseURL = 'https://www.googleapis.com/youtube/v3/search';
    this.options = {
      key: apiKey,
      type: 'video',
      part: 'snippet',
      maxResults: '15',
      q: userRequest,
    };
  }

  makeURL() {
    const {
      key, type, part, maxResults, q,
    } = this.options;
    return `${this.baseURL}?key=${key}&type=${type}&part=${part}&maxResults=${maxResults}&q=${q}`;
  }

  async getResponse() {
    const response = await fetch(this.makeURL());
    const data = await response.json();
    const channelTitle = AppModel.extractChannelTitle(data);
    const videoTitle = AppModel.extractVideoTitle(data);
    const videoImage = AppModel.extractVideoImage(data);
    const videoDate = AppModel.extractVideoDate(data);
    const videoDescription = AppModel.extractVideoDescription(data);
    const videoId = AppModel.extractVideoId(data);
    this.videoInfo = {
      channelTitle,
      videoTitle,
      videoImage,
      videoDate,
      videoDescription,
      videoId,
    };
    return this.videoInfo;
  }
}
