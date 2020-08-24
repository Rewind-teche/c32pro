class Box
{
    constructor(x, y, width, height) 
    {
        var options = {
            'restitution':0.3,
            'friction':1.5,
            'density':1.5,
            
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("box.jpg")
        this.visibility = 255;
        World.add(world, this.body);
      }
      display()
      {
       if(this.body.speed<5)
        {
          var pos = this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x,pos.y);
          rotate(angle);
          strokeWeight(4)
          stroke("black")
          fill("white")
          rectMode(CENTER);
          rect(0,0, this.width, this.height);
          imageMode(CENTER)
          image(this.image,0,0,30,40)
          pop();
        }
        else{
         
              World.remove(world,this.body);
              push ()
              this.visibility = this.visibility-5
              tint (255,this.visibility)
              image(this.image,this.body.position.x,this.body.position.y,30,40)
              pop ()
        }
      }
      Score()
      {
        if(this.visibility < 0 && this.visibility > -105 ){
          score++
        }
      }
};