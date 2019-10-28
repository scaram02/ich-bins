// let img;
// let side = 20; // ??
// let x = 0;
// let y = 0;

class Player {
  constructor() {
    this.x = 100;
    this.y = 550;
    this.width = 100;
  }

  preload() {
    this.player = loadImage("assets/biotonne.png");
  }

  setup() {}

  draw() {
    image(this.player, this.x, 550, 100, 150); // could make x location random later
  }

  moveRight() {
    if (this.x < 900) {
      this.x += 50;
    }
  }
  moveLeft() {
    if (this.x > 0) {
      this.x -= 50;
    }
  }
}
