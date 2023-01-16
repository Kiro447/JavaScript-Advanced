let arrByThree = [];
let arrByFour = [];
let arrByOne = [];

for (let i = 1; i < 1000; i++) {

    if (i % 3 === 0) {
        arrByThree.push(i);
    } else if (i % 4 === 0) {
        arrByFour.push(i)
    } else if (i % 10 === 1) {
        arrByOne.push(i)
    }
}
// console.log(arrByThree,arrByFour,arrByOne);

let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

let arrOfStrings = [];
let arrOfNumbers = [];
// undefined, null , nan , '',
let falsyValues = [];

function arrayCleaner(array) {
    for (let things of array){
        if (things){
            falsyValues.push(things)
        } if (typeof(things) === 'number'){
            if(!isNaN(things)){
            arrOfNumbers.push(things)}
        } if (typeof(things) === 'string'){
            arrOfStrings.push(things)
        }


    }
}
arrayCleaner(test);
// console.log(arrOfStrings);
// console.log(arrOfNumbers);
// console.log(falsyValues);

let body = document.querySelector('body');

function randomBackground (){
    let r = Math.floor (Math.random() * 255);
    let g = Math.floor (Math.random() * 255);
    let b = Math.floor (Math.random() * 255);
    return `${r},${g},${b}`
}

body.style.backgroundColor = `rgb(${randomBackground()})`

let btn = document.getElementById('btn');
btn.addEventListener('click',(generator));
function generator (){
    let color = document.getElementById('color').value;
    let fontSize = document.getElementById('number').value;
    let text = document.getElementById('text').value;
    let header = document.createElement('h2')
    btn.after(header);
    header.style.color = color;
    header.style.fontSize = `${fontSize}px`
    header.innerText = text;

}

class Student {
    constructor(firstName, lastName, birthYear, academy, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.academy = academy;
        this.grades = grades;
        this.average = this.averageGrade(grades);
        this.age = this.getAge();
        this.info = this.getInfo();
    }
    getAge =  function (birthYear){
        let currentAge = new Date().getFullYear() - birthYear ;
        return currentAge;
    }
    getInfo = function (){
        return `This is student ${this.firstName} ${this.lastName}, from the ${this.academy} academy`
    }
    averageGrade = function(grades){
        let total = 0;
        let average = 0;
        for (let i = 0 ; i < grades.length; i++ ){
            total += grades[i]
        }
        average = total / grades.length ;
        return average;
    }
}
let Kire = new  Student ('Kiril','Jordanov','1998','SEDC',[7,8,9,6,7])
console.log(Kire);
