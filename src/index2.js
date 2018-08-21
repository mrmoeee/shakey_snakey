import Snake from './snake.js';
import SnakeFood from './snakeFood.js';

const snake = new Snake();

let playing = true;

window.addEventListener('keydown', keyPressed);



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
  // food2.show(ctx);
  // food3.show(ctx);
  snake.show(ctx);
  snake.update();
  if (playing) {
    setTimeout(draw, 1000/10);
  }
}
