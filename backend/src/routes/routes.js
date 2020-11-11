const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');
const cepController = require('../controllers/cepController.js');

router.post('/usuarios',UsuarioController.Insert);
router.get('/usuarios',UsuarioController.SearchAll);
router.get('/usuarios/:id',UsuarioController.SearchOne);
router.put('/usuarios/:id',UsuarioController.Update);
router.delete('/usuarios/:id',UsuarioController.Delete);
router.get('/cep/:cep', cepController.getCEP);

module.exports = router;