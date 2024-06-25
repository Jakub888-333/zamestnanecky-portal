/*TABLES*/

$(function(){
  $('table').tablesorter({
    theme            : 'blue',
  });
});


/*SHOW HIDE ITEMS*/

/*PÚCHOV*/

var performanceBeforeClickonDetail = document.getElementById("performanceBeforeClickonDetail");
var branchesPerformanceItemPuchovButton = document.getElementById("branchesPerformanceItemPuchovButton");
var performanceDetailPuchov = document.getElementById("performanceDetailPuchov");
var buttonTurnBackPuchov = document.getElementById("buttonTurnBackPuchov");

branchesPerformanceItemPuchovButton.onclick = function(){
	performanceBeforeClickonDetail.style.display = "none";
	performanceDetailPuchov.style.display = "block";
}

buttonTurnBackPuchov.onclick = function(){
	performanceBeforeClickonDetail.style.display = "block";
	performanceDetailPuchov.style.display = "none";
}

/*SENEC*/

var branchesPerformanceItemSenecButton = document.getElementById("branchesPerformanceItemSenecButton");
var performanceDetailSenec = document.getElementById("performanceDetailSenec");
var buttonTurnBackSenec = document.getElementById("buttonTurnBackSenec");

branchesPerformanceItemSenecButton.onclick = function(){
	performanceBeforeClickonDetail.style.display = "none";
	performanceDetailSenec.style.display = "block";
}

buttonTurnBackSenec.onclick = function(){
	performanceBeforeClickonDetail.style.display = "block";
	performanceDetailSenec.style.display = "none";
}


/*TRENČÍN*/

var branchesPerformanceItemTrencinButton = document.getElementById("branchesPerformanceItemTrencinButton");
var performanceDetailTrencin = document.getElementById("performanceDetailTrencin");
var buttonTurnBackTrencin = document.getElementById("buttonTurnBackTrencin");

branchesPerformanceItemTrencinButton.onclick = function(){
	performanceBeforeClickonDetail.style.display = "none";
	performanceDetailTrencin.style.display = "block";
}

buttonTurnBackTrencin.onclick = function(){
	performanceBeforeClickonDetail.style.display = "block";
	performanceDetailTrencin.style.display = "none";
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