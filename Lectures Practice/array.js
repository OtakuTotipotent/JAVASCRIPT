
const names = ['afnan', 'ali', 'hassan', 'hamza'];


console.log(names.splice(0, 1, 'Hussain')); //? returns the items that it deletes
console.log(names);

// console.log(names.push('Abbas')); //? returns the length of new array after adding new element
// console.log(names);

// console.log(names.pop()); //? returns the data of deleted element | deletes from last index
// console.log(names);

// console.log(names.shift()); //? returns the data of deleted element | deletes from start index
// console.log(names);

// console.log(names.unshift('Muhammad')); //? returns new length of array after adding new element
// console.log(names);


//! --------------------------------------------------------------------------------------------------

// F I L T E R       //* filter always returns value's arrays

const numbers = [0, 1, 2, 0, 5, 2, 7, 6, 8];
// console.log(numbers);

// const data = numbers.filter((value, index, arr) => {

//     return arr.indexOf(value) === index;

// });
// console.log(data);

// const squared = numbers.map((element) => {
//     return element * element;
// });
// console.log(`\nSquared Array : ${squared}\n\n`);

// const squaredEven = numbers.map((num) => {
//     if (num % 2 == 0 && num != 0)
//         return num * num;
// }).filter((num) => num != undefined);
// console.log(squaredEven);

// const sum = numbers.reduce((x, y) => {
//     return x + y;
// }, 0);
// console.log(sum);



//! String operations on 'names' variable
// console.log(names);

// const upperCase = names.map((element) => {
//     return element.toUpperCase();
// });                             //*  this will return all upper case
// console.log(upperCase);

// const capitalized = names.map((element) => {
//     let temp = element[0].toUpperCase(); // 1st letter to upper case
//     for (let i = 1; i < element.length; i++) {
//         temp += element[i]; // next letter being copied same as they are
//     }
//     return temp; // returns temp variable string being capitalized
// });
// console.log(capitalized);

// const mister = names.map((element) => {
//     return "Mr. " + element;
// })
// console.log(mister);

