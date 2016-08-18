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
	  this.bindKey();
	  setInterval(() => {
	    this.step();
	  }, 200);
	}

	SnakeView.prototype.updateSnake = function() {
	  let snakeArr = this.board.snake.segments;
	  this.board.$grid.children().children().removeClass('snake');
	  this.board.$grid.children().children().each (function() {
	    let gridPos = $(this).data("pos");
	    snakeArr.forEach(el => {
	      let snakeArrStr = el.join(',');
	      if (snakeArrStr === gridPos) {
	        $(this).addClass('snake');
	      }
	    });
	  });
	};

	SnakeView.prototype.bindKey = function() {
	  $(document).on("keydown", event => {
	    switch(event.which) {
	      case 37: //left
	        if (!(this.board.snake.direction === "E")) {
	          this.board.snake.turn("W");
	        }
	      break;

	      case 38: //up
	        if (!(this.board.snake.direction === "S")) {
	          this.board.snake.turn("N");
	        }
	      break;

	      case 39: //right
	        if (!(this.board.snake.direction === "W")) {
	          this.board.snake.turn("E");
	        }
	      break;

	      case 40: //down
	        if (!(this.board.snake.direction === "N")) {
	          this.board.snake.turn("S");
	        }
	      break;

	      default: return;
	    }
	  });
	};




	SnakeView.prototype.step = function () {
	  console.log('logging here!');
	  this.board.snake.move();
	  this.updateSnake();
	};



	SnakeView.prototype.currentView = function () {
	  this.$el.append(this.board.$grid);
	};

	module.exports = SnakeView;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const Snake = __webpack_require__(3);

	function Board() {
	  this.snake = new Snake();
	  this.$grid = $("<div>");
	  this.setupBoard();
	}


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
	  let headCol = this.segments[0][0];
	  let headRow = this.segments[0][1];
	  this.segments.pop();
	  if (this.direction === "N") {
	    this.segments.unshift([headCol - 1, headRow]);
	  } else if (this.direction === "S") {
	    this.segments.unshift([headCol + 1, headRow]);
	  } else if (this.direction === "E") {
	    this.segments.unshift([headCol , headRow + 1]);
	  } else if (this.direction === "W") {
	    this.segments.unshift([headCol, headRow - 1]);
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