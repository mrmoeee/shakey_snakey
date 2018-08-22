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
    this.alive = this.snake.alive;
  }

  generateGrounds() {
    this.grounds = new Array(this.width/20);
    for(let i = 0; i < this.width/20; i++) {
      this.grounds[i] = new Array(this.width/20);
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
    if (this.snake.x === food.x && this.snake.y === food.y) {
      return true;
    } else {
      return false;
    }
    // if ((((rect2.x > rect1.x)
    //     && (rect2.x < (rect1.x + rect1.width)))
    //     || (((rect2.x + rect2.width) > rect1.x)
    //     && ((rect2.x + rect2.width) < (rect1.x + rect1.width))))
    //     || (((rect2.y > rect1.y)
    //     && (rect2.y < (rect1.y + rect1.height)))
    //     || (((rect2.y + rect2.height) > rect1.y)
    //     && ((rect2.y + rect2.height) < (rect1.y + rect1.height))))) {
    //   return false;
    // } else {
    //   return true;
    // }
  }

  setup() {
    this.randomSpawn();
    this.foodGenerator();
  }

  start(canvas) {
    const ctx = canvas.getContext('2d');
    const grid = this.generateGrounds();
    this.setup();
    const startAnimation = () => {
      ctx.fillStyle = 'beige';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      //width same as height so only pass in widght right now
      if (this.wallCollision(canvas.width)) {
        this.playing = false;
        console.log('wall collision');
      }

      if (this.foodCollision(this.snakeFood[0])) {
        let randomNum1 = Math.floor(Math.random() * this.snakeFood.length);
        this.snake.size++;
        this.spawnFood(this.snakeFood[0]);
      } else if (this.foodCollision(this.snakeFood[1])) {
        this.snake.size++;
        this.spawnFood(this.snakeFood[1]);
        if (this.snake.eaten === '' || this.snake.eaten === 'purple'){
          this.snake.eaten = this.snakeFood[1].color;
        }
      } else if (this.foodCollision(this.snakeFood[2])) {
        this.snake.size++;
        this.spawnFood(this.snakeFood[2]);
        if (this.snake.eaten === '') {
          this.snake.eaten = this.snakeFood[2].color;
        } else if (this.snake.eaten === 'red') {
          this.snake.eaten = '';
        }
      }
      this.render(ctx);
      if (this.playing === this.snake.alive) {
        setTimeout(startAnimation, 100);
      }
      // console.log(this.snake.eaten);

    };
    startAnimation();
  }

  render(ctx) {
    for (let i = 0; i < this.snakeFood.length; i++) {
      this.snakeFood[i].show(ctx);
    }
    if (this.snake.isPoisoned()) {
      this.snake.direction = this.snake.reverse;
      // console.log("you're poisoned");
    } else {
      this.snake.direction = this.snake.reset;
      // console.log("you're cured");
    }
    this.snake.show(ctx);
    this.snake.update();
  }
}

export default FeedingGround;
