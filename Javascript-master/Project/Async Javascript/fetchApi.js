// document.getElementById("button").addEventListener('click',gettext);
document.getElementById("button1").addEventListener('click',getJson);

function gettext() {
    // fetch api return promise
    fetch('fetchApi.txt').then(function (resp) {
        return resp.text();
        // to extract data from promise we're using .then()
    }).then(function (data) {
        console.log(data);
        // if we get any error during Get response from fetch api
        // to catch that error we use .catch;
    }).catch(function (err) {
        console.log(err.text());
    })
}

// json data
function getJson() {
    // fetch api return promise
    fetch('fetchApi.json').then(function (res) {
        return res.json();
        // to extract data from promise we're using .then()
    }).then(function (data) {
        console.log(data);    
        // if we get any error during Get response from fetch api
        // to catch that error we use .catch;
    })
    .catch(function (err) {
        return err;
    })
}
console.log(getJson());