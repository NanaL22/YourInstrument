let flipFadeIn = 0;
let masterMessage = 1;
// Starting의 zoomToFlip 씀
let timeToExtImg;
let footStepPlaying = false;
let withMasterPause = false;
let insideBGMPlaying = false;




class WithMaster {
  constructor(pic, x, y) {
    this.pic = pic;
    this.buttonX = x;
    this.buttonY = y;
  }

  reset() {
    flipFadeIn = 0;
    masterMessage = 1;
    timeToExtImg;
    footStepPlaying = false;
    withMasterPause = false;
    insideBGMPlaying = false;
    insideBGM.stop();
  }

  bgm() {
    if (insideBGM.currentTime() >= 156) {
      insideBGM.jump(0);
    }
  }

  show() {
    if (!withMasterPause) {
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
        if (!insideBGMPlaying) {
          insideBGM.setVolume(0.1);
          insideBGM.play();
          insideBGMPlaying = true;
        }
      } else if (flipFadeIn < 250) {
        fill(0, flipFadeIn * 1.3 - 250);
        rect(width / 2, height / 2, width, height);
        flipFadeIn++;
        insideBGM.setVolume(0.2);
      } else if (flipFadeIn < 300) {
        insideBGM.setVolume(0.3);
        fill(0, flipFadeIn * 1.3 - 250);
        rect(width / 2, height / 2, width, height);
        image(master1, width * 0.2, height * 0.1, 600, 450);
        fill(0, 200);
        rectMode(CORNER);
        rect(width * 0.05, height * 0.1 + 450, width * 0.9, height);
        rectMode(CENTER);
        flipFadeIn++;
      } else if (flipFadeIn == 300) {
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
          text("네!", width * 0.88, height * 0.93);
        } else {
          noStroke();
          fill(255, 150);
          rect(width * 0.88, height * 0.93, 70, 40, 10);
          text("네!", width * 0.88, height * 0.93);
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
      text('공방주인: \n\n   "어서오게. 악기를 만들러 왔나?"', width * 0.1, height * 0.1 + 500);
    }

    if (flipFadeIn == 300 && masterMessage == 2) {
      text('공방주인: \n\n   "이 곳은 자네가 그리는 그림을 기반으로 악기를 만들어 주는 공방이라네."', width * 0.1, height * 0.1 + 500);
    }

    if (flipFadeIn == 300 && masterMessage == 3) {
      text('공방주인: \n\n   “자네가 그림을 그리면서 하는 모든 행동들이 악기의 소리에 영향을 미칠 거야. \n   얼마나 그림을 오래 그리는지, 얼마나 선을 과감하게 긋는지, \n   그림을 그리며 얼마나 망설이는지까지 전부.”', width * 0.1, height * 0.1 + 500);
    }

    if (flipFadeIn == 300 && masterMessage == 4) {
      text('공방주인: \n\n  "완성된 악기는 직접 연주해볼 수도, 악사에게 악기 연주를 부탁할 수도 있다네. \n   한 번 만들어보겠나?"', width * 0.1, height * 0.1 + 500);
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
      if (flipFadeIn < 350) {
        fill(0, 480 - flipFadeIn * 1.3);
        rect(width / 2, height / 2, width, height);
        flipFadeIn++;
      } else if (flipFadeIn == 350) {
        fill(0, 480 - flipFadeIn * 1.3);
        rect(width / 2, height / 2, width, height);
        timeToExtImg = this.pic;
        flipFadeIn++;
        zoomToFlip = 0;
      } else if (flipFadeIn < 400) {
        fill(0, 480 - flipFadeIn * 1.3);
        rect(width / 2, height / 2, width, height);
        flipFadeIn++;
      }
      if (flipFadeIn >= 400 && zoomToFlip < 200) {
        image(timeToExtImg, 0 - zoomToFlip * 10, 0 - zoomToFlip * 15, 1000 + zoomToFlip * 40, 750 + zoomToFlip * 30);
        fill(0, zoomToFlip * 1.5);
        rect(width / 2, height / 2, width, height);
        if (!footStepPlaying) {
          footStep.play();
          footStepPlaying = true;
        }
        zoomToFlip += 1
        withMasterPause = true;
      } else if (zoomToFlip == 200) {
        zoomToFlip = 0;
        flipFadeIn = 0;
        masterMessage = 1;
        withMasterPage = false;
        extractGuidePage = true;
      }
    }
  }
}