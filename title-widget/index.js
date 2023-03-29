const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let titleElement = document.getElementById('title-text')

titleElement.innerText = params.text;

