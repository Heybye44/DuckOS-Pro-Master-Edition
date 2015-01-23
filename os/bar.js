var goBack = function(){
	window.goHistory();
}


while(true == true){
	if (KeyboardJS.activeKeys() == {"alt","menu"}){
		console.log("Home button pressed");
		goHome();
	};
};