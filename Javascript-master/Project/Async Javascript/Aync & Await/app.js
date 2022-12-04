//example:1

// async function func() {

//     const promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve('helle india'),1000);
//     })
//      const err=false;
//      if(!err){
//          const res=await promise;
//          return res;
//      }else{
//          await Promise.reject(new Error('something gone wrong'));
//      }
//     const res=await promise; // wait until promise  is resolved
//     return res;
// }
// async return promise and promise return response;
// wait  for the promise to be resolved until it actually sends the  resonse
// func()
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err));

// ////////////////////////////////////////////////////////
// example:2
async function getuser() {
    // await  response  of the fetch call
    const resonse =await fetch('https://jsonplaceholder.typicode.com/users');
    // only proceed  once it's resolved
    const data=await resonse.json();
    // only prceed once second promise is resolved
     return data;
    
}
getuser().then(users=>console.log(users));
//here we're getting data from api like get request.
////////////////////////////////////////////////////////////