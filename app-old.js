const http = require('http');

http.createServer( (req, res) => {

    res.writeHead(200, {'Content-Type': 'aplication/json'});

    let salida = {
        nombre: 'Luis',
        edad: 37,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    // res.write('hola mundo');
    // terminando la respuesta 
    res.end();
})
.listen(8080);

console.log('escuchando el puerto 8080');