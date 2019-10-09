const express = require('express')
const routes = express.Router()

const CategoriaController = require('./controllers/CategoriaController')
const FavoritoController = require('./controllers/FavoritoController')
const UserController = require('./controllers/UserController')

routes.get('/',(req,res) => {
  return res.json({"Ola":'Seja bem vindo a API do BookMarks', "/api/addcategoria": "adicionar nova categoria", "/api/addfavorito": "adicionar novos favoritos", "/api/categorias": "Listar todas a Categorias"})
});

//cadastrar
routes.post('/api/addcategoria', CategoriaController.store)
routes.post('/api/addfavorito', FavoritoController.store)
routes.post('/api/user', UserController.store)
// listar 
routes.get('/api/categorias', CategoriaController.index)
routes.get('/api/favoritos', FavoritoController.index)
routes.get('/api/users', UserController.index)
//listar unico
routes.get('/api/categoria/:categoriaId', CategoriaController.findOne)
// Alterar
    //não fazer por enquanto

// Deletar
routes.delete('/deleteFavorito/:favoritoId', FavoritoController.delete)
routes.delete('/deleteCategoria/:categoriaId', CategoriaController.delete)
module.exports = routes;