import { Sequelize } from 'sequelize';
import { database } from './../environments/database.env';

const db = new Sequelize(`${database.DB_DIALECT}://${database.DB_USER}:${database.DB_PASS}@${database.DB_HOST}:${database.DB_PORT}/${database.DB_NAME}`);

export default db;