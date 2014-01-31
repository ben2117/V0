var action = function(command){
	command = this.command;
}

var findCards = function(){
	var cards = [];
	var table = document.getElementById("gameboard");
     for (var r = 0, n = table.rows.length; r < n; r++) {
         for (var c = 1, m = table.rows[r].cells.length; c < m; c++) {
         	var cell = table.rows[r].cells[c].innerHTML;
             if(cell!='t'){
             	var split = cell.split(":");			
             	if(split[1] == currentPlayer.username){
             		cards.push(split[0]);
             	}
             }
         }
     }
	return cards;
}

var buildMenu = function(element, y, x){
	var gridx = ["sx0", "sx1", "sx2"];
	var gridy = ["sy0", "sy1", "sy2"];
	var clickedCard = "";
	if(element){
		clickedCard = document.getElementById(element).innerHTML;
		clickedCard = clickedCard.split(":");
	}
	var cards = findCards();
	var lightbox = document.getElementById("lightbox");
	var menuContent = "<button onclick=\"command='MainBase'\"> Build Base </button>";
	//check what building the player has

	if(currentPlayer.race == "helforth"){
		//possible cards
		var mainbase = false;
		var fireAirGenerator = false;
		var helMinionLab = false;
		var theHydroPump = false;

		//find cards
		for(var i = 0; i < cards.length; i++)
		{
			if (cards[i] == "mainbasehel") {
				mainbase = true;
			}
			if(cards[i] == "fireAirGenerator"){
				fireAirGenerator = true;
			}
			if(cards[i] == "helMinionLab"){
				helMinionLab = true;
			}
			if(cards[i] == "theHydroPump"){
				theHydroPump = true;
			}
		}

		if(clickedCard[0] == "mainbasehel"){
			oneSpaceHighlighting();
			menuContent = "<h2>Helforth Mannor</h2>";
			menuContent += Generate(gridx, gridy, "charView");
			menuContent += "<button onclick=\"command='fireAirGenerator'\" style=\"float:right\"> Build Fire Air Generator </button>";
			if(fireAirGenerator){
				menuContent += "<button onclick=\"command='helMinionLab'\" style=\"float:right\"> Build Hels Minion Lab </button>";
			}	
		}

		//HELSFORTH MENUES
		if(clickedCard[0] =="fireAirGenerator"){
			menuContent = "<h2>Fire and Air Generator</h2>";
			menuContent += Generate(gridx, gridy, "charView");
		}
		
		if(clickedCard[0] =="helMinionLab"){
			oneSpaceHighlighting();
			menuContent = "<h2>Hels Minion Lab</h2>";
			menuContent += Generate(gridx, gridy, "charView");
			menuContent += "</br><button onclick=\"command='createMinion'\" style=\"float:right\"> Create Minion </button>";
		}
		if(clickedCard[0] == "minion"){
			oneSpaceHighlighting();
			menuContent = "<h2>Hels Minion</h2>";
			menuContent += "</br><button onclick=\"command='move'\" style=\"float:right\"> Move </button>";

		};

		///FROST WING MENUE

	}

	if (currentPlayer.race == "frostwing") {
		if(clickedCard[0] == "mainbasefro"){
			oneSpaceHighlighting();
			menuContent = "<h2>Frost Wing Mannor</h2>";
			menuContent += Generate(gridx, gridy, "charView");
			menuContent += "<button onclick=\"command='theHydroPump'\" style=\"float:right\"> Build Hydro Pump </button>";	
		}

		if(clickedCard[0] == "theHydroPump"){
			oneSpaceHighlighting();
			menuContent = "<h2>The Hydro Pump</h2>";
			menuContent += Generate(gridx, gridy, "charView");
			menuContent += "<button onclick=\"command='waterSquirel'\" style=\"float:right\">Create Water Squiral</button>";
		}

		if(clickedCard[0] == "waterSquirel"){
			oneSpaceHighlighting();
			menuContent = "<h2>Water Squiral</h2>";
			menuContent += Generate(gridx, gridy, "charView");
			menuContent += "</br><button onclick=\"command='move'\" style=\"float:right\"> Move </button>";
		}

	};
	
	ReplaceContentInContainer("lightbox", menuContent);
	RenderLightbox(clickedCard);
};