const express = require('express');
const {router} = require('./routes/ruta.js');
const {Contacto,agregarContacto,borrarContacto,todosContactos} = require('./database.js');


const app=express()

app.set('views','./public');
app.set('view engine','ejs')

app.use(express.static('./public'));
app.use(express.urlencoded({extended:true}));

//app.use(express.static('./public'));

app.post('/agregar', (req, res) => {
    
    agregarContacto(req, res);

})


const puerto=process.env.PORT || 3000;

app.listen(puerto, ()=>{
    
    console.log("servidor iniciado http://localhost:"+puerto);


});


app.get('/', async (req, res)=>{

    let contactos = await todosContactos(Contacto);
    
    res.render('index',{contactos});
})  

app.post('/borrar', (req, res)=>{

    let id = req.body.contactoId;
    borrarContacto(id,Contacto,res)
    

})

app.use((req,res)=>{

    res.status(404).send('No se Encntro tu pagina');

    //CON ESTA INSTRUCCION MANEJA PETICIONES QUE NO EXISTEN
}) 
