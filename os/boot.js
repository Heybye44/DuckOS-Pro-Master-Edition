var boot = function() {
	console.info("Boot Started!");
	if(localStorage.getItem("firstboot") == "true"|| localStorage == null){
		console.log("setup needed");
		setup();
		return 0;
	}else{
		 document.getElementById("namecard").innerHTML = "Welcome, " + name;
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
