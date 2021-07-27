const express = require('express');
const cors = require('cors');

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		this.usuariosRouteRath = `/api/usuarios`;
		// middlewares
		this.middlewares();
		// Rotuas de la aplicacion
		this.routes();

		this.listen();
	}

	middlewares() {
		// Parseo y lectura dle body
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		// CORS
		this.app.use(cors());
		// direcctorio publico
		this.app.use(express.static(__dirname + '/../public'));
	}

	routes() {
		this.app.use(this.usuariosRouteRath, require('../routes/user'));
		this.app.get('*', (req, res) => {
			res.status(404).json({ msg: 'Archivo no encontrado' });
		});
	}

	listen() {
		this.app.listen(this.port, (req, res) => {
			console.log('Corriendo en ', this.port);
		});
	}
}
module.exports = Server;
