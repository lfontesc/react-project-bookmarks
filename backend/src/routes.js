const express = require('express')
const routes = express.Router()

const CategoriaController = require('./controllers/CategoriaController')
const FavoritoController = require('./controllers/FavoritoController')
const ListaCategoria = require('./controllers/ListaCategoria')

routes.get('/',(req,res) => {
  return res.json({"Ola":'Seja bem vindo a API do BookMarks', "/categorias": "testando"})
});

//cadastrar categoria
routes.post('/categorias', CategoriaController.store)
routes.post('/favoritos', FavoritoController.store)
routes.get('/listacategorias', CategoriaController.index)
module.exports = routes;