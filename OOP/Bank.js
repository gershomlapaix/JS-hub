class Account {
    constructor(owner, currency, pin){
        this.owner = owner
        this.currency = currency
        this.pin = pin
        this.movements = []
        this.locale = navigator.language

        console.log(`Thanks for opening an account ${owner}`);
    }

    // define some methods

    deposit(val){
        this.movements.push(val)
    }

    withDraw(val){
        this.deposit(-val)
    }
}

const acc1 = new Account('La paix', 'EUR',1111)

acc1.deposit(250)
acc1.withDraw(140)

console.log(acc1);