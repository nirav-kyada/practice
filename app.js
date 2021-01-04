var txtInput = document.querySelector('#txt_input');
var txtOutput = document.querySelector('#txt_output');
var btnCalculate = document.querySelector('#btn_Calculate');
var currentYear = document.querySelector('#txt_currentYear');

function calculate() {
	var birthyr = txtInput.value;
	var curyear = currentYear.value;
	var result = curyear - birthyr;
	return (txtOutput.innerHTML = result);
}
