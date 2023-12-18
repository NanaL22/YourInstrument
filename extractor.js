// withMaster의 flipFadeIn = 0; masterMessage = 1;
let nextForExt = 0;
let notYet = true;

class Extractor {
  constructor(pic) {
    this.pic = pic;
  }


  select() {
    if (nextForExt == 0 && notYet) {
      image(this.pic, 0, 0);
      rectMode(CENTER);
      fill(255, 150);
      rect(width / 2, height / 2, width * 0.8, height * 0.3);

      fill(0);
      textAlign(CENTER);
      textSize(30);
      text("테이블 위의 색지 중 하나를 골라주세요.", width / 2, height / 2);
    }
  }

  check() {
    if (nextForExt == 1) {
      image(this.pic, 0, 0);
      colorMode(RGB);
      cam.loadPixels();
      let index = height * 0.5 * width + width / 2;
      let r = cam.pixels[index];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];
      rgbColor = color(r, g, b);
      mainH = hue(rgbColor);
      mainS = saturation(rgbColor);
      mainB = brightness(rgbColor);
      if (mainS > 70) mainS = 70;
      if (mainB < 70) mainB = 70;
      else if (mainB > 80) mainB = 80;

      colorMode(HSB, 360, 100, 100, 256);
      fill(mainH, mainS, mainB, 170);
      rect(width / 2, height / 2, width, height);

      fill(255, 150);
      rect(width / 2, height / 2, width * 0.8, height * 0.3);

      fill(0);
      textAlign(CENTER);
      textSize(30);
      text("색지를 웹캠에 가까이 가져가 보세요.\n(10~20cm 권장)\n나무에 입혀지는 색상이 변하는 것을 확인해 보세요.", width / 2, height / 2);
    }
  }

  final() {
    if (nextForExt == 2) {
      image(this.pic, 0, 0);
      colorMode(RGB);
      cam.loadPixels();
      let index = height * 0.5 * width + width / 2;
      let r = cam.pixels[index];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];
      rgbColor = color(r, g, b);
      mainH = hue(rgbColor);
      mainS = saturation(rgbColor);
      mainB = brightness(rgbColor);
      if (mainS > 70) mainS = 70;
      if (mainB < 70) mainB = 70;
      else if (mainB > 80) mainB = 80;

      colorMode(HSB, 360, 100, 100, 256);
      fill(mainH, mainS, mainB, 170);
      rect(width / 2, height / 2, width, height);

      fill(255, 150);
      rect(width / 2, height / 2, width * 0.8, height * 0.3);

      fill(0);
      textAlign(CENTER);
      textSize(30);
      text("이 색상을 원하신다면\n\n색지를 웹캠에 가까이 한 채로\n\n아래 '추출' 버튼을 눌러주세요.", width / 2, height / 2);
    }
  }

  extracting() {
    if (nextForExt == 3) {
      image(this.pic, 0, 0);
      colorMode(RGB);
      cam.loadPixels();
      let index = height * 0.5 * width + width / 2;
      let r = cam.pixels[index];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];
      rgbColor = color(r, g, b);
      mainH = hue(rgbColor);
      mainS = saturation(rgbColor);
      mainB = brightness(rgbColor);
      if (mainS > 70) mainS = 70;
      if (mainB < 70) mainB = 70;
      else if (mainB > 80) mainB = 80;

      colorMode(HSB, 360, 100, 100, 256);
      fill(mainH, mainS, mainB, 170);
      rect(width / 2, height / 2, width, height);

      // fill(255, 150);
      // rect(width / 2, height / 2, width * 0.6, height * 0.3);

      fill(255);
      textAlign(CENTER);
      textSize(30);
      text("색상 추출 중\n\n(색지를 웹캠에 가까이 한 상태를 유지해 주세요)", width / 2, height * 0.4);
      if (flipFadeIn < 100) {
        text("3", width / 2, height * 0.7);
      } else if (flipFadeIn < 200) {
        text("2", width / 2, height * 0.7);
      } else if (flipFadeIn < 300) {
        text("1", width / 2, height * 0.7);
      }
      flipFadeIn++;
    }
  }

  nextButton() {
    if (nextForExt < 3) {
      if (mouseX > width * 0.88 - 70 / 2 && mouseX < width * 0.88 + 70 / 2 && mouseY > height * 0.93 - 40 / 2 && mouseY < height * 0.93 + 40 / 2) {
        rectMode(CENTER);
        if (nextForExt != 0) {
          stroke(mainH, 100, 70);
          strokeWeight(3);
          fill(mainH, 100, 70, 100);
          rect(width * 0.88, height * 0.93, 70, 40, 10);
          fill(mainH, 100, 70);
        } else {
          stroke(255);
          strokeWeight(3);
          fill(255, 100);
          rect(width * 0.88, height * 0.93, 70, 40, 10);
          fill(255);
        }
        noStroke();
        textSize(20);
        if (nextForExt == 2) {
          text("추출", width * 0.88, height * 0.93);
        } else {
          text("다음", width * 0.88, height * 0.93);
        }
      } else {
        noStroke();
        fill(255, 100);
        rect(width * 0.88, height * 0.93, 70, 40, 10);
        textSize(20);
        if (nextForExt == 2) {
          text("추출", width * 0.88, height * 0.93);
        } else {
          text("다음", width * 0.88, height * 0.93);
        }
      }
    }
  }


  decide() {
    if (flipFadeIn == 300) {
      nextForExt = 0;
      notYet = false;

      image(this.pic, 0, 0);
      colorMode(HSB, 360, 100, 100, 256);
      rectMode(CENTER);

      fill(mainH, mainS, mainB, 170);
      rect(width / 2, height / 2, width, height);

      fill(mainH, mainS, 20, 200);
      rect(width / 2, height / 2, width * 0.6, height * 0.4, 50);

      fill(100);
      textAlign(CENTER, CENTER);
      textSize(25);
      textStyle(BOLD);
      text("이 색상으로 하시겠습니까?", width / 2, height * 0.43);

      textSize(18);
      if (mouseX > width * 0.38 - 190 / 2 && mouseX < width * 0.38 + 190 / 2 && mouseY > height * 0.57 - 60 / 2 && mouseY < height * 0.57 + 60 / 2) {
        stroke(mainH, 100, 70);
        strokeWeight(5);
        fill(mainH, 100, 70, 150);
        rect(width * 0.38, height * 0.57, 190, 60, 30);
        fill(mainH, 100, 70);
        noStroke();
        text("네, 좋아요", width * 0.38, height * 0.57);
      } else {
        noStroke();
        fill(100, 150);
        rect(width * 0.38, height * 0.57, 190, 60, 30);
        text("네, 좋아요", width * 0.38, height * 0.57);
      }

      if (mouseX > width * 0.62 - 190 / 2 && mouseX < width * 0.62 + 190 / 2 && mouseY > height * 0.57 - 60 / 2 && mouseY < height * 0.57 + 60 / 2) {
        stroke(mainH, 100, 70);
        strokeWeight(5);
        fill(mainH, 100, 70, 150);
        rect(width * 0.62, height * 0.57, 190, 60, 30);
        fill(mainH, 100, 70);
        noStroke();
        text("다시 추출할래요", width * 0.62, height * 0.57);
      } else {
        noStroke();
        fill(100, 150);
        rect(width * 0.62, height * 0.57, 190, 60, 30);
        text("다시 추출할래요", width * 0.62, height * 0.57);
      }
    }
  }

  //마우스 클릭시
  clickToDecide() {
    if (mouseX > width * 0.38 - 190 / 2 && mouseX < width * 0.38 + 190 / 2 && mouseY > height * 0.57 - 60 / 2 && mouseY < height * 0.57 + 60 / 2) {
      drawingApp.setup();
      flipFadeIn = 0;
      nextForExt = 0;
      notYet = true;
      betweenExtToDraw = true;
      extractorPage = false;
    }

    if (mouseX > width * 0.62 - 190 / 2 && mouseX < width * 0.62 + 190 / 2 && mouseY > height * 0.57 - 60 / 2 && mouseY < height * 0.57 + 60 / 2) {
      flipFadeIn = 0;
      nextForExt = 2;
      notYet = true;
    }

    if (nextForExt < 3 && mouseX > width * 0.88 - 70 / 2 && mouseX < width * 0.88 + 70 / 2 && mouseY > height * 0.93 - 40 / 2 && mouseY < height * 0.93 + 40 / 2) {
      nextForExt++;
    }
  }
}
