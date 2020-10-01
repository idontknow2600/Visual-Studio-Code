var movingrectangle
var fixedrectangle





function setup() {
  createCanvas(800,400);
 fixedrectangle = createSprite(200, 200, 50, 80);
movingrectangle = createSprite(400,200,80,30);
fixedrectangle.shapeColor="green"
fixedrectangle.debug=true
movingrectangle.debug=true
movingrectangle.shapeColor="green"

}

function draw() {
  background(255,255,255);
  movingrectangle.y=World.mouseY  
  movingrectangle.x=World.mouseX
  
if (movingrectangle.x-fixedrectangle.x<fixedrectangle.width/2+movingrectangle.width/2&&fixedrectangle.x-movingrectangle.x<fixedrectangle.width/2+movingrectangle.width/2&&movingrectangle.y-fixedrectangle.y<movingrectangle.width/2+fixedrectangle.width/2&&fixedrectangle.y-movingrectangle.y<fixedrectangle.width/2+movingrectangle.width/2) {
  movingrectangle.shapeColor="red"
fixedrectangle.shapeColor="red"
} else {
  movingrectangle.shapeColor="green"
fixedrectangle.shapeColor="green"
}


drawSprites();
}






