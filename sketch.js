
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var chain1, stone1, tree1;
var mango1, mango2, mango3, mango4, mango5;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 670);

	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(800,620,1600,40);
	boy1 = new Boy(250,550,200,270);
	tree1 = new Tree(1050,390,400,500);
	stone1 = new Stone(100,100,20);
	mango1 = new Mango(950,260,20);
	mango2 = new Mango(1000,300,20);
	mango3 = new Mango(1050,230,20);
	mango4 = new Mango(1100,320,20);
	mango5 = new Mango(1150,240,20);
	chain1 = new Chain(stone1.body, {x:200,y:200});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(51,207,255);

  ground1.display();
  boy1.display();
  tree1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectcollision(stone1,mango1);
  detectcollision(stone1,mango2);
  detectcollision(stone1,mango3);
  detectcollision(stone1,mango4);
  detectcollision(stone1,mango5);
  
  drawSprites();
}

function mouseDragged()
{
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY}); 
}

function mouseReleased()
{
	chain1.fly(); 
}

function keyPressed() {
	if (keyCode === 32){
    Matter.Body.setPosition(stone1.body, {x:200, y:200}) 
	  chain1.attach(stone1.body);
	  }
  }
  
function detectcollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }
}
