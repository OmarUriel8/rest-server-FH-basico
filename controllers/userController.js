const { request, response } = require('express');

const getUsuarios = (req = request, res = response) => {
	const { apikey, nombre = 'no name', edad } = req.query;
	res.json({
		msg: 'GET desde la API usando controllers',
		apikey,
		nombre,
		edad,
	});
};

const postUsuarios = (req = request, res = response) => {
	const { nombre, edad } = req.body;
	res.status(201).json({
		msg: 'POST desde la API usando controllers',
		nombre,
		edad,
	});
};

const putUsuarios = (req = request, res = response) => {
	const { idUsuario } = req.params;
	const { nombre, edad } = req.body;
	res.status(400).json({ msg: 'PUT desde la API usando controllers', nombre, edad, idUsuario });
};

const deleteUsuarios = (req, res = response) => {
	res.json({ msg: 'DELETE desde la API usando controllers' });
};

module.exports = {
	getUsuarios,
	postUsuarios,
	putUsuarios,
	deleteUsuarios,
};
