const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const trainingRoutes = require('./routes/trainingRoutes');
const loanRoutes = require('./routes/loanRoutes');
const cloudinary = require('cloudinary').v2;


// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;


// cors
app.use(cors({
  origin: ['http://localhost:3001/'],
  credentials: true
}));

// app.use(cors({
//   origin: ['http://localhost:3001/', 'https://she-path-front.vercel.app'],
//   credentials: true
// }));

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const config = require('./config/config.json');
const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(process.env.DB, {
  dialect: 'postgres',
  logging: false,
});

// Associations
Object.keys(sequelize.models).forEach((modelName) => {
  if (sequelize.models[modelName].associate) {
    sequelize.models[modelName].associate(sequelize.models);
  }
});

// Sync database and start server
sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
  console.log('Registered models:', Object.keys(sequelize.models)); // Debug line

  // Define routes after sync
  app.get('/', (req, res) => {
    res.send('Fosec Backend Running');
  });
  app.use('/api/users', userRoutes);
  app.use('/api/products', productRoutes);
  app.use('/api/trainings', trainingRoutes);
  app.use('/api/loans', loanRoutes);

  // Cloudinary
cloudinary.config({ 
  cloud_name: process.env.CLOUDNAME, 
  api_key: process.env.APIKEY, 
  api_secret: process.env.APISECRET 
});

  // Start server
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch((err) => {
  console.error('Database sync failed:', err);
});

module.exports = { sequelize };