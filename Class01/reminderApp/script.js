{/* <label for="title">Title</label>
<input type="text" id="title"><br>
<label for="priority">priority</label>
<input type="number" id="priority"><br>
<label for="color">Color</label>
<input type="text" id="color"><br>
<textarea name="description" id="" cols="30" rows="10">Write smth</textarea>
<button id="submitBtn">Submit</button> <button id="showBtn">Show</button> */}

let listOfReminders = []

class Reminder {
    constructor(title, priority, color, description) {
        this.title = title;
        this.priority = priority;
        this.color = color;
        this.description = description;
    }
}

let submitBtn = document.getElementById('submitBtn');
let showBtn = document.getElementById('showBtn');



submitBtn.addEventListener('click', () => {
    let inputTitle = document.getElementById('title').value;
    let inputPriority = document.getElementById('priority').value;
    let inputColor = document.getElementById('color').value;
    let inputText = document.getElementById('description').value;
    let newReminder = new Reminder(inputTitle, inputPriority, inputColor, inputText)
    listOfReminders.push(newReminder)
    console.log(listOfReminders);
})

showBtn.addEventListener('click', () => {
    let table = document.getElementById('table')
    let firstRow = document.createElement('tr')
    table.appendChild(firstRow)
    firstRow.innerHTML = `
    <th>Title</th>
    <th>Priority</th>
    <th>Color</th>
    <th>Text</th>`

    for (let i = 0; i < listOfReminders.length; i++) {
        let newRow = document.createElement('tr');
        // listOfReminders[i]['color'].style.color = listOfReminders[i]['color']
        newRow.innerHTML =
            `<tr>
        <th>${listOfReminders[i]['title']}</th>
        <th>${listOfReminders[i]['priority']}</th>
        <th style="color:${listOfReminders[i]['color']}">${listOfReminders[i]['color']}</th>
        <th>${listOfReminders[i]['description']}</th>       
        </tr>
        `
        firstRow.after(newRow);


    }
    console.log(Reminder);
    console.log(listOfReminders);

})
console.log(Reminder);
console.log(listOfReminders);