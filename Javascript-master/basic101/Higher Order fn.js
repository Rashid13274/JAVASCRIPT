// HIGHER ORDER ARRAY METHOD:-
const companies=[{name:"company one",  catogeries:"Finance", start:1980, end:2000},
{name:"company one",  catogeries:"INFRASTRUCTURE", start:1982, end:2001},
{name:"company two",  catogeries:"HEALTH", start:1983, end:2002},
{name:"company three",  catogeries:"COMMERCE", start:1984, end:2004},
{name:"company four",  catogeries:"BANKING", start:1986, end:2006},
{name:"company five",  catogeries:"Finance", start:1987, end:2007}];

const age=[33,12,20,16,5,21,44,61,12,24,56,78,89];

// forEach
// filter
// map
// sort
// reduce

//-=================================FOREACH====================================================//

let val=companies.filter((company)=>{
    if(company.catogeries==='finance'){
        return true;
    }
})

console.log(val);


// for (let index = 0; index < companies.length; index++) {
//    console.log(companies[index]);
    
// }


// companies.forEach(function (company) {
//     console.log(companies);
    
// })
// //-=================================FILTER====================================================//

// let canDrink=[];
// for (let index = 0; index < age.length; index++) {
//    if(age[index]>=18){
//     canDrink.push(age[index]);
//    } 
// }
// console.log(canDrink);

//  const canDrink=age.filter(ages=>ages>=21);
//  console.log(canDrink);

//  const financeCompany=companies.filter(function (company) {
//      if(company.catogeries ===
//         "Finance"){
//          return true;
//      }
     
//  });

//   const financeCompany=companies.filter((company)=>company.catogeries==='Finance');   
//  console.log(financeCompany); 
const a=age.filter(item=>item>13);
console.log(a);


 

//  const eightsCompany= companies.filter((company)=>company.start===1980);
//  console.log(eightsCompany);



// //-=================================MAP====================================================//

// //CREATE ARRAY OF COMPANY NAME:-

// const companyName=companies.map(function(company) {
//     return company.name;
    
// }) 
// console.log(companyName);


// const testMap=companies.map(function (test) {
//     return`${test.name} [start date${test.start}-${test.end}]`;
    
// })
// console.log(testMap);


// const agesSquire=age.map((val)=>Math.sqrt(val));
// console.log(agesSquire);


// const agesTimes=age.map((mul)=>mul*2);
// console.log(agesTimes);



// //-=================================SORT====================================================//


// // sort the company name in sorted order  by their start date

// const sortedCompanies=companies.sort(function (c1,c2) {
//     if(c1.start>c2.start){
//         return 1
//     }else{
//         -1;
//     }
// });
// console.log(sortedCompanies); 

// // in sort ways to write
// const sortedCompany=companies.sort((a,b)=>(a.start>b.start ? 1:-1));
// console.log(sortedCompany);


// // IN AGES LOWEST TO HIGHEST 
// const sortedArray=age.sort((a,b)=>(a>b?1:-1));
// console.log(sortedArray); 

// // IN AGES HIGHEST TO LOWEST
// const sortedArray1=age.sort((a,b)=>(a<b?1:-1));
// console.log(sortedArray1);



// //-=================================REDUCE====================================================//


// // calculate the totalsum of age array.



// let ageSum=0;
// for (let index = 0; index <age.length; index++) {
//     ageSum += age[index];
    
// }
// console.log(ageSum); //471

// // ANOTHER APPROACH

//  const totalSum=age.reduce(function (total,agess) {
//      return total+agess;
//  },0);

//  // 0 is value of total as second argument.
//  console.log(totalSum); //471

// //  sorter way 
// const totalAgeSum=age.reduce((total,agess)=>total+agess,0);
// console.log(totalAgeSum) // 471; 







// //calculate the totalSum of start age  of companies.

// const totalSum=companies.reduce((total,sum)=>total+sum.start,0);
// console.log(totalSum); //11902

// //calcualte the total yerars of companies

// const totalYears=companies.reduce((total,age)=>total+ (age.end-age.start),0);
// console.log(totalYears); //118; 




// //-===================================combinedMethod==================================================//

 

// const combined=age.map(ages=>ages*2)
// .filter(ages=>ages>=50)
// .sort((a,b)=>a>b?1:-1)
// .reduce((a,b)=>a+b,0);

// console.log(combined);
// //722

