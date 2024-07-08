// Code your orbitCircumference function here:

function orbitCircumference(radius){
  return Math.round(2 * Math.PI * radius);
}


// Code your missionDuration function here:

function missionDuration (orbitsCompleted, orbitRadius = 2000, orbitSpeed = 28000){
  let distance = (orbitsCompleted * orbitCircumference(orbitRadius));
  let time = Math.round((distance / orbitSpeed) * 100 ) / 100;
  console.log(`The mission will travel ${distance} km around the planet, and it will take ${time} hours to complete.`);

  return {distance, time};
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr) {
  let selectedIndices = [];

  while (selectedIndices.length < 3) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    if (!selectedIndices.includes(randomIndex)) {
      selectedIndices.push(randomIndex);
    }
  }

  return selectedIndices;
}
// Code your oxygenExpended function here:

 function oxygenExpended(object = crew[selectRandomEntry(crew)[0]], missionData){
  let o2Kg = Math.round(object.o2Used(missionData.time) * 1000) / 1000;

  return `${object.name} will perform the spacewalk, which will last ${missionData.time} hours and require ${o2Kg} kg of oxygen.`;
}

function selectO2EfficientCrew(arr){
  let mostEfficientCrewMember = arr[0];
  for (let i = 0; i < arr.length; i++){
    if (arr[i].o2Used(1) < mostEfficientCrewMember.o2Used(1)){
      mostEfficientCrewMember = arr[i];
    }
  }
  return mostEfficientCrewMember;
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };

 let crew = [candidateA,candidateC,candidateE];
 let selectedCrewMember = selectO2EfficientCrew(crew);
 let missionData = missionDuration(3);



 console.log(oxygenExpended(selectedCrewMember, missionData));