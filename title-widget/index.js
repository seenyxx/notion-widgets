const darkModeBg = '#191919';
const lightModeBg = '#ffffff';


const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let titleElement = document.getElementById('title-text');

// Use query ?text to change the title text
if (params.text)
  titleElement.innerText = params.text;

titleElement.className = params.font ? `font-${params.font}` : 'font-default';
titleElement.style.fontSize = params.size ? `${params.size}px` : '72px';

document.body.style.backgroundColor = params.dark ? darkModeBg : lightModeBg;
titleElement.style.color = params.dark ? 'white' : 'black';

if (params.callout) {
  titleElement.parentElement.classList.add('callout');
}

if (params.callout && params.bg) {
  titleElement.parentElement.style.backgroundColor = `#${params.bg}`;
}

if (params.callout && params.paddingOverride) {
  titleElement.parentElement.style.padding = `${params.paddingOverride} 0`;
}

if (params.callout && params.borderRadiusOverride) {
  titleElement.parentElement.style.borderRadius = params.borderRadiusOverride;
}

if (params.italic) {
  titleElement.parentElement.classList.add('italics');
}

if (params.bold) {
  titleElement.parentElement.classList.add('bold');
}