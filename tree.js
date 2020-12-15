class Tree {  
    
  constructor(x, y, width, height) {

    this.image = loadImage('tree.png');

    var options = {
      isStatic: true
  }
    this.body = Bodies.rectangle(x, y, width, height/2,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);

  }

  display(){
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
  }

};