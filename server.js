const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

// creando un middleware
app.use( express.static(__dirname + '/public'));

// EXPRESS HBS engine 
hbs.registerPartials( __dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    // res.send(salida);
    res.render('home', {
        nombre: 'luis garcia'
    })
})

app.get('/about', function (req, res) {
    // res.send(salida);
    res.render('about', {
        nombre: 'luis garcia'
    })
})

// app.get('/data', function (req, res) {
//     res.send('Hello Data');
// })
 
app.listen(port, () => {
    console.log('Escuchando en el puerto ' + port);
});