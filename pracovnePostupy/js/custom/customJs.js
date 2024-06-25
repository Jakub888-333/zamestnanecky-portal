
/*Kvíz*/
/*1. otázka*/

/*1. odpoveď nesprávna*/
var firstQuestionAnswer1 = document.getElementById("firstQuestionAnswer1");
var answerIconNotCorect1 = document.getElementById("answerIconNotCorect1");

firstQuestionAnswer1.onclick = function(){
	answerIconNotCorect1.style.display = "block";
}

var buttonNotCorectAnswer1 = document.getElementById("buttonNotCorectAnswer1");

buttonNotCorectAnswer1.onclick = function(){
	answerIconNotCorect1.style.display = "none";
}

/*2. odpoveď nesprávna*/
var firstQuestionAnswer2 = document.getElementById("firstQuestionAnswer2");

firstQuestionAnswer2.onclick = function(){
	answerIconNotCorect1.style.display = "block";
}


/*3. odpoveď správna*/
var firstQuestionAnswer3 = document.getElementById("firstQuestionAnswer3");
var answerIconCorect1 = document.getElementById("answerIconCorect1");

firstQuestionAnswer3.onclick = function(){
	answerIconCorect1.style.display = "block";
}

var buttonCorectAnswer1 = document.getElementById("buttonCorectAnswer1");
var quizQuestion1 = document.getElementById("quizQuestion1");

buttonCorectAnswer1.onclick = function(){
	quizQuestion1.style.visibility = "hidden";
	buttonCorectAnswer1.style.visibility = "hidden";
}




/*2. otázka*/

/*1. odpoveď nesprávna*/
var secondQuestionAnswer1 = document.getElementById("secondQuestionAnswer1");
var answerIconCorect2 = document.getElementById("answerIconCorect2");

secondQuestionAnswer1.onclick = function(){
	answerIconCorect2.style.display = "block";
}

var buttonCorectAnswer2 = document.getElementById("buttonCorectAnswer2");
var quizQuestion2 = document.getElementById("quizQuestion2");

buttonCorectAnswer2.onclick = function(){
	quizQuestion2.style.visibility = "hidden";
	buttonCorectAnswer2.style.visibility = "hidden";
}



/*2. odpoveď nesprávna*/
var secondQuestionAnswer2 = document.getElementById("secondQuestionAnswer2");
var answerIconNotCorect2 = document.getElementById("answerIconNotCorect2");

secondQuestionAnswer2.onclick = function(){
	answerIconNotCorect2.style.display = "block";
}

var buttonNotCorectAnswer2 = document.getElementById("buttonNotCorectAnswer2");

buttonNotCorectAnswer2.onclick = function(){
	answerIconNotCorect2.style.display = "none";
}

/*3. odpoveď správna*/
var secondQuestionAnswer3 = document.getElementById("secondQuestionAnswer3");

secondQuestionAnswer3.onclick = function(){
	answerIconNotCorect2.style.display = "block";
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