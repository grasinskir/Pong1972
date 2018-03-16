// Ellipse variables
var xPos = 200;
var yPos = 200;
var xSpeed = 2;
var ySpeed = -1;

// Paddle variables
var y = 350;
var paddleBouncex = 1.25;
var paddleX = 125;

// Score variables
var score = 0;
var lives = 3;
var press = true;

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  // Start the game  
  if(press){
      background(0);
      fill(255);
      text("PLAY", 175, 200);
    } else {
      background(0);
      
  // Draw an ellipse that bounces of the walls
  ellipse(xPos, yPos, 10, 10);
  xPos = xPos + xSpeed;
  yPos = yPos + ySpeed;
  if (xPos >= width || xPos <= 0){
    xSpeed = -xSpeed;
  }
  if (yPos <= 0){
    ySpeed = -ySpeed;
  }
      
  // Draw a small paddle
  rect (paddleX, y, 50, 10);
     
      
  // Paddle responds to arrow keys
  if(keyIsDown(LEFT_ARROW)){
    paddleX = paddleX - 5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    paddleX = paddleX + 5; 
  }
  if(paddleX < 0){
    paddleX = 0;
  }
  if(paddleX > width - 50){
    paddleX = width - 50;
  }
  
  
  
  // Ball reacts to paddle and score
	 if(xPos >= paddleX && xPos <= paddleX + 50 && yPos >= y){
	 	if(ySpeed <= 10){
     ySpeed = -ySpeed * 1.5;
    }
     
   }
  
    if(yPos >= y){
      if(xPos >= paddleX && xPos <= paddleX + 50 && yPos < y + 10){
        xSpeed = map(xPos, paddleX - 25, paddleX, xSpeed * paddleBouncex, xSpeed * paddleBouncex * 1.25);
        if(xSpeed <= 50){
        if(xSpeed == -xSpeed){
          paddleBouncex = -paddleBounceX;
        }
        score = score + 1;
        }
      } else if(yPos > y) {
         yPos = 200;
         xPos = 200;
         ySpeed = -1;
         xSpeed = 1;
         lives = lives - 1;
      }
    }
      
  // Display score and lives
  fill(255);
  textSize(15);
  text("Score", 175, 100);
  text(score, 190, 125);
  text("Lives", 10, 385);
  text(lives, 65, 385);
  
  // Game over
  if(lives == 0){
    text("GAME OVER", 150, 190);
    xSpeed = 0;
    ySpeed = 0;
    score = 0;
    fill(0);
    press = !press;
    lives = 3;
  }
  
      


}
}

// Code for play button
function mousePressed() {
  if(mouseX >= 175 && mouseX <= 200 && mouseY >= 190 && mouseY <= 210){
    press = !press;
    xSpeed = 2;
    ySpeed = -1;
  }
}


