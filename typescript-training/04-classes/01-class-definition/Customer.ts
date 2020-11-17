class Customer {

    firstName: String;
    lastName: String;

    constructor(theFirst: String, theLast: String) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }

}

// let's create an instance
let myCustomer = new Customer("Martin", "Dixon");

console.log(myCustomer.firstName + " " + myCustomer.lastName);