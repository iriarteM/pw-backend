const express = require('express');
const bodyParser = require("body-parser")
const path = require('path');

//Registrar apis
const countries = require('./api/movies/country')

const app = express()
const port = 3080

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.json());

app.use('/api/countries', countries)

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './static/index.html'));
});

app.listen(port, () => {
    console.log(`Server escuchando en el port::${port}`);
});

