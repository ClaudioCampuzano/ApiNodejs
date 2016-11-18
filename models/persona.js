var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new mongoose.Schema({
		name:       { type: String },
		genre: 		{ type: String, enum: ['Hombre', 'Mujer'] }
	});
module.exports = mongoose.model('Persona', personSchema);