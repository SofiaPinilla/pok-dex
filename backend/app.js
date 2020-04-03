import Sequelize from 'sequelize';
import express from 'express';
const PORT =process.env.PORT || 3001
const app=express();
const sequelize = new Sequelize('mysql://root:@localhost:3306/pokedex');

//error del cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get('/',(req,res)=>{
    sequelize.query(`SELECT * FROM pokemons`)
    .then(results=>res.send(results[0]))
    .catch(error=>{
        console.error(error)
        res.status(500).send('We had a problem trying to load the pokemons')
    })
})
app.get('/:page',(req,res)=>{
    const start=req.params.page*20;
    sequelize.query(`SELECT * FROM pokemons LIMIT ${start},20`)
    .then(results=>res.send(results[0]))
    .catch(error=>{
        console.error(error)
        res.status(500).send('We had a problem trying to load the pokemons')
    })
})

app.listen(PORT,()=>console.log('server runing on '+PORT))