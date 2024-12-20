const afnan = {
    age: '21',
    genre: 'human',
    mode: 'student',
    religion: 'islam',
    location: 'pakistan',
};

const faizan = {
    age: '22',
    genre: 'human',
    mode: 'student',
    label: 'layyan', // this attribute is not present in afnan
    // religion: 'islam',
    location: 'pakistan',
};

console.log(checkEquality(afnan, faizan));

//! 2nd Method
function checkEquality(first, second) {                                 //* better method
    if (Object.keys(first).length == Object.keys(second).length) {
        for (let i = 0; i < Object.keys(first).length; i++) {
            if (Object.entries(first)[i][0] !== Object.entries(second)[i][0] || Object.entries(first)[i][1] !== Object.entries(second)[i][1]) {
                return false; // if any key OR any value mismatch
            }
        }
        return true; // if all values & keys match
    }
    return false; // if length is not equal
}

//! 1st Method
// function checkEquality(first, second) {
//     if (Object.keys(first).length == Object.keys(second).length) {
//         for (const f_key in first) {
//             if (!Object.keys(second).includes(f_key)) {
//                 return false; // if any key is not present in second
//             }
//         }
//         for (const key in first) {
//             if (!Object.values(second).includes(first[key])) {
//                 return false; // if any value is not matched
//             }
//         }
//         return true; // if all keys & values are matched
//     }
//     return false; // if length is not equal
// }