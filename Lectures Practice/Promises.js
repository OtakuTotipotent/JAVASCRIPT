const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        let anError = false; // set anError = true for testing purpose
        if (anError) {
            reject('An error occurred during Promise');
        }
        else {
            resolve('Success: Promise fulfilled');
        }
    }, 1000);
});

// Method 1st to consume a promise
promiseOne.then((successStatement) => {
    console.log(successStatement);
}).catch((errorStatement) => {
    console.log(errorStatement);
});

// Method 2nd to consume a promise
async function letsGetJobDone() {
    try {
        const response = await promiseOne; // const response = fetch("www.github/afnanirshad/...");
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
letsGetJobDone();
