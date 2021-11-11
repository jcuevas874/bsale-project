require("dotenv").config();
const { Sequelize, Op } = require("sequelize");
/*
 * To manage DB connection
 * Requires to have the followind env variables set:
 * DBHOST
 * USERDB
 * PASSWORD
 * DB
 * DIALECT
 * DBPORT
*/
const { DBHOST, USERDB, PASSWORD, DB, DIALECT, DBPORT } = process.env


const sequelize = new Sequelize(DB, USERDB, PASSWORD, {
    host: DBHOST,
    dialect: DIALECT,
    port: DBPORT
});

/*
   * Handles the connection and incase when connection is not ready yet
   * by throwing an error.
*/

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

connect();

module.exports = sequelize