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
