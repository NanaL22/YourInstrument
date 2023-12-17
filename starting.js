let familyArea = false; let familyPlaying = false; familyColor = false;
let snowSteppingArea = false; let snowSteppingPlaying = false; let snowSteppingColor = false; let snowSteppingCount = 0;
let streetLampArea = false; let streetLampPlaying = false; let streetLampColor = false; let streetLampCount = 0;
let knockArea = false; let knockPlaying = false;

let entering = false;
let startingPause = false;
let timeToGoImg; let flipToWorkshop = false; let zoomToFlip = 0;
let doorBellPlaying = false;
let doorOpeningPlaying = false;
let startingBGMPlaying = false;


class Starting {
  constructor(pic, x, y) {
    this.pic = pic;
    this.gray = createImage(pic.width, pic.height);
    this.gray.copy(pic, 0, 0, pic.width, pic.height, 0, 0, pic.width, pic.height);
    this.gray.filter(GRAY);
    this.buttonX = x;
    this.buttonY = y;
    this.pic.loadPixels();
    this.gray.loadPixels();
  }

  reset() {
    familyArea = false; familyPlaying = false; familyColor = false;
    snowSteppingArea = false; snowSteppingPlaying = false; snowSteppingColor = false; snowSteppingCount = 0;
    streetLampArea = false; streetLampPlaying = false; streetLampColor = false; streetLampCount = 0;
    knockArea = false; knockPlaying = false;

    entering = false;
    startingPause = false;
    flipToWorkshop = false; zoomToFlip = 0;
    doorBellPlaying = false;
    doorOpeningPlaying = false;
    startingBGMPlaying = false;
    startingBGM.jump(0);
    startingBGM.setVolume(0.3);
  }

  show() {
    // stroke(255);
    noStroke();
    image(this.gray, 0, 0);
    // rectMode(CORNERS);
    // rect(600, 400, 750, 650);
  }

  yourMouse() {
    colorMode(RGB);
    noStroke();
    if (!startingPause) {
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          let d = dist(x, y, mouseX + random(-20, 20), mouseY + random(-20, 20));
          if (d < 20) {
            let index = (x + y * width) * 4;
            this.gray.pixels[index] = this.pic.pixels[index];
            this.gray.pixels[index + 1] = this.pic.pixels[index + 1];
            this.gray.pixels[index + 2] = this.pic.pixels[index + 2];
            this.gray.pixels[index + 3] = 255;
          }
        }
      }
      this.gray.updatePixels();
    }
  }

  bgm() {
    if (!startingBGMPlaying) {
      startingBGM.setVolume(0.3);
      startingBGM.play();
      startingBGMPlaying = true;
    }
    if (startingBGM.currentTime() >= 165) {
      startingBGM.jump(0);
    }
  }


  //추가
  soundEffect() {
    if (!startingPause) {
      //family
      if (mouseX > 60 && mouseX < 115 && mouseY > 215 && mouseY < 350) familyArea = true;
      else familyArea = false;
      if (familyArea && !familyPlaying) {
        family.play();
        familyPlaying = true;
      }
      if (!familyArea && familyPlaying) {
        family.stop();
        familyPlaying = false;
      }

      //knock
      if (mouseX > 600 && mouseX < 750 && mouseY > 400 && mouseY < 650) knockArea = true;
      else knockArea = false;
      if (knockArea && !knockPlaying) {
        knock.play();
        knockPlaying = true;
      }
      if (!knockArea && knockPlaying) {
        knock.stop();
        knockPlaying = false;
      }

      //snowStepping
      if (mouseX > 25 && mouseX < 330 && mouseY > 600 && mouseY < 750 || mouseX > 300 && mouseX < 750 && mouseY > 680 && mouseY < 750) {
        snowSteppingArea = true
      }
      else snowSteppingArea = false;
      if (snowSteppingArea && !snowSteppingPlaying) {
        snowStepping.play();
        snowSteppingPlaying = true;
      }
      if (!snowSteppingArea && snowSteppingPlaying) {
        snowStepping.stop();
        snowSteppingPlaying = false;
      }

      //streetLamp
      if (mouseX > 825 && mouseX < 940 && mouseY > 40 && mouseY < 160) streetLampArea = true;
      else streetLampArea = false;
      if (streetLampArea && !streetLampPlaying) {
        streetLamp.play();
        streetLampPlaying = true;
      }
      if (!streetLampArea && streetLampPlaying) {
        streetLamp.stop();
        streetLampPlaying = false;
      }
    }
  }




  coloring() {
    if (!startingPause) {
      colorMode(RGB);
      noStroke();
      //family
      if (familyColor) {
        for (let x = 0; x < 350; x++) {
          for (let y = 0; y < height; y++) {
            if (y > 140 + x * 18 / 35 && y < 510 - x * 1 / 35) {
              let index = (x + y * width) * 4;
              this.gray.pixels[index] = this.pic.pixels[index];
              this.gray.pixels[index + 1] = this.pic.pixels[index + 1];
              this.gray.pixels[index + 2] = this.pic.pixels[index + 2];
              this.gray.pixels[index + 3] = 255;
            }
          }
        }
        this.gray.updatePixels();
        familyColor = false;
      }


      //snowStepping
      if (snowSteppingColor) {
        let xLocVa = random(-300, 750);
        let yLocVa = random(-100, 100);
        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            let d = dist(x, y, 175 + xLocVa + random(-10, 10), 675 + yLocVa + random(-10, 10));
            if (d < 30) {
              let index = (x + y * width) * 4;
              this.gray.pixels[index] = this.pic.pixels[index];
              this.gray.pixels[index + 1] = this.pic.pixels[index + 1];
              this.gray.pixels[index + 2] = this.pic.pixels[index + 2];
              this.gray.pixels[index + 3] = 255;
            }
          }
        }
        this.gray.updatePixels();
        snowSteppingCount++;
        if (snowSteppingCount == 200) snowSteppingColor = false;
      }


      //streetLamp
      if (streetLampColor) {
        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            let d = dist(x, y, 890 + random(-50, 50), 100 + random(-50, 50));
            if (d < 100 + streetLampCount) {
              let index = (x + y * width) * 4;
              this.gray.pixels[index] = this.pic.pixels[index];
              this.gray.pixels[index + 1] = this.pic.pixels[index + 1];
              this.gray.pixels[index + 2] = this.pic.pixels[index + 2];
              this.gray.pixels[index + 3] = 255;
            }
          }
        }
        this.gray.updatePixels();
        streetLampCount++;
        if (streetLampCount == 100) streetLampColor = false;
      }
    }
  }


  //마우스 클릭하면
  switch() {
    if (mouseX > 60 && mouseX < 115 && mouseY > 215 && mouseY < 350) {
      familyColor = true;
    }

    if (mouseX > 25 && mouseX < 330 && mouseY > 600 && mouseY < 750 || mouseX > 300 && mouseX < 750 && mouseY > 680 && mouseY < 750) {
      snowSteppingColor = true;
    }

    if (mouseX > 825 && mouseX < 940 && mouseY > 40 && mouseY < 160) {
      streetLampColor = true;
    }

    if (mouseX > 600 && mouseX < 750 && mouseY > 400 && mouseY < 650) {
      entering = true;
      startingPause = true;
    }

    if (startingPause) {
      if (mouseX > width * 0.62 - 190 / 2 && mouseX < width * 0.62 + 190 / 2 && mouseY > height * 0.57 - 60 / 2 && mouseY < height * 0.57 + 60 / 2) {
        entering = false;
        startingPause = false;
      }
      if (mouseX > width * 0.38 - 190 / 2 && mouseX < width * 0.38 + 190 / 2 && mouseY > height * 0.57 - 60 / 2 && mouseY < height * 0.57 + 60 / 2) {
        timeToGoImg = this.gray;
        flipToWorkshop = true;
      }
    }
  }


  toTheWorkshop() {
    if (entering) {
      rectMode(CENTER);
      colorMode(RGB);
      fill(0, 200);
      rect(width / 2, height / 2, width * 0.6, height * 0.4, 50);

      fill(255);
      textAlign(CENTER, CENTER);
      textSize(25);
      textStyle(BOLD);
      text("악기 공방으로 들어가시겠습니까?", width / 2, height * 0.43);

      textSize(18);
      if (mouseX > width * 0.38 - 190 / 2 && mouseX < width * 0.38 + 190 / 2 && mouseY > height * 0.57 - 60 / 2 && mouseY < height * 0.57 + 60 / 2) {
        stroke(220, 180, 30);
        strokeWeight(5);
        fill(220, 180, 30, 150);
        rect(width * 0.38, height * 0.57, 190, 60, 30);
        fill(220, 180, 30);
        noStroke();
        text("네, 들어갈래요", width * 0.38, height * 0.57);
      } else {
        noStroke();
        fill(255, 150);
        rect(width * 0.38, height * 0.57, 190, 60, 30);
        text("네, 들어갈래요", width * 0.38, height * 0.57);
      }

      if (mouseX > width * 0.62 - 190 / 2 && mouseX < width * 0.62 + 190 / 2 && mouseY > height * 0.57 - 60 / 2 && mouseY < height * 0.57 + 60 / 2) {
        stroke(220, 180, 30);
        strokeWeight(5);
        fill(220, 180, 30, 150);
        rect(width * 0.62, height * 0.57, 190, 60, 30);
        fill(220, 180, 30);
        noStroke();
        text("조금 더 산책할래요", width * 0.62, height * 0.57);
      } else {
        noStroke();
        fill(255, 150);
        rect(width * 0.62, height * 0.57, 190, 60, 30);
        text("조금 더 산책할래요", width * 0.62, height * 0.57);

      }
    }
  }

  flip() {
    if (flipToWorkshop && zoomToFlip < 200) {
      image(timeToGoImg, 0 - zoomToFlip * 29, 0 - zoomToFlip * 20, 1000 + zoomToFlip * 40, 750 + zoomToFlip * 30);
      fill(0, 55 + zoomToFlip * 1.5);
      rect(width / 2, height / 2, width, height);
      zoomToFlip += 1
    }
    if (flipToWorkshop) {
      if (zoomToFlip == 10 && !doorOpeningPlaying) {
        startingBGM.setVolume(0.2);
        doorOpening.play();
        doorOpeningPlaying = true;
      } else if (zoomToFlip == 190 && !doorBellPlaying) {
        startingBGM.setVolume(0.1);
        doorBell.play();
        doorBellPlaying = true;
      } else if (zoomToFlip == 200) {
        startingBGM.stop();
        startingPage = false;
        withMasterPage = true;
        zoomToFlip = 0;
        this.gray.filter(GRAY);
      }
    }
  }


  //




  title() {
    colorMode(RGB);
    noStroke();
    fill(255);
    textAlign(LEFT, CENTER);
    textSize(20);
    textStyle(NORMAL);
    text("소리가 들리는 곳을 \n   클릭해 보세요", width * 0.05, height * 0.07);
  }
}

