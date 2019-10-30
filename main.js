const game = new Game();
// const player = new Player(300, 500);

var mode; // does this or anything on this page with mode belong here

function preload() {
  game.preload();
}

function setup() {
  createCanvas(1200, 700);
  game.floor = 700;
  game.setup();
  mode = 0;
}

function draw() {
  clear(); // part of mode

  if (mode === 0) {
    // part of mode
    text("Press enter to start!", 500, 300); // xy pos
  }
  if (mode === 1) {
    game.draw();
  }
}

function keyPressed() {
  // does this belong in game?
  if (keyCode === ENTER) {
    // mode
    mode = 1; // mode
  }
  if (keyCode === 39) {
    game.player.moveRight();
  } else if (keyCode === 37) {
    game.player.moveLeft();
  } else if (keyCode === 32) {
    game.player.changeColor();
  }
}

window.addEventListener(
  "keydown",
  function(e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  },
  false
);
