const express = require('express');
const path = require('node:path');
const indexRouter = require('./routes/indexRouter');
const app = express();

//set view engine as EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

//set port for local host
const PORT = process.env.PORT || 3000;

app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`mini-message-board initiated - listening on port ${PORT}`)
});