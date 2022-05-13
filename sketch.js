var ball;
var ground2;
var left;
var right;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//function preload()
//{
 	
//}

function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  ground2 =new Ground(400,685,800,12);
  left =new Ground(750,615,10,120);
  right = new Ground(550,615,10,120);

  var ball_options = {
	isStatic:false,
	restitution:0.3,
    friction:0,
    density:1.2
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
   
  ellipseMode(RADIUS);
  rectMode(CENTER);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  ground2.show();
  left.show();
  right.show();
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20 );
  
  drawSprites();

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    ball.position.y = ball.position.y - 12;
     ball.position.x = ball.position.x + 10;   
  }
}


