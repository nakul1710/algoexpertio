// const arr = [1,2,3,4];
// const doubled = arr.map(function doubled(num) {
//     return num * 2;
// })
// const doubled = arr.map((num) => num*2);
// const double = num => num * 2;
// const doubled = arr.map(double);

// console.log(doubled);
// const first = arr[0];
// const second = arr[1];
// const [first, second] = arri;
// console.log(first, second);

// const person = {
//     name: 'conner',
//     website: 'FrontendExpert',
//     company: 'foo'
// }
// const {name: firstName,  ... rest} = person;
// console.log(firstName);
// console.log(rest);
// function printName({name}) {
//     console.log(name);
// }

// printName(person);
// function add(x,y){
//     console.log(x+y);
// }
// add(arr[0],arr[1]);
// const arr2 = [5,6,7];
// const combined = [0,...arr,4,5, ...arr2];
// console.log(combined);

// function logPr(x,...rest) {
// console.log(x);
// console.log(rest);
// }
// logPr(1,2,3,4)
// const name = 'Conner';
// console.log('Hello ' + name);
// console.log('Hello ${name}');

// const name = 'Conner';
// const defaultName = name ?? 'Default Name';

// const person = {
//     company: {
//         website:'AlgoExpert.io'
//     }
// }

// console.log(person?.company?.website);

const shouldRunCode = true;

function logWorld() {
    console.log('Hello World');
}

//    if (shouldRunCode) {
//     logWorld();
//    }
   shouldRunCode && logWorld();