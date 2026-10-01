const menu = document.querySelector('.menu-button');
const navigation = document.querySelector('#navigation');
menu?.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('open', !expanded);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
    menu.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('open');
    menu.focus();
  }
});

// Lenis manages the lenis / lenis-smooth classes and the animation frame loop.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
let smoothScroll = null;
function configureScrolling() {
  smoothScroll?.destroy();
  smoothScroll = null;
  if (motionPreference.matches || typeof window.Lenis !== 'function') return;
  smoothScroll = new window.Lenis({
    autoRaf: true,
    smoothWheel: true,
    lerp: 0.085,
    anchors: { offset: -105 },
  });
}
configureScrolling();
motionPreference.addEventListener('change', configureScrolling);
