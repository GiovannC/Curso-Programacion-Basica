//alert: Funcion
// () : Parametros de la función
// "" : Cadenas de texto
//	alert("Hola, ya se programar!");
//var nombre = "Giovanny";
//var apellido = "Calderón";
//var edad = 30;

//alert(nombre + " " + apellido + "\n" + edad + " años.");
//alert("2" + 5 * 8);

var peso;
var pesoEnMarte; // CamelCase

alert("¿Quieres saber tu peso en marte?");
peso = prompt("¿Cuál es tu peso en kg?", "70");
peso = parseInt(peso);

pesoEnMarte = (peso /  9.81) * 3.711;

alert( "Tu peso en Marte es: " + pesoEnMarte + " Kg." );