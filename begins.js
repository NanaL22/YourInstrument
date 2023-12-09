class Begins {
  constructor(pic, x, y) {
    this.pic = pic; 
    this.gray = createImage(pic.width, pic.height);
    this.gray.copy(pic, 0, 0, pic.width, pic.height, 0, 0, pic.width, pic.height);
    this.gray.filter(GRAY); 

    this.buttonX = x;
    this.buttonY = y;
  }

  show() {
    noStroke();
    image(this.gray, 0, 0);
  }

  yourMouse() {
    colorMode(RGB);
    noStroke();
    this.pic.loadPixels();
    this.gray.loadPixels(); 
  
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let d = dist(x, y, mouseX, mouseY);
        if (d < 50) {
          let index = (x + y * width) * 4;
          this.gray.pixels[index] = this.pic.pixels[index];
          this.gray.pixels[index + 1] = this.pic.pixels[index + 1];
          this.gray.pixels[index + 2] = this.pic.pixels[index + 2];
          this.gray.pixels[index + 3] = 255;
        }
      }
    }
    this.gray.updatePixels(); 
  }


  startingTitle() {
    colorMode(RGB);
    noStroke();
    fill(0, 150);
    rectMode(CENTER);
    rect(width/2, height/2, width*0.3, height*0.2);
    fill(255);
    textAlign(CENTER, CENTER);
    textStyle(BOLDITALIC);
    textSize(40);
    text('당 신 만 의', this.buttonX, this.buttonY -40);
    text('악 기', this.buttonX, this.buttonY +40);

    if (mouseX > this.buttonX -30 && mouseX < this.buttonX +30 && mouseY > this.buttonY - 15 && mouseY < this.buttonY +15) {
      fill(255);
    } else fill(0);

    textSize(30);
    text('START', this.buttonX, this.buttonY);
  }

  extractorTitle() {
    colorMode(RGB);
    noStroke();
    fill(0, 150);
    rectMode(CENTER);
    rect(width/2, height/2, width, height*0.2);
    fill(255);
    textStyle(BOLDITALIC);
    textSize(30);
    textAlign(RIGHT);
    text('악기의 색상을', this.buttonX - 60, this.buttonY);
    textAlign(LEFT);
    text('하세요', this.buttonX + 50, this.buttonY);
    
    if (mouseX > this.buttonX -30 && mouseX < this.buttonX +30 && mouseY > this.buttonY - 15 && mouseY < this.buttonY +15) {
      fill(255);
    } else fill(0);

    textAlign(CENTER);
    text('"추출"', this.buttonX, this.buttonY);
  }
}

