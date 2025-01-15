import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const School = sequelize.define('School', {
  name: DataTypes.TEXT,
  address: DataTypes.TEXT,
  city: DataTypes.TEXT,
  state: DataTypes.TEXT,
  contact: DataTypes.BIGINT,
  image: DataTypes.TEXT,
  email_id: DataTypes.TEXT,
});

export default School; // Use ES module export

