const pool = require('./pool');

async function createNewMessage(messageText, messageUser){
    await pool.query(
        'INSERT INTO messages (text, author, added) VALUES ($1, $2, $3)', [messageText, messageUser, new Date()]
    );
}

async function getAllMessages(){
    const { rows } = await pool.query(
        'SELECT text FROM messages'
    );
    return rows;
}

async function getMessageDetails(id){    
    console.log("messageDetailsGet says that id is:")
    console.log(id)
    const { rows } = await pool.query(
        'SELECT * FROM messages WHERE id = ($1)',[id + 1] 
    );
    return rows[0];
};

module.exports = {
    createNewMessage,
    getAllMessages,
    getMessageDetails
}