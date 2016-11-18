var express         = require("express");
var bodyParser      = require("body-parser");
var mongoose        = require('mongoose');
var methodOverride  = require("method-override");
var app             = express();

// Coneccion a la BD
mongoose.connect('mongodb://localhost/personas', function(err, res) {
  if(err) throw err;
  console.log('Conectado a la BD');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Importando modelos y controladores
var models     = require('./models/persona')(app, mongoose);
var PersonaCtrl = require('./controllers/persona');


var router = express.Router();

//Index -route
router.get('/', function(req, res) {
  res.send("Hola mundo");
});
app.use(router);

// API routes
var api = express.Router();

api.route('/personas')
  .get(PersonaCtrl.findAll)
  .post(PersonaCtrl.add);

api.route('/personas/:id')
  .get(PersonaCtrl.findById)
  .put(PersonaCtrl.update)
  .delete(PersonaCtrl.delete);

app.use('/api', api);

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
