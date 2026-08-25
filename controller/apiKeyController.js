const { ApiKey } = require('../models');
const generateApiKey = require('../utils/generateApiKey');

exports.createApiKey = async (req, res) => {
  try {
    const { label } = req.body;
    const userId = req.user.id;

    const newKey = await ApiKey.create({
      user_id: userId,
      key: generateApiKey(),
      label: label || 'Default Key'
    });

    res.status(201).json({
      status: 'success',
      message: 'API key berhasil dibuat. Simpan key ini baik-baik, tidak akan ditampilkan penuh lagi setelah ini.',
      data: {
        id: newKey.id,
        key: newKey.key,
        label: newKey.label,
        created_at: newKey.created_at
      }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.listApiKeys = async (req, res) => {
  try {
    const userId = req.user.id;
    const keys = await ApiKey.findAll({
      where: { user_id: userId },
      order: [['id', 'DESC']]
    });

    const masked = keys.map((k) => ({
      id: k.id,
      label: k.label,
      key_preview: `${k.key.slice(0, 8)}...${k.key.slice(-4)}`,
      is_active: k.is_active,
      request_count: k.request_count,
      last_used_at: k.last_used_at,
      created_at: k.created_at
    }));

    res.json({ status: 'success', total_data: masked.length, data: masked });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.revokeApiKey = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const key = await ApiKey.findOne({ where: { id, user_id: userId } });
    if (!key) {
      return res.status(404).json({ status: 'fail', message: 'API key tidak ditemukan' });
    }

    await key.update({ is_active: false });

    res.json({ status: 'success', message: 'API key berhasil dinonaktifkan' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};