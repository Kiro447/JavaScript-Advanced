export default class Mammal {
  constructor(name, age, gender) {
    this.age = age;
    this.name = name;
    this.gender = gender;

    this.type = this.constructor.name;
    this.numberOfLegs;

    this.drinksMilk = true;
    this.hasWarmBlood = true;
    this.numberOfEyes = 2;
    this.breaths = true;
    this.hasPulse = true;
    this.isAlive = true;
  }
  die(causeOfDeath = "natural causes") {
    this.isAlive = false;
    this.hasPulse = false;
    this.breaths = false;
    this.causeOfDeath = causeOfDeath;
    console.log(`cause of death: ${this.causeOfDeath}`);
  }
}
