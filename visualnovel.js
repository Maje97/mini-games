const background = document.querySelector('.js-background');
const charleft = document.querySelector('.js-charleft');
const charmiddle = document.querySelector('.js-charmiddle');
const charright = document.querySelector('.js-charright');
const narrator = document.querySelector('js-narrator');
const textbox = document.querySelector('js-textbox');
const buttonbox = document.querySelector('js-buttonbox');
const UI = document.querySelector('js-ui');

function startGame() {
    background.innerHTML = `<img class="vn-background" src="visualnovel-assets/backgrounds/cave.png">`;
    charleft.innerHTML = `<img class="vn-char" src="visualnovel-assets/characters/GRC2018005_001.png">`;
    charmiddle.innerHTML = `<img class="vn-char" src="visualnovel-assets/characters/GRC2018005_001.png">`;
    charright.innerHTML = `<img class="vn-char" src="visualnovel-assets/characters/GRC2018005_001.png">`;
    narrator.innerHTML = `<h1>Välkommen</h1>`;
    textbox.innerHTML = `<h1>Hej</h1>`;
    buttonbox.innerHTML = ``;
}