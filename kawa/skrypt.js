function zamow() {
	var numer = document.getElementById("numer").value;
	var waga = document.getElementById("waga").value;
	var koszt;
	if(numer == 1){
		koszt = waga * 5;
	}
	else if(numer == 2){
		koszt = waga * 7;
	}
	else if(numer == 3){
		koszt = waga * 6;
	}
	else {
		koszt = 0;
	}
	
	document.getElementById("wynik").innerHTML = "Koszt zamówienia wyniósł "+koszt+" zł"
}