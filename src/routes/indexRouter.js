const { Router } = require('express');
const { createNewMessageGet, createNewMessagePost, messageDetailsGet } = require('../controllers/messageController')

const indexRouter = Router();

indexRouter.get('/', createNewMessageGet);
indexRouter.post('/new', createNewMessagePost);
indexRouter.get('/details', messageDetailsGet);

module.exports = indexRouter;

