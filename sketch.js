
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Engine, world, dustbin, paper;

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	dustbin = new dustbin (720, 390, 110, 10);
	paper = new paper (100, 300, 10);
	ground = Bodies.rectangle(width/2, 400, width, 10, 
		{
    
		isStatic: true
	});
	world.add(world, ground);
}

function draw() {
	background("black");
  rectMode(CENTER);
  background(0);

 dustbin.display();
 paper.display();
  drawSprites();
 
}

function Keypressed(){
	if (keyCode === UP_ARROW){
		Matter.body.applyForce(paper.body, paper.body.position, {
			x:12,
			y:-13
		});
	}
}


