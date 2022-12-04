// document.querySelector('.ab').addEventListener('click',function(e){
//     console.log('hello world');
// })
document.querySelector('.ab').addEventListener('click',onclick);
function onclick(e){
    // console.log('hello');
    let val;
    val=e;
    val=e.target;
    val=e.target.id;
    val=e.target.className;
    val=e.target.classList;
    // event type
    val=e.type;
    //timestamp
    val=e.timeStamp;
    //cords event relative   to the window
    val=e.clientY;
    val=e.clientX;
    // cords event relative to element
    val=e.offsetY;
    val=e.offsetx;


    console.log(val);
}