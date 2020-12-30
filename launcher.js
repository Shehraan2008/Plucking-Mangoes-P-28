class Launcher {
  constructor(body, pointB) {
    var option = {
      bodyA: body,
      pointB: pointB,
      stiffness: 0.004,
      length: 1,
    };
    this.launcher = Constraint.create(option);
    World.add(world, this.launcher);
    this.pointB = pointB;
    this.bodyA = body;
  }

  attach(body) {
    this.launcher.bodyA = body;
  }

  fly() {
    this.launcher.bodyA = null;
  }

  show() {
    if (this.launcher.bodyA) {
      let pointA = this.bodyA.position;
      let pointB = this.pointB;
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
}
