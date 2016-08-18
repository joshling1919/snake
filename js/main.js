const SnakeView = require('./snake-view');
// const SnakeGame = require('./game');

$( () => {
  const el = $('.snake-container');
  // const game = new HanoiGame();
  console.log("working");
  new SnakeView(el);
});
