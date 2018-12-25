const express = require('express');
const cities = require('./src/assets/cities');
const app = express();


// app.use(express.static('build', {}));
app.get('/api', function (req, res) {
    console.log(888);
    res.send(cities);
});


app.listen(8080, function () {
    console.log('listening on 8080');
});