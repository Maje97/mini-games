const background = document.querySelector('.js-background');
const character = document.querySelector('.js-character');
const textbox = document.querySelector('js-textbox');
const UI = document.querySelector('js-ui');

function startGame() {
    background.innerHTML = `<img class="vn-background" src="visualnovel-assets/backgrounds/cave.png">`;
    character.innerHTML = `<img class="vn-charleft" src="visualnovel-assets/characters/GRC2018005_001.png>`;
}