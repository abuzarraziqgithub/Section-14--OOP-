"use strict";

//* TALK ABOUT ARRAY.FROM METHOD, WHICH TRANSFORM ANY ARRAY LIKE STRUCTURE INTO ACTUALL ARRAY.
//* THE POINT IS, THE ARRAY.FROM METHOD IS ONLY ATTACHED TO THE ARRAY CONSTRUCTOR AND NOT TO THE PROTOTYPE PROPERTY OF ARRAY. SO OTHER INSTANCES OR ARRAY CAN'T USE IT, IT IS ONLY ATTACHED TO THE ARRAY CONSTRUCTOR AND CAN'T BE INHERITED BY THIER INSTANCES.
//* WE SAID THAT THE .FROM METHOD IS IN THE NAMESPACE OF THE ARRAY, MEANS IT IS ONLY DEFINED IN THE ARRAY CONSTRUCTOR AND CAN BE USED BY ONLY CONSTRUCTOR ARRAY.
//* WE ALSO HAVE OTHER EXAMPLES LIKE NAMSPACE OF NUMBER IS PARSEINT FLOAT ETC.
//? THESE ARE THE EXAMPLE OF STATIC METHODS, THEY ARE ALL STATIC METHODS.

//* WE CAN IMPLEMENT STATIC METHODS IN CONSTRUCTORS AND CLASSES

//? CONSTRUCTOR FUNCTION
const Person = function (firstName, birthYear) {
  this.name = firstName;
  this.birth = birthYear;
};

const person1 = new Person("Abuzar", 2002);
console.log(person1);

//* CREATING STATIC METHOD FOR PERSON CONSTRUCTOR
Person.hello = function () {
  console.log(`Hello dear 🤴`);
};
// IT IS NOW THE FUNCTION OF PERSON CONSTRUCTOR AND NOT A PART OF THE PROTOTYPE PROPERTY OF THE PERSON
// IT CAN'T BE INHERITED BY THIER INSTANCES.
Person.hello();

//? CLASS
class PersonC {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //* THIS FUNCTION/ METHOD IS NOT A PART OF THE CLASS PROTOTYPE PROPERTY, IT CAN ONLY BE USED BY THE CLASS AND NOT ACCESSIBLE FOR THIER INSTANCES.
  static greet = function () {
    console.log(`Hey Man 🧔`);
  };
}
const person2 = new PersonC("Shaffoo", 22);
console.log(person2);
PersonC.greet();
