class Tree {
    constructor(x,y,width,height) {

        var options = {
            isStatic: true
        }

        this.image = loadImage("Images/tree.png");

        this.body = Bodies.rectangle(x,y,width,height,options);

        this.width = width;
        this.height = height;

        World.add(world, this.body);        

    }

    display() {

        var p = this.body.position;

        imageMode(CENTER);
        image(this.image, p.x, p.y, this.width, this.height);

    }
}