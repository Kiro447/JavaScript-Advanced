import Animal from "./animal.js";

export default class Horse extends Animal {
  constructor(name, age, gender) {
    super(name, age, gender);

    this.numberOfLegs = 4;
    this.gallops = true;
    this.hasMane = true;
    // this.king = {
    //     isKing:true, isTrapStar:true,
    // }
  }
  gallop(soundOfGallopoing = "tk tk tk tk") {
    console.log(soundOfGallopoing);
  }
  run(soundOfRunning = "tgdk tgdk tgdk") {
    console.log(soundOfRunning);
  }
  die(causeOfDeath) {
    super.die(causeOfDeath);
    this.gallops = false;
  }
}
