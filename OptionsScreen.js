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