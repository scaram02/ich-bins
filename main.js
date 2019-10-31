const game = new Game();
let yaySound;
let noooSound;
let floorSound;
let mode;

function preload() {
  game.preload();
  yaySound = loadSound("assets/yay.wav"); // sound. sound.play(); in place where sound played, bg music = sound.loop();
  noooSound = loadSound("assets/no.wav");
  floorSound = loadSound("assets/floor.wav");
  themeSong = loadSound("assets/bugdom.mp3");
}

function setup() {
  let gameCanvas = createCanvas(1000, 700); //1200
  gameCanvas.parent("gameCanvas");
  game.floor = 700;
  game.setup();
  mode = 0;
  textSize(32);
  textFont("Georgia");
  fill("darkgreen");
  bg = loadImage("assets/start.png");
  bgTrenn = loadImage("assets/trennen4.png");

  //   themeSong.loop(); this works here! but make so only starts on 2
}

function draw() {
  clear(); // part of mode

  if (mode === 0) {
    // part of mode
    background(bgTrenn);
    text("Press enter to start!", 365, 680);
  }
  if (mode === 1) {
    // game.draw();
    background(bg);
    text("Press enter to play!", 365, 680);
  }

  if (mode === 2) {
    game.draw();
  }
  if (keyIsDown(39)) {
    game.player.moveRight();
  } else if (keyIsDown(37)) {
    game.player.moveLeft();
  } else if (keyIsDown(32)) {
    game.player.changeColor();
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    if (mode === 0) {
      mode = 1;
    } else {
      mode = 2;
    }
  }
}
/*  if (keyCode === 39) {
    game.player.moveRight();
  } else if (keyCode === 37) {
    game.player.moveLeft();
  } else if (keyCode === 32) {
    game.player.changeColor();
  } */

//   if ((gameEnd === true) && keyPressed(ENTER)){
//       score = 0;
//       missed = 0;
//       mode = 1
//   }
// }

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
