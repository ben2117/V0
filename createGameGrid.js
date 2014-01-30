	
	//Generate the table
	var Generate = function(grid1, grid2, tblName)
	{	
		var gridx = grid1;

		var gridy = grid2;
		var output = "";

		output+=("<center>");
		output+=("<table id=\""+tblName+"\"><tr>");
		//output+=("<th></th>")
		//write the calander
		for(var i = 0; i < gridx.length; i++) {
			//output+=("<th>" + gridx[i] + "</th>");
		}
		
		output+=("</tr>");
		//write the times and assign each td the calander and time
		for(var i = 0; i < gridy.length; i++){
			//output+=("<tr><th>" + gridy[i] + "</th>");
			for(var j = 0; j < gridx.length; j++){
				//id="+tblName+gridy[i] + gridx[j] + "  \
				output+=("<td  \
					id="+gridy[i] + gridx[j] + "  \
					onmouseover=\"hoverTime(gridy["+i+"], gridx["+j+"], this.id)\" \
					onmousedown=\"addTime(gridy["+i+"], gridx["+j+"], this.id)\">t</td>");
			}
			output+=("/<tr>");
		}
		output+=("</center>");

		return output;
	}