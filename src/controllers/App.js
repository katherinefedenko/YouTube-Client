import AppView from '../views/AppView';
import APILoader from '../models/APILoader';
import ClipView from '../views/ClipsView/ClipView';

export default class App {
  constructor(key, userRequest) {
    this.key = key;
    this.userRequest = userRequest;
  }

  async start() {
    const api = new APILoader(this.key, this.userRequest);
    const data = await api.getResponse();
    const view = new AppView(data);
    view.render();
    ClipView.scroll();
  }
}
