class Mango {
  constructor(x, y, r) {
    var options = {
      isStatic: true,
      restitution: 0,
      friction: 1,
    };
    this.body = Bodies.circle(x, y, r, options);
    World.add(world, this.body);
    this.image = loadImage("mango.png");
    this.r = r;
  }

  show() {
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(this.body.angle);
    fill(255, 0, 255);
    image(this.image, 0, 0, this.r * 2, this.r * 2);
    pop();
  }
}
