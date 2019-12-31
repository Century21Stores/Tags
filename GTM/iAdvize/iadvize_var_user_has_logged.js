function () {
	var user_has_logged = document.querySelector('.account-header .user-message').innerText;
	if(user_has_logged != "Log In/Register"){
		return true;
	}
	else{
		return false;	
	}
  
}