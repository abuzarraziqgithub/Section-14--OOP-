"use strict";

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //* PROTECTED PIN
    this._pin = pin;
    //* PROTECTED MOVEMENTS.
    this._movements = [];
    this.locale = navigator.language;
  }

  //* USING GETTER METHOD:
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this.movements.push(val);
  }

  withdrawal(val) {
    this.deposit(-val);
  }

  requestApprove() {
    return true;
  }

  requestLoan(val) {
    if (this.requestApprove) {
      this.deposit(val);
      console.log(`Loan Approved, Amount ${val}`);
    }
  }
}

const acc1 = new Account("Abuzar", "USD", 3333);
acc1.deposit(230);
acc1.withdrawal(23);
acc1.requestLoan(1000);
console.log(acc1);

//* THERE ARE TWO BIG REASONS WHY WE NEED ENCAPSULATION.
//* TO PREVENT CODE OUTSIDE OF A CLASS TO ACCIDENTALLY MANIPULATE OUR DATA INSIDE OF CLASS.

//* WHEN WE EXPOSE ONLY A SMALL INTERFACE(SMALL API CONSISTING A FEW METHODS) THEN WE CAN CHANGE ALL THE OTHER INTERNAL METHODS WITH MORE CONFIDENCE, IN THIS CASE WE CAN ASSURE THAT EXTERNAL CODE DOES NOT RELY ON THESE PRIVATE METHODS AND THEREFORE OUR CODE WILL NOT BREAK WHEN WE DO INTERNAL CHNAGES.

//* THERE IS NO TRUE ENCAPSULATION IN JAVASCRIPT YET, WE CAN USE SOME CONVENTION FOR THE ENCAPSULATION AND PRIVACY THAT OTHER DEVELOPERS USE.

//* WE CAN USE _ UNDERSCORE BEFORE THE PROPERTY VARIABLE INSIDE OUR CLASS.
//* WE CAN USE GETTER FOR JUST RETURNING THE VALUE OF A PROPERTY WHICH ALSO A GOOD APPROACH.
