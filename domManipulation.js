//document object Model
// const secondLi = document.getElementById('second-li');
// const FirstLi = document.querySelector('Li');
// console.log(secondLi);
// console.log(FirstLi);
const listItems = document.querySelectorAll('Li');
// console.log(listItems);
// Array.from(listItems).map(li => {
//     console.log(li);
// });
// console.log(document.getElementByClassName('list-item'));
// console.log(document.getElementByTagName('li'));
const listItem = document.querySelectorAll('li');
// listItems[0].style.color = 'red';
// listItem[0].style.backgroundColor = 'blue';
// listItem[0].value = 5;  // starts from 5 6 7 instead of  1 2 3
// listItem[0].setAttribute('class', ' big');
// listItem[0].classList.remove('blue');
listItem[0].classList.add('blue');
listItem[0].classList.toggle('big');
listItem[0].classList.toggle('big');
listItem[0].classList.toggle('big');
listItem[0].classList.toggle('big');//Alternately remove or add .

