//strings
let str = 'a,b,c,d';
console.log(str + 'efgh');
console.log(str < 'efg');
console.log("hello\nworld ");
console.log('Result: ${10 + 10}')
console.log('this os is\
         amazing');
console.log(str.charAt(1));
console.log(str.includes('c'));
console.log(str.startsWith('a'));
console.log(str.endsWith('d'));
console.log(str.toUpperCase().toLowerCase());
console.log(str.substr(1));
console.log(str.slice(1,3))
console.log(str.padStart(6,'$'))
console.log(str.padEnd(6,'$'))
console.log(str.trimEnd());
console.log(str.trimStart());
console.log(str.split(','))

//Objects

const person = {
    name: 'nakul',
    course: 'frontend',
}
console.log(person);
console.log( typeof JSON.stringify(person));
console.log(typeof JSON.parse(JSON.stringify(person)))
console.log(person.course);
person.course = 'backend';
console.log(person.course);

const map = new Map();
map.set(456, 'hello');
map.set(123, 'world');
console.log(map.get(123))
console.log(map.size);

const set = new Set ();
set.add('Hello');
set.add('World');
set.delete('Hello')
console.log(set.has('Hello'))
console.log(set);


//Array
 let arr = [1,2,3,4,5];
 arr.push(6);
 console.log(arr.length);
 console.log(arr);
 console.log(typeof arr);

//functions

function addTwo(num = -1) {
 return num + 2;
}
console.log(addTwo());

function callFunc(func, param){
  console.log(func(param))
}
callFunc(addTwo, 13);
console.log(typeof addTwo);

//looping
for(let i=0; i<4; i++){
    console.log(i);
    if(i == 1){
        break;
    }
} 


let i = 0;
while(i<4){
    console.log(i);
    i++
}

const myNum = 2;
switch(myNum){
    case 1:
        console.log('It was 1')
       
    case 2:
        console.log('It was 2')
        break;
    default: 
       console.log('Default')
}

const myRun = 10;
console.log(myRun > 5 ? 'Greater than 5': 'less than 5')

// this is the single line comment
/* this is a
double line
comment*/

console.log('value');
console.error('error message');
console.debug('debug message');
console.table([[1,2],['Hello','World']]);


console.count('key');
console.count('key');
console.countReset('key');
console.count('key');

console.time('key');
for(let i=0; i < 10000; i++){}
console.timeEnd('key');

console.time();
for(let i=0; i < 10000; i++){}
console.timeLog();


function foo() {
    'use strit'
    x = 5;
}

foo();
// variables and scooping
function test() {

const arr = [1,2,3]
arr.push(4);
console.log(arr);
  
  
}
test()
