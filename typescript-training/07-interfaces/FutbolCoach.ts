import {Coach} from "./Coach";

export class FutbolCoach implements Coach {

    getDailyWorkout(): String {
        return "Practice corner kicks 100 times";
    }

}