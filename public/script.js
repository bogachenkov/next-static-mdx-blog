var app_color_themes = {
  light: {
    body: '#FFFFFF',
    text: '#444444',
    heading: '#50507F',
    header: '#E7F5FF',
    icon: 'hsl(210 10% 30%)',
    'icon-hover': '#444444', 
    primary: '#22B8CF',
    secondary: '#E3FAFC',
    black: '#444444',
    gray: '#868E96',
    'gray-light': '#F1F3F5',
    white: '#FFFFFF',
  },
  dark: {
    body: '#0E141B',
    text: '#FFFFFF',
    heading: '#50507F',
    header: '#182635',
    icon: 'hsl(210 10% 70%)',
    'icon-hover': '#FFFFFF',
    primary: '#22B8CF',
    secondary: '#E3FAFC',
    black: '#444444',
    gray: '#868E96',
    'gray-light': '#F1F3F5',
    white: '#FFFFFF',
  }
};(function() {
  function setCssProperties(mode) {
    for (var styleKey in app_color_themes[mode]) {
      document.querySelector('html').style.setProperty('--color-' + styleKey, app_color_themes[mode][styleKey]);
    }
  }
  try {
    var theme = localStorage.getItem('prefered-theme');
    var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
    if (!theme && supportDarkMode) {
      setCssProperties('dark');
    } else {
      setCssProperties(theme || 'light')
    }
  } catch (error) {console.log(error)}
})();

