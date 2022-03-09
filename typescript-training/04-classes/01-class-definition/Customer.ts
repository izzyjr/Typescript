// @ts-ignore
class Customer {

    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }

}

// let's create an instance
// @ts-ignore
let myCustomer = new Customer("Simon", "Dixon");

// myCustomer.firstName = "Simon";
// myCustomer.lastName = "Dixon";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
