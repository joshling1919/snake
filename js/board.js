const Snake = require('./snake');

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
