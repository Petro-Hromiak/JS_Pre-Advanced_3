function CoffeeMake(type, sugar = `2`) {
    this.type = type;
    this.sugar = sugar;
}

CoffeeMake.prototype.on = function () {
    console.log(`Make coffee`);
}

CoffeeMake.prototype.off = function () {
    console.log(`Coffee is ready`)
}

function Droples(type, sugar, price, typeMachine) {
    CoffeeMake.call(this, type, sugar);
    this.price = price;
    this.typeMachine = `Droples Coffee Machine`;

}


Droples.prototype = Object.create(CoffeeMake.prototype);
Droples.prototype.constructor = Droples;

Droples.prototype.show = function () {
    console.log(`type:${this.type}, sugar: ${this.sugar}, price: ${this.price} ua, type of Coffee MAchine: ${this.typeMachine}`)
}

function Horn(type, sugar, price, milk = `no`, typeMachine) {
    CoffeeMake.call(this, type, sugar);
    this.price = price;
    this.milk = milk;
    this.typeMachine = `Horn Coffee Machine`;

}

Horn.prototype = Object.create(CoffeeMake.prototype);
Horn.prototype.constructor = Horn;

Horn.prototype.show = function () {
    console.log(`type:${this.type}, sugar: ${this.sugar}, price: ${this.price} ua, milk: ${this.milk}, type of Coffee MAchine: ${this.typeMachine}`)
}

function CoffeeMachine(type, sugar, price, milk = `yes`, number = `1`, typeMachine) {
    CoffeeMake.call(this, type, sugar);
    this.price = price;
    this.typeMachine = `Coffee Machine`;
    this.milk = milk;
    this.number = number
}

CoffeeMachine.prototype = Object.create(CoffeeMake.prototype);
CoffeeMachine.prototype.constructor = CoffeeMachine;

CoffeeMachine.prototype.show = function () {
    console.log(`type:${this.type}, sugar: ${this.sugar}, price: ${this.price} ua, milk: ${this.milk}, number: ${this.number}, type of Coffee Machine: ${this.typeMachine}`)
}

let droples = new Droples(`americano`, `3`, `10`)
droples.on()
droples.show()
droples.off()



let horn = new Horn(`espresso`, `2`, `9`, `yes`)
horn.on()
horn.show()
horn.off()


let machine = new CoffeeMachine(`doubl espresso`, `1`, `12`, `no`, `2`)
machine.on()
machine.show()
machine.off()
