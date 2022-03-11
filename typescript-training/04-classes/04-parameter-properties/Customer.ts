
// @ts-ignore
class Customer {

    constructor(private _firstName: string,
                private _lastName: string) {
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

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
