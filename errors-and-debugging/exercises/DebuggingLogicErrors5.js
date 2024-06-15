// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

let launchReady = false;
let fuelLevel = 21000;
let crewStatus = true;
let computerStatus = 'green';

let fuelReady = false;
let crewReady = false;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   fuelReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   fuelReady = false;
}

console.log("launchReady = ", launchReady);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   crewReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   crewReady = false;
}

if (crewReady && fuelReady) {
   launchReady = true
   console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...")
   console.log("Liftoff!")
} else {
   launchReady = false
   console.log("Launch scrubbed!")
}

console.log("launchReady = ", launchReady);