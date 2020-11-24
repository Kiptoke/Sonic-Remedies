const express = require('express');
const path = require('path')
const app = express();

//Serving index html file when at the root directory
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//PORT taken from environment variable
const port = process.env.PORT || 6969
app.listen(port, () => console.log(`listening on port ${port}...`));