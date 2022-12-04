// BASIC TYPES;

let id:number = 5;
let username:string = "md rashid";
let isDisbled:boolean = true;
 let val :any = 5;
 val ="delhi";

//   array
 let arr: number[]=[1,2,3,5];
 let arr3: any[]= ['apple','ball',true, false, 4,5];

//  tuple array.
 let arr2: [number, string,boolean]= [2,"apple",true];
 let arr4: [number, string][];

arr4=[
    [1,'one'],
    [1,'two'],
    [1,'three']
]

// union
let pid: number | string;
pid ='22';

// enum allow us define set of named constant either numeric or string.
enum direction1 {
    Up,
    Down,
    Left,
    Right,
}

enum direction2 {
    Up =1,
    Down,
    Left,
    Right,
}

enum direction3 {
    Up = "up",
    Down ="down",
    Left ="left",
    Right="right"
}
console.log(direction1.Up)
console.log(direction2.Left);
console.log(direction3.Left);


// object
type User ={
    id:number,
    userName:string
}
let user:User ={
    id : 4,
    userName: 'md rashid'
}

// Type assertion
let cid :any = 3;
// let customerId = <number> cid; OR
let customerId = cid as number;


// Function
function twoSum ( x:number, y:number):number{
    return x+y;
}
console.log(twoSum(2,4));

function log(val: string |number):void{
    console.log(val);
}
log('welcome to mr rashid !');


// interface :  custom  structure or specific  types  for object and function.
// you can not use Interface in case of primitive. better to use in object.

interface UserInterface {
    id?: number,
    name:string
    readonly rank: number;
}
let obj1 :UserInterface={
    rank:3,
    name: "md rashid"

}
// obj1.rank =5; (we can't mofdify when delcalred readonly in our interface)

// We can also use Interface in  function.
interface MathFunc{
    (x:number, y: number):number
}

// here we're using arrow function
const add: MathFunc = (x:number, y:number):number =>x+y;
const substract: MathFunc = (x:number, y:number):number =>x-y;

// CLASS
class Apple{
roll_No:number;
name:string;
constructor(roll_No:number, name:string){
    this.roll_No = roll_No;
    this.name = name;
}
}
const doe = new Apple(1,'traversy');
const mike = new Apple(2,'jon Doe');
console.log(doe);
console.log(mike);

