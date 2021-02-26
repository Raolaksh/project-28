class Stone{

    constructor(){
        var options = {
            isStatic:false,
            restitution:0.5,
            friction:1,
            density:1.2
        }
        
        this.body = Bodies.circle(200,100,20,options);
        this.image = loadImage("images/stone.png");
        World.add(world, this.body);
    }

    display(){
        var stonePos = this.body.position;
        push();
        translate(stonePos.x, stonePos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 90,90);
        pop();
    }
}
