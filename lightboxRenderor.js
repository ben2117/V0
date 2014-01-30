
var RenderLightbox = function(clickedCard) {
	var charView = document.getElementById("charView");

	var cardAttributes = clickedCard;

	if(charView){
		var count = 1;
		for (var r = 0, n = charView.rows.length; r < n; r++) {
        	for (var c = 0, m = charView.rows[r].cells.length; c < m; c++) {
        		count++;
        		if(cardAttributes[count] == "buildingCore"){
            		charView.rows[r].cells[c].style.backgroundImage="url(assets/buildingCore.gif)";
            	}
        	}
    	}
    }

}