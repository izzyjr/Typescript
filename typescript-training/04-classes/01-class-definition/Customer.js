// @ts-ignore
var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// let's create an instance
// @ts-ignore
var myCustomer = new Customer("Simon", "Dixon");
// myCustomer.firstName = "Simon";
// myCustomer.lastName = "Dixon";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
