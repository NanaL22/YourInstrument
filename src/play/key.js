class Key {
  constructor(p, n) {
    this.p = p; 
    this.n = n; 
    this.sound; 
  }

  assign() {
    if (this.p == 1) { 
      if (parameter1 <= 60) {
        this.sound = winds[0*13 + this.n];
      } else if (parameter1 > 60 && parameter1 <= 120) {
        this.sound = winds[1*13 + this.n];
      } else if (parameter1 > 120 && parameter1 <= 180) {
        this.sound = winds[2*13 + this.n];
      } else if (parameter1 > 180) {
        this.sound = winds[3*13 + this.n];
      }
    } 

    else if (this.p == 2) { 
      if (parameter2 <= 1) {
        this.sound = strings[0*13 + this.n];
      } else if (parameter2 > 1 && parameter2 <= 2) {
        this.sound = strings[1*13 + this.n];
      } else if (parameter2 > 2 && parameter2 <= 3) {
        this.sound = strings[2*13 + this.n];
      } else if (parameter2 > 3) {
        this.sound = strings[3*13 + this.n];
      }
    }

    else if (this.p == 3) {
      if (parameter3 <= 8) {
        this.sound = keyboards[0*13 + this.n];
      } else if (parameter3 > 8 && parameter3 <= 16) {
        this.sound = keyboards[1*13 + this.n];
      } else if (parameter3 > 16 && parameter3 <= 24) {
        this.sound = keyboards[2*13 + this.n];
      } else if (parameter3 > 24) {
        this.sound = keyboards[3*13 + this.n];
      }
    }

    else if (this.p == 4) {
      if (parameter4 <= 20) {
        this.sound = guitars[0*13 + this.n];
      } else if (parameter4 > 20 && parameter4 <= 40) {
        this.sound = guitars[1*13 + this.n];
      } else if (parameter4 > 40 && parameter4 <= 60) {
        this.sound = guitars[2*13 + this.n];
      } else if (parameter4 > 60) {
        this.sound = guitars[3*13 + this.n];
      }
    }

    else if (this.p == 5) {
      if (parameter5 <= 8) {
        this.sound = organs[0*13 + this.n];
      } else if (parameter5 > 8 && parameter5 <= 16) {
        this.sound = organs[1*13 + this.n];
      } else if (parameter5 > 16 && parameter5 <= 24) {
        this.sound = organs[2*13 + this.n];
      } else if (parameter5 > 24) {
        this.sound = organs[3*13 + this.n];
      }
    }

    else if (this.p == 6) { 
      if (parameter6 <= 5) {
        this.sound = brass[0*13 + this.n];
      } else if (parameter6 > 5 && parameter6 <= 10) {
        this.sound = brass[1*13 + this.n];
      } else if (parameter6 > 10 && parameter6 <= 15) {
        this.sound = brass[2*13 + this.n];
      } else if (parameter6 > 15) {
        this.sound = brass[3*13 + this.n];
      }
    }
  }



  // 수정
  play() {
    // let keyOrder = [65, 87, 83, 69, 68, 70, 84, 71, 89, 72, 85, 74]; 
    let keys = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j'];
    if (key == keys[this.n]) { 
      let sound = this.assign(); 
      this.sound.play();
      myGraph.highlighted[this.p - 1] = true;
    }
  }

  // 수정
  stop() {
    // let keyOrder = [65, 87, 83, 69, 68, 70, 84, 71, 89, 72, 85, 74]; 
    let keys = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j'];
    if (key == keys[this.n]) {
      this.sound.stop();
      myGraph.highlighted[this.p - 1] = false;
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