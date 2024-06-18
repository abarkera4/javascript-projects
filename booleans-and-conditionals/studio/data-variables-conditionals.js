// Initialize Variables below

const date = "Monday 2019-03-18";
const time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "10%";
let weatherStatus = "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7){
    console.log("Too many astronauts!")
    preparedForLiftOff = false
} else {
    console.log("Astronaut count acceptable.")
    preparedForLiftOff = true
}

// add logic below to verify all astronauts are ready

if (astronautStatus === "ready" && preparedForLiftOff) {
    console.log("Astronauts ready!")
    preparedForLiftOff = true
} else {
    console.log("Astronauts not ready!")
    preparedForLiftOff = false
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMassKg < maximumMassLimit && preparedForLiftOff){
    console.log("Total mass exceeded!")
    preparedForLiftOff = true
} else if (preparedForLiftOff){
    console.log("Mass accetable!")
    preparedForLiftOff = false
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if (fuelTempCelsius < maximumFuelTemp && fuelTempCelsius > minimumFuelTemp){
    console.log("Temps acceptable!")
    preparedForLiftOff = true
} else{
    console.log("Temps unacceptable!")
    preparedForLiftOff = false
}

// add logic below to verify the fuel level is at 100%

if (fuelLevel === "100%"){
    console.log("Fuel at 100%")
    preparedForLiftOff = true
} else{
    console.log("Fuel not full")
    preparedForLiftOff = false
}

// add logic below to verify the weather status is clear
if (weatherStatus === "clear"){
    console.log("Weather clear!")
    preparedForLiftOff = true
} else {
    console.log("Weather not clear!")
    preparedForLiftOff = false
}

// Verify shuttle launch can proceed based on above conditions

if ( preparedForLiftOff === ) {
    console.log("Cleared for takeoff!")
    preparedForLiftOff = true
} else {
    console.log("Launch Scrubbed!")
    preparedForLiftOff = false
}