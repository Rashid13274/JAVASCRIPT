 // class

class Person{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    married(){
        return ` to be ${this.firstname } must be agree`;
        }
        AnewFunction(newlastname){
            this.lastname=newlastname;
        }
}
const first_Instnce=new Person('md', 'rashid');
first_Instnce.AnewFunction('rahman');
console.log(first_Instnce);
class A{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    marry(){
        return `this is marry day, wish all guys`;
    }
    addNewFinction(newlastname){
        return this.lastname=newlastname;
    }
}

// // Subclass

// class Customer extends Person{
// constructor(firstname,lastname, membership, phoneno){
//     super(firstname,lastname)
//     this.membership=membership;
//     this.phoneno=phoneno;
// }
// first_Customer_Method(){
//     return 500;
// }
// }
// const clss_instnace=new Customer('rashid','deodha', 'standered', 121-211-112);
// // clss_instnace.married();
// console.log(clss_instnace.married());

// // getters or get :-

// /*  
//         the get syntax binds an object property to a 
//         function  that will be called when that property is looked up. 
//  */

// //  setters or set :-

// /* 
//         the set syntax binds an object propery to a function
//         to be called when there is  an attempt  to set that property
// */
// // CLASS
//  class Squire{
//      constructor(width){
//          this.height=width;
//          this.width=width;
//          this.numOfrequestForArea=0;
//      }get area(){
//         //  getters => acess properties;
//          this.numOfrequestForArea++;
//          return this.width*this.width;
//      }
//     set area(area){
//     //    setters => change (mutate) them 
//         this.width=Math.sqrt(area);
//         this.height=this.width;
//         // parameter can be of any name 
//         //25 is parameter in area;
//     }
//  }
//  const abc=new Squire(3);
//       abc.area=25;
//  console.log(abc.area);
//  console.log(abc.area);
//  console.log(abc.area);
//  console.log(abc.area);


// //  ARRAY
// const obj={
//         log:['a','b','c'],
//         get latest(){
//           if( this.log.length===0){

//               return undefined; 
//           }
//           return this.log[this.log.length-1];
//         }
//         }
//         console.log(obj.latest);  
 
//         // split():- take two parametre sepretor,length of string and return array


//        let sentence='john smith';
//         let testing=sentence.split(' ');
//         let val=testing[0];
//         let vall=testing[1];
//         console.log(vall); 
        
//          // Setter or set :- change or mutate  the propert , setters take one parametre;

//             let obj1={
//             firstname:'md',
//             lastname:'rashid',
//             get fullname(){
//                 return this.firstname +' ' +this.lastname;
//             },
//             //setter: change or mutate;
//             set fullname(values){
//                 let parts=values.split(' ');
//                 this.firstname=parts[0];
//                 this.lastname=parts[1];
//             }
//         }
//         obj1.fullname='john smith';
//         console.log(obj1.fullname); 



// // JAVASCRIPT POLYMORPHISMM:-
// /* 
//         a way to perform a single action in different 
//         form. it provide an ability  to call a same method  on different javascript 
//         object . as javascript  is not type specific  language , we can pass  any type 
//         of data members with method
//   */

//  class Animal{
//      constructor(name){
//          this.name=name;
//      }
//      method(){
//          console.log(`this is generic type of animal`);
//      }
//  }
//  class Dog extends Animal{
//      constructor(name){
//             super(name);
//      } 
//      method(){
// //  first method followed by second method massege will be printed;
//          super.method();
//          console.log(`woof! woof!`)
//      }
//  }
//  const animal1=new Animal('lt');
//  const dog1 =new Dog('tommy');
//  animal1.method();
// dog1.method();
// animal1.method();
// dog1.method(); 