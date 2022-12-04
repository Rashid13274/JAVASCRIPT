// constructor is used  to create as many as object and use the method name)


function Cons(firstname,lastname , age){
this.firstname=firstname;
this.lastname=lastname;
this.age=age;
}
const brad= new Cons('md','rashid',21);
const james= new Cons('meraj','avs',21);
const jorge= new Cons('mds','rahman',21);
console.log(jorge);


//  PROTOTYPE :-
/* 
        each object in javascript has a prototype , and prtotype is an object 
        itself  all object inherit their property and method from prototype.
        when you are dealing with object literals then you are inherating 
        property and method from Object.prototype .
        and the object which are created through constructor Person, 
        its gonna come from Person.prototype

 */





 Object.create():-  method creates  a new object , using  an existing  object as the prototype of newly  created object. 

 const personPrototype={
     greeting: function(){
         return `hello there ${this.firstname}, ${this.lastname}`;
     },
     getsmarried: function(newLastName){
         this.lastname=newLastName;
     }
    }
const brad= Object.create(personPrototype);
brad.firstname='md';
brad.lastname='rashid';
const mary=Object.create(personPrototype);
mary.firstname='morkrl';
mary.getsmarried('thompson');
console.log(mary.greeting());

 



// CLASS:-

/* 
        class are templete for creating object.they encapsulated data 
        with code  to work on that data.Classes on JS  are built on prototype
        but also  have  some syntax and semantics. 

        DEFINING CLASSES:- Classes are in fact 'special function ',
        and just  as you
        can define  function expression  and function declaration.
*/

 
 
//  CONSTRUCTOR:- 
/* 
        the constructor  method is a special  method 
        for creating  and initializing  an object created with class.
        there can be only  one  
        special method with the name constructor  in a class .a syntax error  will be thrown 
        if the class  contain more than  one  occurance of a class constructor 
        method 
*/
  class Person {
    constructor(firstname,lastname,dob){
        this.firstname=firstname;
        this.lastname=lastname;
        this.birthday=new Date(dob);
    }
greeting(){
    return `hello there is ${this.firstname} ${this.lastname}`;
}
calculateAge(){
    const diff =Date.now()-this.birthday.getTime();
    const ageDate=new Date(diff);
    return Math.abs(ageDate.getUTCFullYear()-1997);
}
getsMarried(newLastname){
    this.lastname=newLastname;
}
  }
  const brad= new Person('md','rashid','02-04-2021');
  console.log(brad.calculateAge());