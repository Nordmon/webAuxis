
const mongoose = require('mongoose');
const MongoDbURI='mongodb://127.0.0.1:27017/local';
const {Schema}=mongoose;
 
mongoose.connect(MongoDbURI)
.then(() => {
    console.log('Conexión exitosa a MongoDB');
    
    // Aquí puedes realizar operaciones con la base de datos utilizando Mongoose

  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB:', err);
  });
  
const contactoSchema =new Schema({
    nombre:String,
    numero:Number,
    direccion:String,
    email:String

})


const Contacto= mongoose.model('contactos', contactoSchema);

const  agregarContacto=(req,res)=>{

  const contacto =new Contacto({

    nombre:req.body.nombre,
    numero:Number(req.body.numero),
    direccion:req.body.direccion,
    email:req.body.email
  })
  contacto.save()
  .then(re=>{

    res.redirect('/');
  })

}

const todosContactos = async (modelo) => {
  const resultados = await modelo.find({});
  return resultados;
};
const borrarContacto= (id,modelo,res)=>{

  modelo.findByIdAndRemove(id)
  .then(()=>{

    res.redirect('/')
  })
  .catch(err=>{

    console.error('Error al eliminar el contacto:', err);
    res.status(500).send('Error al eliminar el contacto');
  })

};



module.exports =  {Contacto,borrarContacto, agregarContacto,todosContactos};

