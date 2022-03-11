"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
// let's create an instance
// @ts-ignore
var myCustomer = new Customer_1.Customer("Simon", "Dixon");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
