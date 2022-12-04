const button=document.getElementById('button');
button.addEventListener('click', loadData);
function loadData() {
    fetch('first.txt').then(function (res) {
        console.log(this.res);
        
    }).then(function (date) {
        console.log(this.data);
        
    }).then(function (err) {
        console.log(err);
        
    })

    
}