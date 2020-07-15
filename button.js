//Jaewon Lee, Final Project, cs099, Spring, 2020
class Button {
  constructor(center_x = 0, center_y = 0, button_label = "Click Me") {
    const default_width = 200;
    const default_height = 100;
    this.left = center_x - default_width / 2;
    this.top = center_y - default_height / 2;
    this.width = default_width;
    this.height = default_height;
    this.label = button_label;
    this.mouseIsOver = false;
    this.mouseWasPressed = false;
  }

  DrawButton() {
    push();

    stroke(159);
    let fill_color = 255;
    let label_offset = 0;
    if (this.mouseIsOver) {
      if (mouseIsPressed) {
        fill_color = 200;
        label_offset = 1;
      } else {
        fill_color = 240;
      }
    }
    fill(fill_color);

    translate(this.left, this.top);
    rect(0, 0, this.width, this.height);

    textAlign(CENTER, CENTER);
    fill(0);
    noStroke();
    text(this.label, this.width / 2, this.height / 2 + label_offset);

    pop();
  }

  DidClickButton() {
    const left = this.left;
    const top = this.top;
    const right = left + this.width;
    const bottom = top + this.height;

    const within_x = mouseX > left && mouseX < right;
    const within_y = mouseY > top && mouseY < bottom;

    this.mouseIsOver = within_x && within_y;

    const clicked_it =
      this.mouseIsOver && this.mouseWasPressed && !mouseIsPressed;

    this.mouseWasPressed = mouseIsPressed;
    
    return clicked_it;
  }
}