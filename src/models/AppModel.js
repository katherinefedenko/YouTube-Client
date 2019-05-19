export default class AppModel {
  static extractChannelTitle(data) {
    return data.items.map(clip => clip.snippet.channelTitle);
  }

  static extractVideoTitle(data) {
    return data.items.map(clip => clip.snippet.title);
  }

  static extractVideoImage(data) {
    return data.items.map(clip => clip.snippet.thumbnails.medium.url);
  }

  static extractVideoDate(data) {
    return data.items.map(clip => clip.snippet.publishedAt);
  }

  static extractVideoDescription(data) {
    return data.items.map(clip => clip.snippet.description);
  }

  static extractVideoId(data) {
    return data.items.map(clip => clip.id.videoId);
  }
}
