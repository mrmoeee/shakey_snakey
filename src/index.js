import Snake from './snake.js';
import SnakeFood from './snakeFood.js';
import FeedingGround from './feedingGround.js';

const canvas = document.getElementById('snake_canvas');
const fg = new FeedingGround(canvas.width, canvas.height);
if (fg.playing){
  fg.start(canvas);
}

window.addEventListener('keydown', keyPressed);

function keyPressed(e) {
  let code = e.keyCode;
  if (code === 37) {
    fg.snake.move = 'left';
    fg.snake.direction(-1, 0, 'left');
  } else if (code === 38) {
    fg.snake.move = 'up';
    fg.snake.direction(0, -1, 'up');
  } else if (code === 39) {
    fg.snake.move = 'right';
    fg.snake.direction(1, 0, 'right');
  } else if (code === 40) {
    fg.snake.move = 'down';
    fg.snake.direction(0, 1, 'down');
  } else if (code === 32) {
    fg.playing = !fg.playing;
  }

}
