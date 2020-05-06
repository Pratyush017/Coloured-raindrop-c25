class RainDrop{constructor(x,y,width,height)
{
    var raindrop_options = 
        {
            'restitution': 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, raindrop_options);
        this.width = width;
        this.height = height;
        World.add(world, this.body)
       /* this.x = x;
        this.y = y;
        fall(speed);{
        this.y +=speed;
        }*/
            
        
    }
    display(){
       
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop();
    }

}