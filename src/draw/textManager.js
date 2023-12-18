let textList = [];
let textIndex = 0;
let textStartY = 450;
let lineHeight = 35;

let soundList = []; // 텍스트에 따라 재생할 소리의 목록

class TextManager {
    constructor() {
        this.textList = [];
        this.textIndex = 0;
    }

    reset() {
        textList = []; textIndex = 0; textStartY = 450; lineHeight = 40;
    }

    complete() {
        colorMode(HSB);
        rectMode(CORNER);

        // textList = ["도면을 그리고 있어요", "나무를 자르고 있어요", "조율을 하고 있어요"];

        // 우상단 텍스트에 따라 재생할 소리의 목록 작성
        soundList = [textSound1, textSound2, textSound3, silenceSound];


        // "악기 완성하기" 글자에 배경으로 깔리는 사각형
        // 배경에 테이블 이미지를 깔았기에 글자가 잘 안보여서

        fill(penColor); // 본래 themeColor였음. 조화를 위해 한 번 바꿔 봄.
        noStroke();
        rect(60, 410, 60, 310, 10);


        textAlign(LEFT, CENTER);
        textStyle(BOLD);
        textSize(30);

        if (mouseX > 60 && mouseX < 60 + 60 && mouseY > 420 && mouseY < 420 + 290) {
            fill(255);
        } else fill(0);

        noStroke();

        text("악", 75, textStartY); // y = 450

        textStartY += lineHeight;
        text("기", 75, textStartY); // y = 485

        textStartY += lineHeight;
        text(" ", 75, textStartY); // y = 520

        textStartY += lineHeight;
        text("완", 75, textStartY); // y = 555

        textStartY += lineHeight;
        text("성", 75, textStartY); // y = 590

        textStartY += lineHeight;
        text("하", 75, textStartY); // y = 625

        textStartY += lineHeight;
        text("기", 75, textStartY); // y = 660

        textStartY = 450; // y = 450
    }

    // draw() {
    //     colorMode(HSB);
    //     rectMode(CORNER);

    //     // 시간 
    //     if (frameCount % 360 == 0) {

    //         fill(0);
    //         noStroke();
    //         textSize(30);
    //         textStyle(NORMAL);
    //         textAlign(LEFT);

    //         let displayText = textList[textIndex];

    //         text(displayText, 600, 68);

    //         // fill(themeColor);
    //         // noStroke();
    //         // rectMode(CORNER);
    //         // rect(585, 35, 335, 60, 20);

    //         // 현재 출력 중인 텍스트를 기록
    //         let currentTextIndex = textIndex;

    //         // 출력 중인 텍스트에 따라 소리 재생
    //         soundList[currentTextIndex].play();
    //         setTimeout(function () {
    //             soundList[currentTextIndex].stop();
    //         }, 2500); // 2.5초 후에 효과음 정지

    //         textIndex += 1;

    //         if (textIndex >= textList.length) {
    //             textIndex = 0;
    //         }
    //     }
    //     rectMode(CENTER);
    //     textAlign(CENTER);
    // }

    mouseClicked() {

        // 펜을 사용할 시 효과음 재생
        if (penStatus && mouseX > 170 && mouseX < 170 + 750 && mouseY > 100 && mouseY < 100 + 600) {
            textSound4.play();
            setTimeout(function () {
                textSound4.stop();
            }, 500); // 0.5초 후에 효과음 정지
        }

        // 지우개를 사용할 시 효과음 재생
        if (eraserStatus && mouseX > 170 && mouseX < 170 + 750 && mouseY > 100 && mouseY < 100 + 600) {
            textSound5.play();
            setTimeout(function () {
                textSound5.stop();
            }, 500); // 0.5초 후에 효과음 정지
        }

    }
}