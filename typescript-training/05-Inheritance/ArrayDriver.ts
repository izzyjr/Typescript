import { Shape } from './Shape'
import { Circle } from './Circle'
import {Rectangle} from "./Rectangle";

let myShape = new Shape(10, 15);
let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(0, 5, 10, 20);

// declare an array of shapes ... initially empty
let theShapes: Shape[] = [];

// add the shapes to the array
theShapes.push(myShape, myCircle, myRectangle);

for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
}
