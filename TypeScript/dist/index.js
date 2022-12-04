"use strict";
// BASIC TYPES;
let id = 5;
let username = "md rashid";
let isDisbled = true;
let val = 5;
val = "delhi";
//   array
let arr = [1, 2, 3, 5];
let arr3 = ['apple', 'ball', true, false, 4, 5];
//  tuple array.
let arr2 = [2, "apple", true];
let arr4;
arr4 = [
    [1, 'one'],
    [1, 'two'],
    [1, 'three']
];
// union
let pid;
pid = '22';
// enum allow us define set of named constant either numeric or string.
var direction1;
(function (direction1) {
    direction1[direction1["Up"] = 0] = "Up";
    direction1[direction1["Down"] = 1] = "Down";
    direction1[direction1["Left"] = 2] = "Left";
    direction1[direction1["Right"] = 3] = "Right";
})(direction1 || (direction1 = {}));
var direction2;
(function (direction2) {
    direction2[direction2["Up"] = 1] = "Up";
    direction2[direction2["Down"] = 2] = "Down";
    direction2[direction2["Left"] = 3] = "Left";
    direction2[direction2["Right"] = 4] = "Right";
})(direction2 || (direction2 = {}));
var direction3;
(function (direction3) {
    direction3["Up"] = "up";
    direction3["Down"] = "down";
    direction3["Left"] = "left";
    direction3["Right"] = "right";
})(direction3 || (direction3 = {}));
console.log(direction1.Up);
console.log(direction2.Left);
console.log(direction3.Left);
let user = {
    id: 4,
    userName: 'md rashid'
};
// Type assertion
let cid = 3;
// let customerId = <number> cid; OR
let customerId = cid;
// Function
function twoSum(x, y) {
    return x + y;
}
console.log(twoSum(2, 4));
function log(val) {
    console.log(val);
}
log('welcome to mr rashid !');
let obj1 = {
    rank: 3,
    name: "md rashid"
};
// here we're using arrow function
const add = (x, y) => x + y;
const substract = (x, y) => x - y;
// CLASS
class Apple {
    constructor(roll_No, name) {
        this.roll_No = roll_No;
        this.name = name;
    }
}
const doe = new Apple(1, 'traversy');
const mike = new Apple(2, 'jon Doe');
console.log(doe);
console.log(mike);
