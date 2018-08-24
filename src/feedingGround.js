import Snake from './snake.js';
import SnakeFood from './snakeFood.js';
import Asteroid from './asteroids.js';

class FeedingGround {

  constructor(width, height) {
    this.snake = new Snake();
    this.snakeFood = [
      new SnakeFood(20, 20, 'green', 10),
      new SnakeFood(20, 20, 'red', 40),
      new SnakeFood(20, 20, 'purple', 100)
    ];
    this.width = width;
    this.height = height;
    this.playing = true;
    this.alive = this.snake.alive;
    this.asteroids = [];
    this.asteroidsL = [];
    this.asteroidsR = [];
    this.asteroidsB = [];
    this.score = 0;
  }
  randomX() {
    return Math.random() * 500;
  }
  randomY() {
    return Math.random() * 500;
  }

  randomXspeed() {
    return Math.random() * 30;
  }

  randomYspeed() {
    return Math.random() * 30;
  }
  topAsteroidSpawn() {
    this.asteroids = [];
    let prevAstro = new Asteroid({x: 0, y: 0, xspeed: 0, yspeed: 0, radius: 0});
    for ( let i = 0; i < 11; i++) {
      let currAstro = new Asteroid({x: this.randomX(), y: -this.randomY(), xspeed: 0, yspeed: this.randomYspeed(), radius: 30});
      console.log(currAstro);
      if (Math.abs(currAstro.x - prevAstro.x) > currAstro.radius) {
        this.asteroids.push(currAstro);
        prevAstro = currAstro;
      }
    }
  }
  leftAsteroidSpawn() {
    this.asteroidsL = [];
    let prevAstro = new Asteroid({x: 0, y: 0, xspeed: 0, yspeed: 0, radius: 0});
    for ( let i = 0; i < 11; i++) {
      let currAstro = new Asteroid({x: -this.randomX(), y: this.randomY(), xspeed: this.randomXspeed(), yspeed: 0, radius: 30});
      console.log(currAstro);
      if (Math.abs(currAstro.x - prevAstro.x) > 50) {
        this.asteroidsL.push(currAstro);
        prevAstro = currAstro;
      }
    }
    console.log(this.asteroidsL, 'leftastro');
  }
  rightAsteroidSpawn() {
    this.asteroidsR = [];
    let prevAstro = new Asteroid({x: 0, y: 0, xspeed: 0, yspeed: 0, radius: 0});
    for ( let i = 0; i < 11; i++) {
      let currAstro = new Asteroid({x: this.randomX() + 500, y: this.randomY() , xspeed: -this.randomXspeed(), yspeed: 0, radius: 30});
      console.log(currAstro);
      if (Math.abs(currAstro.x - prevAstro.x) > 50) {
        this.asteroidsL.push(currAstro);
        prevAstro = currAstro;
      }
    }
    console.log(this.asteroidsL, 'leftastro');
  }
  botAsteroidSpawn() {
    this.asteroidsB = [];
    let prevAstro = new Asteroid({x: 0, y: 0, xspeed: 0, yspeed: 0, radius: 0});
    for ( let i = 0; i < 11; i++) {
      let currAstro = new Asteroid({x: this.randomX(), y: this.randomY() + 500 , xspeed: 0, yspeed: -this.randomYspeed(), radius: 30});
      console.log(currAstro);
      if (Math.abs(currAstro.x - prevAstro.x) > 50) {
        this.asteroidsL.push(currAstro);
        prevAstro = currAstro;
      }
    }
    console.log(this.asteroidsL, 'leftastro');
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

  asteroidGenerator() {

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
    let looped = 1;
    let score = document.getElementById('scores');
    const animationLoop = () => {
      looped += 1;
      console.log(looped);
      if (looped === 60) {
        this.topAsteroidSpawn();

      } else if (looped === 120) {
        this.leftAsteroidSpawn();
      } else if (looped === 160) {
        this.rightAsteroidSpawn();
      } else if (looped === 200) {
        this.botAsteroidSpawn();
        looped = 0;
      }

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
        this.score += this.snakeFood[0].score;
        this.spawnFood(this.snakeFood[0]);
      } else if (this.foodCollision(this.snakeFood[1])) {
        this.snake.size++;
        this.score += this.snakeFood[1].score;
        this.spawnFood(this.snakeFood[1]);
        if (this.snake.eaten === '' || this.snake.eaten === 'purple'){
          this.snake.eaten = this.snakeFood[1].color;
        }
      } else if (this.foodCollision(this.snakeFood[2])) {
        this.snake.size++;
        this.spawnFood(this.snakeFood[2]);
        if (this.snake.eaten === '') {
          this.snake.eaten = this.snakeFood[2].color;
          this.score += this.snakeFood[2].score;
        } else if (this.snake.eaten === 'red') {
          this.score = this.score + this.snakeFood[2].score + this.snakeFood[1].score + 20;
          this.snake.eaten = '';
        }
      }
      this.render(ctx);
      if (this.playing === this.snake.alive) {
        setTimeout(animationLoop, 100);
      }
      this.asteroids.forEach(asteroid => {
        asteroid.show(ctx);
      });

      this.asteroids.forEach(asteroid => {
        asteroid.update();
      });
      // console.log(this.snake.eaten);
      this.asteroidsL.forEach(asteroid => {
        asteroid.show(ctx);
      });

      this.asteroidsL.forEach(asteroid => {
        asteroid.update(ctx);
      });
      this.asteroidsR.forEach(asteroid => {
        asteroid.show(ctx);
      });

      this.asteroidsR.forEach(asteroid => {
        asteroid.update(ctx);
      });
      this.asteroidsB.forEach(asteroid => {
        asteroid.show(ctx);
      });

      this.asteroidsB.forEach(asteroid => {
        asteroid.update(ctx);
      });
      score.innerHTML = `Score: ${this.score}`;
      ctx.fillStyle = 'red';
      ctx.fillText(`Score: ${this.score}`, 450, 450, 80);
    };
    animationLoop();
  }

  render(ctx) {
    for (let i = 0; i < this.snakeFood.length; i++) {
      this.snakeFood[i].show(ctx);
    }
    // for (let i = 0; i < this.asteroids.length; i++) {
    //   this.asteroids[i].show(ctx);
    //   // this.asteroids[i].update();
    // }

    if (this.snake.isPoisoned()) {
      this.snake.direction = this.snake.reverse;
      // console.log("you're poisoned");
    } else {
      this.snake.direction = this.snake.reset;
      // console.log("you're cured");
    }
    this.snake.show(ctx);
    // this.asteroids.show(ctx);
    // this.asteroids.update();
    this.snake.update(ctx);
  }
}

export default FeedingGround;
