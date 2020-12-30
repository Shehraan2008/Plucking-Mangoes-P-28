// Module Aliases
const { Engine, World, Bodies, Body, Constraint } = Matter;
// The Objects
var tree, stone, ground, launcher, boy;
// The Mangos
var m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12;
// World and Enigine
var world, engine;
// Score
let score = 0;

// Loading Images
function preload() {
  boy = loadImage("boy.png");
}

function setup() {
  // Canvas
  const canvas = createCanvas(1300, 600);

  // The Engine and World
  engine = Engine.create();
  world = engine.world;

  // The stone
  stone = new Stone(235, 420, 30);
  // The mangoes
  m1 = new Mango(random(730, 1170), random(50, 230), 30);
  m2 = new Mango(random(730, 1170), random(50, 230), 30);
  m3 = new Mango(random(730, 1170), random(50, 230), 30);
  m4 = new Mango(random(730, 1170), random(50, 230), 30);
  m5 = new Mango(random(730, 1170), random(50, 230), 30);
  m6 = new Mango(random(730, 1170), random(50, 230), 30);
  m7 = new Mango(random(730, 1170), random(50, 230), 40);
  m8 = new Mango(random(730, 1170), random(50, 230), 40);
  m9 = new Mango(random(730, 1170), random(50, 230), 40);
  m10 = new Mango(random(730, 1170), random(50, 230), 40);
  m11 = new Mango(random(730, 1170), random(50, 230), 40);
  m12 = new Mango(random(730, 1170), random(50, 230), 40);
  // The tree
  tree = new Tree(1000, 280, 600, 600);
  //The ground
  ground = new Ground(width / 2, 600, width, 100);
  //The launcher
  launcher = new Launcher(stone.body, { x: 235, y: 420 });

  // Run The Engine
  Engine.run(engine);
}

function draw() {
  background("skyblue");

  // Instruction
  fill("Yellow");
  textFont("Comic Sans ms");
  textSize(24);
  text(
    "Drag the mouse to launch the Stone and Press Space to get it back",
    50,
    50
  );
  // Score
  text("Mango: " + score, 50, 100);

  // Showing the Objects
  tree.show();
  stone.show();
  m1.show();
  m2.show();
  m3.show();
  m4.show();
  m6.show();
  m7.show();
  m8.show();
  m9.show();
  m10.show();
  m11.show();
  m12.show();
  stone.show();
  ground.show();
  launcher.show();

  // Boy Image
  image(boy, 200, 340, 200, 300);

  // The Collisions
  collision(stone, m1);
  collision(stone, m2);
  collision(stone, m3);
  collision(stone, m4);
  collision(stone, m5);
  collision(stone, m6);
  collision(stone, m7);
  collision(stone, m8);
  collision(stone, m9);
  collision(stone, m10);
  collision(stone, m11);
  collision(stone, m12);
}

// Launching Mechanism
function mouseDragged() {
  Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  launcher.fly();
}

// Resetting the Stone
function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, { x: 235, y: 420 });
    launcher.attach(stone.body);
  }
}

// Collision Function
function collision(stone, mango) {
  mangoBodyPosition = mango.body.position;
  stoneBodyPosition = stone.body.position;

  var distance = dist(
    stoneBodyPosition.x,
    stoneBodyPosition.y,
    mangoBodyPosition.x,
    mangoBodyPosition.y
  );
  if (distance <= mango.r + stone.r) {
    Matter.Body.setStatic(mango.body, false);
    score = score + 1;
  }
}
