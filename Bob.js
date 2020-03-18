class Bob {
    //constructing a ball
    constructor(x,y,radius) {
      //giving the options to it 
      var options = {
          density : 1.0,
          restitution : 1.0,
          frictionAir : 0.04
      }
      //shape of the body
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    
    }
    //displaying the body
    display(){

      var pos =this.body.position;
      fill("green");
      circle(pos.x, pos.y, this.radius);
    
    }

  };
