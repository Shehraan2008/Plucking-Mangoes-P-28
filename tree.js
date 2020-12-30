class Tree {
  constructor(x, y, w, h) {
    this.image = loadImage("tree.png");
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  show() {
    push();
    translate(this.x, this.y);
    fill(255);
    imageMode(CENTER);
    image(this.image, 0, 0, this.w, this.h);
    pop();
  }
}
