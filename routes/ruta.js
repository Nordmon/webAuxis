const express = require('express');
const router = express.Router();
const {agregarContacto,Contacto,todosContactos} = require('../database.js');

router.use(express.urlencoded({extended:true}));


router.post('/agregar', (req, res) => {
    console.log('estoy aqui');
    agregarContacto(req, res);

})


module.exports.router=router;