class Shape {
    constructor(x, y, radius, color, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
        this.growing = false;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update(canvas) {
        if (!this.growing) {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                this.speedX = -this.speedX;
            }
            if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                this.speedY = -this.speedY;
            }
        }
    }

    checkCollision(other) {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.radius + other.radius) {
            if (this.color === '#d53e4f' && !this.growing) { 
                this.growing = true; 
                this.radius += 10; 
                setTimeout(() => {
                    this.radius -= 10; 
                    this.growing = false;
                }, 300);

                this.speedX = 0;
                this.speedY = 0;

                changeBackgroundColor();
            }
            return true;
        }
        return false;
    }
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const music = document.getElementById('backgroundMusic');
let musicStarted = false;

const userObject = new Shape(100, 100, 20, '#d53e4f', 0, 0);
const objects = [
    new Shape(200, 200, 20, '#f46d43', 2, 2),
    new Shape(400, 300, 20, '#fdae61', -2, 2),
    new Shape(600, 400, 20, '#fee08b', 2, -2),
    new Shape(250, 100, 20, '#e6f598', 2, -2),
    new Shape(450, 500, 20, '#abdda4', -2, 2),
    new Shape(500, 550, 20, '#66c2a5', 2, 2),
    new Shape(300, 400, 20, '#3288bd', 2, -2),
    new Shape(600, 500, 20, '#5e4fa2', -2, 2),
];

function changeBackgroundColor() {
    const r = Math.floor(Math.random() * 150 + 150); 
    const g = Math.floor(Math.random() * 150 + 150); 
    const b = Math.floor(Math.random() * 150 + 150); 

    const randomColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = randomColor;
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    userObject.update(canvas);
    userObject.draw(ctx);

    objects.forEach(obj => {
        obj.update(canvas);
        obj.draw(ctx);
        userObject.checkCollision(obj);
        objects.forEach(otherObj => {  
            if (obj !== otherObj) {
                obj.checkCollision(otherObj);
            }
        });
    });

    requestAnimationFrame(update);
}


$(document).keydown(function(e) {

    if (!musicStarted) {
        music.play();
        musicStarted = true;
    }

    switch (e.which) {
        case 37: // left
            userObject.speedX = -5;
            break;
        case 38: // up
            userObject.speedY = -5;
            break;
        case 39: // right
            userObject.speedX = 5;
            break;
        case 40: // down
            userObject.speedY = 5;
            break;
    }
});

$(document).keyup(function(e) {
    if (!userObject.growing) { 
        userObject.speedX = 0;
        userObject.speedY = 0;
    }
});

update();
