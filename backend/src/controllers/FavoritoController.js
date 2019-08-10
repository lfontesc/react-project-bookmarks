const Favorito = require('../models/Favoritos')

module.exports = {
  async store(req,res) {
    const { title, url, idCategoria } = req.body
    const fav = await Favorito.create({
      title,
      url,
      idCategoria
    })
    return res.json(fav)
  }
}