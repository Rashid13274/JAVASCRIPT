const http =new EasyHTTP;
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
// here user id:2 deleted from the list;
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err=>console.log(err));


