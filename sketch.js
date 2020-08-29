
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, boyImage, ground;

var gameState = "onSling";

function preload() {
	boyImage = loadImage("Images/boy.png");
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = Bodies.rectangle(250, 720, 100, 150, {isStatic: true});
	World.add(world, boy);

	ground = Bodies.rectangle(600,790,1200,10, {isStatic: true});
	World.add(world, ground);

	stone = new Stone(230,730,100,100);

	rope = new Rope(stone.body, {x: 200, y: 650});

	tree = new Tree(870,400,700,800);

	mango = new Mango(500,600,4);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(225);

  rect(ground.position.x, ground.position.y,1200,10);
  
  imageMode(CENTER);
  image(boyImage, boy.position.x, boy.position.y,200,250);

  rope.display();

  tree.display();
  
  stone.display();

  mango.display();

  drawSprites();
 
}

function mouseDragged() {
	if(gameState === "onSling") {
		Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
	}
}

function mouseReleased(){
	rope.fly();
	gameState = "launched";
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:230, y:730});

		gameState = "onSling";

		rope.attach(stone.body);
	}
}