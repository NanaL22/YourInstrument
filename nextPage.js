class NextPage {
  constructor(h, s, b, x, y) {
    this.h = h;
    this.s = s;
    this.b = b;
    this.diameter = 1;
    this.buttonX = x;
    this.buttonY = y;
  }

  show() {
    colorMode(HSB, 360, 100, 100, 1);
    noStroke();
    fill(this.h, this.s, this.b);
    ellipse(extractor.buttonX, extractor.buttonY, this.diameter, this.diameter); 
    if (this.diameter < width*2) {
      this.diameter += 30;
    }
  }

  title() {
    if (this.diameter > width*2) {
      colorMode(RGB);
      fill(255);
      textStyle(BOLDITALIC);
      textSize(30);
      textAlign(RIGHT);
      text('당신의 악기를', this.buttonX - 60, this.buttonY);
      textAlign(LEFT);
      text('하세요', this.buttonX + 50, this.buttonY);

      if (mouseX > this.buttonX -30 && mouseX < this.buttonX +30 && mouseY > this.buttonY - 15 && mouseY < this.buttonY +15) {
        fill(255);
      } else fill(0);

      textAlign(CENTER);
      text('"설계"', this.buttonX, this.buttonY);

      colorMode(HSB, 360, 100, 100, 1); 
    }
  }

  yourMouse() {
    colorMode(HSB, 360, 100, 100, 1);
    fill(this.h, this.s -20, this.b - 20);
    ellipse(mouseX, mouseY, 50);
  }

  flip() {
    if (mouseX > this.buttonX -30 && mouseX < this.buttonX +30 && mouseY > this.buttonY - 15 && mouseY < this.buttonY +15) {
      nextPage = false;
      drawingPage_1 = true;
    }  
  }
}