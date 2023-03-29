const darkModeBg = '#191919';
const lightModeBg = '#ffffff';
const quoteApi = 'https://api.quotable.io/random';

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let titleElement = document.getElementById('title-text');

fetch(`${quoteApi}${params.maxLength ? `?maxLength=${params.maxLength}`: ''}`)
  .then(res => res.json())
  .then(json => titleElement.innerHTML = `<strong>"</strong>${json.content}<strong>"</strong> —${json.author}`)

titleElement.className = params.font ? `font-${params.font}` : 'font-default';
titleElement.style.fontSize = params.size ? `${params.size}px` : '32px';

document.body.style.backgroundColor = params.dark ? darkModeBg : lightModeBg;
titleElement.style.color = params.dark ? 'white' : 'black';