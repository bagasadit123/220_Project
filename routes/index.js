const express = require('express');
const router = express.Router();

const authController = require('../controller/authController');
const vehicleController = require('../controller/vehicleController');
const apiKeyController = require('../controller/apiKeyController');
const dataController = require('../controller/dataController');

const verifyJWT = require('../middleware/auth');
const verifyApiKey = require('../middleware/apiKeyAuth');

// Dipakai untuk login ke dashboard akun, bukan untuk konsumsi data
router.post('/register', authController.register);
router.post('/login', authController.login);

// User yang sudah login dengan JWT bisa generate/lihat/revoke API key miliknya
router.post('/keys', verifyJWT, apiKeyController.createApiKey);
router.get('/keys', verifyJWT, apiKeyController.listApiKeys);
router.delete('/keys/:id', verifyJWT, apiKeyController.revokeApiKey);

// Untuk pemilik data mengelola dataset mentah
router.get('/vehicles', verifyJWT, vehicleController.getAllVehicles);
router.get('/vehicles/:id', verifyJWT, vehicleController.getVehicleById);
router.post('/vehicles', verifyJWT, vehicleController.createVehicle);
router.put('/vehicles/:id', verifyJWT, vehicleController.updateVehicle);
router.delete('/vehicles/:id', verifyJWT, vehicleController.deleteVehicle);

// Ini produk utama SaaS-nya: konsumen eksternal akses data pakai x-api-key
router.get('/v1/vehicles', verifyApiKey, dataController.getVehicles);
router.get('/v1/vehicles/:id', verifyApiKey, dataController.getVehicleById);
router.get('/v1/stats', verifyApiKey, dataController.getStats);

module.exports = router;