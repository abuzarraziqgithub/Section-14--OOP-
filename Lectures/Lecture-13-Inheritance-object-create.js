"use strict";
//* LET'S LOOK AT HOW WE CAN USE OBJECT.CREATE TO IMPLEMENT A COMPLEX PROTOTYPE CHAIN, SIMILAR TO WHAT WE IMPLEMENTED BEFORE WITH CONSTRUCTOR FUNCTIONS AND CLASSES.
//* BY USING OBJECT.CREATE, WE DON'T EVEN WORRY ABOUT CONSTRUCTORS, PROTOTYPE PROPERTIES AND THE NEW OPERATOR, IT'S REALLY JUST OBJECTS LINKED TO ANOTHER OBJECTS.
//* WITH THIS TECHNIQUE, WE ARE NOT FAKING THE CLASSES, ALL WE ARE DOING IS SIMPLY LINKING OBJECTS TOGETHER WEHRE SOME OBJECTS THEN SERVE AS THE PROTOTYPE OF OTHER OBJECTS

const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const khlaid = Object.create(PersonProto);

//* THE PROTOTYPE OF STUDENTPROTO OBJECT IS PERSONPROTO OBJECT
const StudentProto = Object.create(PersonProto);
//* LET'S SPECIFY THE INIT METHOD. THE METHOD OF PARENT OBJECT
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

//* ADDING INTRODUCE FUNCTION TO STUDENTPROTO
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName}, I study ${this.course}`);
};

//* THE PROTOTYPE OF SAMI OBJECT IS STUDENTPROTO OBJECT
const sami = Object.create(StudentProto);
sami.init("Sami ul haQ", 2002, "CS");
sami.introduce();
sami.calcAge();
//*
console.log(sami.__proto__); //* STUDENT OBJECT
console.log(sami.__proto__.__proto__); //* THE PERSONPROTO OBJECT

console.log(PersonProto.__proto__.__proto__);
