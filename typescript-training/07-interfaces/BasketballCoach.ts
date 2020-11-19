import {Coach} from "./Coach";

export class BasketballCoach implements Coach {

    getDailyWorkout(): String {
        return "Practice free throw 100 times";
    }

}