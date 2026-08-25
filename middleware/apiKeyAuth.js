const { ApiKey, ApiRequestLog } = require('../models');

const verifyApiKey = async (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey) {
    return res.status(401).json({
      status: 'fail',
      message: 'API key tidak ditemukan. Sertakan header x-api-key.'
    });
  }

  try {
    const keyRecord = await ApiKey.findOne({ where: { key: apiKey } });

    if (!keyRecord) {
      return res.status(403).json({
        status: 'fail',
        message: 'API key tidak valid.'
      });
    }

    if (!keyRecord.is_active) {
      return res.status(403).json({
        status: 'fail',
        message: 'API key telah dinonaktifkan.'
      });
    }

    req.apiKeyRecord = keyRecord;

    keyRecord.increment('request_count').catch(() => {});
    keyRecord.update({ last_used_at: new Date() }).catch(() => {});

    res.on('finish', () => {
      ApiRequestLog.create({
        api_key_id: keyRecord.id,
        endpoint: req.originalUrl,
        method: req.method,
        status_code: res.statusCode,
        ip_address: req.headers['x-forwarded-for'] || req.socket.remoteAddress
      }).catch(() => {});
    });

    next();
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

module.exports = verifyApiKey;