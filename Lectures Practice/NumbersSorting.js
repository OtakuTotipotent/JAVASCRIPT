
const numbers = [33, 2, 8];

numbers.sort(); //* sorts in lexicographic order i.e considers everything as string
console.log(numbers[1]);


numbers.sort((n1, n2) => {
    return n1 - n2;
}); //! force change in behavior of sort() method
console.log(numbers[1]);


numbers.sort((a, b) => {
    if (a > b) return 1;
    else
        return -1;
}) //! Ascending order
console.log(numbers);


numbers.sort((a, b) => {
    if (a > b) return -1;
    else
        return 1;
}) //! Descending order

console.log(numbers);
