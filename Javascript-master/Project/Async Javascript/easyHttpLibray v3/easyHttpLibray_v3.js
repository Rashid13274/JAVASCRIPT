/*
EasyHttp Library
Library ofr making Http requests.
@version 3.0.0(latest version)
@author md rashid
*/
class EasyHTTP{
    //make a Get  HTTP REQUEST
    // get(url){
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
    //     .catch(err=>console.log(err));

    // }
    // IF WE WANT TO THESE THING IN SYNCHROUNOUS WAY
    async get(url){
        const response=await fetch(url);

        const rezData=await response.json();
        return rezData;
        

    }
    // Make A post request
     async post(url,data){
        const response =await  fetch(url,{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                // here we're wrapping the data in json.strigfy
                body:JSON.stringify(data)
            })
        
            const rezData=await response.json();
            return rezData; 
      
    }
    // Make A PUT request
   async put(url,data){
      const response=await fetch(url,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                // here we're wrapping the data in json.strigfy
                // body is required for sending the data
                body:JSON.stringify(data)
            })
            const rezData=await response.json();
            return rezData; 
    }
    //MAKE A HTTP DELETE REQUEST

   async delete(url){
      const response= await fetch(url,{
                method:'DELETE',
                headers:{
                    'content-type':'application/json'
                }
                
                // HERE BODY NOT REQUIRED IN THIS FUNCTION.
               
            })
            const rezData=await 'resourse deleted...'
            return rezData; 
    }
}