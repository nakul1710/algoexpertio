//document object Model
// const secondLi = document.getElementById('second-li');
// const FirstLi = document.querySelector('Li');
// console.log(secondLi);
// console.log(FirstLi);
// const listItems = document.querySelectorAll('li');
// console.log(listItems);
// Array.from(listItems).map(li => {
//     console.log(li);
// });
// console.log(document.getElementByClassName('list-item'));
// console.log(document.getElementByTagName('li'));
// const listItem = document.querySelectorAll('li');
// listItems[0].style.color = 'red';
// listItem[0].style.backgroundColor = 'blue';
// listItem[0].value = 5;  // starts from 5 6 7 instead of  1 2 3
// listItem[0].setAttribute('class', ' big');
// listItem[0].classList.remove('blue');
// listItem[0].classList.add('blue');
// listItem[0].classList.toggle('big');
// listItem[0].classList.toggle('big');
// listItem[0].classList.toggle('big');
// listItem[0].classList.toggle('big');//Alternately remove or add.




// const listItem = document.querySelectorAll('li');
// const text = document.createTextNode('Hello World');
// p.append(text);
// console.log(document.querySelector('ol').innerHTML);
// document.body.prepend(p);
// const parent = document.querySelector('ol');
// const fragment = documnet.createDocumnetFragment();
// // const listItemToAdd = [];
// for(i=0; i < 3; i++){
//  const li = document.createElement('li');
//  li.textContent = `list item with i=${i}`;
// //  listItemToAdd.push(li);
//  fragment.append(li);
// }
// // parent.append(...listItemToAdd);
// parent.append(fragment);

const listItem = document.querySelectorAll('li');
// console.log(window.innerHeight);
// console.log(listItem[0].style.fontsize);
// console.log(window.getComputedStyle(listItem[0]).fontSize);
// listItem[0].classList.add('big');
const scrollable = document.getElementById('scrollable');
console.log(scrollable.clientHeight);
console.log(scrollable.offsetHeight);
console.log(scrollable.scrollHeight);
console.log(scrollable.offsetTop);



