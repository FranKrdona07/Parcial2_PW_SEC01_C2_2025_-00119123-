const express = require('express');
const router = express.Router();
const cuentasController = require('../controllers/cuentasController');

//rutas
router.get('/cuentas', cuentasController.getCuentas); 
router.get('/cuenta/:id', cuentasController.getCuentaById);
router.get('/cuentasBalance', cuentasController.getBalanceTotal);

module.exports = router;