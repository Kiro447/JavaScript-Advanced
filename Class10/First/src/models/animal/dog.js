import Animal from "./animal.js";

export default class Dog extends Animal {
  constructor(name, age, gender) {
    super(name, age, gender);
    
    this.numberOfLegs = 4;
    this.barks = true;
  }
  bark(whatToBark = "bark bark bark") {
    if(!this.isAlive) return;
    // this.name == 'sarko' ? whatToBark = 'sarko ne lae na odmasni' : whatToBark;
    if(this.name =='sarko'){
      whatToBark = 'Sarko ne lae na domasni'
    }
    console.log(whatToBark);
  }
  die(causeOfDeath = 'car hit') {
    super.die(causeOfDeath);
    this.barks = false;
  }
}
