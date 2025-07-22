require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./models');

const authRoutes = require('./routes/authRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);

(async () => {
  try {
    await db.sequelize.sync();
    console.log('Database synced');
  } catch (error) {
    console.error('DB Sync Error:', error);
  }
})();

module.exports = app;
