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

  draw() {
    this.background.draw();
    this.player.draw();
    if (frameCount > 300 && frameCount % 120 === 0) {
      // how come after 5 sec my player stops moving
      this.trashes.push(new Trash());
    }
    this.trashes.forEach(
        (trash, index) => {
      trash.draw();

      if (trash.y + 150 > windowHeight) {
        this.trashes.splice(index, 1); // removes 1 elem
        console.log("removed");
      }
      if (this.isCollision(trash, this.player)){
           console.log("YAY");
      }
     }
    );
  }
  isCollision(trash, player){
    //   if (trash.x + trash.width < player.x || player.x + trash.width < trash.x)
    //   {
    //       return false;
    //   }
    //   if (trash.y > player.y + player.height || player.y > trash.y + trash.height){
    //       return false;
    //   }
    //   return true;
    if (player.y + player.height > trash.y ||
        trash.y + player.height > player.y) {
            return false;
        }
        if (player.x < trash.x + trash.width ||
            trash.x < player.x + player.width) {
                return false;
            }
    return true;
  }
}
 