//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
  constructor(name, mass, scores) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }
  addScore(newScore) {
    this.scores.push(newScore);
  }

  average() {
    let sum = 0;
    for (let i = 0; i < this.scores.length; i++) {
      sum += this.scores[i];
    }
    let mean = sum / this.scores.length;
    return Math.round(mean * 10) / 10;
  }

  status() {
    let scoreAverage = this.average();
    if (scoreAverage < 70) {
      return "Rejected";
    } else if (scoreAverage < 80) {
      return "Probationary";
    } else if (scoreAverage < 90) {
      return "Reserve";
    } else {
      return "Accepted";
    }
  }
}
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

const bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
const merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
const gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

console.log(bubbaBear);
console.log(merryMaltese);
console.log(gladGator);

bubbaBear.addScore(83);
console.log(bubbaBear.scores);

console.log(bubbaBear.average());
console.log(bubbaBear.status());
console.log(merryMaltese.status());
console.log(gladGator.status());

let j = 0
while (gladGator.status() === "Probationary") {
    gladGator.addScore(100)
    j++
}
console.log(`${gladGator.name} needs ${j} perfect tests to reach Reserve status.`)

let k = 0;
while (gladGator.status() === "Reserve") {
    gladGator.addScore(100);
    k++
}
console.log(`${gladGator.name} needs ${j + k} perfect tests to reach Accepted status.`)


console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}`);
console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.average()}% and has a status of ${merryMaltese.status()}`);
console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}`);
