var goBack = function(){
	window.goHistory();
}

var goHome = function() {
	window.open("index.html", "_self");
}

while(true == true){
	if (KeyboardJS.activeKeys() == {"alt","menu"}){
		console.log("Home button pressed");
		goHome();
	};
};