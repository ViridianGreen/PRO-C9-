

  var red; 
  var blue; 
  var pink; 
  var purple; 

function preload(){
  red = loadImage("red.png");
  blue=loadImage("blue.png")
  pink=loadImage("pink.png")
  purple=loadImage("purple.png")

}

function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
  box2 =createSprite(200,200,30,30);
  box2.visible=false
  box3 =createSprite(200,200,30,30);
  box3.visible=false
  box4 =createSprite(200,200,30,30);
  box4.visible=false

}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  if(keyIsDown(RIGHT_ARROW)){
    background("red")
    box.visible=true
    box.addImage("pink",pink)
    box2.visible=false
    box3.visible=false
    box4.visible=false
    
  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("lavender");
    box2.visible=true
    box2.addImage("purple",purple)
    box2.scale=1
    box.visible=false
    box3.visible=false
    box4.visible=false
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("magenta");
    box.visible=false
    box2.visble=false
    box2.scale=0;
    box4.visible=false
    box3.visible=true
    box3.addImage("blue",blue)
    
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("pink");
    box.visible=false
    box2.visible=false;
    box3.visible=false
    box4.visible=true
    box4.addImage("red",red)
   
  }


  
  drawSprites();
}

