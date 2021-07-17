var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 3;
var car1=createSprite(100,70,15,15);
var car2=createSprite(170,370,15,15);
var car3=createSprite(240,70,15,15);
var car4=createSprite(310,370,15,15);
var starting=createSprite(0,0,100,800);
var goal=createSprite(400,400,50,800);
var player=createSprite(20,200,20,20);
var boundary1=createSprite(0,0,800,5);
var boundary2=createSprite(0,400,800,5);
goal.shapeColor="yellow";
car1.shapeColor="red";
car2.shapeColor="red";
car3.shapeColor="red";
car4.shapeColor="red";
player.shapeColor="green";
starting.shapeColor=rgb(173,216,230);
boundary1.shapeColor="black";
boundary2.shapeColor="black";

function draw() {
background("white");
fill("black");
textSize(24);
text("Lives:"+life,60,30);
createEdgeSprites();
player.bounceOff(bottomEdge);
player.bounceOff(topEdge);
player.bounceOff(rightEdge);
player.bounceOff(leftEdge);

if (keyDown("up")) {
  player.y=player.y-5;
      
  }
if (keyDown("down")) {
  player.y=player.y+5;
      
  }
if (keyDown("right")) {
  player.x=player.x+5;
      
  }
if (keyDown("left")) {
  player.x=player.x-5;
      
  }  
car1.y=car1.y+10;
if (car1.isTouching(boundary2)) {
  car1.x=100;
  car1.y=70;
    }
car2.y=car2.y-10;
if (car2.isTouching(boundary1)) {
  car2.x=170;
  car2.y=370;
    } 
car3.y=car3.y+10;
if (car3.isTouching(boundary2)) {
  car3.x=240;
  car3.y=70;
    }
car4.y=car4.y-10;
if (car4.isTouching(boundary1)) {
  car4.x=310;
  car4.y=370;
    }  
if (player.isTouching(car1)){
  life=life-1;
  player.x=20;
  player.y=200;
}
if (player.isTouching(car2)){
  life=life-1;
  player.x=20;
  player.y=200;
}
if (player.isTouching(car3)){
  life=life-1;
  player.x=20;
  player.y=200;
}
if (player.isTouching(car4)){
  life=life-1;  
  player.x=20;
  player.y=200;
}
if (player.isTouching(goal)){
  car1.velocity=(0,0);
  car2.setVelocity=(0,0);
  car3.setVelocity=(0,0);
  car4.setVelocity=(0,0);
  if (keyDown("up")) {
  player.y=player.y;
      
  }
  if (keyDown("down")) {
  player.y=player.y;
      
  }
  if (keyDown("right")) {
  player.x=player.x;
      
  }
  if (keyDown("left")) {
  player.x=player.x;
  }
  text("You Win!",200,200);
}  
if (life===0){
  text("Lives:"+0,60,30);
  car1.velocity=(0,0);
  car2.setVelocity=(0,0);
  car3.setVelocity=(0,0);
  car4.setVelocity=(0,0);
  if (keyDown("up")) {
  player.y=player.y;
      
  }
  if (keyDown("down")) {
  player.y=player.y;
      
  }
  if (keyDown("right")) {
  player.x=player.x;
      
  }
  if (keyDown("left")) {
  player.x=player.x;
  }
  text("You Lose!",200,200);
}  
  
drawSprites();  
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
