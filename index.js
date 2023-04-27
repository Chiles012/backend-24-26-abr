const express = require('express');
const app = express();
const port = 3000

// localhost:3000/usuario 
app.get('/', (req, res) => {
    console.log('Hola Mundo');
    res.json({
        result: 'Hola Mundo'
    }).send()
})

app.get('/params/:nombre', (req, res) => {
    console.log(req.params.nombre)
    res.send('Hola ' + req.params.nombre);
})

app.get('/query', (req, res) => {
    console.log(req.query);
    res.send(req.query.titulo);
})

app.put('/params/:nombre', (req, res) => {
    console.log('PUT actualizar nombre ' + req.params.nombre);

    // Actualizar informacion

    res.send('Usuario actualizado');
})

app.delete('/params/:nombre', (req, res) => {
    console.log('Delete usuario' + req.params.nombre);

    // Eliminacion de la inforamcion

    res.send('Usuario eliminado')
})

app.post('/params/:nombre', (req, res) => {
    console.log('Creacion de un usuario');

    // Agregar a a bd

    res.send('Usuario agregado')
})

app.listen(port, () => {
    console.log('Se inicio el servidor en el puerto ' + 3000)
})