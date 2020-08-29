class Mango {
    constructor(x,y,radius) {

        var options = {
            isStatic: true, restitution: 0, friction: 1
        }

        this.image = loadImage("Images/mango.png");

        this.body = Bodies.circle(x, y, radius, options);

        this.radius = radius;

        World.add(world, this.body);        

    }

    display() {

        var p = this.body.position;

        imageMode(CENTER);
        image(this.image, p.x, p.y);

    }
}