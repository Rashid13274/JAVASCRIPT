function inside the function taking the reference.
ex:1

function init(){
    var firstname ="md";
    console.log("i'm init");
    function sayFirstName(){
        console.log(firstname);
    }
     return sayFirstName;

}
 var value=init();
 value();

 output:-
 i'm init
 md
//=========================================================================//

//  ex:2

function doaddition(x){
    return  function(y){
        return x+y;
    }
}

var add5=doaddition(4);
console.log(add5(5));
console.log(doaddition(5)(5));
output:
9
10

