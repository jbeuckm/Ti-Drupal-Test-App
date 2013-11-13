
var drupal;
exports.setDrupal = function(d) {
	drupal = d;
};


function setStatus(status) {
	switch (status) {

		case 'logged in':
			$.logoutButton.enabled = true;
			$.loginButton.enabled = false;
			$.email.enabled = false;
			$.registerButton.enabled = false;
			break;

		case 'logged out':
			$.logoutButton.enabled = false;
			$.loginButton.enabled = true;
			$.email.enabled = true;
			$.registerButton.enabled = true;
			break;
	}
	
}




function clickRegister() {
	
	if (!$.username.value || !$.password.value || !$.email.value) {
		alert("please provide a name, email and password");
		return;
	}
	
	var user = {
		name: $.username.value,
		pass: $.password.value,
		mail: $.email.value
	};
	
	drupal.createAccount(user,
		function(response) {
			alert(response);
		},
		function(error) {
			alert(error);
		}
	);
	
}

function clickLogin() {

	if (!$.username.value || !$.password.value) {
		alert("please provide a username and password");
		return;
	}

	drupal.login($.username.value, $.password.value, 
		function(response) {
			setStatus('logged in');
			alert(response);
		},
		function(error) {
			alert(error);
		}
	);
}





function clickLogout() {
	
	drupal.logout(
		function(resp){
			setStatus('logged out');
			alert(response);
		},
		function(err){
			alert(err);
		}
	);	
}


