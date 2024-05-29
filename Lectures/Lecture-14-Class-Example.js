"use strict";

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    //* WE CAN WRITE OTHER PROPERTIES INSIDE CONSTRUCTOR AND ALSO ASSIGN VALUE TO IT
    this.movements = [];
    this.locale = navigator.language;
  }

  //* WE CREATED METHODS FOR THE MOVEMENTS IN THE CLASS PROTOTYPE PROPERTY WHICH IS THE VALUE OF INSTANCE __PROTO__ PROPERTY.

  //* THESE TWO METHODS ARE THE PUBLIC INTERFACE OF OUR OBJECTS, WE ALSO CALL IT API.
  deposit(val) {
    this.movements.push(val);
  }

  withdrawal(val) {
    //* WE CAN ACCESS ANOTHER METHOD INSIDE THIS METHOD, BUT MAKE SURE TO CALL IT WITH THE THIS KEYWORD
    this.deposit(-val);
  }

  requestApprove() {
    return true;
  }

  //* WE CAN USE THIS METHOD AS PUBLIC INTERFACE, BUT WE DON'T WANT THE USER TO ALSO ACCESS THE REQUESTAPPROVE METHOD, WE CAN STOP THIS BY APPLYING PRIVACY AND ENCAPSULATION IN THE NEXT LECTURES.
  requestLoan(val) {
    if (this.requestApprove) {
      this.deposit(val);
      console.log(`Laon Approved, Amount ${val}`);
    }
  }
}

const acc1 = new Account("Abuzar", "USD", 3333);
acc1.deposit(230);
acc1.withdrawal(23);
acc1.requestLoan(1000);
console.log(acc1);
