var w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,t1;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  w1 = new Wall(40,175,20,250);
  w2 = new Wall(65,225,30,150);
  w3 = new Wall(95,225,30,150);
  w4 = new Wall(125,225,30,150);
  w5 = new Wall(155,225,30,150);
  w6 = new Wall(180,200,20,200);
  w7 = new Wall(240,200,20,200);
  w8 = new Wall(265,225,30,150);
  w9 = new Wall(295,225,30,150);
  w10 = new Wall(325,225,30,150);
  w11 = new Wall(355,225,30,150);
  w12 = new Wall(380,175,20,250);
  w13 = new Wall(40,95,70,15);
  w14 = new Wall(380,95,70,15);
  w15 = new Wall(210,95,70,15);
  w16  = new Wall(217,62,10,50);
  
}

function draw() {
  Engine.update(engine);
  background(255,25,255);  
  w1.display();
  w2.display();
  w3.display();
  w4.display();
  w5.display();
  w6.display();
  w7.display();
  w8.display();
  w9.display();
  w10.display();
  w11.display();
  w12.display();
  w13.display();
  w14.display();
  w15.display();
  w16.display();
  drawSprites();
  triangle (20,50,40,35,60,50);
  triangle (360,50,380,35,400,50)
  triangle (187,40,217,5,247,40); 
}