//  import App from '../../controllers/App';

export default class SearchBoxView {
  static renderSearchBox() {
    const form = document.createElement('form');
    form.innerHTML = `<input type="search" name="youtubeSearch" id="userText" value="JavaScript">
    <button id="button">Search</button>`;
    document.body.appendChild(form);
    const userRequest = document.querySelector('#userText');
    /*
    const button = document.querySelector('#button');
    button.addEventListener('click', () => {
      this.userRequest = userRequest.value;
      const appContr = new App('AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y', this.userRequest);
      appContr.start();
      userRequest.value = '';
    });
    */
    return userRequest.value;
  }
}
