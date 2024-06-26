"use strict";

//? HOW DOES OPP ACTUALLY WORK IN JAVASCRIPT
// WE HAVE PROTOTYPES IN JS.
// ALL OBJECTS ARE LINKED TO A CERTAIN PROTOTYPE OBJECT
// EACH OBJECT HAS A PROTOTYPE.

// THE PROTOTYPE CONTAINS METHODS(BEHAVIOUR) THAT ARE ACCESSIBLE TO ALL OBJECTS LINKED TO THAT PROTOTYPE AND THIS IS CALLED PROTOTYPAL INHERITANCE.
// THE OBJECT THAT IS LINKED TO A CERTAIN PROTOTYPE CAN USE THE METHODS AND PROPERTIES OF THAT PROTOTYPE.
// OBJECTS INHERIT METHODS AND PROPERTIES FROM THE PROTOTYPE WHICH IS THE REASON WHY THIS MECHANISM IS CALLED PROTOTYPAL INHERITANCE.
// THIS PROTOTYPAL INHERITANCE IS DIFFERENT FROM CLASSICAL INHERITANCE, BECAUSE CLASSICAL INHERITANCE IS ABOUT ONE CLASS INHERITS FROM ANOTHER CLASS.
// IT'S BASICALLY AN INSTANCE INHERITING FROM A CLASS.
// OBJECTS DELEGATE (METHOD)BEHAVIOUR TO THE LINKED PROTOTYPE OBJECT.
// WE ALSO CALLED THIS MECHANISM(PROTOTYPAL INHERITANCE) DELEGATION.
// TECHNICALLY, OBJECTS DELEGATE THIER BEHAVIOUR TO THE PROTOTYPE.
// BEHAVIOUR IS DELEGATED TO THE LINKED PROTOTYPE OBJECT.

//* IN CLASSICAL OOP WITH CLASESS, THE BEHAVIOUR ARE ACTUALLY COPIED FROM THE CLASS TO THE OBJECT.

//? HOW DO WE ACTUALLY CREATE PROTOTYPES?
//? HOW DO WE LINK OBJECTS TO PROTOTYPES?
//? HOW CAN WE CREATE NEW OBJECTS, WITHOUT HAVING CLASESS?

//! THERE ARE 3 WAYS OF IMPLEMENTING PROTOTYPAL INHERITANCE IN JAVASCRIPT.

//* CONTSTRUCTOR FUNCTIONS
// TECHNIQUE TO CREATE OBJECTS FROM A FUNCTION.
// THIS IS HOW BUILT-IN OBJECTS LIKE ARRAYS,MAPS OR SETS ARE ACTUALLY IMPLEMENTED

//* ES6 CLASSES
// MODERN ALTERNATIVE TO CONSTRUCTOR FUNCTION SYNTAX.
// 'SYNTACTIC SUGAR': BEHIND THE SCENES, ES6 CLASSES WORK EXACTLY LIKE CONSTRUCTOR FUNCTIONS.
// ES6 CLASSES DO NOT BEHAVE LIKE CLASSES IN "CLASSICAL OOP".

//* OBJECT.CREATE
// THE EASIEST AND MOST STRAIGHTFORWARD WAY OF LINKING AN OBJECT TO A PROTOTYPE OBJECT.

//? THE 4 PILLARS OF OOP ARE STILL VALID IN JS.
// ABSTRACTION
// ENCAPSULATION
// INHERITANCE
// POLYMORPHISM
