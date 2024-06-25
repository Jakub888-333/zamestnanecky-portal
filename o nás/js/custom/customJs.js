
        var chart = new OrgChart(document.getElementById("tree"), {
            nodeBinding: {
                field_0: "name",
				field_1: "position",
				field_2: "phone",
				field_3: "email",

            },
            nodes: [
                { id: 1, position: "CEO", name: "Ambróz Demeter", phone: "0900000000", email: "demeter@kubocompanz.sk" },
                { id: 2, pid: 1, name: "POBOČKA PÚCHOV" },
				{ id: 3, pid: 2, position: "Riaditeľ pobočky", name: "Eva Čierna", phone: "0900000000", email: "cierna@kubocompanz.sk" },
					{ id: 4, pid: 3, name: "Alojz Kalneráb", phone: "0900000000", email: "kalnerab@kubocompanz.sk" },
					{ id: 5, pid: 3, name: "Ján Diňa", phone: "0900000000", email: "demeter@kubocompanz.sk" },
					{ id: 6, pid: 3, name: "Ježek Sonic", phone: "0900000000", email: "sonic@kubocompanz.sk" },
                { id: 7, pid: 1, name: "POBOČKA TRENČÍN" },
				{ id: 8, pid: 7, position: "Riaditeľ pobočky", name: "Edo Hlodavec", phone: "0900000000", email: "hlodavec@kubocompanz.sk" },
					{ id: 9, pid: 8, name: "Elena Fialová", phone: "0900000000", email: "fialova@kubocompanz.sk" },
					{ id: 10, pid: 8, name: "Ezechiel Moskvič", phone: "0900000000", email: "mockvic@kubocompanz.sk" },
					{ id: 11, pid: 8, name: "Adam Peter", phone: "0900000000", email: "peter@kubocompanz.sk" },
				{ id: 12, pid: 1, name: "POBOČKA SENEC" },
				{ id: 13, pid: 12, position: "Riaditeľ pobočky", name: "Jozef Mrkva", phone: "0900000000", email: "mrkva@kubocompanz.sk" },
					{ id: 14, pid: 13, name: "Ignác Bajza", phone: "0900000000", email: "bajza@kubocompanz.sk" },
					{ id: 15, pid: 13, name: "Etela Zelerová", phone: "0900000000", email: "zelerova@kubocompanz.sk" },
					{ id: 16, pid: 13, name: "Matej Bel", phone: "0900000000", email: "bel@kubocompanz.sk" },
				
            ]
        });


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