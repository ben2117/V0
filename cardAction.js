

var setup = function(element){
		document.getElementById(element).style.background = "white";
		document.getElementById(element).style.backgroundRepeat="no-repeat";
		document.getElementById(element).style.opacity = 1;
}

var mainBase = function(element){
	if (document.getElementById(element).innerHTML == 't'){
		if (currentPlayer.steel-20>=0) {
			currentPlayer.steel -= 20;
			//render different races
			if(currentPlayer.race == "helforth"){
				setup(element);
	 			document.getElementById(element).innerHTML = "mainbasehel:" + currentPlayer.username 
	 			+ ":::::buildingCore:::::::";
	 			document.getElementById(element).style.backgroundImage="url(assets/mainbasehel.gif)";
	 		}
	 		if(currentPlayer.race == "frostwing"){
	 			setup(element);
	 			document.getElementById(element).innerHTML = "mainbasefro:" + currentPlayer.username + "::::::";
	 			document.getElementById(element).style.backgroundImage="url(assets/mainbasefro.gif)";
	 		}
	 	}
	 	else{
	 		alert("You do not have enough minerals")
	 	}
	}
	else {
		alert("You can not build that here");
	}
}


///helforth cards

var fireAirGenerator = function(element){
	if (document.getElementById(element).innerHTML == 's'){
		if (currentPlayer.steel-5>=0 && currentPlayer.fire-8>=0) {
			currentPlayer.steel-=5;
			currentPlayer.fire-=8;
			setup(element);
			document.getElementById(element).innerHTML = "fireAirGenerator:" + currentPlayer.username 
	 			+ ":::::buildingCore:::::::";
	 		document.getElementById(element).style.backgroundImage="url(assets/fireAirGenerator.gif)";
	 		
		}
		else{
	 		alert("You do not have enough minerals")
	 	}
	}
	else {
		alert("You can not build that here");
	}
}

var helMinionLab = function(element){
	if (document.getElementById(element).innerHTML == 's'){

		if (currentPlayer.steel-10>=0 && currentPlayer.fire-10>=0 && currentPlayer.air-10>=0) {
			currentPlayer.steel-=10;
			currentPlayer.fire-=10;
			currentPlayer.air-=10;
			setup(element);
			document.getElementById(element).innerHTML = "helMinionLab:" + currentPlayer.username 
	 			+ ":::::buildingCore:::::::";
	 		document.getElementById(element).style.backgroundImage="url(assets/helMinionLab.gif)";
		}
		else{
	 		alert("You do not have enough minerals")
	 	}
	}
	else {
		alert("You cannot build here");
	}
}

var createMinion = function(element){
	if (document.getElementById(element).innerHTML == 's'){
			setup(element);
			document.getElementById(element).innerHTML = "minion:" + currentPlayer.username 
	 			+ "::::::::::::";
	 		document.getElementById(element).style.backgroundImage="url(assets/minion.gif)";
	}
	else {
		alert("There is somthing blocking your minions way");
	}
}


//frostwing cards

var theHydroPump = function(element){
	if (document.getElementById(element).innerHTML == 's') {
		setup(element);
		document.getElementById(element).innerHTML = "theHydroPump:" + currentPlayer.username
			+ ":::::buildingCore:::::::";
		document.getElementById(element).style.backgroundImage="url(assets/theHydroPump.gif"
	}
	else{
		alert("You cannot build here");
	}
}




var move = function(element){
	if (document.getElementById(element).innerHTML == 's' && moveAmount < 1){
		moveAmount++;
		var prev = document.getElementById(prevUnitPlacement[1]+prevUnitPlacement[0]);
		var content = document.getElementById(prevUnitPlacement[1]+prevUnitPlacement[0]).innerHTML;
		prev.style.background = "white";
		prev.innerHTML = 't';
		//prev.style.backgroundImage="none";
		setup(element);
		document.getElementById(element).innerHTML = content;
	 	document.getElementById(element).style.backgroundImage="url(assets/minion.gif)";

	}
	else{
		alert("You are unable to move")
	}
	prevUnitPlacement = [];

}