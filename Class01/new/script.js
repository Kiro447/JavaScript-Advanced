// ## List Generator dynamically from inputs

// * Create 3 inputs:
//   * Color
//   * FontSize
//   * Items
// * Create a button for generating unordered lists
// * When the button is clicked generate a new ul element with the color, font size, and items from the inputs 

// > Items should be added separated by, in the input

{/* <input type="color" name="" id="color">
<input type="number" placeholder="text font" id="font">
<input type="text" placeholder="items" id="items"> */}
let color = document.getElementById('color')
let font = document.getElementById('font')
let items = document.getElementById('text')
let btn = document.getElementById('btn')
let lista = document.getElementById('lista')
btn.addEventListener('click',()=>{
let colorInput = color.value;
console.log(colorInput);
let fontGolemina = font.value;
console.log(fontGolemina);
let text = items.value;
console.log(text);
let printer = lista.appendChild(document.createElement('li'))
printer.style.fontSize = fontGolemina+`px`;
printer.style.color = colorInput;
printer.innerHTML = text;
})





// ## Create a student registry page

// * Create an HTML page with student registry form with
//   * First Name
//   * Last Name
//   * Age
//   * Email
// * Create a student generator function
// * When the form is submitted, the inputs should be compiled into a new object from the generator function Student
// * This student should be added to a list called "database"
// * After submit the database should be printed in the console
// * The input fields should be cleared