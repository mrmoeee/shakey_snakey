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

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _snake_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake.js */ "./src/snake.js");
/* harmony import */ var _snake_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_snake_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _snakeFood_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snakeFood.js */ "./src/snakeFood.js");
/* harmony import */ var _snakeFood_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_snakeFood_js__WEBPACK_IMPORTED_MODULE_1__);



const canvas = document.getElementById('snake_canvas');
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const snake = new _snake_js__WEBPACK_IMPORTED_MODULE_0___default.a();
const food = new _snakeFood_js__WEBPACK_IMPORTED_MODULE_1___default.a(width, height);
let playing = true;

class Board {

  constructor() {
    this.feedingGround = new Array(width/20);
    for(let i = 0; i < width/20; i++) {
      this.feedingGround[i] = new Array(width/20);
    }
  }

}






/* harmony default export */ __webpack_exports__["default"] = (Board);


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
/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board.js */ "./src/board.js");




const canvas = document.getElementById('snake_canvas');
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const snake = new _snake_js__WEBPACK_IMPORTED_MODULE_0___default.a();
const food = new _snakeFood_js__WEBPACK_IMPORTED_MODULE_1___default.a(width, height);
const board = new _board_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
let playing = true;

function randomSpawn() {
    let x = Math.floor(Math.random() * width/snake.scl);
    let y = Math.floor(Math.random() * height/snake.scl);
    snake.x = x;
    snake.y = y;
  }
function spawnFood() {
  let x = Math.floor(Math.random() * width/20);
  let y = Math.floor(Math.random() * height/20);
  food.x = x;
  food.y = y;
  board.feedingGround[food.x][food.y] = food;
  console.log(board);
}
// board.createBoard();
function setup() {
  spawnFood(width, height, board);
  randomSpawn(width, height);
}

function draw() {
  //draw canvas
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, width, height);
  if (snake.willCollideWall(canvas.width, canvas.height)) {
    playing = !playing;
    console.log('collided with walls', snake.x, 'x', snake.y, 'y');
  } else {
    snake.show(ctx);
    snake.update();
    food.show(ctx);

    if (playing) {
      setTimeout(draw, 1000/10);
    }
    if (snake.eatFood(food)) {
      spawnFood(width, height, board);
    }
  }
}

function keyPressed(e) {
  let code = e.keyCode;
  if (code === 37) {
    snake.direction(-1, 0);
  } else if (code === 38) {
    snake.direction(0, -1);
  } else if (code === 39) {
    snake.direction(1, 0);
  } else if (code === 40) {
    snake.direction(0, 1);
  } else if (code === 32) {
    playing = !playing;
    if (playing) {
      draw();
    }
  }
}
setup();
window.addEventListener('keydown', keyPressed);
draw();


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
    //eatenfood technically is 1 for the snake head.
    this.size = 0;
    this.tail = [];
  }

  willCollideWall(width, height) {
    const nextXMove = this.x + this.xspeed;
    const nextYMove = this.y + this.yspeed;
    console.log(this.x, 'x', this.y, 'y');
    console.log(this.xspeed, 'xspeed', this.yspeed, 'yspeed');
    if (this.x >= width/20) {
      return true;
    } else if (this.y >= width/20) {
      return true;
    } else if (this.x < 0) {
      return true;
    } else if (this.y < 0) {
      return true;
    } else {
      return false;
    }
  }
  //
  eatFood(food) {
    if ((this.x === food.x) && (this.y === food.y)) {
      this.size++;
      return true;
    } else {
      return false;
    }
  }

  direction(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  update() {
    if (this.tail.length === this.size) {
      for (let i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
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
    ctx.fillStyle = '#00b273';
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

const FOOD_COLORING = {
  RED: 'red',
  PURPLE: 'purple',
  GREEN: 'green'
};
class SnakeFood {

  constructor(width, height) {
    this.x = 0;
    this.y = 0;
    this.color = FOOD_COLORING;
    //type, color, size
  }

  show(ctx) {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x * 20, this.y * 20, 20, 20);
  }


}

module.exports = SnakeFood;


/***/ })

/******/ });
//# sourceMappingURL=main.js.map