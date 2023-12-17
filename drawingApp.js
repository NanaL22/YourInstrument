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


let showComment1 = false; // 파라미터 1에 대한 코멘트를 보여줄지 말지 결정하는 변수
let showComment2 = false; // 파라미터 2에 대한 코멘트를 보여줄지 말지 결정하는 변수
let showComment3 = false; // 파라미터 3에 대한 코멘트를 보여줄지 말지 결정하는 변수
let showComment4 = false; // 파라미터 4에 대한 코멘트를 보여줄지 말지 결정하는 변수
let showComment5_1 = false; // 파라미터 5_1에 대한 코멘트를 보여줄지 말지 결정하는 변수
let showComment5 = false; // 파라미터 5에 대한 코멘트를 보여줄지 말지 결정하는 변수

let timerId = null; // 코멘트를 보여주는 시간을 제어하기 위한 변수

let comment1Shown = false;
let comment2Shown = false;
let comment3Shown = false;
let comment4Shown = false;
let comment5_1Shown = false;
let comment5Shown = false;

let comment1condition = 0;
let comment2condition = 0;
let comment3condition = 0;
let comment4condition = 0;
let comment5_1condition = 0;
let comment5condition = 0;

let isDeveloping = false;

class DrawingApp {
    constructor() {
        this.textList = ["도면을 그리고 있네", "나무를 자르는 중이야", "조율 중일세. 곧 완성이야"];
        this.textIndex = 0;
        this.penStatus = false;
        this.eraserStatus = false;
    }

    reset() {
        penStatus = false; eraserStatus = false;
        parameter1 = 0; distances = []; times = []; lastTime = 0; speeds = [];
        parameter2 = 0;
        parameter3 = 0; penUsed = false;
        parameter4 = 0; startFrameCount;
        parameter5; parameter5_1 = 0; parameter6 = 0; penDownFrameCount = 0;
        showComment1 = false; showComment2 = false; showComment3 = false; showComment4 = false; showComment5_1 = false; showComment5 = false;
        timerId = null;
        comment1Shown = false; comment2Shown = false; comment3Shown = false; comment4Shown = false; comment5_1Shown = false; comment5Shown = false;
        comment1condition = 0; comment2condition = 0; comment3condition = 0; comment4condition = 0; comment5_1condition = 0; comment5condition = 0;
        isDeveloping = false;
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

        // background(themeColor)

        image(tableImage, 0, 0, 1000, 750);
        fill(mainH, mainS, mainB, 170);
        rect(0, 0, width, height);

        fill(paperColor);
        rect(170, 100, 750, 600);
        rectMode(CENTER);

        startFrameCount = frameCount;
    }

    draw() {
        colorMode(HSB);
        rectMode(CORNER);

        //background(tableImage);

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


        // 파라미터 숫자 업데이트 되는 공간에 그려지는 사각형
        // 없애니까 숫자 겹쳐서 나타나는 문제 있음

        rectMode(CORNER);
        // fill(themeColor);
        // noStroke();
        // rect(width * 0.925, 100, 350, 188, 20);



        // fill(0);
        // noStroke();
        // textStyle(BOLD);
        // textSize(30);
        // textAlign(LEFT);
        // text(parameter1, width * 0.93, 120);
        // text(parameter2, width * 0.93, 150);
        // text(parameter3, width * 0.93, 180);
        parameter4 = int((frameCount - startFrameCount) / 60);

        if (parameter4 > 1 && parameter4 % 36 == 0) {
            comment4condition++;
        }

        // text(parameter4, width * 0.93, 210);
        // text(parameter5_1, width * 0.93, 240);
        parameter5 = int(100 * parameter5_1 / parameter4);
        // text(parameter5, width * 0.93, 270);

        if (parameter5 > 1 && parameter5 % 36 == 0) {
            comment5condition++;
        }





        if (penStatus && mouseX > 170 && mouseX < 170 + 750 && mouseY > 100 && mouseY < 100 + 600 && mouseIsPressed) {
            pen = new toolPen(mouseX + 2.7, mouseY + 28.7, pmouseX + 2.7, pmouseY + 28.7);
            pen.display();
        }
        if (eraserStatus && mouseIsPressed && mouseX > 170 && mouseX < 170 + 750 && mouseY > 100 && mouseY < 100 + 600) {
            eraser = new toolEraser(mouseX + 5, mouseY + 23, pmouseX + 5, pmouseY + 23, 13);
            eraser.display();
        }

        // 그래프 그리기

        {
            let barHeight = 10; // 막대그래프 밑변 길이
            let gap = 5; // 막대그래프 사이 간격

            // 그래프 막대 테두리 없애기
            noStroke();

            // 파라미터 값에 비례하여 막대그래프의 밝기가 변하도록 만들기
            let minBrightness = 0;  // 최소 밝기
            let maxBrightness = 100;  // 최대 밝기

            // 그래프 배경
            fill(themeColor);  // 회색으로 설정합니다.
            rect(170, 10 - 5 - 3, 200 + 10, barHeight * 6 + gap * 5 + 10, 10);  // 배경 사각형을 그립니다.

            // 파라미터마다 범위?가 다르기에 이를 비례하게 맞추는 작업 (일단은 임의로)
            // 예를 들어, 지우개 클릭 횟수인 변수2는 값이 작을 수밖에 없어 숫자를 곱해 키워줌
            // 각 그래프 막대의 길이 최대가 파라미터마다 같으면 좋을 것 같아 "200"으로 한도치를 정하고
            // 그 범위 내에서 파라미터에 계수를 곱해주어 비례하게 맞추고자 하였음

            let widthParameter1 = min(max(parameter1 * 0.2, 0), 200);; // 펜 속도 or 과감함
            let widthParameter2 = min(max(parameter2 * 20, 0), 200); // 지우개 사용 횟수
            let widthParameter3 = min(max(parameter3 * 4, 0), 200); // 펜 사용 횟수
            let widthParameter4 = min(max(parameter4 * 2, 0), 200); // 그림 그리는 시간
            let widthParameter5_1 = min(max(parameter5_1 * 3, 0), 200); // 펜 사용시간
            let widthParameter5 = min(max(parameter5 * 1.4, 0), 200); // 총 소요시간에 대한 펜 사용시간의 비율


            // 파라미터 1의 막대와 같은 곳에 배경 색으로 채워진 막대를 그려서 파라미터 값이 감소할 때, 그래프 역시 감소하는 것처럼 보이게
            fill(themeColor);
            rect(175, 10 - 3, 200, barHeight);

            // // 테이블 이미지로 덮기
            // let croppedImageBar1 = tableImage.get(170, 10, 300, barHeight);
            // image(croppedImageBar1, 170, 10);

            fill(mainH, 50, map(widthParameter1, 0, 200, minBrightness, maxBrightness)); // 그래프 막대 색깔
            rect(175, 10 - 3, widthParameter1, barHeight); // 파라미터 1 막대그래프

            // 파라미터 2, 3, 4, 5-1은 감소하지 않는 변수이므로 따로 배경 색으로 채워진 막대 X
            fill(mainH, 50, map(widthParameter2, 0, 200, minBrightness, maxBrightness)); // 그래프 막대 색깔
            rect(175, 10 - 3 + barHeight + gap, widthParameter2, barHeight); // 파라미터 2 막대그래프

            fill(mainH, 50, map(widthParameter3, 0, 200, minBrightness, maxBrightness)); // 그래프 막대 색깔
            rect(175, 10 - 3 + 2 * (barHeight + gap), widthParameter3, barHeight); // 파라미터 3 막대그래프

            fill(mainH, 50, map(widthParameter4, 0, 200, minBrightness, maxBrightness)); // 그래프 막대 색깔
            rect(175, 10 - 3 + 3 * (barHeight + gap), widthParameter4, barHeight); // 파라미터 4 막대그래프


            // parameter5_1 = 펜 사용시간
            // parameter5 = 총 소요시간에 대한 펜 사용시간의 비율

            fill(mainH, 50, map(widthParameter5_1, 0, 200, minBrightness, maxBrightness)); // 그래프 막대 색깔
            rect(175, 10 - 3 + 4 * (barHeight + gap), widthParameter5_1, barHeight); // 파라미터 5_1 막대그래프

            // 감소되는 그래프를 그리기 위해 배경 색으로 채워진 막대를 그림

            fill(themeColor);   // 배경 색
            rect(175, 10 - 3 + 5 * (barHeight + gap), 200, barHeight);

            // 테이블 이미지로 덮기
            // let croppedImageBar5 = tableImage.get(170, 10 + 5 * (barHeight + gap), 300, barHeight);
            // image(croppedImageBar5, 170, 10 + 5 * (barHeight + gap));

            fill(mainH, 50, map(widthParameter5, 0, 200, minBrightness, maxBrightness)); // 그래프 막대 색깔
            rect(175, 10 - 3 + 5 * (barHeight + gap), widthParameter5, barHeight); // 파라미터 5 막대그래프
        }


        // 주인장 훈수 (공간 임의로 지정함)

        // 원하는 조건 하에 코멘트를 띄우기 위해서, 해당 파라미터의 값이 특정 배수일 때를 조건으로 잡았는데
        // 이것만으로는 작동 X
        // 그래서, 해당 파라미터의 값이 특정 배수가 될 때마다 +1이 되는 변수를 추가로 만듦
        // 이것이 comment1condition ~ comment5condition

        // 즉, 지우개의 사용 횟수를 가리키는 파라미터2의 값이 10의 배수가 될 때를 이에 대한 코멘트를 띄우는 조건으로 삼았고
        // 지우개 사용 횟수가 10의 배수가 되면 0이었던 comment2condition이 1씩 증가하고
        // comment2condition가 0이 아니면 코멘트를 띄우는 코드가 작동하도록 함

        // 코멘트가 나타나면 1초 뒤 사라지게 하고 싶었지만 도저히 안돼서 그냥 빈 대화창 공간으로 덮어버림
        // timerID ~ 1000까지 부분이 시간으로 제어하는 코드인데 잘 작동하지는 않아서 직접적으로 창을 닫지는 않지만
        // showComment2를 false로 바꿔주어 창이 닫히게 하는 데 사용되기에 필요한 부분임

        // 중요!!
        // 아래의 코멘트를 띄우는 코드들은 모두 한 종류의 코드를 추가로 필요로 함
        // comment 1~5 condition 변수가 ++ 되는 조건문인데,
        // 이 조건문들은 이 아래에 적혀있지 않고 해당 js 파일 내에서 각 파라미터 값이 정의되는 부분에 있음
        // 예를 들어, 2번 변수에 대한 코멘트의 경우, if (parameter2 % 10 == 0) {comment2condition++;}가
        // parameter2가 정의되는 부분인 하단의 mouseClicked 함수 부분에 적혀 있음
        // 잘은 모르겠지만 이것을 적어주지 않으면 코멘트가 나타나지 않음

        // 추가로

        // if (parameter4 > 1 && parameter4 % 36 == 0) {
        //     comment4condition++;
        // }

        // 이런 식으로 parameter4 > 1 가 써있는 경우가 있는데
        // 이렇게 안하면 그림 그리기 단계 진입 시부터 코멘트가 나타나 있기 때문에 꼭 필요한 요소


        if ((comment1condition != 0) && !comment1Shown && parameter1 % 70 == 0) {
            showComment1 = true;
            comment1Shown = true;
            if (timerId) {
                clearTimeout(timerId);
            }
            timerId = setTimeout(() => {
                showComment1 = false;
                comment1Shown = false;
            }, 500);  // 0.5초 후에 창을 사라지게 합니다.
        }

        if ((comment2condition != 0) && !comment2Shown && parameter2 % 10 == 0) {
            showComment2 = true;
            comment2Shown = true;
            if (timerId) {
                clearTimeout(timerId);
            }
            timerId = setTimeout(() => {
                showComment2 = false;
                comment2Shown = false;
            }, 500);  // 0.5초 후에 창을 사라지게 합니다.
        }

        if ((comment3condition != 0) && !comment3Shown && parameter3 % 25 == 0) {
            showComment3 = true;
            comment3Shown = true;
            if (timerId) {
                clearTimeout(timerId);
            }
            timerId = setTimeout(() => {
                showComment3 = false;
                comment3Shown = false;
            }, 500);  // 0.5초 후에 창을 사라지게 합니다.
        }



        if ((comment4condition != 0) && !comment4Shown && parameter4 % 60 == 0) {
            showComment4 = true;
            comment4Shown = true;
            if (timerId) {
                clearTimeout(timerId);
            }
            timerId = setTimeout(() => {
                showComment4 = false;
                comment4Shown = false;
            }, 500);  // 0.5초 후에 창을 사라지게 합니다.
        }


        if ((comment5condition != 0) && !comment5_1Shown && parameter5_1 % 15 == 0) {
            showComment5_1 = true;
            comment5_1Shown = true;
            if (timerId) {
                clearTimeout(timerId);
            }
            timerId = setTimeout(() => {
                showComment5_1 = false;
                comment5_1Shown = false;
            }, 500);  // 0.5초 후에 창을 사라지게 합니다.
        }


        if ((comment5condition != 0) && !comment5Shown && parameter5 % 36 == 0) {
            showComment5 = true;
            comment5Shown = true;
            if (timerId) {
                clearTimeout(timerId);
            }
            timerId = setTimeout(() => {
                showComment5 = false;
                comment5Shown = false;
            }, 500);  // 0.5초 후에 창을 사라지게 합니다.
        }

        // 기존 코멘트 공간은 rectMode Center지만
        // 이미지 크롭해서 불러오는 건 코너? 모드인 듯함
        // 그래서 이미지 크롭으로 덮는거 노가다로 위치 때려맞히듯이 함

        textAlign(LEFT);
        textStyle(BOLD);
        textSize(30);

        if (showComment1) {
            rectMode(CENTER);
            fill(themeColor)
            rect(520, 645, 640, 70, 20); // 코멘트 공간


            // let croppedImageComment1 = tableImage.get(480, 13, 440, 70);
            // image(croppedImageComment1, 480, 13, 440, 70);

            fill(0);
            text("아주 손놀림이 과감해", 220, 648); // 코멘트 내용
        }
        else if (showComment2) {
            rectMode(CENTER);
            fill(themeColor);
            rect(520, 645, 640, 70, 20); // 코멘트 공간

            // let croppedImageComment2 = tableImage.get(480, 13, 440, 70);
            // image(croppedImageComment2, 480, 13, 440, 70);

            fill(0);
            text("고민이 많은가?", 220, 648); // 코멘트 내용
        }

        else if (showComment3) {

            rectMode(CENTER);
            fill(themeColor)
            rect(520, 645, 640, 70, 20); // 코멘트 공간

            // let croppedImageComment3 = tableImage.get(700, 50, 440, 70);
            // image(croppedImageComment3, 700, 50, 440, 70);

            fill(0);
            text("열심히 그려보라고", 220, 648); // 코멘트 내용
        } else if (showComment4) {
            rectMode(CENTER);
            fill(themeColor)
            rect(520, 645, 640, 70, 20);// 코멘트 공간

            // let croppedImageComment4 = tableImage.get(480, 13, 440, 70);
            // image(croppedImageComment4, 480, 13, 440, 70);

            fill(0);
            text("시간을 충분히 들이게나", 220, 648); // 코멘트 내용
        } else if (showComment5_1) {
            rectMode(CENTER);
            fill(themeColor)
            rect(520, 645, 640, 70, 20); // 코멘트 공간

            // let croppedImageComment5_1 = tableImage.get(480, 13, 440, 70);
            // image(croppedImageComment5_1, 480, 13, 440, 70);

            fill(0);
            text("파라미터 5_1", 220, 648); // 코멘트 내용
        } else if (showComment5) {
            rectMode(CENTER);
            fill(themeColor)
            rect(520, 645, 640, 70, 20);// 코멘트 공간

            // let croppedImageComment5 = tableImage.get(480, 13, 440, 70);
            // image(croppedImageComment5, 480, 13, 440, 70);

            fill(0);
            text("파라미터 5", 220, 648); // 코멘트 내용
        }
        else {
            rectMode(CENTER);
            fill(themeColor)
            rect(520, 645, 640, 70, 20); // 코멘트 공간

            fill(0);
            text("", 220, 648); // 코멘트 내용

            // let croppedImageCommentNone = tableImage.get(480, 13, 440, 70);
            // image(croppedImageCommentNone, 480, 13, 440, 70);
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
                if (parameter2 % 10 == 0) {
                    comment2condition++;
                }
            }



            penStatus = false;
            eraserStatus = true;
            cursor('assets/eraser32.png');

            //console.log("지우개 사용 횟수는 " + parameter2 + "번");
        }

        if (mouseX > 60 && mouseX < 60 + 60 && mouseY > 530 && mouseY < 530 + 100 && mouseClicked) {

            // 완성하기 버튼을 누르면 그림 그리기 단계 일시중지 후 대화 출력 단계로 넘어간다

            drawingPage_2 = false;
            drawingPage_3 = true;
        }

        if (drawingPage_3 && mouseX > 880 - 25 && mouseX < 880 + 25 && mouseY > 645 - 25 && mouseY < 645 + 25 && mouseClicked) {
            drawingPage_3 = false;
            developingPage = true;
        }
    }

    mouseReleased() {
        if (penStatus && mouseX > 170 && mouseX < 170 + 750 && mouseY > 100 && mouseY < 100 + 600) { // 펜을 사용 중일 때
            parameter3 += 1;
            if (parameter3 % 25 == 0) {
                comment3condition++;
            }

            if (distances.length != 0 && times.length != 0) {
                let sumTimes = times.reduce((a, b) => a + b, 0)
                if (sumTimes == 0) sumTimes == 1;
                speeds.push(distances.reduce((a, b) => a + b, 0) / sumTimes);
                parameter1 = int(speeds.reduce((a, b) => a + b, 0) / speeds.length * 1000);
                distances = [];
                times = [];

                if (parameter5 > 1 && parameter1 % 70 == 0) {
                    comment1condition++;
                }

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
            parameter5_1 = int(penDownFrameCount / 60);
            if (parameter5_1 > 0 && parameter5_1 % 15 == 0) {
                comment5_1condition++;
            }
        }
    }

    toNextPage() {
        rectMode(CENTER);
        fill(themeColor)
        rect(520, 645, 640, 70, 20); // 대화창 공간
        fill(0);
        textAlign(LEFT);
        textStyle(BOLD);
        textSize(30);
        text("좋은 그림이군. 아름다운 악기가 완성되겠어", 215, 648); // 대화창 내용

        // 대화 넘기기 버튼

        if (mouseX > 880 - 25 && mouseX < 880 + 25 && mouseY > 645 - 25 && mouseY < 645 + 25) {
            fill(255);
        } else (fill(themeColor));

        rect(880, 645, 50, 50, 10); // 대화 넘기기 버튼

        fill(0);
        text(">", 870, 645); // 대화 넘기기 버튼의 내용

        // // 대화창에서 다음으로 넘어가기 -> 대화 넘기기 버튼을 누르면 연주 페이지로 넘어간다
        // if (mouseX > 880 - 25 && mouseX < 880 + 25 && mouseY > 645 - 25 && mouseY < 645 + 25 && mouseIsPressed) {
        //     drawingPage_3 = false;
        //     playPage = true;
        //     parameter6 = parameter5_1;
        //     myInst = new Instrument();
        //     myInst.arrange();
        // }



        // 대화창에서 다음으로 넘어가기 -> 대화 넘기기 버튼을 누르면 로딩 페이지로 넘어간다
        if (mouseX > 880 - 25 && mouseX < 880 + 25 && mouseY > 645 - 25 && mouseY < 645 + 25 && mouseIsPressed) {
            drawingPage_3 = false;
            developingPage = true;
            // background(themeColor)

            // fill(paperColor);
            // noStroke();
            // rect(width / 2, height / 2, 800, 100, 20);

            // fill(0);
            // noStroke();
            // textSize(30);
            // textStyle(BOLD);
            // textAlign(CENTER);

            // text("한 번 제작해볼까?", width / 2, height / 2);
            // image(master1, width*0.3, height*0.3, width*0.3, height*0.3);

        }



    }

    // 악기 제작과 연주 사이에 페이지를 하나 더 만듦
    // textlist 텍스트 + 이에 맞는 효과음 출력이 제작 단계보다 여기서 더 어울릴 것이라고 생각했기 때문


    // fill(paperColor);
    // noStroke();
    // rect(680, 65, 400, 60, 20);


    toNextNextPage() {
        if (frameCount % 180 == 0 && this.textIndex < this.textList.length) {
            image(tableImage, 0, 0, 1000, 750);
            fill(mainH, mainS, mainB, 170);
            rect(width/2, height/2, width, height);

            image(master1, width*0.35, height*0.2, width*0.3, height*0.3);

            fill(paperColor);
            noStroke();
            //rect(680, 65, 400, 60, 20);

            rect(width / 2, height / 2 + 50, 800, 100, 20);

            fill(0);
            noStroke();
            textSize(30);
            textStyle(BOLD);
            textAlign(CENTER);

            let displayText = this.textList[this.textIndex];

            text(displayText, width / 2, height / 2 + 50);

            // 현재 출력 중인 텍스트의 순번을 기록
            let currentTextIndex = this.textIndex;

            // 출력 중인 텍스트에 따라 소리 재생
            soundList[currentTextIndex].play();
            setTimeout(function () {
                soundList[currentTextIndex].stop();
            }, 2500); // 2.5초 후에 효과음 정지


            this.textIndex += 1;
        }

        if (this.textIndex == this.textList.length) {
            if (mouseX > 880 - 25 && mouseX < 880 + 25 && mouseY > 645 - 100 - 25 && mouseY < 645 - 100 + 25) {
                fill(255);
            } else (fill(paperColor));
            rect(880, 645 - 100, 50, 50, 10); // 대화 넘기기 버튼

            fill(0);
            text(">", 880, 645 - 100); // 대화 넘기기 버튼의 내용
        }


        // 대화창에서 다음으로 넘어가기 -> 대화 넘기기 버튼을 누르면 연주 페이지로 넘어간다
        if (mouseX > 880 - 25 && mouseX < 880 + 25 && mouseY > 645 - 100 - 25 && mouseY < 645 - 100 + 25 && mouseIsPressed) {
            developingPage = false;
            betweenDrawToPlay = true;
            parameter6 = parameter5_1;
            myInst = new Instrument();
            myInst.arrange();
            // insideBGM.stop();
        }
    }
}