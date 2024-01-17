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
    charleft.innerHTML = `<img class="vn-char" src="visualnovel-assets/characters/bla09.png">`;
    charmiddle.innerHTML = `<img class="vn-char" src="visualnovel-assets/characters/gran08.png">`;
    charright.innerHTML = `<img class="vn-char" src="visualnovel-assets/characters/rosa05.png">`;
    narrator.innerHTML = `<h2>och det här är dina medarbetare.</h2>`;
    textbox.innerHTML = `<p class="vnp">Den blåa Uvron, gröna Zocon och rosa Demik.</p>`;
    buttonbox.innerHTML = `<button class="nextbutton" onclick="nextSlide()"></button>`;
}

function nextSlide() {
    slide++;

    switch(slide) {
        case 1:     
            charleft.innerHTML = `<img class="vn-char" src="visualnovel-assets/characters/bla09.png">`;
            charmiddle.innerHTML = `<img class="vn-char" src="visualnovel-assets/characters/gran08.png">`;
            charright.innerHTML = `<img class="vn-char" src="visualnovel-assets/characters/rosa05.png">`;
            narrator.innerHTML = `<h2>och det här är dina medarbetare.</h2>`;
            textbox.innerHTML = `<p class="vnp">Ni arbetar med att utforska andra planeter. Lycka till.</p>`;
            buttonbox.innerHTML = `<button class="nextbutton" onclick="nextSlide()"></button>`;
        break;
        case 2: 
            background.innerHTML = `<img class="vn-background" src="visualnovel-assets/backgrounds/hovel_int.png">`;
            charleft.innerHTML = ``;
            charmiddle.innerHTML = ``;
            charright.innerHTML = ``;
            narrator.innerHTML = `<h2></h2>`;
            textbox.innerHTML = `<p class="vnp"></p>`;
        break;
        case 3: 
            charmiddle.innerHTML = `<img class="vn-char" src="visualnovel-assets/characters/orange10.png">`;
            textbox.innerHTML = `<p class="vnp">Y/N - Wow! Äntligen har jag fått mitt drömjobb! Nu ska det bli äventyr!</p>`;
        break;
        case 4:
            charright.innerHTML = `<img class="vn-char flip" src="visualnovel-assets/characters/rosa03.png">`;
            textbox.innerHTML = `<p class="vnp">Demik - Får se vad du säger om det efter ditt första uppdrag. Det är tråkigare än vad man kan tro.</p>`;
        break;
        case 5:
            charmiddle.innerHTML = `<img class="vn-char" src="visualnovel-assets/characters/orange07.png">`;
            textbox.innerHTML = `<p class="vnp">Demik - Bara samla på sig växtprover, sedement och annat skit. I bästa fall hittar vi någon levande mikrob.</p>`;
        break;
        case 6:
            charleft.innerHTML = `<img class="vn-char flip" src="visualnovel-assets/characters/bla06.png">`;
            charright.innerHTML = `<img class="vn-char" src="visualnovel-assets/characters/rosa05.png">`;
            textbox.innerHTML = `<p class="vnp">Uvron - Demik! Sluta bråka med vår nya arbetskamrat!</p>`;
        break;
        case 7:
            textbox.innerHTML = `<p class="vnp">Demik - Kom igen Uvron! Jag bara retades lite. <3 Ses senare nykomling.</p>`;
        break;
        case 8:
            charleft.innerHTML = `<img class="vn-char" src="visualnovel-assets/characters/bla09.png">`;
            charright.innerHTML = ``;
            textbox.innerHTML = `<p class="vnp">Uvron - Du får ursäkta Demiks beteende. Hen gillar att retas och såg nog att du ser fram emot vårt uppdrag.</p>`;
        break;
        case 9:
            charmiddle.innerHTML = `<img class="vn-char" src="visualnovel-assets/characters/orange10.png">`;
            textbox.innerHTML = `<p class="vnp">Uvron - Som arbetsledare uppskattar jag din entusiasm. Håll dig till mig så ska jag lära dig att bli en ordentlig utforskare.</p>`;
        break;
        case 10:
            textbox.innerHTML = `<p class="vnp">Y/N - Tack!</p> <p class="vnp">Uvron - Jag gör bara mitt jobb. Gå och hjälp Zocon innan vi anländer.</p>`;
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