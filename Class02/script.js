// for (let i = 0 ; i <= 5; i++){
//     if(i==1){
//         alert(`ova se izvrsi doseg ${i}`)
//     }else {
//         alert(`ova se izvrsi dosega ${i} pati`)
//     }
//     let toNotContinue = confirm('da prodolzime')
//     if (!toNotContinue) break;
// }

// let userInput = prompt('enter the thing');

let testArr = ["kiril", "stevo", "king", "marko"];
function arrayChecker(array, input) {
    for (let i = 0; i < array.length; i++) {
        if (input == testArr[i]) {
            console.log(`Indeksot e ${i}`);
            continue;
        }
    }
}
// arrayChecker(testArr,userInput)

// 2.	Create a function that goes through an array of numbers.  If the number is odd, it should be incremented by one ( + 1 )
// if the number is even, it should be decremented by one ( - 1 ). Return the modified array.
// Make sure the array provided is not empty, if it is empty, return false;
// BONUS: Make sure it works if the array provided contains different data types then numbers ( strings, booleans etc.).
// Only elements of datatype number are taken into consideration.

let test = [
    true,
    false,
    12,
    13,
    44,
    2345,
    "Bob",
    "Jill",
    false,
    undefined,
    1000,
    null,
    "Jack",
    "",
    "",
    99,
    "Greg",
    undefined,
    NaN,
    1,
    22,
];

let saverArray = [];

function arrayCleaner(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            if (isNaN(arr[i])) {
                continue;
            } else {
                saverArray.push(arr[i]);
            }
        } else {
            continue;
        }
    }
    console.log(saverArray);
}

arrayCleaner(test);
