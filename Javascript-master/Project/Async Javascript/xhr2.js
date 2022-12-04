document.getElementById('button1').addEventListener('click',loadcustomer);
function loadcustomer(e){
    const xhr=new XMLHttpRequest();
    xhr.open('GET','xhr2.json', true);
    xhr.onload=function(){
        if(this.status==200){
            // console.log(this.responseText)
            const customer=JSON.parse(this.responseText);
            // JSON.parse: we use to  access keys and values of json file  in xhr object. 
            const output=
            `<ul>
            <li>ID:${customer.id}</li>
            <li>Name:${customer.name}</li>
            <li>Name:${customer.company}</li>
            <li>Name:${customer.phone}</li>
            </ul>`;
            document.getElementById('customer').innerHTML=output;
        }
    }
    xhr.send();
}