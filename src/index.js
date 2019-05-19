import SearchBoxView from './views/SearchBoxView/SearchBoxView';
import App from './controllers/App';

const userRequest = SearchBoxView.renderSearchBox();
const appContr = new App('AIzaSyCT6epgLObp8qMMwfyeS9CQfhr-BScIaMU', userRequest);
appContr.start();
