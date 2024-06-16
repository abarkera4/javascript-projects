//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

console.log(language.slice(0,1)+language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.

console.log(language[language.indexOf("J")] + language[language.indexOf("S")]);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."

console.log(`The abbreviation for '${language}' is '${language[language.indexOf("J")] + language[language.indexOf("S")]}'.`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.

console.log(`We will soon learn ${language.slice(language.indexOf("J"), language.indexOf("S")).toUpperCase().toLowerCase()}.`);

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';

console.log(`${notTitleCase.slice(0,1).toUpperCase()}${notTitleCase.slice(notTitleCase.indexOf("i"), notTitleCase.indexOf("e") + 1)} ${notTitleCase.slice(notTitleCase.indexOf("c"), notTitleCase.indexOf("a")).toUpperCase()}${notTitleCase.slice(notTitleCase.indexOf("a"), notTitleCase.indexOf("s") + 2)}`);
