import AppView from './AppView';

describe('AppView.prototype.render', () => {
  it('Should be an instance of a function', () => {
    expect(AppView.prototype.render).toBeInstanceOf(Function);
  });

  it('Should be render correctly', () => {
    const context = {
      titles: [
        'Video about JS',
      ],
    };
    AppView.prototype.render.call(context);
    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
