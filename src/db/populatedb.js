const pool = require('./pool');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR ( 255 )
    user VARCHAR ( 255 )
    added VARCHAR ( 255 )
);

INSERT INTO messages (text, user, added) VALUES
    ('Hi There!', 'Amando', ${new Date()}),
    ('Hello World!', 'Charles', ${new Date()});    
`

async function main() {
    console.log('seeding...');
    const client = new Client({
        connectionString: `postgresql://juul:Uqoqma7n@${process.env.DATABASE_HOST}:5432/top_users`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done');
}

main();