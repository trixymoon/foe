/*
 * 
 * Define Vena
 * 
 */

Scenes.Vena = {};

function Vena(storage) {
	Entity.call(this);
	
	this.name              = "Vena";
	
	this.body.DefFemale();
	
	this.Butt().buttSize.base = 15;
	
	this.body.SetRace(Race.rabbit);
	
	TF.SetAppendage(this.Back(), AppendageType.tail, Race.rabbit, Color.white);
	
	this.body.SetBodyColor(Color.white);
	
	this.body.SetEyeColor(Color.blue);
	
	if(storage) this.FromStorage(storage);
}
Vena.prototype = new Entity();
Vena.prototype.constructor = Vena;


Vena.prototype.FromStorage = function(storage) {
	this.LoadPersonalityStats(storage);
	
	// Load flags
	this.LoadFlags(storage);
}

Vena.prototype.ToStorage = function() {
	var storage = {};
	
	this.SavePersonalityStats(storage);
	
	this.SaveFlags(storage);
	
	return storage;
}
