let icons;

class Background {
    constructor() {
       //  console.log("le background constructor");
        this.xPark = 0; 
    }




    preload() {
        this.bgPark = loadImage('assets/park.png');
       

    }



    draw() {
        image(this.bgPark, this.xPark, 0, width);
        

    }
}
