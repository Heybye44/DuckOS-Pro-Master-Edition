
var setup = function(){
	var namein = prompt("What should teh epic duck call you?");
	console.log("Prompted for name");
	
	var wallimgIn = prompt("What is the location of the image file you want to be your desktop?");
	console.log("Prompted for image");

	localStorage.setItem("name", namein);
	
	console.log("Set locals");
	
	localStorage.setItem("wall", wallimgIn);
	console.log("Set locals");
	
	localStorage.setItem("firstboot", false);
	console.log("Set locals");
	
	console.log("Reloading");
	location.reload();
}
