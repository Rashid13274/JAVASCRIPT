const btn=document.querySelector('.addbtn');
const card=document.querySelector('#book-list');
const  heading=document.querySelector('h2');
//btn
btn.addEventListener('click', runevent);
card.addEventListener('mousemove', runevent);
function runevent(e){
    console.log(`EVENT TYPE ${e.type}`)
    // e.preventDefault;
    heading.textContent=`Mousex:${e.offsetX} MouseY:${e.offsetY}`;
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},40)`;
}
// some mouse event 
// 1. mousedown : click and hold the btn ;
//2. mouseup: just  leave the hold btn and its fire mouseup event
//3.double click: double click on any event 
//4. mouse enter and mouse leave : entering the target and leaving the target form or btn
// it  triggers the   mouse enter and mouse leave .
// mouseover and mouseout : when you go one target  to another taget
// it is mouse out  and then leaving it tringger mouse out



//KEYBOARD EVENT:-
/**
 * 1. 
 */
