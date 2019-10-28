let score = 0; // does this belong in game.js?

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
    this.trash.preload();
  }

  setup() {
    // console.log("game setup");
    this.player.setup();
  }

  isCollision(trash, player) {
    console.log(
      trash.x,
      trash.x + trash.width,
      player.x,
      player.x + player.width
    );
    if (
      trash.y > player.y &&
      (trash.x > player.x && trash.x + trash.width < player.x + player.width)
    ) {
      console.log("IN");
      return true;
    }
    return false;
  }

  draw() {
    this.background.draw();
    this.player.draw();
    if (frameCount > 300 && frameCount % 120 === 0) {
      if (!this.trashes.length) this.trashes.push(new Trash());
    }
    this.trashes.forEach((trash, index) => {
      trash.draw();
      this.isCollision(trash, this.player);

      if (trash.y + 150 > windowHeight) {
        this.trashes.splice(index, 1); // removes 1 elem
        console.log("removed");
      }
        if (this.isCollision(trash, this.player)) {
          this.trashes.splice(index, 1);
          console.log(score++);
          
        }
    });
  }
}
