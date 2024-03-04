const arr = [1,2,3,1];
console.log(arr.length);
arr[2] = 10;
// arr.length = 10;
// // arr.fill(0);
console.log(arr);
console.log(arr.includes(10))
console.log(arr.indexOf(10))
console.log(arr.lastIndexOf(1))
arr.push(5,6,9);
console.log(arr);
arr.pop();
console.log(arr);
