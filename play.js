class Play {
  constructor(images) {
    this.insideWorkshopImg = images[0];
    this.masterImg2 = images[1];

    this.isDisplayingStartMessage = true;
    this.isPlaying = false;
    this.isDisplayingEndMessage = false;
  }

  show() {
    push();
    noStroke();
    rectMode(CORNER);

    if (this.isDisplayingStartMessage || this.isDisplayingEndMessage) {
      image(this.insideWorkshopImg, 0, 0);
      fill(0, 0.3);
      rect(0, 0, width, height);
      image(this.masterImg2, width * 0.2, height * 0.1, 600, 450);
      this.displayMessage();
    } else if (this.isPlaying) {
      image(this.insideWorkshopImg, 0, 0);
      fill(255, 0.7);
      rect(0, 0, width, height);
      myInst.draw();
      this.drawMusicianButton();
    }
    pop();
  }

  mouseClicked() {
    if (this.isDisplayingStartMessage && this.isMouseInConfirmButton()) {
      this.isDisplayingStartMessage = false;
      this.isPlaying = true;
    } else if (this.isPlaying && this.isMouseInMusicianButton()) {
      this.isPlaying = false;
      this.isDisplayingEndMessage = true;
    }
  }

  isMouseInConfirmButton() {
    return ((mouseX > width * 0.88 - 70 / 2) && (mouseX < width * 0.88 + 70 / 2) && (mouseY > height * 0.93 - 40 / 2) && (mouseY < height * 0.93 + 40 / 2));
  }

  isMouseInMusicianButton() {
    return ((mouseX > width * 0.91 - 130 / 2) && (mouseX < width * 0.91 + 130 / 2) && (mouseY > height * 0.05 - 40 / 2) && (mouseY < height * 0.05 + 40 / 2));
  }

  drawConfirmButton() {
    push();
    textSize(20);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    colorMode(RGB);

    if (this.isMouseInConfirmButton()) {
      stroke(220, 180, 30);
      strokeWeight(3);
      fill(220, 180, 30, 150);
      rect(width * 0.88, height * 0.93, 70, 40, 10);
      fill(220, 180, 30);
      noStroke();
      text("확인", width * 0.88, height * 0.93);
    } else {
      noStroke();
      fill(255, 150);
      rect(width * 0.88, height * 0.93, 70, 40, 10);
      text("확인", width * 0.88, height * 0.93);
    }
    pop();
  }

  drawMusicianButton() {
    push();
    textSize(20);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    colorMode(RGB);

    if (this.isMouseInMusicianButton()) {
      fill(0);
      textStyle(BOLD);
    } else {
      fill(0);
      textStyle(NORMAL);
    }
    noStroke();
    text("악사 찾아가기", width * 0.91, height * 0.05);
    pop();
  }
 
  displayMessage() {
    push();
    fill(0, 200);
    rectMode(CORNER);
    rect(width * 0.05, height * 0.1 + 450, width * 0.9, height);

    let content = this.isDisplayingStartMessage ? '공방주인: \n\n   "악기가 완성되었네. 직접 연주해볼 수도, 악사에게 음악 연주를 부탁할 수도 있네."'
                                                : '공방주인: \n\n   "악사에게 가는 겐가? 조심히 가게."';

    fill(255);
    textSize(20);
    textStyle(NORMAL);
    textAlign(LEFT, TOP);
    text(content, width * 0.1, height * 0.1 + 500);

    this.drawConfirmButton();
    pop();
  }

  keyPressed() {
    if (this.isPlaying) myInst.play()
  }

  keyReleased() {
    if (this.isPlaying) myInst.stop()
  }
}