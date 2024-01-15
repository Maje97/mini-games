const droplinks = document.querySelector('.droplinks');

function mobileMenu () {
    droplinks.innerHTML =  `<a href="index.html" target="_self">Hem</a>
    <a href="stensaxpase.html" target="_self">Sten Sax Påse</a>
    <a href="visualnovel.html" target="_self">Visual novel</a>
    <a href="virtuellthusdjur.html" target="_self">Virtuellt husdjur</a>
    <a href="kontakt.html" target="_self">Kontakt</a>`;
}

function eraseMenu () {
    droplinks.innerHTML = '';
}