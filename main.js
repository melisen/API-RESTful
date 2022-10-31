const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: true}))

app.use(express.json())

const productosRouter = require('./productos.js');
app.use('/api/productos', productosRouter);

app.use('/static', express.static(__dirname + "/assets"));

const server = app.listen(PORT, ()=>{
    console.log('servidor de express iniciado')
})