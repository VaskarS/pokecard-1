var backgrounds
function preload()
{
  card1Img=loadImage("bulbasaur.jpeg");
  card2Img=loadImage("charisard.jpeg");
  card3Img=loadImage("charmendar.jpeg");
  card4Img=loadImage("clefary.jpeg");
  card5Img=loadImage("clefarys evolution.jpeg");
  card6Img=loadImage("eevee.jpeg");
  card7Img=loadImage("gigantamax charisard.jpeg");
  card8Img=loadImage("gigantamax pikachu.jpeg");
  card9Img=loadImage("gigantamax venasaur.jpeg");
  card10Img=loadImage("ivysaur.jpeg");
  card11Img=loadImage("jigglypuff.jpeg");
  card12Img=loadImage("lefeon.jpeg");
  card13Img=loadImage("mega charisard x.jpeg");
  card14Img=loadImage("mega charisard y.jpeg");
  card15Img=loadImage("mega togekiss.jpeg");
  card16Img=loadImage("mega venasaur.jpeg");
  card17Img=loadImage("pikachu.jpeg");
  card18Img=loadImage("raichu.jpeg");
  card19Img=loadImage("togekiss.jpeg");
  card20Img=loadImage("togepi.jpeg");
  card21Img =loadImage("togetic.jpeg");
  card22Img =loadImage("venasaur.jpeg");
  backgroundImg =loadImage("background.jpeg");
  cardbackImg =loadImage("card back.jpeg");
}

function setup() {
  createCanvas(1280, 640);
  backgrounds = createSprite(640,350,10,10);
  backgrounds.addImage(backgroundImg);
  backgrounds.scale = 1.7,1;


  card1=createSprite(200,150,10,10);
  card1.addAnimation("cardout",cardbackImg);
  card1.scale=0.22;

  card2=createSprite(400,150,10,10);
  card2.addAnimation("cardout",cardbackImg);
  card2.scale=0.22;

  card3=createSprite(600,150,10,10);
  card3.addAnimation("cardout",cardbackImg);
  card3.scale=0.22;

  card4=createSprite(800,150,10,10);
  card4.addAnimation("cardout",cardbackImg);
  card4.scale=0.22;

  card5=createSprite(1000,150,10,10);
  card5.addAnimation("cardout",cardbackImg);
  card5.scale=0.22;

  card6=createSprite(200,450,10,10);
  card6.addAnimation("cardout",cardbackImg);
  card6.scale=0.22;

  card7=createSprite(400,450,10,10);
  card7.addAnimation("cardout",cardbackImg);
  card7.scale=0.22;

  card8=createSprite(600,450,10,10);
  card8.addAnimation("cardout",cardbackImg);
  card8.scale=0.22;

  card9=createSprite(800,450,10,10);
  card9.addAnimation("cardout",cardbackImg);
  card9.scale=0.22;

  card10=createSprite(1000,450,10,10);
  card10.addAnimation("cardout",cardbackImg);
  card10.scale=0.22;

}


function draw() {
 
  background(0);
  drawSprites();
 
  }




 