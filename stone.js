class Stone {
    constructor(x,y,width,height) {

        var options = {
            isStatic: false, restitution: 0, friction: 1, density: 1.2
        }

        this.image = loadImage("Images/stone.png");

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