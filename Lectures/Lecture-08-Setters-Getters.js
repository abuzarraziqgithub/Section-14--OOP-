"use strict";

//* EVERY OBJECT IN JAVASCRIPT CAN HAVE GETTER AND SETTER PROPERTIES.
//* WE CALL THESE SPECIAL PROPERTIES ASSESSOR PROPERTIES.
//* THE MORE NORMAL PROPERTIES ARE CALLED DATA PROPERTIES.
//* GETTERS AND SETTERS ARE FUNCTIONS THAT GET AND SET A VALUE JUST AS THE NAME SAYS.
//* GETTERS AND SETTERS CAN BE VERY USEFUL FOR DATA VALIDATION, WE APPLIED IT ON THE NAME PROPERTY WHERE USER SHOULD TYPE THIER FULL NAME WITH THE SPACE IN BETWEEN.

const account = {
  owner: "Abuzar",
  movements: [200, 500, 120, 300],

  //* IN ORDER TO DEFINE GETTER OR SETTER PROPERTY, WE NEED TO CREATE A FUNCTION AND PUT GET BEFORE IT
  get latest() {
    return this.movements.slice(-1).pop();
  },

  //* SAME FOR THE SETTER
  set latest(mov) {
    //* IT IS NOT TREATED AS A REGULAR METHOD, IT IS A PROPERTY, SO WE NEED TO ASSIGN A VALUE TO IT NOT PASSING AN ARGUMENT LIKE REGULAR METHOD
    this.movements.unshift(mov);
  },
};
//* GET THE VALUE BY CALLING THE PROPERTY(TREATED AS PROPERTY NOT A METHOD)
console.log(account.latest);
//* SET THE VALUE TO THE FIRST POSITION
account.latest = 50;
console.log(account.movements);

//? CLASSES ALSO CAN HAVE GETTERS AND SETTERS PROPERTIES
class PersonClD {
  // CREATING CONSTRUCTOR FUNCTION
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

  //* APPLYING VALIDATION USING STTER PROPERTY
  //* IF SET THE EXACT PROPERTY NAME FOR THE NAME, IT WILL GET AN ERROR, THE CALL STACK SIZE EXCEED, IT IS BECAUSE THE CONSTRUCTOR AND SET METHOD BOTH TRYING TO SET THE EXACT PROPERTY NAME FOR THE FULLNAME.
  //* IN ORDER TO AVOID THIS ERROR, THERE IS A CONVENTION USED FOR THIS IS PUTTIN UNDERSCORE BEFORE VARIABLE OF THE PROPERTY NAME.
  //* IT WILL THEN TREATED AS A NEW VARIABLE.
  //* THE NAME OF THE SETTER IS TREATED AS THE PROPERTY WHICH IS stName AND WE SET THE CONDITION, THE ARGUMENT WILL BE THE VALUE OF THAT _STNAME
  set stName(name) {
    if (name.includes(" ")) this._stName = name;
    else alert(`${name} is not a full name`);
  }

  //* IF WE WANT TO RETURN STNAME PROPERTY BY OBJECT, IT WILL BE UNDEFINED, BECAUSE IT DOESN'T EXIST, WE ACTUALLY HAVE NOW _STNAME PROPERTY
  //* TO SOLVE THIS ISSUE WE NEED A GETTER PROPERTY, TO GET THE STNAME

  get stName() {
    return this._stName;
  }
}

const std1 = new PersonClD("Abuzar RaziQ", 21, "Full Stack Developer");
console.log(std1.stBirthYear);
console.log(std1);
