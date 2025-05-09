const { Pool } = require('pg');
console.log('pool says:')
console.log("db_Name:" + process.env.DATABASE_NAME)
console.log("db_Username" + process.env.DATABASE_USERNAME)
console.log("db_Password" +process.env.DATABASE_PASSWORD)
console.log("db_Host" +process.env.DATABASE_HOST)
console.log("db_Port" +process.env.DATABASE_PORT)
//all the following should be read from environment variables
module.exports = new Pool({
    host: process.env.DATABASE_HOST, //or whereever the db is hosted
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
})