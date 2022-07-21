import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import path from 'path';

const sequelize = new Sequelize(
  {
    database:   process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password:   process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    dialect: process.env.DB_DIALECT as Dialect,
    models: [path.resolve(__dirname, '../app/models')]
  }
);

export default sequelize;
