var lsgwoerter = [
["B", "O", "O", "T", "C", "A", "M", "P"],
 ["J","A","V","A","S","C","R","I","P","T"],
 ["W","E","B","D","E","S","I","G","N"],
 ["E","D","U","C","A","T","I","O","N"],
 ["R","A","S","P","B","E","R","R","Y"],
 ["A","M","E","R","I","C","A"]
]
var random = Math.floor((Math.random()*(lsgwoerter.length-1))); 

var lsgwort = lsgwoerter[random]; // the word to guess will be chosen from the array above
var ratewort = new Array(lsgwort.length);
var fehler = 0;

// every letter in the word is symbolized by an underscore in the guessfield
for (var i = 0; i < ratewort.length; i++){
	ratewort[i] = "_ ";
}

// prints the guessfield
function printRatewort(){
	for (var i = 0; i < ratewort.length; i++){
	var ratefeld = document.getElementById("ratefeld");
	var buchstabe = document.createTextNode(ratewort[i]);
	ratefeld.appendChild(buchstabe);
	}
}

//checks if the the letter provided by the user matches one or more of the letters in the word
var pruefeZeichen = function(){
	var f = document.rateformular; 
	var b = f.elements["ratezeichen"]; 
	var zeichen = b.value; // the letter provided by the user
	zeichen = zeichen.toUpperCase();
	for (var i = 0; i < lsgwort.length; i++){
		if(lsgwort[i] === zeichen){
			ratewort[i] = zeichen + " ";
			var treffer = true;
		}
	b.value = "";
	}
	
	//deletes the guessfield and replaces it with the new one
	var ratefeld = document.getElementById("ratefeld");
	ratefeld.innerHTML=""; 
	printRatewort();
	
	// if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
	if(!treffer){
		var gerateneBuchstaben = document.getElementById("gerateneBuchstaben");
		var buchstabe = document.createTextNode(" " + zeichen);
		gerateneBuchstaben.appendChild(buchstabe); 
		fehler++;
		var hangman = document.getElementById("hangman");
    hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + fehler + ".png";
	}
	
	//checks if all letters have been found
	var fertig = true;
	for (var i = 0; i < ratewort.length; i++){
		if(ratewort[i] === "_ "){
			fertig = false;
		}
	}
	if(fertig){
		window.alert("Winner Winner Chicken Dinner!");
	}
	
	//once you got six wrong letters, you lose
	if(fehler === 6){
		window.alert("Man, you are one pathetic loser!");
	}
}

function init(){
	printRatewort();
}

window.onload = init;