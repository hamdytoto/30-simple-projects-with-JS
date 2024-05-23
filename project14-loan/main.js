document.getElementById('amount').addEventListener('input', updateValues);
document.getElementById('years').addEventListener('input', updateValues);
document.getElementById('calculate').addEventListener('click', calculatePayment);

function updateValues() {
    document.getElementById('amountValue').textContent = parseInt(document.getElementById('amount').value).toLocaleString();
    document.getElementById('yearsValue').textContent = document.getElementById('years').value;
}

function calculatePayment() {
    const principal = parseFloat(document.getElementById('amount').value);
    const years = parseFloat(document.getElementById('years').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
    const payments = years * 12;
    
    const x = Math.pow(1 + rate, payments);
    const monthly = (principal * x * rate) / (x - 1);
    
    if (!isNaN(monthly) && (monthly !== Infinity) && (monthly !== 0)) {
        document.getElementById('loanAmount').textContent = principal.toLocaleString();
        document.getElementById('loanYears').textContent = years;
        document.getElementById('loanRate').textContent = (rate * 12 * 100).toFixed(1);
        document.getElementById('monthlyPayment').textContent = monthly.toFixed(2);
    } else {
        document.getElementById('monthlyPayment').textContent = "Error";
    }
}