'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ApiKey extends Model {
    static associate(models) {
      ApiKey.belongsTo(models.User, { foreignKey: 'user_id', as: 'owner' });
      ApiKey.hasMany(models.ApiRequestLog, { foreignKey: 'api_key_id', as: 'logs' });
    }
  }
  ApiKey.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    key: {
      type: DataTypes.STRING(80),
      allowNull: false,
      unique: true
    },
    label: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'Default Key'
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    request_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    last_used_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'ApiKey',
    tableName: 'api_keys',
    timestamps: false
  });
  return ApiKey;
};