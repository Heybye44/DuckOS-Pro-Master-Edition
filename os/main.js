var page = document.getElementsByTagName("body")

var main = function(){
	page.requestFullscreen();
	login(prompt("Type in your user name. Type 'Sign Up' to create an account."));
}

var login = function(name){
		document.cookie = "name=" + name;
		return name;
	}
}
