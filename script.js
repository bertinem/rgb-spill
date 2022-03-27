var number = 6;
var colors = randomColors(number);
var squares = document.querySelectorAll(".square");
var colorPicked = pickColor();
var winningColor = document.querySelector("#winningColor");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

winningColor.textContent = colorPicked;

//her fordeles fargene på firkantene og sjekker om fargen som brukeren trykker på er riktig
for(var i=0 ; i<squares.length ; i++){
	//farge fordeles på firkantene
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		//henter fargen fra firkanten som ble trykket på
    var clickedColor = this.style.backgroundColor;

		//Sammenligner farge som blir trykket på med vinner fargen
	    if(clickedColor === colorPicked){
	    	message.textContent = "Rikitg!";
	    	reset.textContent = "Nytt Spill";
	    	changeColors(clickedColor);
	    } else{
			//satt fargen lik backgrunnen slik at firkanten som var feil "fades ut"
	    	this.style.backgroundColor = "#232323"; 
	    	message.textContent = "Feil!";
	    }
	    
	});
}

//velger en tilfeldig av de 6 firkantene som er vinner-firkanten
function pickColor(){
	var number = Math.floor(Math.random() * colors.length);
	return colors[number];
}

//tilfeldiggjør fargene 
function randomColors(amount){
	var array = [];

	for(var i=0 ; i<amount ; i++){
		//legger fargene vi får fra funskjonen under i et array
		array.push(randomColor());
	}

	return array;
}

//velger tre randomme tall mellom 0-255 som kan settes sammen til en rgb-verdi og returner fargen til arrayet over
function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var color = "rgb(" + red + ", " + green + ", " + blue + ")";
	return color;
}

//funksjon for å resette spillet og fargene
reset.addEventListener("click", function(){
    colors = randomColors(number);
    colorPicked = pickColor();

    winningColor.textContent = colorPicked;
    message.textContent = "";

    this.textContent = "Reset Fargene";
	
    // gi de 6 nye fargene til hver sin firkant
    for(var i=0 ; i<colors.length ; i++){
    	squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#219EBC";
    reset.textContent = "Reset Fargene";
    });

function changeColors(color){
	h1.style.backgroundColor = color;
	for (var i=0 ; i<squares.length ; i++){
		squares[i].style.backgroundColor = color;		
	}
}

//funksjoner for vanskelighetsgraden, resetter spillet med 3 eller 6 firkanter avhengig av vanskelighetsgraden valgt
easyButton.addEventListener("click", function () {
	easyButton.classList.add("active");
	hardButton.classList.remove("active");
	number = 3;
	colors = randomColors(number); //kun 3 farger i dettte arrayet
	colorPicked = pickColor();
	winningColor.textContent = colorPicked;

	for(var i=0 ; i<squares.length ; i++){
    	squares[i].style.backgroundColor = colors[i];
    	if (i > 2) {
    		squares[i].style.display = "none";
    	}
    }
});

hardButton.addEventListener("click", function () {
	hardButton.classList.add("active");
	easyButton.classList.remove("active");
	number = 6;
	colors = randomColors(number);
	colorPicked = pickColor();
	winningColor.textContent = colorPicked;

	for(var i=0 ; i<squares.length ; i++){
    	squares[i].style.backgroundColor = colors[i];
    	if (squares[i].style.display === "none"){
    		squares[i].style.display = "block";	
    	}
    	squares[i].style.backgroundColor = colors[i];
    
    }
});