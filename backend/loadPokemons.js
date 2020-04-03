// import axios from 'axios';
// import Sequelize from 'sequelize';
// const sequelize = new Sequelize('mysql://root:@localhost:3306/pokedex')
// axios.get('https://www.pokemon.com/es/api/pokedex/kalos')
// .then(res=>{
//     const pokemons=res.data
//     .filter((pokemon,index,self)=>index === self.findIndex(p=>p.name===pokemon.name))
//     .sort((a,b)=>a.number-b.number);

//     for (const pokemon of pokemons) {
//         sequelize.query(`INSERT INTO pokemons (name, number, image_path)
//         VALUES ('${pokemon.name}', ${pokemon.number}, '${pokemon.ThumbnailImage}');`)
//     }
// })