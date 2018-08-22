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



class FeedingGround {

  constructor(width, height) {
    this.snake = new _snake_js__WEBPACK_IMPORTED_MODULE_0___default.a();
    this.snakeFood = [
      new _snakeFood_js__WEBPACK_IMPORTED_MODULE_1___default.a(20, 20, 'green'),
      new _snakeFood_js__WEBPACK_IMPORTED_MODULE_1___default.a(20, 20, 'red'),
      new _snakeFood_js__WEBPACK_IMPORTED_MODULE_1___default.a(20, 20, 'purple')
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

  update() {
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
  constructor(width, height, color) {
    this.x = 0;
    this.y = 0;
    this.width = 20;
    this.height = 20;
    this.color = color;
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