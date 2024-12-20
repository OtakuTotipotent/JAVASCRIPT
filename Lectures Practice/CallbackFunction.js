
function doubler(num) { // CallBack Function
    return num * 2;
}

function evenDoubler(num, evenStatus, doubler) {
    if (evenStatus) {
        return doubler(num);
    }
}

function oddDoubleSquare(num, evenStatus, doubler) {
    if (!evenStatus) {
        return doubler(num) * num;
    }
}

function printValue(num) {
    if (num % 2 === 0) {
        console.log(evenDoubler(num, true, doubler));
    }
    else {
        console.log(oddDoubleSquare(num, false, doubler));
    }
}


//? main execution

let num1 = 12;
let num2 = 5;

printValue(num1);
printValue(num2);
