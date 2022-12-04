// javasript is single threading language    console.log("running some code");

// CALLBACM PROMISE , ASYNC-AWAIT;  

//  synchronous callback fn example:- means it runs line by line.

// const  sayName=(name,cb)=>{
//     console.log("running some code");
//     console.log("running some code");
//     console.log("running some code");
//     console.log("running some code");
//     console.log(`MY name is${name}`);

//     cb();

// };
// function callback() {
//     console.log('this ran at the end');
    
// }
// sayName('ED', callback);
// ////////////////////////////////////////////////////////

// sync example:2
/*
 
console.log('first');
setTimeout(()=>{
    console.log('from the callback fn');
},2000);
console.log('second');

output: 
first
second
from the callback fn
 */
////////////////////////////////////////////////////////

//Async-Await
async function getData() {
 const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('done'),3000);
 });
 // when it finishes added to result.
 let result=await promise;
 console.log(result);
    
} 
getData();

