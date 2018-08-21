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

function randomSpawn() {
    let x = Math.floor(Math.random() * width/snake.scl);
    let y = Math.floor(Math.random() * height/snake.scl);
    snake.x = x;
    snake.y = y;
  }
function spawnFood() {
  let x = Math.floor(Math.random() * width/20);
  let y = Math.floor(Math.random() * height/20);
  food.x = x;
  food.y = y;
  board.feedingGround[food.x][food.y] = food;
  console.log(board);
}
// board.createBoard();
function setup() {
  spawnFood(width, height, board);
  randomSpawn(width, height);
}

function draw() {
  //draw canvas
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, width, height);
  if (snake.willCollideWall(canvas.width, canvas.height)) {
    playing = !playing;
    console.log('collided with walls', snake.x, 'x', snake.y, 'y');
  } else {
    snake.show(ctx);
    snake.update();
    food.show(ctx);

    if (playing) {
      setTimeout(draw, 1000/10);
    }
    if (snake.eatFood(food)) {
      spawnFood(width, height, board);
    }
  }
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
setup();
window.addEventListener('keydown', keyPressed);
draw();
