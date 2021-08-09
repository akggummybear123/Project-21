
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj, leftSide, rightside, world;
var radius = 40;

function setup() {
	createCanvas(1600, 700);

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(100, 500, radius/2, ball_options);
	World.add(world, ball);

	groundObj = new Ground(width/2, 650,width, 20);
	leftSide = new Ground(1000, 600, 20, 120);
	rightside = new Ground(1300, 600, 20, 120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	
	ellipse(ball.position.x, ball.position.y, radius, radius);

	groundObj.display();
	leftSide.display();
	rightside.display();
	


  drawSprites();
 
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, {x:85, y:-85});
	}
}

