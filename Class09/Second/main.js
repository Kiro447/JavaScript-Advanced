import Academy from "./models/academy.js";
import Student from "./models/student.js";
import Subject from "./models/subject.js";

const bojan = new Student("Bojan", "Damcevski", 24);
const ivan = new Student("Ivan", "Jamandilovski", 30);

const cSharp = new Subject("C#");
const javaScript = new Subject("JavaScript");
const html = new Subject("HTML");

const academy = new Academy(
  "SEDC",
  [bojan, ivan],
  [cSharp, javaScript, html],
  new Date("2022", "10", "10"),
  new Date("2023", "10", "15")
);

// bojan.startAcademy(academy)
academy.printStudents();
academy.printSubjects()

const newStudent = new Student('Maja','Apostolova',23)

newStudent.startAcademy(academy);

console.log(academy);