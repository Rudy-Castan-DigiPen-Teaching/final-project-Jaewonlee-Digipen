class CreditsScreen {
  constructor() {
    this.mainmenu = new Button(width / 2, height - 100, "Main Menu");
    this.x = width
    this.y = height
    this.off1 = 0
    this.off2 = 0
  }

  Update() {
    if (this.mainmenu.DidClickButton()) {
      click.play()
      CurrentScene = MAIN_MENU;
    }
  }

  Draw() {
    DrawTitle("Credits");
    push()
    fill(255)
    textSize(40)
    text("Made by Jaewon Lee", width / 8 * 3, height / 2);
    pop()
    this.mainmenu.DrawButton();
    var noising1 = map(noise(this.off1), 0, 1, -10, 10);
    var noising2 = map(noise(this.off2), 0, 1, -7, 7);
    push();
    fill('black');
    circle(this.x - 40, this.y-50, 50);
    pop();
    circle(this.x - 50, this.y-55, 15);
    circle(this.x - 30, this.y-55, 15);
    push();
    fill('black');
    circle(this.x -50 - noising1, this.y-55 + noising1, 5);
    circle(this.x -30 + noising2, this.y -55+ noising2, 5);
    this.off1 += random(0.2);
    this.off2 += random(0.3);
    pop();
  }
}