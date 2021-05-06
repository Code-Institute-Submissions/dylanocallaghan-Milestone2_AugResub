class Obstacle {
    constructor() {
        this.top = (Math.random() * canvas.height/2.5) + 20;
        this.bottom = (Math.random() * canvas.height/2.5) + 20;
        this.x = canvas.width;
        this.width = 100;
        this.color = 'blue';
        this.counted = false;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, 0, this.width, this.top);
        ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
    }
    update() {
        this.x -= gamespeed;
        if(!this.counted && this.x < bird.x) {
            score++;
            if ((score%20) === 0) {
                gamespeed ++;
            }
            this.counted = true;
        }
        this.draw(); 
    }
}

function handleObstacles() {
    if (frame%100 ===0) {
        obstaclesArray.unshift(new Obstacle);
    }
    for (let i = 0; i < obstaclesArray.length; i++) {
        obstaclesArray[i].update();
    }
    if (obstaclesArray.length > 20) {
        obstaclesArray.pop(obstaclesArray[0]);
    }
}