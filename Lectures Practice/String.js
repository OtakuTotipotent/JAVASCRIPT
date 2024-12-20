

const fruits = 'Banana, Apple, Mango, Water Mellon, Orange, Strawberry, Mango & Peaches are fruits';

// console.log(typeof fruits); //? prints the type of fruits

// console.log(fruits.length); //? length of the string: fruits

// console.log(fruits.trim()); //? removes white spaces

// console.log(fruits.split(',')); //? converts into array: using specific character

// console.log(fruits.split(',').join()); //? converts an array to the string

// console.log(fruits.replace(',', '+')); //? only modifies the 1st occurrence

// console.log(fruits.replaceAll(',', '+')); //? modifies all occurrences in the string

// console.log(fruits.toLowerCase()); //? to lower case

// console.log(fruits.toUpperCase()); //? to upper case

// console.log(fruits.match(/mango/gi)); //* returns array of matches based on RegEx, g: global, i: case-insensitive

// const searchItems = fruits.matchAll(/mango/gi); // returns an iterator of all matches: returns objects, //* RegEx for case-insensitive OR fruits.matchAll('Mango') will give the results being case sensitive
//* console.log(...searchItems);
//* console.log(typeof searchItems);

// console.log(fruits.indexOf('Mango')); //? returns 1st occurrence

// console.log(fruits.lastIndexOf('Mango')); // returns the last occurrence

// console.log(fruits.search(/manGO/i)); // returns 1st occurrence without case sensing: used RegEx, the regular expression

// console.log(fruits.includes('Mango')); // returns true/false on matching, case sensitive

//#region
// if (fruits.startsWith('banana')) {
//     console.log("Starts with Banana");
// } else {
//     if (fruits.endsWith('Banana')) {
//         console.log("Actually it Ended with Banana, not \"Started\"");
//     }
//     else {
//         console.log('Starting with Banana is not necessary\n : even it doesn\'t end with Banana');
//     }
// }
//#endregion

// for (let i = 65; i < 91; i++) { // printing the Capital Alphabets
//     console.log(String.fromCharCode(i)); //? integer to char conversion
// }

// for (let i = 97; i < 123; i++) { // printing the Small Alphabets
//     console.log(String.fromCharCode(i));
// }

//#region   : //? finding no. of vowels in string
// let vowels = 0;
// for (let ch of fruits) {
//     if ('aeiou'.includes(ch.toLowerCase()))
//         vowels++;
// }
// console.log(`String contains ${vowels} vowels`);
//#endregion

//#region  : //? checking if string contains all vowels in it
// const checkVowels = (givenString) => {
//     const vowels = 'aeiou';
//     for (vow of vowels) {
//         if (!givenString.includes(vow)) // returns false if any of the vowels is absent & vice versa
//             return false;
//     }
//     return true;
// }
// console.log(checkVowels(fruits.toLowerCase()));
//#endregion

//#region : //? checking if the string is PANGRAM or not : pangram contains every letter of alphabet in it
// const fruits = 'A Quick brown fox jumps over the lazy dog';
// console.log(fruits, fruits.length);
// const firsThing = fruits.toLowerCase().split("");
// console.log(firsThing);
// const secondThing = firsThing.filter((element) => element.charCodeAt(0) > 96 && element.charCodeAt(0) < 123);
// console.log(secondThing);
// console.log(new Set(secondThing), new Set(secondThing).size); // prints the size of the set, set was used for removing duplicate items, set returns an object
// const thirdThing = ([...new Set(secondThing)]);
// console.log(thirdThing, thirdThing.length);
//#endregion

