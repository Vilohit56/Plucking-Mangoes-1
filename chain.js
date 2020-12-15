class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            pointB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = bodyB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    
    fly(){
        this.chain.bodyA = null;
    }

    attach(body){
		this.launcher.bodyA=body;
	}

    
    display(){
        var pointA = this.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
} 

