const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class User {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    design() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
    }
}

class Bullet {
    constructor(x, y, radius, color, velocity) {

        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity

    }

    design() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
    }

    change() {
        this.design()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}

const x = canvas.width / 2
const y = canvas.height / 2

const user = new User(x, y, 30, 'blue')

const bullet = new Bullet(canvas.width / 2, canvas.height / 2, 5, 'green', {
        x:-1,
        y:-1
    })

const bullets = []

function animate() {
    requestAnimationFrame (animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    user.design()
    bullets.forEach(bullet=> {
        bullet.change()
    });
}

addEventListener('click', (event) => {
    const angle = Math.atan2(event.clientY - canvas.height / 2, event.clientX - canvas.width / 2)
    const velocity = {
        x: Math.cos(angle),
        y: Math.sin(angle)
    }
    
    bullets.push(new Bullet(canvas.width / 2, canvas.height / 2, 5, 'red', velocity)
    )
})

animate()