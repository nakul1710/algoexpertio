// const myKey = 'key';
// const website = {
//     name: 'AlgoExoert',
//     rating: 5,
//     founder: ['namke','joker'],
//     sayHello() {
//         console.log()
//     },
//     get getRating() {
//         return this.rating;
//     },
//     set setRating(value){
//      this.rating = value;
//     }
// };
//  const name = 'Conner';
// const obj = {
//     name,
// };
// console.log(obj);


// function Website(name, rating, founder)  {
//    this.name = name;
//    this.rating = rating;
//    this.founder = founder;
// }

// const frontndExpert = new Website('FrontEnd','5','conner')
// console.log(frontndExpert);


// const id = Symbol('id');
// const id2 = Symbol('id');
// const id3 = Symbol('id3');
// const id4 = Symbol('id4');
// console.log(id3 == id4);
// // console.log(id == id2);

// const obj = {
//     [id]: 1234,
//     [id2]: 17,
//     id: 'hello',
//     id: 'World'
// };

// console.log(obj);

// console.log('name' in website);
// console.log(website.hasOwnProperty('name'));

// website.sayHello();
// console.log(website.getRating);
// website.setRating = 6;
// console.log(website.getRating)

const website = {
        name: 'AlgoExoert',
        rating: 5,
        founder: ['nakul','joker'],
        [Symbol.toPrimitive](hint) {
          if(hint === 'number'){
            return 5;
          } else if (hint === 'string') {
             return 'hello';
          }
          return 2;
        }
};
console.log(String(website));
console.log(Number(website));
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// Object.entries(obj).forEach(function(Value,Key){
//     console.log(Value,Key);
// })

// const obj = {
//     foo: 'bar',
//     hello: 'world',
//     __proto__:website
// };
// // const myObj = {
//     original: 123,
// }
// Object.assign(myObj, obj);
// console.log(myObj);
// Object.freeze(website);
// website.name = 'FrontendExpert';
// website.foo = 'bar';
// console.log(website);
// console.log(website.toString());
// website.toString = function() {
//     return 'Hello world';
// }
// console.log(website.toString);
// console.log(website.valueOf());
