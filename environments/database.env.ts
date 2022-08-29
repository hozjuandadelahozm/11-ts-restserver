import dotenv from "dotenv";
dotenv.config();
export const database = {
  DB_DIALECT: process.env.DB_DIALECT as string,
  DB_USER: process.env.DB_USER as string,
  DB_PASS: process.env.DB_PASS as string,
  DB_HOST: process.env.DB_HOST as string,
  DB_PORT: process.env.DB_PORT as string,
  DB_NAME: process.env.DB_NAME as string 
};