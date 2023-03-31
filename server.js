const express = require('express');
const app=express();
const pokemons = require('./models/pokemon.js');
const PORT=process.env.PORT||3000;
app.set('view engine', 'jsx');
  app.engine('jsx', require('express-react-views').createEngine());

app.get('/',(req,res)=>{
    res.send('Welcome to the Pokemon App');
});

app.get('/pokemon',(req,res)=>{
    res.render('Index');
});


app.listen(PORT,()=> {
    console.log(`Server is running on port ${PORT}`);
});