//flipFadeIn = 0

class Between {
  constructor() {
  }

  drawToPlay() {
    colorMode(HSB, 360, 100, 100, 1)
    if (flipFadeIn < 100) {
      fill(mainH, mainS, mainB, flipFadeIn / 100);
      rect(width / 2, height / 2, width, height);
      insideBGM.setVolume(0.2);
      flipFadeIn++
    } else if (flipFadeIn < 200) {
      image(withMasterImg, 0, 0, 1000, 750);
      fill(mainH, mainS, mainB, 1 - flipFadeIn / 200);
      rect(width / 2, height / 2, width, height);
      insideBGM.setVolume(0.1);
      flipFadeIn++
    } else if (flipFadeIn < 300) {
      insideBGM.setVolume(0.05);
      flipFadeIn++
    } else if (flipFadeIn == 300) {
      flipFadeIn = 0;
      insideBGM.stop();
      betweenDrawToPlay = false;
      playPage = true;
    }
  }

  playToMusician() {
    colorMode(HSB, 360, 100, 100, 1)
    if (flipFadeIn < 100) {
      image(withMasterImg, 0, 0, 1000, 750);
      fill(0, 0, 0, flipFadeIn / 100);
      rect(width / 2, height / 2, width, height);
      flipFadeIn++
      if (flipFadeIn == 50) doorOpening.play();
    } else if (flipFadeIn < 200) {
      flipFadeIn++
      if (flipFadeIn == 150) doorBell.play();
    } else if (flipFadeIn < 400) {
      flipFadeIn++
      image(streetImg, 0, 0, 1000, 750);
      fill(0, 0, 0, 1 - flipFadeIn / 400);
      rect(width / 2, height / 2, width, height);
      flipFadeIn++
    } else if (flipFadeIn == 400) {
      flipFadeIn = 0;
      betweenPlayToMusician = false;
      musicianPage = true;
    }
  }


}