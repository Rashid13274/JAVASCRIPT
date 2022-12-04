let fruits=['mango', 'apple','banan', 'orange'];
fruits.forEach(function(items, index){
    console.log(`${items}-->${index}`);
})
/**
 * splice():- Array method  changes the content of an array by removing  or replacing
 * existing element and/or adding  new element in place. 
 * splice(start);
 * splice(start, deleteCount);
 * splice(start, deleteCount,items)
 * splice(start, deleteCount, item1,item2,itemN);
 */
const months=['jan','march','april','may','june'];
months.splice(1,0,'feb');
// insert at index at 1;
months.splice(1,0,'may')
months.splice(4);
months.splice(2);
console.log(months);
let  number=[1,3,5,6,7];
 console.log(number.slice(2,3));
 const array1=[1,2,3,4,5];
 // pass a function to  a map
 const map1= array1.map(x=>x*2)
 console.log(map1);
//  [2, 4, 6, 8, 10]
const array2=[1,4,9];
let roots=array2.map(function(num){
    return Math.sqrt(num);
})
console.log(roots);
// map(function callbackfn(element, index, array){....});

