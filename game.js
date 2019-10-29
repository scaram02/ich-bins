let score = 0;

class Game {
  constructor() {
    // console.log('game constructor');
    this.background = new Background();
    this.player = new Player();
    this.trash = new Trash();

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

  isCollision(trash, player) {
    if (
      trash.y > player.y &&
      (trash.x > player.x && trash.x + trash.width < player.x + player.width)
    ) {
      //   console.log("IN");
      console.log(trash.category);
      console.log(player.colors[(player.selectedColor + 2) % 3]);
      return true;
    }
    return false;
  }

  draw() {
    this.background.draw();
    this.player.draw();
    if (frameCount > 300 && frameCount % 120 === 0) {
      this.trashes.push(new Trash());
    }
    this.trashes.forEach((trash, index) => {
      if(!trash.img)trash.preload();
      trash.draw();
      this.isCollision(trash, this.player);

      if (trash.y + 150 > windowHeight) {
        this.trashes.splice(index, 1); // removes 1 elem
        console.log("removed");
      }
      if (this.isCollision(trash, this.player)) {
        this.trashes.splice(index, 1);
        console.log(score++); //this works/updates if you comment out
      }
    });
  }
}