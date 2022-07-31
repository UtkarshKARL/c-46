let ground;
let lander;
var lander_img;
var bg_img;

var vy = 0;
var vx=0;
var g = 0.05;
var thrust,leftthrust,rightthrust;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  thrust = loadAnimation("b_thrust_1.png","b_thrust_2.png","b_thrust_3.png") 
  leftthrust = loadAnimation("left_thruster_1.png","left_thruster_2.png")
  rightthrust = loadAnimation("right_thruster_1.png","right_thruster_2.png")
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle",0,0,200,200)
  lander.addAnimation("thrust",thrust)
  lander.addAnimation("left",leftthrust)
  lander.addAnimation("right",rightthrust)
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;

  lander.position.x +=vx
  drawSprites();
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
  {
    upward_thrust();
    lander.changeAnimation('thrust');
    thrust.nextFrame();
    
  }

  if(keyCode==LEFT_ARROW)
  {
    left_thrust();
    lander.changeAnimation('left');
    
    
  }

  if(keyCode==RIGHT_ARROW)
  {
    right_thrust();
    lander.changeAnimation('right');
    
    
  }
}

function upward_thrust()
{
  vy = -1;
}
function left_thrust()
{
  vx += 0.2;
}
function right_thrust()
{
  vx -= 0.2;
}
