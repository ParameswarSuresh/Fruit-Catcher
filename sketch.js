const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var man, manImage;
var raindrop, lightning, lightningImage;

function preload(){
   manImage = loadImage("walking_1.png", "walking_2.png","walking_3.png", "walking_4.png","walking_5.png", "walking_6.png", "walking_7.png", "walking_8.png") 
}

function setup(){
  engine = Engine.create();
  world = engine.world;
  var canvas = createCanvas(600, 600);
  man = createSprite(width/2, 580, 70, 70);
  man = loadImage(manImage);
    
}

function draw(){
    background("black");
     Engine.update(engine);
}   

