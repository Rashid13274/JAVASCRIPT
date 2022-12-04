/*
EasyHttp Library
Library ofr making Http requests.
@version 2.0.9
@author md rashid
*/
class EasyHttp{
    //make a Get  HTTP REQUEST
    // get(url){
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
    //     .catch(err=>console.log(err));

    // }
    // IF WE WANT TO THESE THING IN SYNCHROUNOUS WAY
    get(url){
        return new Promise((resolve, reject)=>{
            fetch(url)
            .then(res=>res.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err));

        })
        

    }
    // Make A post request
    post(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                // here we're wrapping the data in json.strigfy
                body:JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err));
            
        });
    }
    // Make A PUT request
    put(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                // here we're wrapping the data in json.strigfy
                // body is required for sending the data
                body:JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err));
            
        });
    }
    //MAKE A HTTP DELETE REQUEST

    delete(url){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'DELETE',
                headers:{
                    'content-type':'application/json'
                }
                
                // HERE BODY NOT REQUIRED IN THIS FUNCTION.
               
            })
            .then(res=>res.json())
            .then(()=>resolve('RESOURSES DELETED....'))
            .catch(err=>reject(err));
            
        });
    }
}