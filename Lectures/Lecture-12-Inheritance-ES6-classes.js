"use strict";
//* MANIPULATING THE PROTOTYPE CHAIN USING ES6 CLASSES.

//* TO IMPLEMEMNT INHERITANCE BETWEEN ES6 CLASSES, WE ONLY NEED TWO INGREDIENTS, THE EXTEND KEYWORD AND THE SUPER FUNCTION
//* TO MAKE THE STUDENT CLASS FROM THE PERSON CLASS, ALL WE NEED TO DO IS TO WRITE EXTENDS AFTER CHILD CLASS NAME.
//* THE EXTENDS KEYWORD WILL IMPLICILY LINK THE PROTOTTYPES BEHIND THE SCENES.

class PersonCl {
  constructor(fullName, age, skills) {
    this.stName = fullName;
    this.stAge = age;
    this.stSkills = skills;
  }

  stDetails() {
    console.log(
      `The student name is  ${this.stName}, his age is ${this.stAge} and he is a ${this.stSkills}`
    );
  }

  get stBirthYear() {
    return 2024 - this.stAge;
  }

  set stName(name) {
    if (name.includes(" ")) this._stName = name;
    else alert(`${name} is not a full name`);
  }

  get stName() {
    return this._stName;
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, age, skills, field) {
    //* WE DON'T HAVE TO EXPLICITLY CALL A PERSONCL USING THE CALL METHOD(JUST LIKE WE DID IN CONSTRUCTOR FUNCTIONS)
    //* ALL WE NEED TO CALL SUPER CONSTRUCTOR FUNCTION INSTEAD
    //* SUPER CONSTRUCTOR FUNCTION IS BASICALLY CONSTRUCTOR FUNCTION OF THE PARENT CLASS, HERE IT ALL HAPPENS AUTOMATICALLY, WE DON'T NEED TO SPECIFY THE NAME OF THE PARENT CLASS
    //* ALWAYS NEED TO HAPPEN FIRST, BEACUSE SUPER FUNCTION IS RESPONSIBLE FOR CREATING  THE "this" KEYWORD IN THIS SUBCLASS.
    //* WITHOUT DOING THIS, WE WOULDN'T BE ABLE TO ACCESS THE "this" KEYWORD TO DO THIS.
    super(fullName, age, skills);
    this.field = field;
  }
  //* IF YOU DON'T NEED TO ADD NEW PROPERTIES, THEN YOU DON'T HAVE TO USE CONSTRUCTOR FUNCTION AT ALL.

  introduce() {
    console.log(
      `My name is ${this.stName} and I study ${this.field}, I am a ${this.stSkills}! `
    );
  }

  //* WE OVERRIDE THE PARENT METHOD AND IT WILL GET FIRST BECAUSE IT WILL APPEAR FIRST IN THE PROTOTYPE CHAIN.
  stDetails() {
    console.log(
      `I'm ${2024 - this.stAge} Years old! but as a student, I feel like I'm ${
        2024 - this.stAge + 10
      }`
    );
  }
}

const khalid = new StudentCl(
  "Khalid Rehman",
  2002,
  "WEB DEV",
  "Computer Science"
);
console.log(khalid);
khalid.introduce();
khalid.stDetails();

//* THIS PROVES US THAT THE PROTOTYPE CHAIN WAS SETUP AUTOMATICALLY BY THE EXTENDS KEYWORD.
