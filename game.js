let score = 0;
let missed = 0;
let gameEnd = false;

class Game {
  constructor() {
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
    return trash.y == floorT - 51; // might need to change now
  }

  isCollision(trash, player) {
    if (trash.y >= 650) return false;
    if (
      trash.y > player.y &&
      (trash.x > player.x && trash.x + trash.width < player.x + player.width)
    ) {
      if (
        (trash.randomTrash.category === "bio" &&
          player.colors[(player.selectedColor + 2) % 3] === "brown") ||
        (trash.randomTrash.category === "plastic" &&
          player.colors[(player.selectedColor + 2) % 3] === "yellow") ||
        (trash.randomTrash.category === "none" &&
          player.colors[(player.selectedColor + 2) % 3] === "black")
      ) {
        score += 1;
        yaySound.play();
      } else {
        missed++;
        noooSound.play();
      }
      return true;
    }
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

    if (frameCount > 120 && frameCount % 120 === 0) {
      this.trashes.push(new Trash());
    }
    this.trashes.forEach((trash, index) => {
      if (!trash.img) trash.preload();
      trash.draw();

      if (this.isCollision(trash, this.player)) {
        this.trashes.splice(index, 1);
      }

      if (this.isFloorCollision(trash, this.floor)) {
        missed++;
        // removes 1 elem
      }
      if (
        this.isFloorCollision(trash, this.floor) &&
        !this.isCollision(trash, this.player)
      ) {
        floorSound.play();
      }
      if (missed === 3) {
        //10
        gameEnd = true; // could add sound
        background("dimgray");
        let yourScore = "You trashed your park! Your score: " + score;
        let theBestScore =
          "Your best score: " + localStorage.getItem("bestScore");
        push();
        textAlign(CENTER, CENTER); // make universal
        text(yourScore, 325, 200, 370);
        textAlign(CENTER, CENTER); // make universal
        text(theBestScore, 305, 330, 410);
        text("Press enter to play again!", 520, 600);
        pop();
        noLoop();
        //background, add button, reset score window.location.reload orrrrr js score reset, empty array of trash, mode back
      }

      //   local high score storage
      if (
        !localStorage.getItem("bestScore") ||
        localStorage.getItem("bestScore") < score
      ) {
        localStorage.setItem("bestScore", score);
      }
      console.log(localStorage.getItem("bestScore"));
    });
  }
}
