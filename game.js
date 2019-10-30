let score = 0; 
let missed = 0;

class Game {
  constructor() {
    // console.log('game constructor');
    this.background = new Background();
    this.player = new Player();
    this.trash = new Trash();
    // this.floor;
    this.trashes = [];
  }

  preload() {
    // console.log("game preload");
    this.background.preload();
    this.player.preload();
  }

  setup() {
    // console.log("game setup");
    this.player.setup();
  }

  isFloorCollision(trash, floorT) {
    // console.log(trash.y, trash.height);

    return trash.y == floorT - 51;
  }

  isCollision(trash, player) {
    if (trash.y >= 650) return false;
    if (
      trash.y > player.y &&
      (trash.x > player.x && trash.x + trash.width < player.x + player.width)
    ) {
      //console.log("categ ?", trash.randomTrash.category,player.colors[(player.selectedColor + 2) % 3]);
      if (
        (trash.randomTrash.category === "bio" &&
          player.colors[(player.selectedColor + 2) % 3] === "brown") ||
        (trash.randomTrash.category === "plastic" &&
          player.colors[(player.selectedColor + 2) % 3] === "yellow") ||
        (trash.randomTrash.category === "none" &&
          player.colors[(player.selectedColor + 2) % 3] === "black")
      ) {
        score += 1;
      } else {
        missed++;
      }
      //   console.log("IN");
      // console.log(player.colors[(player.selectedColor + 2) % 3]);
      return true;
    }
    //console.log("no collision, missed++");
    return false;
  }

  draw() {
    this.background.draw();
    this.player.draw();
    fill("greenyellow");
    text("Score: " + score, 30, 50);
    push();
    fill("red");
    text("Missed: " + missed, 30, 100);
    pop();

    if (frameCount > 300 && frameCount % 120 === 0) {
      this.trashes.push(new Trash());
    }
    this.trashes.forEach((trash, index) => {
      if (!trash.img) trash.preload();
      trash.draw();

      if (this.isCollision(trash, this.player)) {
        this.trashes.splice(index, 1);
        //console.log(score++);
      }

      if (this.isFloorCollision(trash, this.floor)) {
        missed++;
        // this.trashes.splice(index, 1); // removes 1 elem
      }
      if (
        this.isFloorCollision(trash, this.floor) &&
        !this.isCollision(trash, this.player)
      ) {
      }
      if (missed === 10){ 
        noLoop();
      }
    });
  }
}
