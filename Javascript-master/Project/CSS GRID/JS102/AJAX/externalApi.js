// document.querySelector('.get-jokes').addEventListener('click', getjokes);
// function getjokes(e){
//     console.log('getjokes');
//     const xhr=new XMLHttpRequest();
//     xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
//     xhr.onload=function(){
//         if(this.status===200){
//             const response=JSON.parse(this.responseText)
//             console.log(response);
//             let output='';
//             if(response.type==='success'){
//                 response.value.forEach(function(joke){
//                     output+=`<li>${joke.joke}</li>`
//                 })
//             }

//             else{
//                 output+=`<li>something gone wrong</li>`
//             }
//             document.querySelector('.jokes').innerHTML=output;
//         }
        
//     }
//     xhr.send();
//     e.preventDefault();
// }