class Mango { 
    constructor(x, y, radius) {
        
        var options = {
            isStatic: true,
            'restitution':0,
            'friction':1.0,
            'density':1.2
        }

        this.image = loadImage('mango.png');
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius;
        World.add(world, this.body);
}
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("orange");
        circle(pos.x,pos.y,this.radius);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.radius*3, this.radius*3);
    }
};

