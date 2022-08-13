class Account {
  // private fields
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    this.locale = navigator.language;

    console.log(`Thanks for opening an account ${owner}`);
  }

  // define some methods

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withDraw(val) {
    this.deposit(-val);
    return this;
  }

  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }

    return this;
  }
}

const acc1 = new Account("La paix", "EUR", 1111);

acc1.deposit(250);
acc1.withDraw(140);

console.log(acc1);

// chaining methods
acc1.deposit(300).deposit(500).withDraw(35).requestLoan(25000).withDraw(4000);
