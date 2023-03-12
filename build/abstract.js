"use strict";
class electricitybill {
    constructor(rate, units) {
        this.rate = rate;
        this.units = units;
    }
}
class domestic extends electricitybill {
    constructor(rate, units) {
        super(rate, units);
    }
    billdetails() {
        console.log("  bill amount is " + (this.rate * this.units));
    }
}
let d = new domestic(5, 1);
d.billdetails();
class commercial extends electricitybill {
    constructor(rate, units) {
        super(rate, units);
    }
    billdetails() {
        console.log("bill amount is " + (this.rate * this.units));
    }
}
let c = new commercial(10, 1);
c.billdetails();
