// listen for submit 
document.getElementById('loan-form').addEventListener('submit',calculateResult);
// document.getElementById('loan-form').addEventListner('submit', calculateResult);
// calculate results
function calculateResult(e){
    // console.log('....!');
    // UI VARS
    const amount=document.getElementById('amount');
    const interest=document.getElementById('interest');
    const years=document.getElementById('years');
    const monthlypayment=document.getElementById('monthly-payment');
    const totalpayment=document.getElementById('total-payment');
    const totalinterest=document.getElementById('total-interest');

    const principle=parseFloat(amount.value);
    const calculateInterest=parseFloat(interest.value)/100/12;
    const calculatePayment=parseFloat(years.value)*12;
    //compute monthly payment
    const x = Math.pow(1+calculateInterest,calculatePayment);
    const monthly=(principle*x*calculateInterest)/(x-1);
    if(isFinite(monthly)){
        monthlypayment.value=monthly.toFixed(2);
        totalpayment.value=(monthly*calculatePayment).toFixed(2);
        totalinterest.value=((monthly*calculatePayment)-principle).toFixed(2);
    }else{
        showError('check your number');
    }
    e.preventDefault();
}
// show error
function showError(error){
    // create div
    const errorDiv=document.createElement('div');
    // add class
    errorDiv.className='alert alert-danger';
    // create  text node and append to  div
    errorDiv.appendChild(document.createElement(error));
    // insert error before heading 
    card.insertBefore(errorDiv,heading);
    // clear error after three second
    setTimeouto(clearError, 3000);
}
// clearError fuction
function clearError(){
    document.querySelector('.alert').remove();
}
