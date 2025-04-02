var size = 22;
    var count = 0;
    var sizeDirection = 2;

var x = 100;
var y = 200;
var diameter = 50; 

var headX = 250;
var headY = 100;
var headDirection = 1;

var rglassX = 200;
var rglassY = 185;
var rglassDirection = 3;

var lglassX = 250;
var lglassY = 100;
var lglassDirection = 1;

var bodyX = 200;
var bodyY = 185;
var bodyDirection = 3;

var movement;
function setup() {
    createCanvas(400, 400);
    movement = Math.floor(Math.random() * 10) + 1;
  }
  
  function draw() {
    background(220);
    
    circle(x,y,25);
    if(x >= 800 || x <= 0)
    {
       movement *= -1;
    }

     x += movement;
    
    // head
    circle(headX,headY,175);
    headX+=headDirection;
    if(headX >= 315 || headX <= 82)
    {
        headDirection *= -1;
    }
    
    // rglass
    rect(130,rglassY,50,50);
    rglassY += rglassDirection;
    if(rglassY <= 0 || rglassY >= 370 )
    {
        rglassDirection *= -1;
    }
    
    // lglass
    rect(lglassX,lglassY,50,50);
    lglassX += lglassDirection;
    if(lglassX >= 350 || lglassX <= 0)
    {
        lglassDirection *= -1;
    }
    
    line(180,150,220,150)
    
    point(180,1550)
    
    triangle(180, 185, 188, 190, 196, 185)
    
    // body
    rect(200,bodyY,150,200);
    bodyY += bodyDirection;
    if(bodyY <= 0 || bodyY >= 210 )
    {
        bodyDirection *= -1;
    }
    
    textSize(22)
    text('Self Portrait',140,20)
    
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text('Sam Floyd',10,390)
    
  }