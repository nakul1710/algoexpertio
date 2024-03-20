// const arr = [1,2,3,4,5];
// let i =0;
// for (const value of arr){
//     i++
//     console.log(value);
// }



// arr.forEach(function(value, index) {
//     console.log(value, index, this);
// },{num:1});


// const mappedArray = arr.map(function(value,index) {
//     return value + index + this.num;
// },{num:1})

// console.log(mappedArray)


// const filteredArray = arr.filter(function(value,index) {
//     return value > this.num;
// },{num:4})
// console.log(filteredArray )

// const foundValue = arr.find(function(value, index, array){
//     return value > this.num;
// },{num:1});

// console.log(foundValue);

// const allPass = arr.every(function(value, index, array){
//     return value > this.num;
// },{num:1});

// console.log(allPass);

// const somethingPasses = arr.some(function(value, index, array){
//     return value > this.num;
// },{num:1});

// console.log(somethingPasses);

// const sum = arr.reduce(function(accumalator,currValue){
//     return accumalator + currValue;
// },0);

// console.log(arr);
// console.log(sum);

// const diff = arr.reduceRight(function(accumalator,currValue){
//          return accumalator - currValue;
//      },0);
    
//      console.log(arr);
//      console.log(diff);

const arr = [5,7,3,0];
arr.sort(compareNumber);

function compareNumber(firstNumber, secondNumber){
    return firstNumber - secondNumber;

}
console.log(compareNumber())
console.log(arr);