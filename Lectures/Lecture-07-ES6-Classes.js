"use strict";

//* CLASSES IN JAVASCRIPT DO NOT WORK LIKE TRADITIONAL CLASSES IN OTHER LANGUAGES LIKE JAVA OR C++.
//* IT IS JUST SYNTACTIC SUGAR, IT IS JUST A SYNTAX FOR UNDERSTANDING OPP STRUCTURE OTHERWISE IT IS SAME AS CREATING CONSTRUCTOR FUNCTION AND PROTOTYPAL INHERITANCE.

// CLASSES ARE SPECIAL TYPE OF FUNCTIONS
// CLASSES ARE A BETTER WAY TO CREATE INSTANCES.
//* INSIDE THE CLASS, WE CAN CREATE METHODS(OUTSIDE OF THE CONSTRUCTOR), AND THAT METHODS WILL BE ADDED TO THE PROTOTYPE PROPERTY OF THAT CLASS.
//* WE DON'T HAVE TO SPECIFY OR CALL PROTOTYPE BY ITSELF, IT WILL AUTOMATICALLY ADDED TO THE PROTOTYPE PROPERTY OF THAT CLASS.
//* THE CLASS REALLY JUST HIDES THE TRUE NATURE OF PROTOTYPAL INHERITANCE IN JAVASCRIPT.WE DON'T HAVE TO CREATE METHODS IN PROTOTYPES MANUALLY. IT WILL BE ADDED AUTOMATICALLY IN THE CLASS PROTOTYPE PROPERTY.

// CLASS EXPRESSION:
const PersonClE = class {};
// CLASS DECLARATIOM
// IT IS PREFFERED TO CREATE CLASS DECLARATIONS
class PersonClD {
  // CREATING CONSTRUCTOR FUNCTION
  constructor(name, age, skills) {
    this.stName = name;
    this.stAge = age;
    this.stSkills = skills;
  }

  stDetails() {
    console.log(
      `The student name is  ${this.stName}, his age is ${this.stAge} and he is a ${this.stSkills}`
    );
  }
}

const std1 = new PersonClD("Abuzar RaziQ", 21, "Full Stack Developer");
console.log(std1);
std1.stDetails();

console.log(std1.__proto__ === PersonClD.prototype);

//* WE CAN ALSO CREATE METHODS MANUALLY IN PROTOTYPE PROPERTY OF CLASS
//? REMEBER THAT THE "this" KEYWORD WON'T WORK WITHOUT CLASS NAME AND IT'S PROTOTYPE. IT WILL GET ERROR IN STRICT MODE OR POINTING THE WINDOW OBJECT WITHOUT STRICT MODE.
//* IT IS ADDED TO THE PROTOTYPE PROPERTY OF CLASS.
PersonClD.prototype.greet = function () {
  console.log(`Hey! ${this.stName}`);
};
std1.greet();

//! SOME IMPORTANT POINTS
//* 1: CLASSES ARE NOT HOISTED (CLASSD OR CLASSE BOTH), THEY CAN'T BE USE BEFORE DECLARATION.
//* 2: CLASSES ARE FIRST-CLASS CITIZENS LIKE FUNCTIONS(BECAUSE THEY ARE ALSO A SPECIAL FUNCTION), WE CAN PASS IT TO HIGHER ORDER FUNCTIONS AND ALSO RETURN THEM BY ANOTHER FUNCTION.
//* 3: CLASSES ARE EXECUTED IN STRICT MODE.

//? NOTE:
//* ONCE YOU UNDERSTAND THE NATURE AND DETAILS OF HOW PROTOTYPE, PROTOTYPAL-INHERITANCE AND PROTOTYPE CHAIN WORKS, YOU CAN USE CLASSES IN YOUR CODE.
//* CLASSES ARE ALSO A BETTER WAY OF ORGANIZING CODE.