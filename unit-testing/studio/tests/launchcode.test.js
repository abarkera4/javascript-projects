// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("Organization value should be 'nonprofit'", function(){
    let organization = launchcode.organization;
    expect(organization).toBe("nonprofit");

  });

  test("executiveDirector value should be 'Jeff'", function(){
    let executiveDirector = launchcode.executiveDirector;
    expect(executiveDirector).toBe("Jeff");

  });

  test("percentageCoolEmployees value should be 100", function(){
    let percentageCoolEmployees = launchcode.percentageCoolEmployees;
    expect(percentageCoolEmployees).toBe(100);

  });

  test("programsOffered should be correct array", function(){

    let testValues = ["Web Development", "Data Analysis", "Liftoff"];
    let programsOffered = launchcode.programsOffered;

    for (let i = 0; i < testValues.length; i++) {
      expect(programsOffered[i]).toBe(testValues[i])
    }
    expect(programsOffered.length).toBe(3);

  });

  test("launchOutput tests", function(){
    const testArgs = [2, 3, 5, 6, 15, 10, 30, 7];
    const testReturns = ['Launch!', 'Code!', 'Rocks!', 'LaunchCode!', 'Code Rocks!', 'Launch Rocks! (CRASH!!!!)', 'LaunchCode Rocks!', "Rutabagas! That doesn't work."];
    let launchOutput = launchcode.launchOutput;

    for (let i = 0; i < testArgs.length; i++) {
      expect(launchOutput(testArgs[i])).toBe(testReturns[i])
    }
  });

  // Write your unit tests here!
});