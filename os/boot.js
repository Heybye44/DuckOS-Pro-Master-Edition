var boot = function() {
	console.info("Boot Started!");
	if(localStorage.getItem("firstboot") == "true"|| localStorage.getItem("firstboot") == null){
		console.log("setup needed");
		setup();
		return 0;
	}else if(localStorage.getItem("firstboot") == "false"){
		document.getElementById("namecard").innerHTML = "Welcome, " + name;
	}else if(localStorage == null){
		alert("Your broswer does not support key features of DuckOS. Try DuckOS in Chrome or Firefox.");
	}else{
		alert("Our inner bird has no idea what happened. lol");
	}
	 
}


var setup = function(){
	var namein = prompt("What should the duck call you?");
	console.log("Prompted");

	localStorage.setItem("name", namein);
	localStorage.setItem("firstboot", false);
	console.log("Set locals");
	
	console.log("Reloading");
	location.reload();
}

var name = localStorage.getItem("name");

window.onload = function(){
	boot();
}
