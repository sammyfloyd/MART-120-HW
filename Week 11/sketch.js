var characterX = 100;
var characterY = 100;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var shapeX = 50;
var shapeY = 80;
var shapeXSpeed;
var shapeYSpeed;

var circleX = 100;
var circleY = 80;
var circleXSpeed;
var circleYSpeed;

var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(40,40);
}

function drawCharacter()
{
    fill(0,0,0);
    circle(characterX,characterY,30);
}

function draw()
{
    background(100,500,100);
    stroke(0);
    fill(0);

    createBorders(10);
  
    fill (500,0,0);
    line (430,560,465,560)
  
    fill(500,0,0);
    textSize(20);
    text("Exit", width-70,height-50)

    drawCharacter();
    characterMovement();

    fill(500,0,0);
    circle(shapeX, shapeY, 20);

     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;

    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

    fill(500,0,0);
    circle(circleX, circleY, 10);

     circleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 5);
     circleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 5);

    circleX += circleXSpeed;
    circleY += circleYSpeed;

    if(circleX > width)
    {
        circleX = 0;
    }
    if(circleX < 0)
    {
        circleX = width;
    }
    if(circleY > height)
    {
        circleY = 0;
    }
    if(circleY < 0)
    {
        circleY = height;
    }
  
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("Congrats! You WIN!!", width/2-110, height/2-50);
    }

    fill(100,100,400);
    circle(mouseShapeX, mouseShapeY, 60);
}

function characterMovement()
{
    if(keyIsDown(w))
    {
        characterY -= 5;   
    }
    if(keyIsDown(s))
    {
        characterY += 5;   
    }
    if(keyIsDown(a))
    {
        characterX -= 5;   
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 5;   
    }
}
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
   
}

function createBorders(thickness)
{
    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width-60, thickness);
    // right upper border
    rect(width-thickness,0,thickness,height);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
/*
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 10;
    } 
    else if (keyCode === RIGHT_ARROW) {
        characterX += 10;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 10;
    }

  }
  */