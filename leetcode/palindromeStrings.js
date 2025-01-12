//* Given a string s and an integer k, return true if you can use all the characters in s to construct k palindrome strings or false otherwise.

let s = "annabelle is a doctor";

function oddCount(str) {
    let letters = new Set();
    for (let char in str) {
        letters.add(char);
    }
    // let letter_count;
    console.log(letters);
}

oddCount(s);