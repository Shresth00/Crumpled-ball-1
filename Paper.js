class paper {
    constructor(x, y, radius,){
        var options = {
            isStatic:false,
            restitution: 0.2,
            friction: 0.3,
            density: 1.0,
        }

         this.radius = radius
         this.body = Bodies.circle(x, y, radius, options);
         world.add(world, this.body);

    }
    display(){
        fill("yellow");
        elipseMode(RADIUS);
        ellipse(this.body.positon.x, this.body.positon.y, this.radius, this.radius);
    }
}