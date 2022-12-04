document.getElementById('button').addEventListener('click',loadData);
 function loadData(){
     // create xhr object
     const xhr=new XMLHttpRequest();
     //open (what type of request we want to made in this method);
      xhr.open('GET','plane.txt', true);
    //   console.log('READYSTATE',xhr.readyState);
    
    // optional- used for  spinners/loaders
      xhr.onprogress=function(){
            console.log('ReadyState',xhr.readyState);
      }
      // what we wanna do to this data
      xhr.onload=function(){
        //   console.log('ReadyState',xhr.readyState);
          if(this.status==200){
            console.log(this.responseText);
          }
      }
      //  and finally send this data to client or me.
      xhr.send();
 }
// READYSTATE:
// 0: request is not initialized
// 1:server connection establised
// 2: request recived
// 3: processing request
// 4: request  finished and response is ready




// HTTP REQUEST:
//  200 :'0K'
// 403  : " FORBIDDEN"
// 404:" NOT FOUND";