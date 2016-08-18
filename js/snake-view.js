/* jshint esversion: 6 */
const Board = require('./board');

function SnakeView($el) {
  this.$el = $el;
  this.board = new Board();
  this.currentView();
}



SnakeView.prototype.currentView = function () {
  this.$el.append(this.board.$grid);
};

module.exports = SnakeView;
