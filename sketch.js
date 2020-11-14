const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, boy, boyimg, tree, treeimg;
var rock, fruit, fruit2, fruit3, fruit4;
var launch;

function preload()
{
	boyimg = loadImage("boy.png");
	treeimg = loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground=createSprite(400, 690, 800, 20);

	/*boy = createSprite(100, 600, 50, 50);
	boy.addImage(boyimg);	
	boy.scale = 0.15;*/
	
	fruit = new mango(650, 450, 20, 20);
	fruit2 = new mango(640, 430, 20, 20);
	fruit3 = new mango(670, 460, 20, 20);
	fruit4 = new mango(650, 470, 20, 20);



	tree = createSprite(650, 480, 50, 50)
	tree.addImage(treeimg);
	tree.scale = 0.35;

	//Create the Bodies Here.

	

    rock = new stone(10, 500, 10, 10);
	launch = new launcher(rock.body, {x:10, y:500});
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boyimg, 50, 500, 250, 250 )
  
  rock.display();
fruit.display();
fruit3.display();
fruit2.display();
fruit4.display();
launch.display();

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(rock.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
	launch.fly();
}