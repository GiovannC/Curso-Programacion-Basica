var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;
var opciones = ["Piedra","Papel","Tijera","Lagarto","Spock"];


var opcionUsuario;
var opcionMaquina;


function principal() {

	for (var posicion = 0; posicion < document.myform.myradio.length; posicion++) {
		if (document.myform.myradio[posicion].checked) {
			break;
		}
	}

	opcionUsuario =  document.myform.myradio[posicion].value;
	opcionMaquina = aleatorio(0,4);

	if (opcionUsuario > 5) {alert("Debes elegir\nPiedra: 0\n Papel: 1\n Tijera: 2\n Lagarto: 3\n Spock: 4");}
	else{
			alert("Elegiste " + opciones[opcionUsuario]);
			alert("JavaScript eligio " + opciones[opcionMaquina]);

			if (opcionUsuario == opcionMaquina) { alert("Empate"); }
			else if ( opcionUsuario == piedra ) 
			{
				if ((opcionMaquina == tijera) || (opcionMaquina == lagarto)) { alert("Ganaste"); } 
				else { alert("Perdiste");}
			} 
			else if (opcionUsuario == papel) 
			{
				if ((opcionMaquina == piedra) || (opcionMaquina == spock)) { alert("Ganaste"); } 
				else {alert("Perdiste");}
			}
			else if(opcionUsuario == tijera)
			{
				if ((opcionMaquina == papel) || (opcionMaquina == lagarto)){ alert("Ganaste");}
				else { alert("Perdiste"); }
			} 
			else if(opcionUsuario == lagarto)
			{
				if ((opcionMaquina == papel) || (opcionMaquina == spock)){ alert("Ganaste");}
				else { alert("Perdiste"); }
			}else if(opcionUsuario == spock)
			{
				if ((opcionMaquina == tijera) || (opcionMaquina == piedra)){ alert("Ganaste");}
				else { alert("Perdiste"); }
			}
	}
}

function aleatorio(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
	return numero
}

document.getElementsByTagName("myBotton").onclick = principal();