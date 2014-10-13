function Pokemon(n,v,a)
{
	this.grito = "Pika!";
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.gritar = function()
	{
		alert(this.grito);
	}

}
// var pikachu = new Pokemon("pikachu", 100, 55);
// pikachu.vida = pikachu.vida - 10;
// pikachu.gritar();

// var rattata = new Pokemon("Rattata", 40, 2);
// rattata.vida = rattata.vida - 13
// rattata.grito = "Paredes!!!";
// rattata.gritar();

function inicio()
{
	var rattata = new Pokemon("Rattata", 40, 2);
	rattata.vida = rattata.vida - 13;
	//nombrePokemon = document.getElementById("nombrePokemon");
	nombrePokemon.textContent = rattata.nombre;
	datosPokemon.textContent = rattata.vida;
}

