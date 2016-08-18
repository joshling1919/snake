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
