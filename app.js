const express = require('express');
const app = express();
//set up listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    res.send ('<p >home page </p>');
});