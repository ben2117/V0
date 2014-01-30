
var doubleClick = 0;

var addTime = function(y, x, element)
{

	var placeholder = document.getElementById(element).innerHTML.split(":");

	if(placeholder[0] == "minion"){
		prevUnitPlacement = [x, y];
	}
	


/////
	if(document.getElementById(element) != "s" && doubleClick>2){
		deHighlight();
		doubleClick = 0;
	}
	doubleClick++;

	lastCoordinets = [y, x];
	//THIS CALLS CARD ACTION
	if(command!=""){
		if(command=="MainBase"){
			//This calls the mainbase command and tells it what is there
			 mainBase(element);
		}
		if(command=="fireAirGenerator"){
			fireAirGenerator(element);
		}
		if (command=="helMinionLab") {
			helMinionLab(element);
		};
		if( command == "createMinion"){
			createMinion(element);
		};

		if

		if( command == "move"){

			move(element);
		}
		
		command = "";
		calculateMove(y, x, element);
	}

	if(command==""){
		var clickedCard = document.getElementById(element).innerHTML;
		var split = clickedCard.split(":");
		if(split[1]==currentPlayer.username){
			box(element);
		}

	}

}

//CLICK AND DRAG FUNCTIONALITY TAKEN OUT FOR TIME BEING
//Check if mouse is clicked
var hoverTime = function(time, cal, element){
//	if(mouseClick){
//		if(selectingDay == cal){
//			addTime(time, cal, element);
//		}
//	}
}