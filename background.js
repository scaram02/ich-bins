class Background {
    constructor() {
       //  console.log("le background constructor");
        this.xPark = 0; 
    }




    preload() {
      //  console.log('bg preload yo')
        this.bgPark = loadImage('assets/park.png');
       

    }



    draw() {
        image(this.bgPark, this.xPark, 0, width);
        

    }
}