class String{
	constructor(bodyA,bodyB){

		var options={
		   bodyA:bodyA,
		   bodyB:bodyB,
		   stiffness:0.05,
		   length:150
        }
        
		this.string = Constraint.create(options);
		World.add(world,this.string);

	}
	display(){
		var a = this.string.bodyA.position;
		var b = this.string.bodyB.position;

        strokeWeight(4);
 		line(a.x,a.y,b.x,b.y);

	}

}