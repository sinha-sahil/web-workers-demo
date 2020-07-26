
const express = require('express');
const path = require('path');
app = express();
port = process.env.port || 4200;

app.listen(port)
app.use(express.static('build'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});