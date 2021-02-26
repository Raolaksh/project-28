const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
// const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Creating the Bodies Here
	
    ground = new Ground(800,678,1600,40);

	stone = new Stone();

	tree = new Tree(1200,350,500,500);

	mango1 = new Mango(1110,100,40);
	mango2 = new Mango(990,230,40);
	mango3 = new Mango(1490,240,40);
	mango4 = new Mango(1280,100,40);
	mango5 = new Mango(1203,250,40);
	mango6 = new Mango(1353,200,40);
	mango7 = new Mango(1103,280,40);
	mango8 = new Mango(1153,200,40);
	mango9 = new Mango(1233,180,40);
	mango10 = new Mango(1320,250,40);

	boy = new Boy();

  sling = new Slingshot(boy.body,{x:200,y:350});

	Engine.run(engine);
  
}

function draw() {
  background("lightblue");

  tree.display();
  stone.display();
  ground.display();


  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  boy.display();

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}



