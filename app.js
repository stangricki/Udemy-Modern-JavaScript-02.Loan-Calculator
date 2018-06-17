const errorSpace = document.getElementById('error');

// FORM ELEMENTS
const loanForm = document.getElementById('loan-form');
const amountInputValue = document.getElementById('amount');
const interestInputValue = document.getElementById('interest');
const yearsToRepayInputValue = document.getElementById('years');

// DISPLAY ELEMENTS
const showMonthlyPayment = document.getElementById('monthly-payment');
const showTotalPayment = document.getElementById('total-payment');
const showTotalInterest = document.getElementById('total-interest');


function showError(){ // Creates & appends ERROR BUTTON
	const errorButton = document.createElement('button');
	errorButton.className = "btn btn-danger btn-block py-3 my-3";
	errorButton.innerHTML = "Please check your numbers";
	errorButton.disabled = true;
	errorSpace.appendChild(errorButton);
	setTimeout(removeErrorInfo, 2000);
}

function removeErrorInfo(){
	errorSpace.firstElementChild.remove();
}

loanForm.addEventListener('submit', calculate);

function calculate(e){
	e.preventDefault();
	if (amountInputValue.value === '' || 
		interestInputValue.value === '' || 
		yearsToRepayInputValue.value === ''){
		showError()
	}
	showMonthlyPayment.value = amountInputValue.value / 12;
	showTotalPayment.value = amountInputValue.value * (interestInputValue.value/100) + amountInputValue.value;
	showTotalInterest.value = 6;
}

