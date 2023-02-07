console.log(typeof document);
console.log(typeof document.getElementById);
console.log(typeof []);
console.log(typeof [].push);
console.log(typeof console);
console.log(typeof console.log);
console.log(typeof console);

let thisObj = {
  whatIsThis: this,
};
console.log(thisObj.whatIsThis);

let thisOtherObject = {
  whatIsThis: this,
  hello: "pozz",
  whatIsThisInAMethod: function () {
    console.log(this.whatIsThis);
    console.log(this);
    console.log(this.hello);
  },
};
thisOtherObject.whatIsThisInAMethod();

function Food(foodName, foodColor) {
  this.name = foodName;
  this.color = foodColor;
}

function Dog(dogName, dogColor, dogAge, dogFavoriteFood) {
  this.name = dogName === undefined ? "unnamed" : dogName;
  this.color = dogColor;
  this.age = dogAge;
  this.favoriteFood =
    dogFavoriteFood === undefined
      ? [new Food("bacon", "red")]
      : dogFavoriteFood;
  this.bark = function () {
    console.log(`bark bark bark`);
  };
  this.eat = function (food) {
    this.favoriteFood.forEach((fav) => {
      fav.name.toLowerCase() === food.toLowerCase()
        ? console.log(food + "My Favorite")
        : "";
    });
  };
}

const porkThighs = [new Food("Pork Thighs", "pink")];
const apple = [new Food("Apple", "green")];

const dule = new Dog("Dule", "Brown", 4, [porkThighs, apple]);
console.log(dule);
dule.bark();
dule.favoriteWord = "bate";
dule.sayHello = function () {
  console.log(`Hello ${dule.favoriteWord}`);
};
dule.sayHello();

const zoki = {
  dogName: "zoki",
  dogColor: "black",
  dogAge: 2,
};

const { dogName, dogColor, dogAge } = zoki;
console.log(dogName);

const student = {
    name: 'nikola',
    age: 20,
    scores: {
        JavaScript: undefined,
        AdvancedJs: 63,
        CSharp: 99
    }
}


function displaySummary({
    name,
    scores:{
    JavaScript = 0,
    AdvancedJs = 0,
    CSharp = 0
}})
{
console.log("Hello" + name);
console.log("JS score is " + JavaScript);
console.log("AdvancedJS score is " + AdvancedJs);
console.log("CSharp score is " + CSharp );
}

displaySummary(student)

const {JavaScript , AdvancedJs, CSharp } = student.scores;
console.log(AdvancedJs);
