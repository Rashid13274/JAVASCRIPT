// arr.splice(start[, deleteCount, elem1, ..., elemN])
// It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place.
//  Returns the array of removed elements.
// let arr = ["I", "study", "JavaScript", 'java', 'web development'];
// arr.splice(1,1);
// arr.splice(1,2,'mySql', 'mongodb','node.JS')
// arr.slice(0, 2);
// console.log(arr);



// let arr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
// arr.splice(-1, 0, 3, 4);

// console.log(arr) // 1,2,3,4,5
// ------------------------------------slice()-----------------------------------------------------//

/* The syntax is:

arr.slice([start], [end])
It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.

It’s similar to a string method str.slice, but instead of substrings it makes subarrays.

For instance:
 */

/* 
let arr=[1,2,3,4,5];
let val = arr.slice(1,3); 
val =arr.slice(-1); // [5]; 
val =arr.slice(-2); //[ 4, 5 ] (copy from -2 till the end)

console.log(val); */


//---------------------------------------------concat()------------------------------------------------//
/* 
concat
The method arr.concat creates a new array that
includes values from other arrays and additional items

The syntax is:

arr.concat(arg1, arg2...)
 */
// EX:-
/*
 let arr = [1, 2];
let val = arr.concat([3,4]);
val =arr.concat([5,6], [7,8]); //[ 1, 2, 5, 6, 7, 8 ]
val =arr.concat([9,10],11,12);// [ 1, 2, 9, 10, 11, 12 ]
console.log(val);
 */

/* 

let arr = [1, 2];
let arrayLike = {
  0: "something",
  length: 1
};
console.log( arr.concat(arrayLike) ); // 1,2,[object Object] // [ 1, 2, { '0': 'something', length: 1 } ]

 */

/* But if an array-like object has a special Symbol.isConcatSpreadable property,
 then it’s treated as an array by concat: its elements are added instead: */

/* 
let arr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

console.log( arr.concat(arrayLike) );  // [ 1, 2, 'something', 'else' ]

 */

//--------- SEARCHING IN AN ARRY USNIG find(), findIndex(), findLastIndex()------------------//

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"}
  ];
   

// let val = users.find((item=>item.id==5))
// console.log(val.name); // john

// Find the index of the first John
// console.log(users.findIndex(user => user.name == 'John')); // 0

//-----------------------------------filter()---------------------------------------------------//
// filter returns an array of all matching elements:

/* 
 let SomeUsers= users.filter((item=>item.id<3));
 console.log(SomeUsers); //  { id: 1, name: 'John' }, { id: 2, name: 'Pete' } ]
 */

//------------------------------------------ map()-----------------------------------------------//
/* The map() method creates a new array populated with the results 
of calling a provided function on every element in the calling array. */

/* 
const array1 = [1, 4, 9, 16];
let val = array1.map((x=>x*2));
console.log(val); // [ 2, 8, 18, 32 ]

 */

//-------------------------------------sort()---------------------------------------------------//
//arr itself is modified.

/* 
let arr=[5,6,7,81,1,2,3];

let val=arr.sort((a,b)=>a-b);
// let countries = ['Österreich', 'Andorra', 'Vietnam', 'India'];f
let words =['watch', 'random', 'apple', 'ape', 'ball', 'bollyball', 'zebra'];
val=arr.sort((a,b)=>b-a);  // [81, 7, 6, 5,3, 2, 1]
// val =countries.sort((a,b)=> a>b ? 1 :-1);
val = words.sort((a,b)=>a>b ? 1 : -1); //[ 'ape', 'apple', 'ball', 'bollyball', 'random', 'watch', 'zebra' ]
val = words.sort((a,b)=>a<b ? 1 : -1); //[ 'zebra', 'watch', 'random', 'bollyball', 'ball', 'apple', 'ape' ]

console.log(val);

 */

//--------------------split()---------------------------------------------------//
let sentense='Today, is, such,  a, wonderful, day';
let val=sentense.split(' ');
let vall=val.join();
console.log(vall);


