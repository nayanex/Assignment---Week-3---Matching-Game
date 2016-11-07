var numberOfFaces = 5;

var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];
var img = document.createElement("img");
img.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";

var leftSideWidth = theLeftSide.clientWidth;
var leftSideHeigth = theLeftSide.clientHeight;
var imgHeight;
var imgWidth;
var maxImgTopValue;
var maxImgLeftValue;
		
img.onload = function(){
	imgHeight = img.naturalHeight
	imgWidth = img.naturalWidth;
	maxImgTopValue = leftSideHeigth - imgHeight;
	maxImgLeftValue = leftSideWidth - imgWidth;
};

function generateFaces(){
	for(var i = 0; i < numberOfFaces; i++){
		var img = document.createElement("img");
		img.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";

		var imgTopValue = Math.random()*maxImgTopValue;
		var imgLeftValue = Math.random()*maxImgLeftValue;

		img.style.top = imgTopValue + "px";
		img.style.left = imgLeftValue + "px";

		theLeftSide.appendChild(img);
	}
	var leftSideImages = theLeftSide.cloneNode(true);
	leftSideImages.removeChild(leftSideImages.lastChild);
	theRightSide.appendChild(leftSideImages);
	theLeftSide.lastChild.onclick = nextLevel;
	theBody.onclick = gameOver;
}

var nextLevel = function(event){
	event.stopPropagation(); // is necessary in order to ensure that the event does not 
	//also get applied to other elements in the web page, such as other faces. That would 
	//trigger the function multiple times, which is not what we want.
	numberOfFaces += 5;
	deleteAllFaces();
	generateFaces();
};

var gameOver = function(){
	theBody.onclick = null;
	theLeftSide.lastChild.onclick = null;
	cleanBody();
	generateGameOverScreen();
	alert("Game Over!");
};		


function deleteAllFaces(){
	while(theLeftSide.firstChild){
		theLeftSide.removeChild(theLeftSide.firstChild);
	}
}

function cleanBody(){
	while(theBody.firstChild){
		theBody.removeChild(theBody.firstChild);
	}
}

function generateGameOverScreen(){
	img.src = "http://wallpapercave.com/wp/RMIs0gk.png";
	img.style.width = '1000px'
	img.style.height = 'auto'
	theBody.appendChild(img);
}