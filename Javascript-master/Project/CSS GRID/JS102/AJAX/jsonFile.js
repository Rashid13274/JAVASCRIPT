// document.getElementById('button-1').addEventListener('click' ,loadcustomer);
// function loadcustomer(e){
//     const xhr=new XMLHttpRequest();
//     xhr.open('GET','jsonfile.json',true);
//     xhr.onload=function(){
//         if(this.status===200){
//             // console.log(this.responseText);
//             const customer=JSON.parse(this.responseText);
//             const output=`
//             <ul>
//             <li>ID:${customer.id}</li>
//             <li> NAME ${customer.name}</li>
//             <li>phone${customer.phone}</li>
//             <li>company${customer.company}</li>
//             </ul>
//             `;
//             document.getElementById('customer').innerHTML=output;
//         }
//     }
//     xhr.send();
// }