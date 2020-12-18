const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world,object;
var box1

function setup() {
  createCanvas(800,400);

engine = Engine.create();
world = engine.world;

box1 = new Box(200,100,100,50);
box2 = new Box(235,50,70,100)

ground = new Ground(width/2,height,width,40);

}

function draw() {
  background(0);
  Engine.update(engine) 
  box1.display();
  box2.display();
  ground.display();
}