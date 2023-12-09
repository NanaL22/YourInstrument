class toolEraser {

    constructor(x, y, x1, y1, weight) {
        this.x = x;
        this.y = y;
        this.x1 = x1;
        this.y1 = y1;
        this.weight = weight;
    }

    display() {
        colorMode(HSB); 

        if ((this.x > 176 && this.x < 164 + 750 && this.y > 106 && this.y < 94 + 600) &&
            (this.x1 > 176 && this.x1 < 164 + 750 && this.y1 > 106 && this.y1 < 94 + 600)) {
            stroke(paperColor);
            strokeWeight(this.weight);
            line(this.x, this.y, this.x1, this.y1);
        }
    }
}