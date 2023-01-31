let students = [
  { firstName: "Bob", lastName: "H", grade: 5, age: 19 },
  { firstName: "Mel", lastName: "B", grade: 2, age: 33 },
  { firstName: "Jill", lastName: "M", grade: 3, age: 15 },
  { firstName: "Lucky", lastName: "J", grade: 5, age: 18 },
  { firstName: "Strike", lastName: "K", grade: 4, age: 16 },
  { firstName: "Eric", lastName: "I", grade: 1, age: 17 },
];
let students2 = [
  {
    firstName: "Bob",
    lastName: "H",
    grades: [
      { subject: "Math", grade: 2 },
      { subject: "Science", grade: 3 },
    ],
    age: 19,
  },
  {
    firstName: "Mel",
    lastName: "B",
    grades: [
      { subject: "Math", grade: 3 },
      { subject: "Science", grade: 5 },
    ],
    age: 33,
  },
  {
    firstName: "Mel",
    lastName: "B",
    grades: [
      { subject: "Math", grade: 5 },
      { subject: "Science", grade: 4 },
    ],
    age: 33,
  },
];

for (let i = 0; i < students.length; i++) {
  console.log(`Student: ${students[i].firstName} , ${students[i].lastName}`);
}

function logFullName(student) {
  console.log(`Student: ${student.firstName} , ${student.firstName}`);
}
//   students.forEach(logFullName)

students.forEach((student) => console.log(student.firstName));

// complexUse

students2.forEach((element) =>
  element.grades
    .filter((grade) => grade.grade === 5)
    .forEach((grade) => console.log(`${grade.subject} , ${grade.grade}`))
);

let numbers = [1, 2, 3, "sdasd,", "sdf", undefined, false, 4, 5];
let numsOnly = numbers.map((x) => x === "number");
console.log(numsOnly);
console.log(numbers);
let aboveEighteen = students
  .filter((student) => student.age >= 18)
  .filter((s) => s.grade >= 4);
// .filter (s => s.firstName[0] === 'B')

//shorter

let aboveEighteenShort = students.filter(
  (student) => student.age >= 18 && student.grade >= 4
);
console.log(aboveEighteenShort);

console.log(aboveEighteen);
let studentAboveEighteenWithHighGrade = aboveEighteen.find(
  (student) => student.grade >= 3
);
// console.log(studentAboveEighteenWithHighGrade);

// MAP

let studentFirsNames = students.map((name) => name.firstName);
console.log(studentFirsNames);

let fullName = students.map((name) => name.firstName + "." + name.lastName);
console.log(fullName); /// samo niza

let names = students.map((s) => {
  return {
    name: `${s.firstName} ${s.lastName}`,
    grade: s.grade,
  };
});
console.log(names); // niza od objekti

let studentsAbove = students.filter((element) => element.age >= 18);
let studentsBelow = students.map((element) => element.age >= 18);
console.log(studentsAbove);
console.log(studentsBelow);

let studentsUnder18Short = students
  .filter((element) => element.age >= 18)
  .map((element) => element.age);
console.log(studentsUnder18Short);

// reduce
let sumOfAllGrades = students
  .map((s) => s.grade)
  .reduce((sum, grade) => (sum += grade), 0);
console.log(sumOfAllGrades);

// sort
let allGrades = students.map((s) => s.grade);
console.log(allGrades);

let sortedGrades = allGrades.sort((a,b) => b-a) // a-b b-a
let sortedGradesLow = allGrades.sort((a,b) => a-b) // a-b b-a
console.log(allGrades); //rabotis na allGrades nizata sort ne kreira nova niza raboti na taa sto ja zima
console.log(sortedGrades);
console.log(sortedGradesLow);

let allGradesCopy = [...allGrades];
