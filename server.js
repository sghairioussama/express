const express = require('express');

// create instance
const app = express();

const pug = require ('pug')

const WorkingHours = require('./middlewear/WorkingHours')




app.use(express.static('public'))
app.set('view engine','pug')
app.set('views','views')
app.get('/',WorkingHours,function(req,res){
    res.render('index',{title:'home page'})
})
app.get('/error',function(req,res){
    res.render('error',{title:'error page'})
})
app.get('/contactus',WorkingHours,function(req,res){
    res.render('contactus',{title:'contactus page'})
})









const PORT = 1998 ;
app.listen(1998,error=>{
    if (error){console.log(error);}
    else {
        console.log(`Serveur is Running on ${PORT}`)
    }
})

