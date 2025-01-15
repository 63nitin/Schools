import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // Username
  process.env.DB_PASS, // Password
  {
    host: process.env.DB_HOST || 'localhost', // Hostname (default: localhost)
    dialect: 'mysql', // Dialect
    port: process.env.DB_PORT || 3306, // Port (default: 3306)
  }
);

export default sequelize;
