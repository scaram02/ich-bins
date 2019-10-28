function preload() {
  // console.log('preload');
  game.preload();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // console.log('setup');
  game.setup();
}

function draw() {
  //60x per second
  // console.log('draw');
  game.draw();
}

function keyPressed() {
  if (keyCode === 39) {
    game.player.moveRight();
  } else if (keyCode === 37) {
    game.player.moveLeft();
  }
}

const game = new Game();
// const player = new Player(300, 500);
