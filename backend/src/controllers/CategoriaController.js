const Categoria = require('../models/Categoria')

module.exports = {

  //Procurar todas as categorias no banco
  findAll(req ,res) {
    Categoria.find().then(categoria => {
      res.send(categoria);
    })
  },

  async index(req,res) {
    const cat = await Categoria.find()
    return res.json(cat)
  },

  async store(req,res) {
    const { name, icon } = req.body
    const cat = await Categoria.create({
      name,
      icon
    })
    console.log(name,icon)
    return res.json(cat)
  }
}