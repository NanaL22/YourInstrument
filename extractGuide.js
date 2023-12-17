// withMaster의 flipFadeIn = 0; masterMessage = 1;
let cleaningPlaying = false;


class ExtractGuide {
  constructor(pic, x, y) {
    this.pic = pic;
    this.buttonX = x;
    this.buttonY = y;
  }

  show() {
    // stroke(255);
    noStroke();
    image(this.pic, 0, 0);
    // rectMode(CORNERS);
    // rect(600, 400, 750, 650);
    if (flipFadeIn < 40) {
      fill(0, 300 - flipFadeIn * 7);
      rect(width / 2, height / 2, width, height);
      flipFadeIn++
    } else if (flipFadeIn < 60) {
      flipFadeIn++
    } else if (flipFadeIn < 250) {
      fill(0, flipFadeIn * 1.3 - 250);
      rect(width / 2, height / 2, width, height);
      flipFadeIn++;
    } else if (flipFadeIn < 300) {
      fill(0, flipFadeIn * 1.3 - 250);
      rect(width / 2, height / 2, width, height);
      image(master2, width * 0.2, height * 0.1, 600, 450);
      fill(0, 200);
      rectMode(CORNER);
      rect(width * 0.05, height * 0.1 + 450, width * 0.9, height);
      rectMode(CENTER);
      flipFadeIn++;
    } else if (flipFadeIn == 300) {
      if (masterMessage == 1) {
        fill(0, flipFadeIn * 1.3 - 250);
        rect(width / 2, height / 2, width, height);
        image(master2, width * 0.2, height * 0.1, 600, 450);
        fill(0, 200);
        rectMode(CORNER);
        rect(width * 0.05, height * 0.1 + 450, width * 0.9, height);
        rectMode(CENTER);
      } else {
        fill(0, flipFadeIn * 1.3 - 250);
        rect(width / 2, height / 2, width, height);
        image(master1, width * 0.2, height * 0.1, 600, 450);
        fill(0, 200);
        rectMode(CORNER);
        rect(width * 0.05, height * 0.1 + 450, width * 0.9, height);
        rectMode(CENTER);
      }
    }
  }


  nextMessage() {
    if (flipFadeIn >= 300) {
      if (masterMessage < 4) {
        textSize(20);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        if (mouseX > width * 0.88 - 70 / 2 && mouseX < width * 0.88 + 70 / 2 && mouseY > height * 0.93 - 40 / 2 && mouseY < height * 0.93 + 40 / 2) {
          rectMode(CENTER);
          stroke(220, 180, 30);
          strokeWeight(3);
          fill(220, 180, 30, 150);
          rect(width * 0.88, height * 0.93, 70, 40, 10);
          fill(220, 180, 30);
          noStroke();
          text("next", width * 0.88, height * 0.93);
        } else {
          noStroke();
          fill(255, 150);
          rect(width * 0.88, height * 0.93, 70, 40, 10);
          text("next", width * 0.88, height * 0.93);
        }
      } else if (masterMessage == 4) {
        textSize(15);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        if (mouseX > width * 0.88 - 70 / 2 && mouseX < width * 0.88 + 70 / 2 && mouseY > height * 0.93 - 40 / 2 && mouseY < height * 0.93 + 40 / 2) {
          rectMode(CENTER);
          stroke(220, 180, 30);
          strokeWeight(3);
          fill(220, 180, 30, 150);
          rect(width * 0.88, height * 0.93, 70, 40, 10);
          fill(220, 180, 30);
          noStroke();
          text("추출하기", width * 0.88, height * 0.93);
        } else {
          noStroke();
          fill(255, 150);
          rect(width * 0.88, height * 0.93, 70, 40, 10);
          text("추출하기", width * 0.88, height * 0.93);
        }
      }
    }
  }

  skip() {
    if (masterMessage < 4) {
      if (flipFadeIn >= 300) {
        textSize(20);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        if (mouseX > width * 0.88 - 70 / 2 && mouseX < width * 0.88 + 70 / 2 && mouseY > height * 0.05 - 40 / 2 && mouseY < height * 0.05 + 40 / 2) {
          rectMode(CENTER);
          stroke(220, 180, 30);
          strokeWeight(3);
          noFill();
          // fill(220, 180, 30, 150);
          rect(width * 0.88, height * 0.05, 70, 40, 10);
          fill(220, 180, 30);
          noStroke();
          text("skip", width * 0.88, height * 0.05);
        } else {
          noStroke();
          fill(255, 150);
          text("skip", width * 0.88, height * 0.05);
        }
      }
    }
  }


  messages() {
    fill(255);
    textSize(20);
    textStyle(NORMAL);
    textAlign(LEFT, TOP);
    if (flipFadeIn == 300 && masterMessage == 1) {
      text('공방주인: \n\n   "허허, 작업대 위가 너무 지저분하구만."', width * 0.1, height * 0.1 + 500);
      if(!cleaningPlaying) {
        cleaning.play();
        cleaningPlaying = true;
      }
    }

    if (flipFadeIn == 300 && masterMessage == 2) {
      text('공방주인: \n\n   "내가 작업대 위를 치우는 동안 자네는 악기에 색을 입히고 있게나."', width * 0.1, height * 0.1 + 500);
    }

    if (flipFadeIn == 300 && masterMessage == 3) {
      text('공방주인: \n\n   "아래 놓여진 색지 중 마음에 드는 색을 골라보게. \n   그 색이 자네의 악기가 가진 고유한 색이 될 거라네."', width * 0.1, height * 0.1 + 500);
    }

    if (flipFadeIn == 300 && masterMessage == 4) {
      text('공방주인: \n\n  "색지를 카메라에 가까이 가져다대고, 추출하기 버튼을 누르면 된다네."', width * 0.1, height * 0.1 + 500);
    }
  }

  //마우스 클릭하면
  toNextMessage() {
    if (mouseX > width * 0.88 - 70 / 2 && mouseX < width * 0.88 + 70 / 2 && mouseY > height * 0.93 - 40 / 2 && mouseY < height * 0.93 + 40 / 2) {
      masterMessage++;
    }

    if (mouseX > width * 0.88 - 70 / 2 && mouseX < width * 0.88 + 70 / 2 && mouseY > height * 0.05 - 40 / 2 && mouseY < height * 0.05 + 40 / 2) {
      masterMessage = 4;
    }
  }


  flip() {
    if (masterMessage == 5) {
      extractGuidePage = false;
      extractorPage = true;
      zoomToFlip = 0;
      flipFadeIn = 0; 
      masterMessage = 1;
      cleaningPlaying = false;
    }
  }
}