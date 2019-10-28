let object = [
  { name: "apple", category: "bio", imgURL: "assets/apple.png" },
  { name: "banana", category: "bio" },
  { name: "broccoli", category: "bio" },
  { name: "bottle", category: "plastic" },
  { name: "laundry", category: "plastic" },
  { name: "spray", category: "plastic" },
  { name: "shoe", category: "none" },
  { name: "lightbulb", category: "none" },
  { name: "tp", category: "none" }
];

class Trash {
  constructor() {
    this.x = Math.random() * 1000;
    this.y = 0;
    this.width = 20;
    this.height = 20;
  }

  preload() {
    // this.object[0] = loadImage("assets/apple.png");
    // this.object[1] = loadImage("assets/banana.png");
    // this.object[2] = loadImage("assets/broccoli.png");
    // this.object[3] = loadImage("assets/bottle.jpg");
    // this.object[4] = loadImage("assets/laundry.svg");
    // this.object[5] = loadImage("assets/spray.png");
    // this.object[6] = loadImage("assets/tp.png");
    this.img = loadImage(object[0].imgURL);
    console.log(this.img);
  }

  setup() {}

  draw() {
    this.y++;
    rect(this.x, this.y, this.width, this.height);
    // Image(this.img, this.y, 10, 10);
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
