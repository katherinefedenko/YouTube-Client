export default class ClipView {
  static scroll() {
    const slider = document.querySelector('.clips__wrapper');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('pointerdown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      // eslint-disable-next-line prefer-destructuring
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('pointerleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('pointerup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('pointermove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    });
  }
}
