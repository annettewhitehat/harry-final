var harry, trophy;
var m1, m2, m3, m4, m5, m6, m7, m8, m9, m10;
var m11, m12, m13, m14, m15, m16, m17, m18, m19, m20;
var m21, m22, m23, m24, m25, m26, m27, m28, m29, m30;

function setup(){

  createCanvas(800,600);

  harry = createSprite(65,49,40,40);
 harry.shapeColor = "green";
  trophy = createSprite(486,297,20,20);
 trophy.shapeColor = "yellow";

   m1 = createSprite(208,444,15,100);
   m2 = createSprite(155,498,120,15);
   m3 = createSprite(261,387,120,15);
   m4 = createSprite(313,330,15,100);
   m5 = createSprite(211,273,220,15);
   m6 = createSprite(53,417,100,15);
   m7 = createSprite(147,315,15,100);
   m8 = createSprite(108,216,15,100);
   m9 = createSprite(160,174,100,15);
   m10 = createSprite(279,170,15,220);
   m11 = createSprite(6,300,15,520);
   m12 = createSprite(310,567,650,15);//lowerborder
   m13 = createSprite(460,44,674,15); //upperborder
   m14 = createSprite(303,515,15,100);
   m15 = createSprite(432,515,15,100);
   m16 = createSprite(430,458,140,15);
   m17 = createSprite(493,403,15,100);
   m18 = createSprite(491,346,150,15);
   m19 = createSprite(558,292,15,100);
   m20 = createSprite(423,300,15,100);
   m21 = createSprite(554,235,100,15);
   m22 = createSprite(511,188,15,100);
   m23 = createSprite(442,146,130,15);
   m24 = createSprite(600,98,15,120);
   m25 = createSprite(794,318,15,560);
   m26 = createSprite(720,182,135,15);
   m27 = createSprite(630,310,130,15);
   m28 = createSprite(627,373,15,130);
   m29 = createSprite(64,114,100,15); //invisible-entry
   m30 = createSprite(690,498,180,15); //invisible-exit
 
   m29.shapeColor = "blue";
   m30.shapeColor = "blue";
}

function draw() {
  background("blue");  
  text(mouseX+","+mouseY, mouseX, mouseY);
  harry.velocityX = 0;
  harry.velocityY = 0;
  
  if(harry.bounce(trophy)){
    harry.shapeColor = "pink";
    trophy.shapeColor = "blue";
    text("I TOOK THE TROPHY",400,250);
  }

 if(keyDown("DOWN_ARROW")){
  harry.velocityX = 0;
  harry.velocityY = 4;
 }

 if(keyDown("UP_ARROW")){
  harry.velocityX = 0;
  harry.velocityY = -4;
 }

 if(keyDown("LEFT_ARROW")){
  harry.velocityX = -4;
  harry.velocityY = 0;
 }

 if(keyDown("RIGHT_ARROW")){
  harry.velocityX = 4;
  harry.velocityY = 0;
 }
  harry.bounceOff(m1);
  harry.bounceOff(m2);
  harry.bounceOff(m3);
  harry.bounceOff(m4);
  harry.bounceOff(m5);
  harry.bounceOff(m6);
  harry.bounceOff(m7);
  harry.bounceOff(m8);
  harry.bounceOff(m9);
  harry.bounceOff(m10);
  harry.bounceOff(m11);
  harry.bounceOff(m12);
  harry.bounceOff(m13);
  harry.bounceOff(m14);
  harry.bounceOff(m15);
  harry.bounceOff(m16);
  harry.bounceOff(m17);
  harry.bounceOff(m18);
  harry.bounceOff(m19);
  harry.bounceOff(m20);
  harry.bounceOff(m21);
  harry.bounceOff(m22);
  harry.bounceOff(m23);
  harry.bounceOff(m24);
  harry.bounceOff(m25);
  harry.bounceOff(m26);
  harry.bounceOff(m27);
  harry.bounceOff(m28);
  harry.bounceOff(m29);
  harry.bounceOff(m30);
  
  harry.collide(trophy);
  
  drawSprites();

  text("ENTRY",63,22);
  text("EXIT",704,580);
}

