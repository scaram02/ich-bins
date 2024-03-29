let object = [
  { name: "apple", category: "bio", imgURL: "assets/apple.png" },
  { name: "banana", category: "bio", imgURL: "assets/banana.png" },
  { name: "broccoli", category: "bio", imgURL: "assets/broccoli.png" },
  { name: "bottle", category: "plastic", imgURL: "assets/bottle.png" },
  { name: "laundry", category: "plastic", imgURL: "assets/laundry.svg" },
  { name: "spray", category: "plastic", imgURL: "assets/spray.png" },
  { name: "shoe", category: "none", imgURL: "assets/shoe.png" },
  { name: "lightbulb", category: "none", imgURL: "assets/lightbulb.png" },
  { name: "tp", category: "none", imgURL: "assets/tp.png" }
];

class Trash {
  constructor() {
    this.x = Math.random() * 950; 
    this.y = 0;
    this.width = 49; 
    this.height = 49;

    this.randomTrash = object[Math.floor(Math.random() * object.length)]; 
    this.name = this.randomTrash.name;
    this.category = this.randomTrash.category;
    this.imgUrl = this.randomTrash.imgURL;
    
  }

  preload() {
    this.img = loadImage(this.imgUrl);
  }

  setup() {}

  draw() {

    if (this.y > 650) {
      this.y = 650;
    } else {
      this.y++;
    }

    image(this.img, this.x, this.y, this.width, this.height);
  }
}
