const { Pool } = require('pg');
console.log('pool says:')
console.log("db_Name:" + db_Name)
console.log("db_Username" + db_Username)
console.log("db_Password" +db_Password)
console.log("db_Host" +db_Host)
console.log("db_Port" +db_Port)
//all the following should be read from environment variables
module.exports = new Pool({
    host: process.env.DATABASE_HOST, //or whereever the db is hosted
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT
})