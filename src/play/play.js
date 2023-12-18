class Play {
  constructor(images) {
    this.insideWorkshopImg = images[0];
    this.masterImg1 = images[1];
    this.masterImg2 = images[2];

    this.isDisplayingStartMessage = true;
    this.currStartMessage = 0;
    this.isPlaying = false;
    this.isDisplayingEndMessage = false;

    this.isPlayingWithMouse = false;
    this.pressedKeyByMouse = 0;
    this.prevPressedKeyByMouse = 0;
    this.keys = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j'];
  }

  init() {
    this.isDisplayingStartMessage = true;
    this.isPlaying = false;
    this.isPlayingWithMouse = false;
    this.isDisplayingEndMessage = false;
    this.currStartMessage = 0;
  }

  show() {
    push();
    noStroke();
    rectMode(CORNER);

    if (this.isDisplayingStartMessage || this.isDisplayingEndMessage) {
      colorMode(HSB, 360, 100, 100, 1);
      image(this.insideWorkshopImg, 0, 0);
      fill(0, 0.3);
      rect(0, 0, width, height);
      image(this.masterImg2, width * 0.2, height * 0.1, 600, 450);
      this.displayMessage();
    } else if (this.isPlaying) {
      image(this.insideWorkshopImg, 0, 0);
      fill(255, 0.7);
      rect(0, 0, width, height);
      this.showGuide();
      this.playWithMouse();
      myGraph.drawingAppGraph();
      myInst.draw();
      this.drawMusicianButton();
    }
    pop();
  }

  showGuide() {
    push();
    image(this.masterImg1, 10, height - 160, 200, 150);
    let content = "마우스와 키보드로 연주할 수 있다네.\n동시에 여러 음을 내 보는 건 어떤가?";
    fill(0);
    textSize(18);
    textStyle(NORMAL);
    textAlign(LEFT, TOP)
    text(content, 170, height - 115);
    pop();
  }

  mouseClicked() {
    if (this.isDisplayingStartMessage && this.isMouseInConfirmButton()) {
      if (this.currStartMessage == 0) this.currStartMessage = 1;
      else {
        this.isDisplayingStartMessage = false;
        this.currStartMessage = 0;
        this.isPlaying = true;
      }
    } else if (this.isPlaying && this.isMouseInMusicianButton()) {
      this.isPlaying = false;
      this.isDisplayingEndMessage = true;
    } else if (this.isDisplayingEndMessage && this.isMouseInConfirmButton()) {
      playPage = false;
      betweenPlayToMusician = true;
    }
  }

  playWithMouse() {
    if (this.isMouseInMusicianButton()) return;

    this.pressedKeyByMouse = myInst.isMouseInKey();
    if (mouseIsPressed && (this.pressedKeyByMouse >= 0) && !(this.isPlayingWithMouse)) {
      this.isPlayingWithMouse = true;
      this.prevPressedKeyByMouse = this.pressedKeyByMouse;
      let playingKey = this.keys[this.pressedKeyByMouse];
      if (!pressedKeys.has(playingKey)) pressedKeys.add(playingKey);
      key = playingKey;
      myInst.play();
    } else if ((!mouseIsPressed || this.pressedKeyByMouse < 0) && this.isPlayingWithMouse) {
      this.isPlayingWithMouse = false;
      let playedKey = this.keys[this.prevPressedKeyByMouse];
      if (pressedKeys.has(playedKey)) pressedKeys.delete(playedKey);
      myInst.stop();
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
    
    let content = this.currStartMessage ? "네!" : "다음";
    if (this.isMouseInConfirmButton()) {
      stroke(220, 180, 30);
      strokeWeight(3);
      fill(220, 180, 30, 150);
      rect(width * 0.88, height * 0.93, 70, 40, 10);
      fill(220, 180, 30);
      noStroke();
      text(content, width * 0.88, height * 0.93);
    } else {
      noStroke();
      fill(255, 150);
      rect(width * 0.88, height * 0.93, 70, 40, 10);
      text(content, width * 0.88, height * 0.93);
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
      fill(mainH, 100, 70);
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

    let content = this.isDisplayingStartMessage ? (!this.currStartMessage ? '공방주인: \n\n   "악기가 완성되었네. 앞에서 들려준 소리들로 악기의 건반들을 구성해 봤어.\n아마 세상에서 한 번도 본 적 없는 악기일 걸세. 허허허"'
                                                                          : '공방주인: \n\n   "직접 연주해볼 수도, 악사에게 음악 연주를 부탁할 수도 있네."')
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
    if (this.isPlaying) {
      if (!pressedKeys.has(key)) pressedKeys.add(key);
      myInst.play();
    }
  }

  keyReleased() {
    if (this.isPlaying) {
      if (pressedKeys.has(key)) pressedKeys.delete(key);
      myInst.stop();
    }
  }
}