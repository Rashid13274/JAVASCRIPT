document.getElementById('button2').addEventListener('click',loadcustomer);
function loadcustomer(e){
    const xhr=new XMLHttpRequest();
    xhr.open('GET','xhr2s.json', true);
    xhr.onload=function(){
        if(this.status==200){
            let output='';
            // console.log(this.responseText)
            const customers=JSON.parse(this.responseText);
            // JSON.parse: we use to  access keys and values of json file  in xhr object. 
            customers.forEach(function(customer){

                 output +=
                `<ul>
                <li>ID:${customer.id}</li>
                <li>Name:${customer.name}</li>
                <li>Name:${customer.village}</li>
                <li>Name:${customer.phone}</li>
                <li>Age:${customer.age}</li>
                </ul>`;
                document.getElementById('customers').innerHTML=output;
            }) 
        }
    }
    xhr.send();
}