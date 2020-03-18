class Pivot {
    //constructing the body
    constructor(x,y,width,height) {
      //giving it options
      var options = {
          isStatic: true
      }
      //shape of the body
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    
    }
    //displaying the body
    display(){
    
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
    
    }
    
  }
