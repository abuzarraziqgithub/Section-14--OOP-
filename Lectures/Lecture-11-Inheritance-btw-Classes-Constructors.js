"use strict";

//* IT IS NOT A GOOD PRACTICE AND ALSO AGAINST THE DRY PRINCIPLE TO WRITE THE SAME CODE INSIDE THE CHILD CONSTRUCTOR(STUDENT).
//* FOR THIS PROBLEM, WE CAN CALL THE PARENT CONSTRUCTOR INSODE THE CHILD CONSTRUCTOR, BUT WE CANNOT JUST CALL IT BECAUSE IT WILL THEN TREATED AS A NORMAL FUNCTION AND NOT CONSTRUCTOR(BCZ WE CANNOT USE THE NEW KEYWORD) SO THE THIS KEYWORD IN NORMAL FUNCTIONS ARE UNDEFINED.
//* WE CAN DEAL WITH THIS, BY USING THE CALL METHOD IN WHICH WE CAN MANUALLY APPLY THE 'this' KEYWORD WHICH WILL POINT THE OBJECT WE CREATE.
//* THE CALL METHOD EXPLICITLY APPLY THE'this' KEYWORD AND RETURN IT IMMEDIATLY(THE BIND METHOD CREATE A COPY FIRST).
//* THE FIRST ARGUMENT WILL BE THE OBJECT(IN THIS CASE THE "this" OBJECT, AND THEN SPECIFY THE PROPERTIES TO THAT OBJECT)

//* THE LINK BETWEEN INSTANCE AND PROTOTYPE HAS BEEN MADE AUTOMATICALLY BY CREATING THE ABUZAR OBJECT WITH NEW OPERATOR.

//* WE WANT THE STUDENT CLASS TO BE THE CHILD CLASS AND INHERIT FROM THE PERSON CLASS
//* WE WANT TO MAKE THE PERSON.PROTOTYPE THE PROTOTYPE OF STUDENT.PROTOTYPE
//* IN OTHER WORDS, WE WANT TO SET THE __PROTO__ PROPERTY OF STUDENT.PROTOTYPE TO PERSON.PROTOTYPE

//? HOW WE CAN ACHEIVE TO MAKE THE PsROTO PROPERTY OF STUDENT PROTOTYPE TO PERSON.PROTOTYPE, SO WE CAN THEN INHERIT THE PERSON PROTOTYPE BY THE STUDENT INSTANCES.
//* WE HAVE TO MAKE THIS CONNECTION MANUALLY, AND TO LINK THESE TWO PROTOTYPE OBJECTS, WE ARE GONNA USE OBJECT.CREATE  BECAUSE DEFINING PROTOTYPES MANUALLY IS EXACTLY WAHT OBJECT.CREATE DOES

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//* STUDENT.PROTOTYPE OBJECT IS NOW AN OBJECT THAT INHERITS FROM A PERSON.PROTOTYPE
//* LINKING PROTOTYPE
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduction = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const abuzar = new Student("Abuzar", 2004, "Computer science");
abuzar.introduction();
//* NOW WE CAN ACCESS THE PERSON'S PROTOTYPE DATA, AND THIS WROK DUE TO THE PROTOTYPE CHAIN.
//* IN SUMMARY, WE ARE NOW ABLE TO CALL A METHOD THAT IS ON A PERSON'S PROTOTYPE PROPERTY ON A STUDENT OBJECT, AND IT STILL WORKS BEACUSE OF THE POWER OF INHERITANCE.
abuzar.calcAge();

console.log(abuzar.__proto__);
console.log(abuzar.__proto__.__proto__);

//* THE CONSTRUCTOR OF STUDENT.PROTOTYPE PROPERTY SHOULD BE THE STUDENT, BUT HERE IT IS POINTING THE PERSON BECAUSE OF OBJECT.CREATE.
console.log(Student.prototype.constructor);
//* WE CAN FIX THAT BY DEFINING THE CONSTRUCTOR TO TO STUDENT.PROTOTYPE.
Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);

console.log(abuzar instanceof Student); //* TRUE
console.log(abuzar instanceof Person); //* TRUE
console.log(abuzar instanceof Object); //* TRUE

//* THIS IS HOW WE CAN MANIPULATE THE PROTOTYPE CHAIN MANUALLY BY OURSELF.
