/**
 * Language Switch: English (default) <-> Chinese
 * Toggles html[lang] between "en" and "zh".
 * Syncs both nav button (#lang-switch) and rightside button (#lang-switch-bottom).
 * Persists preference in localStorage across all pages.
 */
(function () {
  var STORAGE_KEY = 'blog-lang';
  var savedLang = localStorage.getItem(STORAGE_KEY) || 'en';

  // Apply immediately to prevent flash of wrong language
  document.documentElement.setAttribute('lang', savedLang);

  function updateButtons(lang) {
    // Nav bar button
    var navBtn = document.getElementById('lang-switch');
    if (navBtn) {
      var span = navBtn.querySelector('span');
      if (span) span.textContent = lang === 'en' ? ' 中' : ' EN';
      navBtn.title = lang === 'en' ? '切换为中文' : 'Switch to English';
    }
    // Rightside button
    var sideBtn = document.getElementById('lang-switch-bottom');
    if (sideBtn) {
      sideBtn.textContent = lang === 'en' ? '中' : 'EN';
      sideBtn.title = lang === 'en' ? '切换为中文' : 'Switch to English';
    }
  }

  function toggleLang() {
    var current = document.documentElement.getAttribute('lang') || 'en';
    var next = current === 'en' ? 'zh' : 'en';
    document.documentElement.setAttribute('lang', next);
    localStorage.setItem(STORAGE_KEY, next);
    updateButtons(next);
  }

  document.addEventListener('DOMContentLoaded', function () {
    updateButtons(savedLang);
    var navBtn = document.getElementById('lang-switch');
    var sideBtn = document.getElementById('lang-switch-bottom');
    if (navBtn) navBtn.addEventListener('click', toggleLang);
    if (sideBtn) sideBtn.addEventListener('click', toggleLang);
  });
})();
