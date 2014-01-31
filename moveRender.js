	var gridPositions = [];

	var calculateMove = function(y, x, element){

		//Before we even select the grid we need to know what to do with it
		var table = document.getElementById("gameboard");
        for (var r = 0, n = table.rows.length; r < n; r++) {
            for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
            	var cell = table.rows[r].cells[c].innerHTML;
                if(cell!='t'){
					placement(cell);
                }
            }
        }

		ReplaceContentInContainer("P1Recourses", 
			"User Name: " + players[0].username + "<br> \
			Race: " + players[0].race + " <br> \
			Steel: " + players[0].steel + " <br> \
			Fire: " + players[0].fire + " <br> \
			Water: " + players[0].water + " <br> \
			Earth: " + players[0].earth + " <br> \
			Air: " + players[0].air + " <br>");
		ReplaceContentInContainer("P2Recourses", 
			"User Name: " + players[1].username + "<br> \
			Race: " + players[1].race + " <br> \
			Steel: " + players[1].steel + " <br> \
			Fire: " + players[1].fire + " <br> \
			Water: " + players[1].water + " <br> \
			Earth: " + players[1].earth + " <br> \
			Air: " + players[1].air + " <br>");
	}


	var placement= function(thing){
		var split = thing.split(":");
		var playerCheck = currentPlayer;
		if(split[1] != playerCheck.username){
			for(var i = 0; i < players.length; i++){
				if(players[i].username == split[1]){
					playerCheck = players[i];
				}
			}
		}
	
		//Check For Resource Generation
		for(var i = 0; i < buildings.length; i++){
			if(buildings[i].name == split[0])
			{
				playerCheck.steel += buildings[i].steel;
				playerCheck.fire += buildings[i].fire;
				playerCheck.water += buildings[i].water;
				playerCheck.earth += buildings[i].earth;
				playerCheck.air += buildings[i].air;
			}
		}
	}


	var endTurn = function(){
		command = "";
		for(var i = 0; i < players.length; i++){
			if(players[i].username != currentPlayer.username){
				currentPlayer = players[i];
				break;
			}
		}
		ReplaceContentInContainer("whosTurn", "It is " + currentPlayer.username +"s turn."); 
		moveAmount = 0;
		calculateMove();
	}

