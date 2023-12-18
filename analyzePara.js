//flipFadeIn = 0

class AnalyzePara {
  constructor() {
  }

  show() {
    image(extractorImg, 0, 0)
    colorMode(HSB);
    fill(mainH, mainS, mainB, 170);
    rectMode(CORNER);
    rect(0, 0, width, height);
    myGraph.drawingAppGraph();


    //공방주인
    fill(0, 170);
    rect(0, height * 0.2, width, height * 0.3);
    image(master1, -width * 0.1, height * 0.2, width * 0.3, height * 0.3);

    //message
    textAlign(LEFT);
    textSize(20);
    fill(255);
    text("위 그래프는 자네를 관찰한 결과라네.\n\n이 아래를 보면 그래프가 자네의 성향과 어떻게 연결되는지 알 수 있을 걸세.\n\n진한 색 막대를 누르면 자네의 악기에 배정된 소리를,\n\n연한 색 막대를 누르면 후보였던 다른 소리들을 들어 볼 수 있네.", width * 0.2, height * 0.35);
  }


  result() {
    fill(themeColor);
    rect(100, 420, 800, 240);

    fill(0);
    textSize(15);
    text("선 긋는 빠르기", 110, 440);
    text("지우개 사용 횟수", 110, 480);
    text("그은 선의 획수", 110, 520);
    text("총 소요시간", 110, 560);
    text("펜 사용시간", 110, 600);
    text("펜 사용 비율", 110, 640);

    text("과감함", 850, 440);
    text("꼼꼼함", 850, 480);
    text("세밀함", 850, 520);
    text("안정감", 850, 560);
    text("유쾌함", 850, 600);
    text("결정력", 850, 640);


    //1
    stroke(255);
    strokeWeight(5);
    fill(paperColor);
    if (parameter1 <= 60) {
      fill(penColor);
    }
    rect(240, 425, 150, 30);
    fill(paperColor);
    if (parameter1 > 60 && parameter1 <= 120) {
      fill(penColor);
    }
    rect(390, 425, 150, 30);
    fill(paperColor);
    if (parameter1 > 120 && parameter1 <= 180) {
      fill(penColor);
    }
    rect(540, 425, 150, 30);
    fill(paperColor);
    if (parameter1 > 180) {
      fill(penColor);
    }
    rect(690, 425, 150, 30);
    fill(paperColor);


    //2
    fill(paperColor);
    if (parameter2 <= 1) {
      fill(penColor);
    }
    rect(240, 465, 150, 30);
    fill(paperColor);
    if (parameter2 > 1 && parameter2 <= 2) {
      fill(penColor);
    }
    rect(390, 465, 150, 30);
    fill(paperColor);
    if (parameter2 > 2 && parameter2 <= 3) {
      fill(penColor);
    }
    rect(540, 465, 150, 30);
    fill(paperColor);
    if (parameter2 > 3) {
      fill(penColor);
    }
    rect(690, 465, 150, 30);
    fill(paperColor);


    //3
    fill(paperColor);
    if (parameter3 <= 8) {
      fill(penColor);
    }
    rect(240, 505, 150, 30);
    fill(paperColor);
    if (parameter3 > 8 && parameter3 <= 16) {
      fill(penColor);
    }
    rect(390, 505, 150, 30);
    fill(paperColor);
    if (parameter3 > 16 && parameter3 <= 24) {
      fill(penColor);
    }
    rect(540, 505, 150, 30);
    fill(paperColor);
    if (parameter3 > 24) {
      fill(penColor);
    }
    rect(690, 505, 150, 30);
    fill(paperColor);



    //4
    fill(paperColor);
    if (parameter4 <= 20) {
      fill(penColor);
    }
    rect(240, 545, 150, 30);
    fill(paperColor);
    if (parameter4 > 20 && parameter4 <= 40) {
      fill(penColor);
    }
    rect(390, 545, 150, 30);
    fill(paperColor);
    if (parameter4 > 40 && parameter4 <= 60) {
      fill(penColor);
    }
    rect(540, 545, 150, 30);
    fill(paperColor);
    if (parameter4 > 60) {
      fill(penColor);
    }
    rect(690, 545, 150, 30);
    fill(paperColor);


    //6
    fill(paperColor);
    if (parameter6 <= 5) {
      fill(penColor);
    }
    rect(240, 585, 150, 30);
    fill(paperColor);
    if (parameter6 > 5 && parameter6 <= 10) {
      fill(penColor);
    }
    rect(390, 585, 150, 30);
    fill(paperColor);
    if (parameter6 > 10 && parameter6 <= 15) {
      fill(penColor);
    }
    rect(540, 585, 150, 30);
    fill(paperColor);
    if (parameter6 > 15) {
      fill(penColor);
    }
    rect(690, 585, 150, 30);
    fill(paperColor);


    //5
    fill(paperColor);
    if (parameter5 <= 8) {
      fill(penColor);
    }
    rect(240, 625, 150, 30);
    fill(paperColor);
    if (parameter5 > 8 && parameter5 <= 16) {
      fill(penColor);
    }
    rect(390, 625, 150, 30);
    fill(paperColor);
    if (parameter5 > 16 && parameter5 <= 24) {
      fill(penColor);
    }
    rect(540, 625, 150, 30);
    fill(paperColor);
    if (parameter5 > 24) {
      fill(penColor);
    }
    rect(690, 625, 150, 30);
    fill(paperColor);
  }


  checkSound() {
    if (mouseX > 240 && mouseX < 390 && mouseY > 425 && mouseY < 455) {
      winds[0 * 13 + 6].play();
      winds[1 * 13 + 6].stop();
      winds[2 * 13 + 6].stop();
      winds[3 * 13 + 6].stop();
    }
    if (mouseX > 390 && mouseX < 540 && mouseY > 425 && mouseY < 455) {
      winds[0 * 13 + 6].stop();
      winds[1 * 13 + 6].play();
      winds[2 * 13 + 6].stop();
      winds[3 * 13 + 6].stop();
    }
    if (mouseX > 540 && mouseX < 690 && mouseY > 425 && mouseY < 455) {
      winds[0 * 13 + 6].stop();
      winds[1 * 13 + 6].stop();
      winds[2 * 13 + 6].play();
      winds[3 * 13 + 6].stop();
    }
    if (mouseX > 690 && mouseX < 840 && mouseY > 425 && mouseY < 455) {
      winds[0 * 13 + 6].stop();
      winds[1 * 13 + 6].stop();
      winds[2 * 13 + 6].stop();
      winds[3 * 13 + 6].play();
    }

    //2
    if (mouseX > 240 && mouseX < 390 && mouseY > 465 && mouseY < 495) {
      strings[0 * 13 + 6].play();
      strings[1 * 13 + 6].stop();
      strings[2 * 13 + 6].stop();
      strings[3 * 13 + 6].stop();
    }
    if (mouseX > 390 && mouseX < 540 && mouseY > 465 && mouseY < 495) {
      strings[0 * 13 + 6].stop();
      strings[1 * 13 + 6].play();
      strings[2 * 13 + 6].stop();
      strings[3 * 13 + 6].stop();
    }
    if (mouseX > 540 && mouseX < 690 && mouseY > 465 && mouseY < 495) {
      strings[0 * 13 + 6].stop();
      strings[1 * 13 + 6].stop();
      strings[2 * 13 + 6].play();
      strings[3 * 13 + 6].stop();
    }
    if (mouseX > 690 && mouseX < 840 && mouseY > 465 && mouseY < 495) {
      strings[0 * 13 + 6].stop();
      strings[1 * 13 + 6].stop();
      strings[2 * 13 + 6].stop();
      strings[3 * 13 + 6].play();
    }


    //3
    if (mouseX > 240 && mouseX < 390 && mouseY > 505 && mouseY < 535) {
      keyboards[0 * 13 + 6].play();
      keyboards[1 * 13 + 6].stop();
      keyboards[2 * 13 + 6].stop();
      keyboards[3 * 13 + 6].stop();
    }
    if (mouseX > 390 && mouseX < 540 && mouseY > 505 && mouseY < 535) {
      keyboards[0 * 13 + 6].stop();
      keyboards[1 * 13 + 6].play();
      keyboards[2 * 13 + 6].stop();
      keyboards[3 * 13 + 6].stop();
    }
    if (mouseX > 540 && mouseX < 690 && mouseY > 505 && mouseY < 535) {
      keyboards[0 * 13 + 6].stop();
      keyboards[1 * 13 + 6].stop();
      keyboards[2 * 13 + 6].play();
      keyboards[3 * 13 + 6].stop();
    }
    if (mouseX > 690 && mouseX < 840 && mouseY > 505 && mouseY < 535) {
      keyboards[0 * 13 + 6].stop();
      keyboards[1 * 13 + 6].stop();
      keyboards[2 * 13 + 6].stop();
      keyboards[3 * 13 + 6].play();
    }


    //4
    if (mouseX > 240 && mouseX < 390 && mouseY > 545 && mouseY < 575) {
      guitars[0 * 13 + 6].play();
      guitars[1 * 13 + 6].stop();
      guitars[2 * 13 + 6].stop();
      guitars[3 * 13 + 6].stop();
    }
    if (mouseX > 390 && mouseX < 540 && mouseY > 545 && mouseY < 575) {
      guitars[0 * 13 + 6].stop();
      guitars[1 * 13 + 6].play();
      guitars[2 * 13 + 6].stop();
      guitars[3 * 13 + 6].stop();
    }
    if (mouseX > 540 && mouseX < 690 && mouseY > 545 && mouseY < 575) {
      guitars[0 * 13 + 6].stop();
      guitars[1 * 13 + 6].stop();
      guitars[2 * 13 + 6].play();
      guitars[3 * 13 + 6].stop();
    }
    if (mouseX > 690 && mouseX < 840 && mouseY > 545 && mouseY < 575) {
      guitars[0 * 13 + 6].stop();
      guitars[1 * 13 + 6].stop();
      guitars[2 * 13 + 6].stop();
      guitars[3 * 13 + 6].play();
    }

    //6
    if (mouseX > 240 && mouseX < 390 && mouseY > 585 && mouseY < 615) {
      brass[0 * 13 + 6].play();
      brass[1 * 13 + 6].stop();
      brass[2 * 13 + 6].stop();
      brass[3 * 13 + 6].stop();
    }
    if (mouseX > 390 && mouseX < 540 && mouseY > 585 && mouseY < 615) {
      brass[0 * 13 + 6].stop();
      brass[1 * 13 + 6].play();
      brass[2 * 13 + 6].stop();
      brass[3 * 13 + 6].stop();
    }
    if (mouseX > 540 && mouseX < 690 && mouseY > 585 && mouseY < 615) {
      brass[0 * 13 + 6].stop();
      brass[1 * 13 + 6].stop();
      brass[2 * 13 + 6].play();
      brass[3 * 13 + 6].stop();
    }
    if (mouseX > 690 && mouseX < 840 && mouseY > 585 && mouseY < 615) {
      brass[0 * 13 + 6].stop();
      brass[1 * 13 + 6].stop();
      brass[2 * 13 + 6].stop();
      brass[3 * 13 + 6].play();
    }


    //5
    if (mouseX > 240 && mouseX < 390 && mouseY > 625 && mouseY < 655) {
      organs[0 * 13 + 6].play();
      organs[1 * 13 + 6].stop();
      organs[2 * 13 + 6].stop();
      organs[3 * 13 + 6].stop();
    }
    if (mouseX > 390 && mouseX < 540 && mouseY > 625 && mouseY < 655) {
      organs[0 * 13 + 6].stop();
      organs[1 * 13 + 6].play();
      organs[2 * 13 + 6].stop();
      organs[3 * 13 + 6].stop();
    }
    if (mouseX > 540 && mouseX < 690 && mouseY > 625 && mouseY < 655) {
      organs[0 * 13 + 6].stop();
      organs[1 * 13 + 6].stop();
      organs[2 * 13 + 6].play();
      organs[3 * 13 + 6].stop();
    }
    if (mouseX > 690 && mouseX < 840 && mouseY > 625 && mouseY < 655) {
      organs[0 * 13 + 6].stop();
      organs[1 * 13 + 6].stop();
      organs[2 * 13 + 6].stop();
      organs[3 * 13 + 6].play();
    }
  }








  nextButton() {
    rectMode(CENTER);
    if (mouseX > width * 0.88 - 70 / 2 && mouseX < width * 0.88 + 70 / 2 && mouseY > height * 0.93 - 40 / 2 && mouseY < height * 0.93 + 40 / 2) {
      if (nextForExt != 0) {
        stroke(mainH, 100, 50);
        strokeWeight(3);
        fill(mainH, 100, 50, 100);
        rect(width * 0.88, height * 0.93, 70, 40, 10);
        fill(mainH, 100, 50);
      } else {
        stroke(255);
        strokeWeight(3);
        fill(255, 100);
        rect(width * 0.88, height * 0.93, 70, 40, 10);
        fill(255);
      }
      noStroke();
      textAlign(CENTER);
      textSize(20);
      text("다음", width * 0.88, height * 0.93);

    } else {
      noStroke();
      fill(255, 100);
      rect(width * 0.88, height * 0.93, 70, 40, 10);
      textAlign(CENTER);
      textSize(20);
      text("다음", width * 0.88, height * 0.93);
    }
  }

  next() {
    if (mouseX > width * 0.88 - 70 / 2 && mouseX < width * 0.88 + 70 / 2 && mouseY > height * 0.93 - 40 / 2 && mouseY < height * 0.93 + 40 / 2) {
      analyzeParaPage = false;
      betweenDrawToPlay = true;
    }
  }
}