const express = require('express');
const app=express();
const pokemon = require('./models/pokemon.js');
const PORT=process.env.PORT||3000;

app.get('/',(req,res)=>{
    res.send('Welcome to the Pokemon App');
});

app.get('/pokemon',(req,res)=>{
    res.send(pokemon);
});


app.listen(PORT,()=> {
    console.log(`Server is running on port ${PORT}`);
});