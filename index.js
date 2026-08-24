const express = require('express');
const routes = require('./routes'); // Mengimpor folder routes (otomatis membaca routes/index.js)
const { sequelize } = require('./models');
require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to CampusVehicle SaaS API Service' });
});

// Menggunakan kumpulan endpoint dari folder routes
app.use('/api', routes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log('Database connected & synced');
  if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  }
});

module.exports = app;