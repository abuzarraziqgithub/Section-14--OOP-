"use strict";
///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // The call method will explicitly bind the this with the object
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// We can now access the data of Person, because the prototype property is now linked with the Person prototype.
// This all works because of prototypal chain.
Student.prototype = Object.create(Person.prototype);

const abuzar = new Student("Abuzar", 2003, "CS");

abuzar.calcAge();

// The constructor of Student.prototype property should be the student, but here it is pointing the Person because of Object.create.
console.log(Student.prototype.constructor);

// We can fix this by defining the constructor to Student.prototype.

Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);

console.log(abuzar instanceof Student);
console.log(abuzar instanceof Person);
console.log(abuzar instanceof Object);

// This is how we can manipulate the prototype chain manually by ourself.
