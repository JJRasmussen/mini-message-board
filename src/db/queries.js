const pool = require('./pool');

async function createNewMessage(messageText, messageUser){
    await pool.query(
        'INSERT INTO messages (text, user, added) VALUES ($1, $2, $3)', [messageText, messageUser, new Date()]
    );
}

async function getMessageDetails(id){    
    const { row } = await pool.query(
        'SELECT * FROM messages WHERE id = ($1)',[id]
    );
    return row;
};

module.exports = {
    createNewMessage,
    getMessageDetails
}