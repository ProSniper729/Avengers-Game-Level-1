//declare all the variables-Thanos,2 nova corps, maze blocks and the power stone
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var thanos, backdrop, novacorp1, novacorp2,spaceSlab;
var coin_spinning,coin;
var winImg, winSign;


function preload(){
//add image of the main maze and add images to all characters and the stone
backdropImg = loadImage("11406_original.png");
thanosImg = loadImage("thanos.png");
powerImg = loadImage("power.png");
novaImg = loadImage("Nova.png");
coin_spinning = loadAnimation("coin1 (1).png", "coin2 (1).png", "coin3 (1).png", "coin4 (1).png", "coin5 (1).png", "coin6 (1).png ", "coin7 (1).png ", "coin8 (1).png ", "coin9 (1).png ")
coinSound = loadSound("coin_collect.mp3");
dieSound = loadSound("dying.mp3");
winImg = loadImage("win.png");




}

function setup(){
    createCanvas(700,600);
//create Thanos and nova corps



slab1 = createSprite(75,45,20,100);
slab1.shapeColor = 'brown';
slab2 = createSprite(99,190,90,20);
slab2.shapeColor = 'brown';
slab3 = createSprite(230,180,20,80);
slab3.shapeColor = 'brown';
slab4 = createSprite(40,330,20,95);
slab4.shapeColor = 'brown';
slab5 = createSprite(130,50,100,20);
slab5.shapeColor = 'brown';
slab6 = createSprite(270,180,90,20);
slab6.shapeColor = 'brown';
slab7 = createSprite(340,50,100,20);
slab7.shapeColor = 'brown';
slab8 = createSprite(120,330,20,80);
slab8.shapeColor = 'brown';
slab9 = createSprite(200,330,20,80);
slab9.shapeColor = 'brown';
slab10 = createSprite(410,180,20,50);
slab10.shapeColor = 'brown';
slab11 = createSprite(340,290,100,20);
slab11.shapeColor = 'brown';
slab12 = createSprite(300,330,20,70);
slab12.shapeColor = 'brown';
slab13 = createSprite(220,460,430,20);
slab13.shapeColor = 'brown';
slab14 = createSprite(430,460,20,80);
slab14.shapeColor = 'brown';
slab15 = createSprite(530,200,20,430);
slab15.shapeColor = 'brown';
slab16 = createSprite(220,565,500,20);
slab16.shapeColor = 'brown';
slab20 = createSprite(470,10,100,20);
slab20.shapeColor = 'brown';
slab21 = createSprite(5,425,20,90);
slab21.shapeColor = 'brown';

coin1 = createSprite(120,105,20,20);
coin1.addAnimation("coinSpinning",coin_spinning);
coin1.scale = 0.7;
coin2 = createSprite(180,105,20,20);
coin2.addAnimation("coinSpinning",coin_spinning);
coin2.scale = 0.7;
coin3 = createSprite(240,105,20,20);
coin3.addAnimation("coinSpinning",coin_spinning);
coin3.scale = 0.7;
coin4 = createSprite(300,105,20,20);
coin4.addAnimation("coinSpinning",coin_spinning);
coin4.scale = 0.7;
coin5 = createSprite(360,105,20,20);
coin5.addAnimation("coinSpinning",coin_spinning);
coin5.scale = 0.7;
coin6 = createSprite(420,105,20,20);
coin6.addAnimation("coinSpinning",coin_spinning);
coin6.scale = 0.7;

coin7 = createSprite(480,40,40,40);
coin7.addAnimation("coinSpinning",coin_spinning);
coin7.scale = 0.7;
coin8 = createSprite(480,100,40,40);
coin8.addAnimation("coinSpinning",coin_spinning);
coin8.scale = 0.7;
coin9 = createSprite(480,160,40,40);
coin9.addAnimation("coinSpinning",coin_spinning);
coin9.scale = 0.7;
coin10 = createSprite(480,220,40,40);
coin10.addAnimation("coinSpinning",coin_spinning);
coin10.scale = 0.7;
coin11 = createSprite(480,280,40,40);
coin11.addAnimation("coinSpinning",coin_spinning);
coin11.scale = 0.7;
coin12 = createSprite(480,340,40,40);
coin12.addAnimation("coinSpinning",coin_spinning);
coin12.scale = 0.7;
coin13 = createSprite(480,400,40,40);
coin13.addAnimation("coinSpinning",coin_spinning);
coin13.scale = 0.7;
coin14 = createSprite(480,460,40,40);
coin14.addAnimation("coinSpinning",coin_spinning);
coin14.scale = 0.7;
coin15 = createSprite(480,520,40,40);
coin15.addAnimation("coinSpinning",coin_spinning);
coin15.scale = 0.7;

coin16 = createSprite(35,425,40,40);
coin16.addAnimation("coinSpinning",coin_spinning);
coin16.scale = 0.7;
coin17 = createSprite(95,425,40,40);
coin17.addAnimation("coinSpinning",coin_spinning);
coin17.scale = 0.7;
coin18 = createSprite(155,425,40,40);
coin18.addAnimation("coinSpinning",coin_spinning);
coin18.scale = 0.7;
coin19 = createSprite(215,425,40,40);
coin19.addAnimation("coinSpinning",coin_spinning);
coin19.scale = 0.7;
coin20 = createSprite(275,425,40,40);
coin20.addAnimation("coinSpinning",coin_spinning);
coin20.scale = 0.7;
coin21 = createSprite(335,425,40,40);
coin21.addAnimation("coinSpinning",coin_spinning);
coin21.scale = 0.7;
coin22 = createSprite(395,425,40,40);
coin22.addAnimation("coinSpinning",coin_spinning);
coin22.scale = 0.7;

coin23 = createSprite(23,108,40,40);
coin23.addAnimation("coinSpinning",coin_spinning);
coin23.scale = 0.7;
coin24 = createSprite(23,168,40,40);
coin24.addAnimation("coinSpinning",coin_spinning);
coin24.scale = 0.7;
coin25 = createSprite(23,228,40,40);
coin25.addAnimation("coinSpinning",coin_spinning);
coin25.scale = 0.7;

coin26 = createSprite(83,235,40,40);
coin26.addAnimation("coinSpinning",coin_spinning);
coin26.scale = 0.7;
coin27 = createSprite(143,235,40,40);
coin27.addAnimation("coinSpinning",coin_spinning);
coin27.scale = 0.7;
coin28 = createSprite(203,235,40,40);
coin28.addAnimation("coinSpinning",coin_spinning);
coin28.scale = 0.7;
coin29 = createSprite(263,235,40,40);
coin29.addAnimation("coinSpinning",coin_spinning);
coin29.scale = 0.7;
coin30 = createSprite(323,235,40,40);
coin30.addAnimation("coinSpinning",coin_spinning);
coin30.scale = 0.7;
coin31 = createSprite(383,235,40,40);
coin31.addAnimation("coinSpinning",coin_spinning);
coin31.scale = 0.7;
coin32 = createSprite(443,235,40,40);
coin32.addAnimation("coinSpinning",coin_spinning);
coin32.scale = 0.7;



thanos = createSprite(30,45,12,12);
thanos.addImage(thanosImg);
thanos.scale = 0.6;

powerStone = createSprite(610,60,40,40);
powerStone.addImage(powerImg);
powerStone.scale = 0.15;

novaCorp1 = createSprite(470,45,30,30);
novaCorp1.addImage(novaImg);
novaCorp1.scale = 0.7;
novaCorp1.velocityY = 5;



novaCorp2 = createSprite(110,95,40,40);
novaCorp2.addImage(novaImg);
novaCorp2.scale = 0.7;
novaCorp2.velocityX = 5;
novaCorp3 = createSprite(260,407,50,50);
novaCorp3.addImage(novaImg);
novaCorp3.scale = 0.7;
novaCorp3.velocityX = 5;

score = -1;

winSign = createSprite(350,200,400,400);
winSign.addImage(winImg);
winSign.scale = 1.6;
winSign.visible = false;


}
function draw(){
    //create the game
    background(backdropImg);

    edges = createEdgeSprites();
    thanos.bounceOff(edges);

    console.log(mouseX,mouseY);


    
     
    novaCorp1.bounceOff(slab16);
    novaCorp1.bounceOff(slab20);
    novaCorp2.bounceOff(slab15);
    novaCorp2.bounceOff(slab1);
    novaCorp3.bounceOff(slab14);
    novaCorp3.bounceOff(slab21);

    thanos.bounceOff(slab1);
    thanos.bounceOff(slab2);
    thanos.bounceOff(slab3);
    thanos.bounceOff(slab4);
    thanos.bounceOff(slab5);
    thanos.bounceOff(slab6);
    thanos.bounceOff(slab7);
    thanos.bounceOff(slab8);
    thanos.bounceOff(slab9);
    thanos.bounceOff(slab10);
    thanos.bounceOff(slab11);
    thanos.bounceOff(slab12);
    thanos.bounceOff(slab13);
    thanos.bounceOff(slab14);
    thanos.bounceOff(slab15);
    thanos.bounceOff(slab16);
    thanos.bounceOff(slab20);
    thanos.bounceOff(slab21);

    if(thanos.isTouching(coin1)){
      coin1.destroy();
      coinSound.play();
      score+=1;
    }
    if(thanos.isTouching(coin2)){
     coin2.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin3)){
     coin3.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin4)){
     coin4.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin5)){
     coin5.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin6)){
     coin6.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin7)){
     coin7.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin8)){
     coin8.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin9)){
     coin9.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin10)){
     coin10.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin11)){
     coin11.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin12)){
     coin12.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin13)){
     coin13.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin14)){
     coin14.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin15)){
     coin15.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin16)){
     coin16.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin17)){
     coin17.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin18)){
     coin18.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin19)){
     coin19.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin20)){
     coin20.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin21)){
     coin21.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin22)){
     coin22.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin23)){
     coin23.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin24)){
     coin24.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin25)){
     coin25.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin26)){
     coin26.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin27)){
     coin27.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin28)){
     coin28.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin29)){
     coin29.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin30)){
     coin30.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin31)){
     coin31.destroy();
     coinSound.play();
     score+=1;
    }
    if(thanos.isTouching(coin32)){
     coin32.destroy();
     coinSound.play();
     score+=1;
    }
    

    if (keyDown(DOWN_ARROW)) {
        thanos.velocityY = 4;
        thanos.velocityX = 0;
      
      
       }
       
       if (keyDown(LEFT_ARROW)) {
         thanos.velocityX = -4;
         thanos.velocityY = 0;
         
       }
       
       if (keyDown(UP_ARROW)) {
         thanos.velocityY = -4;
         thanos.velocityX = 0;
       }
       
      if (keyDown(RIGHT_ARROW)) {
        thanos.velocityY = 0;
        thanos.velocityX = 4;
       }

       
      if(thanos.isTouching(novaCorp1) || thanos.isTouching(novaCorp2) || thanos.isTouching(novaCorp3)){
        dieSound.play();

        thanos.x = 30;
        thanos.y = 45;
        thanos.velocityX = 0;
        thanos.velocityY = 0;
    

    }    

    if(thanos.isTouching(powerStone)){
      thanos.velocityX = 0;
      thanos.velocityY = 0;

      novaCorp1.velocityX = 0;
      novaCorp1.velocityY = 0;
      novaCorp1.velocityX = 0;
      novaCorp2.velocityX = 0;
      novaCorp2.velocityY = 0;
      novaCorp3.velocityX = 0;
      novaCorp3.velocityY = 0;

      winSign.visible = true;
    }
    

      drawSprites();
      stroke("black");
      textSize(20);
      fill("white");
      text("Coins Collected: " + score, 520, 540);
      

    }

    
 





    
    



