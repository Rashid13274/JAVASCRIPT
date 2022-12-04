const search=document.getElementById('search');
const matchList=document.getElementById('match-list');
// here in searchStates  we're calling search value another function since searchStstes
// is arrow function. so we  can call a function inside the other function.
search.addEventListener('input',()=>searchStates(search.value));

// search state.json and  filte it.
