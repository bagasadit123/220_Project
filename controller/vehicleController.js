const { CampusVehicle } = require('../models');

// GET All Vehicles (Read)
exports.getAllVehicles = async (req, res) => {
  try {
    const data = await CampusVehicle.findAll();
    res.json({
      status: 'success',
      total_data: data.length,
      data
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

// GET Vehicle by ID (Read)
exports.getVehicleById = async (req, res) => {
  try {
    const data = await CampusVehicle.findByPk(req.params.id);
    if (!data) return res.status(404).json({ status: 'fail', message: 'Data tidak ditemukan' });
    res.json({ status: 'success', data });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

// POST Create Vehicle (Create)
exports.createVehicle = async (req, res) => {
  try {
    const { kategori, tipe_kendaraan, kapasitas_cc, bahan_bakar, efisiensi_km_per_liter, emisi_co2_per_km } = req.body;
    
    const newVehicle = await CampusVehicle.create({
      kategori,
      tipe_kendaraan,
      kapasitas_cc,
      bahan_bakar,
      efisiensi_km_per_liter,
      emisi_co2_per_km
    });

    res.status(201).json({
      status: 'success',
      message: 'Data kendaraan berhasil ditambahkan',
      data: newVehicle
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

// PUT Update Vehicle (Update)
exports.updateVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await CampusVehicle.findByPk(id);

    if (!vehicle) {
      return res.status(404).json({ status: 'fail', message: 'Data kendaraan tidak ditemukan' });
    }

    await vehicle.update(req.body);

    res.json({
      status: 'success',
      message: 'Data kendaraan berhasil diperbarui',
      data: vehicle
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

// DELETE Vehicle (Delete)
exports.deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await CampusVehicle.findByPk(id);

    if (!vehicle) {
      return res.status(404).json({ status: 'fail', message: 'Data kendaraan tidak ditemukan' });
    }

    await vehicle.destroy();

    res.json({
      status: 'success',
      message: 'Data kendaraan berhasil dihapus'
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};