let icons;

class Background {
    constructor() {
        this.xPark = 0; 
    }




    preload() {
        this.bgPark = loadImage('assets/park.png');
       

    }



    draw() {
        image(this.bgPark, this.xPark, 0, width);
        

    }
}
