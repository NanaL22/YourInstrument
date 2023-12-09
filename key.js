class Key {
  constructor(p, n) {
    this.p = p; 
    this.n = n; 
    this.sound; 
  }

  assign() {
    if (this.p == 1) { 
      if (parameter1 <= 100) {
        this.sound = winds[0*13 + this.n];
      } else if (parameter1 > 100 && parameter1 <= 200) {
        this.sound = winds[1*13 + this.n];
      } else if (parameter1 > 200 && parameter1 <= 300) {
        this.sound = winds[2*13 + this.n];
      } else if (parameter1 > 300) {
        this.sound = winds[3*13 + this.n];
      }
    } 

    else if (this.p == 2) { 
      if (parameter2 == 0) {
        this.sound = strings[0*13 + this.n];
      } else if (parameter2 > 0 && parameter2 <= 2) {
        this.sound = strings[1*13 + this.n];
      } else if (parameter2 > 2 && parameter2 <= 4) {
        this.sound = strings[2*13 + this.n];
      } else if (parameter2 > 4) {
        this.sound = strings[3*13 + this.n];
      }
    }

    else if (this.p == 3) {
      if (parameter3 <= 5) {
        this.sound = keyboards[0*13 + this.n];
      } else if (parameter3 > 5 && parameter3 <= 12) {
        this.sound = keyboards[1*13 + this.n];
      } else if (parameter3 > 12 && parameter3 <= 19) {
        this.sound = keyboards[2*13 + this.n];
      } else if (parameter3 > 19) {
        this.sound = keyboards[3*13 + this.n];
      }
    }

    else if (this.p == 4) {
      if (parameter4 <= 7) {
        this.sound = guitars[0*13 + this.n];
      } else if (parameter4 > 7 && parameter4 <= 14) {
        this.sound = guitars[1*13 + this.n];
      } else if (parameter4 > 14 && parameter4 <= 21) {
        this.sound = guitars[2*13 + this.n];
      } else if (parameter4 > 21) {
        this.sound = guitars[3*13 + this.n];
      }
    }

    else if (this.p == 5) {
      if (parameter5 <= 20) {
        this.sound = organs[0*13 + this.n];
      } else if (parameter5 > 20 && parameter5 <= 35) {
        this.sound = organs[1*13 + this.n];
      } else if (parameter5 > 35 && parameter5 <= 50) {
        this.sound = organs[2*13 + this.n];
      } else if (parameter5 > 50) {
        this.sound = organs[3*13 + this.n];
      }
    }

    else if (this.p == 6) { 
      if (parameter6 <= 2) {
        this.sound = brass[0*13 + this.n];
      } else if (parameter6 > 2 && parameter6 <= 6) {
        this.sound = brass[1*13 + this.n];
      } else if (parameter6 > 6 && parameter6 <= 10) {
        this.sound = brass[2*13 + this.n];
      } else if (parameter6 > 10) {
        this.sound = brass[3*13 + this.n];
      }
    }
  }



  play() {
    let keyOrder = [65, 87, 83, 69, 68, 70, 84, 71, 89, 72, 85, 74]; 
    if (keyCode == keyOrder[this.n]) { 
      let sound = this.assign(); 
      this.sound.play();
    }
  }

  stop() {
    let keyOrder = [65, 87, 83, 69, 68, 70, 84, 71, 89, 72, 85, 74]; 
    if (keyCode == keyOrder[this.n]) {
      this.sound.stop();
    }
  }

  lighten() {
    let keyOrder = [65, 87, 83, 69, 68, 70, 84, 71, 89, 72, 85, 74]; 
    if (keyIsDown(keyOrder[this.n])) {
      textAlign(LEFT);
      fill(255);      
      if (this.p == 1) text(parameter1, width*0.93, 120);
      else if (this.p == 2) text(parameter2, width*0.93, 150);
      else if (this.p == 3) text(parameter3, width*0.93, 180);
      else if (this.p == 4) text(parameter4, width*0.93, 210);
      else if (this.p == 6) text(parameter5_1, width*0.93, 240);
      else if (this.p == 5) text(parameter5, width*0.93, 270);
    }
  }
}