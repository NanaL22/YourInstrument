let textList = []; 
let textIndex = 0; 
let textStartY = 450; 
let lineHeight = 40; 

class TextManager {
    constructor() {
        this.textList = [];
        this.textIndex = 0;
    }

    complete() {
        colorMode(HSB);
        rectMode(CORNER);

        textList = ["도면을 그리고 있어요", "나무를 자르고 있어요", "조율을 하고 있어요"];

 
        fill(themeColor);
        noStroke();
        rect(60, 550, 60, height);

        fill(0);
        noStroke();
        textStyle(BOLD);
        textSize(30);

        text("악", 75, textStartY); // y = 450

        textStartY += lineHeight;
        text("기", 75, textStartY); // y = 490

        textStartY += lineHeight;
        text(" ", 75, textStartY); // y = 530



        if (mouseX > 60 && mouseX < 60+60 && mouseY > 530 && mouseY < 530+100) {
            fill(255);
        } else fill(0);

        textStartY += lineHeight;
        text("완", 75, textStartY); // y = 570

        textStartY += lineHeight;
        text("성", 75, textStartY); // y = 610

        fill(0);

        textStartY += lineHeight;
        text("하", 75, textStartY); // y = 650

        textStartY += lineHeight;
        text("기", 75, textStartY); // y = 690

        textStartY = 450;
    }

    draw() {
        colorMode(HSB);
        rectMode(CORNER);

        if (frameCount % 360 == 0) {  


            fill(themeColor);
            noStroke(); 
            rect(width/2, 0, width/2, 100); 

            fill(0);
            noStroke();
            textSize(30);
            textStyle(NORMAL);
            textAlign(LEFT);

            let displayText = textList[textIndex]; 

            text(displayText, width*0.6, 75);


            textIndex += 1; 
            if (textIndex >= textList.length) { 
                textIndex = 0; 
            }
        }
        rectMode(CENTER);
        textAlign(CENTER);
    }
}