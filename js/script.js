// console.log('hello friend!');
// //alert('Attack');
// var test;
// console.log(test);
// let abc = "123";
// const bcd = "trueLaLa";

// abc = abc;
// console.log(abc);
// let a = typeof true;
// console.log(a);
// let greetings = `${bcd} petya ${abc}`;
// console.log(greetings);
//const a = 3456;
//const b = ('gfd');
//console.log(typeof (a + b));
// const v = -'234';
// const n = - 23;
//console.log(+ v + n);

// let b = 0;
// console.log(String(b));
// console.log(Boolean(b));

// if (v < n) {

//     console.log('Right');


// } else if (n < v) { console.log('not'); }


// let kuku = (v > n) ? console.log(v + ' - bigger than' + n) : console.log(v + 'lower than' + n)

// let time = 10;


// switch (time) {
//     case 8:
//         console.log('cool!');
//         break;
//     case 7:
//         console.log('early!');
//         break;
//     default:
//         console.log('unknown');

// }

let name = "Vasya";
let age = 25;
let isMarriage = false;
let occupation = 'developer';
let city = 'Kyiv';
//Object
let UserVasya = {
    name: "Vasya",
    age: 25,
    isMarriage: false,
    occupation: 'developer',
    city: 'Kyiv',
    sayHello: function () {


        return `hello! ${this.name}! Are you from ${this.city}?`;

    },

    howOld: function () {
        let mesage = `${this.name} is ${this.age} years old!`
        return mesage;

    }

};
//console.log(UserVasya);

// function sayHello(Username = "EmptyName", UserCity = "EmtyCity") {

//     console.log(`hello! ${Username}! Are you from ${UserCity}?`);
//     return 1;

// };

let x = 0;
x = UserVasya.sayHello();
//console.log(x);
//console.log(UserVasya.howOld());

//Constructors old method
function UserCreate(name, age, isMarriage, occupation, city = "from Ukraine") {
    this.name = name;
    this.age = age;
    this.isMarriage = isMarriage;
    this.occupation = occupation;
    this.city = city;
    this.sayHello = function () {

        return `hello! ${this.name}! Are you from ${this.city}?`;

    };
    this.howOld = function () {

        let mesage = `${this.name} is ${this.age} years old!`
        return mesage;
    }


}


const George = new UserCreate("George", 22, false, "trainee");
//console.log(George);
//Constructor Class
class UserCreate2 {
    constructor(name, age, isMarriage, occupation, city = "from Ukraine") {
        this.name = name;
        this.age = age;
        this.isMarriage = isMarriage;
        this.occupation = occupation;
        this.city = city;

    }
    sayHello() {

        return `hello! ${this.name}! Are you from ${this.city}?`;

    };
    howOld() {

        let mesage = `${this.name} is ${this.age} years old!`
        return mesage;
    };
    [Symbol.toPrimitive](hint) {
        // alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.age;
    }


}

const Mike = new UserCreate2("Mike", 18, true, "student", "Denver");
//console.log(Mike.sayHello());
//alert(Mike);


//let sum = String(Mike) + String(George);




console.log(document);


block1 = document.getElementsByClassName('block_1');
console.log(block1);
var listItem = document.getElementById('listItemId');
console.log(listItem);
listItem.innerHTML = 'change some words';
console.log(listItem.outerHTML);

//New method es6
let title = document.querySelector('h1');
let paragraph = document.querySelector('p');
let liLast = document.querySelector('li:last-child');
console.log(title);
title.textContent = 'New possibilities!';
paragraph.textContent = 'New Something';
liLast.style.backgroundColor = '#7809';
document.querySelector('.block_3').style.color = 'tomato';
let allListItems = document.querySelectorAll('li');
console.log(allListItems);
let b = "3";
allListItems.forEach(function (value, index) {


    value.style.fontSize = b + "1px";
    if (index == allListItems.length - 2) {

        value.style.backgroundColor = "green";

    }

})
//-------------------------------test block


function testBlock() {
    let input = document.querySelector('.test_input');
    let block = document.querySelector('.test_block');
    let btn = document.querySelector('.test_btn');


    btn.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(event);

        block.textContent = input.value;
        input.value = '';
    })
}

testBlock();

document.querySelector('.google_link').onclick = function (e) {
    e.preventDefault();

    alert('Ok Google!');

}








// let ob = { name: "Suzie", age: 23 };

// let arr = ["Apple", "Banana", "Lemon",];
// arr[0] = "Maraquia";
// arr[3] = "Apelsin";
// arr[4] = true;
// console.log(arr.pop());
// arr.push("truelala!", false, 111);
// //arr[arr.length] = "___";
// arr.shift();
// arr.unshift(ob, "Toto", 234567.66);
// let removed = arr.splice(0, 1, "Let`s", NaN, George);
// console.log(`Sorry, but deleted: ${removed}`);
// arr.splice(-1, 0, 9, 9);
// console.log(arr);
// let copy = arr.slice(1, 7);
// console.log(copy);
// let newArray = arr.concat([12, "dodo", UserVasya, 'q']);
// console.log(newArray);
// // arr.length = 0;
// // console.log(arr);
// newArray.forEach(function (item, index, array) {

//     if (item !== 9) {


//         console.log(`${item} - ${typeof (item)} - ${"doog"}`);


//     }

// });

// let nash = newArray.filter(item => typeof (item) == "number")

// //console.log(nash);

// //const fuf = nash.map((num) => String(num * 2));

// const fuf = newArray.sort((a, b) => a > b ? 1 : -1);
// fuf.reverse();
// console.log(fuf);
// let str = newArray.join('<>');
// console.log(str);

