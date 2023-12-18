let pNotes = [];
let p1Note, p2Note, p3Note, p4Note, p5Note, p6Note;
// 추가
let keyNum = 12; // The number of keys
let frameWidth; // Frame width
let frameHeight; // Frame height
let barrelWidth;
let yRemainder;
let barrelMaxHeight;
let barrelMinHeight;
//

class Instrument {
  constructor() {
    frameWidth = width * 0.9;
    frameHeight = height * 0.14;
    barrelWidth = 36;
    yRemainder = height * 0.54;
    barrelMaxHeight = yRemainder;
    barrelMinHeight = barrelMaxHeight * 0.5;

    let numbers = [0, 1, 2, 3, 4, 5];
    shuffle(numbers, true);
  
    for (let i = 0; i < 6; i++) {
      let note = [];
      note[0] = numbers[i];
      note[1] = note[0] + 6;
  
     
      if (note[0] === 0) {
        note[2] = 12;
      }

      pNotes.push(note);
    }
    p1Note = pNotes[0]; p2Note = pNotes[1]; p3Note = pNotes[2]; p4Note = pNotes[3]; p5Note = pNotes[4]; p6Note = pNotes[5];

 
    this.wa; this.wb; this.sa; this.sb; this.ka; this.kb; this.ga; this.gb; this.oa; this.ob; this.ba; this.bb; this.hdo;
  }


  // 추가
  draw() {
    push();
    colorMode(HSB);
    translate(width * 0.05, height * 0.15);
    this.drawFrame();
    for (let i = 0; i < keyNum; i++) {
      this.drawKey(i);
    }
    pop();

  }

  // 추가
  drawFrame() {
    push();
    fill(penColor);
    stroke(0);
    strokeWeight(1);
    rect(0, 0, frameWidth, frameHeight);

    // fill(255);
    // noStroke();
    // ellipse(frameWidth * 0.5, frameHeight * 0.5, frameHeight * 0.15);
    pop();
  }

  // 추가
  drawKey(i) {
    push();
    let x = (frameWidth / 18) + ((frameWidth * 8 / 9) * i / (keyNum-1));
    let y = frameHeight * 3 / 4;
    translate(x, y);

    fill(0);
    noStroke();
    ellipse(0, 0, 5);

    let dx = 0;
    let keys = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j'];
    if ((keyIsPressed || mouseIsPressed) && (pressedKeys.has(keys[i]))) {
      dx = random(-3, 3);
    }

    let isWhite = [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1];
    fill((isWhite[i]) ? 255 : 0);
    textSize(35);
    textStyle(BOLD);
    textAlign(CENTER, CENTER)
    text(keys[i].toUpperCase(), 0, -1 * frameHeight / 4);

    let barrelHeight = map(i, 0, keyNum-1, barrelMinHeight, barrelMaxHeight);

    let barrelX = -0.5 * barrelWidth + dx;
    let barrelY = frameHeight / 4 + frameHeight * 0.5;

    // fill(28, 55, 39);
    // stroke(28, 55, 39);
    // strokeWeight(1);
    // curve(barrelX + 50, barrelY, barrelX, barrelY, barrelX, barrelY + barrelHeight, barrelX + 50, barrelY + barrelHeight);
    // curve(barrelX + barrelWidth - 50, barrelY, barrelX + barrelWidth, barrelY, barrelX + barrelWidth, barrelY + barrelHeight, barrelX + barrelWidth - 50, barrelY + barrelHeight);

    noFill();
    stroke(0);
    strokeWeight(1);
    rect(barrelX, barrelY, barrelWidth, barrelHeight);

    let colors = [];
    colors[0] = color(mainH, ((mainS >= 35) ? mainS - 10 : mainS), mainB);
    colors[1] = color(mainH, ((mainS >= 35) ? mainS - 25 : mainS), ((mainB <= 80) ? mainB + 10 : mainB));
    colors[2] = themeColor;
    colors[3] = color(mainH, ((mainS >= 35) ? mainS - 10 : mainS), ((mainB >= 35) ? mainB - 10 : mainB));

    noStroke();
    for (let j = 0; j < 4; j++) {
      fill(colors[j]);
      rect(barrelX + barrelWidth * 0.25 * j, barrelY, barrelWidth * 0.25, barrelHeight);
    }

    fill(paperColor);
    stroke(0);
    strokeWeight(1);
    rect(barrelX, barrelY, barrelWidth, 15);
    rect(barrelX, barrelY + barrelHeight - 15, barrelWidth, 15);

    stroke(0);
    strokeWeight(1);
    line(0, 0, 0 + dx, frameHeight / 4 + frameHeight * 0.5 + frameHeight * 0.25);

    fill(0);
    noStroke();
    ellipse(0 + dx, frameHeight / 4 + frameHeight * 0.5 + frameHeight * 0.25, 5);
    pop();
  }

  isMouseInKey() {
    let xStart = (width * 0.05) + (frameWidth / 18) - (barrelWidth * 0.5);
    let xEnd = xStart + barrelWidth;
    let xDist = (frameWidth * 8 / 9) / (keyNum - 1);
    let yStart = (height * 0.15) + frameHeight + (frameHeight * 0.5);
    let yEnd;

    for (let i = 0; i < keyNum; i++) {
      let barrelHeight = map(i, 0, keyNum-1, barrelMinHeight, barrelMaxHeight);
      yEnd = yStart + barrelHeight;

      if ((mouseX >= xStart) && (mouseX <= xEnd) && (mouseY >= yStart) && (mouseY <= yEnd)) {
        return i;
      }

      xStart += xDist;
      xEnd += xDist;
    }

    return -1;
  }

  /*
  show() { 
    rectMode(CORNER);
    fill(themeColor);
    noStroke();
    rect(width*0.93, 100, 350, 400);
    textAlign(LEFT);
    fill(0);
    text(parameter1, width*0.93, 120);
    text(parameter2, width*0.93, 150);
    text(parameter3, width*0.93, 180);
    text(parameter4, width*0.93, 210);
    text(parameter5_1, width*0.93, 240);
    text(parameter5, width*0.93, 270);

    this.wa.lighten();
    this.wb.lighten();
    this.sa.lighten();
    this.sb.lighten();
    this.ka.lighten();
    this.kb.lighten();
    this.ga.lighten();
    this.gb.lighten();
    this.oa.lighten();
    this.ob.lighten();
    this.ba.lighten();
    this.bb.lighten();
  } */

  arrange() { 
    this.wa = new Key(1, p1Note[0]);
    this.wb = new Key(1, p1Note[1]);
    this.sa = new Key(2, p2Note[0]);
    this.sb = new Key(2, p2Note[1]);
    this.ka = new Key(3, p3Note[0]);
    this.kb = new Key(3, p3Note[1]);
    this.ga = new Key(4, p4Note[0]);
    this.gb = new Key(4, p4Note[1]);
    this.oa = new Key(5, p5Note[0]);
    this.ob = new Key(5, p5Note[1]);
    this.ba = new Key(6, p6Note[0]);
    this.bb = new Key(6, p6Note[1]);
  }

  play() {
    this.wa.play();
    this.wb.play();
    this.sa.play();
    this.sb.play();
    this.ka.play();
    this.kb.play();
    this.ga.play();
    this.gb.play();
    this.oa.play();
    this.ob.play();
    this.ba.play();
    this.bb.play();
  }

  stop() {
    this.wa.stop();
    this.wb.stop();
    this.sa.stop();
    this.sb.stop();
    this.ka.stop();
    this.kb.stop();
    this.ga.stop();
    this.gb.stop();
    this.oa.stop();
    this.ob.stop();
    this.ba.stop();
    this.bb.stop();
  }
}


