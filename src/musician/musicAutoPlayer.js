class MusicAutoPlayer {
  constructor() {
    this.musicList = new MusicList();
    this.musicList.set();

    this.isPlaying = false;
  }

  async play(music) {
    function sleep(ms) {
      return new Promise((r) => setTimeout(r, ms));
    }
    async function playNote(duration) {
      keyIsPressed = true;
      myInst.play();
      await sleep(duration);
      keyIsPressed = false;
      myInst.stop();
      startTime = millis();
    }
    async function rest(duration) {
      await sleep(duration);
    }

    let noteToKey = {
      '': 'rest',
      'c': 'a',
      'c#': 'w',
      'd': 's',
      'd#': 'e',
      'e': 'd',
      'f': 'f',
      'f#': 't',
      'g': 'g',
      'g#': 'y',
      'a': 'h',
      'a#': 'u',
      'b': 'j',
      'c^': 'a',
      'c#^': 'w',
      'd^': 's',
      'd#^': 'e',
      'e^': 'd',
      'f^': 'f'
    }

    this.isPlaying = true;

    let startTime = millis();
    let notes = this.musicList.getMusic(music);
    let tempo = this.musicList.getTempo(music);
    for (let note of notes) {
      if (!this.isPlaying) break;

      key = noteToKey[note[0]];
      if ((key != 'rest') && !pressedKeys.has(key)) pressedKeys.add(key);
      let duration = (note[1] * 1000 / tempo) * 60;

      if (key === 'rest') await rest(duration);
      else await playNote(duration);
      if (pressedKeys.has(key)) pressedKeys.delete(key);
    }
  }

  stop() {
    this.isPlaying = false;
    myInst.stop();
  }
}