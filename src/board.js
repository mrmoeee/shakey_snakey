import Snake from './snake.js';
import SnakeFood from './snakeFood.js';

const canvas = document.getElementById('snake_canvas');
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const snake = new Snake();
const food = new SnakeFood(width, height);
let playing = true;

class Board {

  constructor() {
    this.feedingGround = new Array(width/20);
    for(let i = 0; i < width/20; i++) {
      this.feedingGround[i] = new Array(width/20);
    }
  }

}






export default Board;
