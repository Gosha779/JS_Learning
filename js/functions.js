function printTable(a = "No data", b = "No data") {
    return `${a}   |   ${b}`;


}

console.log(printTable(300, "ku[[[u"));

const double = function (num) {

    let result = num * 2;
    return result;


}
console.log(double(55));

//arrow functions

let sum3 = (x1, x2, x3) => x1 + x2 + x3;
console.log(sum3(1, 6, 1));



let sum4 = (x1, x2, x3) => {
    let x = x1 + x2 + x3;
    return x;

}

const toDos = [
    {
        id: 1,
        text: "take a break",
        result: true
    },
    {
        id: 2,
        text: "Learn English",
        result: false
    },
    {
        id: 3,
        text: "Learn JS===",
        result: true
    }];

let totalLength = toDos.reduce((acumulator, currentItem) => {
    let textLen = currentItem.text.length;
    return acumulator + textLen;
}, 0);


console.log(totalLength);
