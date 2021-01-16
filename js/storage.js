let data = window.localStorage;
console.log(data);

function recordValue() {
  window.localStorage.setItem('name', "Alex");
}

document.write("Name: " + window.localStorage.getItem('name'));

//window.localStorage.clear();
