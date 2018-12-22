const express = require('express');
const app = express();


app.use(express.static('build', {}));

app.listen(3000, function () {
    console.log('listening on 3000');
});