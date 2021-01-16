let isCleared = window.localStorage.getItem('isCleared');
if (isCleared != "true") {
  let keysToDelete = ['val1', 'val2', 'val3'];

  for (let i = 0; i < window.localStorage.length;) {
    let key = window.localStorage.key(i);

    if (keysToDelete.includes(key)) {
      window.localStorage.removeItem(key);
    } else {
      i++;
    }
  }

  window.localStorage.setItem('isCleared', true);
}
