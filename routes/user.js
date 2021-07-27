const { Router } = require('express');
const { getUsuarios, postUsuarios, putUsuarios, deleteUsuarios } = require('../controllers/userController');
const router = Router();

router.get('/', getUsuarios);

router.post('/', postUsuarios);

router.put('/:idUsuario', putUsuarios);

router.delete('/', deleteUsuarios);

module.exports = router;
