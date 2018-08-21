import Snake from './snake.js';
import SnakeFood from './snakeFood.js';

class FeedingGround {

  constructor(width, height) {
    this.snake = new Snake();
    this.snakeFood = [
      new SnakeFood(20, 20, 'green'),
      new SnakeFood(20, 20, 'red'),
      new SnakeFood(20, 20, 'purple')
    ];
    this.width = width;
    this.height = height;

  }

  randomSpawn() {
    const boundsW = Math.floor(this.width/this.snake.scl);
    const boundsH = Math.floor(this.height/this.snake.scl);
    let col = Math.floor(Math.random() * boundsW);
    let row =  Math.floor(Math.random() * boundsH);
    this.snake.x = col;
    this.snake.y = row;
  }

  spawnFood(food) {
    const boundsW = Math.floor(this.width/20);
    const boundsH = Math.floor(this.height/20);
    let col = Math.floor(Math.random() * boundsW);
    let row = Math.floor(Math.random() * boundsH);
    food.x = col;
    food.y = row;
  }
  generateGrounds() {
    this.grounds = new Array(this.width/20);
    for(let i = 0; i < this.width/20; i++) {
      this.feedingGround[i] = new Array(this.width/20);
    }
  }

  wallCollision(width) {
    const bounds = Math.floor(this.width/20);
    if (this.snake.x >= bounds) {
      return true;
    } else if (this.snake.y >= bounds) {
      return true;
    } else if (this.snake.x < 0) {
      return true;
    } else if (this.snake.y < 0) {
      return true;
    } else {
      return false;
    }
  }

  foodCollision(food) {
    let rect1 = this.snake;
    let rect2 = this.food;
    if ((((rect2.x > rect1.x)
        && (rect2.x < (rect1.x + rect1.width)))
        || (((rect2.x + rect2.width) > rect1.x)
        && ((rect2.x + rect2.width) < (rect1.x + rect1.width))))
        || (((rect2.y > rect1.y)
        && (rect2.y < (rect1.y + rect1.height)))
        || (((rect2.y + rect2.height) > rect1.y)
        && ((rect2.y + rect2.height) < (rect1.y + rect1.height))))) {
      return false;
    } else {
      return true;
    }
  }
  foodGenerator() {
    let randomNum1 = Math.floor(Math.random() * this.snakeFood.length());
    let randomNum2 = Math.floor(Math.random() * this.snakeFood.length());
    let randomNum3 = Math.floor(Math.random() * this.snakeFood.length());
    this.spawnFood(this.snakeFood[randomNum1]);
    this.spawnFood(this.snakeFood[randomNum2]);
    this.spawnFood(this.snakeFood[randomNum3]);
  }

  setup() {
    this.randomSpawn();
    this.foodGenerator();
  }

  start(canvas) {
    const ctx = canvas.getContext('2d');
    let playing = true;
    const startAnimation = () => {
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (playing) {
        setTimeout(startAnimation, 1000,10);
      }
    };

  }

  render(ctx) {
  }
}

export default FeedingGround;
