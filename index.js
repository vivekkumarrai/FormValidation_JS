const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const number = document.getElementById('number');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

const sendData = (sRate,count) => {
	if(sRate === count){
	    //  alert('Registration Successful');
		// document.write("Sign up Successfull");
	       swal("Welcome! "+fullname.value, "Registrattion Successful", "success");
	}
}

  
const successMsg = () => {
	let formCon =document.getElementsByClassName('form-control');
	var count = formCon.length - 1;
	for(var i=0;i<formCon.length;i++){
		if(formCon[i].className === 'form-control success'){
			var sRate = 0 + i;
			sendData(sRate,count);
		}else{
			return false;
		}
	}

}

function checkInputs() {

       

	// trim to remove the whitespaces
	const fullnameValue = fullname.value.trim();
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const numberValue = number.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
    
	var fullnameExp = /^[a-zA-Z ]{3,20}$/;

	if(fullnameValue === '') {
		setErrorFor(fullname, 'Name cannot be blank');
	}else if(!fullnameExp.test(fullnameValue)){
		setErrorFor(fullname, 'Only alphabets && Name must be 3 - 20');
	// }else if(fullnameValue.length <= 3 || fullnameValue.length >20){
	// 	setErrorFor(fullname, 'Name must be 3 - 20 ');
	}else {
		setSuccessFor(fullname);
	}
	
	 var usernameExp = /^[a-zA-Z(0-9) ]{3,20}$/;

	 if(usernameValue === '') {
	 	setErrorFor(username, 'Username cannot be blank');
      } else if(!usernameExp.test(usernameValue)){
		setErrorFor(username, 'Username must be 3 - 20 char and special char ');
	  }else {
	 	setSuccessFor(username);
	 }
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(numberValue === '') {
		setErrorFor(number, 'Number cannot be blank');
	} else if(numberValue.length <= 8 || numberValue.length >15){
		setErrorFor(number, 'Number must be 8 - 15 ');
	}else {
		setSuccessFor(number);
	}

	var passExp= /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	}else if(!passExp.test(passwordValue)){
		setErrorFor(password, 'Password must contain at least one small one Capital letter & one special char');
    } else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Confirm Password cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}

	successMsg();
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

















