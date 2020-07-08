function Laser(spos, angle) {
  this.pos = createVector(spos.x, spos.y);
  this.vel = p5.Vector.fromAngle(angle);
  this.vel.mult(10); //속도를 빠르게 

  this.update = function() {
    this.pos.add(this.vel);
  }

  this.render = function() {
    push();
    stroke(255);
    strokeWeight(3);
    point(this.pos.x, this.pos.y);
    pop();
  }

  this.hits = function(aliens) {
    var d = dist(this.pos.x, this.pos.y, aliens.pos.x, aliens.pos.y);
    if (d < aliens.r) {
      return true;
    } else {
      return false;
    }

  }

  this.hits = function(enemy) {
    var d = dist(this.pos.x, this.pos.y, enemy.pos.x, enemy.pos.y);
    if (d < enemy.r) {
      return true;
    } else {
      return false;
    }

  }

  // 발사된 레이저가 화면을 벗어 나면 제거해 준다. 
  this.offscreen = function() {
    if (this.pos.x > width || this.pos.x < 0) {
      return true;
    }
    if (this.pos.y > height || this.pos.y < 0) {
      return true;
    }
    return false;
  }
}