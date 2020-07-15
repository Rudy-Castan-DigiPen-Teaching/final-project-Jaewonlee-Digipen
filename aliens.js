//Jaewon Lee, Final Project, cs099, Spring, 2020
function Aliens(pos, r) {
  if (pos) {
    this.pos = pos.copy();
  } else {
    this.pos = createVector(random(width), random(height));
  }

  this.vel = p5.Vector.random2D();
  if (r) {
    this.r = r * 0.5;
  } else {
    this.r = 40
  }

  this.total = floor(random(5, 15));
  this.offset = [];
  for (var i = 0; i < this.total; i++) {
    this.offset[i] = random(-this.r * 0.5, this.r * 0.5);
  }

  this.update = function() {
    this.pos.add(this.vel);
  }

  this.edges = function() {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }

  this.render = function() {
    var noising1 = map(noise(this.off1), 0, 1, -10, 10);
    var noising2 = map(noise(this.off2), 0, 1, -7, 7);
    this.off1 = 0
    this.off2 = 0
    push()
    translate(this.pos.x, this.pos.y);
    fill('blue')
    noStroke();
    ellipse(0, 0, this.r);
    pop()
    push();
    translate(this.pos.x, this.pos.y);
    fill('white')
    ellipse(- 9,0, this.r / 3);
    ellipse(+ 9, 0, this.r / 3);
    pop();
    push();
    translate(this.pos.x, this.pos.y);
    fill('black')
    ellipse( -8 -noising1 ,  0+ noising1, 7);
    ellipse( 8 + noising2 ,   0+ noising1, 7);
    this.off1 += random(0.2);
    this.off2 += random(0.3);
    pop()
  }
  this.breakup = function() {
    var newA = [];
    newA[0] = new Aliens(this.pos, this.r);
    newA[1] = new Aliens(this.pos, this.r);
    return newA;
  }
}