class MainMenu  {
  constructor() {
    this.play = new Button(width / 4, height * 3 / 5, "Play");
    this.options = new Button(width / 2, height * 3 / 5, "Manual");
    this.credits = new Button(width / 4 * 3, height * 3 / 5, "Credits");
    this.x = 0
    this.y = height
    this.off1 = 0
    this.off2 = 0
  }

  Update() {
    if (this.play.DidClickButton()) {
      CurrentScene = GAME;
      click.play()
    } else if (this.options.DidClickButton()) {
      click.play()
      CurrentScene = OPTIONS_SCREEN;
    } else if (this.credits.DidClickButton()) {
      click.play()
      CurrentScene = CREDITS_SCREEN;
    }
  }

  Draw() {
    DrawTitle("Space War");
    this.play.DrawButton();
    this.options.DrawButton();
    this.credits.DrawButton();
    var noising1 = map(noise(this.off1), 0, 1, -10, 10);
    var noising2 = map(noise(this.off2), 0, 1, -7, 7);
    push();
    fill('black');
    circle(this.x + 40, this.y-50, 50);
    pop();
    circle(this.x + 50, this.y-55, 15);
    circle(this.x + 30, this.y-55, 15);
    push();
    fill('black');
    circle(this.x +50 - noising1, this.y-55 + noising1, 5);
    circle(this.x +30 + noising2, this.y -55+ noising2, 5);
    this.off1 += random(0.2);
    this.off2 += random(0.3);
    pop();
  }
}