const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg
var engine, world;
var score = 0;

function preload(){
  getbg();
}
function setup() {
  createCanvas(1400,600);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  ground = new Ground(width/2,590,1400,10)
  base1 = new Ground(600,500,300,10)
  base2 = new Ground(1100,250,300,10)
  //base1row1
  box1 = new Box(495,499,30,40)
  box2 = new Box(525,499,30,40)
  box3 = new Box(555,499,30,40)
  box4 = new Box(585,499,30,40)
  box5 = new Box(615,499,30,40)
  box6 = new Box(645,499,30,40)
  box7 = new Box(675,499,30,40)
  box8 = new Box(705,499,30,40)
  //base1row2
  box9 = new Box(525,469,30,40)
  box10 = new Box(555,469,30,40)
  box11 = new Box(585,469,30,40)
  box12 = new Box(615,469,30,40)
  box13 = new Box(645,469,30,40)
  box14 = new Box(675,469,30,40)
  //base1row3
  box15 = new Box(555,439,30,40)
  box16 = new Box(585,439,30,40)
  box17 = new Box(615,439,30,40)
  box18 = new Box(645,439,30,40)
  //base1row4
  box19 = new Box(585,409,30,40)
  box20 = new Box(615,409,30,40)
 // base1row5
  box21 = new Box(600,379,30,40)
 
  //base2row1
  box22 = new Box(990,249,30,40)
  box23 = new Box(1020,249,30,40)
  box24 = new Box(1050,249,30,40)
  box25 = new Box(1080,249,30,40)
  box26 = new Box(1110,249,30,40)
  box27 = new Box(1140,249,30,40)
  box28 = new Box(1170,249,30,40)
  box29 = new Box(1200,249,30,40)
  //base2row2
  box30 = new Box(1020,219,30,40)
  box31 = new Box(1050,219,30,40)
  box32 = new Box(1080,219,30,40)
  box33 = new Box(1110,219,30,40)
  box34 = new Box(1140,219,30,40)
  box35 = new Box(1170,219,30,40)
  //base2row3
  box36 = new Box(1050,189,30,40)
  box37 = new Box(1080,189,30,40)
  box38 = new Box(1110,189,30,40)
  box39 = new Box(1140,189,30,40)
  //base2row2
  box40 = new Box(1080,159,30,40)
  box41 = new Box(1110,159,30,40)
  //base2row1
  box42 = new Box(1095,129,30,40)
  polygon = new Polygon(100,300,40,40)
  sling = new Sling(polygon.body,{x:100,y:450})
  Engine.run(engine);
}

function draw() {
  if(backgroundImg){
  background(backgroundImg);
  }
  textSize(20)
  fill("purple")
  text("Score:"+score,100,100) 
  Engine.update(engine);
  ground.display();
  base1.display();
  base2.display();
  //base1row1
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  //base1row2
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  //base1row3
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  //base1row4
  box19.display();
  box20.display();
  //base1row5
  box21.display();
  //base2row1
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  //base2row2
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  //base2row3
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  //base2row4
  box40.display();
  box41.display();
  //base2row5
  box42.display();
  sling.display();
  polygon.display();

  box1.Score();
  box2.Score();
  box3.Score();
  box4.Score();
  box5.Score();
  box6.Score();
  box7.Score();
  box8.Score();
  box9.Score();
  box10.Score();
  box11.Score();
  box12.Score();
  box13.Score();
  box14.Score();
  box15.Score();
  box16.Score();
  box17.Score();
  box18.Score();
  box19.Score();
  box20.Score();
  box21.Score();
  box22.Score();
  box23.Score();
  box24.Score();
  box25.Score();
  box26.Score();
  box27.Score();
  box28.Score();
  box29.Score();
  box30.Score();
  box31.Score();
  box32.Score();
  box33.Score();
  box34.Score();
  box35.Score(); 
  box36.Score();
  box37.Score();
  box38.Score();
  box39.Score();
  box40.Score();
  box41.Score();
  box42.Score();
 
  
  drawSprites();
}

function mouseDragged()
{
    Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY})
}

function mouseReleased()
{
    sling.fly()
}



function keyPressed()
{
   if(keyCode === 32)
   {
    
     Matter.Body.setPosition(polygon.body,{x:110,y:500})
     sling.attach(polygon.body)
   }
}

 async function getbg()
{
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson =  await response.json()
    var dt = responseJson.datetime;
    var hour = dt.slice(11,13)
    if(hour >= 06 && hour <= 18)
    {
        bg = "day.jpg"
    }
    else
    {
        bg = "night.jpg"
    }
    backgroundImg = loadImage(bg)
}