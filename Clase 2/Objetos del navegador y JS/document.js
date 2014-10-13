//Variables de asignación por valor
//Variables de asignación por referencia

function Pokemon(nombrePokemon, tipoPoke, vidaPoke, ataPoke)
{
	var estructuraPokemon =
	{
		nombre: nombrePokemon,
		tipo: tipoPoke,
		vida: vidaPoke,
		ataque: ataPoke
	// nombre: "Pikachu",
	// tipo: "Electrico",
	// via: 100,
	// ataque: 55
	};
	return estructuraPokemon;
}

var pikachu = Pokemon("Pikachu", "Eléctrico", 100, 55);
var bulbasaur = Pokemon("Bulbasaur", "Tierra", 90, 50);

// bulbasaur.nombre = "Bulbasaur";
// bulbasaur.tipo = "Tierra";
// bulbasaur.vida = 90;

document.write(bulbasaur.tipo);


//DOCUMENT OBJECT MODEL

// navigator, window, document

//Objeto
//	Variables
//	Funciones

//document.write("Hola mamá!");
//var pi = 3.141592654;
//pi = Math.ceil(pi);
//document.write(pi);


//Geolocalizacion
//function mostrar(pos)
//{
//	document.write(pos.coords.latitude + "," + pos.coords.longitude); 
//}
//navigator.geolocation.getCurrentPosition( mostrar );