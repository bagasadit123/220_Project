const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/db'); 
const { User, CampusVehicle } = require('./models');
require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to CampusVehicle SaaS API Service' });
});

app.use('/api', routes);

const PORT = process.env.PORT || 3000;

// Sinkronkan tabel database lalu jalankan server
sequelize.sync().then(() => {
  console.log('Database synced successfully');
  if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  }
});

module.exports = app;