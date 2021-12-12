function validateForm() {
	let valid = true;
	// check birthdate
	valid = validateBirthdate();
    // // alert(valid ? "Over 18" : "Under 18");
	// check favorite number
	valid = validateFavoriteNumber();
    // // alert(valid ? "In range" : "Out of range");
	return valid
}

function validateBirthdate() {
	// get current date
	let currentDate = new Date();
	// get input date
	let input = document.getElementById("birthdate").value;
	let birthdate = new Date(input);
	// return if age is over 18
	let diff = new Date(currentDate - birthdate)
	let age = Math.abs(diff.getUTCFullYear() - 1970);
	
	return age >= 18;
}

function validateFavoriteNumber() {
	// get input number
	let input = document.getElementById("favorite-number").value;
	// return if number between 1 and 100
	return input >= 1 && input <= 100;
}