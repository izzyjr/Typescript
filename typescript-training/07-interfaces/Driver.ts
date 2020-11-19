import { FutbolCoach } from "./FutbolCoach";
import {BasketballCoach} from "./BasketballCoach";
import {Coach} from "./Coach";

let myFutbolCoach = new FutbolCoach();
let myBasketballCoach = new BasketballCoach();

// declare an array for coaches
let theCoaches: Coach[] = [];

// add coaches to the array
theCoaches.push(myBasketballCoach, myFutbolCoach);

// loop array
for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout())
}



