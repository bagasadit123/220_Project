const express = require('express');
const router = express.Router();

// Path dari dalam folder routes/ menuju folder controller/
const authController = require('../controller/authController');
const vehicleController = require('../controller/vehicleController');
const verifyJWT = require('../middleware/auth');

// Auth Routes
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

// Vehicle Data Routes (Full CRUD - JWT Protected)
router.get('/vehicles', verifyJWT, vehicleController.getAllVehicles);
router.get('/vehicles/:id', verifyJWT, vehicleController.getVehicleById);
router.post('/vehicles', verifyJWT, vehicleController.createVehicle);
router.put('/vehicles/:id', verifyJWT, vehicleController.updateVehicle);
router.delete('/vehicles/:id', verifyJWT, vehicleController.deleteVehicle);

module.exports = router;