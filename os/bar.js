var goBack = function(){
	console.info("Going back!");
	window.history.go(-1);
}

var goHome = function() {
	console.info("Going Home!");
	window.open("index.html", "_self");
}

/* var checkHomeButton = function(con) {
	while(con == true){
		if (KeyboardJS.activeKeys() == "alt"){
			console.log("Home button pressed");
			goHome();
		};
	};
} */