class Musician {
  constructor(images) {
    this.streetImg = images[0];
    this.musicianImgNormal = images[1];
    this.musicianImgSurprised = images[2];
    this.musicianImgSmile = images[3];

    this.isDisplayingMessage = true;
    this.currMessage = 0;
    this.currMessageOptions = 1;
    this.currMusicianImage = this.musicianImgNormal;
    this.isPlaying = false;
    this.music = 0;
    this.isMusicSet = false;

    this.player = new MusicAutoPlayer();
    this.playCount = 0;
    this.playedMusic = new Set();
  }

  init() {
    this.isDisplayingMessage = true;
    this.isPlaying = false;
    this.isMusicSet = false;
    this.currMessage = 0;
    this.currMessageOptions = 1;
    this.music = 0;
    this.playCount = 0;
    this.playedMusic = new Set();
  }

  show() {
    push();
    this.setCurrMessageOptions();
    this.setCurrMusicianImage();
    if (!this.isMusicSet) this.setRecommendedMusic();

    noStroke();
    rectMode(CORNER);

    if (this.isDisplayingMessage) {
      image(this.streetImg, 0, 0);
      fill(0, 0.3);
      rect(0, 0, width, height);
      image(this.currMusicianImage, width * 0.2, height * 0.1, 600, 450);
      this.displayMessage();
    } else if (this.isPlaying) {
      image(this.streetImg, 0, 0);
      fill(0, 0.7);
      rect(0, 0, width, height);
      myGraph.drawingAppGraph();
      myInst.draw();
      this.drawEndMusicButton();

      if (this.playCount) return;
      this.playCount++;
      this.player.play(this.music);
    }
    pop();
  }

  setCurrMessageOptions() {
    switch(this.currMessage) {
      case 0:
      case 1:
      case 5:
      case 7:
      case 8:
        this.currMessageOptions = 1;
        break;
      case 2:
      case 4:
      case 6:
        this.currMessageOptions = 2;
        break;
      case 3:
        this.currMessageOptions = 3;
        break;
    }
  }

  setCurrMusicianImage() {
    switch(this.currMessage) {
      case 0:
      case 3:
      case 4:
      case 6:
        this.currMusicianImage = this.musicianImgNormal;
        break;
      case 1:
        this.currMusicianImage = this.musicianImgSurprised;
        break;
      case 2:
      case 5:
      case 7:
      case 8:
        this.currMusicianImage = this.musicianImgSmile;
    }
  }

  setRecommendedMusic() {
    this.music = (parameter4 <= 20) ? 0 : (parameter4 <= 40) ? 1 : 2;
    this.isMusicSet = true;
  }

  drawButton() {
    push();
    textSize(20);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    colorMode(RGB);

    switch(this.currMessageOptions) {
      case 1:
        this.drawNextButton();
        break;
      case 2:
        this.drawYesNoButtons();
        break;
      case 3:
        this.drawMusicButtons();
        break;
    }

    pop();
  }

  drawNextButton() {
    if (this.isMouseInNextButton()) {
      stroke(220, 180, 30);
      strokeWeight(3);
      fill(220, 180, 30, 150);
      rect(width * 0.88, height * 0.93, 70, 40, 10);
      fill(220, 180, 30);
      noStroke();
      text("다음", width * 0.88, height * 0.93);
    } else {
      noStroke();
      fill(255, 150);
      rect(width * 0.88, height * 0.93, 70, 40, 10);
      text("다음", width * 0.88, height * 0.93);
    }
  }

  drawYesNoButtons() {
    let buttonColor, textColor;
    function highlight() {
      buttonColor = color(220, 180, 30, 150);
      textColor = color(220, 180, 30);
      stroke(220, 180, 30);
      strokeWeight(3);
    }
    function noHighlight() {
      buttonColor = color(255, 150);
      textColor = color(255, 150);
      noStroke();
    }
    function drawYes() {
      fill(buttonColor);
      rect(width * 0.45, height * 0.94, 70, 40, 10);
      fill(textColor);
      noStroke();
      text("예", width * 0.45, height * 0.94);
    }
    function drawNo() {
      fill(buttonColor);
      rect(width * 0.55, height * 0.94, 70, 40, 10);
      fill(textColor);
      noStroke();
      text("아니오", width * 0.55, height * 0.94);
    }
    if (this.isMouseInYesButton()) {      
      highlight();
      drawYes();
      noHighlight();
      drawNo();
    } else if (this.isMouseInNoButton()) {
      noHighlight();
      drawYes();
      highlight();
      drawNo();
    } else {
      noHighlight();
      drawYes();
      drawNo();
    }
  }

  drawMusicButtons() {
    let buttonColor, textColor;
    function highlight() {
      buttonColor = color(220, 180, 30, 150);
      textColor = color(220, 180, 30);
      stroke(220, 180, 30);
      strokeWeight(3);
    }
    function noHighlight() {
      buttonColor = color(255, 150);
      textColor = color(255, 150);
      noStroke();
    }
    function alreadyPlayed() {
      buttonColor = color(128, 150);
      textColor = color(128, 150);
      noStroke();
    }
    function drawFirstButton(instance) {
      if (instance.isMouseInFirstButton()) highlight();
      else if (instance.playedMusic.has(0)) alreadyPlayed();
      else noHighlight();
      fill(buttonColor);
      rect(width * 0.4, height * 0.94, 70, 40, 10);
      fill(textColor);
      noStroke();
      text("A", width * 0.4, height * 0.94);
    }
    function drawSecondButton(instance) {
      if (instance.isMouseInSecondButton()) highlight();
      else if (instance.playedMusic.has(1)) alreadyPlayed();
      else noHighlight();
      fill(buttonColor);
      rect(width * 0.5, height * 0.94, 70, 40, 10);
      fill(textColor);
      noStroke();
      text("B", width * 0.5, height * 0.94);
    }
    function drawThirdButton(instance) {
      if (instance.isMouseInThirdButton()) highlight();
      else if (instance.playedMusic.has(2)) alreadyPlayed();
      else noHighlight();
      fill(buttonColor);
      rect(width * 0.6, height * 0.94, 70, 40, 10);
      fill(textColor);
      noStroke();
      text("C", width * 0.6, height * 0.94);
    }
    
    drawFirstButton(this);
    drawSecondButton(this);
    drawThirdButton(this);
  }

  drawEndMusicButton() {
    push();
    textSize(20);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    colorMode(RGB);

    if (this.isMouseInEndMusicButton()) {
      fill(255);
      textStyle(BOLD);
    } else {
      fill(255);
      textStyle(NORMAL);
    }
    noStroke();
    text("연주 종료하기", width * 0.91, height * 0.05);
    pop();
  }

  mouseClicked() {
    if (this.isPlaying) {
      if (this.isMouseInEndMusicButton()) {
        this.currMessage = 4;
        this.playCount--;
        this.isPlaying = false;
        this.isDisplayingMessage = true;
        this.player.stop();
      }
    }
    else switch(this.currMessage) {
      case 0:
      case 1:
      case 5:
        if (this.isMouseInNextButton()) this.currMessage++;
        break;
      case 2:
        if (this.isMouseInYesButton()) {
          this.isDisplayingMessage = false;
          this.isPlaying = true;
          if (!this.playedMusic.has(this.music)) this.playedMusic.add(this.music);
        } else if (this.isMouseInNoButton()) this.currMessage++;
        break;
      case 3:
        this.mouseClickedSelectionPage();
        break;
      case 4:
        if (this.isMouseInYesButton()) this.currMessage--;
        else if (this.isMouseInNoButton()) this.currMessage++;
        break;
      case 6:
        if (this.isMouseInYesButton()) this.currMessage = 7;
        else if (this.isMouseInNoButton()) this.currMessage = 8;
        break;
      case 7:
        if (this.isMouseInNextButton()) resetButton.justReset(); // 아직 '공유하기' 기능 없어서 첫 페이지로 이동.
        break;
      case 8:
        if (this.isMouseInNextButton()) resetButton.justReset(); // 아직 '공유하기' 기능 없어서 첫 페이지로 이동.
        break;
    }
  }

  mouseClickedSelectionPage() {
    if (!this.isMouseInFirstButton() && !this.isMouseInSecondButton() && !this.isMouseInThirdButton()) return;
    if (this.isMouseInFirstButton()) {
      this.music = 0;
    } else if (this.isMouseInSecondButton()) {
      this.music = 1;
    } else if (this.isMouseInThirdButton()) {
      this.music = 2;
    }
    this.isDisplayingMessage = false;
    this.isPlaying = true;
    if (!this.playedMusic.has(this.music)) this.playedMusic.add(this.music);
  }

  isMouseInNextButton() {
    return ((mouseX > width * 0.88 - 70 / 2) && (mouseX < width * 0.88 + 70 / 2) && (mouseY > height * 0.93 - 40 / 2) && (mouseY < height * 0.93 + 40 / 2));
  }
  isMouseInYesButton() {
    return ((mouseX > width * 0.45 - 70 / 2) && (mouseX < width * 0.45 + 70 / 2) && (mouseY > height * 0.94 - 40 / 2) && (mouseY < height * 0.94 + 40 / 2));
  }
  isMouseInNoButton() {
    return ((mouseX > width * 0.55 - 70 / 2) && (mouseX < width * 0.55 + 70 / 2) && (mouseY > height * 0.94 - 40 / 2) && (mouseY < height * 0.94 + 40 / 2));
  }
  isMouseInFirstButton() {
    return ((mouseX > width * 0.4 - 70 / 2) && (mouseX < width * 0.4 + 70 / 2) && (mouseY > height * 0.94 - 40 / 2) && (mouseY < height * 0.94 + 40 / 2));
  }
  isMouseInSecondButton() {
    return ((mouseX > width * 0.5 - 70 / 2) && (mouseX < width * 0.5 + 70 / 2) && (mouseY > height * 0.94 - 40 / 2) && (mouseY < height * 0.94 + 40 / 2));
  }
  isMouseInThirdButton() {
    return ((mouseX > width * 0.6 - 70 / 2) && (mouseX < width * 0.6 + 70 / 2) && (mouseY > height * 0.94 - 40 / 2) && (mouseY < height * 0.94 + 40 / 2));
  }
  isMouseInEndMusicButton() {
    return ((mouseX > width * 0.91 - 130 / 2) && (mouseX < width * 0.91 + 130 / 2) && (mouseY > height * 0.05 - 40 / 2) && (mouseY < height * 0.05 + 40 / 2));
  }

  getContent() {
    let instStyles = ["둔탁한", "부드러운", "예리한"];
    let musicStyles = ["차분한", "따뜻한", "경쾌한"]

    let contents = [
      '악사: \n\n   "어서오세요, 늦은 밤인데도 불구하고 찾아주셔서 감사합니다."',
      '악사: \n\n   "직접 만든 악기를 연주해달라고요? 좋습니다, 악기를 한 번 만져봐도 될까요?"',
      `악사: \n\n   "꽤나 ${instStyles[this.music]} 느낌의 악기네요.\n\
      이런 악기라면 ${musicStyles[this.music]} 분위기의 노래를 추천드리고 싶은데, 한 번 들어보시겠어요?"`,
      '악사: \n\n   "그렇다면 아래 노래 중 마음에 드시는 노래를 선택해 주시겠습니까?"',
      '악사: \n\n   "다른 노래도 들어보시겠습니까?"',
      '악사: \n\n   "좋은 악기를 연주하게 해 주어 고맙습니다.\n\
      이 아름다운 악기의 소리를 저밖에 듣지 못하는 것은 너무 아쉽네요."',
      '악사: \n   "혹시 괜찮으시다면, 이 곳에 악기를 남겨두어 다른 분들도 \n\
      이 악기의 소리를 들을 수 있게 도와주실 수 있으신가요? \n\
      그렇게 해주신다면, 이전 손님들이 남겨두고 가신 악기들의 소리도 들려드리겠습니다."',
      '악사: \n\n   "감사합니다, 이쪽으로 따라오시죠."',
      '악사: \n\n   "아쉽군요, 하지만 당신의 악기로 연주하는 것은 정말 즐거운 경험이었습니다.\n\
      당신 또한 즐거운 경험이 되셨기를 바라며, 조심히 들어가세요."'
    ]

    return contents[this.currMessage];
  }

  displayMessage() {
    push();
    fill(0, 200);
    rectMode(CORNER);
    rect(width * 0.05, height * 0.1 + 450, width * 0.9, height);

    let content = this.getContent();

    fill(255);
    textSize(20);
    textStyle(NORMAL);
    textAlign(LEFT, TOP);
    text(content, width * 0.1, height * 0.1 + 500);

    this.drawButton();
    pop();
  }
}