
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

	mango = new Mango(700,300,20);
	mango2 = new Mango(900,200,20);
	mango3 = new Mango(1000,350,20);
	mango4 = new Mango(1100,200,20);
	mango5 = new Mango(800,100,20);

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
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  collisionDetection(stone, mango);
  collisionDetection(stone, mango2);
  collisionDetection(stone, mango3);
  collisionDetection(stone, mango4);
  collisionDetection(stone, mango5);

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

function collisionDetection(object1, object2) {

	if(object1.x - object2.x < object1.width/2 + object2.width/2 && 
	   object2.x - object1.x < object2.width/2 + object1.width/2 &&
	   object1.y - object2.y < object1.height/2 + object2.height/2 && 
	   object2.y - object1.y < object2.height/2 + object1.height/2) {
	   Matter.Body.setStatic(object2.body, false);
	}

	else {
		Matter.Body.setStatic(object2.body, true);
	}
}