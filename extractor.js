// withMaster의 flipFadeIn = 0; masterMessage = 1;


class Extractor {
  constructor(pic, x, y) {
    this.pic = pic;
    this.buttonX = x;
    this.buttonY = y;
  }


  show() {
    // stroke(255);
    noStroke();
    // rectMode(CORNERS);
    // rect(600, 400, 750, 650);
    if (flipFadeIn < 300) {
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
      fill(mainH, mainS, mainB, flipFadeIn);
      rect(width / 2, height / 2, width, height);
      textSize(30);
      textAlign(CENTER);
      textStyle(BOLDITALIC);
      fill(255);
      if (frameCount % 45 < 15) {
        text("색상 추출 중.", width / 2, height / 2);
      } else if (frameCount % 45 >= 15 || frameCount % 45 < 30) {
        text("색상 추출 중...", width / 2, height / 2);
      } else {
        text("색상 추출 중.....", width / 2, height / 2);
      }
      flipFadeIn++;
    } else if (flipFadeIn < 400) {
      image(this.pic, 0, 0);
      colorMode(HSB, 360, 100, 100, 256);
      fill(mainH, mainS, mainB, 526 - flipFadeIn * 5 / 4);
      rect(width / 2, height / 2, width, height);
      flipFadeIn++;
    } else if (flipFadeIn == 450) {
      image(this.pic, 0, 0);
      flipFadeIn++;
    }
  }

  paint() {
    if (flipFadeIn == 451) {
      image(this.pic, 0, 0);
      flipFadeIn++;
    }

    if (flipFadeIn < 650) {
      colorMode(HSB, 360, 100, 100, 256);
      fill(mainH, mainS, mainB, 1);
      noStroke();
      rect(width / 2, height / 2, width, height);
      flipFadeIn++;
    }
  }


  decide() {
    if (flipFadeIn == 650) {
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
        stroke(mainH, 70, 90);
        strokeWeight(5);
        fill(mainH, 70, 90, 150);
        rect(width * 0.38, height * 0.57, 190, 60, 30);
        fill(mainH, 70, 90);
        noStroke();
        text("네, 좋아요", width * 0.38, height * 0.57);
      } else {
        noStroke();
        fill(100, 150);
        rect(width * 0.38, height * 0.57, 190, 60, 30);
        text("네, 좋아요", width * 0.38, height * 0.57);
      }

      if (mouseX > width * 0.62 - 190 / 2 && mouseX < width * 0.62 + 190 / 2 && mouseY > height * 0.57 - 60 / 2 && mouseY < height * 0.57 + 60 / 2) {
        stroke(mainH, 70, 90);
        strokeWeight(5);
        fill(mainH, 70, 90, 150);
        rect(width * 0.62, height * 0.57, 190, 60, 30);
        fill(mainH, 70, 90);
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
      drawingPage_1 = true;
      extractorPage = false;
    }

    if (mouseX > width * 0.62 - 190 / 2 && mouseX < width * 0.62 + 190 / 2 && mouseY > height * 0.57 - 60 / 2 && mouseY < height * 0.57 + 60 / 2) {
      flipFadeIn = 0;
    }
  }
}
