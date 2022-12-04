//1. TOP TEN JAVASCRIPT TRICKS
let a=10+'';
 a=9;
console.log(typeof a);
// strintg
console.log(typeof a)
// number

// 2.reduce the length of array directly
const arr=[1,2,3,4,5];
arr.length=3;
console.log(arr);
// only three data will be printed;

// 3. ternary operator
let age=30;
age>30?age>70
?console.log('he is older enough'):console.log("not enough"):
console.log('all the above is wrong');
// all the above is wrong

// 4.creating and empty array and  filling the  array
let user=Array(5).fill(5);
console.log(user);

// 5. removing the duplicate value from array
let newArr=['apple','mango','mango shake', 'apple juice','apple'];
const unique=Array.from(new Set(newArr));
console.log(unique);

// 6. Dynamic object;
let dynamic='hobbies';
const obj={
    name:'md rashid', 
    hobbies:'movies',
    [dynamic]:'sleep'
}
console.log(obj);
// {name: "md rashid", hobbies: "sleep"}

// 7. Array to object
let arr1=['apple','mango','hello'];
const userObject={...arr1};
console.log(userObject);
// {0: "apple", 1: "mango", 2: "hello"}


// 8. object to array
const newObj={
    name:'rashid',
    city:"jaynagar",
    state:'bihar'
}
const userArr=Object.values(newObj);
const userArrr=Object.keys(newObj);  // both return array.
console.log(userArr);
// (3) ["rashid", "jaynagar", "bihar"]

// EXCEPTION HANDLING


function calc(val) {
    if(typeof val==='number'){

        return val*val;
    }else{
        throw Error("this is not a number something else");
        // here whole progrem gets freeze if error encounter
    }
    
}
try {
    let res=calc(five)
    console.log(res);
    
} catch (error) {
    console.log('some type error occur');
    // in this section if error hit only this part shows error
    // and whole program  is not gonna freeze.
    
}
console.log('program execute... its not gonna freeze'); 

// remove the duplication from the array.
let arr2=[1,2,3,3,4,5,6,4,4,3,8,9];
let unique1=Array.from(new Set(arr2));
console.log(unique1);