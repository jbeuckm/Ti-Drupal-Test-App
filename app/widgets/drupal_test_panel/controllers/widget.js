
var drupal;
exports.setDrupal = function(d) {
	drupal = d;
};


function enableControl(c) {
	c.opacity = 1;
	c.enabled = true;
}
function disableControl(c) {
	c.opacity = .5;
	c.enabled = false;
}


function setStatus(status) {
	switch (status) {

		case 'logged in':
			enableControl($.logoutButton);

			disableControl($.loginButton);
			disableControl($.email);
			disableControl($.registerButton);
			break;

		case 'logged out':
			disableControl($.logoutButton);
			
			enableControl($.loginButton);
			enableControl($.email);
			enableControl($.registerButton);
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
		function(response){
			setStatus('logged out');
			alert(response);
		},
		function(err){
			alert(err);
		}
	);	
}


