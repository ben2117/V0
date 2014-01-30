


///PROTOTYPES
Array.prototype.remove = function(from, to) {
  	var rest = this.slice((to || from) + 1 || this.length);
  	this.length = from < 0 ? this.length + from : from;
  	return this.push.apply(this, rest);
};

function ReplaceContentInContainer(matchClass, content){
    var elems = document.getElementsByTagName('*'),i;
    for (i in elems){
        if((" "+elems[i].className+" ").indexOf(" "+matchClass+" ") > -1){
            elems[i].innerHTML = content;
        }
    }
}


///Board Createion
     gridx = [ "x0", "x1", "x2", "x3", "x4", "x5", "x6", "x7", "x8", "x9"]; 
                                    
     gridy = ["y0", "y1", "y2", "y3", "y4","y5", "y6", "y7", "y8", "y9"]; 
     document.write(Generate(gridx, gridy, "gameboard"));

////////PLAY CREATION

function player(username, race) {
  this.username = username;
  this.race = race;
  this.steel = 100;
  this.fire = 100; 
  this.water = 100;
  this.earth = 100;
  this.air = 100;

}



//What does the user want to do?
var command = "";

var players = [];
players.push(new player("ben", "helforth"));
players.push(new player("sam", "frostwing"));

//alert(p1.username);
var currentPlayer = players[0];

//is the mouse down?
var mouseClick = false;

var lastCoordinets = [];
var prevUnitPlacement;
var moveAmount = 0;

