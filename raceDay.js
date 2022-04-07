/* A program to let racers know what time they are racing.
Program requirements:
Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).

Runners aged 18 see the Registration Desk

*/

let raceNumber = Math.floor(Math.random() * 1000);

//console.log(raceNumber);

let early = true;
let age = 18;


if (age >= 18) {
  raceNumber += 1000;
};

if (age > 18 && early) {
  console.log(`Racer ${raceNumber} will race at 09:30am.`);
} else if (age > 18 && !early) {
  console.log(`Racer ${raceNumber} will race at 11:00am.`);
} else if (age < 18) {
  console.log(`Racer ${raceNumber} will race at 12:30pm`);
} else if (age === 18) {
  console.log(`Racer ${raceNumber} See Registration Desk`);
};
