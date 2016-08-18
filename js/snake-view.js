/* jshint esversion: 6 */
const Board = require('./board');

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
