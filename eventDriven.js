// const button = document.querySelector('button');
// // const abortController = new AbortController();
// button.addEventListener('click',onClick);

// // document.body.addEventListener('click','onclick',true);
// function onClick(event){
//     // event.stopPropagation();
//     console.log(event.target);
//     console.log(this);
// button.removeEventListener('click',onClick);
// }
// window.addEventListener('keypress',event =>{
//     console.log(event.code);
// }) //display keys
// button.addEventListener('dragstart', event =>{
//     console.log(event);
// })
// const scrollable = document.getElementById('scrollable');

// scrollable.addEventListener('mousemove', event =>{
//     console.log(event.pageX,event.pageY);
// })
// scrollable.addEventListener('drop', event =>{
//     scrollable.prepend(button);
// })
scrollable.addEventListener('dragover', event =>{
         event.preventDefault();
    })