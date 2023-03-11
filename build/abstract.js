"use strict";
class ElectricityBill {
    constructor(rate, units) {
        this.rate = rate;
        this.units = units;
    }
}
class Domestic extends ElectricityBill {
    constructor(rate, units) {
        super(rate, units);
    }
    billDetails() {
        console.log("  bill amount is " + (this.rate * this.units));
    }
}
let d = new Domestic(5, 5);
d.billDetails();
class Commercial extends ElectricityBill {
    constructor(rate, units) {
        super(rate, units);
    }
    billDetails() {
        console.log("bill amount is " + (this.rate * this.units));
    }
}
let d1 = new Commercial(10, 10);
d1.billDetails();
