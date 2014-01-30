var oneSpaceHighlighting = function(){
	//alert(lastCoordinets[0]);
	var topcol = parseInt(lastCoordinets[0][1]) - 1;
	var bottomcol = parseInt(lastCoordinets[0][1]) + 1;
	var leftrow = parseInt(lastCoordinets[1][1]) - 1;
	var rightrow = parseInt(lastCoordinets[1][1]) + 1;

	var elements = [];

	//top row highlighting
	for(var i = 0; i < 3; i++){
		//if(document.getElementById("y"+topcol+"x"+(leftrow+i)!=null){
			if(document.getElementById("y"+topcol+"x"+(leftrow+i)).innerHTML == "t"){
				document.getElementById("y"+topcol+"x"+(leftrow+i)).innerHTML = "s";
				document.getElementById("y"+topcol+"x"+(leftrow+i)).style.background = "gray";
				document.getElementById("y"+topcol+"x"+(leftrow+i)).style.opacity = .3
			}
		//}
	}
	//right collom highlighting
	for(var i = 1; i < 3; i++){
		if(document.getElementById("y"+(topcol+i)+"x"+rightrow).innerHTML == "t"){
			document.getElementById("y"+(topcol+i)+"x"+rightrow).innerHTML = "s";
			document.getElementById("y"+(topcol+i)+"x"+rightrow).style.background = "gray";
			document.getElementById("y"+(topcol+i)+"x"+rightrow).style.opacity = .3
		}
	}
	//bottom row highlighting
	for(var i = 1; i < 3; i++){
		if(document.getElementById("y"+(bottomcol)+"x"+(rightrow-i)).innerHTML == "t"){
			document.getElementById("y"+(bottomcol)+"x"+(rightrow-i)).innerHTML = "s";
			document.getElementById("y"+(bottomcol)+"x"+(rightrow-i)).style.background = "gray";
			document.getElementById("y"+(bottomcol)+"x"+(rightrow-i)).style.opacity = .3
		}
	}

	if(document.getElementById("y"+(bottomcol-1)+"x"+leftrow).innerHTML == "t"){
		document.getElementById("y"+(bottomcol-1)+"x"+leftrow).innerHTML = "s";
		document.getElementById("y"+(bottomcol-1)+"x"+leftrow).style.background = "gray";
		document.getElementById("y"+(bottomcol-1)+"x"+leftrow).style.opacity = .3
	}
	


}

var deHighlight = function(){
	var table = document.getElementById("gameboard");
        for (var r = 0, n = table.rows.length; r < n; r++) {
            for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {

                if(table.rows[r].cells[c].innerHTML=='s'){
					table.rows[r].cells[c].style.background = "white";
					table.rows[r].cells[c].innerHTML = "t";
                }
            }
        }
}