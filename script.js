function calculateEmi(){
    const loanAmount = document.getElementById('loan').value;
    const interestRate = document.getElementById('int').value;
    const monthTopay = document.getElementById('mon').value;

    if(loanAmount === '' || interestRate === '' || monthTopay === ''){
        alert('Enter the value')
    }

    let c = loanAmount*(interestRate/100)/monthTopay;
    let total = c+(loanAmount/monthTopay);

    document.getElementById('result').innerHTML = `Your Emi is: ${total.toFixed(2)}`
}

document.getElementById('cal').onclick = function(){
    calculateEmi()
}































