const { Router } = require('express');

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

const indexRouter = Router();

indexRouter.get('/', (req, res) => res.render('index', {title: 'Mini Messageboard', messages: messages }));
indexRouter.post('/new', (req, res) => {
    const { messageText, messageUser } = req.body;
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect('/');
});
indexRouter.get('/details', (req,res) => {    
    const id = parseInt(req.query.id); 
    if (messages[id]){
        res.render('details', { message: messages[id] });    
    } else {
        res.status(404).send("Message not found");
    }
});

module.exports = indexRouter;