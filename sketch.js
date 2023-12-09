let rgbColor; 
let mainH; let mainS; let mainB; 


let startingPage = true; 
let startingImg; 
let starting; 

let extractorPage = false; 
let extractorImg; 
let extractor; 
let cam; 

let nextPage = false; 
let next;

let drawingPage_1 = false; 
let drawingPage_2 = false;
let drawingApp; 
let textManager; 

let playPage = false; 
// images
let masterImg2;
let insideWorkshopImg;

let winds = [];
let strings = [];
let keyboards = [];
let guitars = [];
let organs = [];
let brass = [];
let myInst; 



function preload() {
  startingImg = loadImage("assets/startingImage_2.png");
  extractorImg = loadImage("assets/extractorImage_1.png")
  // load images
  masterImg2 = loadImage("assets/master_2.png")
  insideWorkshopImg = loadImage("assets/workshop_inside.png")

  cam = createCapture(VIDEO);
  cam.hide();

  penImage = loadImage('assets/pen.png');
  eraserImage = loadImage('assets/eraser.png');

  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 13; j++) {
      let windsFilename = 'assets/winds/winds' + i + '_' + j + '.mp3';
      winds.push(loadSound(windsFilename));

      let stringsFilename = 'assets/strings/strings' + i + '_' + j + '.mp3';
      strings.push(loadSound(stringsFilename));

      let keyboardsFilename = 'assets/keyboards/keyboards' + i + '_' + j + '.mp3';
      keyboards.push(loadSound(keyboardsFilename));

      let guitarsFilename = 'assets/guitars/guitars' + i + '_' + j + '.mp3';
      guitars.push(loadSound(guitarsFilename));

      let organsFilename = 'assets/organs/organs' + i + '_' + j + '.mp3';
      organs.push(loadSound(organsFilename));

      let brassFilename = 'assets/brass/brass' + i + '_' + j + '.mp3';
      brass.push(loadSound(brassFilename));
    }
  }
}


function setup() {
  createCanvas(1000, 750);
  starting = new Begins(startingImg, width/2, height/2);
  extractor = new Begins(extractorImg, width*0.55, height/2);

  // create Play object
  let playPageImages = [insideWorkshopImg, masterImg2]; // 추가
  play = new Play(playPageImages); // 추가

  drawingApp = new DrawingApp();
  textManager = new TextManager();
}

function draw() {
  if (startingPage) { 
    colorMode(RGB); 
    starting.yourMouse(); 
    starting.show(); 
    starting.startingTitle(); 
  } else if (extractorPage) { 
    colorMode(RGB);
    extractor.yourMouse();
    extractor.show();
    extractor.extractorTitle();
  } else if (nextPage) { 
    colorMode(HSB);
    next.show(); 
    next.yourMouse(); 
    next.title(); 
  } else if (drawingPage_1) {
    colorMode(HSB);
    drawingApp.drawFrame();
    drawingPage_1 = false;
    drawingPage_2 = true;
  } else if (drawingPage_2) { 
    colorMode(HSB);
    drawingApp.draw(); 
    textManager.complete();
    textManager.draw();
  } else if (playPage) {
    cursor();
    colorMode(HSB);
    background(themeColor);
    // myInst.show();
    play.show(); // 추가
  }
}

function mouseClicked() { 
  if(startingPage) {
    if (mouseX > starting.buttonX -30 && mouseX < starting.buttonX +30 && mouseY > starting.buttonY - 15 && mouseY < starting.buttonY +15) {
      startingPage = false;
      extractorPage = true;
    }
  } else if(extractorPage) { 
    if (mouseX > extractor.buttonX -30 && mouseX < extractor.buttonX +30 && mouseY > extractor.buttonY - 15 && mouseY < extractor.buttonY +15) {
      colorMode(RGB);
      extractorPage = false;
      nextPage = true;
      cam.loadPixels();
      let index = height*0.8*width + width/2;
      let r = cam.pixels[index];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];
      rgbColor = color(r, g, b); 
      mainH = hue(rgbColor);
      mainS = saturation(rgbColor);
      mainB = brightness(rgbColor);
      if (mainS > 50) mainS = 50;
      if (mainB < 70) mainB = 70;
      else if (mainB > 80) mainB = 80;

      next = new NextPage(mainH, mainS, mainB, width*0.55, height/2);
      cam.remove();  
      drawingApp.setup(); 
      textManager.setup(); 
    }
  } else if (nextPage) {
    next.flip();
  } else if (drawingPage_2) {
    drawingApp.mouseClicked(); 
  } else if (playPage) { // 추가
    play.mouseClicked(); // 추가
  }
}



function mouseReleased() {
  if (drawingPage_2) {
    drawingApp.mouseReleased();
  }
}

function mouseDragged() {
  if (drawingPage_2) {
    drawingApp.mouseDragged();
  }
}

function keyPressed() {
  if (playPage) play.keyPressed(); // 수정

  if (keyCode === ESCAPE) {
    cursor(); 
    startingPage = true; extractorPage = false; nextPage = false; drawingPage_1 = false; drawingPage_2 = false; playPage = false;
    textStartY = 450; pNotes = [];
    penStatus = false; eraserStatus = false;
    parameter1 = 0; distances = []; times = []; lastTime = 0; speeds = [];
    parameter2 = 0; 
    parameter3 = 0; penUsed = false;
    parameter4 = 0; startFrameCount = 0; 
    parameter5;
    parameter5_1 = 0; 
    parameter6 = 0;
    penDownFrameCount = 0; 

    starting.gray.filter(GRAY);
    extractor.gray.filter(GRAY);

    cam = createCapture(VIDEO);
    cam.hide();
  }
}

function keyReleased() {
  if (playPage) play.keyReleased(); // 수정
}

