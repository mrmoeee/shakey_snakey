import Snake from './snake.js';
import SnakeFood from './snakeFood.js';
import Board from './board.js';

const canvas = document.getElementById('snake_canvas');
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const snake = new Snake();
const food = new SnakeFood(width, height);
const board = new Board();
let playing = true;

window.addEventListener('keydown', keyPressed);

function randomSpawn() {
  const boundsW = Math.floor(width/snake.scl);
  const boundsH = Math.floor(height/snake.scl);
  let col = Math.floor(Math.random() * boundsW);
  let row =  Math.floor(Math.random() * boundsH);
  snake.x = col;
  snake.y = row;
}
function spawnFood() {
  const boundsW = Math.floor(width/20);
  const boundsH = Math.floor(height/20);
  let col = Math.floor(Math.random() * boundsW);
  let row = Math.floor(Math.random() * boundsH);
  food.x = col;
  food.y = row;
  //board still testin
  // board.feedingGround[food.x][food.y] = food;
}

function keyPressed(e) {
  let code = e.keyCode;
  if (code === 37) {
    snake.direction(-1, 0);
  } else if (code === 38) {
    snake.direction(0, -1);
  } else if (code === 39) {
    snake.direction(1, 0);
  } else if (code === 40) {
    snake.direction(0, 1);
  } else if (code === 32) {
    playing = !playing;
    if (playing) {
      draw();
    }
  }
}

function wallCollision() {
  const bounds = Math.floor(width/20);
  if (snake.x >= bounds) {
    return true;
  } else if (snake.y >= bounds) {
    return true;
  } else if (snake.x < 0) {
    return true;
  } else if (snake.y < 0) {
    return true;
  } else {
    return false;
  }
}

function foodCollision() {

  let rect1 = snake;
  let rect2 = food;

  if ((((rect2.x > rect1.x)
      && (rect2.x < (rect1.x + rect1.width)))
      || (((rect2.x + rect2.width) > rect1.x)
      && ((rect2.x + rect2.width) < (rect1.x + rect1.width))))
      || (((rect2.y > rect1.y)
      && (rect2.y < (rect1.y + rect1.height)))
      || (((rect2.y + rect2.height) > rect1.y)
      && ((rect2.y + rect2.height) < (rect1.y + rect1.height))))) {
        console.log('no collision');
    return false;
  } else {
    console.log('collision');
    return true;
  }
}


function draw() {
  //draw canvas
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, width, height);
  if (wallCollision(canvas.width, canvas.height)) {
    playing = !playing;
    console.log('collided with walls', snake.x, 'x', snake.y, 'y');
  }
  if (foodCollision()) {
    snake.size++;
    spawnFood();
    console.log('yes');
  }
  food.show(ctx);
  snake.show(ctx);
  snake.update();
  if (playing) {
    setTimeout(draw, 1000/10);
  }
}

// setup();
draw();
