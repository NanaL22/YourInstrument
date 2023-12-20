class ResetButton {
  constructor() {

  }

  show() {
    textSize(20);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    if (mouseX > width * 0.05 - 70 / 2 && mouseX < width * 0.05 + 70 / 2 && mouseY > height * 0.02 - 40 / 2 && mouseY < height * 0.02 + 40 / 2) {
      fill(220, 50, 30);
      noStroke();
      text("처음으로", width * 0.05, height * 0.02);
    } else {
      noStroke();
      fill(255, 150);
      text("처음으로", width * 0.05, height * 0.02);
    }
  }



  //마우스 클릭하면
  backToStart() {
    if (mouseX > width * 0.05 - 70 / 2 && mouseX < width * 0.05 + 70 / 2 && mouseY > height * 0.02 - 40 / 2 && mouseY < height * 0.02 + 40 / 2) {
      cursor();
      starting = new Starting(startingImg, width / 2, height / 2);
      startingPage = true; withMasterPage = false; extractGuidePage = false; extractorPage = false;
      drawingPage_1 = false; drawingPage_2 = false; drawingPage_3 = false; developingPage = false; playPage = false;

      starting.reset(); withMaster.reset(); drawingApp.reset(); textManager.reset();
      zoomToFlip = 0; flipFadeIn = 0; masterMessage = 1;

      nextForExt = 0;
      flipFadeIn = 0;
      notYet = true;

      textStartY = 450; pNotes = [];

      cam = createCapture(VIDEO);
      cam.hide();

      // 추가
      play.init();
      musician.init();
      //

      drawingApp.textIndex = 0;
      musician.player.stop();

      saveAndLoad.loadReady = false;
      saveAndLoad.endingMessage = false;
      saveAndLoad.goToFirstPage = false;
      saveAndLoad.isNotMyInst = false;
      saveAndLoad.currMessage = 0;
      saveAndLoad.instSave = [[0, 0, 0, 0, 0, 0, 330, 15, 100], [150, 1, 7, 10, 25, 5, 189, 60, 90], [250, 3, 17, 20, 40, 8, 54, 50, 98], [500, 10, 20, 25, 55, 20, 0, 61, 95]]; //초기화하면 안 되는 부분

    }
  }


  justReset() {
    cursor();
    starting = new Starting(startingImg, width / 2, height / 2);
    startingPage = true; withMasterPage = false; extractGuidePage = false; extractorPage = false;
    drawingPage_1 = false; drawingPage_2 = false; drawingPage_3 = false; developingPage = false; playPage = false;

    starting.reset(); withMaster.reset(); drawingApp.reset(); textManager.reset();
    zoomToFlip = 0; flipFadeIn = 0; masterMessage = 1;


    nextForExt = 0;
    flipFadeIn = 0;
    notYet = true;

    textStartY = 450; pNotes = [];

    cam = createCapture(VIDEO);
    cam.hide();

    // 추가
    play.init();
    musician.init();
    //

    drawingApp.textIndex = 0;
    musician.player.stop();

    saveAndLoad.loadReady = false;
    saveAndLoad.endingMessage = false;
    saveAndLoad.goToFirstPage = false;
    saveAndLoad.isNotMyInst = false;
    saveAndLoad.currMessage = 0;
    saveAndLoad.instSave = [[0, 0, 0, 0, 0, 0, 330, 15, 100], [150, 1, 7, 10, 25, 5, 189, 60, 90], [250, 3, 17, 20, 40, 8, 54, 50, 98], [500, 10, 20, 25, 55, 20, 0, 61, 95]]; //초기화하면 안 되는 부분

  }
}
