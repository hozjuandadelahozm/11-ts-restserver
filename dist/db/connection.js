"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_env_1 = require("./../environments/database.env");
const db = new sequelize_1.Sequelize(`${database_env_1.database.DB_DIALECT}://${database_env_1.database.DB_USER}:${database_env_1.database.DB_PASS}@${database_env_1.database.DB_HOST}:${database_env_1.database.DB_PORT}/${database_env_1.database.DB_NAME}`);
exports.default = db;
//# sourceMappingURL=connection.js.map