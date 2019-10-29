var mode; // does this or anything on this page with mode belong here

function preload() {
  // console.log('preload');
  game.preload();
}

function setup() {
  mode = 0;
  createCanvas(windowWidth, windowHeight);
  // console.log('setup');
  game.setup();
  
  
}

function draw() {
  //60x per second
  // console.log('draw');
  clear(); // part of mode
  

  if (mode === 0){ // part of mode
      text("Press enter to start!", 500, 300); // xypos
  }
  if (mode === 1) {
    game.draw();
  }


}

function keyPressed() { // does this belong in game?
  if (keyCode ===ENTER){ // mode
      mode = 1;     // mode
  }
  if (keyCode === 39) {
    game.player.moveRight();
  } else if (keyCode === 37) {
    game.player.moveLeft();
  } else if (keyCode === 32){
     game.player.changeColor();
    }
}

const game = new Game();
// const player = new Player(300, 500);
