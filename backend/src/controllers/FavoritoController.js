const Favorito = require('../models/Favoritos')

module.exports = {

  //busca all
  async index(req,res) {
    const fav = await Favorito.find()
    return res.json(fav)
  },

  //cadastra
  async store(req,res) {
    const { title, url, idCategoria } = req.body
    const fav = await Favorito.create({
      title,
      url,
      idCategoria
    })
    return res.json(fav)
  },

  //deleta
  async delete(req,res){
    const fav = await Favorito.findByIdAndRemove(req.params.favoritoId)
    return res.json({Message:"Favorito Deletado com Sucesso", Data: fav})
  }
}