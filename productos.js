const express = require('express');

const {Router} = express;
const router = Router();

const Contenedor = require('./clase');
const productos = new Contenedor('./productos.txt');

// devuelve todos los productos
    router.get('/', async (req, res)=>{
            const data = await productos.getAll();
            res.send(data) 
        })

//devuelve 1 prod según id
    router.get('/:id', async (req, res)=>{
        const {id} = req.params;
        const data = await productos.getById(id);
        res.send({producto:data})
    })
    

//recibe y agrega un producto, y lo devuelve con su id asignado
    router.post('/', async (req, res)=>{
        const {title, price, thumbnail} = req.body; 
        let agregarProd = await productos.save({title, price, thumbnail});
            res.send({agregado: agregarProd});
        })
    

//recibe y actualiza un producto según su id
    router.put('/:id', async (req, res)=>{
            const {id} = req.params;
            const {title, price, thumbnail} = req.body;
            let reemplazo = await productos.replaceById(id, {title, price, thumbnail})
            res.send({prodReemplazado: reemplazo})
        })
    

    //elimina 1 prod según su id
    router.delete('/:id', async (req, res)=>{
            const {id} = req.params;
            let eliminarProd = await productos.deleteById(id);
            res.send({eliminadoID: id})
    })

module.exports = router;