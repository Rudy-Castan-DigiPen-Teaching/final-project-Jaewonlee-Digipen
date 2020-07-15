//Jaewon Lee, Final Project, cs099, Spring, 2020
class OptionsScreen {
  constructor() {
    const center_x = width / 2;
    this.mainmenu = new Button(center_x, height - 100, "Main Menu");
    this.x = width/2
    this.y = height
    this.off1 = 0
    this.off2 = 0
  }

  Update() {
    if (this.mainmenu.DidClickButton()) {
      CurrentScene = MAIN_MENU;
      click.play()
    }
  }

  Draw() {
    DrawTitle("Manual");
    push()
    textSize(50)
    stroke('white')
    text('spacebar:fire', width/8, height/5)
    text('Upkey: Move Up',width/8, height/5*2)
    text('Left Key: Move Left',width/8, height/5*3)
    text('Right key: Move right',width/8, height/5*4)
    pop()
    
    
    this.mainmenu.DrawButton();
  }

}