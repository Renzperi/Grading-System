const myCanvas = document.getElementById("myCanvas");
const context = myCanvas.getContext("2d");
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

function Circle(x, y, radius, speed, color) {
  this.xPos = x;
  this.yPos = y;
  this.radius = radius;
  this.speed = speed;
  this.color = color;

  this.draw = function () {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
  };

  this.move = function () {
    if (this.xPost + this.radius > innerWidth || this.xPos - this.radius < 0) {
      this.speed = -this.speed;
    }

    if (this.yPos + this.radius > innerHeight || this.yPos - this.radius < 0) {
      this.speed = -this.speed;
    }

    const direction = [-1, 1];

    this.xPos += direction[Math.floor(Math.random() * 2)] * this.speed;
    this.yPos += direction[Math.floor(Math.random() * 2)] * this.speed;

    this.draw();
  };
}

const circleArray = [];
for (let i = 0; i < 500; i++) {
  let colors = ["#573b8b", "#425898", "#212874", "#252c62"];
  // colors[Math.floor(Math.random * colors.length)];
  let radius = 20;
  let x = myCanvas.width / 2 - 280;
  let y = myCanvas.height / 2;
  let speed = Math.random() * 9;
  let color = undefined;
  for (let c = 0; c < colors.length; c++) {
    color = colors[Math.floor(Math.random() * colors.length)];
  }
  circleArray.push(new Circle(x, y, radius, speed, color));
}

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].move();
  }
}

animate();
