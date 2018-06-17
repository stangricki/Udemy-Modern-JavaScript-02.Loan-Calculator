// FORM ELEMENTS
const loanForm = document.getElementById('loan-form');
const amountInput = document.getElementById('amount');
const interestInput = document.getElementById('interest');
const yearsToRepayInput = document.getElementById('years');

// DISPLAY ELEMENTS
const results = document.getElementById('results');
const showMonthlyPayment = document.getElementById('monthly-payment');
const showTotalPayment = document.getElementById('total-payment');
const showTotalInterest = document.getElementById('total-interest');

// LOADER ELEMENT
const loader = document.getElementById('loading');


function showError(){ // Creates & appends ERROR BUTTON
	const card = document.querySelector('.card');
	const heading = document.querySelector('.heading');
	const errorButton = document.createElement('button');
	errorButton.className = "alert btn btn-danger btn-block py-3 my-3";
	errorButton.innerHTML = "Please check your numbers";
	errorButton.disabled = true;
	card.insertBefore(errorButton, heading);
	setTimeout(removeErrorInfo, 3000);
}

function removeErrorInfo(){
	document.querySelector('.alert').remove();
}


function calculateResults(){
	
	const principal = parseFloat(amountInput.value);
	const calculatedInterest = parseFloat(interestInput.value) / 100 / 12;
	const calculatedPayments = parseFloat(yearsToRepayInput.value) * 12

	// Compute Monthly Payments

	const x = Math.pow(1 + calculatedInterest, calculatedPayments);
	const monthly = (principal * x * calculatedInterest)/(x - 1);

	if(isFinite(monthly)){
		showMonthlyPayment.value = monthly.toFixed(2);
		showTotalPayment.value = (monthly * calculatedPayments).toFixed(2); 
		showTotalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
		// Show results
		results.style.display = 'block';

		// Hide Loader
		loader.style.display = 'none';
	} else {
		loader.style.display = 'none';
		showError();
	}

}

// LISTEN FOR SUBMIT
loanForm.addEventListener('submit', function(e){
	e.preventDefault();
	// Hide results
	results.style.display = 'none';

	// Show Loader
	loader.style.display = 'block';
	setTimeout(calculateResults, 1500);
});
