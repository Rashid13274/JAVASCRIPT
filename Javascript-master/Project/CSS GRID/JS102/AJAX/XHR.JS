/*
document.getElementById('button').addEventListener('click',loadData);
function loadData(){
    // create an xhr object
    const xhr=new XMLHttpRequest();
    //OPEN : WHAT ARE REQUEST GONNA MAKE IT ANA WHAT URL OR FILE WE'RE GONNA MAKE INTO:
    xhr.open('GET', 'plain.txt',true); // true for asynchrous
    // console.log('READYSTATE',xhr.readyState);
    xhr.onload=function(){
    console.log('READYSTATE',xhr.readyState);
        if(this.status===200){
            console.log(this.responseText)
        }
        
    }
    xhr.onload=function(){
        if(this.status===200){
            // console.log(this.responseText);
            document.getElementById('output').innerHTML=`<h1>${this.responseText}</h1>`
        }
    }//optional:- used for  spinners / loaders
    xhr.onprogress=function(){
        console.log("readyState", this.readyState);
    }

    xhr.send();
    // HTTP STATUS:
    //200 "OK"
    //403 " FORBIDDEN"
    //404 'NOT FOUND';
    
    /**
     * READY STATE VALUE:
     * 0: REQUEST NOT INITIALIZED
     * 1:SERVER CONNECTION ESTABLISED
     * 2: REQUEST RECIVED
     * 3:PROCESS REQUEST 
     * 4:REQUEST FINISHED  AND RESPONSE IS READY
     */
// }
//optional:- used for  spinners / loaders

/** */
