let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function () {return Math.floor(Math.random()*11)},
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function () {return Math.floor(Math.random()*11)},
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: function () {return Math.floor(Math.random()*11)},
};

let doggo = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move: function () {return Math.floor(Math.random()*11)},
};

let tardigrade = {
   name: "Almina",
   species: "tardigrade",
   mass: 0.0000000001,
   age: 1,
   move: function () {return Math.floor(Math.random()*11)},
};

let crew = [superChimpOne, salamander, superChimpTwo, doggo, tardigrade];

// After you have created the other object literals, add the astronautID property to each one.

let maxID = 10
let astronautID = 1;

for (let i = 0; i < crew.length; ++i) {
   do {
      astronautID = createRandomId();
   } while (idIsAlreadyUsed(astronautID))
   crew[i].astronautID = astronautID;
}

function createRandomId() {
   return Math.floor(Math.random() * maxID) + 1;
}

function idIsAlreadyUsed(id) {
   let used = false;
   for (let i = 0; i < crew.length; ++i) {
      if (crew[i].astronautID === astronautID) {
         used = true;
         break;
      }
   }
   return used;
}

 function crewReports(crewMember){
   console.log(`${crewMember.name} is a ${crewMember.species}. They are ${crewMember.age} years old and ${crewMember.mass} kilograms. Their ID is ${crewMember.astronautID}.`);
 }

 for (i = 0; i < crew.length; i++){
   crewReports(crew[i]);
 }

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!

function fitnessTest(candidates){
   let results = [], numSteps, turns;
   for (let i = 0; i < candidates.length; i++){
      numSteps = 0;
      turns = 0;
      while(numSteps < 20){
         numSteps += candidates[i].move()
         turns++
      }
      results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`)
   }
   return results;
}
console.log(fitnessTest(crew));