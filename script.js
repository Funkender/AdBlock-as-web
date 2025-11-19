(function() {
  const form = document.getElementById('searchForm');
  const qEl = document.getElementById('q');
  const engineEl = document.getElementById('engine');

  // Auf iOS/Safari: direkte Navigation statt window.open (vermeidet Blocker).
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const q = qEl.value.trim();
    if (!q) return;

    let url = '';
    switch (engineEl.value) {
      case 'duckduckgo':
        url = 'https://duckduckgo.com/?q=' + encodeURIComponent(q);
        break;
      case 'bing':
        url = 'https://www.bing.com/search?q=' + encodeURIComponent(q);
        break;
      case 'google':
        url = 'https://www.google.com/search?q=' + encodeURIComponent(q);
        break;
      case 'youtube':
        url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q);
        break;
      case 'wikipedia':
        url = 'https://de.wikipedia.org/wiki/Special:Search?search=' + encodeURIComponent(q);
        break;
      default:
        url = 'https://duckduckgo.com/?q=' + encodeURIComponent(q);
    }

    // Direkter Wechsel (gleicher Tab) – am zuverlässigsten auf iOS.
    window.location.href = url;
  });
})();

