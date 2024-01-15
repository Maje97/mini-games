const background = document.querySelector('.js-background');
const charleft = document.querySelector('.js-charleft');
const charmiddle = document.querySelector('.js-charmiddle');
const charright = document.querySelector('.js-charright');
const narrator = document.querySelector('.js-narrator');
const textbox = document.querySelector('.js-textbox');
const buttonbox = document.querySelector('.js-buttonbox');
const UI = document.querySelector('.js-ui');
let slide = 0;

function startGame() {
    background.innerHTML = `<img class="vn-background" src="visualnovel-assets/backgrounds/cave.png">`;
    charleft.innerHTML = `<img class="vn-char" src="visualnovel-assets/characters/GRC2018005_001.png">`;
    charmiddle.innerHTML = `<img class="vn-char" src="visualnovel-assets/characters/GRC2018005_001.png">`;
    charright.innerHTML = `<img class="vn-char" src="visualnovel-assets/characters/GRC2018005_001.png">`;
    narrator.innerHTML = `<h2>Hej</h2>`;
    textbox.innerHTML = `<p class="vnp">hej</p>`;
    buttonbox.innerHTML = `<button class="nextbutton" onclick="nextSlide()"></button>`;
}

function nextSlide() {
    slide++;

    switch(slide) {
        case 1:     
            background.innerHTML = `<img class="vn-background" src="visualnovel-assets/backgrounds/cave.png">`;
            charleft.innerHTML = `<img class="vn-char" src="visualnovel-assets/characters/GRC2018005_001.png">`;
            charmiddle.innerHTML = `<img class="vn-char" src="visualnovel-assets/characters/GRC2018005_001.png">`;
            charright.innerHTML = `<img class="vn-char" src="visualnovel-assets/characters/GRC2018005_001.png">`;
            narrator.innerHTML = `<h2></h2>`;
            textbox.innerHTML = `<p class="vnp"></p>`;
        break;
        case 2: 
            background.innerHTML = `<img class="vn-background" src="visualnovel-assets/backgrounds/cave.png">`;
            charleft.innerHTML = `<img class="vn-char" src="visualnovel-assets/characters/GRC2018005_001.png">`;
            charmiddle.innerHTML = `<img class="vn-char" src="visualnovel-assets/characters/GRC2018005_001.png">`;
            charright.innerHTML = `<img class="vn-char" src="visualnovel-assets/characters/GRC2018005_001.png">`;
            narrator.innerHTML = `<h2></h2>`;
            textbox.innerHTML = `<p class="vnp"></p>`;
        break;
        case 3: 
            background.innerHTML = `<img class="vn-background" src="visualnovel-assets/backgrounds/cave.png">`;
            charleft.innerHTML = `<img class="vn-char" src="visualnovel-assets/characters/GRC2018005_001.png">`;
            charmiddle.innerHTML = `<img class="vn-char" src="visualnovel-assets/characters/GRC2018005_001.png">`;
            charright.innerHTML = `<img class="vn-char" src="visualnovel-assets/characters/GRC2018005_001.png">`;
            narrator.innerHTML = `<h2></h2>`;
            textbox.innerHTML = `<p class="vnp"></p>`;
        break;
        default:
            background.innerHTML = ``;
            charleft.innerHTML = ``;
            charmiddle.innerHTML = ``;
            charright.innerHTML = ``;
            narrator.innerHTML = `<h2>Character sprites: Spritebase on itch.io.</h2>
            <h2>Backgrounds: Uncle Matt on itch.io.</h2>
            <h2>Design start button: Wenrexa on itch.io.</h2>
            <h2>Design play button: Iconduck.</h2>`;
            textbox.innerHTML = `<p class="vnp">Tack för att du spelat! Ladda om sidan om du vill spela igen.</p>`;
            buttonbox.innerHTML = ``;
        break;
    }

    console.log(slide);
}