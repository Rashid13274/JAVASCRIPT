
/* 
        FOR OF AND FOR IN LOOP IS USED  TO 
        PULL OUT THE VALUE 
        ONE IS USED FOR ARRAY AND ANOTHER IS OBJECT;
*/

const names =['md', 'rashid', 'rahman'];
for(const n of names){
    console.log(names);
}
const  symboles ={
    name:'md rashid',
    age:21,
    distrist:'madhubani'
}
for(const n in symboles){
    console.log(symboles[n]);




    
const names =['md', 'rashid', 'rahman'];
for(const n of names){
    console.log(names);}
    //(3) ["md", "rashid", "rahman"]
    let a =[1,3,4,5];
    for(const b of a){
        console.log(a);
        //(4) [1, 3, 4, 5]
    }

    let obj={
        name:'md',
        village:'deodha',
        state:'bihar'
    }
    for(const m in obj){
        console.log(obj[m]);
        //md deodha bihar
    };

    let arr=[1,2,3,4,5];
    arr.forEach((item,index,arr)=>{
        console.log('a['+index+']+ = ' + item);
    });
      a[0]+ = 1
      a[1]+ = 2
      a[2]+ = 3
      a[3]+ = 4
      a[4]+ = 5

      let sum=0;
    arr.forEach((item)=>{
        sum+=item;
    });
    console.log(sum);
    //15
     arr.forEach((item)=>{
    console.log(item);
    });
    
    1
    2
    3
    4
    5 


//FOR LOOP TO ACESSING ARRAY 

const  arr=['bihar','delhi', 'up,','madhyapradesh',12];
for(let i=1; i<arr.length;i++)
{
    if( typeof arr[i] !=='string') continue;
        console.log(arr[i]);}
}


//  FOR EACH  IS USED ALWAYS WITH ARRAY TO LOOP THROUGH

const arr=['mon','tue','wed','thr','fri','sat'];
const fun =function(){
    console.log('weeks days');
}
// we can write this code this way as wellby putting function in parameters;

const arr=['mon','tue','wed','thr','fri','sat'];

arr.forEach(function(item, index){
console.log(`${index +1} days are${item}`);
});


// break   is used to break  the loop or current statement 

// while continues  is used to break the loop at specific condition and then continue the statement 




 
// CALLSTACK :
/* 
        IN  the stack first main function then other function 
        pushed and get execute and  eliminate  then other
        added execute amd terminate  it continues.
 */
  function hello (){
     console.log('welcome');
 }
 function helo (){
     console.log('welcome home');
 }
 function helloo (){
     hello ();
      helo ();
      
 RECURCIVE FUNCTION
      function rashid(num){
           if(num===1) return 1;
           return num + rashid(num-1)
      }
      rashid(3);
      function bubbleShort(arr){
          for(let i=arr.length;i<0;i--){
              for(let j=0;j=i-1;j++){
                  if(arr[j]<arr[j+1]){
                  
                  //swap
                
                  let temp = arr[j];
                  arr[j]=arr[j+1];
                  arr[j+1]=temp;
                 
          }
          }
           console.log('one loop passed');
          }
          return arr;
      }
      bubbleShort([8,6,2,9,4,5]);

// SOME  IN JAVASCRPT TAKE  CALLBACK FN.

const arr=[1,3,4,5,6,7];
const res= arr.some(val);
function val(item) {
    return item>5;
}
console.log(res);
EX:2 
const arr=[
    {name:"md rashid",
    age: 23},
    {name:"md kasif",
    age: 24},
    {name:"md sakib",
    age: 26}
]

const res=arr.some(isAdult);
function isAdult(person) {
    return person.age>65;
    
}
console.log(res); 

