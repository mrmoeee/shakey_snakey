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
    this.playing = true;
  }

  generateGrounds() {
    this.grounds = new Array(this.width/20);
    for(let i = 0; i < this.width/20; i++) {
      this.feedingGround[i] = new Array(this.width/20);
    }
  }

  randomSpawn() {
    const boundsW = Math.floor(this.width/this.snake.scl);
    const boundsH = Math.floor(this.height/this.snake.scl);
    let col = Math.floor(Math.random() * boundsW);
    let row =  Math.floor(Math.random() * boundsH);
    this.snake.x = col;
    this.snake.y = row;
  }

  foodGenerator() {
    let randomNum1 = Math.floor(Math.random() * this.snakeFood.length);
    let randomNum2 = Math.floor(Math.random() * this.snakeFood.length);
    let randomNum3 = Math.floor(Math.random() * this.snakeFood.length);
    this.spawnFood(this.snakeFood[randomNum1]);
    this.spawnFood(this.snakeFood[randomNum2]);
    this.spawnFood(this.snakeFood[randomNum3]);
  }

  spawnFood(food) {
    const boundsW = Math.floor(this.width/20);
    const boundsH = Math.floor(this.height/20);
    let col = Math.floor(Math.random() * boundsW);
    let row = Math.floor(Math.random() * boundsH);
    food.x = col;
    food.y = row;
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
    let rect2 = food;
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

  setup() {
    this.randomSpawn();
    this.spawnFood(this.snakeFood[0]);
  }

  start(canvas) {
    console.log('start');
    const ctx = canvas.getContext('2d');

    this.setup();
    const startAnimation = () => {
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      //width same as height so only pass in widght right now
      if (this.wallCollision(canvas.width)) {
        this.playing = !this.playing;
        console.log('wall collision');
      }
      if (this.foodCollision(this.snakeFood[0])) {
        let randomNum1 = Math.floor(Math.random() * this.snakeFood.length);
        this.snake.size++;
        this.spawnFood(this.snakeFood[randomNum1]);
      }
      this.render(ctx);
      if (this.playing) {
        setTimeout(startAnimation, 100);
      }
    };
    startAnimation();
  }

  render(ctx) {
    this.snake.show(ctx);
    this.snake.update();
  }
}

export default FeedingGround;
