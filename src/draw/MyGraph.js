// 그래프 그리기
class MyGraph {
    constructor() {
        this.highlighted = [false, false, false, false, false, false];
    }

    // // 파라미터 값 업데이트
    // updateParameter(parameter1, parameter2, parameter3, parameter4, parameter5_1, parameter5) {
    //     this.parameter1 = parameter1;
    //     this.parameter2 = parameter2;
    //     this.parameter3 = parameter3;
    //     this.parameter4 = parameter4;
    //     this.parameter5_1 = parameter5_1;
    //     this.parameter5 = parameter5;
    // }

    // 그래프 그리기
    drawingAppGraph() {
        {



            // 그래프 그리기

            let barHeight = 10; // 막대그래프 밑변 길이
            let gap = 5; // 막대그래프 사이 간격

            if (!playPage && !musicianPage) {
                fill(themeColor);
                noStroke();
                rect(170 + 410 + 15, 10 - 5 - 3, 325, barHeight * 6 + gap * 5 + 10, 10);  // 텍스트 배경

                fill(0);
                noStroke();
                textStyle(BOLD);
                textSize(14);
                textAlign(LEFT);
                if (!analyzeParaPage) {
                    text(parameter1, 170 + 410 + 18, 10);
                    text(parameter2 + " 지우개 사용 횟수(힌트 하나 줌세!)", 170 + 410 + 18, 26);
                    text(parameter3, 170 + 410 + 18, 42);
                    text(parameter4, 170 + 410 + 18, 58);
                    text(parameter5_1, 170 + 410 + 18, 74);
                    text(parameter5 + "%", 170 + 410 + 18, 90);
                } else if (analyzeParaPage) {
                    text("선을 긋는 빠르기는 " + parameter1, 170 + 410 + 18, 10);
                    text("지우개 사용 횟수는 " + parameter2, 170 + 410 + 18, 26);
                    text("그은 선의 획수는 " + parameter3, 170 + 410 + 18, 42);
                    text("총 소요시간은 " + parameter4, 170 + 410 + 18, 58);
                    text("펜 사용시간은 " + parameter5_1, 170 + 410 + 18, 74);
                    text("펜 사용시간 / 총 소요시간은 " + parameter5 + "%", 170 + 410 + 18, 90);
                }

            }




            // 그래프 막대 테두리 없애기
            noStroke();

            // 파라미터 값에 비례하여 막대그래프의 밝기가 변하도록 만들기
            let minBrightness = 0;  // 최소 밝기
            let maxBrightness = 100;  // 최대 밝기


            // 그래프 배경
            fill(themeColor);  // 회색으로 설정합니다.
            rect(170, 10 - 5 - 3, 400 + 10, barHeight * 6 + gap * 5 + 10, 10);  // 배경 사각형을 그립니다.

            // 파라미터마다 범위?가 다르기에 이를 비례하게 맞추는 작업 (일단은 임의로)
            // 예를 들어, 지우개 클릭 횟수인 변수2는 값이 작을 수밖에 없어 숫자를 곱해 키워줌
            // 각 그래프 막대의 길이 최대가 파라미터마다 같으면 좋을 것 같아 "400"으로 한도치를 정하고
            // 그 범위 내에서 파라미터에 계수를 곱해주어 비례하게 맞추고자 하였음

            let widthParameter1 = min(max(parameter1 * ((5 / 3)), 0), 400);; // 펜 속도 or 과감함 (60~120~180)
            let widthParameter2 = min(max(parameter2 * 100, 0), 400); // 지우개 사용 횟수 (1~2~3)
            let widthParameter3 = min(max(parameter3 * 12.5, 0), 400); // 펜 사용 횟수 (8~16~24)
            let widthParameter4 = min(max(parameter4 * 5, 0), 400); // 그림 그리는 시간 (20~40~60)
            let widthParameter5_1 = min(max(parameter5_1 * 20, 0), 400); // 펜 사용시간 (5~10~15)
            let widthParameter5 = min(max(parameter5 * 12.5, 0), 400); // 총 소요시간에 대한 펜 사용시간의 비율 (8~16~24)

            colorMode(HSB);

            // 파라미터 1의 막대와 같은 곳에 배경 색으로 채워진 막대를 그려서 파라미터 값이 감소할 때, 그래프 역시 감소하는 것처럼 보이게
            fill(themeColor);
            rect(175, 10 - 3, 400, barHeight);

            //fill(mainH, 50, map(widthParameter1, 0, 400, minBrightness, maxBrightness)); // 그래프 막대 색깔

            let brightnessParameter1;
            if (widthParameter1 <= 100) {
                brightnessParameter1 = 25;
            } else if (widthParameter1 <= 200) {
                brightnessParameter1 = 50;
            } else if (widthParameter1 <= 300) {
                brightnessParameter1 = 75;
            } else {
                brightnessParameter1 = 100;
            }
            if (this.highlighted[0]) {
                brightnessParameter1 = 100;
                stroke(255);
                strokeWeight(2);
            }
            fill(mainH, 50, brightnessParameter1);

            rect(175, 10 - 3, widthParameter1, barHeight); // 파라미터 1 막대그래프
            noStroke();

            // 파라미터 2, 3, 4, 5-1은 감소하지 않는 변수이므로 따로 배경 색으로 채워진 막대 X

            // 파라미터 2 막대그래프

            //fill(mainH, 50, map(widthParameter2, 0, 400, minBrightness, maxBrightness)); // 그래프 막대 색깔

            let brightnessParameter2;
            if (widthParameter2 <= 100) {
                brightnessParameter2 = 25;
            } else if (widthParameter2 <= 200) {
                brightnessParameter2 = 50;
            } else if (widthParameter2 <= 300) {
                brightnessParameter2 = 75;
            } else {
                brightnessParameter2 = 100;
            }
            if (this.highlighted[1]) {
                brightnessParameter2 = 100;
                stroke(255);
                strokeWeight(2);
            }
            fill(mainH, 50, brightnessParameter2);

            rect(175, 10 - 3 + barHeight + gap, widthParameter2, barHeight);
            noStroke();

            // 파라미터 3 막대그래프

            // fill(mainH, 50, map(widthParameter3, 0, 400, minBrightness, maxBrightness)); // 그래프 막대 색깔

            let brightnessParameter3;
            if (widthParameter3 <= 100) {
                brightnessParameter3 = 25;
            } else if (widthParameter3 <= 200) {
                brightnessParameter3 = 50;
            } else if (widthParameter3 <= 300) {
                brightnessParameter3 = 75;
            } else {
                brightnessParameter3 = 100;
            }
            if (this.highlighted[2]) {
                brightnessParameter3 = 100;
                stroke(255);
                strokeWeight(2);
            }
            fill(mainH, 50, brightnessParameter3);

            rect(175, 10 - 3 + 2 * (barHeight + gap), widthParameter3, barHeight); // 파라미터 3 막대그래프
            noStroke();

            // 파라미터 4 막대그래프

            //fill(mainH, 50, map(widthParameter4, 0, 400, minBrightness, maxBrightness)); // 그래프 막대 색깔

            let brightnessParameter4;
            if (widthParameter4 <= 100) {
                brightnessParameter4 = 25;
            } else if (widthParameter4 <= 200) {
                brightnessParameter4 = 50;
            } else if (widthParameter4 <= 300) {
                brightnessParameter4 = 75;
            } else {
                brightnessParameter4 = 100;
            }
            if (this.highlighted[3]) {
                brightnessParameter4 = 100;
                stroke(255);
                strokeWeight(2);
            }
            fill(mainH, 50, brightnessParameter4);

            rect(175, 10 - 3 + 3 * (barHeight + gap), widthParameter4, barHeight); // 파라미터 4 막대그래프
            noStroke();

            // 파라미터 5_1 막대그래프
            // parameter5_1 = 펜 사용시간

            //fill(mainH, 50, map(widthParameter5_1, 0, 400, minBrightness, maxBrightness)); // 그래프 막대 색깔

            let brightnessParameter5_1;
            if (widthParameter5_1 <= 100) {
                brightnessParameter5_1 = 25;
            } else if (widthParameter5_1 <= 200) {
                brightnessParameter5_1 = 50;
            } else if (widthParameter5_1 <= 300) {
                brightnessParameter5_1 = 75;
            } else {
                brightnessParameter5_1 = 100;
            }
            if (this.highlighted[5]) {
                brightnessParameter5_1 = 100;
                stroke(255);
                strokeWeight(2);
            }
            fill(mainH, 50, brightnessParameter5_1);

            rect(175, 10 - 3 + 4 * (barHeight + gap), widthParameter5_1, barHeight); // 파라미터 5_1 막대그래프
            noStroke();


            // 파라미터 5 막대그래프
            // parameter5 = 펜 사용시간 / 총 소요시간

            // 감소되는 그래프를 그리기 위해 배경 색으로 채워진 막대를 그림
            fill(themeColor);   // 배경 색
            rect(175, 10 - 3 + 5 * (barHeight + gap), 400, barHeight);

            //fill(mainH, 50, map(widthParameter5, 0, 400, minBrightness, maxBrightness)); // 그래프 막대 색깔

            let brightnessParameter5;
            if (widthParameter5 <= 100) {
                brightnessParameter5 = 25;
            } else if (widthParameter5 <= 200) {
                brightnessParameter5 = 50;
            } else if (widthParameter5 <= 300) {
                brightnessParameter5 = 75;
            } else {
                brightnessParameter5 = 100;
            }
            if (this.highlighted[4]) {
                brightnessParameter5 = 100;
                stroke(255);
                strokeWeight(2);
            }
            fill(mainH, 50, brightnessParameter5);

            rect(175, 10 - 3 + 5 * (barHeight + gap), widthParameter5, barHeight); // 파라미터 5 막대그래프
            noStroke();


            // 구간 나누는 선 그리기

            fill(255);

            //rect(170, 2, 410, 95);

            rect(272.5, 2, 5, 95);

            rect(375, 2, 5, 95);

            rect(477.5, 2, 5, 95);

            //rect(580, 2, 5, 95);

        }
    }
}

