let sportsOne: string[] = ["Climbing", "Swimming", "Futbol", "Futbol"];

for (let i=0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}

// simplified loop

for (let tempSport of sportsOne) {
    if (tempSport == "Futbol") {
        console.log(tempSport + " is my favorite sport!")
    } else {
        console.log(tempSport);
    }
}