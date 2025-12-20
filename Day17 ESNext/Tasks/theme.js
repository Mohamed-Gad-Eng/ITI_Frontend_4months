document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) {
    console.warn('themeToggle button not found.');
    return;
  }

  const STORAGE_KEY = 'theme-invert'; // 'invert' or 'light'

  // ensure there's an <i> inside the button
  let icon = toggle.querySelector('i');
  if (!icon) {
    icon = document.createElement('i');
    icon.className = 'fa-solid fa-moon light-icon';
    toggle.appendChild(icon);
  }

  // Remove any inline color attribute that may block CSS (we'll set color explicitly)
  icon.removeAttribute('style');

  // Helper to set icon classes + explicit color (covers stubborn inline styles)
  function setIcon(invertOn) {
    if (invertOn) {
      icon.className = 'fa-solid fa-sun dark-icon';
      icon.style.color = getComputedStyle(document.documentElement).getPropertyValue('--sun-color') || '#ffffff';
      toggle.setAttribute('title', 'Switch to light mode');
      toggle.setAttribute('aria-pressed', 'true');
    } else {
      icon.className = 'fa-solid fa-moon light-icon';
      icon.style.color = getComputedStyle(document.documentElement).getPropertyValue('--moon-color') || '#1a092b';
      toggle.setAttribute('title', 'Switch to dark mode');
      toggle.setAttribute('aria-pressed', 'false');
    }
  }

  // Apply mode (update body class + icon + persist)
  function applyMode(invertOn) {
    document.body.classList.toggle('invert', invertOn);
    setIcon(invertOn);
    try { localStorage.setItem(STORAGE_KEY, invertOn ? 'invert' : 'light'); } catch(e) {}
  }

  // Decide initial state: saved choice -> system -> default light
  const saved = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = (saved === 'invert') || (!saved && prefersDark);
  applyMode(initial);

  // Listen for user click
  toggle.addEventListener('click', () => {
    const now = !document.body.classList.contains('invert');
    applyMode(now);
  });

  // Optional: update if system preference changes, only when user hasn't chosen explicitly
  if (window.matchMedia) {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyMode(e.matches);
      }
    });
  }
});
