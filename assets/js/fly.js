const canvas = document.querySelector('canvas');
const startGameBtn = document.querySelector('#startGameBtn');
const modalEl = document.querySelector('#modalEl');
const modal2 = document.querySelector('#modal2');
const bigScoreEl = document.querySelector('#bigScoreEl');
const bigScore2 = document.querySelector('#bigScore2');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 400;

let particlesArray = [];
let obstaclesArray = [];

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gamespeed = 2;

const gradiant = ctx.createLinearGradient(0, 0, 0, 70);
gradiant.addColorStop('0.25', '#fff');
gradiant.addColorStop('0.45', '#000');
gradiant.addColorStop('0.55', '#4040ff');
gradiant.addColorStop('0.65', '#000');
gradiant.addColorStop('0.85', '#fff');

const background = new Image() ;
background.src = 'assets/images/BG.png';
const BG = {
    x1: 0,
    x2: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height
};
function handleBackground(){
    if (BG.x1 <= -BG.width + gamespeed) BG.x1 = BG.width;
    else BG.x1 -= gamespeed;
    if (BG.x2 <= -BG.width + gamespeed) BG.x2 = BG.width;
    else (BG.x2-= gamespeed);
    ctx.drawImage(background, BG.x1, BG.y, BG.width, BG.height) ;
    ctx.drawImage(background, BG.x2, BG.y, BG.width, BG.height) ;
}

function init() {
    obstaclesArray = [];
    particlesArray = [];
    score = 0;
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.fillRect(10, 10, 50, 50);
    handleBackground();
    handleObstacles();
    handleParticles();
    bird.update();
    bird.draw();
    ctx.fillStyle = gradiant ;
    ctx.font = '90px sans-serif';
    ctx.strokeText(score, 450, 70);
    ctx.fillText(score, 450, 70);
    handleCollisions();
    if (handleCollisions()) return;
    requestAnimationFrame(animate);
    angle+=0.06;
    hue++;
    frame++;
}

window.addEventListener('keydown', function(e) {
    if (e.code === 'Space') spacePressed = true;
});
window.addEventListener('touchstart', function(e){
    spacePressed = true;
});
window.addEventListener('keyup', function(e) {
    if (e.code === 'Space') spacePressed = false;
    bird.frameX = 0;
});
window.addEventListener('touchend', function(e){
    spacePressed = false;
    bird.frameX = 0;
});


const hit = new Image();
hit.src = 'assets/images/hit.png';
function handleCollisions() {
    for (let i = 0; i < obstaclesArray.length; i++) {
        if (bird.x < obstaclesArray[i].x + obstaclesArray[i].width && 
            bird.x + bird.width > obstaclesArray[i].x &&
            ((bird.y < 0 + obstaclesArray[i].top && bird.y + bird.height > 0) ||
            (bird.y > canvas.height - obstaclesArray[i].bottom &&
            bird.y + bird.height < canvas.height))){
                ctx.drawImage(hit, bird.x, bird.y, 50, 50); 
                modal2.style.display = 'flex';
                bigScore2.innerHTML = score;
                
                return true;
            }
    }
}

startGameBtn.addEventListener('click', ()=> {
    init();
    animate();
    modalEl.style.display = 'none';
});