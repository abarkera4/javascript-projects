const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let newStr = str.slice(0,3)

console.log(str.slice(3, str.length) + newStr)


//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`${str.slice(3, str.length) + newStr} is pig latin for ${str}.`)

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let num = input.question("How many characters? ")
newStr = str.slice(0,num)

console.log(num)

if (num > str.length - 1) {
    console.log("Too many characters.")
} else if (isNaN(num)){
    console.log("This is not a number!")
} else{
    console.log(`${str.slice(num, str.length) + newStr} is pig latin for ${str}.`)
}
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
