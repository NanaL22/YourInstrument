class DirectToExt {
  constructor() {

  }

  show() {
    textSize(15);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    if (mouseX > width * 0.93 - 70 / 2 && mouseX < width * 0.93 + 70 / 2 && mouseY > height * 0.98 - 40 / 2 && mouseY < height * 0.98 + 40 / 2) {
      fill(220, 50, 30);
      noStroke();
      text("색상추출 바로가기", width * 0.93, height * 0.98);
    } else {
      noStroke();
      fill(255, 150);
      text("색상추출 바로가기", width * 0.93, height * 0.98);
    }
  }



  //마우스 클릭하면
  jumpToExt() {
    if (mouseX > width * 0.93 - 70 / 2 && mouseX < width * 0.93 + 70 / 2 && mouseY > height * 0.98 - 40 / 2 && mouseY < height * 0.98 + 40 / 2) {
      nextForExt = 0;
      flipFadeIn = 0;
      notYet = true;
      withMasterPage = false;
      extractGuidePage = false;
      extractorPage = true;
    }
  }
}