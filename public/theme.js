;var THEME_COLORS = {
  light: {
    body: '#FFFFFF',
    text: '#444444',
    // header: '#FFFFFF90',
    heading: '#50507F',
    header: '#E7F5FF',
    icon: 'hsl(210 10% 30%)',
    'icon-hover': '#444444',
  },
  dark: {
    body: '#0E141B',
    text: '#FFFFFF',
    // header: '0E141B90',
    heading: '#50507F',
    header: '#182635',
    icon: 'hsl(210 10% 70%)',
    'icon-hover': '#FFFFFF'
  }
};(function initTheme() {
  var theme = localStorage.getItem('prefered-theme') || 'light';
  for (var styleKey in THEME_COLORS[theme]) {
    document.querySelector('html').style.setProperty('--color-' + styleKey, THEME_COLORS[theme][styleKey]);
  }
})();