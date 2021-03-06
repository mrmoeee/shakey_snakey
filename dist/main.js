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
    return Math.random() * 10;
  }

  randomYspeed() {
    return Math.random() * 10;
  }

  topAsteroidSpawn() {
    this.asteroids = [];
    let prevAstro = new _asteroids_js__WEBPACK_IMPORTED_MODULE_2___default.a({x: 0, y: 0, xspeed: 0, yspeed: 0, radius: 0});
    for ( let i = 0; i < 11; i++) {
      let currAstro = new _asteroids_js__WEBPACK_IMPORTED_MODULE_2___default.a({x: this.randomX(), y: -this.randomY(), xspeed: 0, yspeed: this.randomYspeed(), radius: 30});
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
      if (Math.abs(currAstro.x - prevAstro.x) > 50) {
        this.asteroidsL.push(currAstro);
        prevAstro = currAstro;
      }
    }
  }

  rightAsteroidSpawn() {
    this.asteroidsR = [];
    let prevAstro = new _asteroids_js__WEBPACK_IMPORTED_MODULE_2___default.a({x: 0, y: 0, xspeed: 0, yspeed: 0, radius: 0});
    for ( let i = 0; i < 11; i++) {
      let currAstro = new _asteroids_js__WEBPACK_IMPORTED_MODULE_2___default.a({x: this.randomX() + 500, y: this.randomY() , xspeed: -this.randomXspeed(), yspeed: 0, radius: 30});
      if (Math.abs(currAstro.x - prevAstro.x) > 50) {
        this.asteroidsL.push(currAstro);
        prevAstro = currAstro;
      }
    }
  }

  botAsteroidSpawn() {
    this.asteroidsB = [];
    let prevAstro = new _asteroids_js__WEBPACK_IMPORTED_MODULE_2___default.a({x: 0, y: 0, xspeed: 0, yspeed: 0, radius: 0});
    for ( let i = 0; i < 11; i++) {
      let currAstro = new _asteroids_js__WEBPACK_IMPORTED_MODULE_2___default.a({x: this.randomX(), y: this.randomY() + 500 , xspeed: 0, yspeed: -this.randomYspeed(), radius: 30});
      if (Math.abs(currAstro.x - prevAstro.x) > 50) {
        this.asteroidsL.push(currAstro);
        prevAstro = currAstro;
      }
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

  asteroidGenerator(ctx) {
    this.asteroids.forEach(asteroid => {
      asteroid.show(ctx);
    });

    this.asteroids.forEach(asteroid => {
      asteroid.update();
    });
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
    } else if (this.snake.x < -0.5) {
      return true;
    } else if (this.snake.y < -0.5) {
      return true;
    } else {
      return false;
    }
  }

  foodCollision(food) {
    let rect1 = this.snake;
    let rect2 = food;

    if ((Math.abs(rect1.x - rect2.x) <= 0.5)
        && (Math.abs(rect1.y - rect2.y) <= 0.5)) {
          return true;
      } else {
        return false;
      }
  }


  setup() {
    this.randomSpawn();
    this.foodGenerator();
  }

  start(canvas) {
    const ctx = canvas.getContext('2d');
    this.setup();
    let looped = 1;
    let score = document.getElementById('scores');
    const animationLoop = () => {
      let start = null;
      looped += 1;
      if (looped === 100) {
        this.topAsteroidSpawn();

      } else if (looped === 160) {
        this.leftAsteroidSpawn();
      } else if (looped === 220) {
        this.rightAsteroidSpawn();
      } else if (looped === 280) {
        this.botAsteroidSpawn();
        looped = 0;
      }

      ctx.fillStyle = 'beige';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      if (this.wallCollision(canvas.width)) {
        this.playing = false;
        console.log('wall collision!!');
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
      if (this.snake.alive === this.playing) {
        window.requestAnimationFrame(animationLoop);
      } else {
        let reset = document.getElementById('reset-box');
        reset.style.zIndex = 1;
      }
    
      this.asteroidGenerator(ctx);
      score.innerHTML = `Score: ${this.score}`;
      
    };
    animationLoop();
  }

  render(ctx) {
    for (let i = 0; i < this.snakeFood.length; i++) {
      this.snakeFood[i].show(ctx);
    }

    if (this.snake.isPoisoned()) {
      this.snake.direction = this.snake.reverse;
    } else {
      this.snake.direction = this.snake.reset;
    }
    this.snake.show(ctx);
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
    this.xspeed = 0.5;
    this.yspeed = 0;
    this.scl = 20;
    this.height = this.scl;
    this.width = this.scl;
    this.size = 0;
    this.tail = [];
    this.eaten = '';
    this.alive = true;
    this.move = '';
  }
  isPoisoned() {
    if (this.eaten === 'purple') {
      this.direction = this.reverse;
      return true;
    } else {
      return false;
    }
  }

  reversePrevention(x, y) {
    if (this.x === 1 && x === -1) {
      console.log('going backwards x plane');
    } else if (this.x === -1 && x === 1) {
      console.log('going backward the other way!');
    }
  }

  reset(x, y, direct) {
    console.log(direct)
    if (this.move === 'left') {
      this.xspeed = x;
      this.yspeed = y;
    } else if (this.move === 'right') {
      this.xspeed = x;
      this.yspeed = y;
    } else if (this.move === 'up') {
      this.xspeed = x; 
      this.yspeed = y;
    } else if (this.move === 'down') {
      this.xspeed = x;
      this.yspeed = y;
    }
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
    if (this.tail.length > 1){
      for (let i = 0; i < this.tail.length; i++) {
        let currTail = this.tail[i];
        ctx.fillRect(currTail.x * this.scl, currTail.y *
          this.scl, this.scl, this.scl);
      }
    }
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
    ctx.fillRect(this.x * 20, this.y * 20, this.width, this.height);
  }
}

module.exports = SnakeFood;


/***/ })

/******/ });
//# sourceMappingURL=main.js.map