class CreditsScreen {
  constructor() {
    this.mainmenu = new Button(width / 2, height - 100, "Main Menu");
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
  }
}