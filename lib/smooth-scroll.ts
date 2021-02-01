import smoothscroll from 'smoothscroll-polyfill';

let installed = false;

export default function scroll(options: ScrollToOptions) {
  if (!installed) {
    try {
      smoothscroll.polyfill();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('smoothscroll polyfill failed', e);
      return;
    }
    installed = true;
  }

  try {
    window.scroll({ behavior: 'smooth', ...options });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('smoothscroll polyfill failed', e);
  }
}

export const scrollTo = (el: HTMLElement, offset = 0) => {
  scroll({
    top: el.offsetTop + offset
  });
};
