const game = new Game();
let yaySound;
let noooSound;
let floorSound;
let themeSong;
let mode;

function preload() {
  game.preload();
  yaySound = loadSound("assets/yay.wav"); 
  noooSound = loadSound("assets/no.wav");
  floorSound = loadSound("assets/floor.wav");
  themeSong = loadSound("assets/bugdom.mp3");
}

function setup() {
  let gameCanvas = createCanvas(1000, 700); 
  gameCanvas.parent("gameCanvas");
  game.floor = 700;
  game.setup();
  mode = 0;
  textSize(32);
  textFont("Georgia");
  fill("darkgreen");
  bg = loadImage("assets/start.png");
  bgTrenn = loadImage("assets/trennen4.png");

  themeSong.loop();  
  themeSong.stop();
}

function draw() {
  clear(); 

  if (mode === 0) {
    background(bgTrenn);
    fill('darkgreen');
    text("Press enter to start!", 365, 680);
  }
  if (mode === 1) {
    background(bg);
    text("Press enter to play!", 365, 680);
  }

  if (mode === 2) {
    game.draw();
    playsound();
  }

  if (keyIsDown(39)) {
    game.player.moveRight();
  } else if (keyIsDown(37)) {
    game.player.moveLeft();
  }
}

//  screen toggle
function keyPressed() {
  if (keyCode === ENTER) {
    if (mode === 0) {
      mode = 1;
      draw();
    } else if (mode == 1) {
      mode = 2;
      draw();
    } else if (gameEnd) {
      mode = 0;
      score = 0;
      missed = 0;
      game.trashes = [];
      themeSong.stop();
      loop();

      draw();
    }
  } else if (keyCode === 32) {
    game.player.changeColor();
  }
}

/*  if (keyCode === 39) {
    game.player.moveRight();
  } else if (keyCode === 37) {
    game.player.moveLeft();
  } else if (keyCode === 32) {
    game.player.changeColor();
  } */

  function playsound() 
  {
    if(themeSong.isPlaying() == false) 
    {
      themeSong.play();
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
