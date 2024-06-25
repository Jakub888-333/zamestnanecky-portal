

/*HOME*/

/*Prvá správa*/
var buttonShowWholeMessage1 = document.getElementById("buttonShowWholeMessage1");
var cards = document.getElementById("cards");
var fullMessage1 = document.getElementById("fullMessage1");

buttonShowWholeMessage1.onclick = function(){
	
cards.style.display = "none";
fullMessage1.style.display = "block";	
}

var buttonShowWholeMessage1FullMessage1 = document.getElementById("buttonShowWholeMessage1FullMessage1");
var fullMessage1 = document.getElementById("fullMessage1");

buttonShowWholeMessage1FullMessage1.onclick = function(){
	
cards.style.display = "flex";
fullMessage1.style.display = "none";	
}


/*Druhá správa*/
var buttonShowWholeMessage2 = document.getElementById("buttonShowWholeMessage2");
var fullMessage2 = document.getElementById("fullMessage2");

buttonShowWholeMessage2.onclick = function(){
	
cards.style.display = "none";
fullMessage2.style.display = "block";	
}

var buttonShowWholeMessage1FullMessage2 = document.getElementById("buttonShowWholeMessage1FullMessage2");
var fullMessage2 = document.getElementById("fullMessage2");

buttonShowWholeMessage1FullMessage2.onclick = function(){
	
cards.style.display = "flex";
fullMessage2.style.display = "none";	
}



/*Tretia správa*/
var buttonShowWholeMessage3 = document.getElementById("buttonShowWholeMessage3");
var fullMessage3 = document.getElementById("fullMessage3");

buttonShowWholeMessage3.onclick = function(){
	
cards.style.display = "none";
fullMessage3.style.display = "block";	
}

var buttonShowWholeMessage1FullMessage3 = document.getElementById("buttonShowWholeMessage1FullMessage3");
var fullMessage3 = document.getElementById("fullMessage3");

buttonShowWholeMessage1FullMessage3.onclick = function(){
	
cards.style.display = "flex";
fullMessage3.style.display = "none";	
}




/*CALCULATOR*/

function calculator(){
	var cena = prompt("Napíš predajnú cenu", "suma v eur");
	if(cena == null){
		alert("cena je povinný údaj")
	return;
}
	console.log(cena);	
		
	var typNehnutelnosti = prompt("Aký typ nehnuteľnosti", "byt alebo dom");
	if(typNehnutelnosti == null){
		alert("typ nehnuteľnosti je povinný údaj")
	return;
}
	
	var byt = 0.9;
	var dom = 1.1
	
	console.log(typNehnutelnosti);
	
	var proviziaByt = (cena * 0.01)*byt;
	var proviziaDom = (cena * 0.01)*dom;
	
	
	
	if(typNehnutelnosti == "byt"){
	cuteAlert({
		type: "success",
		title: "Tvoja provízia je",
		message: proviziaByt.toFixed(0) + "&nbsp;EUR",
		buttonText: "OK",
	});
	}else if(typNehnutelnosti == "dom"){
	cuteAlert({
		type: "success",
		title: "Tvoja provízia je",
		message: proviziaDom.toFixed(0) + "&nbsp;EUR",
		buttonText: "OK",
	});
	}
}


