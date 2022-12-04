// // 1.  print all even number  in first  50 natural numbers

 for(let i=1;i<=50;i++){
     if(i&i==0){
         console.log(i)
     }
 }
// print all odd number  in natural number  from  20 to 50
 for(let i=20;i<=50;i++){
     if(i&1!=0){
         console.log(i);
     }
 }
// 2.  print all number  that are divisible by  5
 const arr=[12,45,67,89, 90, 34,35, 55];
 for( let index=0;index<arr.length;index++){
     if(arr[index]%5==0){
         console.log(arr[index]);
     }
 }

//3. print all the number  in this   array
const arr=[[1,2],[3,4],[5,6],[7,8]];
const newArr=arr.flat();
newArr.forEach(function(val){
    console.log(val);
});
  

//4.  print  prime number occuring   in 1st  50 natural number.
// // Applying sieve of eratosthenes
 
 function prime(){
     let arr= [];

     for(let i=0;i<=50;i++){
      arr.push(true);
     }
     for(let j=2;j*j<=50;j++){
         if(arr[j]==true){
             for(let k=j*j;k<=50;k+=j){
                 arr[k]=false;
             }
         }

     }
     for(let m=2;m<=50;m++){
         if(arr[m]==true){
             console.log(m);
         }
     }
 }
 prime();

// handle edge cases
// if the number is even and less than 15, print a

// if the number is even and more than 15, print b

// if the number is odd and less than 10, print c

// if the number is odd and more than 10, print d

// We need to solve this using two methods

// using nested if else
	

let num=11;
if((num&1==0) && (num <15)){
    console.log('a'); 
}
else if((num&1==0) && (num >15)){
    console.log('b');
}
else if((num&1!=0) && (num <10)){
    console.log('c');
}
else if((num&1!=0) && (num >10)){
    console.log('d');
}

// using logical operators
let num1=11;
console.log((num1%2==0) && num1 <15  ? 'a' : (num1%2==0) && num1 >15 ?'b':(num1%2!=0) && num1 <10 ?'c':'d');

