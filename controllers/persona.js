//File: controllers/tvshows.js
var mongoose = require('mongoose');
var Persona  = mongoose.model('Persona');

//GET - Retorna todos los registrados
exports.findAll = function(req, res) {
	Persona.find(function(err, personas) {
    if(err) res.send(500, err.message);

    console.log('GET /personas')
	res.status(200).jsonp(personas);
	});
};

//GET - Retorna los registrados especificando la ID
exports.findById = function(req, res) {
	Persona.findById(req.params.id, function(err, persona) {
    if(err) return res.send(500, err.message);

    console.log('GET /personas/' + req.params.id);
		res.status(200).jsonp(persona);
	});
};

//POST - Inserta un nuevo registro en la BD
exports.add = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var persona = new Persona({
		name:    req.body.name,
		genre:    req.body.genre,
	});

	persona.save(function(err, persona) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(persona);
	});
};

//PUT - Actualiza los registros ya existentes
exports.update = function(req, res) {
	Persona.findById(req.params.id, function(err, persona) {
		persona.name   = req.body.name;
		persona.genre   = req.body.genre;
		persona.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(persona);
		});
	});
};

//DELETE - Elimina un registro especificando ID
exports.delete = function(req, res) {
	Persona.findById(req.params.id, function(err, persona) {
		persona.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.json({ message: 'Eliminacion exitosa' });
		});
	});
};