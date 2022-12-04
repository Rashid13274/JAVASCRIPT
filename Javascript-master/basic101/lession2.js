//Q1. write your own find and findIndex function
// (Hint: using for loop and if else)


// IT RETURN  SATISFIED VALUE ELSE UNDEFINED;

function find(arr,n){
    let  val=undefined;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==n){
       val=arr[i];
    }
}
return val;
}

// IT RETURN FIRST  INDEX OF  SATISFIED VALUE ELSE -1:-
function findindex(arr,n){
    let index=-1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>3){
            index=i;
            break;
        }
        
    }
    return index;
}

console.log(find([1,3,4,5,6,77,8],3));
console.log(findindex([1,3,4,5,6,77,8],3));



//=================================================================================================//





// Q2. const practiceData = [[14,21,23,64], [33,46,51,65]];
/**
 * requirement one
 * increment each number by one and output the resultant array using a higher order method and for loop
 * HINT: use nesting
 * solution =  [[15,22,24,65], [34,47,52,66]]
 * 
 * 
 * 
 * //requirement two
 * from the above array, create an array of array of even numbers using a higher order method and for loop
 * solution = [[14,64], [46]]
 */

//  Q.2(ii)





// ======================================================== //


 //Q3.   const array = [23 , 45,467, 789, 34, 989, 56]


    // problem => return an array such that numbers at odd index are multiplied by 2
    // and numbers at even index are multiplied by 10 :- 
    const array = [23 , 45,467, 789, 34, 989, 56];
    for(let i=0;i<array.length;i++){
        if(i%2===0){
            array[i]*=2;
        }else{
            array[i]*=10;
        }
    }
    console.log(array);


// ======================================================== //



//Q4.


 const carBrands = ["honda", "toyota", "maruti","tata"]
 const carModel = ["city", "innova", "alto", "nano"]
 
const carObject = {​​​​​​​​}​​​​​​​​
//  using a higher order method, create a carObject variable such that 
/**
 * 
 * {​​​​​​​​
 * honda:city,
 * toyota:innova,
 * maruti:alto,
 * tata:nano
 * }​​​​​​​​
 */
 
let result1=  Object.assign.apply({}, carBrands.map((v,i)=>({[v]:carModel[i]})));
console.log(result1); //{ honda: 'city', toyota: 'innova', maruti: 'alto', tata: 'nano' }
 
// ===================================================================================================//



 /**
  * 


//Q5. Flattening
 Use the reduce method 
 to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
 
 const arrays = [[1, 2, 3], [4, 5], [6]];
 // result =  [1, 2, 3, 4, 5, 6]
  * 
  * 
  */

 const arrays = [[1, 2, 3], [4, 5], [6]].reduce(
    function(previousValue, currentValue) {
      return previousValue.concat(currentValue)
    },
    []
  )
  console.log(arrays);//[ 1, 2, 3, 4, 5, 6 ]

// ======================================================== //


//Q6.
 /**
  * const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
  * return an array with all words converted into uppercase using higher order function
  * const countries = ['FINLAND', 'DENMARK', 'SWEDEN', 'NORWAY', 'ICELAND']
  * 
  * 
  * 
  */
 
  const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'].map((items)=>items.toUpperCase());
  console.log(countries);
// ======================================================== 