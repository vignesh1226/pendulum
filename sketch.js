//creating global variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  //creating canvas
  createCanvas(400,400);
  //adding engine and world
  engine = Engine.create();
  world = engine.world;
  //creating a pivot
  pivot = new Pivot(200,100,200,20);
  //creating a bob
  bob = new Bob(200,200,80);
  //creating a string
  string = new String(bob.body,pivot.body);
}


function draw() {
  //background color
  background(255); 
  //updating the engine
  Engine.update(engine);
  //displaying pivot
  pivot.display();
  //displaying bob
  bob.display();
  //displaying string
  string.display();
  //condition for bob to oscillate
  if(keyCode === ENTER){
    bob.body.position.y = mouseY;
    bob.body.position.x = mouseX;
  }
  //conditions for bob to stop oscillating
  else if (keyCode === SHIFT){
    bob.body.position.x = 200;
    bob.body.position.y = 200;
  }
  //displaying text
  textSize(18);
  text("Press Enter to oscillate the bob with mouse",25,20);
  text("Press Shift to stop the bob from oscillating",25,50);

}
