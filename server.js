const express = require('express');
const path = require('path');
const cities = require('./src/assets/cities');
const app = express();


app.use(express.static('build', {
    maxAge: '1y',
    immutable: true
}));
app.get('/api/cities', function (req, res) {
    res.send(cities);
});


app.get('/*', function (req, res) {//front-end routing
    res.sendFile(path.resolve('build/index.html'));
});


app.listen(8080, function () {
    console.log('listening on 8080');
});