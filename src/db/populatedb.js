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

async function main() {
    console.log('seeding...');
    const client = new Client({
        connectionString: `postgresql://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:5432/${process.env.DATABASE_NAME}`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done');
}

main();