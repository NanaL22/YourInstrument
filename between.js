//flipFadeIn = 0

class Between {
  constructor() {
  }

  extToDraw() {
    colorMode(HSB);
    image(extractorImg, 0, 0);
    fill(mainH, mainS, mainB, 170);
    rect(width / 2, height / 2, width*2, height*2);
    image(master1, width * 0.2, height * 0.1, 600, 450);
    fill(0, 200);
    rectMode(CORNER);
    rect(width * 0.05, height * 0.1 + 450, width * 0.9, height);
    rectMode(CENTER);

    fill(255);
    textSize(20);
    textStyle(NORMAL);
    textAlign(LEFT, TOP);
    text('공방주인: \n\n  "이제 그림을 그릴걸세. \n   스케치북 위쪽에 그래프를 확인하며 그려 보게나. \n   그 결과에 따라 악기가 만들어질 거야."', width * 0.1, height * 0.1 + 500);
  
    textSize(15);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    if (mouseX > width * 0.88 - 70 / 2 && mouseX < width * 0.88 + 70 / 2 && mouseY > height * 0.93 - 40 / 2 && mouseY < height * 0.93 + 40 / 2) {
      rectMode(CENTER);
      stroke(mainH, 100, 50);
      strokeWeight(3);
      fill(mainH, 100, 50, 150);
      rect(width * 0.88, height * 0.93, 70, 40, 10);
      fill(mainH, 100, 50);
      noStroke();
      text("네!", width * 0.88, height * 0.93);
    } else {
      noStroke();
      fill(255, 150);
      rect(width * 0.88, height * 0.93, 70, 40, 10);
      text("네!", width * 0.88, height * 0.93);
    }
    if (mouseIsPressed && mouseX > width * 0.88 - 70 / 2 && mouseX < width * 0.88 + 70 / 2 && mouseY > height * 0.93 - 40 / 2 && mouseY < height * 0.93 + 40 / 2) {
      betweenExtToDraw = false;
      drawingPage_1 = true;
    }
  }

  drawToPlay() {
    colorMode(HSB, 360, 100, 100, 1)
    if (flipFadeIn < 100) {
      fill(mainH, mainS, mainB, flipFadeIn / 100);
      rect(0, 0, width*2, height*2);
      insideBGM.setVolume(0.2);
      flipFadeIn++
    } else if (flipFadeIn < 200) {
      image(withMasterImg, 0, 0, 1000, 750);
      fill(mainH, mainS, mainB, 1 - flipFadeIn / 200);
      rect(0, 0, width*2, height*2);
      insideBGM.setVolume(0.1);
      flipFadeIn++
    } else if (flipFadeIn < 300) {
      insideBGM.setVolume(0.05);
      flipFadeIn++
    } else if (flipFadeIn == 300) {
      playPage = true;
      betweenDrawToPlay = false;
      flipFadeIn = 0;
      insideBGM.stop();
    }
  }

  playToMusician() {
    colorMode(HSB, 360, 100, 100, 1)
    if (flipFadeIn < 100) {
      image(withMasterImg, 0, 0, 1000, 750);
      fill(0, 0, 0, flipFadeIn / 100);
      rect(0, 0, width*2, height*2);
      flipFadeIn++
      if (flipFadeIn == 50) doorOpening.play();
    } else if (flipFadeIn < 200) {
      flipFadeIn++
      if (flipFadeIn == 150) doorBell.play();
    } else if (flipFadeIn < 400) {
      flipFadeIn++
      image(streetImg, 0, 0, 1000, 750);
      fill(0, 0, 0, 1 - flipFadeIn / 400);
      rect(0, 0, width*2, height*2);
      flipFadeIn++
    } else if (flipFadeIn == 400) {
      flipFadeIn = 0;
      betweenPlayToMusician = false;
      musicianPage = true;
    }
  }


}