/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const SnakeView = __webpack_require__(1);
	// const SnakeGame = require('./game');

	$( () => {
	  const el = $('.snake-container');
	  // const game = new HanoiGame();
	  console.log("working");
	  new SnakeView(el);
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint esversion: 6 */
	const Board = __webpack_require__(2);

	function SnakeView($el) {
	  this.$el = $el;
	  this.board = new Board();
	  this.currentView();
	}



	SnakeView.prototype.currentView = function () {
	  this.$el.append(this.board.$grid);
	};

	module.exports = SnakeView;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const Snake = __webpack_require__(3);

	function Board(snake) {
	  this.snake = new Snake();
	  this.$grid = $("<div>");
	  this.setupBoard();
	  this.updateSnake();
	}

	Board.prototype.updateSnake = function() {
	  let snakeArr = this.snake.segments;
	  this.$grid.children().children().each (function() {

	    let gridPos = $(this).data("pos");
	    $(this).removeClass('snake');
	    snakeArr.forEach(el => {
	      let snakeArrStr = el.join(',');
	      if (snakeArrStr === gridPos) {
	        $(this).addClass('snake');
	      }
	    });
	  });
	};

	Board.prototype.setupBoard = function() {
	  for(let i = 0; i < 20; i ++) {
	    this.addRow();
	  }
	};

	Board.prototype.addRow = function() {
	  const rowIdx = this.$grid.find(".row").length;
	  const $row = $("<ul>").addClass("row").addClass("group");
	  for(let colIdx = 0; colIdx < 20; colIdx++) {
	    const $square = $("<li>").addClass("square").attr("data-pos", [rowIdx, colIdx]);
	    $row.append($square);
	  }
	  this.$grid.append($row);
	};


	module.exports = Board;


/***/ },
/* 3 */
/***/ function(module, exports) {

	function Snake() {
	  this.direction = "N";
	  this.segments = [[9,9]];
	}

	Snake.prototype.turn = function(direction) {
	  this.direction = direction;
	};

	Snake.prototype.move = function() {
	  this.segments.pop();

	  let headX = this.segments[0][0];
	  let headY = this.segments[0][1];

	  if (this.direction === "N") {
	    this.segments.unshift([headX, headY - 1]);
	  } else if (this.direction === "S") {
	    this.segments.unshift([headX, headY + 1]);
	  } else if (this.direction === "E") {
	    this.segments.unshift([headX + 1, headY]);
	  } else if (this.direction === "W") {
	    this.segments.unshift([headX - 1, headY]);
	  }
	};

	// function Coord() {
	//
	//   function plus(){
	//
	//   }
	//
	//   function equals(){
	//
	//   }
	//
	//   function isOpposite(){
	//
	//   }
	// }


	module.exports = Snake;


/***/ }
/******/ ]);