const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bridge, jointpoint, jointLink;
var stones = [];
var rightWall, leftWall, ground;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  
  rightWall = new Base(width-20, height/2, 500, 100);
  leftWall = new Base(200, height/2, 500, 100);
  ground = new Base(10, height-10, width*2, 20);
  bridge = new Bridge(15, {x:width/2-200, y:height/2-50});
  jointpoint = new Base(width-100, height/2, 40, 20);

  Matter.Composite.add(bridge.body, jointpoint);
  jointLink = new Link(bridge, jointpoint);

  for (var i = 0; i <= 8; i++) {
    var x = random(width/2-200, width/2+300);
    var y = random(-10,140);
    var stone = new Stone(x,y,80,80);
    stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);

  bridge.show();
  jointpoint.show();
  ground.show();
  rightWall.show();
  leftWall.show();

  for(var stone of stones){
    stone.show();
  }
}
