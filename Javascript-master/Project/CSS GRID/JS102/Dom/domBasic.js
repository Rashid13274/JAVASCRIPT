let val;
val=document;
val=document.forms;
val=document.forms[0];
val=document.forms[1].id;
val=document.forms[1].className;
val=document.head;
// val=document.links;
val=document.head.classList[0];
val=document.scripts;
val=document.scripts[0];
val=document.scripts[0].className[0];
val=document.images;
val=document.scripts[0].getAttribute('src');
let scripts=document.scripts;
let scriptArr=Array.from(scripts);
scriptArr.forEach(function(script){
    console.log(script.getAttribute('src'));
})
console.log(val);