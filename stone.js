class Stone {
  constructor(x, y, r) {
    var options = {
      isStatic: false,
      restitution: 0,
      friction: 1,
      density: 1.2,
    };

    this.body = Bodies.circle(x, y, r / 2, options);
    World.add(world, this.body);
    this.image = loadImage("stone.png");
    this.r = r;
  }
  show() {
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    fill(255, 0, 255);
    imageMode(CENTER);
    ellipseMode(RADIUS);
    image(this.image, 0, 0, this.r * 2, this.r * 2);
    pop();
  }
}
