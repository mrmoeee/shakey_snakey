import Snake from './snake.js';
import SnakeFood from './snakeFood.js';
import FeedingGround from './feedingGround.js';

const canvas = document.getElementById('snake_canvas');
const fg = new FeedingGround(canvas.width, canvas.height);
const reset = document.getElementById('reset-box');

if (fg.playing){
  fg.start(canvas);
} 

reset.addEventListener('click', restart);

function restart() {
  fg.snake.alive = true;
  fg.snake.eaten = '';
  fg.playing = true;
  fg.start(canvas);
  reset.style.zIndex = -1;
}

window.addEventListener('keydown', keyPressed);

function keyPressed(e) {
  let code = e.keyCode;
  if (code === 37) {
    fg.snake.move = 'left';
    fg.snake.direction(-0.3, 0, 'left');
  } else if (code === 38) {
    fg.snake.move = 'up';
    fg.snake.direction(0, -0.3, 'up');
  } else if (code === 39) {
    fg.snake.move = 'right';
    fg.snake.direction(0.3, 0, 'right');
  } else if (code === 40) {
    fg.snake.move = 'down';
    fg.snake.direction(0, 0.3, 'down');
  } else if (code === 32) {
    fg.playing = !fg.playing;
  }
}
