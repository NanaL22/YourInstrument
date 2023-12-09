class toolPen {

    constructor(x, y, x1, y1) {
        this.x = x;
        this.y = y;
        this.x1 = x1;
        this.y1 = y1;
    }

    display() {
        colorMode(HSB);


        if ((this.x > 173 && this.x < 167 + 750 && this.y > 103 && this.y < 97 + 600) &&
            (this.x1 > 173 && this.x1 < 167 + 750 && this.y1 > 103 && this.y1 < 97 + 600)) {
            stroke(penColor);
            strokeWeight(5);
            line(this.x, this.y, this.x1, this.y1);
        }

    }
}

