const Snake = require('./snake');

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
