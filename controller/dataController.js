const { CampusVehicle, sequelize } = require('../models');
const { Op } = require('sequelize');

exports.getVehicles = async (req, res) => {
  try {
    const page = Math.max(parseInt(req.query.page) || 1, 1);
    const limit = Math.min(parseInt(req.query.limit) || 10, 100);
    const offset = (page - 1) * limit;

    const where = {};
    if (req.query.kategori) {
      where.kategori = { [Op.iLike]: `%${req.query.kategori}%` };
    }
    if (req.query.bahan_bakar) {
      where.bahan_bakar = { [Op.iLike]: `%${req.query.bahan_bakar}%` };
    }

    const { count, rows } = await CampusVehicle.findAndCountAll({
      where,
      limit,
      offset,
      order: [['id', 'ASC']]
    });

    res.json({
      status: 'success',
      pagination: {
        page,
        limit,
        total_data: count,
        total_pages: Math.ceil(count / limit)
      },
      data: rows
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.getVehicleById = async (req, res) => {
  try {
    const data = await CampusVehicle.findByPk(req.params.id);
    if (!data) {
      return res.status(404).json({ status: 'fail', message: 'Data tidak ditemukan' });
    }
    res.json({ status: 'success', data });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.getStats = async (req, res) => {
  try {
    const totalData = await CampusVehicle.count();

    const byKategori = await CampusVehicle.findAll({
      attributes: [
        'kategori',
        [sequelize.fn('COUNT', sequelize.col('id')), 'jumlah'],
        [sequelize.fn('AVG', sequelize.col('emisi_co2_per_km')), 'rata_rata_emisi'],
        [sequelize.fn('AVG', sequelize.col('efisiensi_km_per_liter')), 'rata_rata_efisiensi']
      ],
      group: ['kategori'],
      raw: true
    });

    const byBahanBakar = await CampusVehicle.findAll({
      attributes: [
        'bahan_bakar',
        [sequelize.fn('COUNT', sequelize.col('id')), 'jumlah'],
        [sequelize.fn('AVG', sequelize.col('emisi_co2_per_km')), 'rata_rata_emisi']
      ],
      group: ['bahan_bakar'],
      raw: true
    });

    res.json({
      status: 'success',
      data: {
        total_data: totalData,
        per_kategori: byKategori,
        per_bahan_bakar: byBahanBakar
      }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};