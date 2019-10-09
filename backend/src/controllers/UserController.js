const User = require('../models/User')

module.exports = {
  async index(req,res) {
    const cat = await User.find()
    return res.json(cat)
  },
  //cadastra
  async store(req,res) {
    const { name, email } = req.body
    const user = await User.create({
      name,
      email
    })
    return res.json(user)
  },
  //deleta
  async delete(req,res){
    const user = await User.findByIdAndRemove(req.params.userId)
    return res.json({Message:"Usuario Deletado com Sucesso", Data: user})
  }

}