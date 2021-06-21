
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var angle=60;
var angle2=10;
var angle3=120;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ground_options ={
		isStatic: true
	  };
	  ground = Bodies.rectangle(400,690,800,20,ground_options);
  	  World.add(world,ground);


	 block1 = Bodies.rectangle(200,400,150,20,ground_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(600,400,150,20,ground_options);
	World.add(world,block2);


	var ops={
		isStatic:true
	  };
	 rotator1 = Bodies.rectangle(400,200,120,20,ops);
	 World.add(world,rotator1);
	 rotator3 = Bodies.rectangle(400,200,120,20,ops);
	 World.add(world,rotator3);
	 rotator2 = Bodies.rectangle(400,200,120,20,ops);
	 World.add(world,rotator2);


	   
	 var ball_options = {
		restitution: 0.95,
		frictionAir:0.01
	  }

	  ball1 = Bodies.circle(400,0,10,ball_options);
	  World.add(world,ball1);


	  ball2 = Bodies.circle(410,0,10,ball_options);
	  World.add(world,ball2);


	  ball3 = Bodies.circle(420,0,10,ball_options);
	  World.add(world,ball3);


	  ball4 = Bodies.circle(400,0,10,ball_options);
	  World.add(world,ball4);

	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
	  ellipseMode(RADIUS);
  	background("lightgreen");
  	Engine.update(engine)

	fill("brown")
 	 rect(ground.position.x,ground.position.y,800,20);
	  rect(block1.position.x,block1.position.y,150,20);
	  rect(block2.position.x,block2.position.y,150,20);

	  Matter.Body.rotate(rotator1,angle)
	  push();
	  translate(rotator1.position.x,rotator1.position.y);
	  rotate(angle);
	  rect(0,0,120,20);
	  pop();
	  
	  angle +=10;

	  Matter.Body.rotate(rotator2,angle)
	  push();
	  translate(rotator2.position.x,rotator2.position.y);
	  rotate(angle2);
	  rect(0,0,120,20);
	  pop();
	  
	  angle2 +=10;

	  Matter.Body.rotate(rotator3,angle)
	  push();
	  translate(rotator3.position.x,rotator3.position.y);
	  rotate(angle3);
	  rect(0,0,120,20);
	  pop();
	  
	  angle3 +=10;



	  ellipse(ball1.position.x,ball1.position.y,10);
	  ellipse(ball2.position.x,ball2.position.y,10);
	  ellipse(ball3.position.x,ball3.position.y,10);
	  ellipse(ball4.position.x,ball4.position.y,10);
  	//drawSprites();
 
}



