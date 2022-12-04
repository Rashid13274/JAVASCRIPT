// document.querySelector('.get-jokes').addEventListener('click',loadJokes);
// function loadJokes(e){
//     // console.log('get jokes');
//     const number=document.querySelector('input [type="number"]').value;
//      const xhr =new XMLHttpRequest();
//      xhr.open('GET',`https://api.chucknorris.io/jokes/random/${number}`, true);
//      xhr.onload=function(){
//          if(this.status==200){
//              const response =this.responseText;
//               console.log(response)
//          }
//      }
//      xhr.send();
//      e.preventDefault();
// }


// PRACTICE:-
// function sayHello(){
//     return "Hello " + this.name;
//   }
          
//   var obj = {name: "Sandy"};
          
function extractingArgs(...args){
  return args[1];
}

// extractingArgs(8,9,1); // Returns 9

function addAllArgs(...args){
  let sumOfArgs = 0;
  let i = 0;
  while(i < args.length){
    sumOfArgs += args[i];
    i++;
  }
  return sumOfArgs;
}

addAllArgs(6, 5, 7, 99); // Returns 117
addAllArgs(1, 3, 4); // Returns 8

