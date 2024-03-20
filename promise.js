// const promise = new promise((resolve, reject) => {
//   setTimeout(() => resolve(2), 1000);
// });

// const promise = Promise.resolve(3);
// console.log(promise);

// promise.then(value => console.log(value), error => 'Oh no' + error);
// promise.then(console.log).catch(error => console.log('Oh No' + error));
// promise
// .then(value => value * 2)
// .then(value => value + 1)
// .then(value => {
//     throw new Error('Something went wrong');
// })

// .catch(error =>{ 
//     console.log('Oh No' + error);
//     return 10;
// })
// .then(console.log)
// .finally(() => console.log('Done'));
// const promise = Promise.resolve(3);

// Promise.all([
//     new Promise((res, rej) => setTimeout(() => rej(3), 3000)),
//     new Promise((res, rej) => setTimeout(() => rej(2), 2000)),
//     new Promise((res, rej) => setTimeout(() => rej(1), 1000))
// ]).then(console.log).catch(() => console.log('All rejected'));

async function tester() {  //asyncrynous function
    
        const value = await new Promise((res, rej) => {
           setTimeout(() => res(3), 1000);
        });
        console.log(value);
     
}

console.log(tester());