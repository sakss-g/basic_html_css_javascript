function formValidation() {  // takes elemnts by their name and inputs them as var
	var fname = document.forms["feedback"]["fname"].value;
	var lname = document.forms["feedback"]["lname"].value;
	var gender = document.forms["feedback"]["gender"].value;
	var message = document.forms["feedback"]["message"].value;
	var email = document.forms["feedback"]["email"].value; 

	if (fname == "" || lname == "" || message == "" || email == ""){  //checks wheter the fields are empty or not
		alert("Empty fields found. Please fill the form."); // shows a pop up box with the message 
	}
	else {
		alert("Thank you for the feedback.");  // shows a pop up box with the message 
	}
}
function generate_rating(){ //gets the elemnts enter i n the rating section
	var a = document.getElementById('r1').value; 
	var b = document.getElementById('r2').value;
	var c = document.getElementById('r3').value;
	document.getElementById("ans").innerHTML = (Number(a) + Number(b) + Number(c))/3; // converts them into number and calculates the average
}
function display_date() {  //to display current time and date
	document.getElementById('date').innerHTML = Date();
	setTimeout(display_date,1000);
}
display_date();