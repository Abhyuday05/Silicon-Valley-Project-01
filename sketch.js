var audi, audiImg;
var ferrari, fImg;
var lamborghini, lImg;
var mb, mbImg;
var porsche, pImg;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function preload(){
  audiImg = loadImage("Audi.jpeg");
  fImg = loadImage("Ferrari.png");
  lImg = loadImage("Lamborghini.png");
  mbImg = loadImage("Mercedes Benz.jpeg");
  pImg = loadImage("Porsche.jpeg");
}

function draw() {
  background(255,255,255);  
  drawSprites();
}