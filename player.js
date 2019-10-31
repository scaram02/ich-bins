var players = [];

class Player {
  constructor() {
    this.x = 100;
    this.y = 550;
    this.width = 100;
    this.colors = ["yellow", "black", "brown"];
    this.selectedColor = 0;
    this.img = [];
    this.velocity = 0; 
  }

  preload() {
    for (var i = 0; i < 3; i++) {
      this.img[i] = loadImage("assets/bin" + i + ".png");
    }
  }
  setup() {}

  draw() {
    image(this.img[this.selectedColor], this.x, 550, 100, 150); //  could make x location random later
  }


   moveRight() {
     if (this.x < 900) {
       this.x += 4 * this.velocity; 
       this.velocity += 0.02;      
     }
   }
   moveLeft() {
     if (this.x > 0) {
       this.x -= 2 * this.velocity; 
        this.velocity += 0.02;      
     } else {
       this.velocity = 1;
     }
   }



  changeColor() {
    this.selectedColor = (this.selectedColor + 1) % this.colors.length;
  }
}
