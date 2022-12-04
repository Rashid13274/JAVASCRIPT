function collectOddValue(arr){
    let result=[];
    
    function inputValue(input){
        if(input.length===0) {
            return;
    }
        if(input[0]%2!==0){
            result.push(input[0]);
        }
        inputValue(input.slice(1));// excluding the first element each time.
    }
    inputValue(arr);
    return result;
}
console.log(collectOddValue([3,2,4,5,6,7,8,6,43,2]));