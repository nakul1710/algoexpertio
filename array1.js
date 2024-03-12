const arr = [1,2,3,1];
console.log(arr.length);
arr[2] = 10;
// arr.length = 10;
// // arr.fill(0);
console.log(arr);
console.log(arr.includes(10))
console.log(arr.indexOf(10))
console.log(arr.lastIndexOf(2))
arr.unshift(5,6,9);
console.log(arr);
arr.pop();
console.log(arr);
console.log(arr.shift());
console.log(arr);
console.log(Array.isArray(arr));
console.log(arr);
arr.splice(2,3);// arr.splice(index,no. of elements that we want to cut);
console.log(arr);
const newArr = arr.concat('hello','world');
console.log(newArr);
arr.reverse();
console.log(arr);



