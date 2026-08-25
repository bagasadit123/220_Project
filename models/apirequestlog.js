'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ApiRequestLog extends Model {
    static associate(models) {
      ApiRequestLog.belongsTo(models.ApiKey, { foreignKey: 'api_key_id', as: 'apiKey' });
    }
  }
  ApiRequestLog.init({
    api_key_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    endpoint: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    method: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    status_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ip_address: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    requested_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'ApiRequestLog',
    tableName: 'api_request_logs',
    timestamps: false
  });
  return ApiRequestLog;
};