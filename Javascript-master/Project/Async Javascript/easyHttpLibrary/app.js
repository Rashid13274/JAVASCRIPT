const http =new EasyHttp;
//Get request (get the user)

// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err=>console.log(err))

//Make http post  request
const data={
    name:'md rashid',
    username:'Rashid_12',
    email:"anything@gmail.com"
}
// create a post 
// http.post('https://jsonplaceholder.typicode.com/users',data)
// .then(data => console.log(data))
// .catch(err=>console.log(err))

// UPDATE POST
// HERE IN THE URL ID:2 HAS UPDATED THE DATA.
// http.put('https://jsonplaceholder.typicode.com/users/4',data)
// .then(data => console.log(data))
// .catch(err=>console.log(err));

//MAKE A DELETE POST
//here user id:2 deleted from the list;
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err=>console.log(err));
// //////////////////////////////
class Avd{
get (url){
return new Promise((resolve,reject)=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>resolve(data))
    .then(err=>reject(err));
})
}
post (url,data){
    return new Promise((resolve,reject)=>{
        fetch(url,{
            method:'POST',
            Headers:{
                'content-type':'application/javascript'
        },
        body:Json.stringfy(data)

        }

        )
        .then(res=>res.json())
        .then(data=>resolve(data))
        .then(err=>reject(err));
    })
    }

}
const obj1=new Avd();
obj1.get('abkdjkljdskl')
.then(data=>console.log(data))
.catch(err=>console.log('error'));
