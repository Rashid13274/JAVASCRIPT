document.getElementById("click_here").addEventListener('click',click_here);
// create a line break  element;
let br=document.createElement("br");
function click_here() {
    // create a form dynamically
    var form=document.createElement("form");
    //set attaribute to document
    form.setAttribute("method","post");
    form.setAttribute("action","submit.php");

    // create a new input element for fullname
    var  FN=document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("name","FullName");
    FN.setAttribute("placeholder","Fullname");

    //Create an input element for date of birth
    var birthDate=document.createElement("input");
    birthDate.setAttribute("type","text");
    birthDate.setAttribute("name","dob");
    birthDate.setAttribute("placeholder","dob");

    //Create an input element for Email
    var Eid=document.createElement("input");
    Eid.setAttribute("type","text");
    Eid.setAttribute("name","emailId");
    Eid.setAttribute("placeholder","Email");

    //Create an input element for password
    var pwd=document.createElement("input");
    pwd.setAttribute("type","password");
    pwd.setAttribute("name","password");
    pwd.setAttribute("placeholder","placeholder");

    //Create an input element for retype of password password
    var rpwd=document.createElement("input");
    rpwd.setAttribute("type","password");
    rpwd.setAttribute("name","reTypepassword");
    rpwd.setAttribute("placeholder","reEnter password");

    //Create an submit button for form
   var submit =document.createElement("button");
   submit.setAttribute("type","submit");
   submit.setAttribute("value","submit");
   // append the full name to the form
   form.appendChild(FN);
   // inserting a line break 
   form.appendChild(br.cloneNode());

   // apend the  date of birth in form
   form.appendChild(birthDate);
   form.appendChild(br.cloneNode) 

      // apend the  date of birth in form
   form.appendChild(Eid);
   form.appendChild(br.cloneNode) 

      // apend the  date of birth in form
   form.appendChild(pwd);
   form.appendChild(br.cloneNode) 
      // apend the  date of birth in form
   form.appendChild(rpwd);
   form.appendChild(br.cloneNode) 

      // apend the  date of birth in form
   form.appendChild(submit);
  
   document.getElementsByTagName("body")[0].appendChild(form);
    
}