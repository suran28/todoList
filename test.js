const { rejects } = require("assert");

const condition = true;
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve("성공");
    } else {
        reject("실패");
    }
});

promise
    .then((msg) => {
        console.log(msg);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("무조건");
    });