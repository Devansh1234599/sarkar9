var garden,rabbit,apple,leaf,orangeleaf;
var gardenImg,rabbitImg,appleimage,leafimage,orangeleafimage

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimage = loadImage("apple.png");
  leafimage = loadImage("leaf.png");
  orangeleafimage = loadImage("orangeLeaf.png")
  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
  

  
  
  
  
}


function draw() {
  background(0);
 
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  
  
   
  
  var select=Math.round(random(1,3))
  
  if(frameCount%80==0){
    if (select==1){
       apples()
      
    }
    else if(select==2)
       leaves()
  }
  else if(select==3){
    orangeleaves()
  }
}

function apples(){
  apple=createSprite(random(50,370),40,10,10)
  apple.addImage("apple",appleimage)
  apple.velocityY=9
  apple.lifetime=50
  apple.scale=0.07
}


function leaves(){
  leaf=createSprite(random(50,370),40,10,10)
  leaf.addImage("leaf",leafimage)
  leaf.velocityY=9
  leaf.lifetime=50
  leaf.scale=0.07
}


function orangeleaves(){
  orangeleaf=createSprite(random(50,370),40,10,10)
  orangeleaf.addImage("orangeleaf",orangeleafimage)
  orangeleaf.velocityY=9
  orangeleaf.lifetime=50
  orangeleaf.scale=0.07
}