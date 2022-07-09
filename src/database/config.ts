import { Dialect, Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    dialect: process.env.DB_DIALECT as Dialect,
  }
);

export default sequelize;
