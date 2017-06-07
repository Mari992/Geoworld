/*Funkcija za formu!*/
	/*Fja za submit dugme*/
	function submit_by_id() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	if (validation()) // Calling validation function
	{
	document.getElementById("forma").submit();
	alert(" Name : " + name + " \n Email : " + email + "\n\n Uspjesno poslato!");
	}
	}
	/*Fja za validaciju name i email*/
	function validation() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if (name === '' || email === '') {
	alert("Molimo Vas da popunite sva polja!");
	return false;
	} else if (!(email).match(emailReg)) {
	alert("Unjeli ste pogresan Email!");
	return false;
	} else {
	return true;
	}
	}