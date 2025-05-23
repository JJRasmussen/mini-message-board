const { Pool } = require('pg');

//all the following should be read from environment variables
module.exports = new Pool({
    host: process.env.DATABASE_HOST, //or whereever the db is hosted
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
})