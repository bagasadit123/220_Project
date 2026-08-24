'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CampusVehicle extends Model {}
  CampusVehicle.init({
    kategori: DataTypes.STRING,
    tipe_kendaraan: DataTypes.STRING,
    kapasitas_cc: DataTypes.INTEGER,
    bahan_bakar: DataTypes.STRING,
    efisiensi_km_per_liter: DataTypes.DECIMAL(5, 2),
    emisi_co2_per_km: DataTypes.DECIMAL(6, 2)
  }, {
    sequelize,
    modelName: 'CampusVehicle',
    tableName: 'campus_vehicles',
    timestamps: false
  });
  return CampusVehicle;
};