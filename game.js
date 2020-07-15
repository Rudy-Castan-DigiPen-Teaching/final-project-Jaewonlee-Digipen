//Jaewon Lee, Final Project, cs099, Spring, 2020
var ship;
var aliens = [];
var enemy = [];
var lasers = [];
var font, fontsize = 15;
var health = 100;
var shoot;
var bomb;
let particles = [];
var fireworks = [];
var h = 100;

class game {
  constructor() {
    this.dr = null
    this.mainmenu = new Button(width / 2, height - 100, "Main Menu");
  }
  Update(){
  if (this.mainmenu.DidClickButton()) {
      click.play()
      CurrentScene = MAIN_MENU;
    }
  }
  Draw() {
    this.dr = draw1()
  }
}

function draw1() {
  background(bg);
  stroke('white');
  noFill();
  rect(10, 10, 100, 30);
  fill('red');
  rect(10, 10, h, 30);
  ship.c = color(100, 255, 100, 255);
  // Backgroud Particle
  let p = new Particle();
  particles.push(p); //draw()에 동작해서 계속해서 객체를 만들어 추가한다. 
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }

  // 폭발
  for (var i = 0; i < fireworks.length; i++) {
    fireworks[i].run();
    if (fireworks.length > 10) {
      fireworks.splice(0, 1);
    }
  }

  // 
  for (var i = 0; i < aliens.length; i++) {
    //외계인과 우주선이 충돌하면 
    if (ship.hits(aliens[i])) {
      hit.play()
      h = h - aliens[i].r * 0.05;
      if (h < 0) {
        h = 0
      }
      ship.c = color(255, 0, 0, 255);
      health = health - aliens[i].r * 0.05;
    }
    aliens[i].update();
    aliens[i].render();
    aliens[i].edges();
  }

  for (var i = 0; i < enemy.length; i++) {
    //적과 우주선이 충돌하면 
    if (ship.hits(enemy[i])) {
      h = h - enemy[i].r * 0.05;
      hit.play()
      if (h < 0) {
        h = 0
      }
      ship.c = color(255, 0, 0, 255);
      health = health - enemy[i].r * 0.05;
    }
    enemy[i].update();
    enemy[i].render();
    enemy[i].edges();
  }

  // 레이저
  for (var i = lasers.length - 1; i >= 0; i--) {
    lasers[i].update();
    lasers[i].render();
    // 화면을 벗어나면 제거 해줌 
    if (lasers[i].offscreen()) {
      lasers.splice(i, 1);
    } else {
      // 충돌 감지
      for (var j = aliens.length - 1; j >= 0; j--) {
        if (lasers[i].hits(aliens[j])) {
          if (aliens[j].r > 30) {
            var newAliens = aliens[j].breakup(); // 충돌된 소행성을 쪼갠다.     
            aliens = aliens.concat(newAliens);
          }
          fireworks.push(new Firework(lasers[i].pos.x, lasers[i].pos.y));
          aliens.splice(j, 1); //j번째 1개를 제거한다.
          lasers.splice(i, 1);
          explose.play()
          break;
        }
      }

    }
  }

  for (var i = lasers.length - 1; i >= 0; i--) {
    lasers[i].update();
    lasers[i].render();
    // 화면을 벗어나면 제거 해줌 
    if (lasers[i].offscreen()) {
      lasers.splice(i, 1);
    } else {
      // 충돌 감지
      for (var j = enemy.length - 1; j >= 0; j--) {
        if (lasers[i].hits(enemy[j])) {
          fireworks.push(new Firework(lasers[i].pos.x, lasers[i].pos.y));
          enemy.splice(j, 1); //j번째 1개를 제거한다.
          lasers.splice(i, 1);
          explose.play()
          break;
        }
      }

    }
  }

  // 우주선 
  ship.render();
  ship.turn();
  ship.update();
  ship.edges();

  // Score
  drawScore();
}

// Score and Health
function drawScore() {
  fill(255);
  if (health <= 0) {
    text("Game Over", 30, 30);
  } else {
    text(Math.ceil(health), 30, 30);
  }
  if (aliens.length <= 0) {
    text("You Win", 30, 50);
  }
}

// Key press event
function keyReleased() {
  ship.setRotation(0);
  ship.boosting(false);
}

function keyPressed() {
  if (key == ' ') {
    lasers.push(new Laser(ship.pos, ship.heading));
    laser.play()
  } else if (keyCode == RIGHT_ARROW) {
    ship.setRotation(0.1);
    booster.play()
  } else if (keyCode == LEFT_ARROW) {
    ship.setRotation(-0.1);
    booster.play()
  } else if (keyCode == UP_ARROW) {
    ship.boosting(true);
    booster.play()
  }
}