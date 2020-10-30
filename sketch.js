var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed=random(80, 180);
  weight=random(400, 1500);
  
  car=createSprite(50, 200, 50, 50);
  car.shapeColor=("white");
  car.velocityX=speed;
  
  wall=createSprite(1500, 200, 60, height/2);
  wall.shapeColor=("black");
}

function draw() {
  background("blue"); 
  
if(wall.x-car.x<(car.width+car.height)/2){
  car.SetVelocityX=0;
  var deformation=0.5*weight*speed*speed/22500;
  
  
  
  if(deformation<=100){
    car.velocityX=0;
    car.shapeColor=("green");
    text("Not lethal for passengers", 1450, 50);
    }

  if(deformation>=100   && deformation<=179){
    car.velocityX=0;
    car.shapeColor=("yellow");
    text("Lethal for passengers", 1450, 50);
    }
  
  
  if(deformation>=180){
    car.VelocityX=0;
    car.shapeColor=("red");
    text("Very lethal for passengers!", 1450, 50);
  }

  
  
}

  drawSprites();
}

function isTouching(car,wall){
  if(car.x - wall.x < car.width/2+  wall.width/2
    && wall.x - car.x < car.width/2 + wall.width/2
     && car.y - wall.y < car.height/2 + wall.height/2
     && wall.y - car.y < car.height/2 + wall.height/2){
  return true;
  }
  else{
    return false;
  }
}