class Ground {
  constructor(x, y, w, h) {
    var options = {
      isStatic: true,
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
    this.w = w;
    this.h = h;
  }
  show() {
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    fill("green");
    rect(0, 0, this.w, this.h);
    pop();
  }
}
