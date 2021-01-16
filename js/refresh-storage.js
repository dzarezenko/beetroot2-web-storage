let isCleared = window.localStorage.getItem('isCleared');
if (isCleared != "true") {
  let lang = window.localStorage.getItem('lang');
  let sound = window.localStorage.getItem('sound');

  window.localStorage.clear();

  window.localStorage.setItem('lang', lang);
  window.localStorage.setItem('sound', sound);

  window.localStorage.setItem('isCleared', true);
}
