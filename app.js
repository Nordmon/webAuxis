const express = require('express');
const app=express()

app.listen(process.env.PORT || 3000, ()=>{
    
    console.log("servidor iniciado localhost:3000");


});

app.use(express.static('./public/'));
app.use(express.static('./public/assets/js/'));
app.use(express.static('./public/assets/css/'));

app.get('/',function(req,res){

    res.render('index')
     
})