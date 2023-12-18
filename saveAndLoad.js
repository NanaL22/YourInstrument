class SaveAndLoad {
  constructor() {
    this.contents = []
    this.currMessage = 0;
    this.loadReady = false;
    this.endingMessage = false;
    this.goToFirstPage = false;
    this.currInstInfo = [];  
    this.instSave = [[0, 0, 0, 0, 0, 0, 330, 15, 100], [150, 1, 7, 10, 25, 5, 189, 60, 90], [250, 3, 17, 20, 40, 8, 54, 50, 98], [500, 10, 20, 25, 55, 20, 0, 61, 95]]; //초기화하면 안 되는 부분
    this.index;
    this.originalH;
    this.originalS;
    this.originalB;
    this.isNotMyInst = false;
  }

  show() {
    this.startSaveAndLoad();
    if (saveAndLoad.currMessage < 3) {
      this.displayMessage();
      this.drawNextButton();
      this.isMouseInNextButton();
    } else if (this.loadReady) {
      this.loadDisplay();
    } else if (this.endingMessage) {
      this.displayEndingMessage()
      this.drawNextButton();
    } 
    
    if (this.goToFirstPage) {

      resetButton.justReset()
    }
   
  }
  startSaveAndLoad() {
    image(musicianHome, 0, 0);
  }

  getContent() {
    this.contents = [
      '악사: \n\n   "이 곳은 제 영감의 원천인 음악 작업실입니다."',
      '악사: \n\n   "다른 분들이 남기고 가신 악기들이 있는데, 한 번 연주해보시겠습니까?"',
      '악사: \n\n   "충분히 연주해보시고 다시 저를 찾아주세요"',
    ];
  }

  displayMessage() {
    image(musicianImg1, width * 0.2, height * 0.1, 600, 450);
    push();
    fill(0, 230);
    rectMode(CORNER);
    rect(width * 0.05, height * 0.1 + 450, width * 0.9, height);

    let content = this.getContent();

    fill(255);
    textSize(20);
    textStyle(NORMAL);
    textAlign(LEFT, TOP);
    text(this.contents[this.currMessage], width * 0.1, height * 0.1 + 500);

    pop();
  }

  displayEndingMessage() {
    image(musicianImg1, width * 0.2, height * 0.1, 600, 450);
    push();
    fill(0, 230);
    rectMode(CORNER);
    rect(width * 0.05, height * 0.1 + 450, width * 0.9, height);

    let content = this.getContent();

    fill(255);
    textSize(20);
    textStyle(NORMAL);
    textAlign(LEFT, TOP);
    text(' "이 곳에서 좋은 시간 보내셨기를 바라며, 안녕히가십시오" ', width * 0.1, height * 0.1 + 500);

    pop();
  }

  drawNextButton() {
    rectMode(CENTER);
    textAlign(CENTER);
    textSize(20);
    textStyle(NORMAL);
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

  loadDisplay() {
    rectMode(CORNER);
    fill(255, 1);
    rect(0, 0, width, height);
    fill(0);
    textSize(25);
    colorMode(HSB)
    fill(this.originalH, 30, 100);
    if (this.isMouseInFirstInst()) fill(this.originalH, 80, 100);
    rect(150, 135, 200, 200);
    fill(this.originalH, 30, 100);
    if (this.isMouseInSecondInst()) fill(this.originalH, 80, 100);
    rect(400, 135, 200, 200);
    fill(this.originalH, 30, 100);
    if (this.isMouseInThirdInst()) fill(this.originalH, 80, 100);
    rect(650, 135, 200, 200);
    fill(this.originalH, 30, 100);
    if (this.isMouseInFourthInst()) fill(this.originalH, 80, 100);
    rect(275, 435, 200, 200);
    fill(this.originalH, 30, 100);
    if (this.isMouseInFifthInst()) fill(this.originalH, 80, 100);
    rect(525, 435, 200, 200);
    fill(0);
    text("'K'의 악기", 250, 260);
    text("'L'의 악기", 500, 260);
    text("'R'의 악기", 750, 260);
    text("'X'의 악기", 375, 560);
    text("'당신'의 악기", 625, 560);

  
    if (this.isMouseInLeavingButton()) {
      fill(80)
    } else {fill(255)}
    text("떠나기", width * 0.94, height * 0.05)
  }

   drawSavedInst() {
     for (let i = 0; i < 5; i++) {
     if (this.index == i) {
       parameter1 = this.instSave[i][0];
       parameter2 = this.instSave[i][1];
       parameter3 = this.instSave[i][2];
       parameter4 = this.instSave[i][3];
       parameter5 = this.instSave[i][4];
       parameter6 = this.instSave[i][5];
       mainH = this.instSave[i][6];
       mainS = this.instSave[i][7];
       mainB = this.instSave[i][8];
       colorMode(HSB);
       themeColor = color(mainH, mainS, mainB);
       paperColor = color(mainH, 10, 90);
       penColor = color(mainH, 50, 50);
     }
   }
   }

  mouseClicked() {

    if (this.isMouseInNextButton()) {
      this.currMessage++;
    }

    if (this.currMessage >= 3 && this.loadReady == false) {
      this.loadReady = true;
    } else if (this.loadReady) {
      if (this.isMouseInFirstInst()) {
        background(140);
        //this.index = 0;

        this.index = 0;
        this.drawSavedInst()
        this.isNotMyInst = true;
        saveAndLoadPage = false;
        play.isPlaying = true;
        play.isDisplayingEndMessage = false;
        playPage = true;
        //this.drawSavedInst()
      } else if (this.isMouseInSecondInst()) {
        background(140);
        this.index = 1;
        this.drawSavedInst()
        this.isNotMyInst = true;

        saveAndLoadPage = false;
        play.isPlaying = true;
        play.isDisplayingEndMessage = false;
        playPage = true;
      } else if (this.isMouseInThirdInst()) {
        background(140);
        this.index = 2;
        this.drawSavedInst()
        this.isNotMyInst = true;

        saveAndLoadPage = false;
        play.isPlaying = true;
        play.isDisplayingEndMessage = false;
        playPage = true;
        //this.drawSavedInst()
      } else if (this.isMouseInFourthInst()) {
        background(140);
        this.index = 3;
        this.drawSavedInst()
        this.isNotMyInst = true;

        saveAndLoadPage = false;
        play.isPlaying = true;
        play.isDisplayingEndMessage = false;
        playPage = true;
        //this.drawSavedInst()
      } else if (this.isMouseInFifthInst()) {
        background(140);
        this.index = 4;
        this.drawSavedInst()
        this.isNotMyInst = true;

        saveAndLoadPage = false;
        play.isPlaying = true;
        play.isDisplayingEndMessage = false;
        playPage = true;
      } else if (this.isMouseInLeavingButton()) {
        this.loadReady = false;
        this.endingMessage = true;
      } 
    }
    if (this.endingMessage && this.isMouseInNextButton()) {
      this.endingMessage = false;
      this.goToFirstPage = true;
      console.log("finish")
    }

    if (this.currMessage == 1) {
      this.originalH = mainH
      this.originalS = mainS
      this.originalB = mainB
      this.currInstInfo[0] = parameter1;
      this.currInstInfo[1] = parameter2;
      this.currInstInfo[2] = parameter3;
      this.currInstInfo[3] = parameter4;
      this.currInstInfo[4] = parameter5;
      this.currInstInfo[5] = parameter6;
      this.currInstInfo[6] = mainH;
      this.currInstInfo[7] = mainS;
      this.currInstInfo[8] = mainB;
      
      if (this.instSave.length >= 5) {
        this.instSave.shift()
      }
      
      this.instSave.push(this.currInstInfo)
    }
    
    /*
    console.log(this.instSave)
    console.log(parameter1)
    console.log(parameter2)
    console.log(parameter3)
    console.log(parameter4)
    console.log(parameter5)
    console.log(parameter6)
    console.log(mainH)
    console.log(mainS)
    console.log(mainB)
    */
  }

  

  isMouseInNextButton() {
    return (
      mouseX > width * 0.88 - 70 / 2 &&
      mouseX < width * 0.88 + 70 / 2 &&
      mouseY > height * 0.93 - 40 / 2 &&
      mouseY < height * 0.93 + 40 / 2
    );
  }
  isMouseInFirstInst() {
    return (
      150 < mouseX &&
      mouseX < 350 &&
      150 < mouseY &&
      mouseY < 350 &&
      this.instSave.length > 0
    );
  }
  isMouseInSecondInst() {
    return (
      400 < mouseX &&
      mouseX < 550 &&
      150 < mouseY &&
      mouseY < 350 &&
      this.instSave.length > 1
    );
  }
  isMouseInThirdInst() {
    return (
      650 < mouseX &&
      mouseX < 850 &&
      150 < mouseY &&
      mouseY < 350 &&
      this.instSave.length > 2
    );
  }
  isMouseInFourthInst() {
    return (
      275 < mouseX &&
      mouseX < 475 &&
      450 < mouseY &&
      mouseY < 650 &&
      this.instSave.length > 3
    );
  }
  isMouseInFifthInst() {
    return (
      525 < mouseX &&
      mouseX < 725 &&
      450 < mouseY &&
      mouseY < 650 &&
      this.instSave.length > 4
    );
  }
  isMouseInLeavingButton() {
      return (
        mouseX > width * 0.94 - 70 / 2 &&
        mouseX < width * 0.94 + 70 / 2 &&
        mouseY > height * 0.05 - 40 / 2 &&
        mouseY < height * 0.05 + 40 / 2
      );
  }
}