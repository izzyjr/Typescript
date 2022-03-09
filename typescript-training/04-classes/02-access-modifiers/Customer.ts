// @ts-ignore
class Customer {

    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    public get firstName(): string {
        return this._firstName
    }

    public set firstName(value) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName
    }

    public set lastName(value) {
        this._lastName = value;
    }
}

// let's create an instance
// @ts-ignore
let myCustomer = new Customer("Simon", "Dixon");

// myCustomer.firstName = "Simon";
// myCustomer.lastName = "Dixon";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
