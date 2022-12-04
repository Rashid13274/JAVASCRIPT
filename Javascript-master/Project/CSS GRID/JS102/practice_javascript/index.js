/* function func(){
    setTimeout(()=>{
        console.log(x);
        console.log(y);
   
    },3000);
}
let x=5;
let y=4;
func(); */


 /* function func2(){
     for(let i=0;i<3;i++){
         setTimeout(()=>{
             console.log(i);
         },2000);
     }
 }
 func2(); */


 //IIFE FUNCTION 
 /* (function(){
     setTimeout(()=>console.log(1),2000);
     console.log(2);
     setTimeout(()=>console.log(3),0);
     console.log(4);
 })();  //2,4,3,1 */

  /* let x={};
  let y={name:"ronney"};
  let z={names:"john"};
 x[y]={name:"vivek"};
 x[z]={noti:"akki"};
 console.log(x[y]);
//  {noti: "akki"}
let x={};
  let y={name:"ronney"};
  let z={name:"john"};
 x[y]={name:"vivek"};
 x[z]={name:"akki"};
 console.log(x[y]);
 // {name:"akki"}; 
 
 adding object as properties  of another  object should be done
 carefully.
 writing x[y]={name:"vivek"}, is same as writing x['object Object]={naem:"vivek"};

 while setting  a property  of an object , javascript  coercies  the parameter
 into a string .
 therefore  ,since  y is an  object .it will be  converted  to 'object Object'.
 both x[y] and x[z] are referencing  the same property.
 */

 /* function runFunc(){
     console.log("1"+1); //11
     console.log("A"-1); // Nan
     console.log(2+"-2"+"2"); //2-22
     console.log("hell"-"world"+78); //NaN
     console.log("Hello"+"78"); //Hello78
 }

runFunc(); */

 /* let a =0;
 let b=false;
 console.log((a==b)); true
 console.log((a===b));  false
 */


 /* var x=23;
 (function(){
     var x=43;
     (function random(){
         x++;
         console.log(x);
         var x=21;
     })();
 })(); NaN 

 Rewriting the random fn will give a  better idea about  the output:-
 funcion random(){
     var x; // x is hoisted;
     x++ // x is not a number since it is not initialized yet
     console.log(x);//output NaN
        x=21;// initialization of  x;
 }
 */


/* let hero={
    powerLvl:99,
    getpower(){
        return this.powerLvl;
    }
}
let getpower=hero.getpower;
let hero2={powerLvl:42};
console.log(getpower());
console.log(getpower.apply(hero2));

//undefined 
// 42 */


/* const a =function(){
    console.log(this);
    const b={
        func1:function(){
            console.log(this);
        }
    }
    const c={
        func2:()=>{
            console.log(this);
        }
    }
    b.func1();
    c.func2();
}
a(); */



/* function fun(){

    console.log(this);
}
fun();// it is just calling the windows object; */


/* const a ={
    fun(){
        console.log('ame');
    }
}
console.log(a); */


/* (function(a){
    return (function(){
        console.log(a);
        a=23;
    })();
})(45); 
Even though a is defined in the  outer function , due to  closeure the inner 
function  have access to it.
*/


/* 
// Each time bigfunc is called an array of size 700 is being created,
// modifeid the code so that  we don't create same array again again.
//old one:-
function bigFunc(element){
    let newArray=new Array(700).fill('md');
    return  newArray[element];
}
console.log(bigFunc(500)); // array is created 
console.log(bigFunc(383)); // array is created once again


//newOne code:
function bigFunc(){
    let newArray=new Array(700).fill('md');
    return (element) =>newArray[element];
}
let  newlyFunc=bigFunc();
newlyFunc(345);
// console.log(newlyFunc(330)); 
// console.log(newlyFunc(383)); // array is created once 
 */

/* 
IMPLEMENT A FUNCTION  THAT RETURNS AN UPDATED ARRAY WITH R RIGHT  ROTATIONS
ON AN ARRAY OF INTEGER A.
EXAMPLE
[2,3,4,5,7]
PERFORM THREE RIGHT ROTATIONS:
RETURN [6]
 */
function rotate(arr, rotation){
    if(rotation==0) return arr;  
    for(let i=0;i<rotation;i++){
        let element=arr.pop();
        arr.unshift(element);
    }
    return arr;
}
console.log(rotate([1,2,3,4],2));