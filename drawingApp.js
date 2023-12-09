let penImage; 
let eraserImage; 
let resetImage; 


let themeColor; 
let paperColor; 
let penColor; 


let pen; 
let eraser; 

let penStatus = false; 
let eraserStatus = false; 



let parameter1 = 0; 
let distances = []; 
let times = []; 
let lastTime = 0; 
let speeds = [];

let parameter2 = 0; 

let parameter3 = 0; 
let penUsed = false; 

let parameter4 = 0; 
let startFrameCount; 

let parameter5; 
let parameter5_1 = 0; 
let parameter6 = 0; 
let penDownFrameCount = 0; 


class DrawingApp {
    constructor() {
        this.textList = ["도면을 그리고 있어요", "나무를 자르고 있어요", "조율을 하고 있어요"];
        this.textIndex = 0;
        this.penStatus = false;
        this.eraserStatus = false;
    }
    
    setup() {
        colorMode(HSB);
        themeColor = color(mainH, mainS, mainB);
        paperColor = color(mainH, 10, 90);
        penColor = color(mainH, 50, 50);
    }

    drawFrame() {
        colorMode(HSB);
        rectMode(CORNER);
        noStroke();
        background(themeColor)
        fill(paperColor);
        rect(170, 100, 750, 600);
        rectMode(CENTER);

        
        startFrameCount = frameCount; 
    }

    draw() {
        colorMode(HSB);
        rectMode(CORNER);
        
        if (penStatus) {
            stroke(paperColor);
            strokeWeight(6);
            fill(themeColor);
            square(42, 44, 65); 
        } else {
            stroke(themeColor);
            strokeWeight(6);
            noFill();
            square(42, 44, 65); 
        }

        if (eraserStatus) {
            stroke(paperColor);
            strokeWeight(6);
            fill(themeColor);
            square(42, 135, 65); 
        } else {
            stroke(themeColor);
            strokeWeight(6);
            noFill();
            square(42, 135, 65);
        }

        image(penImage, 50, 50, 50, 50); 
        image(eraserImage, 50, 140, 50, 50); 



        fill(themeColor);
        noStroke();
        rect(width*0.93, 100, 350, 400);

        fill(0);
        noStroke();
        textStyle(BOLD);
        textSize(30);
        textAlign(LEFT);
        text(parameter1, width*0.93, 120);
        text(parameter2, width*0.93, 150);
        text(parameter3, width*0.93, 180);
        parameter4 = int((frameCount - startFrameCount) / 60);
        text(parameter4, width*0.93, 210);
        text(parameter5_1, width*0.93, 240);
        parameter5 = int(100* parameter5_1 / parameter4); 
        text(parameter5, width*0.93, 270);




    
        if (penStatus && mouseX > 170 && mouseX < 170 + 750 && mouseY > 100 && mouseY < 100 + 600 && mouseIsPressed) { 
            pen = new toolPen(mouseX + 2.7, mouseY + 28.7, pmouseX + 2.7, pmouseY + 28.7); 
            pen.display(); 
        }
        if (eraserStatus && mouseIsPressed && mouseX > 170 && mouseX < 170 + 750 && mouseY > 100 && mouseY < 100 + 600) { 
            eraser = new toolEraser(mouseX + 5, mouseY + 23, pmouseX + 5, pmouseY + 23, 13); 
            eraser.display(); 
        }
    }

    mouseClicked() {
        colorMode(HSB);

        if (mouseX > 36 && mouseX < 42 + 65 && mouseY > 33 && mouseY < 40 + 50 && mouseClicked) { 

            penStatus = true; 
            eraserStatus = false; 
            penUsed = true; 

            cursor('assets/penSmall.png');
            stroke(paperColor);
            strokeWeight(8);
            fill(themeColor);
        }


        if (mouseX > 36 && mouseX < 42 + 65 && mouseY > 114 && mouseY < 120 + 60) { 

            if (penUsed) { 
                parameter2++; 
                penUsed = false; 
            }

            penStatus = false; 
            eraserStatus = true; 
            cursor('assets/eraser32.png'); 

            console.log("지우개 사용 횟수는 " + parameter2 + "번"); 
        }


        if (mouseX > 60 && mouseX < 60+60 && mouseY > 530 && mouseY < 530+100) { 
            drawingPage_2 = false;
            playPage = true;
            parameter6 = parameter5_1; 
            myInst = new Instrument(); 
            myInst.arrange(); 
        }
    }



    mouseReleased() {
        if (penStatus && mouseX > 170 && mouseX < 170 + 750 && mouseY > 100 && mouseY < 100 + 600) { // 펜을 사용 중일 때
            parameter3 += 1; 

            if(distances.length != 0 && times.length != 0) {
                let sumTimes = times.reduce((a, b) => a + b, 0) 
                if(sumTimes == 0) sumTimes == 1;
                speeds.push(distances.reduce((a, b) => a + b, 0)/sumTimes); 
                parameter1 = int(speeds.reduce((a, b) => a + b, 0) / speeds.length * 1000); 
                distances = []; 
                times = []; 
            }
        }
    }

    mouseDragged() {
        if (penStatus && mouseX > 170 && mouseX < 170 + 750 && mouseY > 100 && mouseY < 100 + 600 && mouseIsPressed) { 

            let distance = dist(mouseX, mouseY, pmouseX, pmouseY); 
            distances.push(distance); 
            let time = millis() - lastTime; 
            times.push(time); 
            lastTime = millis(); 

            penDownFrameCount++;
            parameter5_1 = int(penDownFrameCount/60);
        }
    }
}