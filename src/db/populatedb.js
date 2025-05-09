const { Client } = require('pg');
require('dotenv').config({ path: '../.env' });

const timeOfPost = new Date().toISOString();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR ( 255 ),
    author VARCHAR ( 255 ),
    added VARCHAR ( 255 )
);

INSERT INTO messages (text, author, added) VALUES
    ('Hi There!', 'Amando', '${timeOfPost}'),
    ('Hello World!', 'Charles', '${timeOfPost}');    
`
const db_Name = process.env.DATABASE_NAME;
const db_Username = process.env.DATABASE_USERNAME;
const db_Password = process.env.DATABASE_PASSWORD;
const db_Host = process.env.DATABASE_HOST;
const db_Port = process.env.DATABASE_PORT;

async function main() {
    console.log('seeding...');
    const client = new Client({
        connectionString: `postgresql://${db_Username}:${db_Password}@${db_Host}:${db_Port}/${db_Name}?sslmode=require`, //sslmode=require is needed when externally acessing Render db
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done');
}

main();