const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const phoneDisplay = document.getElementById("phone-display");
let selectedDigits = [];

function updatePhoneDisplay() {
  const padded = selectedDigits.join("").padEnd(10, "-");
  phoneDisplay.textContent = `Your Phone Number: ${padded}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(100, 255)} ${random(100, 255)} ${random(100, 255)})`;
}

class Ball {
  constructor(x, y, velX, velY, color, size, digit) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
    this.digit = digit;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();

    // numbers
    ctx.fillStyle = "white";
    ctx.font = `${this.size}px sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.digit, this.x, this.y);
  }

  update() {
    if (this.x + this.size >= width || this.x - this.size <= 0) {
      this.velX = -this.velX;
    }

    if (this.y + this.size >= height || this.y - this.size <= 0) {
      this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetect() {
    for (const other of balls) {
      if (this !== other) {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + other.size) {
          // Swap digits
          const tempDigit = this.digit;
          this.digit = other.digit;
          other.digit = tempDigit;

          // color swap
          const tempColor = this.color;
          this.color = other.color;
          other.color = tempColor;
        }
      }
    }
  }

  isClicked(mouseX, mouseY) {
    const dx = this.x - mouseX;
    const dy = this.y - mouseY;
    return Math.sqrt(dx * dx + dy * dy) <= this.size;
  }
}

const balls = [];
const digits = [...Array(10).keys(), ...Array(10).keys()];
digits.forEach((digit) => {
  const size = 30;
  const ball = new Ball(
    random(size, width - size),
    random(size + 50, height - size),
    random(-5, 5),
    random(-5, 5),
    randomRGB(),
    size,
    digit.toString()
  );
  balls.push(ball);
});

// click
canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  for (const ball of balls) {
    if (ball.isClicked(mouseX, mouseY) && selectedDigits.length < 10) {
      selectedDigits.push(ball.digit);
      updatePhoneDisplay();
      break;
    }
  }
});

function loop() {
  ctx.fillStyle = "rgb(0 0 0 / 30%)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  requestAnimationFrame(loop);
}

updatePhoneDisplay();
loop();
