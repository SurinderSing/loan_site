const Calculate = () => {
    // variables ::--
    const loanAmountInput = document.getElementById("loan-amount").value;
    const loanTenureInput = document.getElementById("loan-tenure").value;
    const interestRateInput = document.getElementById("interest-rate").value;
    const loanAmount = parseFloat(loanAmountInput);
    const loanTenure = parseFloat(loanTenureInput);
    const interestRate = parseFloat(interestRateInput);

    const loanEmiValue = document.getElementById("loan-EMI");
    const totalInterestPayableValue = document.getElementById("total-interest-payable");
    const totalPaymentValue = document.getElementById("total-payment");

    let interest = (interestRate / 12) / 100;
    let tenureinmonth = loanTenure * 12;
    console.log(interest)
    // calculating the EMI ::--
    const EMI = loanAmount * interest * (Math.pow(1 + interest, tenureinmonth) / (Math.pow(1 + interest, tenureinmonth) - 1));

    // putting the values on the page ::--

    loanEmiValue.innerHTML = `₹ ${Math.round(EMI)}`;
    let totalAmount = Math.round(tenureinmonth * EMI); 
    totalPaymentValue.innerHTML = `₹ ${totalAmount}`;
    let totalInterestPayable = Math.round(totalAmount - loanAmount);
    totalInterestPayableValue.innerHTML = `₹ ${totalInterestPayable}`;
}

