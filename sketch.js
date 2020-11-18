var bullet,wall;
var speed,weight;
var thickness;

function setup(){
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,50,5);
  bullet.velocityX=speed;
  bullet.shapeColor="red";

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="grey";

}

function draw(){
  background("black");
  if(isCollide(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed /(thickness * thickness * thickness);

    if (damage>10)
    {
      wall.shapeColor="red";
    }

    if(damage<10)
    {
      wall.shapeColor="green";
    }

  }

  drawSprites();
}

function isCollide(bullet1,wall2)
{
  bulletRightEdge=bullet1.x+bullet1.width;
  wallLeftEdge=wall2.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  else{
    return false;
  }
}

