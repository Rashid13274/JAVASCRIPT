const form=document.querySelector('form');
const input=document.getElementById('inputbtn');
// const input=document.getElementById('inputbtn');

// form.addEventListener('submit', runevent);
// keydown event when you write something in input filed;
// input.addEventListener('keydown', runevent);
input.addEventListener('keyup', runevent);
input.addEventListener('focus', runevent);


function runevent(e){
    console.log(`EVENT TYPE:${e.type}`)
    // console.log(e.target.value);
}

//keypress: when you press to input filed  it trigger;
//focus: when you focus to input field.

