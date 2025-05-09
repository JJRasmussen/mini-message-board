const { Pool } = require('pg');
console.log('pool says:')
console.log("db_Name:" + process.env.db_Name)
console.log("db_Username" + process.env.db_Username)
console.log("db_Password" +process.env.db_Password)
console.log("db_Host" +process.env.db_Host)
console.log("db_Port" +process.env.db_Port)
//all the following should be read from environment variables
module.exports = new Pool({
    host: process.env.DATABASE_HOST, //or whereever the db is hosted
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
})