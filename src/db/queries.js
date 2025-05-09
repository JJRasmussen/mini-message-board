const pool = require('./pool');

async function createNewMessage(messageText, messageUser){
    await pool.query(
        'INSERT INTO messages (text, author, added) VALUES ($1, $2, $3)', [messageText, messageUser, new Date()]
    );
}

async function getAllMessages(){
    const { rows } = await pool.query(
        'SELECT text, id FROM messages'
    );
    return rows;
}

async function getMessageDetails(id){    
    const { rows } = await pool.query(
        'SELECT * FROM messages WHERE id = ($1)',[id] 
    );
    return rows[0];
};

module.exports = {
    createNewMessage,
    getAllMessages,
    getMessageDetails
}