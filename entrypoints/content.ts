export default defineContentScript({
  matches: ['*://*.youtube.com/*'],
  main() {
    const isYouTube: boolean = window.location.hostname.includes('youtube.com');
    const isAndroid: boolean = (() => /Android/i.test(navigator.userAgent))();

    if (isYouTube && isAndroid) {
      Object.defineProperties(document, {
        hidden: { value: false },
        visibilityState: { value: 'visible' },
      });

      window.addEventListener(
        'visibilitychange',
        (evt) => {
          evt.stopImmediatePropagation();
        },
        true,
      );
    }
  },
});
