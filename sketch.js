const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;

// 12) var que guardará objeto bala de canhão
var cannonBall;

function preload() {
  backgroundImg = loadImage("assets/background.gif");
  towerImage = loadImage("assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  

  // 15) mudar angulos para graus
  angleMode(DEGREES);

  // 16) definir ang canhão = 15
  angle = 15;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);

  cannon = new Cannon(180, 110, 130, 100, angle);

  // 13) novo obj bala de canhão, na mesma pos do canhão acima ^
  cannonBall = new CannonBall(cannon.x, cannon.y);

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  push();
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  pop();

  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();

  cannon.display();

  // 14) display da bala de canhão
  cannonBall.display();
}

// 21) chamar shoot dentro func keyReleased(){ keyCode == 32 }
function keyReleased() {
  if(keyCode === LEFT_ARROW){
    cannonBall.shoot();
  }
}

// 22) EM CANNONBALL.JS - puxar angulo na boca do canhão
