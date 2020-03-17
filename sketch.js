const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  pivot = new Pivot(200,100,200,20);

  bob = new Bob(200,200,80);
  
  string = new String(bob.body,pivot.body);
}


function draw() {
  background(255); 
  Engine.update(engine);
  
  pivot.display();

  bob.display();

  string.display();
  
  if(keyCode === ENTER){
    bob.body.position.y = mouseY;
    bob.body.position.x = mouseX;
  }

  else if (keyCode === SHIFT){
    bob.body.position.x = 200;
    bob.body.position.y = 200;
  }

  textSize(18);
  text("Press Enter to oscillate the bob with mouse",25,20);
  text("Press Shift to stop the bob from oscillating",25,50);

}
