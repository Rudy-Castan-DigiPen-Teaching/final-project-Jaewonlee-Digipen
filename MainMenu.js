//Jaewon Lee, Final Project, cs099, Spring, 2020
class MainMenu  {
  constructor() {
    this.play = new Button(width / 4, height * 3 / 5, "Play");
    this.options = new Button(width / 2, height * 3 / 5, "Manual");
    this.credits = new Button(width / 4 * 3, height * 3 / 5, "Credits");
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
  }
}