var block1
var block2
var block3
var plane
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var block1_options = {
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}

	var block2_options = {
		restitution:0.01,
		friction:1,
		frictionAir:0.1
	}

	var block3_options = {
		restitution:0.5,
		friction:0.02,
		frictionAir:0.3
	}

	var plane_options={
		isStatic : true
	}

	block1 = Bodies.circle(240,10,20,block1_options);
    World.add(world,block1);

  	block2 = Bodies.rectangle(130,50,10,40,block2_options);
  	World.add(world,block2);

  	block3 = Bodies.rectangle(370,50,10,40,block3_options);
  	World.add(world,block3);

	plane = Bodies.rectangle(400,700,800,20,plane_options);
	World.add(world,plane);

	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() 
{
  background("GREEN");
  Engine.update(engine);
  
  ellipse(block1.position.x,block1.position.y,20);
  rect(plane.position.x,plane.position.y,800,20);
  rect(block2.position.x,block2.position.y,40)
  rect(block3.position.x,block3.position.y,80,40);
}



