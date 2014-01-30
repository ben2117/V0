

//begin the game
calculateMove();


//Detect Mouse CLicks


document.body.onmousedown = function() { 
	mouseClick = true;
}
document.body.onmouseup = function() {
	mouseClick = false;
}



///LIGHT BOX///

var opener = document.getElementById("build");

var box = function(element, y){
    buildMenu(element);
    var lightbox = document.getElementById("lightbox"),
    dimmer = document.createElement("div");

    dimmer.style.width =  window.innerWidth + 'px';
    dimmer.style.height = window.innerHeight + 'px';
    dimmer.className = 'dimmer';

    dimmer.onclick = function(){
        document.body.removeChild(this);   
        lightbox.style.visibility = 'hidden';
    }

    document.body.appendChild(dimmer);

    lightbox.style.visibility = 'visible';

    return false;
}

opener.onclick = function(){
    box();  
}
