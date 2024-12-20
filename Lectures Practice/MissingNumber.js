
function missingNumber(num) {

    let ans = (num.length * (num.length + 1)) / 2; // formula via algorithm to find missing number in an array (array must miss only 1 number)

    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }

    return ans - sum;
}


const array = [3, 0, 1, 5, 2]

let mn = missingNumber(array)

console.log(`\nmissing number is ${mn} from the array : [${array}]\n`);
