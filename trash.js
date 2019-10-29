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
    this.x = Math.random() * 1000;
    this.y = 0;
    this.width = 40;
    this.height = 40;

    this.randomTrash = object[Math.floor(Math.random() * object.length)]; // random from object
    this.name = this.randomTrash.name;
    this.category = this.randomTrash.category;
    this.imgUrl = this.randomTrash.imgURL;
    // console.log(this.category);
  }

  preload() {
    console.log("img", this.imgUrl);
    this.img = loadImage(this.imgUrl);
  }

  setup() {}

  draw() {
    // console.log(this.img);
    this.y++;

    image(this.img, this.x, this.y, this.width, this.height);
  }
}

// let trashes = []; // ? change this in all places it says img?

// class Trash {
//     constructor() {
//         this.y = height;
//         this.x = random(width, 250); // change 250 to 0

//         this.width = 250; // change these obviously
//         this.height = 250;

//     }

// preload(){
//     this.trash = loadImage('assets/shoe.png');
// }

// draw(){
//     image(this.trash, this.x, this.y, this.width, this.height);
//     this.y += 4;
//     }
// }
