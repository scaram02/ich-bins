var players = [];

class Player {
  constructor() {
    this.x = 100;
    this.y = 550;
    this.width = 100;
    this.colors = ["yellow", "black", "brown"];
    this.selectedColor = 0;
    this.img = [];
  }

  preload() {
    for (var i = 0; i < 3; i++) {
      this.img[i] = loadImage("assets/bin" + i + ".png");
    }
  }
  setup() {}

  draw() {
    image(this.img[this.selectedColor], this.x, 550, 100, 150); // could make x location random later
  }

  moveRight() {
    if (this.x < 1100) {
      this.x += 50;
    }
  }
  moveLeft() {
    if (this.x > 0) {
      this.x -= 50;
    }
  }

  changeColor() {
    this.selectedColor = (this.selectedColor + 1) % this.colors.length;
  }
}
