const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var raindrop;
var engine, world;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  

}

function draw() {
  Engine.update(engine)
  background(0);
  
  if(frameCount % 1 === 0){
     raindrop = new RainDrop(400,0,5,10);
    //raindrop.push(raindrop);
  }




}