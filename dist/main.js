/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroids.js":
/*!**************************!*\
  !*** ./src/asteroids.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

const COLORS = ['red', 'blue', 'yellow'];

class Asteroid {
  constructor(options ={}) {
    //all zeroes to be determined later
    this.x = options.x;
    this.y = options.y;
    this.xspeed = options.xspeed;
    this.yspeed = options.yspeed;
    this.radius = options.radius;
    this.color = this.generateColor();
  }

  generateColor() {
    let num = Math.floor(Math.random() * 3);
    return COLORS[num];
  }
  update() {
    // this.x = this.x + this.xspeed;
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed * 2;
    if ((this.x <= 500 && this.x >= 0) && (this.y <= 500 && this.y >= 0)) {
      if (this.radius > 0) {
        this.radius = this.radius - 0.5;
      }
    }
  }

  show(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
    ctx.fill();
  }
}
module.exports = Asteroid;


/***/ }),

/***/ "./src/feedingGround.js":
/*!******************************!*\
  !*** ./src/feedingGround.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _snake_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake.js */ "./src/snake.js");
/* harmony import */ var _snake_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_snake_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _snakeFood_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snakeFood.js */ "./src/snakeFood.js");
/* harmony import */ var _snakeFood_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_snakeFood_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _asteroids_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asteroids.js */ "./src/asteroids.js");
/* harmony import */ var _asteroids_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_asteroids_js__WEBPACK_IMPORTED_MODULE_2__);




class FeedingGround {

  constructor(width, height) {
    this.snake = new _snake_js__WEBPACK_IMPORTED_MODULE_0___default.a();
    this.snakeFood = [
      new _snakeFood_js__WEBPACK_IMPORTED_MODULE_1___default.a(20, 20, 'green', 10),
      new _snakeFood_js__WEBPACK_IMPORTED_MODULE_1___default.a(20, 20, 'red', 40),
      new _snakeFood_js__WEBPACK_IMPORTED_MODULE_1___default.a(20, 20, 'purple', 100)
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
    let prevAstro = new _asteroids_js__WEBPACK_IMPORTED_MODULE_2___default.a({x: 0, y: 0, xspeed: 0, yspeed: 0, radius: 0});
    for ( let i = 0; i < 11; i++) {
      let currAstro = new _asteroids_js__WEBPACK_IMPORTED_MODULE_2___default.a({x: this.randomX(), y: -this.randomY(), xspeed: 0, yspeed: this.randomYspeed(), radius: 30});
      console.log(currAstro);
      if (Math.abs(currAstro.x - prevAstro.x) > currAstro.radius) {
        this.asteroids.push(currAstro);
        prevAstro = currAstro;
      }
    }
  }
  leftAsteroidSpawn() {
    this.asteroidsL = [];
    let prevAstro = new _asteroids_js__WEBPACK_IMPORTED_MODULE_2___default.a({x: 0, y: 0, xspeed: 0, yspeed: 0, radius: 0});
    for ( let i = 0; i < 11; i++) {
      let currAstro = new _asteroids_js__WEBPACK_IMPORTED_MODULE_2___default.a({x: -this.randomX(), y: this.randomY(), xspeed: this.randomXspeed(), yspeed: 0, radius: 30});
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
    let prevAstro = new _asteroids_js__WEBPACK_IMPORTED_MODULE_2___default.a({x: 0, y: 0, xspeed: 0, yspeed: 0, radius: 0});
    for ( let i = 0; i < 11; i++) {
      let currAstro = new _asteroids_js__WEBPACK_IMPORTED_MODULE_2___default.a({x: this.randomX() + 500, y: this.randomY() , xspeed: -this.randomXspeed(), yspeed: 0, radius: 30});
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
    let prevAstro = new _asteroids_js__WEBPACK_IMPORTED_MODULE_2___default.a({x: 0, y: 0, xspeed: 0, yspeed: 0, radius: 0});
    for ( let i = 0; i < 11; i++) {
      let currAstro = new _asteroids_js__WEBPACK_IMPORTED_MODULE_2___default.a({x: this.randomX(), y: this.randomY() + 500 , xspeed: 0, yspeed: -this.randomYspeed(), radius: 30});
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

/* harmony default export */ __webpack_exports__["default"] = (FeedingGround);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _snake_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake.js */ "./src/snake.js");
/* harmony import */ var _snake_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_snake_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _snakeFood_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snakeFood.js */ "./src/snakeFood.js");
/* harmony import */ var _snakeFood_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_snakeFood_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _feedingGround_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedingGround.js */ "./src/feedingGround.js");




const canvas = document.getElementById('snake_canvas');
const fg = new _feedingGround_js__WEBPACK_IMPORTED_MODULE_2__["default"](canvas.width, canvas.height);
if (fg.playing){
  fg.start(canvas);
}

window.addEventListener('keydown', keyPressed);

function keyPressed(e) {
  let code = e.keyCode;
  if (code === 37) {
    fg.snake.direction(-1, 0);
  } else if (code === 38) {
    fg.snake.direction(0, -1);
  } else if (code === 39) {
    fg.snake.direction(1, 0);
  } else if (code === 40) {
    fg.snake.direction(0, 1);
  } else if (code === 32) {
    fg.playing = !fg.playing;
  }

}


/***/ }),

/***/ "./src/snake.js":
/*!**********************!*\
  !*** ./src/snake.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {


class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.scl = 20;
    this.height = this.scl;
    this.width = this.scl;
    this.size = 0;
    this.tail = [];
    this.eaten = '';
    this.alive = true;
  }
  //poisonous
  isPoisoned() {
    if (this.eaten === 'purple') {
      this.direction = this.reverse;
      return true;
    } else {
      return false;
    }
  }

  reset(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  direction(x, y) {
    this.xspeed = x;
    this.yspeed = y;

  }

  reverse(x, y) {
    this.xspeed = -x;
    this.yspeed = -y;
  }

  update(ctx) {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
      if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
        this.alive = false;
        console.log('woah ran into self');
      }
    }
    this.tail[this.size -1] = { x: this.x, y: this.y };

    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  show(ctx) {
    ctx.fillStyle = '#b2ffe4';
    for (let i = 0; i < this.tail.length; i++) {
      let currTail = this.tail[i];
      ctx.fillRect(currTail.x * this.scl, currTail.y *
        this.scl, this.scl, this.scl);
    }
    // ctx.fillStyle = '#00b273';
    ctx.fillStyle = 'black';
    ctx.fillRect(this.x * this.scl, this.y * this.scl, this.scl, this.scl);
  }
}

module.exports = Snake;


/***/ }),

/***/ "./src/snakeFood.js":
/*!**************************!*\
  !*** ./src/snakeFood.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {


class SnakeFood {
  constructor(width, height, color, score) {
    this.x = 0;
    this.y = 0;
    this.width = 20;
    this.height = 20;
    this.color = color;
    this.score = score;
    //type, color, size
  }

  show(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x * 20, this.y* 20, this.width, this.height);
  }
}

module.exports = SnakeFood;


/***/ })

/******/ });
//# sourceMappingURL=main.js.map