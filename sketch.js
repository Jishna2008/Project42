var bg,iss,issImg,spaceCraft,sCraftImg,craftAnimation;
function preload(){
bg=loadImage("spacebg.jpg");
issImg=loadImage("iss.png")
sCraftImg=loadAnimation("spacecraft1.png");
craftAnimation=loadAnimation("spacecraft2.png","spacecraft3.png","spacecraft4.png")
}

function setup() {
  createCanvas(800,600);
  iss=createSprite(400, 280, 50, 50);
  iss.addImage(issImg);
  spaceCraft=createSprite(350,460,50,50);
  spaceCraft.scale=0.3;
  spaceCraft.addAnimation("static",sCraftImg);
  spaceCraft.addAnimation("moving",craftAnimation);

}

function draw() {
  background(bg);  
  spaceCraft.depth=spaceCraft.depth-1;
  spaceCraft.x +=random(-1,1);
  if(keyDown(UP_ARROW)){
    spaceCraft.y+=-2;
  spaceCraft.changeAnimation("moving",craftAnimation)
  }else if(keyDown(LEFT_ARROW)){
    spaceCraft.x+=-2;
  }
  if(spaceCraft.y<=(iss.y*2-150)&&spaceCraft.x<=(iss.x-60)){
    hasDocked=true;
    textSize(25);
    fill("white");
    text("Docking Successful",300,550);
    spaceCraft.changeAnimation("static",sCraftImg);
   spaceCraft.y=360;
  
  }
  drawSprites();
  
}