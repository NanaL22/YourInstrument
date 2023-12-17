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
      text("reset", width * 0.05, height * 0.02);
    } else {
      noStroke();
      fill(255, 150);
      text("reset", width * 0.05, height * 0.02);
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

      textStartY = 450; pNotes = [];

      cam = createCapture(VIDEO);
      cam.hide();

      // 추가
      play.init();
      musician.init();
      //

      drawingApp.textIndex = 0;
      musician.player.stop();
    }
  }


  justReset() {
    cursor();
    starting = new Starting(startingImg, width / 2, height / 2);
    startingPage = true; withMasterPage = false; extractGuidePage = false; extractorPage = false;
    drawingPage_1 = false; drawingPage_2 = false; drawingPage_3 = false; developingPage = false; playPage = false;

    starting.reset(); withMaster.reset(); drawingApp.reset(); textManager.reset();
    zoomToFlip = 0; flipFadeIn = 0; masterMessage = 1;

    textStartY = 450; pNotes = [];

    cam = createCapture(VIDEO);
    cam.hide();

    // 추가
    play.init();
    musician.init();
    //

    drawingApp.textIndex = 0;
    musician.player.stop();
  }
}