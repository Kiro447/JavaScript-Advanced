class Student {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
}
let form = document.getElementById('form')
let database = [];
let btn = document.getElementById('btn')
form.onsubmit = function (event) {
    {
        event.preventDefault();
        let inputName = document.getElementById('firstName').value;
        console.log(inputName);
        let inputLastName = document.getElementById('lastName').value;
        let inputAge = document.getElementById('number').value;
        let inputEmail = document.getElementById('email').value;
        let student = new Student(inputName, inputLastName, inputAge, inputEmail)
        database.push(student)
        console.log(database);
        form.reset();
    }
}


let movieForm = document.getElementById('movies');
let error = document.getElementById('error');
let searchBtn = document.getElementById('search');
let listOfMovies = ['shaw shank redemption','seven','sisanje','tetoviranje']


searchBtn.addEventListener('click',(event) => {
    event.preventDefault();
    let inputMovie = document.getElementById('inputMovie').value;
    let found = false;
    for (let movie of listOfMovies) {
        if (inputMovie.toLowerCase() === movie) {
            error.innerHTML = `The movie can be rented`
            error.removeAttribute('hidden');
            found = true;
            break;
        }
    }
    if (!found) {
        error.style.color = 'red';
        error.innerText = `The movie can't be rented`
        error.removeAttribute('hidden');
    }
})


