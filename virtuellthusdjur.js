//Animation
const canvas = document.getElementById('playfield');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 300;
const CANVAS_HEIGHT = canvas.height = 300;

const spriteSheet = new Image();
spriteSheet.src = 'bilder/spritesheet.png';
const spriteWidth = 64;
let spriteSwitch = 0;
let gameFrame = 0;
let staggerFrames = 20;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(spriteSheet, (spriteSwitch + 3) * spriteWidth, 0, spriteWidth, 64, 118, 118, 64, 64);
    if (gameFrame % staggerFrames == 0){
        if (spriteSwitch < 2) spriteSwitch++;
        else spriteSwitch = 0;
    }

    gameFrame++;
    requestAnimationFrame(animate);
}
animate();
//spel

