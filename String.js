class String{
	//constructing the body
	constructor(bodyA,bodyB){
		//giving options to the body
		var options={
		   bodyA:bodyA,
		   bodyB:bodyB,
		   stiffness:0.05,
		   length:150
        	}
		//shape of the body
		this.string = Constraint.create(options);
		World.add(world,this.string);

		}
	//displaying the body
	display(){
		var a = this.string.bodyA.position;
		var b = this.string.bodyB.position;

        strokeWeight(4);
 		line(a.x,a.y,b.x,b.y);

	}

}
