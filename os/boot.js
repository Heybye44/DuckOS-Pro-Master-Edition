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
	
	//pkgm.load();
}


var setup = function(){
	localStorage.setItem("firstboot", true);
	console.log("FirstBoot Reset");
	
	var namein = prompt("What should teh epic duck call you?");
	console.log("Prompted for name");
	
	var wallimgIn = prompt("What is the location of the image file you want to be your desktop?");
	console.log("Prompted for image");
	
	
	localStorage.setItem("name", namein);
	console.log("Set locals");
	
	localStorage.setItem("wall", "url(" + wallimgIn + ")");
	console.log("Set locals: " + localStorage.getItem("wall"));
	
	localStorage.setItem("firstboot", false);
	console.log("Set locals");
	
	console.log("Reloading");
	location.reload();
}

var name = localStorage.getItem("name");

boot();
