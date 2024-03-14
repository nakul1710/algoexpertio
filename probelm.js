// const number = [1, 2, 3, 4, 5];
// let sum = 0;
// for (i = 0; i < number.length; i++) {
//   sum += number[i];
// }
// console.log("The sum is:", sum);

// probelm:2
// const array = [10,20,30,40,50];
// const SearchValue = 33;
// let found = false;
// for(i=0; i < array.length; i++){
//     if(array[i] === SearchValue){
//         found = true;
//         break;
//     }
//     else{
//         found = false;
//         console.log("not found");
//     }

// }
// console.log("The element is",found ? "found" : "not found ", "in the array.")

// Probelm3
// const array = [1,5,2,3,4];
// const removeValue = 5;
// for(i=0; i<array.length; i++){
//     if(array[i] === removeValue){
//         array.splice(i,1);
//         break;
//     }
// }
// console.log("The updated array:",array);
// const elements = [1, 2, 3, 4, 5];

// for (let i = 0; i < elements.length; i++) {
//   console.log(elements[i]);
// }
// const array = [2,5,9,1,7];
// let MaxNum = array[i];
// for(i=0; i < array.length; i++) {
//   if(MaxNum < array[i]){
//      MaxNum = array[i];
//      break;
//   }
// }
// console.log("The maximum number is :",MaxNum);
//reverse 
// const array = [1,3,9,4,0];
// let reverse;
// for(i=0; i<Math.floor(array.length/2); i++) {
//   const reverse = array[i];
//   array[i] = array[array.length - i -1];
//   array[array.length - i -1] = reverse;
// }
// console.log(array);
//palindrome
// const word = "racecar";
// let isPalindrome = true;
// for(i=0; i<Math.floor(word.length/2); i++){
//     if(word[i] !== Math.floor(word.length-i-1)){
//      isPalindrome = false;
//      break;
//     }
// }
// console.log("The word is",isPalindrome ? "a palindromic." : "not a palindromic");

//average
// const array = [1,2,3,4,5];
// let sum = 0;

// for(i=0; i<array.length; i++){
//  sum += array[i];
// }
// const average = sum/array.length;
// console.log(average);