export default class Student {
  constructor(studentFirstName, studentLastName, studentAge) {
    this.firstName = studentFirstName;
    this.lastName = studentLastName;
    this.age = studentAge;
    this.academy = null;
  }
  startAcademy(someAcademy) {
    this.academy = someAcademy;
    someAcademy.students.push(this);
  }
}
