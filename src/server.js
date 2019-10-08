const express = require('express');
const path = require('path');
const app = express();

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../dist/pages/index/index.html'));
});

app.use(express.static(path.resolve(__dirname, 'assets')));
app.use(express.static(path.resolve(__dirname, '../dist/pages/')));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
