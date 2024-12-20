
// sorting an array of objects
const people = [
    {
        name: 'Afnan',
        age: 23
    },
    {
        name: 'Zohaib',
        age: 22
    },
    {
        name: 'Faizan',
        age: 24
    }
];
console.log(people); // original array



people.sort((a, b) => {
    let nameA = typeof a.name === 'string' ? a.name.toLowerCase().trim() : ''; // to ensure the name is a string
    let nameB = typeof b.name === 'string' ? b.name.toLowerCase().trim() : '';
    return nameA.localeCompare(nameB);
});
console.log(people); // sorted array by name (string)




people.sort((obj1, obj2) => {
    return obj1.age - obj2.age;
});

console.log(people); // sorted array by age (int)
